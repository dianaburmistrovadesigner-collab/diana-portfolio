import { LocalizedContent } from "./localized-content";
import { useState } from "react";

const RED = "#D14B3A";
const GREEN = "#2F9F6F";
const NEUTRAL = "#3a3a36";
const COLLAPSED_COUNT = 4;

type Node = {
  label: string;
  type?: "step" | "decision";
  pain?: string;
  fix?: string;
};

const currentFlow: Node[] = [
  { label: "Land on site" },
  { label: "Browse models" },
  { label: "Open model card" },
  { label: "Open docs" },
  { label: "Sign up" },
  { label: "Read docs", pain: "Documentation quality — drop-off point" },
  { label: "Pricing page?", type: "decision" },
  { label: "Top-up balance" },
  { label: "Check dashboard", pain: "Financial blindness: unclear pricing" },
  { label: "Generate API key" },
  { label: "Share with team", pain: "API key management / team access" },
  { label: "Integrate" },
  { label: "Track usage", pain: "Broken dashboard, no anomaly view" },
  { label: "Debug errors" },
  { label: "Ship to prod" },
];

const redesignedFlow: Node[] = [
  { label: "Land on site" },
  { label: "Pick use-case template", fix: "Templates + one-click deploy" },
  { label: "Coverage estimate", fix: "See what % of MVP it covers" },
  { label: "Sign up" },
  { label: "Cost calculator", fix: "Cost + ROI calculator with forecast" },
  { label: "Need code?", type: "decision" },
  { label: "No-code builder", fix: "No-code builder + ready templates" },
  { label: "Named API keys", fix: "Named keys + limits + alerts" },
  { label: "Invite team", fix: "Roles & team access built-in" },
  { label: "Launch & monitor" },
];

export function BlockFlows() {
  return (
    <LocalizedContent>
    <section className="rounded-[24px] border border-[#E8E8E3] bg-white p-8 md:p-10">
      <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#6F6F6A]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: NEUTRAL }} />
            User flow · Before / After
          </div>
          <h2 className="text-[22px] leading-tight text-[#050505] md:text-[26px]">
            From a 15-step maze to a focused 10-step path
          </h2>
          <p className="mt-2 text-[14px] text-[#6F6F6A]">
            Mapping where users drop off, then redesigning around templates, transparent cost,
            and managed team access.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#6F6F6A]">
          <Legend color={RED} label="Pain point" />
          <Legend color={GREEN} label="Design fix" />
          <Legend color="#0a0a0a" label="Decision" diamond />
        </div>
      </header>

      <FlowsBody />
    </section>
    </LocalizedContent>
  );
}

function FlowsBody() {
  const [expanded, setExpanded] = useState(false);
  const maxHidden = Math.max(
    currentFlow.length - COLLAPSED_COUNT,
    redesignedFlow.length - COLLAPSED_COUNT,
  );

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <Lane
          title="Current flow"
          meta="15 steps · multiple drop-off points"
          accent={RED}
          nodes={currentFlow}
          prefix="S"
          expanded={expanded}
        />
        <Lane
          title="Redesigned flow"
          meta="10 steps · transparent, no-code friendly"
          accent={GREEN}
          nodes={redesignedFlow}
          prefix="R"
          expanded={expanded}
        />
      </div>

      <div className="mt-5 flex justify-center">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-[#E8E8E3] bg-white px-4 py-2 text-[12px] text-[#050505] hover:bg-[#FAFAF8]"
        >
          {expanded ? "Свернуть оба потока" : `Развернуть оба потока · +${maxHidden} шагов`}
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className={"transition-transform " + (expanded ? "rotate-180" : "")}
          >
            <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="#3a3a36" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
    </>
  );
}

function Legend({
  color,
  label,
  diamond,
}: {
  color: string;
  label: string;
  diamond?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={"h-2.5 w-2.5 " + (diamond ? "rotate-45" : "rounded-full")}
        style={{ background: color }}
      />
      {label}
    </span>
  );
}

function Lane({
  title,
  meta,
  accent,
  nodes,
  prefix,
  expanded,
}: {
  title: string;
  meta: string;
  accent: string;
  nodes: Node[];
  prefix: string;
  expanded: boolean;
}) {
  const canCollapse = nodes.length > COLLAPSED_COUNT;
  const visible = expanded || !canCollapse ? nodes : nodes.slice(0, COLLAPSED_COUNT);

  return (
    <div className="flex flex-col rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] p-5">
      <div className="mb-4 flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
          <h3 className="text-[15px] text-[#050505]">{title}</h3>
        </div>
        <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A8A84]">{meta}</span>
      </div>

      <div className="relative">
        <div className="flex flex-col">
          {visible.map((n, i) => (
            <div key={i}>
              <NodeRow node={n} index={i + 1} prefix={prefix} />
              {i < visible.length - 1 && <Connector />}
            </div>
          ))}
        </div>

        {canCollapse && !expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#FAFAF8]" />
        )}
      </div>
    </div>
  );
}

function NodeRow({
  node,
  index,
  prefix,
}: {
  node: Node;
  index: number;
  prefix: string;
}) {
  const isDecision = node.type === "decision";
  const isPain = !!node.pain;
  const isFix = !!node.fix;
  const accent = isPain ? RED : isFix ? GREEN : null;

  return (
    <div className="flex items-stretch gap-3">
      {/* Left rail with number */}
      <div className="flex w-9 shrink-0 flex-col items-center">
        <div
          className={
            "flex h-7 w-7 items-center justify-center text-[10px] " +
            (isDecision
              ? "rotate-45 bg-white text-[#050505]"
              : "rounded-full text-white")
          }
          style={{
            background: isDecision ? undefined : accent ?? "#0a0a0a",
            border: isDecision ? "1.5px solid #0a0a0a" : undefined,
          }}
        >
          <span className={isDecision ? "-rotate-45" : ""}>
            {prefix}
            {index}
          </span>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 pb-0">
        <div
          className="rounded-xl bg-white px-4 py-3"
          style={{
            border: `1px solid ${accent ?? "#E8E8E3"}`,
            boxShadow: accent ? `0 0 0 3px ${accent}14` : undefined,
          }}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-[13px] leading-snug text-[#050505]">{node.label}</div>
            {isDecision && (
              <span className="rounded-full bg-[#0a0a0a] px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-white">
                Decision
              </span>
            )}
          </div>
          {(isPain || isFix) && (
            <div
              className="mt-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] leading-snug text-white"
              style={{ background: accent! }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              {node.pain ?? node.fix}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex w-9 shrink-0 justify-center">
      <svg width="10" height="22" viewBox="0 0 10 22" className="text-[#C4C4BE]">
        <path
          d="M5 0 V18 M2 14 L5 18 L8 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    </div>
  );
}
