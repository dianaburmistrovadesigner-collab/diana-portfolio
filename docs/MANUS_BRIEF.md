# Brief for Manus — Diana Portfolio (2026-05-19)

Copy-paste blocks below as separate tasks.  
Canonical project: `diana-portfolio-site-2026-06-11_17-51`  
Zip: `diana-portfolio-site-2026-05-19.zip`

---

## Task 1 — Review Russian case study pages (RU draft done in Cursor)

### Context

**Cursor already wired RU for all pages.** Manus = review + polish, not full rewrite.

| Layer | Files |
|-------|-------|
| Shell (nav, home, work, about, updates) | `src/app/lib/i18n/*.ts`, `strings.ts` |
| Case body auto-translate | `LocalizedContent` + `translations-ru.json` (~1270 pairs from archive) + `supplemental-ru.ts` |
| Dynamic strings (arrays, props) | `tc()` in pages; `FigmaLinkLabel` / `VisualTrailer` |
| NDA list on Work | `getNdaCases(locale)` in `nda-cases.ts` |

### What to check

1. Open each RU URL — scan for **leftover English** (especially data arrays, carousel screen titles, new Figma Make copy not in archive map)
2. Fix wording **by meaning** — reference `content-export/CASE-*.md`, archive `diana-portfolio-site-2026-06-10_17-08`
3. Add missing pairs to `supplemental-ru.ts` (preferred for short site-only strings) or `translations-ru.json`
4. Do **not** duplicate pages (`case-amigochat-ru.tsx`)

### URLs

| Case | EN | RU |
|------|----|----|
| AmigoChat | `#/case/amigochat` | `#/ru/case/amigochat` |
| AI/ML API | `#/case/aimlapi` | `#/ru/case/aimlapi` |
| Overchat | `#/case/overchat` | `#/ru/case/overchat` |
| Strevolut | `#/case/strevolut` | `#/ru/case/strevolut` |

### Acceptance

- EN/RU switch on any page → copy changes; layout and images identical
- No broken hash links when switching language mid-case
- `npm run build` passes

---

## Task 2 — About page portrait

Replace placeholder block on About (`src/app/pages/about-page.tsx` — “DB” circle).

Look for portrait in `src/imports/` (e.g. `Diana_Burmistrova___Product_Designer.png` or similar).  
Use `ImageWithFallback` or `<img>` with same rounded card styling as the current portrait frame.

---

## Task 3 — Newsletter on Updates page

### Context

`#/updates` has email form (`src/app/components/subscribe-form.tsx`).  
If `VITE_NEWSLETTER_FORM_ACTION` is empty → shows “coming soon” message.

### What to do

1. Create Formspree form (or ConvertKit / Buttondown — Diana’s choice)
2. Add to project root `.env` (and `.env.example` without secret):

   ```
   VITE_NEWSLETTER_FORM_ACTION=https://formspree.io/f/xxxxxxxx
   ```

3. Formspree: enable Accept JSON; field name `email` (already sent in POST body)
4. On success → existing green success message; on error → existing error copy
5. Rebuild and deploy

### Optional

- Double opt-in in Formspree settings
- Add honeypot field if spam appears

---

## Task 4 — Hash routing vs path URLs (production)

### Plain explanation

**Now:** links look like `https://site.com/#/case/overchat`  
The part after `#` is handled in the browser only — server always returns the same `index.html`.

**For production you can:**

| Option | URLs | Pros | Cons |
|--------|------|------|------|
| **A. Keep hash** | `#/work`, `#/ru/about` | Zero server config; works on any static host | Ugly URLs; worse SEO; sharing sometimes drops hash |
| **B. Path routing** | `/work`, `/ru/about` | Clean URLs; better SEO; matches `#/ru` mental model | Host must rewrite all paths → `index.html` (Vercel/Netlify: easy) |

**Recommendation:** Option B on Manus/Vercel/Netlify if Diana wants `dianafolio.com/work` instead of `dianafolio.com/#/work`.

### If migrating to path routing

1. Replace hash router in `App.tsx` with React Router (already in `package.json`) **or** configure host SPA fallback and map paths
2. Map routes: `/`, `/work`, `/about`, `/updates`, `/case/:slug`, `/ru`, `/ru/work`, …
3. Update `localizeHash` → path helpers in `src/app/lib/routing.ts`
4. Update all `href("#/…")` in nav/cards to path URLs
5. **301 redirects** from old `#/…` bookmarks if any were shared (optional)

### If keeping hash (acceptable for v1)

- Deploy `dist/` as static site
- No extra server rules
- Document that shared links must include full hash

Diana does not need to decide now — both work. Path routing is polish for launch, not a blocker.

---

## Images — status (for Manus, no big re-export needed)

Diana already provided assets; most are wired in `src/app/assets/case-images.ts`:

| Case | Wired |
|------|-------|
| Overchat | Hero, micro-flow #1, **6× before/after**, **26-screen carousel** |
| AmigoChat | Hero, 8 showcase screens, survey + personas (React components) |
| AI/ML API | Hero, 6 showcase screens, research blocks |
| Strevolut | **9 frames** in `src/imports/strevolut-screens/str-*.png` — exported from Figma kit (2026-06-11) |

**Optional polish:**

- Strevolut → **Token reMapper** (`str-008`) — currently Design workflow doc page; replace with real plugin UI screenshot when available
- Strevolut → crop **EN-only** from Section exports if bilingual frames feel too wide on site

NDA library on Work page: text only, no thumbnails — optional later.
