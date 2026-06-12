import { LocalizedContent } from "./localized-content";
import { JourneyMap } from "./journey-map";

export function BlockJourneys() {
  return (
    <LocalizedContent>
    <div className="flex flex-col gap-8">
      <JourneyMap
        eyebrow="Journey 01 · Startup team"
        title="EduFlow → CourseGenie (James + Tom)"
        subtitle="Technical founders shipping an EdTech MVP fast, on a $500/mo budget."
        goal="Launch an AI-powered EdTech product quickly while staying within a $500/mo budget."
        stages={[
          {
            index: 1,
            title: "Search AI solution",
            action: "Compare providers, weigh OpenAI vs alternatives.",
            emotion: 1.6,
            moment: "Cost rationale",
          },
          {
            index: 2,
            title: "Study AIMLAPI & decide",
            action: "Pricing math, model coverage, docs review.",
            emotion: 1.0,
            quote: "$300/mo instead of $800 with OpenAI",
          },
          {
            index: 3,
            title: "Quick start via template",
            action: "Spin up ready template, run first prompts.",
            emotion: 3.9,
            moment: "Template fit",
            quote: "Wow — that's already 60% of our MVP!",
          },
          {
            index: 4,
            title: "Customization",
            action: "Tune prompts and flows for unique needs.",
            emotion: 3.0,
            moment: "Coverage check",
          },
          {
            index: 5,
            title: "Integration & MVP launch",
            action: "Wire backend, ship beta to first users.",
            emotion: 3.3,
            quote: "Beta results validate the bet",
          },
          {
            index: 6,
            title: "Monitor, optimize, scale",
            action: "Smart routing, cost & quality monitoring.",
            emotion: 3.6,
            quote: "Smart load balancing saves 40% of budget",
          },
        ]}
      />

      <JourneyMap
        eyebrow="Journey 02 · Solo non-tech maker"
        title="Amazon Manager → AI Assistant (Sofia)"
        subtitle="Non-technical seller turning a niche pain point into a paid product."
        goal="Build a simple AI assistant for Amazon sellers and monetize it among peers."
        stages={[
          {
            index: 1,
            title: "Search ready solutions",
            action: "Tools cost $99–399, feel bloated and complex.",
            emotion: 0.4,
            moment: "Competitor letdown",
            quote: "Too expensive, too complicated",
          },
          {
            index: 2,
            title: "Idea of a niche tool",
            action: "Realize a focused Amazon helper could win.",
            emotion: 1.9,
          },
          {
            index: 3,
            title: "Study AIMLAPI ($80/mo)",
            action: "Calculate 1000 descriptions + 500 images.",
            emotion: 3.0,
            moment: "Budget fits",
            quote: "$80/mo — finally something I can afford",
          },
          {
            index: 4,
            title: "Register & first test",
            action: "Sign up, generate first listing copy.",
            emotion: 2.6,
            moment: "First result quality",
          },
          {
            index: 5,
            title: "No-code builder",
            action: "Assemble the assistant without writing code.",
            emotion: 3.3,
            moment: "No-code required",
          },
          {
            index: 6,
            title: "Launch & monetize",
            action: "Sell access to fellow Amazon sellers.",
            emotion: 4.0,
            quote: "I went from manager to AI entrepreneur",
          },
        ]}
      />
    </div>
    </LocalizedContent>
  );
}
