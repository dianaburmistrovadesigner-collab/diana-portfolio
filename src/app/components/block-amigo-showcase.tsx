import { LocalizedContent } from "./localized-content";
import { useState } from "react";
import { amigoShowcaseScreens } from "../assets/case-images";

const ACCENT = "#0E9488";

type Screen = {
  n: string;
  title: string;
  area: string;
  description: string;
  highlights: string[];
};

const screens: Screen[] = [
  {
    n: "01",
    title: "New chat · Home",
    area: "Entry",
    description:
      "Model picker, prompt starters, and the sombrero mascot — a warm entry point for any task.",
    highlights: ["Multi-model chips", "Prompt suggestions", "Guest CTA"],
  },
  {
    n: "02",
    title: "Flux Pro · AI Store",
    area: "AI Store",
    description:
      "Agent detail page with provider metadata, prompt examples, and a one-tap chat CTA.",
    highlights: ["Model profile", "Prompt gallery", "Like · use stats"],
  },
  {
    n: "03",
    title: "Image generator · Styles",
    area: "Image",
    description:
      "Side panel for visual style — photorealism, surreal, fantasy, and more before generating.",
    highlights: ["Style picker", "Chat thread", "Suggestion chips"],
  },
  {
    n: "04",
    title: "Image generator · Advanced",
    area: "Image",
    description:
      "Negative prompt, reference images, aspect ratio, and mood controls for fine-tuned output.",
    highlights: ["Reference attach", "Aspect ratio", "Negative prompt"],
  },
  {
    n: "05",
    title: "Community · Browse",
    area: "Community",
    description:
      "Masonry feed of community generations — discover prompts, likes, and remixes from other users.",
    highlights: ["New · liked · used tabs", "Prompt snippets", "Social proof"],
  },
  {
    n: "06",
    title: "Community · Detail",
    area: "Community",
    description:
      "Full-screen view with the original prompt, engagement stats, and model metadata.",
    highlights: ["Full prompt", "Copy · download", "Provider · model"],
  },
  {
    n: "07",
    title: "Video generator · Player",
    area: "Video",
    description:
      "Dark-mode player with prompt overlay, playback controls, and a media-files sidebar.",
    highlights: ["Prompt overlay", "Media library", "Download"],
  },
  {
    n: "08",
    title: "Subscription · Plans",
    area: "Settings",
    description:
      "Fiesta tiers, taco balance, auto top-up, and plan comparison — the monetisation layer.",
    highlights: ["3 plan tiers", "Taco balance", "Payment method"],
  },
];

type BlockAmigoShowcaseProps = {
  figmaHref: string;
};

export function BlockAmigoShowcase({ figmaHref }: BlockAmigoShowcaseProps) {
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
            Eight screens from the 54-screen desktop flow
          </h2>
          <p className="mt-2 text-[14px] text-[#6F6F6A]">
            A representative slice of Iteration 1 — from first chat to subscription. The remaining
            desktop screens plus mobile web and native iOS are in Figma.
          </p>
        </div>

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

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8]">
          <div className="flex items-center gap-2 border-b border-[#E8E8E3] bg-white px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E3]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E3]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8E8E3]" />
            <div className="ml-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-0.5 text-[10px] text-[#8A8A84]">
              amigochat.io · {screen.area}
            </div>
          </div>

          <ScreenPreview src={amigoShowcaseScreens[active]} alt={screen.title} />
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

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
                  src={amigoShowcaseScreens[i]}
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

      <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-5 md:flex-row md:items-center">
        <div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
            Full key scenario · 54 desktop + mobile + iOS
          </div>
          <div className="mt-1 text-[14px] text-[#050505]">
            These 8 screens are a preview — open Figma for the complete flow
          </div>
        </div>
        <a
          href={figmaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
        >
          Open in Figma
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

function ScreenPreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex h-[460px] items-start justify-center bg-[#FAFAF8] p-3">
      <img src={src} alt={alt} className="max-h-full w-full object-contain object-top" />
    </div>
  );
}
