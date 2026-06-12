import type { SiteLocale } from "../locale-types";
import ruMap from "./translations-ru.json";
import { supplementalRu } from "./supplemental-ru";

const ruByEn: Record<string, string> = { ...ruMap, ...supplementalRu };

export function normalizeTranslationKey(key: string): string {
  return key.replace(/\s+/g, " ").trim();
}

/** Translate inline EN copy — EN string is the lookup key. */
export function translateContent(locale: SiteLocale, text: string): string {
  if (!text || locale === "en") return text;
  const normalized = normalizeTranslationKey(text);
  return (
    ruByEn[text] ??
    ruByEn[normalized] ??
    supplementalRu[text] ??
    supplementalRu[normalized] ??
    text
  );
}

export const LOCALIZED_TEXT_PROPS = [
  "title",
  "alt",
  "placeholder",
  "aria-label",
  "label",
  "caption",
  "eyebrow",
] as const;
