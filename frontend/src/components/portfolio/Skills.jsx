import { motion } from "framer-motion";
import { Layers, Type, Hash, Frame, Image as ImageIcon, Component, Sparkles, Flower2, PenTool, Users, Wand2, Ruler } from "lucide-react";

const GROUPS = [
  {
    name: "Design",
    icon: Frame,
    items: [
      { icon: Component, label: "Product design", meta: "Sr", pct: 96 },
      { icon: Layers, label: "UI/UX Design", meta: "Sr", pct: 96 },
      { icon: Layers, label: "Design systems", meta: "Sr", pct: 80 },
      { icon: PenTool, label: "Brand identity", meta: "Mid", pct: 82 },
    ],
  },
  {
    name: "Process",
    icon: Wand2,
    items: [
      { icon: Users, label: "User research", meta: "Mid", pct: 78 },
      { icon: Ruler, label: "Wireframe", meta: "Sr", pct: 96 },
      { icon: Sparkles, label: "Prototyping", meta: "Sr", pct: 95 },
      { icon: Hash, label: "Information arch.", meta: "Sr", pct: 90 },
      { icon: Hash, label: "Motion & interaction", meta: "Sr", pct: 90 },
    ],
  },
  {
    name: "Toolkit",
    icon: ImageIcon,
    items: [
      { icon: Flower2, label: "Figma / FigJam", meta: "Sr", pct: 98 },
      { icon: Sparkles, label: "Framer", meta: "Mid", pct: 82 },
      { icon: Hash, label: "HTML / CSS / Tailwind", meta: "Basic", pct: 45 },
      { icon: Type, label: "Notion", meta: "Mid", pct: 78 },
      { icon: PenTool, label: "Canva", meta: "Sr", pct: 95 },
    ],
  },
];

function LayerRow({ Icon, label, meta, pct }) {
  return (
    <div
      className="group flex items-center gap-3 py-2 pl-2 pr-3 border-l-2 border-transparent hover:border-[#1ABCFE] hover:bg-[#F1FAFE] transition-colors"
      data-cursor
      data-cursor-label={label}
      data-cursor-color="#1ABCFE"
    >
      <Icon className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
      <span className="text-sm text-[#1A1A1A] flex-1 truncate">{label}</span>
      <div className="hidden sm:flex items-center gap-2 w-40">
        <div className="flex-1 h-1 bg-[#EFEFEF] relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#1A1A1A] group-hover:bg-[#1ABCFE] transition-colors"
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <span className="text-[10px] font-mono text-[#666] w-8 text-right">{pct}%</span>
      </div>
      <span className="tag-badge">{meta}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-36 border-t border-[#E5E5E5]" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="mono-label mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#1A1A1A]" />
            <span>Panel · 04 · Layers</span>
          </div>
          <h2 className="font-serif font-light text-4xl md:text-6xl leading-[1] text-[#1A1A1A]" data-testid="skills-heading">
            Every skill is a <span className="italic-serif text-[#2C5E3E]">layer</span> in the file.
          </h2>
          <p className="mt-6 text-[15px] text-[#1A1A1A]/70 max-w-sm">
            I organize craft the way I organize Figma files — nested, named, and
            reusable. Hover any layer to inspect.
          </p>
        </div>

        <div className="md:col-span-8">
          <div className="figma-card">
            <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5E5]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#1A1A1A]" />
                <span className="mono-label text-[#1A1A1A]">Layers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="tag-badge">14 items</span>
                <span className="tag-badge blue">v2.4</span>
              </div>
            </div>

            {GROUPS.map((g) => {
              const GIcon = g.icon;
              return (
                <div key={g.name} className="px-3 py-3 border-b border-[#EFEFEF] last:border-0">
                  <div className="flex items-center gap-2 pl-2 mb-1.5">
                    <GIcon className="w-3.5 h-3.5 text-[#666]" />
                    <span className="mono-label text-[#333]">{g.name}</span>
                  </div>
                  <div className="pl-3">
                    {g.items.map((it) => (
                      <LayerRow key={it.label} Icon={it.icon} label={it.label} meta={it.meta} pct={it.pct} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
