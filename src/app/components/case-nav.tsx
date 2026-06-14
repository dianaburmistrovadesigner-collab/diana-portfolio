import { buildHash, type SiteRoute } from "../lib/routing";
import { useLocale } from "../lib/locale";
import { projects } from "../data/projects";
import type { Project } from "./project-card";

const ROUTE_BY_SLUG: Record<string, SiteRoute> = {
  aimlapi: "case-aimlapi",
  amigochat: "case-amigochat",
  overchat: "case-overchat",
  strevolut: "case-strevolut",
};

const SLUG_BY_ROUTE: Partial<Record<SiteRoute, string>> = Object.fromEntries(
  Object.entries(ROUTE_BY_SLUG).map(([slug, route]) => [route, slug]),
);

const coverBySlug: Record<string, string> = {
  aimlapi: "/images/covers/aiml-api-cover.png",
  amigochat: "/images/covers/amigochat-cover.png",
  strevolut: "/images/covers/strevolut-cover.png",
  overchat: "/images/covers/overchat-cover.png",
};

const caseProjects = projects.filter((p) => p.status === "case");

export function CaseNav({ currentRoute }: { currentRoute: SiteRoute }) {
  const { locale, t } = useLocale();

  const currentSlug = SLUG_BY_ROUTE[currentRoute];
  if (!currentSlug) return null;

  const idx = caseProjects.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return null;

  const prev = caseProjects[(idx - 1 + caseProjects.length) % caseProjects.length];
  const next = caseProjects[(idx + 1) % caseProjects.length];

  return (
    <section className="border-b border-[#E8E8E3] bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A84]">
            {t("casenav.heading")}
          </span>
          <span className="h-px flex-1 bg-[#E8E8E3]" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <NavCard project={prev} direction="prev" href={buildHash(locale, ROUTE_BY_SLUG[prev.slug])} label={t("casenav.prev")} />
          <NavCard project={next} direction="next" href={buildHash(locale, ROUTE_BY_SLUG[next.slug])} label={t("casenav.next")} />
        </div>
      </div>
    </section>
  );
}

function NavCard({
  project,
  direction,
  href,
  label,
}: {
  project: Project;
  direction: "prev" | "next";
  href: string;
  label: string;
}) {
  const cover = coverBySlug[project.slug];

  return (
    <a
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white transition-colors hover:border-[#cfcfc8]"
    >
      <div className="relative h-[180px] overflow-hidden border-b border-[#E8E8E3] bg-[#FAFAF8]">
        {cover && (
          <img
            src={cover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
          {label}
        </div>
        <div className="text-[16px] leading-tight text-[#050505] group-hover:text-[#0E9488] transition-colors">
          {project.title}
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3 border-t border-[#EFEFEA]">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-2.5 py-0.5 text-[11px] text-[#3a3a36]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
