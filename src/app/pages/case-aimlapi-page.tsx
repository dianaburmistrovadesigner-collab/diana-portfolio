import type { ReactNode } from "react";
import { useLocale } from "../lib/locale";
import { LocalizedContent } from "../components/localized-content";
import { BlockAudience } from "../components/block-audience";
import { BlockFlows } from "../components/block-flows";
import { BlockIdeation } from "../components/block-ideation";
import { BlockJourneys } from "../components/block-journeys";
import { BlockOutcomes } from "../components/block-outcomes";
import { BlockRoadmap } from "../components/block-roadmap";
import { BlockSitemap } from "../components/block-sitemap";
import { BlockUiShowcase } from "../components/block-ui-showcase";
import { CaseHero } from "../components/case-hero";
import { CaseOverview } from "../components/case-overview";
import { CaseResearch } from "../components/case-research";
import { CompetitorMatrix } from "../components/competitor-matrix";
import { aimlImages } from "../assets/case-images";
import { VisualTrailer } from "../components/case-media";

const STAGES: { num: string; name: string; render: () => ReactNode }[] = [
  { num: "03", name: "Competitor analysis", render: () => <CompetitorMatrix /> },
  { num: "04", name: "Target audience", render: () => <BlockAudience /> },
  { num: "05", name: "Ideation & solution", render: () => <BlockIdeation /> },
  { num: "06", name: "User journey maps", render: () => <BlockJourneys /> },
  { num: "07", name: "User flows", render: () => <BlockFlows /> },
  { num: "08", name: "Information architecture", render: () => <BlockSitemap /> },
  { num: "09", name: "MVP strategy & prioritization", render: () => <BlockRoadmap /> },
  { num: "10", name: "Visual design", render: () => <BlockUiShowcase /> },
  { num: "11", name: "Outcomes, lessons & next steps", render: () => <BlockOutcomes /> },
];

export function CaseAimlapiPage() {
  return (
    <>
      <CaseHero />
      <VisualTrailer
        eyebrow="The result · redesigned dashboard"
        caption="Onboarding-first dashboard — API key setup, model picker, and a first-call code snippet in one view."
        src={aimlImages.trailer}
        alt="AI/ML API redesign — dashboard with onboarding and popular models"
      />
      <CaseOverview />
      <CaseResearch />
      {STAGES.map((s, i) => (
        <Stage key={s.num} num={s.num} name={s.name} tone={i % 2 === 0 ? "muted" : "white"}>
          {s.render()}
        </Stage>
      ))}
    </>
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
    <section
      id={`stage-${num}`}
      className={
        "border-b border-[#E8E8E3] " + (tone === "muted" ? "bg-[#FAFAF8]" : "bg-white")
      }
    >
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
            {num} — {tc(name)}
          </span>
          <span className="h-px flex-1 bg-[#E8E8E3]" />
        </div>
        {children}
      </div>
    </section>
  );
}
