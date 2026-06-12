import { SubscribeForm } from "../components/subscribe-form";
import { formatUpdateDate, getUpdatesContent, type UpdateKind } from "../lib/i18n/updates";
import { useLocale } from "../lib/locale";

const ACCENT = "#0E9488";

const kindAccent: Record<UpdateKind, string> = {
  plugin: "#7C5CFF",
  article: "#0E9488",
  video: "#E11D48",
  case: "#050505",
  site: "#6F6F6A",
  other: "#8A8A84",
};

export function UpdatesPage() {
  const { locale } = useLocale();
  const c = getUpdatesContent(locale);

  return (
    <main>
      <section className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 md:pb-20 md:pt-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            {c.badge}
          </div>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h1 className="max-w-[14ch] text-[40px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[64px]">
              {c.title}
            </h1>
            <p className="max-w-[42ch] text-[15px] leading-[1.6] text-[#6F6F6A] md:text-[17px]">
              {c.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
            <div className="md:sticky md:top-24 md:self-start">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.subscribeLabel}
              </div>
              <h2 className="mt-3 text-[22px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[26px]">
                {c.subscribeHeading}
              </h2>
              <p className="mt-3 text-[14px] leading-[1.6] text-[#6F6F6A]">{c.subscribeBody}</p>
              <div className="mt-6">
                <SubscribeForm
                  placeholder={c.subscribePlaceholder}
                  buttonLabel={c.subscribeButton}
                  successMessage={c.subscribeSuccess}
                  errorMessage={c.subscribeError}
                  pendingMessage={c.subscribePending}
                />
                <p className="mt-3 text-[11px] leading-[1.55] text-[#8A8A84]">{c.subscribeConsent}</p>
              </div>
            </div>

            <div>
              <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.timelineLabel}
              </div>
              <ol className="relative flex flex-col gap-4">
                {c.entries.length > 1 && (
                  <span
                    aria-hidden
                    className="absolute bottom-3 left-[11px] top-3 w-px bg-[#E8E8E3]"
                  />
                )}
                {c.entries.map((entry) => (
                  <li
                    key={entry.id}
                    className={
                      "relative grid gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-6 md:grid-cols-[140px_1fr]" +
                      (c.entries.length > 1 ? " md:ml-6" : "")
                    }
                  >
                    {c.entries.length > 1 && (
                      <span
                        aria-hidden
                        className="absolute -left-[22px] top-8 hidden h-2.5 w-2.5 rounded-full border-2 border-[#FAFAF8] md:block"
                        style={{ background: kindAccent[entry.kind] }}
                      />
                    )}
                    <div>
                      <time
                        dateTime={entry.date}
                        className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]"
                      >
                        {formatUpdateDate(entry.date, locale)}
                      </time>
                      <div className="mt-2 inline-flex rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6F6F6A]">
                        {c.kindLabels[entry.kind]}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[17px] leading-snug text-[#050505]">{entry.title}</h3>
                      <p className="mt-2 text-[14px] leading-[1.65] text-[#6F6F6A]">
                        {entry.description}
                      </p>
                      {entry.href && entry.linkLabel && (
                        <a
                          href={entry.href}
                          {...(entry.href.startsWith("#")
                            ? {}
                            : { target: "_blank", rel: "noreferrer" })}
                          className="mt-4 inline-flex text-[13px] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
                        >
                          {entry.linkLabel}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
