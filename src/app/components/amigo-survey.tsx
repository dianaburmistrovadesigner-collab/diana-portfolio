import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { amigoFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";
const GENERAL = "#B8B8B2";

// Headline stats — MVA segment only (the real target audience)
const headline = [
  ["100%", "of MVA want a better solution"],
  ["6.4×", "more likely to pay than General"],
  ["73%", "of MVA hit by context loss"],
  ["3.1", "avg. AI tools per MVA user"],
];

// Frustrations during AI projects — MVA vs General
const pains = [
  { label: "Tool switching", mva: 55, gen: 10, note: "MVA-specific · 5.5× higher" },
  { label: "Finding the right tool", mva: 45, gen: 14, note: "MVA-specific · 3× higher" },
  { label: "Context loss", mva: 73, gen: 57, note: "Universal · #1 overall" },
  { label: "Inconsistent results", mva: 55, gen: 57, note: "Universal" },
];

const takeaways = [
  {
    k: "Tool switching is the #1 MVA-specific pain",
    v: "55% vs 10% — a multi-model workspace with seamless switching is the core value proposition.",
  },
  {
    k: "100% of MVA want something better",
    v: "Zero MVA respondents are satisfied with the status quo — a strong product-market-fit signal.",
  },
  {
    k: "Context loss is universal",
    v: "#1 frustration overall (66%) → persistent context memory is table stakes, solve it first for trust.",
  },
  {
    k: "Cost is MVA's #1 dislike (45%)",
    v: "MVA spend $20–$200+/mo on fragmented tools; a unified $16–30/mo bundle is competitive.",
  },
];

export function AmigoSurvey() {
  return (
    <LocalizedContent>
    <figure className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8E8E3] bg-[#FAFAF8] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            Survey · MVA-focused results
          </span>
        </div>
        <a
          href={amigoFigmaLinks.survey}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </div>

      <div className="flex flex-col gap-8 p-6 md:p-8">
        {/* Sampling note + segment split */}
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
              Reading the sample
            </div>
            <p className="mt-2 text-[13px] leading-[1.6] text-[#3a3a36]">
              32 completed responses (Feb 21 – Mar 9, 2026). Because of where the survey was posted,
              many <strong>students &amp; teachers</strong> replied — they aren't the target
              audience. The analysis focuses on the <strong>11 MVA professionals</strong> (marketers,
              designers, bloggers, power users), with the 21 general respondents kept only as a
              comparison baseline.
            </p>
          </div>

          {/* Segment split */}
          <div className="flex gap-3">
            <div className="rounded-2xl border p-5 text-center" style={{ borderColor: ACCENT, background: `${ACCENT}0F` }}>
              <div className="font-mono text-[28px] leading-none" style={{ color: ACCENT }}>
                11
              </div>
              <div className="mt-2 text-[12px] text-[#050505]">MVA professionals</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">
                34% · the target
              </div>
            </div>
            <div className="rounded-2xl border border-[#E8E8E3] bg-white p-5 text-center">
              <div className="font-mono text-[28px] leading-none text-[#8A8A84]">21</div>
              <div className="mt-2 text-[12px] text-[#050505]">General / students</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#A6A6A0]">
                66% · baseline
              </div>
            </div>
          </div>
        </div>

        {/* MVA headline */}
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            The MVA professionals
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-4">
            {headline.map(([k, v]) => (
              <div key={v} className="bg-white p-5">
                <div className="font-mono text-[30px] leading-none" style={{ color: ACCENT }}>
                  {k}
                </div>
                <div className="mt-2 text-[12px] leading-snug text-[#6F6F6A]">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pain points MVA vs General */}
        <div>
          <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            Pain points · MVA vs General
          </div>
          <div className="mb-4 flex items-center gap-4 text-[11px] text-[#8A8A84]">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} /> MVA
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: GENERAL }} /> General
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {pains.map((p) => (
              <div key={p.label}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3">
                  <span className="text-[13px] text-[#3a3a36]">{p.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#A6A6A0]">
                    {p.note}
                  </span>
                </div>
                <CompareBar mva={p.mva} gen={p.gen} />
              </div>
            ))}
          </div>
        </div>

        {/* Takeaways */}
        <div>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            Key takeaways
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {takeaways.map((t, i) => (
              <div key={t.k} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-[#B8B8B2]">0{i + 1}</span>
                  <span className="text-[14px] text-[#050505]">{t.k}</span>
                </div>
                <p className="mt-2 text-[13px] leading-snug text-[#6F6F6A]">{t.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
    </LocalizedContent>
  );
}

function CompareBar({ mva, gen }: { mva: number; gen: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#F0F0EB]">
          <div className="h-full rounded-full" style={{ width: `${mva}%`, background: ACCENT }} />
        </div>
        <span className="w-9 shrink-0 font-mono text-[11px] text-[#050505]">{mva}%</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#F0F0EB]">
          <div className="h-full rounded-full" style={{ width: `${gen}%`, background: GENERAL }} />
        </div>
        <span className="w-9 shrink-0 font-mono text-[11px] text-[#8A8A84]">{gen}%</span>
      </div>
    </div>
  );
}
