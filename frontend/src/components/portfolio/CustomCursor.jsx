import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("Designer");
  const [color, setColor] = useState("#1ABCFE");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    document.body.style.cursor = "none";
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const el = e.target;
      if (el && el.closest) {
        const hoverEl = el.closest("[data-cursor]");
        if (hoverEl) {
          setLabel(hoverEl.getAttribute("data-cursor-label") || "hover");
          setColor(hoverEl.getAttribute("data-cursor-color") || "#F24E1E");
        } else {
          setLabel("Designer");
          setColor("#1ABCFE");
        }
      }
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="hide-cursor pointer-events-none fixed top-0 left-0 z-[9998]"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
      data-testid="figma-cursor"
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ transform: "translate(-2px, -2px)" }}>
        <path d="M3 2L18 11L11 12.5L8 20L3 2Z" fill={color} stroke="#1A1A1A" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <div
        className="absolute left-5 top-4 px-2 py-[3px] text-[10.5px] font-mono text-white whitespace-nowrap"
        style={{ background: color }}
      >
        {label}
      </div>
    </motion.div>
  );
}
