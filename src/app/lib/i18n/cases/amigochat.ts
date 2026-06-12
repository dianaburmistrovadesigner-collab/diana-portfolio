import type { SiteLocale } from "../../locale-types";

/** Shell strings for AmigoChat case — extend as Manus migrates body copy from case-amigochat-page.tsx */
export type AmigochatCaseContent = {
  metaEyebrow: string;
  heroAlt: string;
  // TODO: add sections — problem, research, personas, process, outcomes, etc.
};

const content: Record<SiteLocale, AmigochatCaseContent> = {
  en: {
    metaEyebrow: "UX case study · AmigoChat",
    heroAlt: "AmigoChat AI Store — main screen",
  },
  ru: {
    metaEyebrow: "UX-кейс · AmigoChat",
    heroAlt: "AmigoChat AI Store — главный экран",
  },
};

export function getAmigochatCaseContent(locale: SiteLocale) {
  return content[locale];
}
