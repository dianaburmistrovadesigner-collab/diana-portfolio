import { useLocale } from "../lib/locale";
import { siteConfig } from "../lib/site-config";
import { LanguageSwitcher } from "./language-switcher";

type Route = "home" | "work" | "services" | "about" | "updates" | "case-aimlapi";

export function TopNav({ active }: { active: Route }) {
  const { t, href } = useLocale();

  const links: { label: string; route: Route; href: string }[] = [
    { label: t("nav.home"), route: "home", href: href("#/") },
    { label: t("nav.cases"), route: "work", href: href("#/work") },
    { label: t("nav.services"), route: "services", href: href("#/services") },
    { label: t("nav.about"), route: "about", href: href("#/about") },
    { label: t("nav.updates"), route: "updates", href: href("#/updates") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#E8E8E3] bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-6 py-3.5">
        <a href={href("#/")} className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0a0a0a] text-white">
            <span className="font-mono text-[11px]">DB</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] text-[#050505]">{t("name")}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
              {t("role")}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.route;
            return (
              <a
                key={l.route}
                href={l.href}
                className={
                  "rounded-full px-4 py-2 text-[13px] transition-colors " +
                  (isActive
                    ? "bg-[#FAFAF8] text-[#050505]"
                    : "text-[#3a3a36] hover:bg-[#FAFAF8]")
                }
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={siteConfig.cvPath}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[#E8E8E3] bg-white px-4 py-2 text-[12px] text-[#3a3a36] hover:bg-[#FAFAF8] md:inline-flex"
          >
            {t("nav.cv")}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#0a0a0a] px-4 py-2 text-[12px] text-white hover:bg-[#1f1f1f]"
          >
            {t("nav.contact")}
          </a>
        </div>
      </div>
    </header>
  );
}
