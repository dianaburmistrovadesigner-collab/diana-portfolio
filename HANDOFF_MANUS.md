# Handoff to Manus — Diana Portfolio Site

**Canonical folder:** `diana-portfolio-site-2026-06-11_17-51`  
**Archive (do not edit):** `diana-portfolio-site-2026-06-10_17-08`  
**Design reference:** `docs/PORTFOLIO_STYLE.md`  
**Content reference (RU/EN):** `content-export/*.md`  
**Last zip:** `diana-portfolio-site-2026-05-19.zip` (same parent folder)

---

## Status snapshot — 2026-05-19

### Done (ready for deploy)

| Area | Status |
|------|--------|
| **Build** | `npm run build` passes |
| **Pages** | Home, Cases, About, **Updates**, 4 case studies |
| **Routing** | Hash routes EN + RU (`#/`, `#/ru`, `#/work`, `#/about`, `#/updates`, `#/case/…`) |
| **i18n shell** | Nav, footer, Home, Work, About, project cards — EN + RU |
| **Language switcher** | Header EN/RU, locale synced with hash |
| **Contacts** | Footer: LinkedIn → Telegram → email; socials: Contra · Medium · Layers |
| **Primary CTA** | LinkedIn (black button) in header, hero, home contact block |
| **Home contact** | LinkedIn + Contra only (no email) |
| **About social block** | Contra · Medium · Layers (not duplicate contacts) |
| **Case order** | AmigoChat → AI/ML API → Overchat → Strevolut |
| **Updates page** | One real entry (portfolio v1) + subscribe form (pending backend) |
| **CV** | `public/Diana_Burmistrova_Resume.pdf` |
| **Cover images** | `public/images/covers/*.png` |

### URL cheat sheet

| Page | EN | RU |
|------|----|----|
| Home | `#/` | `#/ru` |
| Cases | `#/work` | `#/ru/work` |
| About | `#/about` | `#/ru/about` |
| Updates | `#/updates` | `#/ru/updates` |
| Case | `#/case/amigochat` | `#/ru/case/amigochat` |

---

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000 (or 3001 if 3000 busy)
```

```bash
npm run build
```

---

## Still open (Manus / later)

### 1. Case study body — RU not translated

Shell (nav/footer) switches locale; **case page content is still EN only**.  
Use `content-export/CASE-*.md` and archive RU strings where available.

### 2. Images / placeholders

| Location | Status |
|----------|--------|
| About — portrait | Placeholder “DB” block |
| Strevolut — spacing, Token reMapper | Reuses other frames |
| Overchat — before/after pairs | Partial (micro-flow #1 wired) |
| Overchat — 26-screen carousel | 14 screens in `case-images.ts` |
| AmigoChat — research blocks | Many assets in `src/imports/` — not all wired |
| NDA case library | Text only, no thumbnails |

### 3. Newsletter subscribe

Form UI on `#/updates`. Backend not connected.  
Set env when ready:

```
VITE_NEWSLETTER_FORM_ACTION=https://formspree.io/f/your-id
```

Until then, form shows “coming soon” message.

### 4. Production routing

Currently **hash routing**. For SEO / clean URLs consider path routing + `/ru/` prefix on deploy host.

### 5. Visual polish

See `docs/PORTFOLIO_STYLE.md` — whitespace, cards, typography refinements.

---

## Key files (recent work)

| File | Role |
|------|------|
| `src/app/lib/routing.ts` | Routes + locale in hash |
| `src/app/lib/locale.tsx` | Context, `t()`, `href()` |
| `src/app/lib/i18n/*.ts` | Page copy EN/RU |
| `src/app/lib/site-config.ts` | URLs, newsletter env |
| `src/app/lib/i18n/updates.ts` | Updates timeline entries |
| `src/app/pages/updates-page.tsx` | Updates page |
| `src/app/components/case-footer.tsx` | Contact + social footer |

**Add update entry:** edit `entries` in `src/app/lib/i18n/updates.ts`.

---

## Zip for upload

Exclude `node_modules`, `dist`, `.DS_Store`:

```bash
cd "…/diana-portfolio-site-2026-06-11_17-51"
zip -r ../diana-portfolio-site-2026-05-19.zip . \
  -x "node_modules/*" -x "dist/*" -x ".DS_Store" -x "**/.DS_Store"
```

After upload: `npm install && npm run build`, then deploy `dist/`.

---

## Open questions for Diana

1. Deploy URL — same dianafolio subdomain or new?
2. RU case pages — full translation in v1 or later?
3. Newsletter — Formspree, ConvertKit, or other?
4. About portrait — which photo file to use?
