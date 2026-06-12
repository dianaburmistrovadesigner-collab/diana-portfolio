import type { SiteLocale } from "./locale-types";

export type SiteRoute =
  | "home"
  | "work"
  | "about"
  | "updates"
  | "case-aimlapi"
  | "case-amigochat"
  | "case-overchat"
  | "case-strevolut"
  | "case-template";

const ROUTE_PATH: Record<SiteRoute, string> = {
  home: "",
  work: "work",
  about: "about",
  updates: "updates",
  "case-aimlapi": "case/aimlapi",
  "case-amigochat": "case/amigochat",
  "case-overchat": "case/overchat",
  "case-strevolut": "case/strevolut",
  "case-template": "case/template",
};

const PATH_ROUTE: Record<string, SiteRoute> = Object.fromEntries(
  Object.entries(ROUTE_PATH).map(([route, path]) => [path, route as SiteRoute]),
) as Record<string, SiteRoute>;

export function localeFromHash(hash: string): SiteLocale {
  const inner = hash.replace(/^#\/?/, "").toLowerCase();
  if (inner === "ru" || inner.startsWith("ru/")) return "ru";
  return "en";
}

function stripLocalePrefix(inner: string): string {
  if (inner === "ru") return "";
  if (inner.startsWith("ru/")) return inner.slice(3);
  return inner;
}

export function parseHash(hash: string): { locale: SiteLocale; route: SiteRoute } {
  const locale = localeFromHash(hash);
  const path = stripLocalePrefix(hash.replace(/^#\/?/, "").toLowerCase());
  return { locale, route: PATH_ROUTE[path] ?? "home" };
}

export function buildHash(locale: SiteLocale, route: SiteRoute): string {
  const path = ROUTE_PATH[route];
  if (locale === "ru") {
    return path ? `#/ru/${path}` : "#/ru";
  }
  return path ? `#/${path}` : "#/";
}

/** Keep in-page anchors; localize hash routes like #/work → #/ru/work */
export function localizeHash(href: string, locale: SiteLocale): string {
  if (!href.startsWith("#/")) return href;

  const inner = href.slice(2).replace(/^\//, "");
  const withoutLocale = stripLocalePrefix(inner.toLowerCase());

  if (locale === "ru") {
    return withoutLocale ? `#/ru/${withoutLocale}` : "#/ru";
  }
  return withoutLocale ? `#/${withoutLocale}` : "#/";
}

export function switchLocaleInHash(hash: string, locale: SiteLocale): string {
  const { route } = parseHash(hash || "#/");
  return buildHash(locale, route);
}
