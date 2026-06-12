import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { t as translate, type StringKey } from "./i18n/strings";
import type { SiteLocale } from "./locale-types";
import { translateContent } from "./i18n/content-translate";
import { localizeHash, localeFromHash, switchLocaleInHash } from "./routing";

const STORAGE_KEY = "diana-portfolio-locale";

type LocaleContextValue = {
  locale: SiteLocale;
  setLocale: (locale: SiteLocale) => void;
  t: (key: StringKey) => string;
  href: (path: string) => string;
  /** Translate inline EN copy (case pages) */
  tc: (text: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readInitialLocale(): SiteLocale {
  if (typeof window === "undefined") return "en";
  const fromHash = window.location.hash;
  if (fromHash) return localeFromHash(fromHash);
  return localStorage.getItem(STORAGE_KEY) === "ru" ? "ru" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SiteLocale>(readInitialLocale);

  useEffect(() => {
    const onHash = () => {
      const next = localeFromHash(window.location.hash || "#/");
      setLocaleState(next);
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const setLocale = useCallback((next: SiteLocale) => {
    const newHash = switchLocaleInHash(window.location.hash || "#/", next);
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    } else {
      setLocaleState(next);
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
  }, []);

  const t = useCallback((key: StringKey) => translate(locale, key), [locale]);
  const href = useCallback((path: string) => localizeHash(path, locale), [locale]);
  const tc = useCallback((copy: string) => translateContent(locale, copy), [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, href, tc }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

export type { SiteLocale } from "./locale-types";
