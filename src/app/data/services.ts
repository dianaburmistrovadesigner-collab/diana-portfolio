import type { SiteRoute } from "../lib/routing";

export type ServiceCase = {
  slug: string;
  title: string;
  route: SiteRoute;
  cover: string;
};

export type Service = {
  slug: string;
  route: SiteRoute;
  cover: string;
  title: string;
  tagline: string;
  description: string[];
  whatIsIncluded: string[];
  notAFitFor: string[];
  preferredEngagement: string;
  tags: string[];
  relatedCases: ServiceCase[];
};

export const services: Service[] = [
  {
    slug: "b2b-product-design",
    route: "service-b2b-product-design",
    // TODO: regenerate cover — current image says "B2B SaaS", should reflect SaaS & Apps (both B2B and B2C)
    cover: "/images/covers/service-b2b-product-design.png",
    title: "Product Design for SaaS & Apps",
    tagline: "End-to-end product design for complex digital products — from discovery to developer handoff.",
    description: [
      "I design complex digital products — SaaS dashboards, developer platforms, AI tools, consumer apps — from the first research session to the final handoff spec.",
      "Best fit: multi-step workflows, data-heavy interfaces, dual-audience platforms, 0-to-1 MVPs and feature expansions.",
    ],
    whatIsIncluded: [
      "User research & competitive analysis",
      "Information architecture, user flows, wireframes",
      "Hi-fi Figma prototypes with component specs",
      "Handoff-ready documentation",
      "Design QA during development",
    ],
    notAFitFor: [
      "One-off screens or pure visual polish",
      "Agency rotation with 5+ clients simultaneously",
      "Projects without a defined product vision",
    ],
    preferredEngagement: "3–6 month minimum. Long-term preferred — depth over breadth.",
    tags: ["Product Designer", "UX Designer", "Figma", "FigJam", "Notion"],
    relatedCases: [
      {
        slug: "amigochat",
        title: "AmigoChat · Re-thinking a multi-model AI assistant",
        route: "case-amigochat",
        cover: "/images/covers/amigochat-cover.png",
      },
      {
        slug: "aimlapi",
        title: "AIMLAPI · Developer platform redesign",
        route: "case-aimlapi",
        cover: "/images/covers/aiml-api-cover.png",
      },
      {
        slug: "overchat",
        title: "Overchat · Usability audit & hi-fi concept",
        route: "case-overchat",
        cover: "/images/covers/overchat-cover.png",
      },
    ],
  },
  {
    slug: "design-system",
    route: "service-design-system",
    cover: "/images/covers/service-design-system.png",
    title: "Design System — build from scratch or audit",
    tagline: "Semantic tokens, shadcn-aligned components, visual documentation. Built for engineering adoption.",
    description: [
      "I build design systems that developers actually use — semantic tokens (color, spacing, typography), component library in Figma aligned to shadcn/Tailwind, and visual doc pages for handoff.",
      "Can start from scratch or systematize what you already have. Every Figma decision maps to React props 1:1.",
    ],
    whatIsIncluded: [
      "Token architecture (Primitive → Semantic → Component, 3 layers)",
      "Light/dark mode via Figma Variables",
      "Component sets with full variant coverage and states",
      "Visual documentation pages (anatomy, usage guidelines, do/don't)",
      "shadcn/Tailwind API parity for developer handoff",
    ],
    notAFitFor: [
      "Marketing landing pages or one-time UI kits",
      "Projects without a React/component-based codebase",
    ],
    preferredEngagement: "6–12 weeks for a full build. Audit deliverable in 2–3 weeks.",
    tags: ["Product Designer", "Design Systems Specialist", "Figma", "Tokens Studio"],
    relatedCases: [
      {
        slug: "strevolut",
        title: "Strevolut · Design system built from scratch",
        route: "case-strevolut",
        cover: "/images/covers/strevolut-cover.png",
      },
      {
        slug: "aimlapi",
        title: "AIMLAPI · Where the need for a system became clear",
        route: "case-aimlapi",
        cover: "/images/covers/aiml-api-cover.png",
      },
    ],
  },
  {
    slug: "usability-audit",
    route: "service-usability-audit",
    cover: "/images/covers/service-usability-audit.png",
    title: "Usability Audit — data-backed UX review",
    tagline: "Find where users drop off and why — backed by behavioral data, not just gut feel.",
    description: [
      "I combine heuristic analysis with behavioral data (Hotjar session recordings, click maps, funnels) to identify where users drop off and why.",
      "You get a prioritized list of issues with effort/impact ratings and a wireframe concept showing the key fixes — ready to hand to your dev team.",
    ],
    whatIsIncluded: [
      "Heuristic evaluation across key flows",
      "Behavioral analytics review (Hotjar, GA or equivalent)",
      "Prioritized issue list with effort/impact matrix",
      "Wireframe concept showing top-priority fixes",
      "Presentation-ready findings document",
    ],
    notAFitFor: [
      "Brand-new products with no live users yet",
      "Pure visual redesigns without UX scope",
    ],
    preferredEngagement: "2–4 weeks. Fixed-scope deliverable.",
    tags: ["UX Designer", "Product Designer", "Figma", "FigJam", "Hotjar"],
    relatedCases: [
      {
        slug: "overchat",
        title: "Overchat · Hotjar sessions → 26-screen hi-fi concept",
        route: "case-overchat",
        cover: "/images/covers/overchat-cover.png",
      },
    ],
  },
  {
    slug: "design-system-audit",
    route: "service-design-system-audit",
    cover: "/images/covers/service-design-system-audit.png",
    title: "Design System Audit — tokens, components & docs",
    tagline: "Find gaps between your Figma library and your codebase before they compound into debt.",
    description: [
      "I audit your existing Figma library against your codebase — token naming consistency, component coverage gaps, dark-mode readiness, WCAG AA compliance, and handoff quality.",
      "You get a structured gap report with prioritized fixes and an action plan, whether you need a light cleanup or a full rebuild.",
    ],
    whatIsIncluded: [
      "Token naming and structure review (Primitive → Semantic layers)",
      "Component coverage gap analysis",
      "WCAG 2.1 AA contrast check in light and dark modes",
      "Figma ↔ code alignment check (shadcn/Tailwind parity)",
      "Prioritized gap report + action plan (cleanup vs. rebuild recommendation)",
    ],
    notAFitFor: [
      "Products without an existing Figma component library",
      "Teams not using React or a component-based framework",
    ],
    preferredEngagement: "1–2 weeks. Fixed deliverable.",
    tags: ["Product Designer", "Design Systems Specialist", "Figma"],
    relatedCases: [
      {
        slug: "strevolut",
        title: "Strevolut · Built after auditing fragmented portfolio components",
        route: "case-strevolut",
        cover: "/images/covers/strevolut-cover.png",
      },
      {
        slug: "aimlapi",
        title: "AIMLAPI · Token and component inconsistency was the core problem",
        route: "case-aimlapi",
        cover: "/images/covers/aiml-api-cover.png",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceByRoute(route: string): Service | undefined {
  return services.find((s) => s.route === route);
}
