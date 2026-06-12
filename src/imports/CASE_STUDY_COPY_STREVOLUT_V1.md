# Strevolut UI Kit — Case Study Copy v1 (Final)

**Источник:** Manus · copy-only · май 2026  
**Канон для:** `/case-strevolut` на портфолио (вёрстка в Cursor после zip сайта)  
**Связано:** [`PROMPT_MANUS_PORTFOLIO_SITE_STREVOLUT_V1.md`](./PROMPT_MANUS_PORTFOLIO_SITE_STREVOLUT_V1.md)

---

## A. Presentation Recommendation

**Recommended section list and nav labels for /case-strevolut:**

| Nav ID | Label | Purpose |
|--------|-------|---------|
| overview | 01 Overview | Hero, subhead, role/timeline/tools, metrics strip |
| problem | 02 Problem | 4 problem cards — why the system was needed |
| approach | 03 Approach | 6-step process timeline |
| foundation | 04 Foundation | Token architecture, semantic layers, topic previews |
| components | 05 Components | Tier ladder (Atoms → Patterns) with example names |
| process-tooling | 06 Tooling | shadcn alignment, plugins, Token reMapper pipeline |
| principles | 07 Principles | 6 rows: insight → system choice |
| in-product | 08 In Product | Bridge to AI/ML API case — proof the system works |
| outcomes | 09 Outcomes | 4 result lines + 1 reflective quote |
| next-steps | 10 Next Steps | 4 bullets of planned work |
| figma-cta | — (footer CTA) | Figma links, not a nav item |

**What belongs on the site vs Figma-only:**

The site page should show the *story* — why, how, what decisions, and proof of application. It should NOT replicate the 75 documentation frames. Those live in Figma and the site links to them. On the site: 8–10 curated screenshots (foundation tokens, a few component docs, one applied product screen), the principles table, and the tier ladder. Everything else is a Figma deep-link.

**3 risks / anti-patterns to avoid:**

1. **Component catalog syndrome** — listing every component with a screenshot turns the page into a Storybook mirror. Boring, no narrative. Instead: show the *decision logic* behind the system.
2. **No proof of use** — a design system without a shipped product feels academic. The AI/ML API bridge section is critical; without it the case reads as "I made tokens."
3. **Over-documenting process** — 6 steps is enough. Don't expand each step into a sub-page. The depth lives in Figma; the site page is a 3-minute read that earns the click to Figma.

---

## B. Page Copy (EN, paste-ready)

### 1. overview

**Hero title:** Strevolut UI Kit

**Subhead:** A design system built from scratch to unify portfolio work and power the AI/ML API redesign — semantic tokens, shadcn/Tailwind alignment, and 75 documentation pages for design-to-code handoff.

**Role / Timeline / Tools:** Product Designer · Design Systems · 2025–2026 (ongoing) · Figma, Figma Variables, React/shadcn reference, custom Figma plugins

---

### 2. problem

**Intro:** Before Strevolut, every new screen started from zero. Four problems made this unsustainable:

| # | Title | Description |
|---|-------|-------------|
| 01 | Fragmented UI | Legacy NUD components, copied shadcn frames, and one-off elements lived in separate files with no shared source of truth. |
| 02 | Token & text-style drift | Colors and typography diverged across files — the same "primary" meant three different hex values depending on which page you opened. |
| 03 | No reusable atoms for speed | Shipping AI/ML API screens required rebuilding buttons, inputs, and cards from scratch every time — slow and inconsistent. |
| 04 | Scattered documentation | Component notes lived in markdown files and Slack threads. No visual doc pages existed for portfolio presentation or developer handoff. |

---

### 3. approach

**Intro:** Six steps from audit to publish — each one feeding the next:

1. **Audit** — Inventoried existing components across portfolio and AI/ML API Figma files; tagged duplicates, drift, and gaps.
2. **Semantic tokens** — Built a 3-layer variable architecture (Primitive → Semantic → Component) aligned to Tailwind's scale.
3. **Component sets (atoms up)** — Designed and documented atoms first, then composed molecules and organisms using only published atoms.
4. **Doc pages (Polaris-style)** — Created 75 visual documentation frames: anatomy, variants, usage guidelines, do/don't examples.
5. **Product migration** — Replaced legacy instances in AI/ML API screens using Token reMapper and batch-swap workflows.
6. **Portfolio publish** — Packaged the system as a case study; exported key frames for the portfolio site.

---

### 4. foundation

**Intro:** The foundation layer defines the raw material every component draws from. Sixteen topics are documented with visual pages in Figma — here are the eight most critical:

**Featured topics:**
- Colors (Primitive + Semantic + Component layers)
- Typography (scale, line-height tokens, responsive)
- Spacing & layout (4px grid, semantic spacing tokens)
- Radius & borders
- Shadows & elevation
- Iconography (Lucide alignment, sizing)
- Motion (duration + easing tokens)
- Breakpoints & responsive rules

---

### 5. components

**Intro:** Components are organized in four tiers. Each tier builds exclusively from the tier below — no skipping layers.

| Tier | Examples |
|------|----------|
| **Atoms** | Button, Input, Badge, Avatar, Toggle, Tooltip |
| **Molecules** | Search field, Dropdown menu, Tabs, Card (base), Alert |
| **Organisms** | Data table, Modal dialog, Tabs panel, Dropdown (complex) |
| **Patterns** | Page header + breadcrumb, Settings form layout, Dashboard grid |

Each component set includes: default + all variants, interactive states, variable modes where implemented, and a linked doc page with anatomy diagram.

---

### 6. process-tooling

**Intro:** The system is designed to stay aligned with code. Key tooling decisions:

- **shadcn/ui as reference** — component APIs, variant naming, and slot structure mirror shadcn so developers can map Figma specs to React props 1:1.
- **Figma Variables (3 layers)** — Primitive (raw values) → Semantic (intent: `color-bg-primary`) → Component (scoped: `button-bg`). Mode switching gives dark theme for free.
- **Token reMapper plugin** — Custom plugin that batch-swaps legacy color styles to semantic variables across 200+ frames in one pass.
- **Doc pages via Figma Make + markdown** — Documentation frames built with Figma Make plugin and structured markdown; anatomy overlays and variant tables composed manually per component.
- **Tailwind token export (planned)** — Variables structured so a future `figma-to-tailwind` export produces a valid `tailwind.config` extension.

---

### 7. in-product

**Intro:** Strevolut is not a standalone gallery — it powers a real product case. The AI/ML API redesign (Dashboard, Playground, Usage analytics, Ask AI) uses Strevolut instances exclusively. Every screen in that case validates the system under real layout pressure.

**Link text:** See how Strevolut components work in a live product → AI/ML API Case Study

---

### 8. principles

**Intro:** Six insights from building the system — each one drove a concrete architectural choice:

| Insight | System Choice |
|---------|---------------|
| Figma and code drift when naming diverges | Code-aligned variant axes — prop names in Figma match React component props |
| Raw hex values create invisible inconsistency | Semantic tokens first — no component references a primitive directly |
| Pretty doc pages ≠ useful handoff | Documentation ≠ marketing — every doc page answers "how do I use this?" not "look how nice" |
| Duplicating a component for one edge case compounds debt | Slots over duplication — composable slots handle edge cases without new components |
| Trying to build everything delays shipping | Pragmatic backlog — charts, date picker, combobox search are documented as "planned" not blocked |
| A system untested on real screens is theory | Validated on real AI/ML screens — every component earned its place by solving an actual layout need |

---

### 9. outcomes

**Intro:** Results after applying Strevolut to the AI/ML API redesign:

- ✓ **60+ component sets** published with full variant coverage and dark-mode support
- ✓ **75 documentation frames** — visual specs ready for portfolio and handoff
- ✓ **AI/ML API screens built significantly faster** — no more rebuilding cards, tables, and inputs from scratch
- ✓ **Single semantic source of truth** — variable architecture prevents "which blue?" conversations

**Quote:** "Building the system felt slow at first — but every AI/ML API screen after that took a fraction of the time. The investment paid for itself within the first case."

---

### 10. next-steps

- Expand component coverage: charts library, date/time picker, combobox with search, advanced data table filters
- Optional: read-only Figma view link for recruiters (TBD)
- Build token export pipeline: Figma Variables → JSON → Tailwind config extension
- Add interaction documentation: micro-animation specs per component (hover, focus, open/close)

---

### 11. figma-cta

**Button label:** Explore the full kit in Figma →

**Link 1 label:** UI Kit — Components & Tokens
**Link 1 URL:** https://www.figma.com/design/qciTUjkoGJgUONnLcZEG9i/%F0%9F%A6%84-Strevolut-UI-KIT

**Link 2 label:** Documentation Index (75 pages)
**Link 2 URL:** https://www.figma.com/design/qciTUjkoGJgUONnLcZEG9i/%F0%9F%A6%84-Strevolut-UI-KIT?node-id=1028-419

**Link 3 label:** Applied in AI/ML API →
**Link 3 URL:** /case-aiml-api

---

## C. Hero Metrics Strip

| Value | Label |
|-------|-------|
| 16 | Foundation topics |
| 59 | Component docs |
| 60+ | Component sets |
| 1 | Applied product case |

---

## D. Image Placeholders for Later

| Filename | Section | Caption |
|----------|---------|---------|
| str-000-index.png | overview (hero) | Documentation index hub — overview of all 75 pages |
| str-001-colors.png | foundation | Color token architecture: Primitive → Semantic → Component layers |
| str-002-typography.png | foundation | Type scale with line-height tokens and responsive rules |
| str-003-spacing.png | foundation | 4px grid system and semantic spacing tokens |
| str-004-atoms.png | components | Atom tier: Button variants, Input states, Badge collection |
| str-005-molecules.png | components | Molecule tier: Search field, Dropdown, Tabs in context |
| str-006-organisms.png | components | Organism tier: Data table with sorting, filters, pagination |
| str-007-doc-page.png | process-tooling | Example documentation frame — anatomy + variants + usage |
| str-008-token-remapper.png | process-tooling | Token reMapper plugin — batch swap in action |
| str-009-aiml-applied.png | in-product | AI/ML API Dashboard built entirely with Strevolut instances |
| str-010-dark-mode.png | foundation | Same component in light and dark mode via variable modes |

---

## E. Resolved

1. **3× faster** → softened to "significantly faster"
2. **Quote** → kept as first-person reflection / lesson-learned callout
3. **Dark mode** → light only on portfolio page, dark mode is a Figma/DS topic only
4. **Component count** → keeping "60+" deliberately (changes as sets are added)
5. **Figma community** → replaced with "Optional: read-only view link for recruiters (TBD)"
6. **"4 Figma files"** → replaced with "across portfolio and AI/ML API Figma files"
7. **Sidebar, Command palette** → replaced with "Modal dialog, Tabs panel, Dropdown (complex)"
8. **"Auto-generates anatomy"** → replaced with accurate "Figma Make + markdown" description
9. **Tailwind export** → moved to "planned" (in next-steps), not presented as existing
10. **"Zero token drift"** → softened to "Single semantic source of truth"
