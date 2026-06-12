import type { SiteLocale } from "./locale-types";

/** Contact, social links, and shared external URLs */

export const siteConfig = {
  name: "Diana Burmistrova",
  role: "Product Designer",
  email: "diana.burmistrova.designer@gmail.com",
  cvPath: "/Diana_Burmistrova_Resume.pdf",
  telegram: "https://t.me/artpyatnica",
  linkedin: "https://www.linkedin.com/in/diana-burmistrova-41710a90/",
  contra: "https://contra.com/diana_k4gv16h8/about",
  layers: "https://layers.to/dianaburm",
  mediumRu:
    "https://medium.com/%D0%B1%D1%8B%D1%82%D1%8Cuxui%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%BE%D0%BC",
  mediumEn: "https://medium.com/beingauxuidesigner",
  /** Tally form id — from tally.so/r/xxxxxxxx (preferred for newsletter) */
  tallyFormId: (import.meta.env.VITE_TALLY_FORM_ID as string | undefined) ?? "",
  /** Formspree fallback — https://formspree.io/f/xxxxxxxx */
  newsletterFormAction: (import.meta.env.VITE_NEWSLETTER_FORM_ACTION as string | undefined) ?? "",
  figmaPortfolio:
    "https://www.figma.com/design/CraaAOcKl1hV3Y2SO0E58o/%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-%D1%80%D0%B0%D0%B1%D0%BE%D1%82--%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE--2024",
  figma: {
    strevolutKit:
      "https://www.figma.com/design/ug2aSqTpoWIlHrnoYnjoJM/2026---Strevolut-UI-KIT?node-id=108-2&m=dev&t=VA3QBaBs4qhcmfxU-1",
    strevolutDocs:
      "https://www.figma.com/design/ug2aSqTpoWIlHrnoYnjoJM/2026---Strevolut-UI-KIT?node-id=108-2&m=dev&t=VA3QBaBs4qhcmfxU-1",
    overchatConcept:
      "https://www.figma.com/design/CyhMpmspezxmFPhIXh3KO2/2026---Overchat--Hotjar-?node-id=258-21572&t=8WDlyvRLz3tcrNJ0-1",
    overchatResearch:
      "https://www.figma.com/design/CyhMpmspezxmFPhIXh3KO2/2026---Overchat--Hotjar-?node-id=290-54485&t=8WDlyvRLz3tcrNJ0-1",
    amigoScenario:
      "https://www.figma.com/design/jyc6z4U1y9HDSsaU8cran2/2026---Amigo-Chat-Key-scenario---Portfolio-case-2026?node-id=20-155948&m=dev&t=ne3lUnvHO1FNzXKl-1",
    amigoWhiteboard:
      "https://www.figma.com/board/7qXlSOs34tFGDqsvhEKweg/2026---AmigoChat-Whiteboard",
    aimlKeyScenario:
      "https://www.figma.com/design/tRKSVwq6jm8BnqFxggy3US/2026---AI-ML-API?node-id=6-9569&t=a7ajYHIEcCIHJCul-1",
  },
} as const;

export const mailto = `mailto:${siteConfig.email}`;

export function getMediumHref(locale: SiteLocale) {
  return locale === "ru" ? siteConfig.mediumRu : siteConfig.mediumEn;
}

export type ContactChannel = {
  label: string;
  href: string;
  external: boolean;
};

/** Footer social row — Medium follows active site locale. */
export function getFooterSocials(locale: SiteLocale) {
  return [
    { label: "Contra", href: siteConfig.contra },
    { label: "Medium", href: getMediumHref(locale) },
    { label: "Layers", href: siteConfig.layers },
  ] as const;
}

/** Canonical contact & social links — keep in sync across Home, About, footer. */
export function getContactChannels(locale: SiteLocale): ContactChannel[] {
  return [
    { label: "Email", href: mailto, external: false },
    { label: "LinkedIn", href: siteConfig.linkedin, external: true },
    { label: "Contra", href: siteConfig.contra, external: true },
    { label: "Layers", href: siteConfig.layers, external: true },
    { label: "Medium", href: getMediumHref(locale), external: true },
    { label: "Telegram", href: siteConfig.telegram, external: true },
  ];
}
