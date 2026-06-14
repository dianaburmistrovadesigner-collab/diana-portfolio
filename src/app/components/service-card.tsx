import type { Service } from "../data/services";
import { buildHash } from "../lib/routing";
import { useLocale } from "../lib/locale";

export function ServiceCard({ service }: { service: Service }) {
  const { locale } = useLocale();
  const href = buildHash(locale, service.route);

  return (
    <a
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white transition-colors hover:border-[#cfcfc8]"
    >
      <div className="relative h-[240px] overflow-hidden border-b border-[#E8E8E3] bg-[#FAFAF8]">
        <img
          src={service.cover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[18px] leading-tight text-[#050505]">{service.title}</h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84] transition-colors group-hover:text-[#050505]">
            View →
          </span>
        </div>
        <p className="text-[13px] leading-snug text-[#6F6F6A]">{service.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-2.5 py-0.5 text-[11px] text-[#3a3a36]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-1 border-t border-[#EFEFEA] pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
          {service.preferredEngagement}
        </div>
      </div>
    </a>
  );
}
