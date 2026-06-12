import { ProjectCard } from "../components/project-card";
import { getHomeContent, getProjects } from "../lib/i18n";
import { useLocale } from "../lib/locale";
import { siteConfig } from "../lib/site-config";

const ACCENT = "#0E9488";

export function HomePage() {
  const { locale, href } = useLocale();
  const c = getHomeContent(locale);
  const projects = getProjects(locale);

  return (
    <main>
      <section className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            {c.status}
          </div>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <h1 className="max-w-[16ch] text-[44px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[80px]">
                Diana Burmistrova
              </h1>
              <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[#6F6F6A]">
                {locale === "ru" ? "Продуктовый дизайнер" : "Product Designer"}
              </div>
            </div>
            <p className="max-w-[44ch] text-[15px] leading-[1.6] text-[#6F6F6A] md:text-[17px]">
              {c.intro}
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
            >
              {c.ctaCases}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#E8E8E3] bg-white px-5 py-2.5 text-[13px] text-[#3a3a36] hover:bg-[#FAFAF8]"
            >
              {c.ctaContact}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-2 gap-px overflow-hidden border-x border-[#E8E8E3] bg-[#E8E8E3] md:grid-cols-4">
            {c.proof.map((f) => (
              <div key={f.k} className="bg-[#FAFAF8] p-6">
                <div className="text-[22px] leading-tight text-[#050505]">{f.k}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  {f.v}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 border-x border-[#E8E8E3] px-6 py-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
              {c.domainsLabel}
            </span>
            {c.domains.map((d) => (
              <span
                key={d}
                className="rounded-full border border-[#E8E8E3] bg-white px-3 py-1 text-[12px] text-[#3a3a36]"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:py-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.selectedLabel}
              </div>
              <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                {c.selectedHeading}
              </h2>
            </div>
            <a
              href={href("#/work")}
              className="hidden rounded-full border border-[#E8E8E3] bg-white px-4 py-2 text-[12px] text-[#3a3a36] hover:bg-[#FAFAF8] md:inline-flex"
            >
              {c.allProjects}
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20 md:items-center">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.ndaLabel}
              </div>
              <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                {c.ndaHeading}
              </h2>
            </div>
            <div>
              <p className="max-w-[60ch] text-[15px] leading-[1.65] text-[#3a3a36]">{c.ndaBody}</p>
              <a
                href={href("#/work")}
                className="mt-6 inline-flex rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
              >
                {c.ndaCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.learningLabel}
              </div>
              <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                {c.learningHeading}
              </h2>
            </div>
            <a
              href={href("#/about")}
              className="hidden rounded-full border border-[#E8E8E3] bg-white px-4 py-2 text-[12px] text-[#3a3a36] hover:bg-[#FAFAF8] md:inline-flex"
            >
              {c.fullEducation}
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {c.learning.map((l) => (
              <div key={l.title} className="rounded-2xl border border-[#E8E8E3] bg-white p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  {l.when}
                </div>
                <h3 className="mt-2 text-[16px] text-[#050505]">{l.title}</h3>
                <p className="mt-2 text-[13px] leading-snug text-[#6F6F6A]">{l.note}</p>
                {l.href && (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-[12px] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
                  >
                    {l.linkLabel ?? c.courseDetails}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="rounded-2xl border border-[#E8E8E3] bg-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                  {c.contactHeading}
                </h2>
                <p className="mt-3 max-w-[56ch] text-[15px] leading-[1.6] text-[#6F6F6A]">
                  {c.contactBody}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
                  >
                    {c.contactLinkedIn}
                  </a>
                  <a
                    href={siteConfig.contra}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#E8E8E3] bg-white px-5 py-2.5 text-[13px] text-[#3a3a36] hover:bg-[#FAFAF8]"
                  >
                    {c.contactContra}
                  </a>
                </div>
                <a
                  href={siteConfig.cvPath}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-[13px] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
                >
                  {c.downloadCv} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
