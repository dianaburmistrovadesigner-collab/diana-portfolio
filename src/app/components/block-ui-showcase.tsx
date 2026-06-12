import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { useState } from "react";
import { aimlShowcaseScreens } from "../assets/case-images";
import { aimlFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

type Screen = {
  n: string;
  title: string;
  area: string;
  description: string;
  highlights: string[];
  /** CSS display width (1×). Source files are 2× for Retina. */
  displayWidth: number;
};

const screens: Screen[] = [
  {
    n: "01",
    title: "Empty Dashboard",
    area: "Onboarding",
    description:
      "Empty state that welcomes new users and guides them toward the first valuable action.",
    highlights: ["Friendly empty state", "Primary CTA", "Setup checklist"],
    displayWidth: 1440,
  },
  {
    n: "02",
    title: "Dashboard with stats",
    area: "Overview",
    description:
      "Balance shown in USD instead of tokens, named API keys, spend trend, sortable cost list.",
    highlights: ["USD balance", "Named keys", "Spend chart", "Sortable cost list"],
    displayWidth: 1440,
  },
  {
    n: "03",
    title: "Browse Models",
    area: "Catalog",
    description:
      "Filterable grid of model cards with compare action and contextual recommendation tags.",
    highlights: ["Task / type filters", "Compare", "Recommended tags"],
    displayWidth: 1440,
  },
  {
    n: "04",
    title: "Usage Overview",
    area: "Analytics",
    description:
      "Analytics table: model / requests / cost. Date-range filter and a trend chart on top.",
    highlights: ["Date range", "Trend chart", "Model · requests · cost"],
    displayWidth: 1440,
  },
  {
    n: "05",
    title: "New chat · Playground",
    area: "Playground",
    description:
      "Chat-style playground with model selector and a side panel for tuning parameters.",
    highlights: ["Model selector", "Parameter panel", "Chat thread"],
    displayWidth: 1440,
  },
  {
    n: "06",
    title: "Playground · Images",
    area: "Playground",
    description:
      "Image generation view with prompt input, settings, and a thumbnail grid of results.",
    highlights: ["Prompt input", "Image settings", "Results grid"],
    displayWidth: 1440,
  },
];

export function BlockUiShowcase() {
  const [active, setActive] = useState(0);
  const total = screens.length;
  const screen = screens[active];

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + total) % total);

  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Visual design · Key scenario
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
            Six screens that carry the redesigned product
          </h2>
          <p className="mt-2 text-[14px] text-[#6F6F6A]">
            From an empty onboarding state to the playground — the key scenario visualised as a
            single connected flow.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 self-end">
          <div className="text-[12px] tabular-nums text-[#6F6F6A]">
            <span className="text-[#050505]">{String(active + 1).padStart(2, "0")}</span>
            <span className="text-[#C4C4BE]"> / {String(total).padStart(2, "0")}</span>
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

      {/* Hero slide — full-width preview, caption below */}
      <div className="flex flex-col gap-5">
        <div className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8]">
          <div className="flex items-center gap-2 border-b border-[#E8E8E3] bg-white px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E3]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E3]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E3]" />
            <div className="ml-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-0.5 text-[10px] text-[#8A8A84]">
              app.aimlapi · {screen.area}
            </div>
          </div>

          <ScreenPreview
            src={aimlShowcaseScreens[active]}
            alt={screen.title}
            displayWidth={screen.displayWidth}
          />
        </div>

        <aside className="flex flex-col gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[52ch]">
            <span className="text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
              {screen.n} · {screen.area}
            </span>
            <h3 className="mt-1 text-[18px] leading-tight text-[#050505]">{screen.title}</h3>
            <p className="mt-2 text-[13px] leading-snug text-[#6F6F6A]">{screen.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 md:max-w-[40ch] md:justify-end">
            {screen.highlights.map((h) => (
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

      {/* Thumbnails */}
      <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6" id="ui-thumbnails">
        {screens.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.n}
              onClick={() => setActive(i)}
              className={
                "flex flex-col items-start gap-2 rounded-xl border p-2 text-left transition-colors " +
                (isActive
                  ? "border-[#050505] bg-white"
                  : "border-[#E8E8E3] bg-[#FAFAF8] hover:bg-white")
              }
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-white">
                <img
                  src={aimlShowcaseScreens[i]}
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
              <div className="flex w-full items-center justify-between gap-1">
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">
                  {s.n}
                </span>
                <span className="truncate text-[11px] text-[#050505]">{s.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Figma deep link */}
      <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-5 md:flex-row md:items-center">
        <div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
            Full key scenario
          </div>
          <div className="mt-1 text-[14px] text-[#050505]">
            Explore every screen in the live Figma file
          </div>
        </div>
        <a
          href={aimlFigmaLinks.keyScenario}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
        >
          <FigmaLinkLabel />
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path
              d="M3 9 L9 3 M4 3 H9 V8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
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

function ScreenPreview({
  src,
  alt,
  displayWidth,
}: {
  src: string;
  alt: string;
  displayWidth: number;
}) {
  return (
    <div className="flex justify-center bg-[#FAFAF8] p-3">
      <img
        src={src}
        alt={alt}
        width={displayWidth}
        className="block h-auto w-full"
        style={{ maxWidth: displayWidth }}
      />
    </div>
  );
}
