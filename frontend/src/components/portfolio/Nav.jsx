import { useState, useEffect } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "playground", label: "Playground" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#F9F8F6]/85 backdrop-blur-md border-b border-[#E5E5E5]" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="brand-logo"
          data-cursor
          data-cursor-label="Home"
          className="flex items-center gap-2 select-none"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" fill="#E07A5F" />
            <circle cx="12" cy="4" r="3.2" fill="#2C5E3E" />
            <circle cx="20" cy="12" r="3.2" fill="#1ABCFE" />
            <circle cx="12" cy="20" r="3.2" fill="#A259FF" />
            <circle cx="4" cy="12" r="3.2" fill="#F24E1E" />
          </svg>
          <span className="font-serif italic text-lg tracking-tight">Botanical<span className="not-italic font-normal text-[#1A1A1A]">/</span>Canvas</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                data-testid={`nav-${l.id}`}
                data-cursor
                data-cursor-label={l.label}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#1ABCFE] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          data-testid="nav-cta-hire"
          data-cursor
          data-cursor-label="Say hi"
          data-cursor-color="#E07A5F"
          className="figma-btn primary hidden sm:inline-flex"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
