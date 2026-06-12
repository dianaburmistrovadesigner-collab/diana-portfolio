import { LocalizedContent } from "./localized-content";
import {
  AlertTriangle,
  BarChart3,
  Compass,
  Gauge,
  KeyRound,
  LineChart,
  Table2,
  Users,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const ACCENT = "#7C5CFF";

type Idea = {
  n: string;
  title: string;
  desc: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  // position in % of container (center of card)
  cx: number;
  cy: number;
};

const ideas: Idea[] = [
  { n: "01", title: "Fix Dashboard",                  desc: "Money instead of tokens · real key names.", icon: Gauge,          cx: 50, cy: 10 },
  { n: "02", title: "Analytics by OUTPUT type",       desc: "Split by Text · Image · Audio · Video.",    icon: BarChart3,      cx: 83, cy: 23 },
  { n: "03", title: "Critical alerts",                desc: "Balance thresholds + anomaly detection.",   icon: AlertTriangle,  cx: 89, cy: 50 },
  { n: "04", title: "Model selection system",         desc: "Side-by-side compare + AI helper.",         icon: Compass,        cx: 83, cy: 77 },
  { n: "05", title: "Manager-friendly analytics",     desc: "Plain table: model / requests / cost.",     icon: Table2,         cx: 50, cy: 90 },
  { n: "06", title: "Smart API keys",                 desc: "Per-key limits and dedicated alerts.",      icon: KeyRound,       cx: 17, cy: 77 },
  { n: "07", title: "Roles & team access",            desc: "Granular permissions across workspace.",    icon: Users,          cx: 11, cy: 50 },
  { n: "08", title: "Shift to Business Intelligence", desc: "Reframe the product as a BI surface.",      icon: LineChart,      cx: 17, cy: 23 },
];

const modes = [
  { label: "Beginner Mode", desc: "Minimal surface, guided defaults." },
  { label: "Business Mode", desc: "Spend, ROI, team controls." },
  { label: "Expert Mode", desc: "Full API and granular tuning." },
];

export function BlockIdeation() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          Ideation · Solution map
        </div>
        <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
          From a single problem to eight design moves
        </h2>
        <p className="mt-2 text-[14px] text-[#6F6F6A]">
          One framing question opened a tree of focused interventions across the dashboard,
          analytics, alerts, access and the product's overall posture.
        </p>
      </header>

      {/* Radial map: desktop */}
      <div className="relative mx-auto hidden h-[760px] w-full max-w-[1100px] md:block">
        {/* Connector lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {ideas.map((i) => (
            <line
              key={i.n}
              x1={50}
              y1={50}
              x2={i.cx}
              y2={i.cy}
              stroke="#A8A8A2"
              strokeWidth={0.35}
              strokeDasharray="0.9 0.7"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* Center problem */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%", top: "50%" }}
        >
          <div
            className="flex h-[230px] w-[300px] flex-col items-center justify-center rounded-full px-8 text-center text-white"
            style={{ background: "#0a0a0a" }}
          >
            <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/55">
              Problem
            </div>
            <div className="text-[15px] leading-snug">
              300+ AI models, but the interface is too complex for non-technical users.
            </div>
            <div className="mt-2 text-[11px] leading-snug text-white/55">
              Critical info buried in developer-only docs.
            </div>
          </div>
        </div>

        {/* Idea pills */}
        {ideas.map((i) => {
          const Icon = i.icon;
          return (
            <div
              key={i.n}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${i.cx}%`, top: `${i.cy}%` }}
            >
              <article className="w-[240px] rounded-2xl border border-[#E8E8E3] bg-white p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_8px_24px_-16px_rgba(0,0,0,0.12)]">
                <div className="flex items-start gap-2.5">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `${ACCENT}14`, color: ACCENT }}
                  >
                    <Icon width={16} height={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">
                        {i.n}
                      </span>
                      <span className="text-[13px] leading-tight text-[#050505]">
                        {i.title}
                      </span>
                    </div>
                    <div className="mt-1 text-[11.5px] leading-snug text-[#6F6F6A]">
                      {i.desc}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      {/* Mobile fallback: stacked */}
      <div className="md:hidden">
        <div className="mb-4 rounded-2xl bg-[#0a0a0a] p-6 text-white">
          <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/55">
            Problem
          </div>
          <div className="text-[15px] leading-snug">
            300+ AI models, but the interface is too complex for non-technical users.
          </div>
          <div className="mt-2 text-[11px] leading-snug text-white/55">
            Critical info buried in developer-only docs.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {ideas.map((i) => {
            const Icon = i.icon;
            return (
              <article
                key={i.n}
                className="rounded-2xl border border-[#E8E8E3] bg-white p-3.5"
              >
                <div className="flex items-start gap-2.5">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `${ACCENT}14`, color: ACCENT }}
                  >
                    <Icon width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-[13px] leading-tight text-[#050505]">
                      <span className="mr-1.5 text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">
                        {i.n}
                      </span>
                      {i.title}
                    </div>
                    <div className="mt-1 text-[12px] leading-snug text-[#6F6F6A]">
                      {i.desc}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Mode pills */}
      <div className="mt-10">
        <div className="mb-3 flex items-baseline justify-between">
          <h3 className="text-[16px] text-[#050505]">Adaptive product modes</h3>
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
            Same product · three reading levels
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {modes.map((m, idx) => (
            <div
              key={m.label}
              className="flex items-center justify-between rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-5 py-3"
            >
              <div className="inline-flex items-center gap-3">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] text-white"
                  style={{ background: idx === 1 ? ACCENT : "#111" }}
                >
                  {idx + 1}
                </span>
                <div>
                  <div className="text-[13px] text-[#050505]">{m.label}</div>
                  <div className="text-[11px] text-[#6F6F6A]">{m.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </LocalizedContent>
  );
}
