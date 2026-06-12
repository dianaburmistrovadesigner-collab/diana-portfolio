import { useLocale } from "../lib/locale";
import { getFooterSocials, mailto, siteConfig } from "../lib/site-config";

export function CaseFooter() {
  const { locale, t } = useLocale();
  const footerSocials = getFooterSocials(locale);

  const footerContacts = [
    { label: "LinkedIn", href: siteConfig.linkedin, external: true },
    { label: "Telegram", href: siteConfig.telegram, external: true },
    { label: siteConfig.email, href: mailto, external: false },
  ] as const;

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
              {t("footer.open")}
            </div>
            <h2 className="mt-3 max-w-[18ch] text-[40px] leading-[1.05] tracking-[-0.01em] md:text-[56px]">
              {t("footer.heading")}
            </h2>
            <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.6] text-white/65">
              {t("footer.body")}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {footerContacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-[14px] text-white hover:bg-white/10"
              >
                <span>{item.label}</span>
                <ArrowOut />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-white/45 md:flex-row md:items-center md:justify-between">
          <span className="font-mono uppercase tracking-[0.16em]">{t("footer.copy")}</span>
          <p className="text-[12px] text-white/55">
            {footerSocials.map((item, i) => (
              <span key={item.label}>
                {i > 0 && <span className="text-white/30"> · </span>}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/55 underline decoration-white/20 underline-offset-4 hover:text-white/80 hover:decoration-white/50"
                >
                  {item.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}

function ArrowOut() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path
        d="M4 10 L10 4 M5 4 H10 V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
