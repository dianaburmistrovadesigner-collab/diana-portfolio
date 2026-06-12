import { LocalizedContent } from "./localized-content";
import { FigmaLinkLabel, FigmaWireframesLabel } from "./figma-labels";
import { amigoFigmaLinks } from "../lib/case-figma-links";

const ACCENT = "#0E9488";

/* ---------------------------------------------------------------- IA */

const levels = [
  {
    level: "Level 1",
    name: "Global navigation",
    desc: "Workspace switcher — top-level container shared across teams.",
    items: ["Workspace switcher", "User menu", "Global search"],
    tone: "#6366f1",
  },
  {
    level: "Level 2",
    name: "Main navigation (sidebar)",
    desc: "Project-scoped tools the user lives in day-to-day.",
    items: [
      "Project home / dashboard",
      "Thread-based workspaces",
      "Templates library",
      "AI Brain",
      "Personal AI Assistant",
      "Specialized assistants",
    ],
    tone: ACCENT,
  },
  {
    level: "Level 3",
    name: "Contextual navigation",
    desc: "Pickers inside a chat — model, personality, assistant.",
    items: ["Model selector", "Personality selector", "Assistant selector"],
    tone: "#f97316",
  },
];

const labeling = [
  ["Workspace", "Slack / Notion standard."],
  ["Project", "Per-client mental model."],
  ["AI Brain", "Central intelligence metaphor."],
];

export function AmigoIa() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Information architecture · Card sorting
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
            From unsorted cards to a hybrid mental model
          </h2>
          <p className="mt-2 text-[14px] text-[#6F6F6A]">
            Card sorting with users revealed three natural levels of navigation and a labeling
            system that holds both Maya's quick-start expectations and Alex's organize-by-client
            mental model.
          </p>
        </div>
        <a
          href={amigoFigmaLinks.ia}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </header>

      <div className="grid gap-3 md:grid-cols-3">
        {levels.map((l) => (
          <div key={l.level} className="rounded-2xl border border-[#E8E8E3] bg-white p-5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: l.tone }} />
              <span
                className="text-[11px] uppercase tracking-[0.12em]"
                style={{ color: l.tone }}
              >
                {l.level} · {l.name}
              </span>
            </div>
            <p className="mt-2 text-[12.5px] leading-snug text-[#6F6F6A]">{l.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-[#EFEFEA] pt-3">
              {l.items.map((it) => (
                <span
                  key={it}
                  className="rounded-md border border-[#E8E8E3] bg-[#FAFAF8] px-2 py-1 text-[11.5px] text-[#3a3a36]"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
          Key labels
        </span>
        {labeling.map(([term, why]) => (
          <span
            key={term}
            className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[12px] text-[#3a3a36]"
          >
            <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#050505]">
              {term}
            </span>
            <span className="text-[#8A8A84]">— {why}</span>
          </span>
        ))}
      </div>
    </section>
    </LocalizedContent>
  );
}

/* ----------------------------------------------------------- Sitemap */

type Branch = {
  label: string;
  sub: string;
  tone: "public" | "auth" | "app";
  items: { label: string; children?: string[] }[];
};

const branches: Branch[] = [
  {
    label: "Public",
    sub: "Marketing surface",
    tone: "public",
    items: [{ label: "Home" }, { label: "Pricing" }, { label: "About" }],
  },
  {
    label: "Authentication",
    sub: "Sign in / sign up",
    tone: "auth",
    items: [{ label: "Sign in (Google)" }, { label: "Sign in (Apple)" }, { label: "Sign up" }],
  },
  {
    label: "Authenticated app",
    sub: "Workspace → Project → Chat",
    tone: "app",
    items: [
      { label: "Workspace", children: ["Project", "Project · Chat"] },
      { label: "Templates library" },
      { label: "AI Brain" },
      {
        label: "Account settings",
        children: ["User profile", "Billing & subscription", "BYOK setup"],
      },
    ],
  },
];

const toneStyle: Record<Branch["tone"], { bg: string; border: string; text: string }> = {
  public: { bg: "#EEF2FF", border: "#6366f1", text: "#312e81" },
  auth: { bg: "#FFF7ED", border: "#f97316", text: "#7c2d12" },
  app: { bg: "#F0FDF4", border: "#22c55e", text: "#14532d" },
};

export function AmigoSitemap() {
  return (
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Sitemap · Three trees
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
            Three trees branching from the root
          </h2>
          <p className="mt-2 text-[14px] text-[#6F6F6A]">
            Public marketing pages, authentication, and the authenticated app organized around the
            workspace → project → chat hierarchy from card sorting.
          </p>
        </div>
        <a
          href={amigoFigmaLinks.sitemap}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#050505] underline decoration-[#cfcfc8] underline-offset-4 hover:decoration-[#050505]"
        >
          <FigmaLinkLabel suffix=" →" />
        </a>
      </header>

      <div className="flex flex-col items-center">
        <RootNode />
        <Trunk />

        <div className="relative w-full">
          <div className="mx-auto h-px max-w-[920px] bg-[#DEDED8]" />
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 pt-0 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.label} className="flex flex-col items-center">
                <DropLine />
                <BranchHeader label={b.label} sub={b.sub} tone={b.tone} />
                <DropLine />
                <div className="flex w-full flex-col gap-3">
                  {b.items.map((it) => (
                    <NavCard key={it.label} label={it.label} children_={it.children} tone={b.tone} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RootNode() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl bg-[#0a0a0a] px-6 py-4 text-white">
      <span className="h-2 w-2 rounded-full" style={{ background: ACCENT }} />
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/55">Root</div>
        <div className="text-[15px]">AmigoChat web app</div>
      </div>
    </div>
  );
}

function Trunk() {
  return <div className="h-8 w-px bg-[#DEDED8]" />;
}

function DropLine() {
  return <div className="h-6 w-px bg-[#DEDED8]" />;
}

function BranchHeader({ label, sub, tone }: { label: string; sub: string; tone: Branch["tone"] }) {
  const s = toneStyle[tone];
  return (
    <div
      className="inline-flex items-center gap-3 rounded-full border px-4 py-1.5"
      style={{ background: s.bg, borderColor: s.border }}
    >
      <span className="text-[12px]" style={{ color: s.text }}>
        {label}
      </span>
      <span className="text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">{sub}</span>
    </div>
  );
}

function NavCard({
  label,
  children_,
  tone,
}: {
  label: string;
  children_?: string[];
  tone: Branch["tone"];
}) {
  const s = toneStyle[tone];
  return (
    <div className="rounded-2xl border border-[#E8E8E3] bg-white p-4">
      <div className="flex items-center gap-2 text-[13px] leading-snug text-[#050505]">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.border }} />
        {label}
      </div>
      {children_ && children_.length > 0 && (
        <ul className="mt-3 flex flex-col gap-1.5 border-t border-[#EFEFEA] pt-3">
          {children_.map((c) => (
            <li
              key={c}
              className="flex items-center gap-2 text-[11.5px] leading-snug text-[#6F6F6A]"
            >
              <span className="h-1 w-1 rounded-full bg-[#C4C4BE]" />
              {c}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
