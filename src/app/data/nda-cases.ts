import type { SiteLocale } from "../lib/locale-types";
import {
  FIGMA_LINK_LABEL,
  getNdaFigmaHref,
  IVA_CONNECT_BEHANCE,
  type NdaCaseSlug,
} from "../lib/case-figma-links";
import { translateContent } from "../lib/i18n/content-translate";

export type NdaCase = {
  slug?: NdaCaseSlug;
  no: string;
  name: string;
  subtitle: string;
  type: string;
  badge: string;
  context: string;
  demonstrates: string;
  links: { label: string; href: string }[];
};

type NdaCaseBase = Omit<NdaCase, "links"> & { slug?: NdaCaseSlug; linkSlugs?: NdaCaseSlug[]; extraLinks?: { label: string; href: string }[] };

const casesEn: NdaCaseBase[] = [
  { slug: "docuChain", no: "01", name: "DocuChain", subtitle: "Secure e-signature + crypto-backed audit trail", type: "Web app (mobile-responsive)", badge: "0→1 MVP", context: '"Upload → sign → done" simplicity with a verifiable integrity layer anchored to a public blockchain — without forcing users to understand crypto.', demonstrates: '0→1 UX for a trust-heavy workflow, progressive disclosure, and a user-friendly take on "crypto security".' },
  { slug: "starCheck", no: "02", name: "StarCheck", subtitle: "Crypto wallet risk check (AML / KYT)", type: "Responsive web app (desktop / tablet / mobile)", badge: "0→1 MVP", context: "An MVP service that checks crypto addresses for risk before P2P trades and lets users share a clean report.", demonstrates: "Trust UX in crypto / fintech, clarity-first reporting, and a simple, monetizable MVP." },
  { no: "03", name: "IVA Connect", subtitle: "Enterprise video conferencing redesign", type: "Enterprise desktop web app", badge: "Partial public", context: "Security-first, regulated environments with on-premise and closed-network constraints.", demonstrates: "Enterprise UX, constraint-driven design, multi-role workflows, and trust-first interaction design.", extraLinks: [{ label: "Case study on Behance", href: IVA_CONNECT_BEHANCE }, { label: "In production — Russian Ministry of Construction", href: "https://iva.ru/en/istorii-uspexa/russian-ministry-of-construction-switched-to-domestic-video-conferencing-and-pbx/" }] },
  { slug: "procurement", no: "04", name: "Procurement Platform", subtitle: "Landing page for a B2B procurement service", type: "Marketing website", badge: "Conversion UX", context: "A B2B procurement landing — value proposition, trust signals, and clear entry paths for business buyers.", demonstrates: "B2B marketing UX, landing structure, and communicating enterprise value clearly." },
  { slug: "ecommerceAdmin", no: "05", name: "E-commerce Admin", subtitle: "Management service — products section redesign", type: "Desktop web admin", badge: "B2B Admin", context: "Improving structure, navigation, and usability of a complex catalog for operations teams.", demonstrates: "B2B admin UX, information architecture, and systematizing UI for long-term scalability." },
  { slug: "autismApp", no: "06", name: "Autism App", subtitle: "App for children with autism", type: "Android tablet application", badge: "Accessibility", context: "An accessible, structured experience for a sensitive context with careful iterative validation.", demonstrates: "Accessibility and clarity, plus iterative validation in a high-responsibility domain." },
  { slug: "uiComponents", no: "07", name: "UI Components Library", subtitle: "Modernization (Material-inspired)", type: "Design system / UI kit", badge: "Design System", context: "Modernizing a legacy component library for a large product team — 60+ components, audit and standardization.", demonstrates: "Design-systems thinking, consistency, and supporting engineering handoff." },
  { slug: "cryptoExchange", no: "08", name: "Crypto Exchange", subtitle: "Interface prototype", type: "Web + mobile prototype", badge: "Fintech", context: "A high-stakes financial interface needing clear onboarding and transaction flows under trust constraints.", demonstrates: "High-stakes UX, iterative prototyping, and understandable financial interactions." },
  { slug: "appleTv", no: "09", name: "Apple TV App", subtitle: "tvOS app redesign", type: "tvOS app", badge: "Non-standard Platform", context: "Adapting a product to Apple TV — focus states, remote navigation, and 10-foot UI.", demonstrates: "Designing for non-standard platforms, systems thinking, and guideline-driven UX." },
  { slug: "fuelCard", no: "10", name: "Fuel Card", subtitle: "International fuel card company — card ordering flow", type: "Website + mobile web funnel", badge: "Conversion UX", context: "A clean, minimal card-ordering funnel built from scratch for an international B2B fuel card provider.", demonstrates: "Conversion UX, minimalism, and funnel clarity." },
];

const casesRu: Record<string, Partial<NdaCaseBase>> = {
  docuChain: { subtitle: "Безопасная электронная подпись + крипто-аудит", context: "Простота «загрузил → подписал → готово» с проверяемым слоем целостности на блокчейне — без необходимости разбираться в крипте.", demonstrates: "UX 0→1 для доверительного сценария, progressive disclosure и понятная «крипто-безопасность»." },
  starCheck: { subtitle: "Проверка риска криптокошелька (AML / KYT)", context: "MVP-сервис проверки криптоадресов перед P2P-сделками с возможностью поделиться чистым отчётом.", demonstrates: "Trust UX в крипто/fintech, понятная отчётность и монетизируемый MVP." },
  "03": { subtitle: "Редизайн корпоративных видеоконференций", context: "Security-first среды с on-premise и закрытыми сетями.", demonstrates: "Enterprise UX, дизайн под ограничения, мульти-роль и trust-first взаимодействия.", extraLinks: [{ label: "Кейс на Behance", href: IVA_CONNECT_BEHANCE }, { label: "В продакшене — Минстрой России", href: "https://iva.ru/en/istorii-uspexa/russian-ministry-of-construction-switched-to-domestic-video-conferencing-and-pbx/" }] },
  procurement: { subtitle: "Лендинг B2B-сервиса закупок", context: "Лендинг B2B-закупок — ценностное предложение, сигналы доверия и понятные входы для бизнес-покупателей.", demonstrates: "B2B marketing UX, структура лендинга и ясная коммуникация ценности." },
  ecommerceAdmin: { subtitle: "Админка — редизайн раздела товаров", context: "Улучшение структуры, навигации и юзабилити сложного каталога для операционных команд.", demonstrates: "B2B admin UX, информационная архитектура и систематизация UI." },
  autismApp: { subtitle: "Приложение для детей с аутизмом", context: "Доступный структурированный опыт для чувствительного контекста с итеративной валидацией.", demonstrates: "Доступность и ясность, итеративная валидация в ответственной области." },
  uiComponents: { subtitle: "Модернизация (Material-inspired)", context: "Модернизация legacy-библиотеки для большой команды — 60+ компонентов, аудит и стандартизация.", demonstrates: "Мышление дизайн-системами, консистентность и поддержка хэндоффа." },
  cryptoExchange: { subtitle: "Прототип интерфейса", context: "Финансовый интерфейс с высокими ставками — онбординг и транзакционные флоу под ограничениями доверия.", demonstrates: "High-stakes UX, итеративные прототипы и понятные финансовые взаимодействия." },
  appleTv: { subtitle: "Редизайн tvOS-приложения", context: "Адаптация продукта под Apple TV — focus states, навигация пультом и 10-foot UI.", demonstrates: "Дизайн для нестандартных платформ, системное мышление и UX по гайдлайнам." },
  fuelCard: { subtitle: "Международная топливная компания — заказ карт", context: "Минималистичная воронка заказа карт с нуля для международного B2B-провайдера.", demonstrates: "Conversion UX, минимализм и ясность воронки." },
};

function buildCases(locale: SiteLocale): NdaCase[] {
  const figmaLabel = translateContent(locale, FIGMA_LINK_LABEL);
  return casesEn.map((c) => {
    const ru = casesRu[c.slug ?? c.no] ?? {};
    const merged = { ...c, ...ru };
    const links: NdaCase["links"] = [];
    if (merged.slug) {
      links.push({ label: figmaLabel, href: getNdaFigmaHref(merged.slug, locale) });
    }
    if (merged.extraLinks) links.push(...merged.extraLinks.map((l) => ({ ...l, label: translateContent(locale, l.label) })));
    const { extraLinks: _, ...rest } = merged;
    return { ...rest, links } as NdaCase;
  });
}

export function getNdaCases(locale: SiteLocale): NdaCase[] {
  return buildCases(locale);
}

/** @deprecated use getNdaCases(locale) */
export const ndaCases = buildCases("en");
