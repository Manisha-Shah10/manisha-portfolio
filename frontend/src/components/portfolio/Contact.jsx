import { useState } from "react";
import { toast } from "sonner";
import { Mail, Linkedin, Copy, Check, ExternalLink } from "lucide-react";

const EMAIL = "shahmanisha101996@gmail.com";
const EMAIL_USER = "shahmanisha101996";
const EMAIL_DOMAIN = "@gmail.com";

const SOCIALS = [
  { key: "linkedin", label: "LinkedIn", handle: "@manisha-shah", url: "https://www.linkedin.com/in/manisha-shah-261098211/", icon: Linkedin },
  { key: "dribbble", label: "Dribbble", handle: "@Manisha10", url: "https://dribbble.com/Manisha10", iconSrc: "dribbble" },
  { key: "behance", label: "Behance", handle: "@manishashah", url: "https://www.behance.net/manishashah", iconSrc: "behance" },
  { key: "notion", label: "Notion", handle: "full portfolio", url: "https://wheat-drawer-2c3.notion.site/Manisha-Shah-21e4f0102792803fa824ce509b11deee", iconSrc: "notion" },
];

// Inline brand SVG icons for services lucide doesn't ship (Dribbble it does, Behance/Notion it doesn't)
function BrandIcon({ src, className = "w-4 h-4" }) {
  if (src === "dribbble")
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72" />
        <path d="M12 2.5c8 5 12 10.5 12 12.5" />
        <path d="M2.5 13.5c6-3 12-4 20-1" />
        <path d="M3 20.5c5-6 12-8 19-3" />
      </svg>
    );
  if (src === "behance")
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M7.14 6.5c1.66 0 3.14.62 3.14 2.62 0 1.24-.62 1.86-1.66 2.28C10.28 11.83 11 12.83 11 14.5c0 2.42-1.9 3.5-4.28 3.5H1V6.5h6.14zM3.62 11h2.72c1.24 0 1.86-.5 1.86-1.55 0-1.03-.62-1.5-1.86-1.5H3.62V11zm0 5.24h2.86c1.38 0 2.14-.55 2.14-1.79 0-1.24-.76-1.79-2.14-1.79H3.62v3.58zM17.5 9.5c2.9 0 4.5 1.7 4.5 4.5v.75h-6.5c.14 1.55 1 2.35 2.5 2.35 1.05 0 1.85-.35 2.15-1.15h1.75c-.4 1.85-2 3.05-4 3.05-2.9 0-4.5-2-4.5-4.75s1.6-4.75 4.1-4.75zm-2 3.55h4.6c-.15-1.3-1-2-2.3-2s-2.15.7-2.3 2zM15.5 6h5V7.4h-5V6z" />
      </svg>
    );
  if (src === "notion")
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M4.5 4l14.3-1.05c1.34-.1 1.7.62 1.7 1.4V19.6c0 .65-.35 1.28-1.35 1.35L4.75 22c-.95.06-1.35-.32-1.35-1.15V5.4c0-.75.4-1.32 1.1-1.4z" />
        <path d="M4.6 4.9 18.7 3.8" />
        <path d="M7.5 9v10l9.5-.65V8.4" />
        <path d="M7.5 9l9.5-.6" />
      </svg>
    );
  return null;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Copy failed — please try again");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 border-t border-[#E5E5E5] bg-[#F9F8F6]" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mono-label mb-6 flex items-center gap-3">
          <span className="w-6 h-px bg-[#1A1A1A]" />
          <span>Frame · 06 · Contact</span>
          <span className="tag-badge blue">Component / mailto</span>
        </div>

        <h2 className="font-serif font-light text-5xl md:text-7xl leading-[0.98] text-[#1A1A1A] max-w-4xl" data-testid="contact-heading">
          Let&apos;s make something <span className="italic-serif text-[#E07A5F]">grow</span> together.
        </h2>
        <p className="mt-6 text-[15px] md:text-lg text-[#1A1A1A]/70 max-w-xl">
          Open to full-time roles, freelance briefs, or a quick coffee about
          type, tokens, and terracotta pots.
        </p>

        {/* Email component */}
        <div className="mt-14 relative max-w-2xl">
          <div className="mono-label absolute -top-6 left-0 tag-badge blue">Component / say-hello</div>
          <a
            href={`mailto:${EMAIL}?subject=Hello%20Manisha%20—%20from%20your%20portfolio`}
            data-testid="contact-mailto"
            data-cursor
            data-cursor-label="send email"
            data-cursor-color="#1ABCFE"
            className="figma-card group flex items-start md:items-center gap-4 md:gap-6 px-5 md:px-8 py-6 md:py-8 w-full"
          >
            <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-[#1A1A1A] group-hover:bg-[#1ABCFE] group-hover:border-[#1ABCFE] transition-colors">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#1A1A1A] group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mono-label mb-1">write to me at</div>
              <div className="font-serif text-[26px] sm:text-3xl md:text-[38px] leading-tight text-[#1A1A1A] group-hover:text-[#1ABCFE] transition-colors">
                <span className="block">{EMAIL_USER}</span>
                <span className="font-mono font-normal text-sm md:text-base text-[#1A1A1A]/60 group-hover:text-[#1ABCFE]/70 tracking-[0.05em]">
                  {EMAIL_DOMAIN}
                </span>
              </div>
            </div>
            <button
              onClick={copy}
              data-testid="contact-copy-email"
              data-cursor
              data-cursor-label="copy"
              data-cursor-color="#E07A5F"
              className="shrink-0 hidden sm:inline-flex items-center gap-2 border border-[#1A1A1A] px-3 py-2 text-[11px] font-mono uppercase tracking-[0.14em] hover:bg-[#E07A5F] hover:text-white hover:border-[#E07A5F] transition-colors"
              aria-label="Copy email"
              type="button"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </a>

          {/* Mobile copy button */}
          <button
            onClick={copy}
            data-testid="contact-copy-email-mobile"
            className="sm:hidden mt-3 inline-flex items-center gap-2 border border-[#1A1A1A] px-3 py-2 text-[11px] font-mono uppercase tracking-[0.14em] hover:bg-[#E07A5F] hover:text-white hover:border-[#E07A5F] transition-colors"
            type="button"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        {/* Socials */}
        <div className="mt-16">
          <div className="mono-label mb-4">or find me on</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`contact-${s.key}`}
                  data-cursor
                  data-cursor-label={s.label}
                  data-cursor-color="#E07A5F"
                  className="figma-card group relative flex items-center gap-3 px-4 py-4 md:py-5"
                >
                  <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
                  {Icon ? <Icon className="w-4 h-4 text-[#1A1A1A]" /> : <BrandIcon src={s.iconSrc} />}
                  <div className="min-w-0">
                    <div className="text-sm text-[#1A1A1A] group-hover:text-[#1ABCFE] transition-colors">{s.label}</div>
                    <div className="mono-label mt-0.5 truncate">{s.handle}</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-[#666] group-hover:text-[#1ABCFE] transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
