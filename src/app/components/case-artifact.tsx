import type { ReactNode } from "react";

const ACCENT = "#0E9488";

/**
 * Placeholder for a visual artifact (persona cards, journey maps, sitemap, etc.).
 * Used while the polished diagram is still being designed — keeps the working
 * FigJam / Figma version one click away.
 */
export function CaseArtifact({
  kind,
  title,
  caption,
  href,
  linkLabel = "View in Figma",
  height = 320,
  children,
}: {
  kind: string;
  title: string;
  caption?: string;
  href?: string;
  linkLabel?: string;
  height?: number;
  children?: ReactNode;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8E8E3] bg-[#FAFAF8] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            {kind}
          </span>
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
          >
            {linkLabel} →
          </a>
        )}
      </div>

      <div
        className="relative flex items-center justify-center bg-[repeating-linear-gradient(45deg,#FBFBF9_0px,#FBFBF9_10px,#F5F5F1_10px,#F5F5F1_20px)] p-6"
        style={{ minHeight: height }}
      >
        {children ?? (
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-dashed border-[#cfcfc8] bg-white">
              <span className="font-mono text-[16px] text-[#B8B8B2]">◇</span>
            </div>
            <div className="text-[15px] text-[#3a3a36]">{title}</div>
            {caption && (
              <p className="mx-auto mt-1.5 max-w-[44ch] text-[12px] leading-snug text-[#8A8A84]">
                {caption}
              </p>
            )}
            <div className="mt-3 inline-flex rounded-full border border-dashed border-[#cfcfc8] bg-white px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#A6A6A0]">
              Polished version in progress
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}
