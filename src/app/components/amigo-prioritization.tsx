import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { amigoFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

type Kano = {
  label: string;
  tone: string;
  description: string;
  features: string[];
};

const kano: Kano[] = [
  {
    label: "Must-Be",
    tone: "#6F6F6A",
    description: "Expected baseline — absence kills adoption.",
    features: ["Thread-based workspaces", "Authentication"],
  },
  {
    label: "Performance",
    tone: "#0a0a0a",
    description: "More is better — drives satisfaction linearly.",
    features: ["Multi-model chat", "Templates with workflow params"],
  },
  {
    label: "Delighters",
    tone: ACCENT,
    description: "Unexpected value — creates the emotional moat.",
    features: ["BYOK ⭐ free tier", "Customizable personalities ⭐", "AI Brain · selective context"],
  },
];

// x: effort (0 low → 1 high), y: impact (0 low → 1 high)
type MatrixItem = { label: string; x: number; y: number };
const items: MatrixItem[] = [
  // Quick wins — high impact, low effort
  { label: "BYOK ⭐", x: 0.22, y: 0.9 },
  { label: "Personalities ⭐", x: 0.3, y: 0.82 },
  { label: "Templates", x: 0.18, y: 0.65 },
  // Major projects — high impact, high effort
  { label: "Workspaces", x: 0.7, y: 0.86 },
  { label: "AI Brain", x: 0.8, y: 0.88 },
  { label: "Personal AI Assistant", x: 0.72, y: 0.74 },
  // Fill-ins — low effort, lower impact
  { label: "Notion sync", x: 0.22, y: 0.4 },
  { label: "File upload", x: 0.16, y: 0.32 },
];

export function AmigoPrioritization() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            MVP strategy · Prioritization
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
            What ships first, what waits, and why
          </h2>
          <p className="mt-2 text-[14px] text-[#6F6F6A]">
            Kano model identifies the delighters that create the emotional moat. The impact-effort
            map then picks the early wins to ship inside the 11-week MVP window.
          </p>
        </div>
        <a
          href={amigoFigmaLinks.prioritization}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </header>

      {/* Kano */}
      <div className="grid gap-3 md:grid-cols-3">
        {kano.map((k) => (
          <div key={k.label} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: k.tone }} />
              <span
                className="text-[11px] uppercase tracking-[0.12em]"
                style={{ color: k.tone }}
              >
                {k.label}
              </span>
            </div>
            <p className="mt-2 text-[12.5px] leading-snug text-[#6F6F6A]">{k.description}</p>
            <ul className="mt-3 flex flex-col gap-1.5 border-t border-[#EFEFEA] pt-3">
              {k.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[12.5px] leading-snug text-[#3a3a36]"
                >
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                    style={{ background: k.tone }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="my-10 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#E8E8E3]" />
        <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
          Impact-effort map
        </span>
        <div className="h-px flex-1 bg-[#E8E8E3]" />
      </div>

      <PriorityMatrix />
    </section>
    </LocalizedContent>
  );
}

function PriorityMatrix() {
  const W = 1000;
  const H = 580;
  const pad = { l: 90, r: 40, t: 60, b: 80 };
  const innerW = W - pad.l - pad.r;
  const innerH = H - pad.t - pad.b;
  const toX = (x: number) => pad.l + x * innerW;
  const toY = (y: number) => pad.t + (1 - y) * innerH;
  const midX = pad.l + innerW / 2;
  const midY = pad.t + innerH / 2;

  const quadrants = [
    {
      x: pad.l,
      y: pad.t,
      w: innerW / 2,
      h: innerH / 2,
      label: "Quick wins",
      note: "High impact · low effort",
      accent: ACCENT,
      strong: true,
    },
    { x: midX, y: pad.t, w: innerW / 2, h: innerH / 2, label: "Major projects", note: "High impact · high effort" },
    { x: pad.l, y: midY, w: innerW / 2, h: innerH / 2, label: "Fill-ins", note: "Low impact · low effort" },
    { x: midX, y: midY, w: innerW / 2, h: innerH / 2, label: "Thankless", note: "None identified" },
  ];

  return (
    <div className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full">
        {quadrants.map((q, i) => (
          <g key={i}>
            <rect
              x={q.x}
              y={q.y}
              width={q.w}
              height={q.h}
              fill={q.strong ? ACCENT : "#ffffff"}
              fillOpacity={q.strong ? 0.07 : 1}
              stroke={q.strong ? `${ACCENT}55` : "#E8E8E3"}
              strokeDasharray={q.strong ? "5 5" : undefined}
              rx={8}
            />
            <text
              x={q.x + 14}
              y={q.y + 22}
              fontSize="12"
              fill={q.strong ? ACCENT : "#8A8A84"}
              fontWeight={500}
            >
              {q.label}
            </text>
            <text x={q.x + 14} y={q.y + 38} fontSize="10.5" fill="#8A8A84">
              {q.note}
            </text>
          </g>
        ))}

        <line x1={midX} y1={pad.t} x2={midX} y2={pad.t + innerH} stroke="#DEDED8" />
        <line x1={pad.l} y1={midY} x2={pad.l + innerW} y2={midY} stroke="#DEDED8" />

        <text x={pad.l} y={pad.t - 18} fontSize="11" fill="#8A8A84">
          Impact ↑ High
        </text>
        <text x={pad.l} y={pad.t + innerH + 22} fontSize="11" fill="#8A8A84">
          Impact ↓ Low
        </text>
        <text x={pad.l} y={pad.t + innerH + 52} fontSize="11" fill="#8A8A84">
          ← Low effort
        </text>
        <text
          x={pad.l + innerW}
          y={pad.t + innerH + 52}
          fontSize="11"
          fill="#8A8A84"
          textAnchor="end"
        >
          High effort →
        </text>

        {items.map((it) => {
          const cx = toX(it.x);
          const cy = toY(it.y);
          const inQuickWins = it.x < 0.5 && it.y > 0.5;
          const fill = inQuickWins ? ACCENT : "#111";
          const labelRight = cx < pad.l + innerW - 160;
          return (
            <g key={it.label}>
              <circle cx={cx} cy={cy} r={11} fill={fill} fillOpacity={0.1} />
              <circle cx={cx} cy={cy} r={6} fill={fill} />
              <text
                x={labelRight ? cx + 12 : cx - 12}
                y={cy + 4}
                fontSize="12"
                fill="#111"
                textAnchor={labelRight ? "start" : "end"}
              >
                {it.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-[#6F6F6A]">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: ACCENT }} />
          Quick wins
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#111]" />
          Major projects / fill-ins
        </span>
      </div>
    </div>
  );
}
