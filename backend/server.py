from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ==== Models ====
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ChatRequest(BaseModel):
    session_id: str
    message: str


class ChatMessageStore(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str
    role: str
    content: str
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ==== System Prompt for Design Critique AI ====
DESIGN_CRITIQUE_SYSTEM_PROMPT = """You are the "Design Critique AI" — a warm, articulate design mentor embedded inside a UI/UX designer's personal portfolio. The portfolio is called "Botanical Canvas" and it fuses organic botanical elements with Figma-style design tool aesthetics.

Your job is to give practical, insightful critique on UI/UX design ideas, screens, layouts, typography, color choices, information architecture, and creative direction. You may:
- Ask a clarifying question first if the user's request is vague
- Offer 2-4 specific, actionable pieces of feedback
- Suggest small experiments the designer could try
- Reference well-known design heuristics (Nielsen, Gestalt, Fitts's law) when relevant
- Occasionally weave in gentle floral / botanical metaphors ("let this section breathe like a garden")

Keep responses concise (3-6 short paragraphs max), thoughtful, and encouraging. Use light markdown (**bold**, - bullets) for scanability. Never dump generic tips — always ground your feedback in what the user asked."""


# ==== Routes ====
@api_router.get("/")
async def root():
    return {"message": "Botanical Canvas API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.get("/chat/history/{session_id}")
async def get_chat_history(session_id: str):
    messages = await db.chat_messages.find(
        {"session_id": session_id},
        {"_id": 0}
    ).sort("timestamp", 1).to_list(500)
    return {"session_id": session_id, "messages": messages}


@api_router.post("/chat/stream")
async def chat_stream(req: ChatRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="LLM key not configured")

    # Lazy import to avoid startup crash if lib missing
    from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone

    # Save user message
    user_doc = ChatMessageStore(
        session_id=req.session_id, role="user", content=req.message
    ).model_dump()
    await db.chat_messages.insert_one(user_doc)

    # Load prior history from DB and rebuild chat context via system message
    history = await db.chat_messages.find(
        {"session_id": req.session_id},
        {"_id": 0}
    ).sort("timestamp", 1).to_list(200)

    chat = LlmChat(
        api_key=EMERGENT_LLM_KEY,
        session_id=req.session_id,
        system_message=DESIGN_CRITIQUE_SYSTEM_PROMPT,
    ).with_model("anthropic", "claude-sonnet-4-6")

    # Feed prior turns (excluding the one we just inserted) so context persists across requests
    prior_turns = [m for m in history if m['id'] != user_doc['id']]

    async def event_generator():
        collected = []
        try:
            # Replay history: for each previous user turn, send via send_message so lib appends to internal history
            # Simpler: prepend recent context into the current user message if there is prior history
            context_prefix = ""
            if prior_turns:
                convo = []
                for m in prior_turns[-10:]:
                    role_label = "User" if m['role'] == 'user' else "You"
                    convo.append(f"{role_label}: {m['content']}")
                context_prefix = (
                    "[Prior conversation for context — do not repeat, just continue naturally]\n"
                    + "\n".join(convo)
                    + "\n\n[Current message]\n"
                )

            full_message = context_prefix + req.message

            async for event in chat.stream_message(UserMessage(text=full_message)):
                if isinstance(event, TextDelta):
                    collected.append(event.content)
                    yield f"data: {event.content}\n\n"
                elif isinstance(event, StreamDone):
                    break

            assistant_text = "".join(collected).strip()
            if assistant_text:
                asst_doc = ChatMessageStore(
                    session_id=req.session_id,
                    role="assistant",
                    content=assistant_text,
                ).model_dump()
                await db.chat_messages.insert_one(asst_doc)
            yield "data: [DONE]\n\n"
        except Exception as e:
            logger.exception("chat stream failed")
            yield f"data: [ERROR] {str(e)}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
