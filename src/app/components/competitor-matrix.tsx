import { LocalizedContent } from "./localized-content";
const ACCENT = "#0E9488"; // teal

type Dot = { name: string; x: number; y: number; note?: string };

const competitors: Dot[] = [
  { name: "OpenAI", x: 0.26, y: 0.58 },
  { name: "Hugging Face", x: 0.12, y: 0.1, note: "overloaded" },
  { name: "Anthropic", x: 0.32, y: 0.62 },
  { name: "OpenRouter", x: 0.3, y: 0.42 },
  { name: "Replicate", x: 0.4, y: 0.55 },
  { name: "fal.ai", x: 0.36, y: 0.5 },
  { name: "Together AI", x: 0.22, y: 0.32 },
  { name: "Mistral", x: 0.2, y: 0.38 },
  { name: "Cohere", x: 0.16, y: 0.26 },
  { name: "ElevenLabs", x: 0.46, y: 0.66 },
  { name: "Fireworks", x: 0.18, y: 0.2 },
  { name: "Vercel", x: 0.5, y: 0.7 },
];

export function CompetitorMatrix() {
  const W = 1000;
  const H = 620;
  const pad = { l: 80, r: 40, t: 40, b: 80 };
  const innerW = W - pad.l - pad.r;
  const innerH = H - pad.t - pad.b;
  const toX = (x: number) => pad.l + x * innerW;
  const toY = (y: number) => pad.t + (1 - y) * innerH;
  const midX = pad.l + innerW / 2;
  const midY = pad.t + innerH / 2;

  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          Competitive analysis · Positioning map
        </div>
        <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
          Where the AI API market sits today
        </h2>
        <p className="mt-2 text-[14px] text-[#6F6F6A]">
          Most providers cluster in the developer-heavy, feature-overloaded quadrant. The
          top-right — simple and accessible to everyone — is an open niche.
        </p>
      </header>

      <div className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full">
          {/* Quadrant highlight: top-right (simple + everyone) */}
          <rect
            x={midX}
            y={pad.t}
            width={innerW / 2}
            height={innerH / 2}
            fill={ACCENT}
            fillOpacity={0.07}
            stroke={ACCENT}
            strokeOpacity={0.35}
            strokeDasharray="5 5"
            rx={8}
          />
          <text
            x={midX + innerW / 4}
            y={pad.t + 28}
            fontSize="13"
            fill={ACCENT}
            textAnchor="middle"
            fontWeight={500}
          >
            Free niche
          </text>
          <text
            x={midX + innerW / 4}
            y={pad.t + 48}
            fontSize="11"
            fill={ACCENT}
            textAnchor="middle"
          >
            minimalism · cost optimization · automation
          </text>

          {/* Frame */}
          <rect
            x={pad.l}
            y={pad.t}
            width={innerW}
            height={innerH}
            fill="none"
            stroke="#E8E8E3"
            rx={4}
          />

          {/* Cross axes */}
          <line x1={midX} y1={pad.t} x2={midX} y2={pad.t + innerH} stroke="#DEDED8" />
          <line x1={pad.l} y1={midY} x2={pad.l + innerW} y2={midY} stroke="#DEDED8" />

          {/* Axis labels */}
          <text x={pad.l} y={pad.t - 14} fontSize="11" fill="#8A8A84">
            Y ↑ Simple / minimal
          </text>
          <text x={pad.l} y={pad.t + innerH + 22} fontSize="11" fill="#8A8A84">
            Y ↓ Complex / overloaded
          </text>
          <text x={pad.l} y={pad.t + innerH + 52} fontSize="11" fill="#8A8A84">
            X ← For developers only
          </text>
          <text
            x={pad.l + innerW}
            y={pad.t + innerH + 52}
            fontSize="11"
            fill="#8A8A84"
            textAnchor="end"
          >
            For everyone / no-code →
          </text>

          {/* Dots */}
          {competitors.map((c) => {
            const cx = toX(c.x);
            const cy = toY(c.y);
            // Label placement: right of dot, but flip left near right edge
            const labelRight = cx < pad.l + innerW - 120;
            return (
              <g key={c.name}>
                <circle cx={cx} cy={cy} r={6} fill="#111" />
                <circle cx={cx} cy={cy} r={11} fill="#111" fillOpacity={0.08} />
                <text
                  x={labelRight ? cx + 12 : cx - 12}
                  y={cy + 4}
                  fontSize="12"
                  fill="#111"
                  textAnchor={labelRight ? "start" : "end"}
                >
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-[#6F6F6A]">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#111]" />
          Competitor
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="h-2.5 w-4 rounded-sm"
            style={{ background: ACCENT, opacity: 0.2, border: `1px dashed ${ACCENT}` }}
          />
          Open positioning niche
        </span>
      </div>

      {/* Must-have baseline strip */}
      <div className="mt-10">
        <div className="mb-3 flex items-baseline justify-between">
          <h3 className="text-[16px] text-[#050505]">Must-have baseline</h3>
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
            Table stakes across the market
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Playground / testing",
              desc: "Inline prompt runs and side-by-side model comparison.",
            },
            {
              n: "02",
              title: "Model catalog with filters",
              desc: "Search, tags, sorting by task, popularity, modality.",
            },
            {
              n: "03",
              title: "Cost analytics & alerts",
              desc: "Usage breakdowns, budgets, thresholds, team roles.",
            },
          ].map((c) => (
            <div
              key={c.n}
              className="rounded-2xl border border-[#E8E8E3] bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
                  {c.n}
                </span>
                <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} />
              </div>
              <div className="mt-3 text-[15px] text-[#050505]">{c.title}</div>
              <div className="mt-1.5 text-[13px] leading-snug text-[#6F6F6A]">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </LocalizedContent>
  );
}
