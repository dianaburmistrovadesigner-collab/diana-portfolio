import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { amigoFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

type Block = { label: string; body: string };

// Single tight line per block — canvas is a scan, not a read.
const blocks: Block[] = [
  { label: "Problem", body: "Tool fragmentation, no client organization, decision fatigue." },
  { label: "Customer segments", body: "Solopreneurs, freelance marketers, agency owners." },
  { label: "Solution", body: "Unified workspace + AI Brain + customizable personalities." },
  { label: "Channels", body: "Content marketing, Product Hunt, creator-economy partners." },
  { label: "Revenue", body: "Hybrid: BYOK Free · Pro $30/mo with credits." },
  { label: "Cost structure", body: "$45–55/mo fixed · $11–17 / user variable. MVP: $410–590." },
  { label: "Key metrics", body: "60% Day-7 retention · 80% activation · 75% BYOK split." },
  { label: "Unfair advantage", body: "AI Brain with selective sharing — hard-to-replicate." },
];

export function AmigoLeanCanvas() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Lean Canvas · Business model
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
            The hybrid BYOK + Pro bet
          </h2>
        </div>
        <a
          href={amigoFigmaLinks.leanCanvas}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </header>

      {/* UVP hero — dark card spans full width */}
      <div className="rounded-2xl bg-[#0a0a0a] p-6 text-white md:p-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          <span className="text-[10px] uppercase tracking-[0.16em] text-white/55">
            Unique value proposition
          </span>
        </div>
        <p className="mt-3 text-[20px] leading-tight md:text-[24px]" style={{ color: "#fff" }}>
          The AI workspace that thinks like a team.
        </p>
        <p className="mt-3 max-w-[72ch] text-[13.5px] leading-[1.6] text-white/70">
          The only platform with free BYOK alongside a Pro subscription — organized by project, with
          personalities that feel like supportive friends. Work + Fun.
        </p>
      </div>

      {/* 8 remaining cells */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {blocks.map((b) => (
          <div key={b.label} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
            <div className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">{b.label}</div>
            <p className="mt-2 text-[13px] leading-snug text-[#3a3a36]">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
    </LocalizedContent>
  );
}
