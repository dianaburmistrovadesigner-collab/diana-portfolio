import type { Project } from "../../components/project-card";
import type { SiteLocale } from "../locale-types";
import { localizeHash } from "../routing";

type ProjectCopy = Pick<Project, "title" | "summary" | "role" | "tags">;

const base = [
  { slug: "amigochat", year: "2024", state: "completed" as const, status: "case" as const },
  { slug: "aimlapi", year: "2025", state: "completed" as const, status: "case" as const },
  { slug: "overchat", year: "2026", state: "completed" as const, status: "case" as const },
  { slug: "strevolut", year: "2026", state: "in-progress" as const, status: "case" as const },
];

const copy: Record<SiteLocale, Record<string, ProjectCopy>> = {
  en: {
    aimlapi: {
      title: "AIMLAPI · Turning a developer-only AI platform into a product for everyone",
      summary:
        "End-to-end redesign of a gateway to 300+ AI/ML models — research, IA, key flows and a phased MVP roadmap.",
      role: "Lead Product Designer",
      tags: ["AI / ML", "SaaS", "Dashboard", "IA", "MVP"],
    },
    strevolut: {
      title: "Strevolut · A design system to unify portfolio work",
      summary:
        "Semantic tokens, shadcn-aligned components, 75 doc frames — personal system in active development.",
      role: "Product Designer · Design systems",
      tags: ["Design system", "Tokens", "shadcn", "Figma Variables"],
    },
    amigochat: {
      title: "AmigoChat · Re-thinking a multi-model AI assistant",
      summary:
        "Chat UI, model picker and onboarding overhaul for a consumer AI product growing past one million users.",
      role: "Product Designer",
      tags: ["AI chat", "Consumer", "Onboarding"],
    },
    overchat: {
      title: "Overchat · Usability audit of an all-in-one AI app",
      summary:
        "Hotjar replays + hands-on QA → 10 micro-flow wireframes → a unified 26-screen hi-fi concept prioritising the highest-value, lowest-effort fixes for v1.",
      role: "Product Designer · Audit & concept",
      tags: ["AI app", "Usability audit", "Hotjar sessions", "Hi-fi concept"],
    },
  },
  ru: {
    aimlapi: {
      title: "AIMLAPI · Платформа для разработчиков — и для всех остальных",
      summary:
        "Редизайн шлюза к 300+ AI/ML-моделям: исследование, IA, ключевые сценарии и поэтапный план MVP.",
      role: "Lead Product Designer",
      tags: ["AI / ML", "SaaS", "Дашборд", "IA", "MVP"],
    },
    strevolut: {
      title: "Strevolut · Дизайн-система для портфолио и продуктов",
      summary:
        "Семантические токены, компоненты под shadcn, 75 док-фреймов — личный проект, в активной разработке.",
      role: "Product Designer · Design systems",
      tags: ["Дизайн-система", "Токены", "shadcn", "Figma Variables"],
    },
    amigochat: {
      title: "AmigoChat · AI-ассистент с несколькими моделями",
      summary:
        "Чат, выбор модели и онбординг для consumer AI-продукта с аудиторией больше миллиона пользователей.",
      role: "Product Designer",
      tags: ["AI-чат", "Consumer", "Онбординг"],
    },
    overchat: {
      title: "Overchat · Юзабилити-аудит all-in-one AI-приложения",
      summary:
        "Hotjar + ручной QA → 10 микрофлоу → единая hi-fi-концепция на 26 экранов с фокусом на быстрые и ценные правки для v1.",
      role: "Product Designer · Аудит и концепция",
      tags: ["AI app", "Юзабилити-аудит", "Hotjar", "Hi-fi концепция"],
    },
  },
};

export function getProjects(locale: SiteLocale): Project[] {
  return base.map((item) => ({
    ...item,
    ...copy[locale][item.slug],
    href: localizeHash(`#/case/${item.slug}`, locale),
  }));
}
