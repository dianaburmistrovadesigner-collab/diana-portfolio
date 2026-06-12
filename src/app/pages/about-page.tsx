import portrait from "../../imports/Diana_Burmistrova___Product_Designer.png";
import { getAboutContent } from "../lib/i18n";
import { useLocale } from "../lib/locale";
import { getFooterSocials, siteConfig } from "../lib/site-config";

const ACCENT = "#0E9488";

export function AboutPage() {
  const { locale } = useLocale();
  const c = getAboutContent(locale);
  const socialLinks = getFooterSocials(locale);

  return (
    <main>
      <section className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-16 md:pb-20 md:pt-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            {c.badge}
          </div>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
            <div>
              <h1 className="max-w-[18ch] text-[40px] leading-[1.05] tracking-[-0.02em] text-[#050505] md:text-[64px]">
                {c.title}
              </h1>
              <p className="mt-6 max-w-[58ch] text-[15px] leading-[1.65] text-[#3a3a36] md:text-[17px]">
                {c.intro1}
              </p>
              <p className="mt-4 max-w-[58ch] text-[14px] leading-[1.65] text-[#6F6F6A]">
                {c.intro2}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[13px] text-white hover:bg-[#1f1f1f]"
                >
                  {c.contact}
                </a>
                <a
                  href={siteConfig.cvPath}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#E8E8E3] bg-white px-5 py-2.5 text-[13px] text-[#3a3a36] hover:bg-[#FAFAF8]"
                >
                  {c.downloadCv}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8]">
              <div className="relative aspect-[4/5]">
                <img
                  src={portrait}
                  alt={c.portrait}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
              <div className="grid grid-cols-2 gap-px bg-[#E8E8E3]">
                {c.facts.map(([k, v]) => (
                  <div key={k} className="bg-[#FAFAF8] p-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                      {k}
                    </div>
                    <div className="mt-0.5 text-[12px] text-[#050505]">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {c.quotes.map((q) => (
              <blockquote
                key={q.author}
                className="rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-5"
              >
                <p className="text-[14px] leading-snug text-[#3a3a36]">«{q.text}»</p>
                <footer className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  {q.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
            <div className="md:sticky md:top-24 md:self-start">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.philosophyLabel}
              </div>
              <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                {c.philosophyHeading}
              </h2>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-[18px] text-[#050505]">{c.meaningTitle}</h3>
                <p className="mt-3 max-w-[68ch] text-[14px] leading-[1.7] text-[#3a3a36]">
                  {c.meaningBody}
                </p>
              </div>
              <div>
                <h3 className="text-[18px] text-[#050505]">{c.howThinkTitle}</h3>
                <p className="mt-3 max-w-[68ch] text-[14px] leading-[1.7] text-[#3a3a36]">
                  {c.howThinkBody1}
                </p>
                <p className="mt-3 max-w-[68ch] text-[14px] leading-[1.7] text-[#3a3a36]">
                  {c.howThinkBody2}
                </p>
              </div>
              <div>
                <h3 className="text-[18px] text-[#050505]">{c.efficiencyTitle}</h3>
                <p className="mt-3 max-w-[68ch] text-[14px] leading-[1.7] text-[#3a3a36]">
                  {c.efficiencyBody}
                </p>
              </div>
              <div>
                <h3 className="text-[18px] text-[#050505]">{c.valuesTitle}</h3>
                <p className="mt-3 max-w-[68ch] text-[14px] leading-[1.7] text-[#3a3a36]">
                  {c.valuesBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="mb-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
              {c.helpLabel}
            </div>
            <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
              {c.helpHeading}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {c.helpWith.map((h, i) => (
              <div key={h.k} className="flex flex-col rounded-2xl border border-[#E8E8E3] bg-white p-6">
                <div className="font-mono text-[11px] text-[#B8B8B2]">0{i + 1}</div>
                <h3 className="mt-3 text-[18px] text-[#050505]">{h.k}</h3>
                <p className="mt-2 text-[13px] leading-snug text-[#6F6F6A]">{h.v}</p>
                <ul className="mt-4 flex flex-col gap-1.5 border-t border-[#EFEFEA] pt-4">
                  {h.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-[13px] text-[#3a3a36]">
                      <span className="h-1 w-1 rounded-full" style={{ background: ACCENT }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
            <div className="md:sticky md:top-24 md:self-start">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.processLabel}
              </div>
              <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                {c.processHeading}
              </h2>
              <p className="mt-4 text-[14px] leading-[1.6] text-[#6F6F6A]">{c.processIntro}</p>
            </div>
            <ol className="flex flex-col gap-3">
              {c.process.map((p) => (
                <li
                  key={p.no}
                  className="grid gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-6 md:grid-cols-[170px_1fr]"
                >
                  <div>
                    <div className="font-mono text-[11px] text-[#B8B8B2]">{p.no}</div>
                    <div className="mt-1 text-[15px] text-[#050505]">{p.phase}</div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">
                      {p.sub}
                    </div>
                  </div>
                  <div className="text-[13px] leading-snug text-[#6F6F6A]">{p.what}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
            <div className="md:sticky md:top-24 md:self-start">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.skillsLabel}
              </div>
              <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                {c.skillsHeading}
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {c.skills.map((s) => (
                  <div key={s.group} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                      {s.group}
                    </div>
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-2 text-[13px] text-[#3a3a36]">
                          <span className="h-1 w-1 rounded-full bg-[#B8B8B2]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
                  {c.toolsLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[12px] text-[#3a3a36]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
            <div className="md:sticky md:top-24 md:self-start">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.experienceLabel}
              </div>
              <h2 className="mt-3 text-[28px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[34px]">
                {c.experienceHeading}
              </h2>
            </div>
            <ol className="flex flex-col gap-3">
              {c.experience.map((e) => (
                <li
                  key={e.when}
                  className="grid gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-6 md:grid-cols-[180px_1fr]"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8A8A84]">
                    {e.when}
                  </div>
                  <div>
                    <div className="text-[15px] text-[#050505]">
                      {e.role} <span className="text-[#8A8A84]">· {e.where}</span>
                    </div>
                    <div className="mt-1.5 text-[13px] leading-snug text-[#6F6F6A]">{e.note}</div>
                    {e.points.length > 0 && (
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {e.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2 text-[13px] leading-snug text-[#3a3a36]"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#B8B8B2]" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E8E8E3] bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.educationLabel}
              </div>
              <h2 className="mt-3 text-[24px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[28px]">
                {c.educationHeading}
              </h2>
              <ol className="mt-6 flex flex-col gap-3">
                {c.education.map((ed) => (
                  <li key={ed.where} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8A8A84]">
                      {ed.when}
                    </div>
                    <div className="mt-1.5 text-[15px] text-[#050505]">{ed.where}</div>
                    <div className="mt-1 text-[13px] leading-snug text-[#6F6F6A]">{ed.note}</div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.profDevLabel}
              </div>
              <h2 className="mt-3 text-[24px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[28px]">
                {c.profDevHeading}
              </h2>
              <ul className="mt-6 overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
                {c.courses.map((course) => (
                  <li
                    key={course.year + course.course}
                    className="grid gap-3 border-b border-[#EFEFEA] p-4 last:border-b-0 md:grid-cols-[110px_1fr]"
                  >
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8A8A84]">
                      {course.year}
                    </div>
                    <div className="text-[13px] leading-snug text-[#3a3a36]">{course.course}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8]">
        <div className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8A84]">
                {c.languagesLabel}
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                {c.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between gap-3 text-[14px] text-[#3a3a36]"
                  >
                    <span>{lang.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E8E8E3] bg-white p-8">
              <h2 className="text-[24px] leading-tight tracking-[-0.01em] text-[#050505] md:text-[28px]">
                {c.socialHeading}
              </h2>
              <p className="mt-3 max-w-[52ch] text-[14px] leading-[1.6] text-[#6F6F6A]">
                {c.socialBody}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3.5 py-1.5 text-[12px] text-[#3a3a36] hover:bg-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
