import type { Service } from "../data/services";
import { buildHash } from "../lib/routing";
import { useLocale } from "../lib/locale";

export function ServicePage({ service }: { service: Service }) {
  return (
    <main>
      <ServiceHero service={service} />
      <ServiceBody service={service} />
      <ServiceCases service={service} />
    </main>
  );
}

function ServiceHero({ service }: { service: Service }) {
  const { locale, href } = useLocale();

  return (
    <section className="border-b border-[#E8E8E3]">
      <div className="mx-auto max-w-[1320px] px-6 py-10 md:py-16">
        <a
          href={href("#/services")}
          className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84] transition-colors hover:text-[#050505]"
        >
          ← {locale === "ru" ? "Все услуги" : "All services"}
        </a>

        <div className="grid gap-10 md:grid-cols-[1fr_420px]">
          <div>
            <h1 className="mb-4 text-[32px] font-normal leading-tight tracking-[-0.01em] text-[#050505] md:text-[44px]">
              {service.title}
            </h1>
            <p className="mb-6 max-w-[560px] text-[16px] leading-relaxed text-[#6F6F6A]">
              {service.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[12px] text-[#3a3a36]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-6">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
              {locale === "ru" ? "Детали" : "Details"}
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  {locale === "ru" ? "Продолжительность" : "Engagement"}
                </span>
                <span className="text-[13px] text-[#3a3a36]">{service.preferredEngagement}</span>
              </div>
              <div className="border-t border-[#E8E8E3] pt-4">
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  {locale === "ru" ? "Как работаю" : "How I work"}
                </span>
                <div className="flex flex-col gap-2.5 text-[13px] text-[#3a3a36]">
                  <span>💳 Mellow · B2B — no Deel required</span>
                  <span>🌐 EN / RU — async written preferred</span>
                  <span>🕐 Remote · UTC+3 (±2 flexible)</span>
                </div>
              </div>
              <div className="border-t border-[#E8E8E3] pt-4">
                <a
                  href={buildHash(locale, "services") + "#pricing"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0a0a0a] py-3 text-[13px] text-white transition-colors hover:bg-[#1f1f1f]"
                >
                  {locale === "ru" ? "Запросить стоимость →" : "Request pricing →"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBody({ service }: { service: Service }) {
  const { locale } = useLocale();

  return (
    <section className="border-b border-[#E8E8E3]">
      <div className="mx-auto max-w-[1320px] px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr_360px]">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
              {locale === "ru" ? "Описание" : "About this service"}
            </p>
            <div className="flex flex-col gap-4">
              {service.description.map((para, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-[#3a3a36]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
              {locale === "ru" ? "Что входит" : "What's included"}
            </p>
            <ul className="flex flex-col gap-2.5">
              {service.whatIsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0a0a0a]" />
                  <span className="text-[14px] leading-snug text-[#3a3a36]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
              {locale === "ru" ? "Не подходит для" : "Not a fit for"}
            </p>
            <ul className="flex flex-col gap-2.5">
              {service.notAFitFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 font-mono text-[11px] text-[#BFBFB8]">✕</span>
                  <span className="text-[14px] leading-snug text-[#6F6F6A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCases({ service }: { service: Service }) {
  const { locale } = useLocale();

  if (service.relatedCases.length === 0) return null;

  return (
    <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1320px] px-6 py-14">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
            {locale === "ru" ? "Примеры работ" : "Example work"}
          </span>
          <span className="h-px flex-1 bg-[#E8E8E3]" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.relatedCases.map((c) => (
            <CaseThumb key={c.slug} c={c} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseThumb({
  c,
  locale,
}: {
  c: { slug: string; title: string; route: import("../lib/routing").SiteRoute; cover: string };
  locale: string;
}) {
  return (
    <a
      href={buildHash(locale, c.route)}
      className="group overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white transition-colors hover:border-[#cfcfc8]"
    >
      <div className="h-[200px] overflow-hidden border-b border-[#E8E8E3]">
        <img
          src={c.cover}
          alt=""
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <p className="text-[14px] leading-snug text-[#050505]">{c.title}</p>
        <span className="flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84] transition-colors group-hover:text-[#050505]">
          →
        </span>
      </div>
    </a>
  );
}
