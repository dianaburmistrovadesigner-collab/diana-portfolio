import type { ReactNode } from "react";
import { FigmaLinkLabel, FigmaWireframesLabel } from "../components/figma-labels";
import { useLocale } from "../lib/locale";
import { LocalizedContent } from "../components/localized-content";
import { amigoImages } from "../assets/case-images";
import { VisualTrailer } from "../components/case-media";
import { amigoFigmaLinks } from "../lib/case-figma-links";
import { AmigoSurvey } from "../components/amigo-survey";
import { AmigoInsights } from "../components/amigo-insights";
import { AmigoEmpathy } from "../components/amigo-empathy";
import { AmigoPersonas } from "../components/amigo-personas";
import { AmigoUjm } from "../components/amigo-ujm";
import { AmigoProblem } from "../components/amigo-problem";
import { AmigoLeanCanvas } from "../components/amigo-lean-canvas";
import { AmigoPrioritization } from "../components/amigo-prioritization";
import { AmigoIa, AmigoSitemap } from "../components/amigo-ia";
import { BlockAmigoShowcase } from "../components/block-amigo-showcase";

const ACCENT = "#0E9488";

export function CaseAmigochatPage() {
  return (
    <LocalizedContent>
    <>
      <Hero />
      <VisualTrailer
        eyebrow="The result · MVP key scenario"
        caption="AI Store — featured agents, category browse, and the image-generation entry point. Warm peach palette across 54 desktop screens in the key scenario."
        src={amigoImages.hero}
        alt="AmigoChat AI Store — main screen"
      />
      <Overview />

      <Stage num="02" name="Research · Understanding the problem" tone="white">
        <Research />
      </Stage>
      <Stage num="03" name="Define · Who are we designing for" tone="muted">
        <Define />
      </Stage>
      <Stage num="04" name="Ideate · Framing the opportunity" tone="white">
        <Ideate />
      </Stage>
      <Stage num="05" name="Strategy · Building the business case" tone="muted">
        <Strategy />
      </Stage>
      <Stage num="06" name="MVP scope · From research to shipped MVP" tone="white">
        <MvpScope />
      </Stage>
      <Stage num="07" name="Design · Information architecture & visual language" tone="muted">
        <Design />
      </Stage>
      <Stage num="08" name="Outcomes & next steps" tone="white">
        <Outcomes />
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
          <span className="h-1.5 w-1.5 rounded-full bg-[#0E9488]" />
          UX case study · AmigoChat
        </div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="max-w-[16ch] text-[44px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[72px]">
            A unified AI assistant for independent creators.
          </h1>
          <p className="max-w-[42ch] text-[15px] leading-[1.55] text-[#6F6F6A] md:text-[17px]">
            Designing a product that eliminates the false choice between simplicity and power —
            bringing the best AI models into one friendly, organized workspace.
          </p>
        </div>

        {/* Meta strip */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-4">
          {[
            { label: "Role", value: "Product Designer (End-to-End)" },
            { label: "Timeline", value: "11 weeks · DesignerUp course" },
            { label: "Tools", value: "Figma, FigJam, Google Forms, Notion" },
            { label: "Type", value: "0-to-1 MVP design" },
          ].map((m) => (
            <div key={tc(m.label)} className="bg-white p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                {tc(m.label)}
              </div>
              <div className="mt-1.5 text-[14px] text-[#050505]">{tc(m.value)}</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={amigoFigmaLinks.keyScenario}
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
              The challenge & the vision
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-2">
              <div className="bg-white p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  The challenge
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#3a3a36]">
                  Independent content creators, freelancers, and small business owners are trapped
                  between simple-but-limited AI tools and powerful-but-chaotic ones. They juggle
                  multiple subscriptions, lose context switching between platforms, and waste time
                  on tool management instead of creative work.
                </p>
              </div>
              <div className="bg-white p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                    The vision
                  </span>
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#3a3a36]">
                  AmigoChat is a unified AI workspace that brings the best AI models together in
                  one friendly interface — with customizable AI personalities, project-based
                  workspaces, and a personal AI coordinator that eliminates decision fatigue.
                </p>
              </div>
            </div>

            <MetricRow
              items={[
                ["31", "Competitors analyzed"],
                ["33", "Survey respondents"],
                ["5", "In-depth interviews"],
                ["100%", "Confirmed tool fragmentation"],
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
  const competitors = [
    {
      cat: "Direct · AI aggregators",
      ex: "Poe, TypingMind, Merlin",
      insight: "Good multi-model access, but poor UX and no workspace organization.",
    },
    {
      cat: "Indirect · Single-model AI",
      ex: "ChatGPT, Claude, Gemini",
      insight: "Powerful but locked ecosystems, no cross-model flexibility.",
    },
    {
      cat: "Substitutes · Productivity",
      ex: "Notion AI, Zapier, Canva",
      insight: "Solve specific tasks but don't provide a unified AI experience.",
    },
  ];

  const quotes = [
    {
      text: "Why does it have to be so complicated? I just want one tool that works without me needing a PhD in AI.",
      who: "Small business owner",
    },
    {
      text: "I'm tired of black boxes. I need full control over my workflow, but every tool forces me into their way of doing things.",
      who: "Freelance content creator",
    },
    {
      text: "I don't just want more features — I want peace of mind. I want to stop worrying about losing my work between tools.",
      who: "Marketing professional",
    },
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-12">
      {/* Competitive analysis */}
      <div>
        <SubHead n="2.1" title="Competitive analysis — 31 competitors" />
        <p className="mt-3 max-w-[72ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
          Analyzed 31 competitors across three categories. Key finding: market leaders like
          ChatGPT have a critical weakness — closed ecosystems. That creates an opening for an
          open, unified alternative.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {competitors.map((c) => (
            <div key={c.cat} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                {c.cat}
              </div>
              <div className="mt-2 text-[14px] text-[#050505]">{c.ex}</div>
              <p className="mt-2 text-[13px] leading-snug text-[#6F6F6A]">{c.insight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Survey */}
      <div>
        <SubHead n="2.2" title="User survey" />
        <p className="mt-3 max-w-[72ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
          Ran an online survey to validate the hypotheses from competitor analysis. The goal was
          to find the Minimum Viable Audience (MVA) — professionals who actively use and pay for AI
          tools — and to quantify the pain points behind tool fragmentation.
        </p>
        <div className="mt-5">
          <AmigoSurvey />
        </div>
      </div>

      {/* Interviews */}
      <div>
        <SubHead n="2.3" title="User interviews — 5 in-depth sessions" />
        <p className="mt-3 max-w-[72ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
          Conducted 5 interviews with MVA representatives. 100% confirmed tool fragmentation and
          context loss, and revealed the emotional dimension: overwhelm, frustration, loss of
          creative flow. Users don't just want features — they want peace of mind.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
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
        <div className="mt-6">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
            Insights — 19 problems & jobs-to-be-done
          </div>
          <AmigoInsights />
        </div>
      </div>
    </div>
    </LocalizedContent>
  );
}

/* -------------------------------------------------------------- Define */

function Define() {
  return (
    <LocalizedContent>
    <div className="flex flex-col gap-12">
      {/* Personas */}
      <div>
        <SubHead n="3.1" title="Personas" />
        <p className="mt-3 max-w-[72ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
          Two key personas representing 100% of the target audience. They reflect the core market
          tension: the choice between simplicity and power.
        </p>
        <div className="mt-5">
          <AmigoPersonas />
        </div>
      </div>

      {/* Empathy maps */}
      <div>
        <SubHead n="3.2" title="Empathy maps" />
        <div className="mt-5">
          <AmigoEmpathy />
        </div>
      </div>

      {/* User journey maps */}
      <div>
        <SubHead n="3.3" title="User journey maps" />
        <p className="mt-3 max-w-[72ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
          Mapped the current state for both personas — phase by phase, with the emotional curve and
          the opportunities each low point opened up for the MVP.
        </p>
        <div className="mt-5">
          <AmigoUjm />
        </div>
        <a
          href={amigoFigmaLinks.journeyMap}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </div>
    </div>
      </LocalizedContent>
  );
}

/* -------------------------------------------------------------- Ideate */

function Ideate() {
  const hmw = [
    "Eliminate the trade-off between simplicity and power.",
    "Organize chaos for power users without overwhelming beginners.",
    "Create emotional connection with an AI tool.",
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-12">
      <div>
        <SubHead n="4.1" title="Problem statement" />
        <div className="mt-5">
          <AmigoProblem />
        </div>
      </div>

      <div>
        <SubHead n="4.2" title="How might we…" />
        <div className="mt-5 flex flex-wrap gap-2">
          {hmw.map((h, i) => (
            <span
              key={h}
              className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-white px-4 py-2 text-[13px] text-[#3a3a36]"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white"
                style={{ background: ACCENT }}
              >
                {i + 1}
              </span>
              {h}
            </span>
          ))}
        </div>
      </div>

      <div>
        <SubHead n="4.3" title="User scenario — Maya's first success" />
        <div className="mt-4 rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-6">
          <p className="max-w-[72ch] text-[14px] leading-[1.65] text-[#3a3a36]">
            Maya needs to create a social media post for her bakery. Instead of spending 3 hours
            juggling ChatGPT for text, Midjourney for images, and Canva for layout — she opens
            AmigoChat. The AI coordinator asks what she needs, suggests the right assistant, and
            she creates a complete post in{" "}
            <strong className="text-[#050505]">20 minutes</strong>. She enters a state of creative
            flow.
          </p>
          <a
            href={amigoFigmaLinks.userScenario}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
          >
            <FigmaLinkLabel suffix=" →" />
          </a>
        </div>
      </div>
    </div>
    </LocalizedContent>
  );
}

/* ------------------------------------------------------------ Strategy */

function Strategy() {
  const roadmap = [
    ["1–2", "Design & UX", "Wireframes, prototyping, user testing"],
    ["3–4", "Infrastructure", "API integration, auth, base architecture"],
    ["5–8", "Core AI features", "Assistants, AI Brain, workspaces"],
    ["9–11", "Polish & launch", "Testing, onboarding, soft launch"],
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-12">
      <div>
        <SubHead n="5.0" title="Project goals" />
        <p className="mt-3 max-w-[72ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
          Business and product goals that framed the MVP scope — acquisition, retention, and the
          hybrid BYOK model.
        </p>
        <a
          href={amigoFigmaLinks.projectGoals}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </div>

      {/* Lean Canvas */}
      <div>
        <SubHead n="5.1" title="Lean Canvas" />
        <div className="mt-5">
          <AmigoLeanCanvas />
        </div>
      </div>

      {/* Prioritization */}
      <div>
        <SubHead n="5.2" title="MVP feature set — Kano + Impact-Effort" />
        <div className="mt-5">
          <AmigoPrioritization />
        </div>
      </div>

      {/* Roadmap */}
      <div>
        <SubHead n="5.3" title="Product roadmap — 11 weeks" />
        <ol className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((r) => (
            <li key={r[0]} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
                Weeks {r[0]}
              </div>
              <div className="mt-2 text-[15px] text-[#050505]">{r[1]}</div>
              <p className="mt-1.5 text-[13px] leading-snug text-[#6F6F6A]">{r[2]}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
    </LocalizedContent>
  );
}

/* ------------------------------------------------------------ MVP Scope */

function MvpScope() {
  const cols = [
    {
      tag: "Iteration 1 · Shipped MVP",
      tone: ACCENT,
      intro:
        "Represented in the Figma key scenario — 150+ screens across desktop, mobile web and native iOS.",
      items: [
        "Unified hub with multi-model access (GPT-4o, Claude, Llama, Gemini, and more)",
        "AI Store — customizable assistant personas",
        "Core chat flows (text, image, video, music)",
        "Onboarding, auth (Google / Apple), subscription & upgrade",
        "Settings & profile",
        "Platform adaptations: desktop web, mobile web, native iOS",
      ],
    },
    {
      tag: "Acquisition · Validated, not launched",
      tone: "#0a0a0a",
      intro:
        "Prioritized in research (Kano) and journey maps but didn't ship before AmigoChat was acquired by Overchat in early 2025 — not cut for lack of value.",
      items: [
        "Project Workspaces (Must-Be for Alex)",
        "Personal AI Coordinator (Delighter for Maya)",
        "AI Brain — persistent cross-session context (Delighter for Alex)",
        "Templates library",
      ],
    },
    {
      tag: "Iteration 2 · Coming soon",
      tone: "#B8B8B2",
      intro:
        "Continuing this work independently: same UX foundation, refined visual direction, and the deferred features from research.",
      items: [
        "Visual redesign — refined, modern direction (Happyo-inspired)",
        "Workspaces + AI Brain",
        "AI Coordinator",
        "Usability testing on prototype",
      ],
    },
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-8">
      <p className="max-w-[80ch] text-[15px] leading-[1.65] text-[#3a3a36]">
        The research and strategy above reflect the full product vision — personas, Kano
        prioritization, and a roadmap for both Maya (simplicity) and Alex (power). The key
        scenario in Figma documents <strong>Iteration 1</strong>: what was designed and shipped as
        the AmigoChat MVP before the product was acquired.
      </p>

      <div className="grid gap-4 lg:grid-cols-3">
        {cols.map((c) => (
          <div key={c.tag} className="flex flex-col rounded-2xl border border-[#E8E8E3] bg-white p-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.tone }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                {c.tag}
              </span>
            </div>
            <p className="mt-3 text-[13px] leading-snug text-[#6F6F6A]">{c.intro}</p>
            <ul className="mt-4 flex flex-col gap-2 border-t border-[#EFEFEA] pt-4">
              {c.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a36]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#B8B8B2]" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </LocalizedContent>
  );
}

/* -------------------------------------------------------------- Design */

function Design() {
  const { tc } = useLocale();
  const visual = [
    ["Color palette", "Warm peach / beige backgrounds with orange accents"],
    ["Mascot", "A friendly robot in a sombrero — playful and memorable"],
    ["Currency", "“Tacos” instead of tokens — reinforcing the fun, Latin-inspired brand"],
    ["Inspiration", "Mellow (mellow.io) for a warm, friendly tone"],
  ];

  return (
    <LocalizedContent>
    <div className="flex flex-col gap-12">
      {/* Card sorting */}
      <div>
        <SubHead n="6.1" title="Card sorting · information architecture" />
        <p className="mt-3 max-w-[72ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
          Card sorting with users informed the navigation — 3 natural levels and a labeling system
          chosen against both Maya's “quick start” mental model and Alex's “organize by client”
          one.
        </p>
        <div className="mt-5">
          <AmigoIa />
        </div>
      </div>

      {/* Sitemap */}
      <div>
        <SubHead n="6.2" title="Sitemap" />
        <p className="mt-3 max-w-[72ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
          Public pages · Authentication (Google / Apple) · App tree (Workspace → Project → Chat,
          Templates, AI Brain, Settings).
        </p>
        <div className="mt-5">
          <AmigoSitemap />
        </div>
      </div>

      {/* Visual design */}
      <div>
        <SubHead n="6.3" title="Current visual design" />
        <p className="mt-3 max-w-[72ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
          AmigoChat's current visual language is warm and approachable, with a mascot personality.
          Eight representative desktop screens are below; the full 54-screen flow plus mobile web
          and native iOS are in Figma.
        </p>
        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#E8E8E3] sm:grid-cols-2">
          {visual.map(([k, v]) => (
            <div key={tc(k)} className="bg-white p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                {tc(k)}
              </div>
              <p className="mt-2 text-[13px] leading-snug text-[#3a3a36]">{tc(v)}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <BlockAmigoShowcase figmaHref={amigoFigmaLinks.keyScenario} />
        </div>
      </div>
    </div>
    </LocalizedContent>
  );
}

/* ------------------------------------------------------------ Outcomes */

function Outcomes() {
  const demonstrates = [
    "End-to-end product design from research to visual design",
    "Data-driven decisions (33 survey + 5 interviews + 31 competitors)",
    "Clear problem framing with validated insights",
    "Strategic thinking (Lean Canvas, Kano model, roadmap)",
    "User-centered approach with detailed personas and journey maps",
  ];

  const nextSteps = [
    "Iteration 2 — visual redesign + deferred features (Workspaces, AI Coordinator, AI Brain)",
    "Usability testing with an interactive prototype",
    "Update this case with the Iteration 2 Figma link when ready",
  ];

  return (
    <LocalizedContent>
    <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
      <div>
        <SubHead n="" title="What this project demonstrates" />
        <ul className="mt-4 flex flex-col gap-2">
          {demonstrates.map((d) => (
            <li key={d} className="flex items-start gap-2 text-[14px] leading-snug text-[#3a3a36]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: ACCENT }} />
              {d}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <SubHead n="" title="Next steps — Iteration 2 focus" />
          <ol className="mt-4 flex flex-col gap-2">
            {nextSteps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 text-[14px] leading-snug text-[#3a3a36]">
                <span className="font-mono text-[11px] text-[#B8B8B2]">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
          Product status
        </div>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#3a3a36]">
          AmigoChat was a real product with existing users — the design process documented here
          informed actual product development. In early 2025 it was acquired by{" "}
          <strong className="text-[#050505]">Overchat</strong>, and the product continues under the
          Overchat brand.
        </p>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#6F6F6A]">
          The MVP key scenario reflects what was designed before the acquisition.{" "}
          <strong className="text-[#050505]">Iteration 2</strong> continues the strategic roadmap
          as an independent portfolio evolution.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://amigochat.io/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
          >
            Visit amigochat.io →
          </a>
          <a
            href={amigoFigmaLinks.keyScenario}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#E8E8E3] bg-white px-5 py-2.5 text-[13px] text-[#3a3a36] hover:bg-white"
          >
            <FigmaLinkLabel />
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
