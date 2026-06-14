import type { Service } from "../data/services";
import { buildHash } from "../lib/routing";
import { useLocale } from "../lib/locale";

export function ServiceCard({ service }: { service: Service }) {
  const { locale } = useLocale();
  const href = buildHash(locale, service.route);

  return (
    <a
      href={href}
      className="group flex overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white transition-colors hover:border-[#cfcfc8]"
    >
      {/* 4:3 cover image */}
      <div className="relative w-[200px] flex-shrink-0 overflow-hidden border-r border-[#E8E8E3] md:w-[260px]">
        <div className="aspect-[4/3] h-full">
          <img
            src={service.cover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-3 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[17px] leading-tight text-[#050505] md:text-[19px]">
              {service.title}
            </h3>
            <p className="mt-2 text-[13px] leading-snug text-[#6F6F6A]">{service.tagline}</p>
          </div>
          <span className="flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84] transition-colors group-hover:text-[#050505]">
            View →
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-2.5 py-0.5 text-[11px] text-[#3a3a36]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
            {service.preferredEngagement}
          </span>
        </div>
      </div>
    </a>
  );
}
