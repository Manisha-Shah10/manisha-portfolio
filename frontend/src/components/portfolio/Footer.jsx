export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] py-10 bg-[#F9F8F6]" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 select-none" data-testid="footer-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" fill="#E07A5F" />
            <circle cx="12" cy="4" r="3.2" fill="#2C5E3E" />
            <circle cx="20" cy="12" r="3.2" fill="#1ABCFE" />
            <circle cx="12" cy="20" r="3.2" fill="#A259FF" />
            <circle cx="4" cy="12" r="3.2" fill="#F24E1E" />
          </svg>
          <span className="font-serif italic text-base tracking-tight text-[#1A1A1A]">
            Manisha<span className="not-italic font-normal">/</span>Shah
          </span>
          <span className="mono-label ml-3 hidden sm:inline">© 2026 · UI/UX Portfolio</span>
        </div>
        <span className="mono-label">designed with love, coffee & a monstera watching</span>
      </div>
    </footer>
  );
}
