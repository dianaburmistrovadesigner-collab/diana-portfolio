import { LocalizedContent } from "./localized-content";
const ACCENT = "#0E9488";

export function CaseOverview() {
  return (
    <LocalizedContent>
    <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1320px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
              01 · Context
            </div>
            <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
              About the project
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <p className="max-w-[60ch] text-[17px] leading-[1.6] text-[#3a3a36]">
              AIMLAPI is a unified gateway to 300+ AI/ML models — one API, one billing surface,
              one playground. The product was built developer-first, but the audience kept
              shifting: product managers, marketers and solo entrepreneurs were arriving in
              numbers the original UI was never designed for.
            </p>
            <p className="max-w-[60ch] text-[15px] leading-[1.65] text-[#6F6F6A]">
              I led the end-to-end redesign — from competitor and user research to information
              architecture, key flows and a prioritised MVP roadmap. The goal: keep developers
              happy while making the platform legible, trustworthy and useful for everyone else.
            </p>

            {/* Problem / Goal / Outcome */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-3">
              {[
                {
                  k: "Problem",
                  v: "300+ models, but the dashboard, pricing and key-management surfaces were unreadable for non-technical roles.",
                },
                {
                  k: "Goal",
                  v: "A product that lets a marketer ship an AI workflow without writing code — and an engineer integrate it without losing trust.",
                },
                {
                  k: "Outcome",
                  v: "A flatter IA with 3 new sections, role-based modes, a transparent cost model and a phased 12-month roadmap.",
                },
              ].map((b, i) => (
                <div key={b.k} className="bg-white p-6">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: i === 1 ? ACCENT : "#0a0a0a" }}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                      {b.k}
                    </span>
                  </div>
                  <div className="mt-2 text-[14px] leading-snug text-[#050505]">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </LocalizedContent>
  );
}
