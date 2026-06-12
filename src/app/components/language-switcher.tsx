import { useLocale, type SiteLocale } from "../lib/locale";

const options: { id: SiteLocale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "ru", label: "RU" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="flex h-8 overflow-hidden rounded-md border border-[#E8E8E3]"
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => {
        const active = locale === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLocale(opt.id)}
            aria-pressed={active}
            className={
              "min-w-[36px] px-3 text-[12px] font-medium transition-colors " +
              (active
                ? "bg-[#0a0a0a] text-white"
                : "bg-white text-[#555] hover:bg-[#FAFAF8]")
            }
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
