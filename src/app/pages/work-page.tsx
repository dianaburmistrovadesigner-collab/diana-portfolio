import { ProjectCard } from "../components/project-card";
import { getNdaCases } from "../data/nda-cases";
import { getProjects, getWorkContent } from "../lib/i18n";
import { useLocale } from "../lib/locale";
import { mailto } from "../lib/site-config";

const ACCENT = "#0E9488";

export function WorkPage() {
  const { locale, href } = useLocale();
  const c = getWorkContent(locale);
  const projects = getProjects(locale);
  const ndaCases = getNdaCases(locale);

  function goToSkills(e: { preventDefault: () => void }) {
    e.preventDefault();
    window.location.hash = href("#/about").replace(/^#/, "");
    setTimeout(
      () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
      120,
    );
  }

  return (
    <main>
      <section className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 md:pb-20 md:pt-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            {c.badge}
          </div>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h1 className="max-w-[16ch] text-[40px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[64px]">
              {c.title}
            </h1>
            <p className="max-w-[42ch] text-[15px] leading-[1.6] text-[#6F6F6A] md:text-[17px]">
              {c.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.workedOnLabel}
              </div>
              <h2 className="mt-3 text-[24px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[28px]">
                {c.workedOnHeading}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                    {c.industriesLabel}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {c.industries.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-[13px] text-[#3a3a36]">
                        <span className="h-1 w-1 rounded-full bg-[#B8B8B2]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                    {c.interfacesLabel}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {c.interfaces.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-[13px] text-[#3a3a36]">
                        <span className="h-1 w-1 rounded-full bg-[#B8B8B2]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.servicesLabel}
              </div>
              <h2 className="mt-3 text-[24px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[28px]">
                {c.servicesHeading}
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {c.services.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-2xl border border-[#E8E8E3] bg-white p-4 text-[14px] leading-snug text-[#3a3a36]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: ACCENT }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={href("#/about")}
                onClick={goToSkills}
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
              >
                {c.skillsLink}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
          <div className="mb-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
              {c.featuredLabel}
            </div>
            <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
              {c.featuredHeading}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
          <div className="max-w-[64ch]">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
              {c.libraryLabel}
            </div>
            <h2 className="mt-3 text-[22px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[26px]">
              {c.libraryHeading}
            </h2>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#6F6F6A]">{c.libraryIntro}</p>
          </div>

          <ol className="mt-10 overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
            {ndaCases.map((item) => (
              <li
                key={item.no}
                className="grid gap-4 border-b border-[#EFEFEA] p-6 last:border-b-0 md:grid-cols-[40px_1fr_220px] md:items-start"
              >
                <div className="font-mono text-[12px] text-[#B8B8B2]">{item.no}</div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[16px] text-[#050505]">{item.name}</span>
                    <span className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">
                      {item.badge}
                    </span>
                  </div>
                  <div className="mt-1 text-[13px] text-[#6F6F6A]">{item.subtitle}</div>
                  <p className="mt-2 max-w-[60ch] text-[13px] leading-snug text-[#6F6F6A]">
                    {item.context}
                  </p>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#A6A6A0]">
                    {item.type}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 md:items-end md:text-right">
                  {item.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[12px] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl border border-dashed border-[#DEDED8] bg-white p-6 text-center">
            <p className="mx-auto max-w-[48ch] text-[14px] leading-snug text-[#6F6F6A]">
              {c.libraryNote}
            </p>
            <a
              href={mailto}
              className="mt-4 inline-flex rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
            >
              {c.libraryCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
