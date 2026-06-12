import { useLocale } from "../lib/locale";

const ACCENT = "#0E9488";

/** Manus composite cover images for home/work project cards */
const previewBySlug: Record<string, string> = {
  aimlapi: "/images/covers/aiml-api-cover.png",
  amigochat: "/images/covers/amigochat-cover.png",
  strevolut: "/images/covers/strevolut-cover.png",
  overchat: "/images/covers/overchat-cover.png",
};

export type Project = {
  slug: string;
  year: string;
  title: string;
  summary: string;
  role: string;
  tags: string[];
  status?: "case" | "soon";
  state?: "in-progress" | "completed";
  href?: string;
};

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const { t } = useLocale();
  const clickable = project.status !== "soon" && project.href;
  const Wrap: any = clickable ? "a" : "div";
  return (
    <Wrap
      href={clickable ? project.href : undefined}
      className={
        "group flex flex-col overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white transition-colors " +
        (clickable ? "hover:border-[#cfcfc8]" : "")
      }
    >
      <div
        className={
          "relative overflow-hidden border-b border-[#E8E8E3] bg-[#FAFAF8] " +
          (large ? "h-[360px]" : "h-[240px]")
        }
      >
        <ProjectPreview slug={project.slug} />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#3a3a36] backdrop-blur">
            {project.year}
          </span>
          {project.state === "in-progress" ? (
            <span
              className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white"
              style={{ background: ACCENT }}
            >
              {t("project.inProgress")}
            </span>
          ) : project.state === "completed" ? (
            <span className="rounded-full border border-[#E8E8E3] bg-white/90 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6F6F6A] backdrop-blur">
              {t("project.completed")}
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className={"leading-tight text-[#050505] " + (large ? "text-[22px]" : "text-[18px]")}>
            {project.title}
          </h3>
          {clickable && (
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84] transition-colors group-hover:text-[#050505]">
              {t("project.case")}
            </span>
          )}
        </div>
        <p className={"leading-snug text-[#6F6F6A] " + (large ? "text-[14px]" : "text-[13px]")}>
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-2.5 py-0.5 text-[11px] text-[#3a3a36]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-1 flex items-center justify-between border-t border-[#EFEFEA] pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
          <span>{project.role}</span>
        </div>
      </div>
    </Wrap>
  );
}

function ProjectPreview({ slug }: { slug: string }) {
  const cover = previewBySlug[slug];
  if (cover) {
    return (
      <img
        src={cover}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
    );
  }

  if (slug === "aimlapi") {
    return (
      <div className="absolute inset-0 grid grid-cols-[140px_1fr] gap-0">
        <div className="border-r border-[#EFEFEA] bg-white p-4">
          <div className="mb-3 h-5 w-5 rounded-md" style={{ background: ACCENT }} />
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={
                "mb-1.5 h-2 rounded-full " + (i === 1 ? "bg-[#1f1f1f]" : "bg-[#E0E0DA]")
              }
              style={{ width: `${50 + ((i * 13) % 40)}%` }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3 p-5">
          <div className="flex gap-2">
            <span className="h-6 w-20 rounded-full border border-[#E8E8E3]" />
            <span className="h-6 w-16 rounded-full border border-[#E8E8E3]" />
            <span
              className="h-6 w-24 rounded-full"
              style={{ background: "#0a0a0a" }}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-[#EFEFEA] bg-white p-3">
                <div className="h-1.5 w-10 rounded-full" style={{ background: i === 0 ? ACCENT : "#D6D6CF" }} />
                <div className="mt-2 h-3 w-16 rounded-full bg-[#1f1f1f]" />
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#EFEFEA]" />
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-lg border border-dashed border-[#D6D6CF] bg-[#FAFAF8]" />
        </div>
      </div>
    );
  }

  if (slug === "strevolut" || slug === "design-system") {
    return (
      <div className="absolute inset-0 grid grid-cols-4 gap-2 p-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-1.5 rounded-lg border border-[#EFEFEA] bg-white p-2.5"
          >
            <span
              className="h-3.5 w-3.5 rounded-md"
              style={{
                background:
                  i % 4 === 0 ? ACCENT : i % 4 === 1 ? "#0a0a0a" : i % 4 === 2 ? "#D6D6CF" : "#EFEFEA",
              }}
            />
            <span className="h-1.5 w-3/4 rounded-full bg-[#D6D6CF]" />
            <span className="h-1 w-1/2 rounded-full bg-[#EFEFEA]" />
          </div>
        ))}
      </div>
    );
  }

  // generic placeholder
  return (
    <div className="absolute inset-0 flex flex-col gap-3 p-6">
      <div className="flex gap-2">
        <span className="h-6 w-20 rounded-full" style={{ background: "#0a0a0a" }} />
        <span className="h-6 w-16 rounded-full border border-[#E8E8E3]" />
      </div>
      <div className="grid flex-1 grid-cols-2 gap-3">
        <div className="rounded-xl border border-[#EFEFEA] bg-white p-4">
          <div className="mb-2 h-2 w-12 rounded-full" style={{ background: ACCENT }} />
          <div className="mb-1 h-3 w-20 rounded-full bg-[#1f1f1f]" />
          <div className="h-1.5 w-full rounded-full bg-[#EFEFEA]" />
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-8 rounded-md bg-[#F0F0EB]" />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-dashed border-[#D6D6CF] bg-[#FAFAF8]" />
      </div>
    </div>
  );
}
