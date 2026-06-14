import { useEffect } from "react";
import { ServiceCard } from "../components/service-card";
import { services } from "../data/services";
import { useLocale } from "../lib/locale";

export function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <PricingForm />
    </main>
  );
}

const ACCENT = "#0E9488";

function ServicesHero() {
  const { locale } = useLocale();

  return (
    <section className="border-b border-[#E8E8E3] bg-white">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          {locale === "ru" ? "Услуги" : "Services"}
        </div>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="max-w-[16ch] text-[40px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[64px]">
            {locale === "ru"
              ? "Продуктовый дизайн и UX"
              : "Product design & UX services"}
          </h1>
          <p className="max-w-[42ch] text-[15px] leading-[1.6] text-[#6F6F6A] md:text-[17px]">
            {locale === "ru"
              ? "От первого исследования до handoff — для SaaS, AI-инструментов, мобильных и веб-продуктов."
              : "From first research session to developer handoff — for SaaS, AI tools, mobile and web products."}
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const { locale } = useLocale();

  return (
    <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="mb-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
              {locale === "ru" ? "Как я работаю" : "How I work"}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <WorkingDetail
                label={locale === "ru" ? "Контракт" : "Contract"}
                value={
                  locale === "ru"
                    ? "B2B через Mellow — без Deel на вашей стороне"
                    : "B2B via Mellow — no Deel required on your end"
                }
              />
              <WorkingDetail
                label={locale === "ru" ? "Языки" : "Languages"}
                value={
                  locale === "ru"
                    ? "Английский и русский. Предпочитаю переписку на EN"
                    : "English & Russian. Prefer async written comms in EN"
                }
              />
              <WorkingDetail
                label={locale === "ru" ? "Формат" : "Format"}
                value={
                  locale === "ru"
                    ? "Remote, async-first. UTC+3 (±2 гибко)"
                    : "Remote, async-first. UTC+3 (±2 flexible)"
                }
              />
              <WorkingDetail
                label={locale === "ru" ? "Ответ" : "Response time"}
                value={
                  locale === "ru"
                    ? "Обычно в течение 24 часов"
                    : "Usually within 24 hours"
                }
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
          {locale === "ru"
            ? "Нет подходящей услуги? Напишите — обсудим индивидуальный формат"
            : "Don't see the right fit? Reach out — we can scope something custom"}
        </p>
      </div>
    </section>
  );
}

function WorkingDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
        {label}
      </span>
      <span className="h-px flex-1 bg-[#E8E8E3]" />
      <span className="text-right text-[13px] text-[#3a3a36]">{value}</span>
    </div>
  );
}

const TALLY_FORM_ID = "pbZ058";

function PricingForm() {
  const { locale } = useLocale();

  useEffect(() => {
    // Load Tally embed script if not already present
    if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="pricing" className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_600px]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {locale === "ru" ? "Запросить стоимость" : "Request pricing"}
              </span>
              <span className="h-px flex-1 bg-[#E8E8E3]" />
            </div>
            <h2 className="mb-4 text-[28px] font-normal leading-tight text-[#050505] md:text-[36px]">
              {locale === "ru" ? "Расскажите о проекте" : "Tell me about your project"}
            </h2>
            <p className="max-w-[380px] text-[14px] leading-relaxed text-[#6F6F6A]">
              {locale === "ru"
                ? "Заполните короткий бриф — отвечу в течение 24 часов с ориентировочной стоимостью и форматом."
                : "Fill in a short brief — I'll reply within 24 hours with an estimate and a proposed engagement format."}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <InfoRow label="Contract" value="Mellow · B2B" />
              <InfoRow label="Languages" value="EN / RU" />
              <InfoRow label="Format" value="Remote · async-first" />
              <InfoRow label="Response" value="Within 24 hours" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
            <iframe
              data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
              loading="lazy"
              width="100%"
              height="600"
              title="New Project Brief"
              className="block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
        {label}
      </span>
      <span className="h-px flex-1 bg-[#E8E8E3]" />
      <span className="text-[13px] text-[#3a3a36]">{value}</span>
    </div>
  );
}
