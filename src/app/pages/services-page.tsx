import { useState } from "react";
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

function PricingForm() {
  const { locale } = useLocale();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const serviceOptions =
    locale === "ru"
      ? [
          { value: "", label: "Выберите услугу" },
          { value: "b2b-product-design", label: "Product Design for B2B SaaS" },
          { value: "design-system", label: "Design System — с нуля или аудит" },
          { value: "usability-audit", label: "Usability Audit" },
          { value: "design-system-audit", label: "Design System Audit" },
          { value: "other", label: "Другое / не уверена" },
        ]
      : [
          { value: "", label: "Select a service" },
          { value: "b2b-product-design", label: "Product Design for B2B SaaS" },
          { value: "design-system", label: "Design System — build or audit" },
          { value: "usability-audit", label: "Usability Audit" },
          { value: "design-system-audit", label: "Design System Audit" },
          { value: "other", label: "Other / not sure yet" },
        ];

  const budgetOptions =
    locale === "ru"
      ? [
          { value: "", label: "Примерный бюджет" },
          { value: "<2k", label: "до $2 000" },
          { value: "2-5k", label: "$2 000 – $5 000" },
          { value: "5-10k", label: "$5 000 – $10 000" },
          { value: "10k+", label: "$10 000+" },
          { value: "flexible", label: "Обсуждаемо" },
        ]
      : [
          { value: "", label: "Approximate budget" },
          { value: "<2k", label: "Under $2,000" },
          { value: "2-5k", label: "$2,000 – $5,000" },
          { value: "5-10k", label: "$5,000 – $10,000" },
          { value: "10k+", label: "$10,000+" },
          { value: "flexible", label: "Flexible / let's discuss" },
        ];

  const timelineOptions =
    locale === "ru"
      ? [
          { value: "", label: "Желаемые сроки" },
          { value: "asap", label: "ASAP" },
          { value: "1month", label: "В течение месяца" },
          { value: "1-3months", label: "1–3 месяца" },
          { value: "flexible", label: "Гибко" },
        ]
      : [
          { value: "", label: "Preferred timeline" },
          { value: "asap", label: "ASAP" },
          { value: "1month", label: "Within a month" },
          { value: "1-3months", label: "1–3 months out" },
          { value: "flexible", label: "Flexible" },
        ];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio] Inquiry — ${form.service || "Service request"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\nService: ${form.service}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nBrief:\n${form.description}`
    );
    window.location.href = `mailto:diana.burmistrova@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_560px]">
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
                ? "Заполните короткий бриф — отвечу в течение 24 часов с ориентировочной стоимостью и форматом сотрудничества."
                : "Fill in a short brief — I'll reply within 24 hours with an estimate and a proposed engagement format."}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <InfoRow
                label={locale === "ru" ? "Контракт" : "Contract"}
                value="Mellow · B2B"
              />
              <InfoRow
                label={locale === "ru" ? "Работаю с" : "Working with"}
                value={locale === "ru" ? "EN / RU клиентами" : "EN / RU clients"}
              />
              <InfoRow
                label={locale === "ru" ? "Формат" : "Format"}
                value={locale === "ru" ? "Remote, async" : "Remote, async"}
              />
            </div>
          </div>

          <div>
            {sent ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#E8E8E3] bg-white p-10 text-center">
                <div className="mb-4 text-[32px]">✉️</div>
                <p className="text-[16px] text-[#050505]">
                  {locale === "ru"
                    ? "Открываю ваш почтовый клиент…"
                    : "Opening your email client…"}
                </p>
                <p className="mt-2 text-[13px] text-[#8A8A84]">
                  {locale === "ru"
                    ? "Если ничего не открылось — напишите напрямую на diana.burmistrova@gmail.com"
                    : "If nothing opened — reach out directly at diana.burmistrova@gmail.com"}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-6 md:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label={locale === "ru" ? "Ваше имя *" : "Your name *"}
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder={locale === "ru" ? "Имя Фамилия" : "First Last"}
                  />
                  <FormField
                    label={locale === "ru" ? "Компания" : "Company"}
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={locale === "ru" ? "Название компании" : "Company name"}
                  />
                </div>
                <FormField
                  label={locale === "ru" ? "Email для ответа *" : "Your email *"}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="name@company.com"
                />
                <FormSelect
                  label={locale === "ru" ? "Услуга *" : "Service *"}
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  options={serviceOptions}
                  required
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormSelect
                    label={locale === "ru" ? "Бюджет" : "Budget"}
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    options={budgetOptions}
                  />
                  <FormSelect
                    label={locale === "ru" ? "Сроки" : "Timeline"}
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    options={timelineOptions}
                  />
                </div>
                <FormTextarea
                  label={
                    locale === "ru"
                      ? "Коротко о проекте *"
                      : "Brief description of your project *"
                  }
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  placeholder={
                    locale === "ru"
                      ? "Что за продукт, какая задача, какой стек (если важно)…"
                      : "What's the product, what's the goal, tech stack if relevant…"
                  }
                  rows={4}
                />
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-[#0a0a0a] py-3 text-[14px] text-white transition-colors hover:bg-[#1f1f1f]"
                >
                  {locale === "ru" ? "Отправить запрос →" : "Send request →"}
                </button>
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  {locale === "ru"
                    ? "Открываю почтовый клиент · без посредников"
                    : "Opens your mail client · no third-party forms"}
                </p>
              </form>
            )}
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

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-[#E8E8E3] bg-[#FAFAF8] px-4 py-2.5 text-[13px] text-[#050505] outline-none transition-colors placeholder:text-[#BFBFB8] focus:border-[#050505]"
      />
    </div>
  );
}

function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-xl border border-[#E8E8E3] bg-[#FAFAF8] px-4 py-2.5 text-[13px] text-[#050505] outline-none transition-colors focus:border-[#050505]"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  rows,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows ?? 4}
        className="resize-none rounded-xl border border-[#E8E8E3] bg-[#FAFAF8] px-4 py-2.5 text-[13px] text-[#050505] outline-none transition-colors placeholder:text-[#BFBFB8] focus:border-[#050505]"
      />
    </div>
  );
}
