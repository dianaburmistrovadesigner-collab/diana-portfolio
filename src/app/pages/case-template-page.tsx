import type { ReactNode } from "react";

const ACCENT = "#0E9488";

const stages: { num: string; name: string; hint: string }[] = [
  { num: "03", name: "Competitor analysis", hint: "Positioning map · must-have baseline · free niches." },
  { num: "04", name: "Target audience", hint: "Segments split · 3 personas · decision flow." },
  { num: "05", name: "Ideation & solution", hint: "Central problem · 8 design moves · adaptive modes." },
  { num: "06", name: "User journey maps", hint: "Two journeys · emotion curve · moments of truth." },
  { num: "07", name: "User flows", hint: "Current vs redesigned flow · pain / fix markers." },
  { num: "08", name: "Information architecture", hint: "Tree diagram · primary nav · quick links · roles." },
  { num: "09", name: "MVP strategy & prioritization", hint: "Impact × effort matrix · 3-phase roadmap." },
  { num: "10", name: "Visual design", hint: "Key scenario · 6 screens · slider with Figma link." },
  { num: "11", name: "Outcomes, lessons & next steps", hint: "4 lessons · core insight · 3 next steps." },
];

// Two extra blocks for audit-style cases
const auditExtras: { num: string; name: string; hint: string }[] = [
  { num: "07A", name: "Heuristic evaluation", hint: "Nielsen heuristics scored against the audited surfaces, ranked by severity." },
  { num: "07B", name: "Hotjar session findings", hint: "Recurring drop-offs, rage clicks and dead clicks from real session recordings." },
];

export function CaseTemplatePage() {
  return (
    <>
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-20 pt-12 md:pb-28 md:pt-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            UX case study · Template
          </div>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h1 className="max-w-[14ch] text-[44px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[72px]">
              [Project headline that captures the design bet in one line.]
            </h1>
            <p className="max-w-[42ch] text-[15px] leading-[1.55] text-[#6F6F6A] md:text-[17px]">
              [One paragraph that frames the product, the audience and the problem. Aim for two
              or three sentences — this is the elevator pitch of the case.]
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-4">
            {[
              { label: "Role", value: "[Your role]" },
              { label: "Scope", value: "[Audit · IA · UI · concept]" },
              { label: "Duration", value: "[≈ N weeks / months]" },
              { label: "Team", value: "[Solo · PM · engineer]" },
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

      {/* 01 · Context */}
      <SectionShell tone="muted" num="01" eyebrow="Context" title="About the project">
        <PlaceholderProse>
          [2–3 paragraphs: what the product is, who uses it, why this redesign exists, and how
          it landed on your desk. Keep it tight — heavy detail goes into the stages below.]
        </PlaceholderProse>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-3">
          {[
            { k: "Problem", v: "[The pain in one sentence.]" },
            { k: "Goal", v: "[What success looks like.]" },
            { k: "Outcome", v: "[What you shipped or proposed.]" },
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
      </SectionShell>

      {/* 02 · Discovery */}
      <SectionShell tone="white" num="02" eyebrow="Discovery" title="What the research uncovered">
        <PlaceholderProse>
          [Summarise the research that fed the design. 3–4 short findings work better than one
          long essay. Add a couple of real user quotes — they carry more weight than statistics.]
        </PlaceholderProse>
        <div className="grid gap-3 md:grid-cols-2">
          {[1, 2, 3, 4].map((n) => (
            <FindingPlaceholder key={n} n={String(n).padStart(2, "0")} />
          ))}
        </div>
      </SectionShell>

      {/* Main stages (03 → 11) */}
      {stages.map((s, i) => (
        <SectionShell
          key={s.num}
          tone={i % 2 === 0 ? "muted" : "white"}
          num={s.num}
          eyebrow={s.name}
          title={`Stage ${s.num}`}
          asStage
        >
          <DiagramPlaceholder hint={s.hint} />
        </SectionShell>
      ))}

      {/* Audit-specific extras */}
      <SectionShell tone="muted" num="—" eyebrow="Optional · Usability audit" title="Audit-only blocks" asStage>
        <p className="-mt-4 mb-6 max-w-[60ch] text-[13px] leading-[1.6] text-[#6F6F6A]">
          When the project is an audit instead of a greenfield redesign, drop these two blocks
          into stages 07–08. The rest of the structure stays the same.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {auditExtras.map((e) => (
            <div key={e.num} className="rounded-2xl border border-[#E8E8E3] bg-white p-6">
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]"
                  style={{ background: `${ACCENT}14`, color: ACCENT }}
                >
                  Block {e.num}
                </span>
              </div>
              <h3 className="mt-3 text-[18px] leading-tight text-[#050505]">{e.name}</h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-[#6F6F6A]">{e.hint}</p>
              <div className="mt-5">
                {e.num === "07A" ? <HeuristicsPreview /> : <SessionsPreview />}
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Cheatsheet */}
      <section className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                Usage
              </div>
              <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                How to use this template
              </h2>
            </div>
            <ol className="flex flex-col gap-3">
              {[
                "Copy this page as the starting point for a new case (`#/case/[slug]`).",
                "Keep stages 01–02 (Context & Discovery) and 03–11 (the nine design stages) as the spine.",
                "Replace each diagram placeholder with the matching <Block…/> component once the artefact is ready.",
                "For audit-style work, swap in the two optional blocks (07A · Heuristics, 07B · Hotjar sessions).",
                "Mute or skip any stage that doesn't apply — but keep the numbering continuous.",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-5"
                >
                  <span className="font-mono text-[11px] text-[#8A8A84]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-snug text-[#3a3a36]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Shared shells ---------- */

function SectionShell({
  tone,
  num,
  eyebrow,
  title,
  children,
  asStage = false,
}: {
  tone: "muted" | "white";
  num: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  asStage?: boolean;
}) {
  return (
    <section
      className={
        "border-b border-[#E8E8E3] " + (tone === "muted" ? "bg-[#FAFAF8]" : "bg-white")
      }
    >
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        {asStage ? (
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
              {num} — {eyebrow}
            </span>
            <span className="h-px flex-1 bg-[#E8E8E3]" />
          </div>
        ) : (
          <div className="mb-10 grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {num} · {eyebrow}
              </div>
              <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                {title}
              </h2>
            </div>
            <div className="hidden md:block" />
          </div>
        )}
        <div className="flex flex-col gap-8">{children}</div>
      </div>
    </section>
  );
}

function PlaceholderProse({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[60ch] text-[15px] leading-[1.65] text-[#3a3a36]">{children}</p>
  );
}

function FindingPlaceholder({ n }: { n: string }) {
  return (
    <article className="rounded-2xl border border-[#E8E8E3] bg-white p-6">
      <span
        className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]"
        style={{ background: `${ACCENT}14`, color: ACCENT }}
      >
        Finding {n}
      </span>
      <h3 className="mt-3 text-[18px] leading-tight text-[#050505]">
        [Short finding headline]
      </h3>
      <p className="mt-2 text-[13.5px] leading-[1.55] text-[#6F6F6A]">
        [One or two sentences. What you observed, why it matters, who said it.]
      </p>
    </article>
  );
}

function DiagramPlaceholder({ hint }: { hint: string }) {
  return (
    <div className="rounded-[24px] border border-dashed border-[#D6D6CF] bg-white p-10">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
          Diagram slot
        </span>
        <p className="max-w-[60ch] text-[13px] leading-snug text-[#6F6F6A]">{hint}</p>
        <span className="mt-2 inline-flex rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#3a3a36]">
          Drop the matching &lt;Block… /&gt; here
        </span>
      </div>
    </div>
  );
}

/* ---------- Audit-extra previews ---------- */

function HeuristicsPreview() {
  const rows = [
    { h: "Visibility of system status", sev: 3 },
    { h: "Match with the real world", sev: 2 },
    { h: "User control & freedom", sev: 1 },
    { h: "Consistency & standards", sev: 3 },
  ];
  return (
    <div className="rounded-xl border border-[#E8E8E3] bg-[#FAFAF8] p-3">
      <div className="grid grid-cols-[1fr_64px] gap-2 px-2 pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
        <span>Heuristic</span>
        <span className="text-right">Severity</span>
      </div>
      <div className="flex flex-col gap-1">
        {rows.map((r) => (
          <div
            key={r.h}
            className="grid grid-cols-[1fr_64px] items-center gap-2 rounded-md bg-white px-2 py-1.5"
          >
            <span className="truncate text-[12px] text-[#050505]">{r.h}</span>
            <span className="flex justify-end gap-0.5">
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: i <= r.sev ? ACCENT : "#E8E8E3",
                  }}
                />
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SessionsPreview() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[
        { k: "Rage clicks", v: "+42%" },
        { k: "Dead clicks", v: "12% sessions" },
        { k: "Drop-off step", v: "Step 4" },
      ].map((c) => (
        <div
          key={c.k}
          className="rounded-xl border border-[#E8E8E3] bg-[#FAFAF8] p-3"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
            {c.k}
          </div>
          <div className="mt-1.5 text-[14px] text-[#050505]">{c.v}</div>
        </div>
      ))}
    </div>
  );
}
