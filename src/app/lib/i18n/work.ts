import type { SiteLocale } from "../locale-types";

export type WorkContent = {
  badge: string;
  title: string;
  intro: string;
  workedOnLabel: string;
  workedOnHeading: string;
  industriesLabel: string;
  interfacesLabel: string;
  industries: string[];
  interfaces: string[];
  servicesLabel: string;
  servicesHeading: string;
  services: string[];
  skillsLink: string;
  featuredLabel: string;
  featuredHeading: string;
  libraryLabel: string;
  libraryHeading: string;
  libraryIntro: string;
  libraryNote: string;
  libraryCta: string;
};

const content: Record<SiteLocale, WorkContent> = {
  en: {
    badge: "Confidential work · Selected projects",
    title: "Case studies and selected work.",
    intro:
      "Most of my commercial work is under NDA. This page pairs a few in-depth case studies with anonymized summaries I can walk through in interviews and client conversations.",
    workedOnLabel: "What I've worked on",
    workedOnHeading: "Industries & interface types",
    industriesLabel: "Industries",
    interfacesLabel: "Interfaces",
    industries: [
      "B2B SaaS",
      "AI / ML & developer platforms",
      "Fintech & crypto",
      "Enterprise systems",
      "E-commerce",
      "EdTech & accessibility",
    ],
    interfaces: [
      "Web & B2B admin panels",
      "Dashboards & data-heavy UI",
      "0→1 MVPs",
      "Design systems & UI kits",
      "Mobile, tablet & tvOS",
    ],
    servicesLabel: "What clients usually ask for",
    servicesHeading: "Services I'm most often booked for",
    services: [
      "0→1 MVP design — research → UI",
      "Usability audits & UX improvement",
      "Design system audit & creation",
    ],
    skillsLink: "See full Skills & Expertise →",
    featuredLabel: "Featured case studies",
    featuredHeading: "Selected projects",
    libraryLabel: "Case library",
    libraryHeading: "Other projects",
    libraryIntro:
      "Most of the projects I've worked on are under NDA, so there are no previews here. For the projects below you can read a short overview of the project and my role via the linked screens and case studies.",
    libraryNote:
      "Some work can't be shared publicly. Drop a note if you'd like to walk through the parts of the portfolio that aren't online yet.",
    libraryCta: "Request private case studies",
  },
  ru: {
    badge: "Конфиденциальные проекты · Избранное",
    title: "Кейсы и выбранные проекты.",
    intro:
      "Большая часть коммерческой работы под NDA. Здесь — несколько развёрнутых кейсов и анонимизированные резюме, которые могу показать на интервью и в разговоре с клиентом.",
    workedOnLabel: "С чем работала",
    workedOnHeading: "Отрасли и типы интерфейсов",
    industriesLabel: "Отрасли",
    interfacesLabel: "Интерфейсы",
    industries: [
      "B2B SaaS",
      "AI / ML и developer-платформы",
      "Fintech и крипто",
      "Enterprise-системы",
      "E-commerce",
      "EdTech и доступность",
    ],
    interfaces: [
      "Веб и B2B-админки",
      "Дашборды и data-heavy UI",
      "0→1 MVP",
      "Дизайн-системы и UI kits",
      "Мобайл, планшет и tvOS",
    ],
    servicesLabel: "Что чаще всего заказывают",
    servicesHeading: "Услуги, на которые меня чаще приглашают",
    services: [
      "Дизайн MVP с нуля — от ресёрча до UI",
      "UX-аудит и улучшение продукта",
      "Аудит и создание дизайн-системы",
    ],
    skillsLink: "Все навыки и компетенции →",
    featuredLabel: "Избранные кейсы",
    featuredHeading: "Выбранные проекты",
    libraryLabel: "Библиотека кейсов",
    libraryHeading: "Другие проекты",
    libraryIntro:
      "Большинство проектов под NDA — превью здесь нет. По ссылкам ниже можно посмотреть краткое описание задачи и моей роли в Figma или на Behance.",
    libraryNote:
      "Часть работы нельзя показать публично. Напишите, если хотите пройтись по материалам, которых нет на сайте.",
    libraryCta: "Запросить закрытые кейсы",
  },
};

export function getWorkContent(locale: SiteLocale) {
  return content[locale];
}
