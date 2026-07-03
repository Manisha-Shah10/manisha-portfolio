import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, MousePointer2 } from "lucide-react";

// SVG botanical + UI elements
const Flower = ({ color = "#E07A5F", size = 90 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="pointer-events-none">
    {[0, 60, 120, 180, 240, 300].map((r) => (
      <ellipse key={r} cx="50" cy="28" rx="12" ry="20" fill={color} opacity="0.9" transform={`rotate(${r} 50 50)`} />
    ))}
    <circle cx="50" cy="50" r="9" fill="#F9E79F" stroke="#1A1A1A" strokeWidth="1" />
  </svg>
);

const Leaf = ({ color = "#2C5E3E", size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="pointer-events-none">
    <path d="M15 85 Q10 50 40 25 Q75 5 90 15 Q80 55 55 80 Q35 95 15 85 Z" fill={color} />
    <path d="M20 80 Q50 55 85 20" stroke="#F9F8F6" strokeWidth="1.5" fill="none" />
  </svg>
);

const initial = [
  { id: 1, x: 40, y: 40, type: "flower", color: "#E07A5F", label: "peony" },
  { id: 2, x: 200, y: 90, type: "leaf", color: "#2C5E3E", label: "fern" },
  { id: 3, x: 360, y: 40, type: "sticky", text: "Hover states\nfeel a bit shy", color: "#F9E79F" },
  { id: 4, x: 520, y: 140, type: "flower", color: "#A259FF", label: "iris" },
  { id: 5, x: 60, y: 240, type: "button", text: "Ship it", color: "#1ABCFE" },
  { id: 6, x: 260, y: 260, type: "leaf", color: "#E07A5F", label: "petal" },
  { id: 7, x: 460, y: 240, type: "sticky", text: "More whitespace,\nless anxiety.", color: "#E9F5FF" },
  { id: 8, x: 620, y: 60, type: "swatch", color: "#F24E1E", label: "#F24E1E" },
  { id: 9, x: 700, y: 240, type: "flower", color: "#2C5E3E", label: "poppy" },
];

function Draggable({ item, containerRef }) {
  const commonProps = {
    drag: true,
    dragMomentum: false,
    dragElastic: 0.1,
    dragConstraints: containerRef,
    whileDrag: { scale: 1.05, zIndex: 30, boxShadow: "0 20px 45px rgba(0,0,0,0.16)" },
    className: "absolute cursor-grab active:cursor-grabbing",
    style: { left: item.x, top: item.y },
    "data-cursor": true,
    "data-cursor-label": "drag",
    "data-cursor-color": item.color || "#1ABCFE",
    "data-testid": `playground-item-${item.id}`,
  };

  if (item.type === "flower") return <motion.div {...commonProps}><Flower color={item.color} /></motion.div>;
  if (item.type === "leaf") return <motion.div {...commonProps}><Leaf color={item.color} /></motion.div>;
  if (item.type === "sticky")
    return (
      <motion.div {...commonProps}>
        <div className="w-44 p-3 border border-[#1A1A1A]/20 shadow-[3px_3px_0_0_rgba(0,0,0,0.08)]" style={{ background: item.color }}>
          <div className="mono-label mb-1">note</div>
          <div className="font-serif italic text-[15px] leading-snug whitespace-pre-line text-[#1A1A1A]">{item.text}</div>
        </div>
      </motion.div>
    );
  if (item.type === "button")
    return (
      <motion.div {...commonProps}>
        <div className="figma-btn primary" style={{ cursor: "grab" }}>
          {item.text}
        </div>
      </motion.div>
    );
  if (item.type === "swatch")
    return (
      <motion.div {...commonProps}>
        <div className="figma-card p-0 w-24">
          <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
          <div className="w-24 h-16" style={{ background: item.color }} />
          <div className="p-2">
            <div className="mono-label text-[9px]">{item.label}</div>
          </div>
        </div>
      </motion.div>
    );
  return null;
}

export default function Playground() {
  const [items, setItems] = useState(initial);
  const [k, setK] = useState(0); // key to force remount and reset
  const canvasRef = useRef(null);

  const reset = () => { setItems(initial.map((i) => ({ ...i }))); setK((v) => v + 1); };

  return (
    <section id="playground" className="relative py-24 md:py-36 border-t border-[#E5E5E5] bg-[#F1EFEA]" data-testid="playground-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="mono-label mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#1A1A1A]" />
              <span>Frame · 05 · Playground</span>
              <span className="tag-badge blue">draggable</span>
            </div>
            <h2 className="font-serif font-light text-4xl md:text-6xl leading-[1] text-[#1A1A1A]" data-testid="playground-heading">
              A <span className="italic-serif text-[#A259FF]">canvas</span>, some flowers,
              a few UI parts.
            </h2>
            <p className="mt-4 text-[15px] text-[#1A1A1A]/70 max-w-lg">
              Drag anything anywhere. This is my sandbox — half botanical, half Figma.
              Rearrange until it feels right.
            </p>
          </div>
          <button
            onClick={reset}
            data-testid="playground-reset"
            data-cursor
            data-cursor-label="reset"
            data-cursor-color="#F24E1E"
            className="figma-btn secondary"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset canvas
          </button>
        </div>

        <div
          ref={canvasRef}
          key={k}
          className="relative bg-linegrid bg-white border border-[#E5E5E5] h-[520px] overflow-hidden"
          data-testid="playground-canvas"
        >
          {/* Corner rulers */}
          <div className="absolute top-0 left-0 right-0 h-6 border-b border-[#E5E5E5] bg-white/70 flex items-center px-2 gap-8">
            {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((n) => (
              <span key={n} className="text-[9px] font-mono text-[#999]">{n}</span>
            ))}
          </div>
          <div className="absolute top-6 left-0 bottom-0 w-6 border-r border-[#E5E5E5] bg-white/70 flex flex-col items-center pt-2 gap-8">
            {[0, 100, 200, 300, 400].map((n) => (
              <span key={n} className="text-[9px] font-mono text-[#999]">{n}</span>
            ))}
          </div>

          {/* Fake collaborator cursor */}
          <div className="absolute right-8 top-10 flex items-center gap-1.5 pointer-events-none animate-float-slow">
            <MousePointer2 className="w-4 h-4 text-[#E07A5F]" fill="#E07A5F" />
            <span className="text-[10.5px] font-mono px-2 py-[3px] bg-[#E07A5F] text-white">You</span>
          </div>

          <div className="absolute inset-0 pl-6 pt-6">
            {items.map((it) => (
              <Draggable key={`${k}-${it.id}`} item={it} containerRef={canvasRef} />
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="tag-badge">rectangle</span>
          <span className="tag-badge">ellipse</span>
          <span className="tag-badge">component</span>
          <span className="tag-badge blue">variant</span>
          <span className="tag-badge green">nature</span>
          <span className="tag-badge red">experimental</span>
        </div>
      </div>
    </section>
  );
}
