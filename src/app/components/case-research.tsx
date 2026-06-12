import { LocalizedContent } from "./localized-content";
const ACCENT = "#0E9488";

const findings = [
  {
    n: "01",
    title: "Tokens are a foreign language",
    body: "Non-technical users couldn't translate token counts into money. Balance had no anchor in USD, and there was no story for what was being spent and on what.",
  },
  {
    n: "02",
    title: "Model choice is guesswork",
    body: "Across roles, the recurring quote was “I don't know which model to pick.” People landed on a model by trial and error or copied a colleague's recipe.",
  },
  {
    n: "03",
    title: "API keys live outside the team",
    body: "Keys had no names, no per-key limits, no team access. A single bot-driven spike could quietly burn a month's budget before anyone noticed.",
  },
  {
    n: "04",
    title: "Docs do the work the UI should",
    body: "Critical setup info lived only in developer docs. Anyone without a developer in the room would stall before the first successful request.",
  },
];

const quotes = [
  {
    text: "I need numbers I can show my CEO, not token counts.",
    who: "VP of Product",
  },
  {
    text: "If the docs are bad, I'm gone in ten minutes.",
    who: "Senior Engineer",
  },
  {
    text: "I just want it to work. I'm not going to write code.",
    who: "Marketing Specialist",
  },
];

export function CaseResearch() {
  return (
    <LocalizedContent>
    <section className="border-b border-[#E8E8E3] bg-white">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <div className="md:sticky md:top-10 md:self-start">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
              02 · Discovery
            </div>
            <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
              What the research uncovered
            </h2>
            <p className="mt-4 max-w-[36ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
              20 competitors mapped, 9 user interviews across three segments, and a deep audit
              of the existing product. Four themes kept surfacing.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                ["20", "competitors mapped"],
                ["9", "interviews · 3 segments"],
                ["80%", "non-technical audience"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-3">
                  <span className="font-mono text-[22px] text-[#050505]">{k}</span>
                  <span className="text-[12px] text-[#6F6F6A]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {findings.map((f) => (
                <article
                  key={f.n}
                  className="rounded-2xl border border-[#E8E8E3] bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]"
                      style={{ background: `${ACCENT}14`, color: ACCENT }}
                    >
                      Finding {f.n}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-tight text-[#050505]">{f.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.55] text-[#6F6F6A]">{f.body}</p>
                </article>
              ))}
            </div>

            {/* Quotes */}
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                In their words
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {quotes.map((q) => (
                  <figure
                    key={q.who}
                    className="flex flex-col justify-between rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-5"
                  >
                    <blockquote className="text-[14px] leading-snug text-[#050505]">
                      “{q.text}”
                    </blockquote>
                    <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                      — {q.who}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </LocalizedContent>
  );
}
