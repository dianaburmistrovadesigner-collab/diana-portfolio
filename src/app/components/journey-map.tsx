type Stage = {
  index: number;
  title: string;
  action: string;
  emotion: number; // 0..4
  moment?: string;
  quote?: string;
};

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  goal: string;
  stages: Stage[];
  accent?: string;
};

const ACCENT = "#E86A4B"; // soft coral

export function JourneyMap({ eyebrow, title, subtitle, goal, stages, accent = ACCENT }: Props) {
  const W = 1200;
  const H = 220;
  const padX = 60;
  const colW = (W - padX * 2) / (stages.length - 1);
  const yFor = (e: number) => {
    // 0 -> bottom (180), 4 -> top (40)
    const top = 40;
    const bottom = 180;
    return top + (1 - e / 4) * (bottom - top);
  };

  const points = stages.map((s, i) => ({ x: padX + i * colW, y: yFor(s.emotion) }));

  // Smooth path with Catmull-Rom -> Bezier
  const path = (() => {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  })();

  const gridY = [yFor(4), yFor(2), yFor(0)];
  const labels = ["Positive", "Neutral", "Negative"];

  return (
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
            {eyebrow}
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">{title}</h2>
          <p className="mt-2 text-[14px] text-[#6F6F6A]">{subtitle}</p>
        </div>
        <div className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] px-4 py-3 text-[13px] text-[#3a3a36] md:max-w-xs">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">Goal</div>
          <div className="mt-1">{goal}</div>
        </div>
      </header>

      {/* Stage titles + actions */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}
      >
        {stages.map((s) => (
          <div key={s.index} className="px-1">
            <div className="flex items-center gap-2">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] text-white"
                style={{ background: "#111" }}
              >
                {s.index}
              </span>
              <div className="text-[13px] leading-tight text-[#050505]">{s.title}</div>
            </div>
            <div className="mt-2 text-[12px] leading-snug text-[#6F6F6A]">{s.action}</div>
          </div>
        ))}
      </div>

      {/* Emotion chart */}
      <div className="mt-6 rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">Emotion curve</div>
          <div className="flex items-center gap-3 text-[11px] text-[#6F6F6A]">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
              experience
            </span>
          </div>
        </div>
        <div className="relative w-full">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="block h-[200px] w-full"
            preserveAspectRatio="none"
          >
            {gridY.map((y, i) => (
              <g key={i}>
                <line x1={padX} x2={W - padX} y1={y} y2={y} stroke="#E8E8E3" strokeDasharray="3 4" />
                <text x={8} y={y + 4} fontSize="11" fill="#8A8A84">
                  {labels[i]}
                </text>
              </g>
            ))}
            {/* vertical light guides */}
            {points.map((p, i) => (
              <line
                key={i}
                x1={p.x}
                x2={p.x}
                y1={30}
                y2={190}
                stroke="#EFEFEA"
                strokeWidth={1}
              />
            ))}
            <path d={path} fill="none" stroke={accent} strokeWidth={2.5} strokeLinecap="round" />
            {points.map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r={7} fill="white" stroke={accent} strokeWidth={2.5} />
                <circle cx={p.x} cy={p.y} r={2.5} fill={accent} />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Moments of truth + quotes */}
      <div
        className="mt-4 grid gap-3"
        style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}
      >
        {stages.map((s) => (
          <div key={s.index} className="flex min-w-0 flex-col px-1">
            <div className="min-h-[22px]">
              {s.moment && (
                <div
                  className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.1em]"
                  style={{ borderColor: accent, color: accent }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                  Moment of truth
                </div>
              )}
            </div>
            {s.quote && (
              <div className="mt-2 w-full rounded-lg border border-[#E8E8E3] bg-white px-2.5 py-2 text-[11px] leading-snug text-[#3a3a36]">
                “{s.quote}”
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
