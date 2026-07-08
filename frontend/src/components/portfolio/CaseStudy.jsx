import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Wrench, Calendar, User, Layers } from "lucide-react";
import { CASE_STUDIES, CASE_STUDY_ORDER } from "@/data/caseStudies";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="mono-label mb-3">404 · case-study/not-found</div>
      <h1 className="font-serif text-5xl md:text-6xl">This <span className="italic-serif text-[#E07A5F]">frame</span> isn&apos;t here.</h1>
      <Link to="/" data-testid="case-back-home" className="figma-btn primary mt-8">
        <ArrowLeft className="w-4 h-4" /> Back to portfolio
      </Link>
    </div>
  );
}

function InfoRow({ Icon, label, value }) {
  return (
    <div className="flex items-start justify-between gap-6 py-3 border-b border-[#EFEFEF] last:border-0">
      <div className="flex items-center gap-2 text-[#666]">
        <Icon className="w-3.5 h-3.5" />
        <span className="text-[11px] font-mono uppercase tracking-[0.14em]">{label}</span>
      </div>
      <span className="text-[13px] font-mono text-[#1A1A1A] text-right">{value}</span>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const cs = CASE_STUDIES[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!cs) return <NotFound />;

  const currentIdx = CASE_STUDY_ORDER.indexOf(slug);
  const prevSlug = currentIdx > 0 ? CASE_STUDY_ORDER[currentIdx - 1] : null;
  const nextSlug = currentIdx >= 0 && currentIdx < CASE_STUDY_ORDER.length - 1 ? CASE_STUDY_ORDER[currentIdx + 1] : null;

  const isWip = cs.status === "wip";

  return (
    <div className="min-h-screen bg-[#F9F8F6]" data-testid={`case-study-${cs.slug}`}>
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-[#F9F8F6]/90 backdrop-blur-md border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/#projects")}
            data-testid="case-back"
            data-cursor
            data-cursor-label="back"
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] hover:text-[#1ABCFE] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to work
          </button>
          <a
            href={cs.notionUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="case-notion-top"
            data-cursor
            data-cursor-label="open notion"
            data-cursor-color={cs.accent}
            className="figma-btn primary hidden sm:inline-flex"
          >
            View complete case study <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-24 md:pb-24 bg-dotgrid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mono-label mb-6 flex items-center gap-3 flex-wrap">
            <span className="w-6 h-px bg-[#1A1A1A]" />
            <span>Case Study · {String(currentIdx + 1).padStart(2, "0")} · {cs.platform}</span>
            {isWip && <span className="tag-badge" style={{ background: "#FFB020", borderColor: "#FFB020", color: "#1A1A1A" }}>HiFi WIP</span>}
            <span className="tag-badge">{cs.year}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif font-light text-5xl sm:text-6xl md:text-7xl leading-[0.98] text-[#1A1A1A] max-w-4xl"
            data-testid="case-title"
          >
            {cs.title}
          </motion.h1>
          <p className="mt-6 text-[16px] md:text-xl text-[#1A1A1A]/75 max-w-2xl font-serif italic">
            {cs.tagline}
          </p>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="figma-card relative">
            <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
            <div className="absolute -top-6 left-0 tag-badge" style={{ background: cs.accent, borderColor: cs.accent, color: "#fff" }}>
              {cs.title}.fig
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-[#F1EFEA]">
              <img
                src={cs.cover}
                alt={`${cs.title} cover`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project meta panel + overview */}
      <section className="pb-20 md:pb-28 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-4">
            <div className="figma-card relative">
              <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5E5]">
                <div className="mono-label text-[#1A1A1A]">Project</div>
                <span className="tag-badge blue">Design</span>
              </div>
              <div className="p-4">
                <InfoRow Icon={User} label="Role" value={cs.role} />
                <InfoRow Icon={Calendar} label="Timeline" value={cs.timeline} />
                <InfoRow Icon={Layers} label="Type" value={cs.projectType} />
                <InfoRow Icon={Wrench} label="Tools" value={cs.tools.join(" · ")} />
              </div>
              <div className="border-t border-[#E5E5E5] p-4">
                <div className="mono-label mb-2 text-[#1A1A1A]">Tags</div>
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((t) => (
                    <span key={t} className="tag-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={cs.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="case-notion-side"
              data-cursor
              data-cursor-label="notion"
              data-cursor-color={cs.accent}
              className="figma-btn primary w-full justify-center mt-6"
            >
              View complete case study <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </aside>

          <div className="md:col-span-8 md:pl-6">
            <div className="mono-label mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[#1A1A1A]" />
              <span>01 · Overview</span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-5xl leading-[1.02] text-[#1A1A1A]">
              A <span className="italic-serif" style={{ color: cs.accent }}>{cs.platform.toLowerCase()}</span> designed to reduce friction, not add features.
            </h2>
            <p className="mt-6 text-[15px] md:text-lg text-[#1A1A1A]/80 leading-relaxed">
              {cs.overview}
            </p>

            {isWip && (
              <div className="mt-8 border-l-2 pl-4 py-3" style={{ borderColor: cs.accent, background: "#FFF" }}>
                <div className="mono-label mb-1">Status · High-fidelity WIP</div>
                <p className="text-[14px] text-[#1A1A1A]/80">
                  Research, user flows, and wireframes are complete. High-fidelity screens are still growing — check the full Notion case study for the latest work.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="mono-label mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[#1A1A1A]" />
              <span>02 · Problem</span>
            </div>
            <h3 className="font-serif font-light text-3xl md:text-4xl leading-[1.05] text-[#1A1A1A]">
              What we were <span className="italic-serif text-[#E07A5F]">up against</span>.
            </h3>
          </div>
          <div className="md:col-span-8 md:pl-6">
            <p className="text-[16px] md:text-lg text-[#1A1A1A]/85 leading-relaxed border-l-2 border-[#1A1A1A] pl-5 italic font-serif">
              {cs.problem}
            </p>
            {cs.insights && (
              <div className="mt-10">
                <div className="mono-label mb-4">Research takeaways</div>
                <ul className="space-y-3">
                  {cs.insights.map((it, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 shrink-0" style={{ background: cs.accent }} />
                      <span className="text-[15px] text-[#1A1A1A]/85">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E5] bg-[#F1EFEA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mono-label mb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-[#1A1A1A]" />
            <span>03 · Solution</span>
          </div>
          <h3 className="font-serif font-light text-3xl md:text-5xl leading-[1.02] text-[#1A1A1A] max-w-3xl">
            The <span className="italic-serif" style={{ color: cs.accent }}>design decisions</span> that mattered most.
          </h3>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {cs.solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="figma-card relative p-6"
                data-cursor
                data-cursor-label={s.t}
                data-cursor-color={cs.accent}
              >
                <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
                <div className="mono-label mb-2" style={{ color: cs.accent }}>0{i + 1}</div>
                <h4 className="font-serif text-2xl text-[#1A1A1A]">{s.t}</h4>
                <p className="mt-2 text-[14.5px] text-[#1A1A1A]/75 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screens */}
      {cs.screens && cs.screens.length > 0 && (
        <section className="py-20 md:py-28 border-b border-[#E5E5E5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mono-label mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[#1A1A1A]" />
              <span>04 · Selected screens</span>
              <span className="tag-badge">{cs.screens.length} frames</span>
            </div>
            <h3 className="font-serif font-light text-3xl md:text-5xl leading-[1.02] text-[#1A1A1A] max-w-3xl">
              A <span className="italic-serif text-[#2C5E3E]">peek</span> at the final artboards.
            </h3>

            <div className="mt-10 grid gap-6 md:gap-10">
              {cs.screens.map((src, i) => (
                <motion.figure
                  key={src}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="figma-card relative"
                >
                  <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
                  <div className="absolute -top-6 left-0 tag-badge">Frame · {String(i + 1).padStart(2, "0")}</div>
                  <img src={src} alt={`${cs.title} screen ${i + 1}`} className="w-full h-auto block" loading="lazy" />
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impact */}
      {cs.impact && cs.impact.length > 0 && (
        <section className="py-20 md:py-24 border-b border-[#E5E5E5]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mono-label mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[#1A1A1A]" />
              <span>05 · Impact</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-6">
              {cs.impact.map((m, i) => (
                <div key={i} className="border-l-2 pl-4" style={{ borderColor: cs.accent }}>
                  <div className="font-serif text-4xl md:text-5xl text-[#1A1A1A]">{m.n}</div>
                  <div className="mono-label mt-2">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Takeaway */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mono-label mb-3 flex items-center gap-3">
            <span className="w-6 h-px bg-[#1A1A1A]" />
            <span>{cs.impact ? "06" : "05"} · Reflection</span>
          </div>
          <blockquote className="font-serif font-light text-3xl md:text-5xl leading-[1.15] text-[#1A1A1A] max-w-4xl italic-serif">
            &ldquo;{cs.takeaway}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Final CTA + Prev/Next */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="figma-card relative p-8 md:p-14 text-center">
            <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
            <div className="mono-label mb-3">Component · full-case-study-cta</div>
            <h3 className="font-serif font-light text-4xl md:text-6xl text-[#1A1A1A]">
              Want the <span className="italic-serif" style={{ color: cs.accent }}>full story</span>?
            </h3>
            <p className="mt-4 text-[15px] md:text-lg text-[#1A1A1A]/70 max-w-xl mx-auto">
              Personas, empathy maps, user flows, style guide, wireframes, heuristics — the complete case study lives in Notion.
            </p>
            <a
              href={cs.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="case-notion-cta"
              data-cursor
              data-cursor-label="open notion"
              data-cursor-color={cs.accent}
              className="figma-btn primary mt-8 justify-center"
              style={{ background: cs.accent }}
            >
              View complete case study <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {prevSlug ? (
              <Link
                to={`/case/${prevSlug}`}
                data-testid="case-prev"
                data-cursor
                data-cursor-label="prev"
                className="figma-card relative p-5 flex items-center gap-4 group"
              >
                <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <div className="text-left">
                  <div className="mono-label">Previous</div>
                  <div className="font-serif text-xl mt-1 group-hover:text-[#1ABCFE] transition-colors">{CASE_STUDIES[prevSlug].title}</div>
                </div>
              </Link>
            ) : <div />}
            {nextSlug ? (
              <Link
                to={`/case/${nextSlug}`}
                data-testid="case-next"
                data-cursor
                data-cursor-label="next"
                className="figma-card relative p-5 flex items-center justify-end gap-4 group md:col-start-2"
              >
                <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />
                <div className="text-right">
                  <div className="mono-label">Next</div>
                  <div className="font-serif text-xl mt-1 group-hover:text-[#1ABCFE] transition-colors">{CASE_STUDIES[nextSlug].title}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E5E5E5] py-10 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
          <span className="mono-label">© 2026 · Manisha/Shah · UI/UX Portfolio</span>
          <Link to="/" data-testid="case-footer-home" className="mono-label hover:text-[#1ABCFE] transition-colors">← back to home</Link>
        </div>
      </footer>
    </div>
  );
}
