import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { amigoFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

type Persona = {
  initial: string;
  name: string;
  archetype: string;
  share: string;
  thinks: string;
  feels: string;
  says: string;
  does: string;
  pains: string[];
  gains: string[];
};

const personas: Persona[] = [
  {
    initial: "M",
    name: "Maya Chen",
    archetype: "The overwhelmed beginner",
    share: "40% of audience",
    thinks: "“Why is this so complicated?”",
    feels: "Inadequate, overwhelmed",
    says: "“I just need something simple.”",
    does: "Tries tools, gives up, asks friends",
    pains: ["Overwhelmed by choice", "Complexity", "Fear of making mistakes"],
    gains: ["Simplicity", "Guidance", "Quick wins"],
  },
  {
    initial: "A",
    name: "Alex Rivera",
    archetype: "The frustrated power user",
    share: "60% of audience",
    thinks: "“I need full control.”",
    feels: "Frustrated, losing control",
    says: "“I'm tired of black boxes.”",
    does: "Builds workarounds, switches constantly",
    pains: ["No client organization", "Loss of context", "Lack of control"],
    gains: ["Power", "Organization", "Transparency"],
  },
];

export function AmigoEmpathy() {
  return (
    <LocalizedContent>
    <figure className="overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8E8E3] bg-[#FAFAF8] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A84]">
            Empathy maps · Maya & Alex
          </span>
        </div>
        <a
          href={amigoFigmaLinks.empathyMap}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </div>

      <div className="grid gap-px bg-[#E8E8E3] lg:grid-cols-2">
        {personas.map((p) => (
          <div key={p.name} className="bg-white p-6">
            {/* Persona header */}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a0a0a] font-mono text-[14px] text-white">
                {p.initial}
              </span>
              <div>
                <div className="text-[16px] text-[#050505]">{p.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">
                  {p.archetype} · {p.share}
                </div>
              </div>
            </div>

            {/* Quadrants */}
            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#E8E8E3] bg-[#E8E8E3]">
              <Quadrant label="Thinks">{p.thinks}</Quadrant>
              <Quadrant label="Feels">{p.feels}</Quadrant>
              <Quadrant label="Says">{p.says}</Quadrant>
              <Quadrant label="Does">{p.does}</Quadrant>
            </div>

            {/* Pains / Gains */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <ChipGroup label="Pains" items={p.pains} tone="#c0524a" />
              <ChipGroup label="Gains" items={p.gains} tone={ACCENT} />
            </div>
          </div>
        ))}
      </div>
    </figure>
    </LocalizedContent>
  );
}

function Quadrant({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8A84]">
        {label}
      </div>
      <div className="mt-1.5 text-[13px] leading-snug text-[#3a3a36]">{children}</div>
    </div>
  );
}

function ChipGroup({ label, items, tone }: { label: string; items: string[]; tone: string }) {
  return (
    <div className="rounded-xl border border-[#E8E8E3] bg-[#FAFAF8] p-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: tone }}>
        {label}
      </div>
      <ul className="mt-2 flex flex-col gap-1.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-[12.5px] leading-snug text-[#3a3a36]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: tone }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
