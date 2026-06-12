import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { amigoFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

type Persona = {
  initials: string;
  name: string;
  age: number;
  role: string;
  share: string;
  goal: string;
  pain: string;
  quote: string;
  tools: string[];
};

const personas: Persona[] = [
  {
    initials: "MC",
    name: "Maya Chen",
    age: 32,
    role: "Solopreneur · EcoThreads",
    share: "40% · Simplicity",
    goal: "Cut content creation from 15 hrs/week to 5 — without juggling 5 tools.",
    pain: "Pays $100+/month for tools she barely uses and re-explains her brand voice every time.",
    quote: "I just need something simple that works.",
    tools: ["ChatGPT", "Midjourney", "Canva", "Grammarly"],
  },
  {
    initials: "AR",
    name: "Alex Rivera",
    age: 28,
    role: "Freelance content creator",
    share: "60% · Power",
    goal: "Organize AI work per client, track costs accurately, scale from 5 to 10+ clients.",
    pain: "Chats mix across clients. Hard to attribute AI spend per client for billing.",
    quote: "I'm tired of black boxes. I need full control.",
    tools: ["ChatGPT", "Claude", "Midjourney", "Runway"],
  },
];

export function AmigoPersonas() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Target audience · Personas
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
            Two personas, one market tension
          </h2>
          <p className="mt-2 text-[14px] text-[#6F6F6A]">
            Maya wants simplicity. Alex wants power. The MVP has to deliver both.
          </p>
        </div>
        <a
          href={amigoFigmaLinks.persona}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {personas.map((p) => (
          <article
            key={p.name}
            className="flex flex-col gap-4 rounded-2xl border border-[#E8E8E3] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_8px_24px_-12px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[14px] text-white"
                style={{ background: "#111" }}
              >
                {p.initials}
              </div>
              <div className="min-w-0">
                <div className="text-[15px] text-[#050505]">
                  {p.name}
                  <span className="ml-1.5 text-[#8A8A84]">· {p.age}</span>
                </div>
                <div className="text-[12px] text-[#6F6F6A]">{p.role}</div>
              </div>
              <span
                className="ml-auto shrink-0 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white"
                style={{ background: ACCENT }}
              >
                {p.share}
              </span>
            </div>

            <div className="flex flex-col gap-3 border-t border-[#EFEFEA] pt-4">
              <Row label="Goal" value={p.goal} dot={ACCENT} />
              <Row label="Pain" value={p.pain} dot="#C24A3A" />
            </div>

            <div className="rounded-xl border border-[#E8E8E3] bg-[#FAFAF8] px-4 py-3 text-[13px] leading-snug text-[#3a3a36]">
              “{p.quote}”
            </div>

            <div className="flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[#E8E8E3] bg-[#FAFAF8] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#6F6F6A]"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
    </LocalizedContent>
  );
}

function Row({ label, value, dot }: { label: string; value: string; dot: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
        <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">{label}</span>
      </div>
      <div className="text-[13px] leading-snug text-[#3a3a36]">{value}</div>
    </div>
  );
}
