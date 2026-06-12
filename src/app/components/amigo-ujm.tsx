import { LocalizedContent } from "./localized-content";
import { JourneyMap } from "./journey-map";

const ACCENT = "#0E9488";

export function AmigoUjm() {
  return (
    <LocalizedContent>
    <div className="flex flex-col gap-8">
      <JourneyMap
        eyebrow="Journey 01 · Solopreneur"
        title="Maya Chen — From overwhelm to relief"
        subtitle="32 · Solopreneur content creator running EcoThreads. Five posts due this week and no plan."
        goal="Create consistent, on-brand content for EcoThreads without juggling 5 tools or feeling inadequate."
        accent={ACCENT}
        stages={[
          {
            index: 1,
            title: "Content deadline trigger",
            action: "Opens calendar — 5 pieces due this week.",
            emotion: 1.6,
            moment: "Initial pressure",
          },
          {
            index: 2,
            title: "Reluctant trial",
            action: "Opens 10 comparison tabs — 2 hrs gone.",
            emotion: 0.9,
            moment: "Comparison overload",
            quote: "Why is this so complicated?",
          },
          {
            index: 3,
            title: "Overwhelm spiral",
            action: "Finally picks ChatGPT (most popular). Still no plan.",
            emotion: 0.1,
            moment: "Lowest point",
            quote: "I just need something simple.",
          },
          {
            index: 4,
            title: "Setup struggle",
            action: "Creates Notion page, manually types client brief.",
            emotion: 0.6,
          },
          {
            index: 5,
            title: "Multi-tool juggle",
            action: "Writes copy in ChatGPT, waits on Midjourney in Discord.",
            emotion: 1.1,
            moment: "Context loss",
          },
          {
            index: 6,
            title: "Abandonment",
            action: "Closes laptop — back to manual content.",
            emotion: 1.3,
            moment: "Walk away",
            quote: "Maybe AI isn't for me.",
          },
        ]}
      />

      <JourneyMap
        eyebrow="Journey 02 · Freelance power user"
        title="Alex Rivera — From chaos to control"
        subtitle="28 · Freelance content creator managing 4 clients across ChatGPT, Claude, Midjourney and Notion."
        goal="Organize AI work per client, track costs accurately and scale from 5 to 10+ clients."
        accent={ACCENT}
        stages={[
          {
            index: 1,
            title: "New client trigger",
            action: "Onboarding email from Client D — needs new workflow.",
            emotion: 1.8,
            moment: "Motivated",
          },
          {
            index: 2,
            title: "Context switching hell",
            action: "Switches tools 10+ times per session. Loses brand voice.",
            emotion: 0.5,
            moment: "Lowest point",
            quote: "I'm tired of black boxes.",
          },
          {
            index: 3,
            title: "Repetition trap",
            action: "Re-explains brand voice across 4 tools, again.",
            emotion: 0.8,
          },
          {
            index: 4,
            title: "Billing nightmare",
            action: "Friday invoicing — opens cost spreadsheet, can't attribute spend.",
            emotion: 0.7,
            moment: "Trust erodes",
          },
          {
            index: 5,
            title: "Cost anxiety",
            action: "Credit-card bill: $65 for AI tools, no visibility per client.",
            emotion: 0.3,
            moment: "Cost visibility",
            quote: "Where is all this money going?",
          },
          {
            index: 6,
            title: "System outage",
            action: "ChatGPT goes down — 3 deliverables due today.",
            emotion: 0.0,
            moment: "Critical low",
            quote: "My business runs on one tool.",
          },
        ]}
      />
    </div>
    </LocalizedContent>
  );
}
