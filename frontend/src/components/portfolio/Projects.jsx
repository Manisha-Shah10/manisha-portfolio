import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { CASE_STUDIES, CASE_STUDY_ORDER, NOTION_PORTFOLIO_URL } from "@/data/caseStudies";

const SPANS = [
  "md:col-span-8 md:row-span-2",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
];

function Card({ cs, index }) {
  const isWip = cs.status === "wip";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className={`${SPANS[index] || "md:col-span-6"} relative`}
    >
      <Link
        to={`/case/${cs.slug}`}
        className="figma-card group block h-full"
        data-testid={`project-card-${cs.slug}`}
        data-cursor
        data-cursor-label={isWip ? "peek WIP" : "view case"}
        data-cursor-color={cs.accent}
      >
        <span className="anchor tl" /><span className="anchor tr" /><span className="anchor bl" /><span className="anchor br" />

        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[3]">
          <div className="absolute -top-6 left-0 right-0 h-4 flex items-center">
            <div className="flex-1 border-t border-dashed border-[#F24E1E]" />
            <span className="mx-2 text-[10px] font-mono text-[#F24E1E]">{cs.title}</span>
            <div className="flex-1 border-t border-dashed border-[#F24E1E]" />
          </div>
        </div>

        <div className="absolute -top-6 left-0 tag-badge" style={{ background: cs.accent, borderColor: cs.accent, color: "#fff" }}>
          {cs.title.toLowerCase().replace(/\s+/g, "-")}.fig
        </div>
        {isWip && (
          <div className="absolute top-3 right-3 z-[2] tag-badge" style={{ background: "#FFB020", borderColor: "#FFB020", color: "#1A1A1A" }}>
            HiFi WIP
          </div>
        )}

        <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EFEA]">
          <motion.img
            src={cs.thumbnail}
            alt={cs.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 55%, ${cs.accent}22 100%)` }} />
        </div>

        <div className="p-5 md:p-6 flex items-start justify-between gap-4 border-t border-[#E5E5E5]">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {cs.tags.slice(0, 3).map((t) => (
                <span key={t} className="tag-badge">{t}</span>
              ))}
              <span className="mono-label">{cs.year}</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">{cs.title}</h3>
            <p className="text-sm md:text-[15px] text-[#1A1A1A]/70 mt-1 line-clamp-2">{cs.tagline}</p>
          </div>
          <div className="shrink-0 w-9 h-9 border border-[#1A1A1A] flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors">
            <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const items = CASE_STUDY_ORDER.map((s) => CASE_STUDIES[s]);
  return (
    <section id="projects" className="relative py-24 md:py-36 border-t border-[#E5E5E5] bg-[#F9F8F6]" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-16">
          <div>
            <div className="mono-label mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#1A1A1A]" />
              <span>Frame · 03 · Selected work</span>
            </div>
            <h2 className="font-serif font-light text-4xl md:text-6xl leading-[1] text-[#1A1A1A]" data-testid="projects-heading">
              A garden of <span className="italic-serif text-[#E07A5F]">case studies</span>.
            </h2>
          </div>
          <a
            href={NOTION_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="projects-notion-link"
            data-cursor
            data-cursor-label="full portfolio"
            data-cursor-color="#1ABCFE"
            className="figma-btn secondary"
          >
            All work in Notion <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {items.map((cs, i) => (
            <Card key={cs.slug} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
