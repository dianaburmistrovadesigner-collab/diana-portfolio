import type { ReactNode } from "react";
import { FigmaLinkLabel, FigmaWireframesLabel } from "../components/figma-labels";
import { useLocale } from "../lib/locale";
import { LocalizedContent } from "../components/localized-content";
import { overchatBeforeAfter, overchatImages } from "../assets/case-images";
import { BlockOverchatShowcase } from "../components/block-overchat-showcase";
import { ImageSlot, VisualTrailer } from "../components/case-media";
import { overchatFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

export function CaseOverchatPage() {
  return (
    <LocalizedContent>
    <>
      <Hero />
      <VisualTrailer
        eyebrow="The result · 26-screen v1 concept"
        caption="One continuous story from first visit to subscription — the hi-fi v1 in a single frame."
        src={overchatImages.hero}
        alt="Overchat concept — Home · Imagine it. Overchat creates it."
      />
      <Overview />

      <Stage num="02" name="Research · Hotjar, QA, competitive scan" tone="white">
        <Research />
      </Stage>

      <Stage num="03" name="Findings & solutions · 7 themes" tone="muted">
        <Findings />
      </Stage>

      <Stage num="04" name="Competitive analysis · 18 products" tone="white">
        <Competitive />
      </Stage>

      <Stage num="05" name="Solution search · 10 micro-flows" tone="muted">
        <MicroFlows />
      </Stage>

      <Stage num="06" name="Before & after · 6 key shifts" tone="white">
        <BeforeAfter />
      </Stage>

      <Stage num="07" name="Concept UI · 26 hi-fi screens" tone="muted">
        <ConceptUi />
      </Stage>

      <Stage num="08" name="Outcome · expected impact" tone="white">
        <Outcome />
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
          UX case study · Overchat AI · 2025–2026
        </div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="max-w-[18ch] text-[44px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[64px]">
            From Hotjar replays to a hi-fi concept for one continuous journey.
          </h1>
          <p className="max-w-[44ch] text-[15px] leading-[1.55] text-[#6F6F6A] md:text-[17px]">
            Research-led redesign of Overchat — an AI super-app aggregating chat, image, video and
            audio tools on a credit model. 65 sessions recorded, 18 deep-reviewed, 10 critical
            micro-flows redesigned, 26 hi-fi screens telling one continuous story.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-4">
          {[
            { label: "Role", value: "Product Designer · Audit & concept" },
            { label: "Timeline", value: "4 weeks" },
            { label: "Methods", value: "Hotjar · QA · Competitive · Wireframes · Hi-fi" },
            { label: "Type", value: "Concept case (not commissioned)" },
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
            href={overchatFigmaLinks.concept26}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
          >
            <FigmaLinkLabel suffix=" →" />
          </a>
          <a
            href={overchatFigmaLinks.wireframes}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-white px-5 py-2.5 text-[13px] text-[#3a3a36] hover:bg-[#FAFAF8]"
          >
            <FigmaWireframesLabel />
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
              The brief & the bet
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-2">
              <div className="bg-white p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  The brief
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#3a3a36]">
                  Overchat had high trial-user drop-off, low conversion and frequent task
                  abandonment during generation. The job was to analyse real user behaviour through
                  Hotjar recordings and redesign the most problematic interaction flows.
                </p>
              </div>
              <div className="bg-white p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                    The designer's bet
                  </span>
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#3a3a36]">
                  Not all recommendations at once — instead, a v1 priority that delivers the most
                  user value for the least engineering and budget. One continuous story across 26
                  hi-fi screens, with the full research breadth in micro-flow wireframes on Figma.
                </p>
              </div>
            </div>

            <MetricRow
              items={[
                ["65", "Sessions recorded"],
                ["18", "Deep-reviewed with Loom"],
                ["10", "Micro-scenarios"],
                ["26", "Hi-fi screens"],
              ]}
            />
          </div>
        </div>
      </div>
    </section>
      </LocalizedContent>
  );
}

/* ------------------------------------------------------------ Research */

function Research() {
  const steps = [
    { n: "01", t: "Inputs", d: "Product context, marketer usage stats, competitor patterns." },
    { n: "02", t: "Hotjar", d: "65 replays → 20 selected → 18 deep-reviewed with Loom timestamps." },
    { n: "03", t: "Synthesis", d: "Issue matrix → 10 micro-scenarios with critical UX failures." },
    { n: "04", t: "Heatmaps", d: "Problem screens: home, paywall, catalog." },
    { n: "05", t: "QA", d: "Hands-on: Image Combiner gaps, follow-up, prompt recovery." },
    { n: "06", t: "Wireframes", d: "10 micro-flows: Before stickers + After wireframes with Fix/Why." },
    { n: "07", t: "Hi-fi", d: "26 screens — unified scenario, designer-prioritized v1." },
    { n: "08", t: "Validation", d: "Metrics to track in GA4/Hotjar if shipped." },
  ];

  const criteria = [
    "Anomalies — super-active (1000+ clicks), very long sessions (up to 113 min), quick bounces (<1 min)",
    "Friction signals — rage clicks (many clicks in short time), dead time (few clicks over long sessions)",
    "Engagement spread — High / Moderate / Low / Very Low — both frustration and rare successful patterns",
    "Geography — US, EU, LATAM and others, not a single market",
    "Marketing hypotheses — home as entry, paywall on combine-images, hidden balance",
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-10">
      <SubHead n="2.1" title="Process · 8 steps" />
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
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

      <SubHead n="2.2" title="Hotjar session selection — not random" />
      <div className="grid gap-4 rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:grid-cols-[1fr_1.4fr] md:p-10">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            How sessions were filtered
          </div>
          <p className="mt-3 max-w-[40ch] text-[14px] leading-[1.6] text-[#3a3a36]">
            65 replays in Hotjar over 30 days on <code className="font-mono">/web/</code>. Selected
            20 sessions deliberately, then deep-reviewed 18 of them with timestamped Loom notes and
            screenshots. The 18 cover the 10 micro-flows of the case.
          </p>
        </div>
        <ul className="flex flex-col gap-2">
          {criteria.map((c, i) => (
            <li
              key={c}
              className="flex items-start gap-3 rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] px-4 py-3"
            >
              <span className="mt-0.5 font-mono text-[11px] text-[#B8B8B2]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] leading-snug text-[#3a3a36]">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </LocalizedContent>
  );
}

/* ------------------------------------------------------------ Findings */

type Finding = {
  theme: string;
  title: string;
  severity: "Critical" | "High" | "Medium";
  before: string[];
  after: string[];
};

const findings: Finding[] = [
  {
    theme: "Tool Discovery Confusion",
    title: "Smart Tool Discovery",
    severity: "High",
    before: [
      "Home pushed “chat with AI” instead of task-first entry",
      "Popular tools hidden in “More” category",
      "Discover — flat scroll, no categories or intent structure",
    ],
    after: [
      "Task-first home — “What would you like to create?” + mode carousel",
      "Featured apps with prices — preview and credit cost before selection",
      "Discover by intent — quick-filter chips, inline-play on hover",
    ],
  },
  {
    theme: "Paywall Friction Loop",
    title: "Auth & Draft Retention",
    severity: "Critical",
    before: [
      "Auth and paywall interrupt typing",
      "Prompts and refs wiped after sign-up; price jumped 25 → 200",
      "No value shown before payment — users abandon after emotional investment",
    ],
    after: [
      "Soft gate — auth on Send only, prompt and refs preserved through sign-up",
      "50 free credits upfront — users experience the full flow before paying",
      "Continue creating — return to the same generation after payment, not home",
    ],
  },
  {
    theme: "Credit Cost Opacity",
    title: "Cost Before Action",
    severity: "High",
    before: [
      "Credit cost revealed only at generation step",
      "Paywall triggered even when credits on balance",
      "No running balance — unclear what is Have / Need / Missing",
    ],
    after: [
      "Cost on Send — price visible before committing to generation",
      "Balance in header — always visible after sign-up",
      "Paywall when funds are low — Need · Have · Missing breakdown, not a surprise wall",
    ],
  },
  {
    theme: "Iteration Failure",
    title: "Unified Tool Chat",
    severity: "High",
    before: [
      "Two tool UIs — home circle vs catalog popup, learn twice",
      "Follow-up requires re-uploading two files",
      "Closing tool chat erases prompts and thread context",
    ],
    after: [
      "One unified tool-chat — guest → auth → Pro, learn once",
      "Follow-up without re-attach — system keeps sources and latest result",
      "History reopens full thread — every prompt recoverable, not just the file",
    ],
  },
  {
    theme: "Paywall Opacity",
    title: "Paywall Transparency",
    severity: "Critical",
    before: [
      "Surprise paywall with no math",
      "After payment — back to home, not the same task",
      "One payment path when Subscribe vs Top-up would fit better",
    ],
    after: [
      "Two-stage paywall — Subscribe for new users, Top-up packs for active Pro",
      "Need · Have · Missing — transparent breakdown before checkout",
      "Success → same generation — no dead-end after payment",
    ],
  },
  {
    theme: "No Next-step Guidance",
    title: "Proactive Assistant",
    severity: "High",
    before: [
      "No suggestions after a result — user doesn't know what to do next",
      "Chat doesn't route requests to relevant tools",
      "Blank canvas anxiety on first visit",
    ],
    after: [
      "Next-step chips — Edit · Variations · Combine suggested for every result",
      "Chat routing to tools — AI suggests relevant tools for the request",
      "Prompt examples + Recently created — proven scenarios on home, higher engagement in Hotjar",
    ],
  },
  {
    theme: "Subscription Opacity",
    title: "Subscription Clarity",
    severity: "Medium",
    before: [
      "Unclear plan status — active, ending, or lapsed",
      "Cancel / resubscribe / expiry dates hard to find",
      "No single place to see renews · credits left",
    ],
    after: [
      "Settings · one panel — active plan, ending date, lapsed state in one place",
      "Renews · credits left · Cancel — transparent subscription management",
      "Resubscribe on expiry — win-back path for lapsed Pro",
    ],
  },
];

const severityStyle: Record<Finding["severity"], { bg: string; text: string; dot: string }> = {
  Critical: { bg: "#FBECEA", text: "#9A2A1E", dot: "#C24A3A" },
  High: { bg: "#FFF4E6", text: "#7c4a18", dot: "#E08642" },
  Medium: { bg: "#EAF6F4", text: "#0d5d57", dot: ACCENT },
};

function Findings() {
  return (
    <LocalizedContent>
    <div className="flex flex-col gap-4">
      <p className="max-w-[80ch] text-[15px] leading-[1.65] text-[#3a3a36]">
        From prod friction and Hotjar evidence to a unified 26-screen story — a continuous journey
        from first visit to subscription, instead of disconnected surfaces. Each theme below maps
        to one or more micro-flows.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {findings.map((f) => (
          <FindingCard key={f.title} finding={f} />
        ))}
      </div>
    </div>
      </LocalizedContent>
  );
}

function FindingCard({ finding }: { finding: Finding }) {
  const { tc } = useLocale();
  const s = severityStyle[finding.severity];
  return (
    <LocalizedContent>
    <article className="rounded-[24px] border border-[#E8E8E3] bg-white p-6">
      <div className="flex flex-wrap items-center gap-2.5">
        <span
          className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium"
          style={{ background: s.bg, color: s.text }}
        >
          {tc(finding.severity)}
        </span>
        <span className="text-[13px] text-[#6F6F6A]">{tc(finding.theme)}</span>
      </div>

      <h3 className="mt-4 text-[18px] font-semibold leading-tight tracking-[-0.01em] text-[#050505]">
        {tc(finding.title)}
      </h3>

      <div className="mt-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C24A3A]">{tc("Before")}</div>
        <ul className="mt-2.5 flex flex-col gap-2">
          {finding.before.map((it) => (
            <li key={it} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#3a3a36]">
              <span className="mt-0.5 shrink-0 text-[#FF6467]" aria-hidden>
                ✕
              </span>
              {tc(it)}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <div className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
          {tc("After")}
        </div>
        <ul className="mt-2.5 flex flex-col gap-2">
          {finding.after.map((it) => {
            const [lead, rest] = splitLead(tc(it));
            return (
              <li key={it} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#3a3a36]">
                <span className="mt-0.5 shrink-0 text-[#00BC7D]" aria-hidden>
                  ✓
                </span>
                {lead ? (
                  <span>
                    <strong className="font-semibold text-[#050505]">{lead}</strong>
                    {rest}
                  </span>
                ) : (
                  tc(it)
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
    </LocalizedContent>
  );
}

function splitLead(text: string): [string | null, string] {
  const idx = text.indexOf(" — ");
  if (idx === -1) return [null, text];
  return [text.slice(0, idx), text.slice(idx)];
}

/* ----------------------------------------------------------- Competitive */

function Competitive() {
  const groups = [
    {
      label: "Direct",
      tone: "#0a0a0a",
      items: [
        ["ChatGPT", "Subscription"],
        ["Claude", "Subscription"],
        ["Gemini", "Freemium"],
        ["Poe", "Credits"],
        ["TypingMind", "License"],
        ["AiZolo", "Credits"],
      ],
    },
    {
      label: "Indirect",
      tone: "#6F6F6A",
      items: [
        ["Notion AI", "Add-on"],
        ["Zapier", "Subscription"],
        ["Motion", "Subscription"],
        ["Midjourney", "Subscription"],
        ["Runway", "Credits"],
        ["ElevenLabs", "Credits"],
      ],
    },
    {
      label: "Substitutes",
      tone: ACCENT,
      items: [
        ["Sintra AI", "AI Employees"],
        ["Genspark", "AI Search"],
        ["Perplexity", "AI Search"],
        ["Manus", "AI Agent"],
        ["v0.dev", "AI Prototyping"],
        ["Canva AI", "Freemium"],
      ],
    },
  ];

  const insights = [
    {
      title: "Monetization trend",
      body: "Credit models (like Overchat) are common in multi-tool platforms, but leaders like ChatGPT use flat subscriptions — reducing per-action anxiety.",
    },
    {
      title: "Paywall best practice",
      body: "Top competitors show watermarked previews or low-res results before paywall — Overchat showed nothing.",
    },
    {
      title: "Onboarding pattern",
      body: "Successful platforms guide users to a “first win” within 60 seconds. Overchat's trial flow required 4+ steps before any result.",
    },
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-10">
      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.label} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: g.tone }} />
              <span
                className="font-mono text-[11px] uppercase tracking-[0.12em]"
                style={{ color: g.tone }}
              >
                {g.label} · 6
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-1.5 border-t border-[#EFEFEA] pt-3">
              {g.items.map(([name, model]) => (
                <li
                  key={name}
                  className="flex items-center justify-between gap-3 text-[13px] text-[#3a3a36]"
                >
                  <span>{name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#8A8A84]">
                    {model}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {insights.map((i) => (
          <div key={i.title} className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
              Insight · {i.title}
            </div>
            <p className="mt-2 text-[13px] leading-snug text-[#3a3a36]">{i.body}</p>
          </div>
        ))}
      </div>
    </div>
    </LocalizedContent>
  );
}

/* ----------------------------------------------------------- Micro-flows */

function MicroFlows() {
  return (
    <LocalizedContent>
    <div className="flex flex-col gap-6">
      <div className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
              Micro-flows · methodology
            </div>
            <h3 className="mt-3 text-[20px] leading-tight text-[#050505] md:text-[22px]">
              10 micro-flows · Before stickers + After wireframes
            </h3>
            <p className="mt-3 max-w-[44ch] text-[14px] leading-[1.6] text-[#3a3a36]">
              Each micro-flow pairs a production Before screenshot annotated with friction stickers
              (rage clicks, dead time, drop-off step) and an After wireframe annotated with{" "}
              <strong className="text-[#050505]">Fix</strong> and{" "}
              <strong className="text-[#050505]">Why</strong> notes that trace each decision back to
              Hotjar evidence.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FBECEA] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#9A2A1E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C24A3A]" />
              Example · Micro-flow 01
            </span>
            <h4 className="mt-3 text-[16px] text-[#050505]">Image Combiner paywall</h4>
            <p className="mt-2 text-[13px] leading-snug text-[#6F6F6A]">
              Free user with credits on balance — unexpected paywall, price jump after auth, upload
              reset on mobile.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <ImageSlot
            label="Before · Production"
            tone="before"
            ratio="1024 / 129"
            fit="contain"
            src={overchatImages.microFlow01Before}
            alt="Image Combiner paywall — production flow with friction stickers"
          />
          <ImageSlot
            label="After · Wireframes"
            tone="after"
            ratio="1024 / 245"
            fit="contain"
            src={overchatImages.microFlow01After}
            alt="Image Combiner paywall — wireframe flow with Fix and Why notes"
          />
        </div>

        <a
          href={overchatFigmaLinks.wireframes}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaWireframesLabel suffix=" →" />
        </a>
      </div>
    </div>
      </LocalizedContent>
  );
}

/* ------------------------------------------------------------ Before & After */

const beforeAfter = [
  {
    letter: "A",
    title: "Quick access to generation",
    body: "Home is a single entry point for any content — prompt examples, featured apps, trending and new models. Blocks adapt to the selected mode.",
  },
  {
    letter: "B",
    title: "One input pattern for every tool",
    body: "The same composer across tools — users learn once and carry habits everywhere. One pattern is also cheaper to build, extend and maintain.",
  },
  {
    letter: "C",
    title: "A clearer catalog structure",
    body: "When featured picks on home aren't enough, Discover offers more examples and tools — with filters and categories to find the right app faster.",
  },
  {
    letter: "D",
    title: "All tools in one place",
    body: "Instead of hopping between Image Generator, Video Generator and Discover more — one Discover entry covers any task.",
  },
  {
    letter: "E",
    title: "Shorter path to popular tools",
    body: "Popular native tools now live in the sidebar — pin any other frequent one. Light prompt examples let users try a proven scenario instead of starting blank.",
  },
  {
    letter: "F",
    title: "Unified history & recent on home",
    body: "One chronological history for images, video and chats — each thread shows a tool icon or latest preview. Media you need again is one tap away.",
  },
];

function BeforeAfter() {
  return (
    <LocalizedContent>
    <div className="flex flex-col gap-6">
      <p className="max-w-[80ch] text-[15px] leading-[1.65] text-[#3a3a36]">
        Six key shifts visible across the 26-screen concept — production today on the left, concept
        on the right in the Figma file. One user task, very different results.
      </p>

      <div className="grid gap-4">
        {beforeAfter.map((b) => (
          <article
            key={b.letter}
            className="rounded-[24px] border border-[#E8E8E3] bg-white p-6 md:p-8"
          >
            <header className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] text-white"
                style={{ background: ACCENT }}
              >
                {b.letter}
              </span>
              <div className="min-w-0">
                <h3 className="text-[16px] leading-tight text-[#050505] md:text-[18px]">
                  {b.title}
                </h3>
                <p className="mt-1 text-[13px] leading-snug text-[#6F6F6A]">{b.body}</p>
              </div>
            </header>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <ImageSlot
                label="Before · Production"
                tone="before"
                fit="contain"
                ratio={overchatBeforeAfter[b.letter].beforeRatio}
                src={overchatBeforeAfter[b.letter].before}
                alt={`${b.title} — production`}
              />
              <ImageSlot
                label="After · Concept"
                tone="after"
                fit="contain"
                ratio={overchatBeforeAfter[b.letter].afterRatio}
                src={overchatBeforeAfter[b.letter].after}
                alt={`${b.title} — concept`}
              />
            </div>
          </article>
        ))}
      </div>

      <a
        href={overchatFigmaLinks.concept26}
        target="_blank"
        rel="noreferrer"
        className="self-start font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
      >
        <FigmaLinkLabel suffix=" →" />
      </a>
    </div>
      </LocalizedContent>
  );
}

/* ----------------------------------------------------------- Concept UI */

function ConceptUi() {
  return <BlockOverchatShowcase figmaHref={overchatFigmaLinks.concept26} />;
}

/* ------------------------------------------------------------ Outcome */

function Outcome() {
  const effects = [
    {
      metric: "Time-to-first-action",
      body: "Task-first home, popular tools and Discover by task should shorten the path to the first generation.",
    },
    {
      metric: "Mid-funnel drop-off",
      body: "Auth on Send, draft retention and free credits should reduce churn at registration and paywall.",
    },
    {
      metric: "Generations per session",
      body: "Unified tool-chat, follow-up without re-upload and prompt examples should remove friction between iterations.",
    },
    {
      metric: "Subscription & top-up conversion",
      body: "Transparent price (cost on Send, Need · Have · Missing) should reduce distrust before checkout.",
    },
    {
      metric: "Retention & re-use",
      body: "Unified history, Recently created and return-to-generation after payment should lift repeat use.",
    },
  ];

  return (
    <LocalizedContent>
    <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
      <div>
        <p className="max-w-[60ch] text-[15px] leading-[1.65] text-[#3a3a36]">
          If these changes ship, expect movement on core product metrics — not guaranteed outcomes,
          but design hypotheses tied to what Hotjar actually showed.
        </p>

        <ol className="mt-6 flex flex-col gap-3">
          {effects.map((e, i) => (
            <li
              key={e.metric}
              className="flex gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-5"
            >
              <span className="font-mono text-[11px] text-[#B8B8B2]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="text-[14px] text-[#050505]">{e.metric}</div>
                <p className="mt-1 text-[13px] leading-snug text-[#6F6F6A]">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
          Designer's note
        </div>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#3a3a36]">
          This is a concept case, not commissioned work. The 26-screen hi-fi is a designer-prioritised
          v1 — full research breadth lives in the micro-flow wireframes on Figma.
        </p>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#6F6F6A]">
          Validation plan: if any subset ships, track the five metrics above in GA4 and Hotjar before
          / after, with a 30-day window per metric.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={overchatFigmaLinks.concept26}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
          >
            <FigmaLinkLabel suffix=" →" />
          </a>
          <a
            href={overchatFigmaLinks.wireframes}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#E8E8E3] bg-white px-5 py-2.5 text-[13px] text-[#3a3a36] hover:bg-white"
          >
            <FigmaWireframesLabel />
          </a>
        </div>
      </div>
    </div>
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

function SubHead({ n, title }: { n: string; title: string }) {
  const { tc } = useLocale();
  return (
    <LocalizedContent>
    <div className="flex items-center gap-3">
      {n && <span className="font-mono text-[11px] text-[#B8B8B2]">{n}</span>}
      <h3 className="text-[20px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[22px]">
        {tc(title)}
      </h3>
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
