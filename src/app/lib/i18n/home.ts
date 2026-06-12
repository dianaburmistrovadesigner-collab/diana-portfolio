import type { SiteLocale } from "../locale-types";

export type HomeContent = {
  status: string;
  intro: string;
  ctaCases: string;
  ctaContact: string;
  proof: { k: string; v: string }[];
  domainsLabel: string;
  domains: string[];
  selectedLabel: string;
  selectedHeading: string;
  allProjects: string;
  ndaLabel: string;
  ndaHeading: string;
  ndaBody: string;
  ndaCta: string;
  learningLabel: string;
  learningHeading: string;
  fullEducation: string;
  learning: { when: string; title: string; note: string; href?: string; linkLabel?: string }[];
  contactHeading: string;
  contactBody: string;
  contactLinkedIn: string;
  contactContra: string;
  downloadCv: string;
  courseDetails: string;
};

const content: Record<SiteLocale, HomeContent> = {
  en: {
    status: "Available for work · Full-time · Freelance · Remote",
    intro:
      "Product Designer with 9+ years of experience. I design complex products and turn them into simple, intuitive experiences. I focus on UX, structure, user flows, and design systems for SaaS and AI tools. Calm, research-driven, and detail-oriented.",
    ctaCases: "View case studies",
    ctaContact: "LinkedIn",
    proof: [
      { k: "9+", v: "years in UX/UI design" },
      { k: "20+", v: "products shipped" },
      { k: "B2B", v: "enterprise & SaaS focus" },
      { k: "E2E", v: "research to hand-off" },
    ],
    domainsLabel: "Domains",
    domains: ["B2B SaaS", "AI / ML", "Enterprise", "Fintech", "Crypto", "E-commerce", "Healthcare", "EdTech"],
    selectedLabel: "Selected work",
    selectedHeading: "Featured case studies",
    allProjects: "All projects →",
    ndaLabel: "Confidential work",
    ndaHeading: "Most of my work is under NDA",
    ndaBody:
      "Most of my professional work is protected by NDA. I've designed enterprise video conferencing platforms, fintech admin panels, crypto exchanges, educational apps, and more — available as anonymized summaries.",
    ndaCta: "See all cases →",
    learningLabel: "Continuous learning",
    learningHeading: "Always sharpening the craft",
    fullEducation: "Full education →",
    learning: [
      {
        when: "2026 · In progress",
        title: "Design Tokens Mastery — Romina Kavčič",
        note: "Structuring, managing and scaling design tokens — Figma Variables, Tokens Studio, multi-brand themes and code sync.",
        href: "https://thedesignsystem.guide/design-tokens-course",
        linkLabel: "Course details →",
      },
      {
        when: "2025 — 2026 · In progress",
        title: "Product Design — DesignerUp",
        note: "Comprehensive product-design program: research methods, information architecture, interaction design and design strategy.",
      },
      {
        when: "2022 · Completed",
        title: "UX/UI Designer Profession — Uprock",
        note: "Professional UX/UI certification covering user research, wireframing, prototyping and design systems.",
      },
      {
        when: "2019 · Completed",
        title: "Grids & Website Design — Bang Bang Education",
        note: "Layout systems, grid-based composition and a structured approach to website design.",
      },
    ],
    contactHeading: "Let's work together",
    contactBody:
      "I'm available for full-time positions and freelance projects. Tell me about your challenge — let's discuss how I can help with your product design.",
    contactLinkedIn: "LinkedIn",
    contactContra: "Contra",
    downloadCv: "Download CV (PDF)",
    courseDetails: "Course details →",
  },
  ru: {
    status: "Открыта к предложениям · Full-time · Фриланс · Удалённо",
    intro:
      "Продуктовый дизайнер с 9+ годами опыта. Проектирую сложные продукты и превращаю их в простые, понятные решения. Фокус — UX, структура, сценарии и дизайн-системы для SaaS и AI. Спокойный, исследовательский подход и внимание к деталям.",
    ctaCases: "Смотреть кейсы",
    ctaContact: "LinkedIn",
    proof: [
      { k: "9+", v: "лет в UX/UI-дизайне" },
      { k: "20+", v: "продуктов запущено" },
      { k: "B2B", v: "enterprise и SaaS" },
      { k: "E2E", v: "от ресёрча до хэндоффа" },
    ],
    domainsLabel: "Домены",
    domains: ["B2B SaaS", "AI / ML", "Enterprise", "Fintech", "Крипто", "E-commerce", "Healthcare", "EdTech"],
    selectedLabel: "Избранное",
    selectedHeading: "Кейсы",
    allProjects: "Все проекты →",
    ndaLabel: "Конфиденциальные проекты",
    ndaHeading: "Большая часть работы под NDA",
    ndaBody:
      "Большая часть коммерческих проектов защищена NDA. Среди них — корпоративные видеоконференции, финтех-панели, криптобиржи, образовательные приложения и другие продукты. На странице кейсов — анонимизированные резюме.",
    ndaCta: "Все кейсы →",
    learningLabel: "Непрерывное обучение",
    learningHeading: "Постоянно прокачиваю скиллы",
    fullEducation: "Образование и курсы →",
    learning: [
      {
        when: "2026 · в процессе",
        title: "Design Tokens Mastery — Romina Kavčič",
        note: "Структура, управление и масштабирование design tokens — Figma Variables, Tokens Studio, мультибрендовые темы и синхронизация с кодом.",
        href: "https://thedesignsystem.guide/design-tokens-course",
        linkLabel: "Смотреть курс →",
      },
      {
        when: "2025 — 2026 · в процессе",
        title: "Product Design — DesignerUp",
        note: "Программа по продуктовому дизайну: исследования, информационная архитектура, interaction design и дизайн-стратегия.",
      },
      {
        when: "2022 · завершён",
        title: "Профессия UX/UI-дизайнер — Uprock",
        note: "Сертификация по UX/UI: исследования, вайрфреймы, прототипирование и дизайн-системы.",
      },
      {
        when: "2019 · завершён",
        title: "Сетки и проектирование сайтов — Bang Bang Education",
        note: "Сетки, композиция макета и структурированный подход к веб-дизайну.",
      },
    ],
    contactHeading: "Давайте работать вместе",
    contactBody:
      "Открыта к full-time и фриланс-проектам. Расскажите о задаче — обсудим, чем могу помочь с продуктовым дизайном.",
    contactLinkedIn: "LinkedIn",
    contactContra: "Contra",
    downloadCv: "Скачать CV (PDF)",
    courseDetails: "Смотреть курс →",
  },
};

export function getHomeContent(locale: SiteLocale) {
  return content[locale];
}
