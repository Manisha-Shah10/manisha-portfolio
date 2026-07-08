# Botanical Canvas — UI/UX Designer Portfolio

## Original Problem Statement
"Personal portfolio project for UI/UX designer. I like flowers and figma so I want something creative that include both theme"

## User Choices
- Sections: Hero + About + Projects + Skills + Contact + Interactive Playground
- Visual theme: designer's call → "Botanical Canvas" (organic serif + Figma UI motifs)
- Placeholder content (user to fill later)
- Contact: mailto link (no backend form)
- AI Feature: "Design Critique AI" chatbot styled like Figma comments

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis smooth scroll + lucide-react
- Backend: FastAPI + MongoDB (chat history) + emergentintegrations (Claude Sonnet 4.6)
- Streaming SSE endpoint `/api/chat/stream` for the AI critique chatbot

## Implemented (Dec 2025)
- Custom Figma-style cursor with dynamic labels/colors
- Sticky nav with anchor scroll and CTA
- Hero with draggable botanical/figma frames, Cormorant Garamond headline
- About Figma "Properties Panel" (Design/Prototype/Inspect tabs, color swatches, stats)
- Projects bento grid with hover measuring guides and .fig tags
- Skills as Figma "Layers" panel with animated progress bars
- Interactive Playground: draggable SVG flowers, leaves, sticky notes, buttons, swatches on grid canvas with rulers
- Contact mailto CTA + social links, giant serif email
- Design Critique AI chatbot (streaming, floating Figma-comment style, session history in MongoDB)

## Known Notes
- Emergent LLM key currently has 0 budget on the account (chatbot returns budget error). User must top up in Profile → Universal Key → Add Balance.

## Backlog
- P1: Personal details (name, real projects, real email, avatar)
- P2: Case-study detail pages
- P2: Blog / writing section
- P2: Preload key images, add page transition polish
