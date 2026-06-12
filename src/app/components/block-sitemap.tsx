import { LocalizedContent } from "./localized-content";
const ACCENT = "#0E9488";

type NavItem = {
  label: string;
  isNew?: boolean;
  children?: string[];
};

const primary: NavItem[] = [
  { label: "Dashboard", children: ["Cost Calculator", "Recommendations", "Activity feed"] },
  { label: "Playground", children: ["Single model", "Compare mode", "Saved runs"] },
  { label: "Templates", isNew: true, children: ["By Industry", "By Complexity", "Featured"] },
  { label: "Constructor", isNew: true, children: ["Visual builder", "Blocks library", "Publish"] },
  { label: "Models", isNew: true, children: ["Compare", "Search", "Pricing"] },
  { label: "API Keys", children: ["Named keys", "Limits", "Alerts"] },
  { label: "Analytics", children: ["By Output type", "By Project", "Anomalies"] },
  { label: "Plans" },
  { label: "Billing", children: ["Invoices", "Payment methods"] },
];

const quickLinks = ["Business Tools", "Project Manager", "ROI Calculator"];
const modes = ["Beginner", "Business", "Expert"];

export function BlockSitemap() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-10 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
          Information architecture · Sitemap
        </div>
        <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
          Reorganizing the product around real user mental models
        </h2>
        <p className="mt-2 text-[14px] text-[#6F6F6A]">
          A flatter primary navigation, three new top-level sections, and a parallel quick-links
          branch for non-technical roles.
        </p>
      </header>

      {/* Tree */}
      <div className="flex flex-col items-center">
        {/* Root */}
        <RootNode />

        {/* Vertical line down from root */}
        <Trunk />

        {/* Two branches header */}
        <div className="relative w-full">
          {/* Horizontal connector spanning the two parents */}
          <div className="mx-auto h-px max-w-[820px] bg-[#DEDED8]" />
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 pt-0 md:grid-cols-[1fr_360px]">
            {/* Primary nav branch */}
            <div className="flex flex-col items-center">
              <DropLine />
              <BranchHeader label="Primary Navigation" sub="9 sections" />
              <DropLine />
              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {primary.map((item) => (
                  <NavCard key={item.label} item={item} />
                ))}
              </div>
            </div>

            {/* Quick links branch */}
            <div className="flex flex-col items-center">
              <DropLine />
              <BranchHeader label="Quick Links" sub="3 shortcuts" />
              <DropLine />
              <div className="flex w-full flex-col gap-3">
                {quickLinks.map((q) => (
                  <NavCard key={q} item={{ label: q }} compact />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mode pills */}
      <div className="mt-12">
        <div className="mb-3 flex items-baseline justify-between">
          <h3 className="text-[16px] text-[#050505]">Role-based modes</h3>
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">
            Same sitemap · three reading levels
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {modes.map((m, i) => (
            <div
              key={m}
              className="flex items-center gap-3 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-5 py-3"
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] text-white"
                style={{ background: i === 1 ? ACCENT : "#111" }}
              >
                {i + 1}
              </span>
              <span className="text-[13px] text-[#050505]">{m} Mode</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </LocalizedContent>
  );
}

function RootNode() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl bg-[#0a0a0a] px-6 py-4 text-white">
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: ACCENT }}
      />
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/55">Root</div>
        <div className="text-[15px]">AIMLAPI Web App</div>
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

function BranchHeader({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#E8E8E3] bg-white px-4 py-1.5">
      <span className="text-[12px] text-[#050505]">{label}</span>
      <span className="text-[10px] uppercase tracking-[0.12em] text-[#8A8A84]">{sub}</span>
    </div>
  );
}

function NavCard({ item, compact = false }: { item: NavItem; compact?: boolean }) {
  return (
    <div
      className={
        "rounded-2xl border border-[#E8E8E3] bg-white " +
        (compact ? "px-4 py-3" : "p-4")
      }
    >
      <div className="flex items-center justify-between gap-2">
        <div className="text-[13px] leading-snug text-[#050505]">{item.label}</div>
        {item.isNew && (
          <span
            className="rounded-full px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-white"
            style={{ background: ACCENT }}
          >
            New
          </span>
        )}
      </div>
      {item.children && item.children.length > 0 && (
        <ul className="mt-3 flex flex-col gap-1.5 border-t border-[#EFEFEA] pt-3">
          {item.children.map((c) => (
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
