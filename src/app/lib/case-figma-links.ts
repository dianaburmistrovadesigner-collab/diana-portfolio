/**
 * Figma / FigJam links for case study pages.
 * Keep in sync with docs/SITE_FIGMA_LINKS.md
 */

import type { SiteLocale } from "./locale-types";
import { translateContent } from "./i18n/content-translate";

export const FIGMA_LINK_LABEL = "View in Figma";
export const FIGMA_WIREFRAMES_LABEL = "Wireframes in Figma";

export function getFigmaLinkLabel(locale: SiteLocale) {
  return translateContent(locale, FIGMA_LINK_LABEL);
}

export function getFigmaWireframesLabel(locale: SiteLocale) {
  return translateContent(locale, FIGMA_WIREFRAMES_LABEL);
}

const AMIGO_WB =
  "https://www.figma.com/board/7qXlSOs34tFGDqsvhEKweg/2026---AmigoChat-Whiteboard";

export const amigoFigmaLinks = {
  keyScenario:
    "https://www.figma.com/design/jyc6z4U1y9HDSsaU8cran2/2026---Amigo-Chat-Key-scenario---Portfolio-case-2026?node-id=20-155948&m=dev&t=ne3lUnvHO1FNzXKl-1",
  whiteboard: AMIGO_WB,
  survey: `${AMIGO_WB}?node-id=6011-779&t=GGTstHFYoC0JWUBm-1`,
  interviews: `${AMIGO_WB}?node-id=4015-5380&t=GGTstHFYoC0JWUBm-1`,
  empathyMap: `${AMIGO_WB}?node-id=4028-4582&t=GGTstHFYoC0JWUBm-1`,
  persona: `${AMIGO_WB}?node-id=4028-3430&t=GGTstHFYoC0JWUBm-1`,
  journeyMap: `${AMIGO_WB}?node-id=4032-3686&t=GGTstHFYoC0JWUBm-1`,
  problemStatement: `${AMIGO_WB}?node-id=4036-4246&t=GGTstHFYoC0JWUBm-1`,
  userScenario: `${AMIGO_WB}?node-id=4050-1756&t=GGTstHFYoC0JWUBm-1`,
  projectGoals: `${AMIGO_WB}?node-id=4106-871&t=GGTstHFYoC0JWUBm-1`,
  leanCanvas: `${AMIGO_WB}?node-id=4114-2165&t=GGTstHFYoC0JWUBm-1`,
  prioritization: `${AMIGO_WB}?node-id=4067-3174&t=GGTstHFYoC0JWUBm-1`,
  ia: `${AMIGO_WB}?node-id=4117-3478&t=GGTstHFYoC0JWUBm-1`,
  sitemap: `${AMIGO_WB}?node-id=4118-3480&t=GGTstHFYoC0JWUBm-1`,
} as const;

const AIML_FILE =
  "https://www.figma.com/design/tRKSVwq6jm8BnqFxggy3US/2026---AI-ML-API";

export const aimlFigmaLinks = {
  /** Full key scenario — all hi-fi screens */
  keyScenario: `${AIML_FILE}?node-id=6-9569&t=a7ajYHIEcCIHJCul-1`,
} as const;

const OVERCHAT_FILE =
  "https://www.figma.com/design/CyhMpmspezxmFPhIXh3KO2/2026---Overchat--Hotjar-";

/** Secondary CTA when the link opens micro-flow wireframes (not hi-fi concept). */

export const overchatFigmaLinks = {
  /** 26-screen concept + 6 before/after pairs */
  concept26: `${OVERCHAT_FILE}?node-id=258-21572&t=8WDlyvRLz3tcrNJ0-1`,
  /** 10 micro-flow wireframes (Before stickers + After) */
  wireframes: `${OVERCHAT_FILE}?node-id=290-54485&t=8WDlyvRLz3tcrNJ0-1`,
} as const;

import type { SiteLocale } from "./locale-types";

export type { SiteLocale };

export type NdaCaseSlug =
  | "fuelCard"
  | "appleTv"
  | "cryptoExchange"
  | "uiComponents"
  | "autismApp"
  | "ecommerceAdmin"
  | "procurement"
  | "starCheck"
  | "docuChain";

/** NDA / “Other projects” case library — RU and EN Figma files share node IDs. */
export const ndaFigmaLinks = {
  ru: {
    fuelCard:
      "https://www.figma.com/design/fso6Y2XB3d6CmfmPXcOAcH/2026---Portfolio-examples?node-id=1-60&m=dev&t=kPPGwhUdeL7G4QRM-1",
    appleTv:
      "https://www.figma.com/design/fso6Y2XB3d6CmfmPXcOAcH/2026---Portfolio-examples?node-id=1-25&t=kPPGwhUdeL7G4QRM-1",
    cryptoExchange:
      "https://www.figma.com/design/fso6Y2XB3d6CmfmPXcOAcH/2026---Portfolio-examples?node-id=1-129&m=dev&t=kPPGwhUdeL7G4QRM-1",
    uiComponents:
      "https://www.figma.com/design/fso6Y2XB3d6CmfmPXcOAcH/2026---Portfolio-examples?node-id=1-94&m=dev&t=kPPGwhUdeL7G4QRM-1",
    autismApp:
      "https://www.figma.com/design/fso6Y2XB3d6CmfmPXcOAcH/2026---Portfolio-examples?node-id=1-161&m=dev&t=kPPGwhUdeL7G4QRM-1",
    ecommerceAdmin:
      "https://www.figma.com/design/fso6Y2XB3d6CmfmPXcOAcH/2026---Portfolio-examples?node-id=1-192&m=dev&t=kPPGwhUdeL7G4QRM-1",
    procurement:
      "https://www.figma.com/design/fso6Y2XB3d6CmfmPXcOAcH/2026---Portfolio-examples?node-id=1-222&m=dev&t=kPPGwhUdeL7G4QRM-1",
    starCheck:
      "https://www.figma.com/design/fso6Y2XB3d6CmfmPXcOAcH/2026---Portfolio-examples?node-id=2020-49605&t=kPPGwhUdeL7G4QRM-1",
    docuChain:
      "https://www.figma.com/design/fso6Y2XB3d6CmfmPXcOAcH/2026---Portfolio-examples?node-id=2020-49606&m=dev&t=kPPGwhUdeL7G4QRM-1",
  },
  en: {
    fuelCard:
      "https://www.figma.com/design/WSR9UVt2W15TLpM8zweYa3/2026---EN---Portfolio-examples?node-id=1-60&m=dev&t=VcGDiFe791hQnH4R-1",
    appleTv:
      "https://www.figma.com/design/WSR9UVt2W15TLpM8zweYa3/2026---EN---Portfolio-examples?node-id=1-25&m=dev&t=VcGDiFe791hQnH4R-1",
    cryptoExchange:
      "https://www.figma.com/design/WSR9UVt2W15TLpM8zweYa3/2026---EN---Portfolio-examples?node-id=1-129&t=VcGDiFe791hQnH4R-1",
    uiComponents:
      "https://www.figma.com/design/WSR9UVt2W15TLpM8zweYa3/2026---EN---Portfolio-examples?node-id=1-94&m=dev&t=VcGDiFe791hQnH4R-1",
    autismApp:
      "https://www.figma.com/design/WSR9UVt2W15TLpM8zweYa3/2026---EN---Portfolio-examples?node-id=1-161&m=dev&t=VcGDiFe791hQnH4R-1",
    ecommerceAdmin:
      "https://www.figma.com/design/WSR9UVt2W15TLpM8zweYa3/2026---EN---Portfolio-examples?node-id=1-192&t=VcGDiFe791hQnH4R-1",
    procurement:
      "https://www.figma.com/design/WSR9UVt2W15TLpM8zweYa3/2026---EN---Portfolio-examples?node-id=1-222&t=VcGDiFe791hQnH4R-1",
    starCheck:
      "https://www.figma.com/design/WSR9UVt2W15TLpM8zweYa3/2026---EN---Portfolio-examples?node-id=2020-49605&t=VcGDiFe791hQnH4R-1",
    docuChain:
      "https://www.figma.com/design/WSR9UVt2W15TLpM8zweYa3/2026---EN---Portfolio-examples?node-id=2020-49606&t=VcGDiFe791hQnH4R-1",
  },
} as const satisfies Record<SiteLocale, Record<NdaCaseSlug, string>>;

export const IVA_CONNECT_BEHANCE =
  "https://www.behance.net/gallery/98120947/IVA-Connect";

export function getNdaFigmaHref(slug: NdaCaseSlug, locale: SiteLocale = "en") {
  return ndaFigmaLinks[locale][slug];
}

const STREVOLUT_FILE =
  "https://www.figma.com/design/ug2aSqTpoWIlHrnoYnjoJM/2026---Strevolut-UI-KIT";

export const strevolutFigmaLinks = {
  /** UI kit hub · 75 documentation frames */
  uiKit: `${STREVOLUT_FILE}?node-id=108-2&m=dev&t=VA3QBaBs4qhcmfxU-1`,
} as const;
