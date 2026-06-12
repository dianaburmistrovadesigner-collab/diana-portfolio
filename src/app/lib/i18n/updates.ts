import type { SiteLocale } from "../locale-types";

export type UpdateKind = "plugin" | "article" | "video" | "case" | "site" | "other";

export type UpdateEntry = {
  id: string;
  date: string;
  kind: UpdateKind;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export type UpdatesContent = {
  badge: string;
  title: string;
  intro: string;
  timelineLabel: string;
  subscribeLabel: string;
  subscribeHeading: string;
  subscribeBody: string;
  subscribePlaceholder: string;
  subscribeButton: string;
  subscribeSuccess: string;
  subscribeError: string;
  subscribePending: string;
  kindLabels: Record<UpdateKind, string>;
  entries: UpdateEntry[];
};

const kindLabels: Record<SiteLocale, Record<UpdateKind, string>> = {
  en: {
    plugin: "Plugin",
    article: "Article",
    video: "Video",
    case: "Case study",
    site: "Site",
    other: "Update",
  },
  ru: {
    plugin: "Плагин",
    article: "Статья",
    video: "Видео",
    case: "Кейс",
    site: "Сайт",
    other: "Обновление",
  },
};

const entries: Record<SiteLocale, UpdateEntry[]> = {
  en: [
    {
      id: "portfolio-v1",
      date: "2026-06-11",
      kind: "site",
      title: "Portfolio site v1 — published",
      description:
        "Congrats — sort of. Seriously though: this page is a short log of what ships next — case studies, articles, plugins, videos, and other useful things.",
    },
  ],
  ru: [
    {
      id: "portfolio-v1",
      date: "2026-06-11",
      kind: "site",
      title: "Опубликована первая версия сайта-портфолио",
      description:
        "Ну, поздравляю. А если серьёзно — здесь будет короткий перечень последних событий: кейсы, статьи, плагины, видео и прочие полезности.",
    },
  ],
};

const pageCopy: Record<
  SiteLocale,
  Omit<UpdatesContent, "entries" | "kindLabels">
> = {
  en: {
    badge: "Updates · Diana Burmistrova",
    title: "What I've shipped lately.",
    intro:
      "A running log of publications and releases — so you don't have to hunt across platforms.",
    timelineLabel: "Timeline",
    subscribeLabel: "Stay in the loop",
    subscribeHeading: "Get new updates by email",
    subscribeBody:
      "Occasional notes when something new goes live — no spam, unsubscribe anytime.",
    subscribePlaceholder: "you@company.com",
    subscribeButton: "Subscribe",
    subscribeSuccess: "Thanks — you're on the list.",
    subscribeError: "Something went wrong. Try again or reach out on LinkedIn.",
    subscribePending:
      "Newsletter form is being wired up. For now, follow Medium or LinkedIn — links are in the footer.",
  },
  ru: {
    badge: "Обновления · Диана Бурмистрова",
    title: "Что вышло недавно.",
    intro:
      "Хроника публикаций и релизов — чтобы не искать по разным площадкам.",
    timelineLabel: "Хронология",
    subscribeLabel: "Следить за новым",
    subscribeHeading: "Получать обновления на почту",
    subscribeBody:
      "Письмо, когда что-то новое выходит — без спама, отписка в любой момент.",
    subscribePlaceholder: "you@company.com",
    subscribeButton: "Подписаться",
    subscribeSuccess: "Спасибо — вы в списке.",
    subscribeError: "Не получилось. Попробуйте ещё раз или напишите в LinkedIn.",
    subscribePending:
      "Форма подписки скоро подключится через Tally. Пока удобнее следить через Medium или LinkedIn — ссылки в футере.",
  },
};

export function getUpdatesContent(locale: SiteLocale): UpdatesContent {
  return {
    ...pageCopy[locale],
    kindLabels: kindLabels[locale],
    entries: entries[locale],
  };
}

export function formatUpdateDate(date: string, locale: SiteLocale): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
