import { motion } from "framer-motion";
import { Sliders, Info, Ruler } from "lucide-react";

const WORKSPACE = "https://images.pexels.com/photos/4348298/pexels-photo-4348298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const PropertyRow = ({ label, value, tone }) => (
  <div className="flex items-center justify-between py-2 border-b border-[#EFEFEF] last:border-0">
    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#666]">{label}</span>
    <span className={`text-[12px] font-mono ${tone === "accent" ? "text-[#1ABCFE]" : "text-[#1A1A1A]"}`}>{value}</span>
  </div>
);

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 border-t border-[#E5E5E5]" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10">
        {/* Left: Figma-style property panel */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 self-start"
          data-testid="about-panel"
        >
          <div className="figma-card p-0">
            <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
            {/* Tabs */}
            <div className="flex border-b border-[#E5E5E5]">
              {["Design", "Prototype", "Inspect"].map((t, i) => (
                <button
                  key={t}
                  data-testid={`about-tab-${t.toLowerCase()}`}
                  data-cursor
                  data-cursor-label={t}
                  className={`flex-1 text-[11px] font-mono uppercase tracking-[0.18em] py-3 ${i === 0 ? "text-[#1ABCFE] border-b-2 border-[#1ABCFE]" : "text-[#666]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            {/* Header thumb */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={WORKSPACE} alt="workspace" className="w-full h-full object-cover grayscale-[0.1]" />
              <div className="absolute top-2 left-2 tag-badge blue">selection · profile-frame</div>
            </div>
            {/* Properties */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sliders className="w-3.5 h-3.5 text-[#1A1A1A]" />
                <h4 className="mono-label text-[#1A1A1A]">Design</h4>
              </div>
              <PropertyRow label="Name" value="Manisha Shah" tone="accent" />
              <PropertyRow label="Role" value="UI/UX Designer" />
              <PropertyRow label="Years" value="5+" />
              <PropertyRow label="Base" value="India" />
              <PropertyRow label="Stack" value="Figma · Framer" />

              <div className="mt-6 flex items-center gap-2 mb-3">
                <Ruler className="w-3.5 h-3.5 text-[#1A1A1A]" />
                <h4 className="mono-label text-[#1A1A1A]">Layout</h4>
              </div>
              <PropertyRow label="W" value="1440" />
              <PropertyRow label="H" value="Auto" />
              <PropertyRow label="Padding" value="96, 64, 96, 64" />
              <PropertyRow label="Gap" value="24" />

              <div className="mt-6 flex items-center gap-2 mb-3">
                <Info className="w-3.5 h-3.5 text-[#1A1A1A]" />
                <h4 className="mono-label text-[#1A1A1A]">Fill</h4>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { c: "#E07A5F", n: "Terracotta" },
                  { c: "#2C5E3E", n: "Fern" },
                  { c: "#1ABCFE", n: "Figma" },
                  { c: "#A259FF", n: "Iris" },
                ].map((s) => (
                  <div key={s.c} className="text-[10px] font-mono text-[#666]">
                    <div className="aspect-square" style={{ background: s.c }} />
                    <div className="mt-1">{s.n}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Right: Organic narrative */}
        <div className="md:col-span-7 md:pl-8">
          <div className="mono-label mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-[#1A1A1A]" />
            <span>Frame · 02 · About</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif font-light text-4xl md:text-6xl leading-[1.02] text-[#1A1A1A]"
            data-testid="about-heading"
          >
            I design the way <span className="italic-serif text-[#2C5E3E]">gardens</span> grow —
            with <span className="italic-serif text-[#E07A5F]">patience</span>,
            structure, and room for wild ideas.
          </motion.h2>

          <div className="mt-8 space-y-6 text-[15px] md:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-xl">
            <p>
              I&apos;ve spent the last five+ seasons pruning products for early-stage startups and
              cultivating design systems that scale without wilting. I care about the
              microcopy, the empty state, and the exact number of pixels a chip should breathe.
            </p>
            <p>
              My process moves between two rhythms: the botanical — observing users,
              letting insights bloom slowly — and the technical — Figma files with strict
              variables, tokens, and versioning. Both matter.
            </p>
            <p>
              When I&apos;m not designing, I&apos;m probably repotting a monstera, over-tuning my
              cursor animations, or arguing that <em className="italic-serif">italics</em> can
              carry an entire brand.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            {[
              { n: "20+", l: "Products shipped" },
              { n: "5+", l: "Years growing" },
            ].map((s, i) => (
              <div key={i} className="border-l border-[#1A1A1A] pl-3">
                <div className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">{s.n}</div>
                <div className="mono-label mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
