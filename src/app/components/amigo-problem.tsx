import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { amigoFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

type Pain = { metric: string; label: string };
const pains: Pain[] = [
  { metric: "15–25×", label: "tool switches every day" },
  { metric: "$65+", label: "wasted on fragmented subscriptions" },
  { metric: "50+", label: "AI tools to choose from — paralysis" },
];

export function AmigoProblem() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Problem statement
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
            One sentence that frames every design decision
          </h2>
        </div>
        <a
          href={amigoFigmaLinks.problemStatement}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </header>

      {/* Hero statement */}
      <blockquote
        className="border-l-2 pl-5 text-[20px] leading-[1.45] text-[#050505] md:text-[24px]"
        style={{ borderColor: ACCENT }}
      >
        “Independent content creators feel trapped between simple-but-limited AI tools and
        powerful-but-chaotic ones. This forces them to sacrifice either capabilities or peace of
        mind.”
      </blockquote>

      {/* Pain metrics */}
      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {pains.map((p) => (
          <div
            key={p.label}
            className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-6"
          >
            <div className="font-mono text-[36px] leading-none text-[#050505]">{p.metric}</div>
            <div className="mt-2 text-[13px] leading-snug text-[#6F6F6A]">{p.label}</div>
          </div>
        ))}
      </div>

      {/* Surprising insight — single hero */}
      <div className="mt-10 grid gap-4 rounded-2xl bg-[#0a0a0a] p-6 text-white md:grid-cols-[180px_1fr] md:p-8">
        <div>
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/55">
            Surprising insight
          </div>
          <div
            className="mt-2 text-[18px] leading-tight"
            style={{ color: ACCENT }}
          >
            They want to feel heard.
          </div>
        </div>
        <p className="text-[14px] leading-[1.6] text-white/80">
          Users don't just want more features — they want emotional support during overwhelming
          moments before a deadline. That insight reframed the entire product personality: from a
          neutral tool to a supportive teammate.
        </p>
      </div>
    </section>
    </LocalizedContent>
  );
}
