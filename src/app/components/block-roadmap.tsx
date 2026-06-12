import { LocalizedContent } from "./localized-content";
const ACCENT = "#3B6FE0";

type MatrixItem = { label: string; x: number; y: number };

// x: effort (0 low → 1 high), y: impact (0 low → 1 high)
const items: MatrixItem[] = [
  // High impact / low effort — do now
  { label: "Fix Dashboard", x: 0.18, y: 0.85 },
  { label: "Critical alerts", x: 0.28, y: 0.72 },
  { label: "Analytics by content type", x: 0.36, y: 0.82 },
  // High impact / high effort — plan
  { label: "Model selection system", x: 0.72, y: 0.86 },
  { label: "Advanced analytics", x: 0.82, y: 0.7 },
  { label: "Smart API keys", x: 0.68, y: 0.74 },
  // Lower priority
  { label: "Playground v2.0", x: 0.7, y: 0.22 },
  { label: "Community features", x: 0.34, y: 0.18 },
];

const phases = [
  {
    n: "Phase 1",
    range: "1–2 months",
    title: "Fix the foundation",
    items: ["Dashboard rework", "Content-type analytics", "Critical alerts"],
  },
  {
    n: "Phase 2",
    range: "2–4 months",
    title: "Add uniqueness",
    items: ["Model selection system", "Manager analytics", "Smart API keys"],
  },
  {
    n: "Phase 3",
    range: "6–12 months",
    title: "Build ecosystem",
    items: ["Team access & roles", "BI platform", "AI assistant"],
  },
];

export function BlockRoadmap() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          MVP strategy · Prioritization
        </div>
        <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
          What ships first, what waits, and why
        </h2>
        <p className="mt-2 text-[14px] text-[#6F6F6A]">
          An impact / effort map identifies the early wins; a phased roadmap stages the rest
          across the next year.
        </p>
      </header>

      <PriorityMatrix />

      <div className="my-10 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#E8E8E3]" />
        <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
          Roadmap timeline
        </span>
        <div className="h-px flex-1 bg-[#E8E8E3]" />
      </div>

      <Roadmap />
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
    { x: pad.l, y: pad.t, w: innerW / 2, h: innerH / 2, label: "Do now", note: "High impact · low effort", accent: ACCENT, strong: true },
    { x: midX, y: pad.t, w: innerW / 2, h: innerH / 2, label: "Plan", note: "High impact · high effort" },
    { x: pad.l, y: midY, w: innerW / 2, h: innerH / 2, label: "Nice to have", note: "Low impact · low effort" },
    { x: midX, y: midY, w: innerW / 2, h: innerH / 2, label: "Avoid", note: "Low impact · high effort" },
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

        {/* Axes */}
        <line x1={midX} y1={pad.t} x2={midX} y2={pad.t + innerH} stroke="#DEDED8" />
        <line x1={pad.l} y1={midY} x2={pad.l + innerW} y2={midY} stroke="#DEDED8" />

        {/* Axis labels */}
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

        {/* Items */}
        {items.map((it) => {
          const cx = toX(it.x);
          const cy = toY(it.y);
          const inDoNow = it.x < 0.5 && it.y > 0.5;
          const fill = inDoNow ? ACCENT : "#111";
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
          Do now
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#111]" />
          Plan / later
        </span>
      </div>
    </div>
  );
}

function Roadmap() {
  return (
    <div>
      {/* Timeline rail — line runs through circle centers, labels sit below */}
      <div className="mb-6 px-2">
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#DEDED8]" />
          <div className="relative grid grid-cols-3">
            {phases.map((p, i) => (
              <div key={p.n} className="flex justify-center">
                <span
                  className={
                    "z-10 flex h-7 w-7 items-center justify-center rounded-full text-[11px] " +
                    (i === 0 ? "text-white" : "border bg-white text-[#050505]")
                  }
                  style={{
                    background: i === 0 ? ACCENT : undefined,
                    borderColor: "#E8E8E3",
                  }}
                >
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3">
          {phases.map((p) => (
            <div key={p.n} className="text-center">
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                {p.range}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {phases.map((p, i) => (
          <div
            key={p.n}
            className="rounded-2xl border border-[#E8E8E3] bg-white p-5"
            style={
              i === 0
                ? { borderColor: `${ACCENT}66`, boxShadow: `0 0 0 3px ${ACCENT}10` }
                : undefined
            }
          >
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                {p.n}
              </span>
              <span className="text-[11px] text-[#8A8A84]">{p.range}</span>
            </div>
            <div className="mt-2 text-[15px] text-[#050505]">{p.title}</div>
            <ul className="mt-4 flex flex-col gap-2">
              {p.items.map((it) => (
                <li key={it}>
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[12px] text-[#3a3a36]"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: i === 0 ? ACCENT : "#B8B8B2" }}
                    />
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
