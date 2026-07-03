import { Mail, Instagram, Linkedin, Github, Dribbble } from "lucide-react";

const EMAIL = "hello@yourname.design";

export default function Contact() {
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

        <div className="mt-14 relative">
          <div className="mono-label absolute -top-6 left-0 tag-badge blue">Component / mailto-cta</div>
          <a
            href={`mailto:${EMAIL}?subject=Hello from your portfolio`}
            data-testid="contact-mailto"
            data-cursor
            data-cursor-label="send email"
            data-cursor-color="#1ABCFE"
            className="figma-card group inline-flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-6 md:px-10 py-8 md:py-10 w-full md:w-auto"
          >
            <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-[#1A1A1A]" />
            <span className="font-serif text-3xl md:text-5xl text-[#1A1A1A] group-hover:text-[#1ABCFE] transition-colors break-all">
              {EMAIL}
            </span>
            <span className="tag-badge red">click to copy</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { icon: Linkedin, label: "LinkedIn", href: "#" },
            { icon: Dribbble, label: "Dribbble", href: "#" },
            { icon: Instagram, label: "Instagram", href: "#" },
            { icon: Github, label: "Read.cv", href: "#" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              data-testid={`contact-${label.toLowerCase()}`}
              data-cursor
              data-cursor-label={label}
              data-cursor-color="#E07A5F"
              className="figma-card group flex items-center gap-3 px-4 py-4"
            >
              <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
              <Icon className="w-4 h-4 text-[#1A1A1A]" />
              <span className="text-sm text-[#1A1A1A] group-hover:text-[#1ABCFE] transition-colors">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
