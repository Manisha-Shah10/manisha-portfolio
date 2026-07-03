import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Flower2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function newSessionId() {
  const key = "botanical-chat-session";
  let id = localStorage.getItem(key);
  if (!id) {
    id = "s_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem(key, id);
  }
  return id;
}

const SUGGESTIONS = [
  "Critique my hero section idea",
  "How do I pick a color palette?",
  "Is my onboarding flow too long?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi, I'm your **Design Critique AI** 🌿\n\nShare a design idea, screenshot description, or a specific UX challenge — I'll offer honest, useful feedback in a few paragraphs.",
    },
  ]);
  const [streaming, setStreaming] = useState(false);
  const sessionId = useRef(newSessionId());
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, streaming]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || streaming) return;
    setInput("");
    const userMsg = { id: `u_${Date.now()}`, role: "user", content: text };
    const asstId = `a_${Date.now()}`;
    setMessages((m) => [...m, userMsg, { id: asstId, role: "assistant", content: "" }]);
    setStreaming(true);

    try {
      const res = await fetch(`${API}/chat/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId.current, message: text }),
      });
      if (!res.body) throw new Error("No stream body");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() || "";
        for (const part of parts) {
          if (!part.startsWith("data:")) continue;
          const payload = part.slice(5).trimStart();
          if (payload === "[DONE]") continue;
          if (payload.startsWith("[ERROR]")) {
            setMessages((m) => m.map((mm) => mm.id === asstId ? { ...mm, content: mm.content + "\n\n" + payload } : mm));
            continue;
          }
          setMessages((m) => m.map((mm) => mm.id === asstId ? { ...mm, content: mm.content + payload } : mm));
        }
      }
    } catch (e) {
      setMessages((m) => m.map((mm) => mm.id === asstId ? { ...mm, content: "Something went wrong reaching the critique AI. Try again in a moment." } : mm));
    } finally {
      setStreaming(false);
    }
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Trigger */}
      <motion.button
        data-testid="chatbot-trigger"
        data-cursor
        data-cursor-label="critique"
        data-cursor-color="#A259FF"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[70] flex items-center gap-2 px-4 py-3 shadow-[0_10px_28px_rgba(162,89,255,0.35)]"
        style={{ background: "#A259FF", color: "#fff", borderRadius: 0 }}
        aria-label="Open Design Critique AI"
      >
        <Sparkles className="w-4 h-4" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Critique AI</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed z-[80] bg-white border border-[#E5E5E5] shadow-[0_30px_60px_rgba(0,0,0,0.18)]
                       bottom-20 right-4 md:right-8 md:bottom-24
                       w-[calc(100vw-2rem)] md:w-[380px] h-[560px] max-h-[80vh] flex flex-col"
            data-testid="chatbot-panel"
          >
            <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5E5]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center" style={{ background: "#A259FF" }}>
                  <Flower2 className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <div className="text-[13px] font-medium text-[#1A1A1A]">Design Critique AI</div>
                  <div className="text-[10px] font-mono text-[#666]">botanical/canvas · v1</div>
                </div>
              </div>
              <button
                data-testid="chatbot-close"
                data-cursor
                data-cursor-label="close"
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center hover:bg-[#F5F5F5]"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-[#666]" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FDFCFA]" data-testid="chatbot-messages">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 text-[13.5px] leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-[#1A1A1A] text-white"
                        : "bg-white border border-[#E5E5E5] text-[#1A1A1A]"
                    }`}
                  >
                    {m.content || (streaming ? <span className="inline-block w-1.5 h-3.5 bg-[#A259FF] align-middle animate-blink" /> : null)}
                  </div>
                </div>
              ))}
              {messages.length === 1 && !streaming && (
                <div className="pt-1 space-y-1.5">
                  <div className="mono-label mb-1">Try asking</div>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      data-testid={`chatbot-suggest-${s.slice(0, 8)}`}
                      onClick={() => { setInput(s); setTimeout(send, 20); }}
                      className="block w-full text-left text-[12.5px] px-2 py-1.5 border border-[#E5E5E5] hover:border-[#1ABCFE] hover:text-[#1ABCFE] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-[#E5E5E5] p-3 bg-white">
              <div className="flex items-end gap-2 border border-[#E5E5E5] focus-within:border-[#1ABCFE] px-2 py-1.5">
                <textarea
                  ref={inputRef}
                  data-testid="chatbot-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  rows={1}
                  placeholder="Describe your design or question…"
                  className="flex-1 resize-none bg-transparent outline-none text-[13.5px] text-[#1A1A1A] py-1 max-h-24"
                />
                <button
                  data-testid="chatbot-send"
                  data-cursor
                  data-cursor-label="send"
                  data-cursor-color="#1ABCFE"
                  onClick={send}
                  disabled={streaming || !input.trim()}
                  className="w-8 h-8 flex items-center justify-center disabled:opacity-40 hover:bg-[#F1FAFE] transition-colors"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4 text-[#1ABCFE]" />
                </button>
              </div>
              <div className="mt-2 text-[10px] font-mono text-[#999]">enter to send · shift+enter for newline</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
