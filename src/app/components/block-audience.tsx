import { LocalizedContent } from "./localized-content";
const ACCENT = "#3B6FE0"; // calm blue

const personas = [
  {
    initials: "JW",
    name: "James Wilson",
    age: 38,
    role: "VP of Product",
    goal: "Measurable ROI from any AI investment.",
    pain: "No tech background to evaluate AI, constant CEO pressure.",
    quote: "I need numbers, not jargon.",
  },
  {
    initials: "TA",
    name: "Tom Anderson",
    age: 32,
    role: "Senior Python Developer",
    goal: "Reliable, well-documented API with no vendor lock-in.",
    pain: "Poor docs, unstable endpoints, breaking changes.",
    quote: "If the docs are bad, I'm gone in 10 minutes.",
  },
  {
    initials: "SC",
    name: "Sofia Chen",
    age: 27,
    role: "Digital Marketing Specialist",
    goal: "Automate routine work — without writing code.",
    pain: "Technical complexity and a tight personal budget.",
    quote: "I just want it to work, no setup pain.",
  },
];

const flow = [
  "Product Manager researches",
  "Calls Sales",
  "Sends Developer to integrate",
];

export function BlockAudience() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          Target audience · Personas
        </div>
        <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
          Who actually uses an AI API platform
        </h2>
        <p className="mt-2 text-[14px] text-[#6F6F6A]">
          The market skews heavily non-technical. Designing only for developers leaves four out
          of five users behind.
        </p>
      </header>

      {/* Ratio bar */}
      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
          <span>Audience composition</span>
          <span>Internet literacy</span>
        </div>
        <div className="flex h-[88px] overflow-hidden rounded-2xl border border-[#E8E8E3]">
          <div
            className="flex shrink-0 flex-col justify-between bg-[#FAFAF8] p-4"
            style={{ width: "20%" }}
          >
            <div className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">20%</div>
            <div className="text-[12px] leading-snug text-[#3a3a36]">
              Technical experts
              <span className="ml-1 text-[#8A8A84]">· 8/10</span>
            </div>
          </div>
          <div
            className="flex grow flex-col justify-between p-5 text-white"
            style={{ background: ACCENT }}
          >
            <div className="text-[11px] uppercase tracking-[0.12em] text-white/70">80%</div>
            <div className="text-[15px] leading-snug">
              Non-technical users
              <span className="ml-1 text-white/70">· literacy 2/10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Persona cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {personas.map((p) => (
          <article
            key={p.name}
            className="flex flex-col gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_8px_24px_-12px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-[14px] text-white"
                style={{ background: "#111" }}
              >
                {p.initials}
              </div>
              <div>
                <div className="text-[15px] text-[#050505]">
                  {p.name}
                  <span className="ml-1.5 text-[#8A8A84]">· {p.age}</span>
                </div>
                <div className="text-[12px] text-[#6F6F6A]">{p.role}</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-[#EFEFEA] pt-4">
              <Row label="Goal" value={p.goal} dot={ACCENT} />
              <Row label="Pain" value={p.pain} dot="#C24A3A" />
            </div>

            <div className="rounded-xl border border-[#E8E8E3] bg-[#FAFAF8] px-4 py-3 text-[13px] leading-snug text-[#3a3a36]">
              “{p.quote}”
            </div>
          </article>
        ))}
      </div>

      {/* Decision flow */}
      <div className="mt-10">
        <div className="mb-3 text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
          Typical B2B decision flow
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {flow.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-4 py-2 text-[13px] text-[#3a3a36]">
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white"
                  style={{ background: ACCENT }}
                >
                  {i + 1}
                </span>
                {step}
              </div>
              {i < flow.length - 1 && (
                <svg width="20" height="10" viewBox="0 0 20 10" className="text-[#B8B8B2]">
                  <path
                    d="M0 5 H16 M12 1 L16 5 L12 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </LocalizedContent>
  );
}

function Row({ label, value, dot }: { label: string; value: string; dot: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
        <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">{label}</span>
      </div>
      <div className="text-[13px] leading-snug text-[#3a3a36]">{value}</div>
    </div>
  );
}
