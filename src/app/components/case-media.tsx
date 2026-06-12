import { LocalizedContent } from "./localized-content";
import { useLocale } from "../lib/locale";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const ACCENT = "#0E9488";

/* ----------------------------------------------------------- VisualTrailer */

type TrailerProps = {
  eyebrow?: string;
  caption?: string;
  src?: string;
  alt?: string;
  /** Background tone for the surrounding section. Defaults to muted. */
  tone?: "muted" | "white";
  /** Image aspect ratio. Defaults to 16/10 (browser-window feel). */
  ratio?: string;
};

/**
 * Big hero shot placed right after the case hero — a visual trailer that
 * gives the reader something to look at before diving into the long read.
 * Drops a dashed placeholder when no src is provided.
 */
export function VisualTrailer({
  eyebrow = "The result · concept preview",
  caption,
  src,
  alt = "",
  tone = "muted",
  ratio = "16 / 10",
}: TrailerProps) {
  const { tc } = useLocale();
  return (
    <LocalizedContent>
    <section
      className={
        "border-b border-[#E8E8E3] " + (tone === "muted" ? "bg-[#FAFAF8]" : "bg-white")
      }
    >
      <div className="mx-auto max-w-[1320px] px-6 py-12 md:py-16">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          {tc(eyebrow)}
        </div>

        {src ? (
          <div className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
            <ImageWithFallback src={src} alt={tc(alt)} className="block h-auto w-full" />
          </div>
        ) : (
          <MediaFrame ratio={ratio}>
            <Placeholder label="Drop a hero shot here" hint="≈ 16 : 10 · the first wow-image of the case" />
          </MediaFrame>
        )}

        {caption && (
          <p className="mt-4 max-w-[80ch] text-[13px] leading-snug text-[#6F6F6A]">{tc(caption)}</p>
        )}
      </div>
    </section>
    </LocalizedContent>
  );
}

/* --------------------------------------------------------------- ImageSlot */

type SlotProps = {
  label?: string;
  caption?: string;
  src?: string;
  alt?: string;
  ratio?: string;
  /** Color of the label pill — e.g. "before" red, "after" teal. */
  tone?: "neutral" | "before" | "after";
  /** How the image fills the frame. Use "contain" for wide panoramic strips. */
  fit?: "cover" | "contain";
};

const slotTone: Record<NonNullable<SlotProps["tone"]>, { bg: string; text: string; dot: string }> = {
  neutral: { bg: "#FAFAF8", text: "#6F6F6A", dot: "#B8B8B2" },
  before: { bg: "#FBECEA", text: "#9A2A1E", dot: "#C24A3A" },
  after: { bg: "#EAF6F4", text: "#0d5d57", dot: ACCENT },
};

/**
 * A single image slot in a case body — used inside cards, side-by-side
 * Before / After pairs, or stand-alone showcase shots.
 */
export function ImageSlot({
  label,
  caption,
  src,
  alt = "",
  ratio = "16 / 10",
  tone = "neutral",
  fit = "cover",
}: SlotProps) {
  const { tc } = useLocale();
  const t = slotTone[tone];
  return (
    <figure className="flex flex-col gap-2">
      {label && (
        <div
          className="inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em]"
          style={{ background: t.bg, color: t.text }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.dot }} />
          {tc(label)}
        </div>
      )}
      {ratio === "auto" ? (
        <div className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
          {src ? (
            <ImageWithFallback src={src} alt={tc(alt)} className="block h-auto w-full" />
          ) : (
            <Placeholder label={tc(label ?? "Image slot")} hint="full width" />
          )}
        </div>
      ) : (
        <MediaFrame ratio={ratio}>
          {src ? (
            <ImageWithFallback
              src={src}
              alt={tc(alt)}
              className={"block h-full w-full object-" + fit}
            />
          ) : (
            <Placeholder label={tc(label ?? "Image slot")} hint={`≈ ${ratio.replace(/\s/g, "")}`} />
          )}
        </MediaFrame>
      )}
      {caption && (
        <figcaption className="text-[12px] leading-snug text-[#6F6F6A]">{tc(caption)}</figcaption>
      )}
    </figure>
  );
}

/* --------------------------------------------------------------- ImageRail */

type RailProps = {
  label?: string;
  /** Number of placeholder thumbnails to render when no items provided. */
  count?: number;
  items?: { src?: string; alt?: string; caption?: string }[];
  tone?: SlotProps["tone"];
  /** Thumb aspect ratio — defaults to portrait-leaning 4/3 for screen mocks. */
  ratio?: string;
};

/**
 * Horizontal scrollable rail of thumbnails — for Before / After multi-screen
 * comparisons (à la the production screenshot strip in the old case design).
 */
export function ImageRail({
  label,
  count = 5,
  items,
  tone = "neutral",
  ratio = "4 / 3",
}: RailProps) {
  const t = slotTone[tone];
  const list = items ?? Array.from({ length: count }, () => ({}));
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <div
          className="inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em]"
          style={{ background: t.bg, color: t.text }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.dot }} />
          {label}
        </div>
      )}
      <div className="-mx-2 flex gap-3 overflow-x-auto px-2 pb-2">
        {list.map((it, i) => (
          <div key={i} className="w-[220px] shrink-0">
            <MediaFrame ratio={ratio}>
              {it.src ? (
                <ImageWithFallback
                  src={it.src}
                  alt={it.alt ?? ""}
                  className="block h-full w-full object-cover"
                />
              ) : (
                <Placeholder small label={`#${String(i + 1).padStart(2, "0")}`} />
              )}
            </MediaFrame>
            {it.caption && (
              <div className="mt-1.5 text-[11.5px] leading-snug text-[#6F6F6A]">{it.caption}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Internal */

function MediaFrame({ children, ratio }: { children: React.ReactNode; ratio: string }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white"
      style={{ aspectRatio: ratio }}
    >
      {children}
    </div>
  );
}

function Placeholder({
  label,
  hint,
  small = false,
}: {
  label?: string;
  hint?: string;
  small?: boolean;
}) {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-[#D6D6CF] bg-[#FAFAF8]"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <span
          className={
            "font-mono uppercase tracking-[0.14em] text-[#8A8A84] " +
            (small ? "text-[9.5px]" : "text-[10.5px]")
          }
        >
          {label ?? "Image slot"}
        </span>
        {hint && !small && (
          <span className="font-mono text-[10px] text-[#B8B8B2]">{hint}</span>
        )}
      </div>
    </div>
  );
}
