import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

const IMG_1 = "https://images.unsplash.com/photo-1726409849942-04fe2f65564e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxib3RhbmljYWwlMjBwYXR0ZXJufGVufDB8fHx8MTc4Mjg4MDgyMnww&ixlib=rb-4.1.0&q=85";
const IMG_2 = "https://images.unsplash.com/photo-1726406569564-08086203445b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBwYXR0ZXJufGVufDB8fHx8MTc4Mjg4MDgyMnww&ixlib=rb-4.1.0&q=85";

function FloatingFrame({ children, className, initial, drag = true, testid }) {
  return (
    <motion.div
      drag={drag}
      dragMomentum={false}
      dragElastic={0.15}
      initial={{ opacity: 0, y: 40, ...initial }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileDrag={{ scale: 1.02, boxShadow: "0 20px 45px rgba(0,0,0,0.14)" }}
      className={`absolute figma-card ${className}`}
      data-cursor
      data-cursor-label="drag me"
      data-cursor-color="#F24E1E"
      data-testid={testid}
    >
      <span className="anchor tl" />
      <span className="anchor tr" />
      <span className="anchor bl" />
      <span className="anchor br" />
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-dotgrid" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Fake Figma cursor labels floating */}
        <div className="absolute top-4 right-8 hidden md:flex items-center gap-2 select-none" data-testid="hero-figma-cursor">
          <MousePointer2 className="w-4 h-4 text-[#A259FF]" fill="#A259FF" />
          <span className="text-[10.5px] font-mono px-2 py-[3px] bg-[#A259FF] text-white">Iris</span>
        </div>
        <div className="absolute top-40 left-2 hidden md:flex items-center gap-2 select-none">
          <MousePointer2 className="w-4 h-4 text-[#2C5E3E]" fill="#2C5E3E" />
          <span className="text-[10.5px] font-mono px-2 py-[3px] bg-[#2C5E3E] text-white">Fern</span>
        </div>

        <div className="pt-8 md:pt-14">
          <div className="mono-label mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-[#1A1A1A]" />
            <span>Frame · 01 · Hero</span>
            <span className="tag-badge blue">Auto Layout</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif font-light tracking-tight text-[54px] sm:text-7xl md:text-[104px] leading-[0.95] text-[#1A1A1A]"
            data-testid="hero-heading"
          >
            Cultivating
            <br />
            <span className="italic-serif text-[#2C5E3E]">digital</span>{" "}
            <span className="italic-serif">experiences</span>
            <br />
            <span className="text-[#E07A5F]">that</span> bloom.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8 md:mt-10 max-w-xl text-base md:text-lg text-[#1A1A1A]/75 font-sans"
          >
            Independent UI/UX designer who plants systems, prototypes in{" "}
            <span className="tag-badge blue">Figma</span>, and lets ideas grow into interfaces
            people love spending time with.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              data-testid="hero-view-work"
              data-cursor
              data-cursor-label="click"
              data-cursor-color="#1ABCFE"
              className="figma-btn primary"
            >
              View selected work
            </a>
            <a
              href="#playground"
              data-testid="hero-playground"
              data-cursor
              data-cursor-label="play"
              data-cursor-color="#E07A5F"
              className="figma-btn secondary"
            >
              Open playground
            </a>
          </motion.div>
        </div>

        {/* Floating draggable frames */}
        <div className="relative mt-12 md:mt-0 md:absolute md:right-0 md:top-24 md:w-[560px] md:h-[560px] pointer-events-none">
          <div className="relative w-full h-[440px] md:h-full pointer-events-none">
            <FloatingFrame
              className="w-56 h-72 md:w-64 md:h-80 top-2 right-6 pointer-events-auto"
              testid="hero-frame-botanical-1"
            >
              <div className="absolute -top-6 left-0 tag-badge blue">Frame · botanicals/01</div>
              <img src={IMG_1} alt="botanical" className="w-full h-full object-cover" draggable={false} />
            </FloatingFrame>

            <FloatingFrame
              className="w-52 h-64 md:w-56 md:h-72 bottom-2 left-4 pointer-events-auto"
              initial={{ rotate: -4 }}
              testid="hero-frame-botanical-2"
            >
              <div className="absolute -top-6 left-0 tag-badge red">W 224 · H 288</div>
              <img src={IMG_2} alt="botanical" className="w-full h-full object-cover" draggable={false} />
            </FloatingFrame>

            <FloatingFrame
              className="w-36 h-36 md:w-44 md:h-44 top-40 right-40 pointer-events-auto"
              initial={{ rotate: 5 }}
              testid="hero-frame-swatch"
            >
              <div className="absolute -top-6 left-0 tag-badge green">Rectangle · swatch</div>
              <div className="w-full h-full" style={{ background: "#E07A5F" }} />
            </FloatingFrame>

            <FloatingFrame
              className="w-24 h-24 md:w-28 md:h-28 top-4 left-10 pointer-events-auto"
              initial={{ rotate: -8 }}
              testid="hero-frame-node"
            >
              <div className="absolute -top-6 left-0 tag-badge">Ellipse · node</div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-14 h-14 rounded-full" style={{ background: "#2C5E3E" }} />
              </div>
            </FloatingFrame>
          </div>
        </div>
      </div>

      {/* Bottom marquee-like info bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 md:mt-24 flex flex-wrap items-center gap-4 md:gap-8 border-t border-[#E5E5E5] pt-6">
        <span className="mono-label">available · Q1 2026</span>
        <span className="w-1 h-1 bg-[#1A1A1A] rounded-full" />
        <span className="mono-label">Berlin · Remote</span>
        <span className="w-1 h-1 bg-[#1A1A1A] rounded-full" />
        <span className="mono-label">design systems · product · brand</span>
      </div>
    </section>
  );
}
