import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Bloomstack",
    subtitle: "SaaS design system + product refresh",
    tags: ["Design System", "Product", "B2B"],
    year: "2025",
    accent: "#E07A5F",
    img: "https://images.unsplash.com/photo-1644792863360-40fa85ea52e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwbW9ja3Vwc3xlbnwwfHx8fDE3ODMwNjAzNzF8MA&ixlib=rb-4.1.0&q=85",
    w: 1440, h: 900,
    span: "md:col-span-8 md:row-span-2",
  },
  {
    id: 2,
    title: "Wildroot",
    subtitle: "Native app for urban gardeners",
    tags: ["Mobile", "0→1"],
    year: "2024",
    accent: "#2C5E3E",
    img: "https://images.unsplash.com/photo-1707836885254-79b6e3d7b18d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3Vwc3xlbnwwfHx8fDE3ODMwNjAzNzF8MA&ixlib=rb-4.1.0&q=85",
    w: 390, h: 844,
    span: "md:col-span-4",
  },
  {
    id: 3,
    title: "Petal & Grid",
    subtitle: "Editorial brand for a florist collective",
    tags: ["Brand", "Editorial"],
    year: "2024",
    accent: "#A259FF",
    img: "https://images.unsplash.com/photo-1726409849942-04fe2f65564e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxib3RhbmljYWwlMjBwYXR0ZXJufGVufDB8fHx8MTc4Mjg4MDgyMnww&ixlib=rb-4.1.0&q=85",
    w: 1024, h: 768,
    span: "md:col-span-4",
  },
  {
    id: 4,
    title: "Meadowly",
    subtitle: "Onboarding & activation redesign",
    tags: ["Growth", "UX"],
    year: "2023",
    accent: "#1ABCFE",
    img: "https://images.unsplash.com/photo-1726406569564-08086203445b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBwYXR0ZXJufGVufDB8fHx8MTc4Mjg4MDgyMnww&ixlib=rb-4.1.0&q=85",
    w: 1280, h: 720,
    span: "md:col-span-6",
  },
  {
    id: 5,
    title: "Fernlight",
    subtitle: "AI copilot for indie makers",
    tags: ["AI", "Product"],
    year: "2025",
    accent: "#F24E1E",
    img: "https://images.unsplash.com/photo-1644792863360-40fa85ea52e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwbW9ja3Vwc3xlbnwwfHx8fDE3ODMwNjAzNzF8MA&ixlib=rb-4.1.0&q=85",
    w: 1440, h: 900,
    span: "md:col-span-6",
  },
];

function Card({ p, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className={`figma-card group ${p.span}`}
      data-testid={`project-card-${p.id}`}
      data-cursor
      data-cursor-label="view case"
      data-cursor-color={p.accent}
    >
      <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
      {/* Measuring guides on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[3]">
        <div className="absolute -top-6 left-0 right-0 h-4 flex items-center">
          <div className="flex-1 border-t border-dashed border-[#F24E1E]" />
          <span className="mx-2 text-[10px] font-mono text-[#F24E1E]">W {p.w}</span>
          <div className="flex-1 border-t border-dashed border-[#F24E1E]" />
        </div>
        <div className="absolute -right-6 top-0 bottom-0 w-4 flex flex-col items-center">
          <div className="flex-1 border-l border-dashed border-[#F24E1E]" />
          <span className="my-2 text-[10px] font-mono text-[#F24E1E] rotate-90 whitespace-nowrap">H {p.h}</span>
          <div className="flex-1 border-l border-dashed border-[#F24E1E]" />
        </div>
      </div>

      <div className="absolute -top-6 left-0 tag-badge" style={{ background: p.accent, borderColor: p.accent, color: "#fff" }}>
        {p.title}.fig
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 55%, ${p.accent}22 100%)` }} />
      </div>

      <div className="p-5 md:p-6 flex items-start justify-between gap-4 border-t border-[#E5E5E5]">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {p.tags.map((t) => (
              <span key={t} className="tag-badge">{t}</span>
            ))}
            <span className="mono-label">{p.year}</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">{p.title}</h3>
          <p className="text-sm md:text-[15px] text-[#1A1A1A]/70 mt-1">{p.subtitle}</p>
        </div>
        <div className="shrink-0 w-9 h-9 border border-[#1A1A1A] flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors">
          <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-36 border-t border-[#E5E5E5] bg-[#F9F8F6]" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-16">
          <div>
            <div className="mono-label mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#1A1A1A]" />
              <span>Frame · 03 · Selected work</span>
            </div>
            <h2 className="font-serif font-light text-4xl md:text-6xl leading-[1] text-[#1A1A1A]" data-testid="projects-heading">
              A garden of <span className="italic-serif text-[#E07A5F]">case studies</span>.
            </h2>
          </div>
          <span className="mono-label">005 · files</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {PROJECTS.map((p, i) => (
            <Card key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
