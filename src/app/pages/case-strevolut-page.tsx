import type { ReactNode } from "react";
import { FigmaLinkLabel, FigmaWireframesLabel } from "../components/figma-labels";
import { useLocale } from "../lib/locale";
import { LocalizedContent } from "../components/localized-content";
import { strevolutImages } from "../assets/case-images";
import { ImageSlot, VisualTrailer } from "../components/case-media";
import { strevolutFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

export function CaseStrevolutPage() {
  return (
    <LocalizedContent>
    <>
      <Hero />
      <VisualTrailer
        eyebrow="The result · 75 documentation frames"
        caption="The Strevolut UI Kit hub — 75 visual doc pages covering tokens, atoms, molecules, organisms and patterns."
        src={strevolutImages.hero}
        alt="Strevolut UI Kit — documentation index"
      />
      <Overview />

      <Stage num="02" name="Problem · Why a system was needed" tone="white">
        <Problem />
      </Stage>

      <Stage num="03" name="Approach · 6 steps from audit to publish" tone="muted">
        <Approach />
      </Stage>

      <Stage num="04" name="Foundation · Tokens & semantic layers" tone="white">
        <Foundation />
      </Stage>

      <Stage num="05" name="Components · Atoms → Patterns" tone="muted">
        <Components />
      </Stage>

      <Stage num="06" name="Tooling · Code-aligned by design" tone="white">
        <Tooling />
      </Stage>

      <Stage num="07" name="Principles · 6 insights → architectural choices" tone="muted">
        <Principles />
      </Stage>

      <Stage num="08" name="Origin · What sparked the system" tone="white">
        <InProduct />
      </Stage>

      <Stage num="09" name="Outcomes · What the system delivered" tone="muted">
        <Outcomes />
      </Stage>

      <Stage num="10" name="Next steps · Planned work" tone="white">
        <NextSteps />
      </Stage>
    </>
    </LocalizedContent>
  );
}

/* ---------------------------------------------------------------- Hero */

function Hero() {
  const { tc } = useLocale();
  return (
    <LocalizedContent>
    <header className="relative overflow-hidden border-b border-[#E8E8E3] bg-white">
      <div className="mx-auto max-w-[1320px] px-6 pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          Design system case · Strevolut · 2025–2026 · ongoing
        </div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="max-w-[18ch] text-[44px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[64px]">
            One system instead of rebuilding UI from scratch every time.
          </h1>
          <p className="max-w-[44ch] text-[15px] leading-[1.55] text-[#6F6F6A] md:text-[17px]">
            Semantic tokens, shadcn / Tailwind alignment, and 75 documentation frames. The AI/ML
            API redesign came first — without one — and that's what made building Strevolut the
            obvious next step.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-4">
          {[
            { label: "Role", value: "Product Designer · Design systems" },
            { label: "Timeline", value: "2025–2026 · ongoing" },
            { label: "Tools", value: "Figma · Variables · React/shadcn · Custom plugins" },
            { label: "Type", value: "Personal system · portfolio infrastructure" },
          ].map((m) => (
            <div key={tc(m.label)} className="bg-white p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                {tc(m.label)}
              </div>
              <div className="mt-1.5 text-[14px] text-[#050505]">{tc(m.value)}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={strevolutFigmaLinks.uiKit}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
          >
            <FigmaLinkLabel suffix=" →" />
          </a>
        </div>
      </div>
    </header>
      </LocalizedContent>
  );
}

/* ------------------------------------------------------------ Overview */

function Overview() {
  return (
    <LocalizedContent>
    <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1320px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
              01 · Overview
            </div>
            <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
              The frustration & the bet
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-2">
              <div className="bg-white p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  The frustration
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#3a3a36]">
                  I was tired of rebuilding the same UI kit from scratch on every project — and
                  re-inventing the token taxonomy every time. The shipping cost compounded with
                  every new screen.
                </p>
              </div>
              <div className="bg-white p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                    The bet
                  </span>
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#3a3a36]">
                  Build one system that's code-aware from day one — semantic tokens + shadcn API
                  parity — so every Figma decision maps cleanly to React props. Maximum future
                  leverage for minimum upfront cost.
                </p>
              </div>
            </div>

            <MetricRow
              items={[
                ["16", "Foundation topics"],
                ["59", "Component docs"],
                ["60+", "Component sets"],
                ["1", "Sparked by AI/ML API"],
              ]}
            />
          </div>
        </div>
      </div>
    </section>
      </LocalizedContent>
  );
}

/* ------------------------------------------------------------ Problem */

function Problem() {
  const items = [
    {
      n: "01",
      title: "Fragmented UI",
      body: "Legacy NUD components, copied shadcn frames and one-off elements lived in separate files with no shared source of truth.",
    },
    {
      n: "02",
      title: "Token & text-style drift",
      body: "Colors and typography diverged across files — the same “primary” meant three different hex values depending on which page you opened.",
    },
    {
      n: "03",
      title: "No reusable atoms",
      body: "On the AI/ML API redesign, every screen meant rebuilding buttons, inputs, and cards — slow and inconsistent.",
    },
    {
      n: "04",
      title: "Scattered documentation",
      body: "Component notes lived in markdown files and Slack threads. No visual doc pages existed for portfolio presentation or developer handoff.",
    },
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-4">
      <p className="max-w-[80ch] text-[15px] leading-[1.65] text-[#3a3a36]">
        Before Strevolut, every new screen started from zero. Four problems made this unsustainable.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((p) => (
          <article key={p.n} className="rounded-2xl border border-[#E8E8E3] bg-white p-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-[#B8B8B2]">{p.n}</span>
              <h3 className="text-[16px] leading-tight text-[#050505]">{p.title}</h3>
            </div>
            <p className="mt-2.5 text-[13.5px] leading-snug text-[#6F6F6A]">{p.body}</p>
          </article>
        ))}
      </div>
    </div>
    </LocalizedContent>
  );
}

/* ----------------------------------------------------------- Approach */

function Approach() {
  const steps = [
    { n: "01", t: "Audit", d: "Inventoried existing components across portfolio and AI/ML API files; tagged duplicates, drift and gaps." },
    { n: "02", t: "Semantic tokens", d: "Built a 3-layer variable architecture (Primitive → Semantic → Component) aligned to Tailwind." },
    { n: "03", t: "Component sets · atoms up", d: "Designed atoms first, then composed molecules and organisms using only published atoms." },
    { n: "04", t: "Doc pages · Polaris-style", d: "75 visual documentation frames: anatomy, variants, usage guidelines, do/don't examples." },
    { n: "05", t: "Consolidation", d: "Unified scattered legacy components from portfolio files into the new library — Token reMapper and batch-swap workflows across 200+ frames." },
    { n: "06", t: "Portfolio publish", d: "Packaged the system as a case study; exported key frames for the portfolio site." },
  ];
  return (
    <LocalizedContent>
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((s) => (
        <div key={s.n} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
            Step {s.n}
          </div>
          <div className="mt-2 text-[15px] text-[#050505]">{s.t}</div>
          <p className="mt-1.5 text-[12.5px] leading-snug text-[#6F6F6A]">{s.d}</p>
        </div>
      ))}
    </div>
    </LocalizedContent>
  );
}

/* --------------------------------------------------------- Foundation */

function Foundation() {
  // Real architecture — 4 Figma Variables collections
  const collections = [
    {
      n: "01",
      label: "Primitives",
      count: 623,
      modes: "Default",
      desc: "Raw values — the only place hexes, pixels and ms live.",
    },
    {
      n: "02·01",
      label: "Theme",
      count: 403,
      modes: "Light · Dark",
      desc: "Semantic intent for color — `action-like-color-bg-primary`, etc. Mode switch = dark theme for free.",
    },
    {
      n: "02·02",
      label: "Responsive",
      count: 171,
      modes: "Desktop · Tablet · Mobile",
      desc: "Sizes that change per breakpoint — sidebar width, modal max-width, content margins.",
    },
    {
      n: "02·03",
      label: "Simple",
      count: 180,
      modes: "Default",
      desc: "Component-scoped sizing & radius — `badge-like-size-height-lg`, `border-radius-lg`.",
    },
  ];

  // Real cascade taken straight from the Figma Variables export
  const cascade = [
    {
      layer: "L1 · Primitive",
      code: "color/brand/color-brand-600",
      hex: "#2563EB",
      note: "Raw blue — the only file that knows the hex",
    },
    {
      layer: "L2 · Theme (semantic)",
      code: "action-like/primary/bg/action-like-color-bg-primary",
      hex: "→ alias",
      note: "Intent name — what the color does, not what it is",
    },
  ];

  // Real namespaces from primitives.json
  const namespaces = [
    ["color", 350],
    ["shadow", 74],
    ["spacing", 70],
    ["font", 51],
    ["motion", 16],
    ["opacity", 16],
    ["radius", 13],
    ["blur", 12],
    ["border-width", 10],
    ["elevation", 6],
    ["border-style", 3],
    ["breakpoint", 2],
  ] as const;

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-8">
      <p className="max-w-[80ch] text-[15px] leading-[1.65] text-[#3a3a36]">
        The foundation is split across 4 Figma Variables collections — 623 primitives feeding 754
        scoped tokens with light/dark and responsive modes baked in.
      </p>

      {/* 4 collections */}
      <div className="rounded-[24px] border border-[#E8E8E3] bg-white p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
              Token architecture · 4 Figma Variables collections
            </div>
            <h3 className="mt-2 text-[18px] leading-tight text-[#050505]">
              One source · two semantic axes (theme + viewport)
            </h3>
          </div>
          <span className="rounded-full bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            623 + 754 tokens · 39 effect styles
          </span>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {collections.map((c) => (
            <div key={c.label} className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-4">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
                  {c.n}
                </span>
                <span className="font-mono text-[20px] leading-none text-[#050505]">{c.count}</span>
              </div>
              <div className="mt-2 text-[14px] text-[#050505]">{c.label}</div>
              <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#8A8A84]">
                Modes · {c.modes}
              </div>
              <p className="mt-2.5 text-[12px] leading-snug text-[#6F6F6A]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Real cascade example */}
      <div className="rounded-[24px] border border-[#E8E8E3] bg-white p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
              Real cascade · brand primary background
            </div>
            <h3 className="mt-2 text-[18px] leading-tight text-[#050505]">
              From hex to intent — no component touches a primitive
            </h3>
          </div>
          <span
            className="h-8 w-8 shrink-0 rounded-md border border-[#E8E8E3]"
            style={{ background: "#2563EB" }}
            aria-label="Brand 600 swatch"
          />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {cascade.map((c) => (
            <div key={c.layer} className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-4">
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-[10.5px] uppercase tracking-[0.12em]"
                  style={{ color: ACCENT }}
                >
                  {c.layer}
                </span>
              </div>
              <code className="mt-3 block break-all rounded-md bg-white px-3 py-2 font-mono text-[11.5px] text-[#050505]">
                {c.code}
              </code>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="font-mono text-[10.5px] text-[#6F6F6A]">{c.hex}</span>
                <span className="text-[11.5px] text-[#6F6F6A]">{c.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Naming conventions — real namespaces with counts */}
      <div className="rounded-2xl border border-[#E8E8E3] bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            Naming conventions · primitive namespaces
          </div>
          <span className="font-mono text-[10px] text-[#B8B8B2]">12 families · 623 tokens</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {namespaces.map(([ns, n]) => (
            <span
              key={ns}
              className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1"
            >
              <code className="font-mono text-[11.5px] text-[#050505]">{ns}/*</code>
              <span className="font-mono text-[10px] text-[#8A8A84]">{n}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Visual slots for foundation doc previews — full-width EN frames */}
      <div className="flex flex-col gap-10">
        <ImageSlot
          label="Colors"
          caption="Semantic theme tokens — surfaces, text, borders"
          tone="after"
          ratio="auto"
          src={strevolutImages.colors}
          alt="Color variables"
        />
        <ImageSlot
          label="Typography"
          caption="Type scale specimens — headings and body"
          tone="after"
          ratio="auto"
          src={strevolutImages.typography}
          alt="Typography scale"
        />
        <ImageSlot
          label="Spacing"
          caption="Gap scale — layout spacing tokens"
          tone="after"
          ratio="auto"
          src={strevolutImages.spacing}
          alt="Spacing tokens"
        />
      </div>
    </div>
    </LocalizedContent>
  );
}

/* ----------------------------------------------------------- Components */

const tiers = [
  {
    n: "T1",
    label: "Atoms",
    desc: "Indivisible building blocks — directly consume semantic tokens.",
    examples: ["Button", "Input", "Badge", "Avatar", "Toggle", "Tooltip"],
  },
  {
    n: "T2",
    label: "Molecules",
    desc: "Atoms composed into small functional units.",
    examples: ["Search field", "Dropdown menu", "Tabs", "Card (base)", "Alert"],
  },
  {
    n: "T3",
    label: "Organisms",
    desc: "Complex, self-contained pieces of UI.",
    examples: ["Data table", "Modal dialog", "Tabs panel", "Dropdown (complex)"],
  },
  {
    n: "T4",
    label: "Patterns",
    desc: "Composed layouts — the templates pages plug into.",
    examples: ["Page header + breadcrumb", "Settings form layout", "Dashboard grid"],
  },
];

function Components() {
  return (
    <LocalizedContent>
    <div className="flex flex-col gap-8">
      <p className="max-w-[80ch] text-[15px] leading-[1.65] text-[#3a3a36]">
        Components are organized in four tiers. Each tier builds exclusively from the one below —
        no skipping layers. Every set includes default + variants + states + a linked doc page with
        anatomy diagram.
      </p>

      <div className="grid gap-3">
        {tiers.map((t) => (
          <article
            key={t.n}
            className="grid gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-5 md:grid-cols-[140px_1fr_220px] md:items-center md:p-6"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full font-mono text-[12px] text-white"
                style={{ background: ACCENT }}
              >
                {t.n}
              </span>
              <span className="text-[15px] text-[#050505]">{t.label}</span>
            </div>
            <p className="text-[13px] leading-snug text-[#6F6F6A]">{t.desc}</p>
            <div className="flex flex-wrap gap-1.5 md:justify-end">
              {t.examples.map((e) => (
                <span
                  key={e}
                  className="rounded-md border border-[#E8E8E3] bg-[#FAFAF8] px-2 py-1 font-mono text-[10.5px] text-[#3a3a36]"
                >
                  {e}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* One doc-page example per tier — full width */}
      <div className="flex flex-col gap-10">
        <ImageSlot
          label="T1 · Atoms"
          caption="Avatar — photo, logo, icon, initials · sizes 3xs–xl"
          tone="after"
          ratio="auto"
          src={strevolutImages.atoms}
          alt="Avatar component documentation"
        />
        <ImageSlot
          label="T2 · Molecules"
          caption="Button — hierarchy, states, sizes · default and icon-only"
          tone="after"
          ratio="auto"
          src={strevolutImages.molecules}
          alt="Button component documentation"
        />
        <ImageSlot
          label="T3 · Organisms"
          caption="Form field — input, textarea · error states · sm / md / lg"
          tone="after"
          ratio="auto"
          src={strevolutImages.organisms}
          alt="Form field component documentation"
        />
        <ImageSlot
          label="T4 · Patterns"
          caption="OTP field — L4 form template · set / confirm passcode flow"
          tone="after"
          ratio="auto"
          src={strevolutImages.patterns}
          alt="OTP field pattern documentation"
        />
      </div>
    </div>
      </LocalizedContent>
  );
}

/* ----------------------------------------------------------- Tooling */

function Tooling() {
  const rows = [
    {
      k: "shadcn/ui as reference",
      v: "Component APIs, variant naming and slot structure mirror shadcn — developers map Figma specs to React props 1:1.",
    },
    {
      k: "Figma Variables · 4 collections",
      v: "Primitives (623 raw values) → Theme (403 semantic, Light/Dark) + Responsive (171, Desktop/Tablet/Mobile) + Simple (180 component-scoped). Mode switching = dark theme for free.",
    },
    {
      k: "Token reMapper plugin · planned",
      v: "Planned custom plugin to batch-swap legacy color styles to semantic variables across 200+ frames in one pass.",
    },
    {
      k: "Doc pages · Figma Make + markdown",
      v: "Documentation frames built with the Figma Make plugin; anatomy overlays and variant tables composed per component.",
    },
    {
      k: "Tailwind token export · planned",
      v: "Variables structured so a future figma-to-tailwind export produces a valid tailwind.config extension.",
    },
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-6">
      <p className="max-w-[80ch] text-[15px] leading-[1.65] text-[#3a3a36]">
        The system is designed to stay aligned with code. Key tooling decisions:
      </p>

      <div className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
        {rows.map((r, i) => (
          <div
            key={r.k}
            className={
              "grid gap-3 px-6 py-4 md:grid-cols-[260px_1fr] md:items-start md:gap-6 " +
              (i < rows.length - 1 ? "border-b border-[#EFEFEA]" : "")
            }
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              <span className="text-[14px] text-[#050505]">{r.k}</span>
            </div>
            <p className="text-[13px] leading-snug text-[#6F6F6A]">{r.v}</p>
          </div>
        ))}
      </div>

      <ImageSlot
        label="Doc page"
        caption="What makes a good design system — principles, maturity checklist, Do/Don't"
        tone="after"
        ratio="auto"
        src={strevolutImages.docPage}
        alt="What makes a good design system documentation page"
      />
    </div>
    </LocalizedContent>
  );
}

/* ----------------------------------------------------------- Principles */

function Principles() {
  const rows = [
    [
      "Figma and code drift when naming diverges",
      "Code-aligned variant axes — prop names in Figma match React component props",
    ],
    [
      "Raw hex values create invisible inconsistency",
      "Semantic tokens first — no component references a primitive directly",
    ],
    [
      "Pretty doc pages ≠ useful handoff",
      "Documentation answers “how do I use this?” — not “look how nice”",
    ],
    [
      "Duplicating a component for one edge case compounds debt",
      "Slots over duplication — composable slots handle edge cases without new components",
    ],
    [
      "Trying to build everything delays shipping",
      "Pragmatic backlog — charts, date picker, combobox are documented as “planned”, not blocked",
    ],
    [
      "Theory without real project friction",
      "Each component solves a pain point from the AI/ML API work",
    ],
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-6">
      <p className="max-w-[80ch] text-[15px] leading-[1.65] text-[#3a3a36]">
        Six insights from building the system — each drove a concrete architectural choice.
      </p>

      <div className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
        <div className="grid grid-cols-[1fr_1fr] gap-px bg-[#E8E8E3]">
          <div className="bg-[#FAFAF8] px-6 py-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
              Insight
            </span>
          </div>
          <div className="bg-[#FAFAF8] px-6 py-3">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.14em]"
              style={{ color: ACCENT }}
            >
              System choice
            </span>
          </div>
        </div>
        {rows.map(([insight, choice], i) => (
          <div
            key={insight}
            className={
              "grid grid-cols-1 gap-3 px-6 py-4 md:grid-cols-2 md:gap-6 " +
              (i < rows.length - 1 ? "border-b border-[#EFEFEA]" : "")
            }
          >
            <p className="text-[13.5px] leading-snug text-[#6F6F6A]">{insight}</p>
            <p className="text-[13.5px] leading-snug text-[#050505]">
              <span
                className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full"
                style={{ background: ACCENT }}
              />
              {choice}
            </p>
          </div>
        ))}
      </div>
    </div>
    </LocalizedContent>
  );
}

/* ----------------------------------------------------------- In Product */

function InProduct() {
  return (
    <LocalizedContent>
    <div className="rounded-[24px] border border-[#E8E8E3] bg-white p-6 md:p-10">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            Origin story
          </div>
          <h3 className="mt-3 text-[22px] leading-tight text-[#050505] md:text-[26px]">
            The project that sparked the system
          </h3>
          <p className="mt-3 max-w-[44ch] text-[14px] leading-[1.6] text-[#3a3a36]">
            The AI/ML API redesign came first — Dashboard, Playground, Usage analytics, Ask AI — all
            without a shared kit. Rebuilding tokens, components, and docs for every screen made the
            gaps clear. That's what pushed me to build Strevolut.
          </p>
          <a
            href="#/case/aimlapi"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
          >
            See the project that sparked it → AI/ML API case
          </a>
        </div>

        <ImageSlot
          label="AI/ML API · Dashboard"
          caption="AI/ML API redesign — where the need for a shared system became clear"
          tone="after"
          ratio="16 / 10"
          src={strevolutImages.aimlApplied}
          alt="AI/ML API dashboard — origin context for Strevolut"
        />
      </div>
    </div>
      </LocalizedContent>
  );
}

/* ----------------------------------------------------------- Outcomes */

function Outcomes() {
  const results = [
    ["60+", "Component sets published with full variant coverage and dark-mode support"],
    ["75", "Documentation frames — visual specs ready for portfolio and handoff"],
    ["—", "Ready for the next case — reusable cards, tables, and inputs"],
    ["1", "Single semantic source of truth — prevents “which blue?” conversations"],
  ];

  return (
    <LocalizedContent>
    <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
      <div>
        <p className="max-w-[60ch] text-[15px] leading-[1.65] text-[#3a3a36]">
          What the system delivers — and what changes next.
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {results.map(([metric, text]) => (
            <li
              key={text}
              className="flex items-start gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-5"
            >
              <span
                className="shrink-0 font-mono text-[24px] leading-none"
                style={{ color: ACCENT }}
              >
                {metric}
              </span>
              <span className="text-[13.5px] leading-snug text-[#3a3a36]">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-6 md:p-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
          Reflection
        </div>
        <blockquote
          className="mt-4 border-l-2 pl-5 text-[18px] leading-[1.5] text-[#050505] md:text-[20px]"
          style={{ borderColor: ACCENT }}
        >
          “Building Strevolut felt slow at first. But the AI/ML API redesign had already shown me
          what starting from zero costs — finishing that case is what made a UI kit feel worth the
          investment.”
        </blockquote>
        <p className="mt-5 text-[13px] leading-snug text-[#6F6F6A]">
          Romina Kavcic's design-system course gave the token taxonomy its shape; shadcn's API
          gave the components their grammar.
        </p>
      </div>
    </div>
    </LocalizedContent>
  );
}

/* ----------------------------------------------------------- Next steps */

function NextSteps() {
  const items = [
    "Expand coverage: charts library, date/time picker, combobox with search, advanced data-table filters",
    "Build token export pipeline: Figma Variables → JSON → Tailwind config extension",
    "Add interaction documentation: micro-animation specs per component (hover, focus, open/close)",
    "Optional read-only Figma view link for recruiters (TBD)",
  ];

  return (
    <LocalizedContent>
    <ol className="grid gap-3 md:grid-cols-2">
      {items.map((it, i) => (
        <li
          key={it}
          className="flex gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-5"
        >
          <span className="font-mono text-[11px] text-[#B8B8B2]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-[14px] leading-snug text-[#3a3a36]">{it}</span>
        </li>
      ))}
    </ol>
    </LocalizedContent>
  );
}

/* -------------------------------------------------------------- Shared */

function MetricRow({ items }: { items: [string, string][] }) {
  const { tc } = useLocale();
  return (
    <LocalizedContent>
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-4">
      {items.map(([k, v]) => (
        <div key={tc(v)} className="bg-white p-5">
          <div className="font-mono text-[26px] leading-none text-[#050505]">{tc(k)}</div>
          <div className="mt-2 text-[12px] leading-snug text-[#6F6F6A]">{tc(v)}</div>
        </div>
      ))}
    </div>
      </LocalizedContent>
  );
}

function Stage({
  num,
  name,
  tone,
  children,
}: {
  num: string;
  name: string;
  tone: "muted" | "white";
  children: ReactNode;
}) {
  const { tc } = useLocale();
  return (
    <LocalizedContent>
    <section
      id={`stage-${num}`}
      className={"border-b border-[#E8E8E3] " + (tone === "muted" ? "bg-[#FAFAF8]" : "bg-white")}
    >
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
            {num} — {tc(name)}
          </span>
          <span className="h-px flex-1 bg-[#E8E8E3]" />
        </div>
        {children}
      </div>
    </section>
    </LocalizedContent>
  );
}
