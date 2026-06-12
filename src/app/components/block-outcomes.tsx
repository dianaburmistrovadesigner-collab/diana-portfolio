import { LocalizedContent } from "./localized-content";
const ACCENT = "#7C5CFF";

const lessons = [
  {
    n: "01",
    title: "Deep API understanding lets you rethink the interface",
    desc: "Once the underlying mechanics are clear, the UI can be reshaped around real use, not the technology.",
  },
  {
    n: "02",
    title: "User tasks are the key to navigation",
    desc: "Information architecture becomes obvious when the structure follows what users actually do.",
  },
  {
    n: "03",
    title: "Simplification benefits everyone, not just beginners",
    desc: "Experts move faster when noise is removed; novices simply become possible at all.",
  },
  {
    n: "04",
    title: "Balance comes through interface customization",
    desc: "Different roles need different surfaces — modes let the same product serve all of them.",
  },
];

const nextSteps = [
  {
    n: "01",
    title: "Iterative rollout with continuous feedback",
    desc: "Ship in phases, instrument from day one, fold real usage back into design.",
  },
  {
    n: "02",
    title: "Prototype testing with real users",
    desc: "Validate the new flows with both technical teams and non-technical solo makers.",
  },
  {
    n: "03",
    title: "Detailed model catalog & search",
    desc: "Expand the catalog with rich filters, comparisons, and pricing transparency.",
  },
];

export function BlockOutcomes() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-10 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          Outcomes · Lessons & next steps
        </div>
        <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
          What this project taught us — and where it goes next
        </h2>
        <p className="mt-2 text-[14px] text-[#6F6F6A]">
          A short reflection on the design moves that paid off and the experiments we want to
          run as the product keeps evolving.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Lessons */}
        <div className="flex flex-col gap-4">
          <ColumnHeader label="Lessons Learned" count={lessons.length} />
          <div className="flex flex-col gap-3">
            {lessons.map((l) => (
              <Card key={l.n} {...l} />
            ))}
          </div>

          {/* Highlight callout */}
          <div
            className="mt-2 rounded-2xl border p-5"
            style={{
              borderColor: `${ACCENT}55`,
              background: `${ACCENT}0D`,
            }}
          >
            <div
              className="mb-2 inline-flex items-center gap-2 rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-white"
              style={{ background: ACCENT }}
            >
              Core insight
            </div>
            <p className="text-[15px] leading-snug text-[#050505]">
              Making a technical product truly accessible means rethinking the whole
              interaction concept, not just simplifying the UI.
            </p>
          </div>
        </div>

        {/* Next steps */}
        <div className="flex flex-col gap-4">
          <ColumnHeader label="Next Steps" count={nextSteps.length} />
          <div className="flex flex-col gap-3">
            {nextSteps.map((s) => (
              <Card key={s.n} {...s} muted />
            ))}
          </div>

          <div className="mt-2 rounded-2xl border border-dashed border-[#DEDED8] bg-[#FAFAF8] p-5 text-[12px] leading-snug text-[#6F6F6A]">
            The roadmap stays a living document — each rollout reshapes the next round of
            priorities.
          </div>
        </div>
      </div>
    </section>
    </LocalizedContent>
  );
}

function ColumnHeader({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-baseline justify-between">
      <h3 className="text-[16px] text-[#050505]">{label}</h3>
      <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
        {String(count).padStart(2, "0")} items
      </span>
    </div>
  );
}

function Card({
  n,
  title,
  desc,
  muted = false,
}: {
  n: string;
  title: string;
  desc: string;
  muted?: boolean;
}) {
  return (
    <article className="flex gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-5">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px]"
        style={{
          background: muted ? "#FAFAF8" : `${ACCENT}14`,
          color: muted ? "#3a3a36" : ACCENT,
          border: muted ? "1px solid #E8E8E3" : "none",
        }}
      >
        {n}
      </div>
      <div className="min-w-0">
        <div className="text-[14px] leading-snug text-[#050505]">{title}</div>
        <div className="mt-1.5 text-[12.5px] leading-snug text-[#6F6F6A]">{desc}</div>
      </div>
    </article>
  );
}
