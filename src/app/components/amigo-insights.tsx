import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { amigoFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

type Insight = {
  n: string;
  title: string;
  tags: string;
  quote: string;
  who: string;
};

const TOTAL = 19;

// A curated selection of the most telling insights — all 19 live in Figma
const insights: Insight[] = [
  { n: "02", title: "AI as a strategic partner, not a task executor", tags: "Cognitive partnership", quote: "AI is not a helper — it's a structural backbone.", who: "P1" },
  { n: "06", title: "Context loss when switching between tools", tags: "Workflow interruption", quote: "Tool switching is major friction.", who: "P1" },
  { n: "11", title: "Fragmentation across specialized tools", tags: "Consolidation · All-in-one", quote: "If only there was one workspace for everything.", who: "P3" },
  { n: "13", title: "Inability to control AI's working memory", tags: "Control · User impact", quote: "I have no way to control the context.", who: "P1" },
  { n: "10", title: "Emotional need for empowerment", tags: "Emotional driver", quote: "I like feeling powerful.", who: "P2" },
  { n: "19", title: "Cognitive overload from tool complexity", tags: "Overload · Distress", quote: "It just gives me paranoia.", who: "P3" },
];

export function AmigoInsights() {
  return (
    <LocalizedContent>
    <figure className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8E8E3] bg-[#FAFAF8] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            Interview insights · {insights.length} of {TOTAL} shown
          </span>
        </div>
      </div>

      <div className="grid gap-px bg-[#E8E8E3] sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((it) => (
          <article key={it.n} className="flex flex-col bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#B8B8B2]">{it.n}</span>
              <span
                className="rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em]"
                style={{ background: `${ACCENT}14`, color: ACCENT }}
              >
                {it.who}
              </span>
            </div>
            <h4 className="mt-2 text-[15px] leading-snug text-[#050505]">{it.title}</h4>
            <blockquote className="mt-3 border-l-2 pl-3 text-[13px] leading-snug text-[#3a3a36]" style={{ borderColor: "#E0E0DA" }}>
              “{it.quote}”
            </blockquote>
            <div className="mt-auto pt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#A6A6A0]">
              {it.tags}
            </div>
          </article>
        ))}
      </div>

      <a
        href={amigoFigmaLinks.interviews}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 border-t border-[#E8E8E3] bg-[#FAFAF8] px-5 py-4 text-[13px] text-[#050505] hover:bg-[#F2F2EE]"
      >
        <FigmaLinkLabel /> · all {TOTAL} insights →
      </a>
    </figure>
    </LocalizedContent>
  );
}
