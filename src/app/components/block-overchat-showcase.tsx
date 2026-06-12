import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { useState } from "react";
import { overchatShowcaseScreens } from "../assets/case-images";

const ACCENT = "#0E9488";

type Screen = {
  n: string;
  title: string;
  area: string;
  description: string;
};

const screens: Screen[] = [
  { n: "01", title: "Home · guest", area: "Discovery", description: "Multiple ways to start: chat, mode chips, featured apps with cost" },
  { n: "02", title: "Home · Image mode", area: "Discovery", description: "Mode chip switches composer to image settings" },
  { n: "03", title: "Image Combiner · setup", area: "Discovery", description: "Unified tool chat: two refs, prompt, cost on Send" },
  { n: "04", title: "Combiner · refs filled", area: "Discovery", description: "Featured tool pre-fills tags and attachments" },
  { n: "05", title: "Sign up on Send", area: "Discovery", description: "Auth at peak intent; draft + refs saved" },
  { n: "06", title: "Thread started", area: "Discovery", description: "History entry; context kept after auth" },
  { n: "07", title: "Generating", area: "Discovery", description: "Loading inside the same tool thread" },
  { n: "08", title: "First result", area: "Discovery", description: "Default prompt · photorealistic output" },
  { n: "09", title: "Follow-up edit", area: "Catalog", description: "Text-only — no re-upload of two files" },
  { n: "10", title: "Discover · Image", area: "Catalog", description: "Outcome-based browse while generation runs" },
  { n: "11", title: "Discover · filters", area: "Catalog", description: "Structured catalog — not flat model circles" },
  { n: "12", title: "Start from scratch", area: "Catalog", description: "Full image model catalog for open-ended work" },
  { n: "13", title: "Discover · browse", area: "Catalog", description: "Mixed exploration without losing home context" },
  { n: "14", title: "Generate Video", area: "Cross-tool", description: "Native video tool with examples and cost on Send" },
  { n: "15", title: "Home · Recently created", area: "Cross-tool", description: "New outputs visible on home" },
  { n: "16", title: "Recently · hover actions", area: "Cross-tool", description: "Quick path to reuse as reference" },
  { n: "17", title: "View assets", area: "Cross-tool", description: "Home → library shortcut" },
  { n: "18", title: "Subscribe", area: "Paywall", description: "Need / Have / Missing context + plan picker" },
  { n: "19", title: "Subscription success", area: "Paywall", description: "Continue creating — return to generation" },
  { n: "20", title: "Home · music prompt", area: "Paywall", description: "Post-subscription home with balance visible" },
  { n: "21", title: "Chat · routing to tools", area: "Paywall", description: "AI suggests relevant video tools for audio request" },
  { n: "22", title: "AI Stadium Trend · entry", area: "Paywall", description: "Tool-chat with carousel, cost on Send" },
  { n: "23", title: "Stadium · result + follow-up", area: "Paywall", description: "Follow-up edit; balance dropped — triggers top-up" },
  { n: "24", title: "Top-up credits", area: "Paywall", description: "Need / Have / Missing + packs; valid 1 year" },
  { n: "25", title: "Settings · active plan", area: "Settings", description: "Renews · credits left · cancel" },
  { n: "26", title: "Settings · plan ending", area: "Settings", description: "Ends on date · Resubscribe (finale)" },
];

function captionHighlights(description: string): string[] {
  return description
    .split(/[·,;]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 3);
}

type BlockOverchatShowcaseProps = {
  figmaHref: string;
};

export function BlockOverchatShowcase({ figmaHref }: BlockOverchatShowcaseProps) {
  const [active, setActive] = useState(0);
  const total = screens.length;
  const screen = screens[active];
  const highlights = captionHighlights(screen.description);

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + total) % total);

  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Concept UI · Unified scenario
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
            26 screens · one continuous journey
          </h2>
          <p className="mt-2 text-[14px] text-[#6F6F6A]">
            From first visit to subscription — designer-prioritized v1, not every wireframe
            recommendation at once.
          </p>
        </div>

        <div className="flex items-center gap-3 self-end">
          <div className="text-[12px] tabular-nums text-[#6F6F6A]">
            <span className="text-[#050505]">{screen.n}</span>
            <span className="text-[#C4C4BE]"> / 26</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous screen"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E8E3] bg-white text-[#050505] hover:bg-[#FAFAF8]"
            >
              <Chevron dir="left" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next screen"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E8E3] bg-white text-[#050505] hover:bg-[#FAFAF8]"
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8]">
          <div className="flex items-center gap-2 border-b border-[#E8E8E3] bg-white px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E3]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E3]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E3]" />
            <div className="ml-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-0.5 text-[10px] text-[#8A8A84]">
              overchat.ai · {screen.area}
            </div>
          </div>

          <ScreenPreview src={overchatShowcaseScreens[active]} alt={screen.title} />
        </div>

        <aside className="flex flex-col gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-5">
          <div>
            <span className="text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
              {screen.n} · {screen.area}
            </span>
            <h3 className="mt-1 text-[18px] leading-tight text-[#050505]">{screen.title}</h3>
          </div>
          <p className="text-[13px] leading-snug text-[#6F6F6A]">{screen.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-2.5 py-0.5 text-[11px] text-[#3a3a36]"
              >
                {h}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="-mx-2 mt-6 flex gap-2 overflow-x-auto px-2 pb-2">
        {screens.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.n}
              onClick={() => setActive(i)}
              className={
                "w-[108px] shrink-0 flex flex-col items-start gap-2 rounded-xl border p-2 text-left transition-colors " +
                (isActive
                  ? "border-[#050505] bg-white"
                  : "border-[#E8E8E3] bg-[#FAFAF8] hover:bg-white")
              }
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-white">
                <img
                  src={overchatShowcaseScreens[i]}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
                {isActive && (
                  <span
                    className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full"
                    style={{ background: ACCENT }}
                  />
                )}
              </div>
              <div className="flex w-full flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">{s.n}</span>
                <span className="line-clamp-2 text-[10.5px] leading-tight text-[#050505]">
                  {s.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-5 md:flex-row md:items-center">
        <div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
            Full 26-screen concept
          </div>
          <div className="mt-1 text-[14px] text-[#050505]">
            Explore every screen in the live Figma file
          </div>
        </div>
        <a
          href={figmaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
        >
          <FigmaLinkLabel />
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M3 9 L9 3 M4 3 H9 V8" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </a>
      </div>
    </section>
    </LocalizedContent>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path
        d={dir === "left" ? "M9 2 L4 7 L9 12" : "M5 2 L10 7 L5 12"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ScreenPreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex h-[460px] items-start justify-center bg-[#FAFAF8] p-3">
      <img src={src} alt={alt} className="max-h-full w-full object-contain object-top" />
    </div>
  );
}
