import { LocalizedContent } from "./localized-content";
export function CaseHero() {
  return (
    <LocalizedContent>
    <header className="relative overflow-hidden border-b border-[#E8E8E3] bg-white">
      <div className="mx-auto max-w-[1320px] px-6 pb-20 pt-12 md:pb-28 md:pt-16">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0E9488]" />
          UX case study · AIMLAPI
        </div>

        {/* Hero copy */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="max-w-[14ch] text-[44px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[72px]">
            Turning a developer-only AI platform into a product for everyone.
          </h1>
          <p className="max-w-[42ch] text-[15px] leading-[1.55] text-[#6F6F6A] md:text-[17px]">
            Redesigning AIMLAPI — a gateway to 300+ AI models — for the 80% of users who don't
            write code: managers, marketers, solo makers and the teams that hire developers
            after them.
          </p>
        </div>

        {/* Meta strip */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-4">
          {[
            { label: "Role", value: "Lead Product Designer" },
            { label: "Scope", value: "Research → IA → UI → MVP plan" },
            { label: "Duration", value: "≈ 3 months" },
            { label: "Team", value: "Solo · PM & 1 engineer" },
          ].map((m) => (
            <div key={m.label} className="bg-white p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                {m.label}
              </div>
              <div className="mt-1.5 text-[14px] text-[#050505]">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
    </LocalizedContent>
  );
}
