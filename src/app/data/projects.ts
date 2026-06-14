import type { Project } from "../components/project-card";

export const projects: Project[] = [
  {
    slug: "aimlapi",
    year: "2025",
    state: "completed",
    title: "AIMLAPI · Turning a developer-only AI platform into a product for everyone",
    summary:
      "End-to-end redesign of a gateway to 300+ AI/ML models — research, IA, key flows and a phased MVP roadmap.",
    role: "Lead Product Designer",
    tags: ["AI / ML", "SaaS", "Dashboard", "IA", "MVP"],
    status: "case",
    href: "#/case/aimlapi",
  },
  {
    slug: "strevolut",
    year: "2026",
    state: "in-progress",
    title: "Strevolut · A design system to unify portfolio work",
    summary:
      "Semantic tokens, shadcn-aligned components, 75 doc frames — personal system in active development.",
    role: "Product Designer · Design systems",
    tags: ["Design system", "Tokens", "shadcn", "Figma Variables"],
    status: "case",
    href: "#/case/strevolut",
  },
  {
    slug: "amigochat",
    year: "2024",
    state: "completed",
    title: "AmigoChat · Re-thinking a multi-model AI assistant",
    summary:
      "Chat UI, model picker and onboarding overhaul for a consumer AI product growing past one million users.",
    role: "Product Designer",
    tags: ["AI chat", "Consumer", "Onboarding"],
    status: "case",
    href: "#/case/amigochat",
  },
  {
    slug: "overchat",
    year: "2026",
    state: "completed",
    title: "Overchat · Usability audit of an all-in-one AI app",
    summary:
      "Hotjar replays + hands-on QA → 10 micro-flow wireframes → a unified 26-screen hi-fi concept prioritising the highest-value, lowest-effort fixes for v1.",
    role: "Product Designer · Audit & concept",
    tags: ["AI app", "Usability audit", "Hotjar sessions", "Hi-fi concept"],
    status: "case",
    href: "#/case/overchat",
  },
];
