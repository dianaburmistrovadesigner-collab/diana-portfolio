import type { SiteLocale } from "../locale-types";

const en = {
  "nav.home": "Home",
  "nav.cases": "Cases",
  "nav.about": "About",
  "nav.updates": "Updates",
  "nav.cv": "CV",
  "nav.contact": "Get in touch",
  "role": "Product Designer",

  "project.inProgress": "In progress",
  "project.completed": "Completed",
  "project.case": "Case →",

  "footer.open": "Open to new work · 2026",
  "footer.heading": "Hiring for a product like this?",
  "footer.body":
    "I work on AI, SaaS and dev-platform products — taking complex, technical surfaces and turning them into things teams can actually use.",
  "footer.copy": "© 2026 · Diana Burmistrova · Product Designer",
} as const;

const ru = {
  "nav.home": "Главная",
  "nav.cases": "Кейсы",
  "nav.about": "Обо мне",
  "nav.updates": "Обновления",
  "nav.cv": "CV",
  "nav.contact": "Написать мне",
  "role": "Продуктовый дизайнер",

  "project.inProgress": "В работе",
  "project.completed": "Завершён",
  "project.case": "Кейс →",

  "footer.open": "Открыта к предложениям · 2026",
  "footer.heading": "Ищете дизайнера для похожего продукта?",
  "footer.body":
    "Работаю с AI-, SaaS- и dev-платформами: беру сложные технические интерфейсы и делаю из них то, чем команды реально пользуются.",
  "footer.copy": "© 2026 · Диана Бурмистрова · Продуктовый дизайнер",
} as const;

export type StringKey = keyof typeof en;

const strings: Record<SiteLocale, Record<StringKey, string>> = { en, ru };

export function t(locale: SiteLocale, key: StringKey): string {
  return strings[locale][key] ?? strings.en[key];
}
