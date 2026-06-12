# Overchat AI — Data-Driven UX

URL: `/case-overchat` · `/ru/case-overchat`

**Бейджи:** Case Study · 2025–2026

---

## Hero

**Заголовок:** Overchat AI

### RU

**Подзаголовок:** Аудит Overchat (Hotjar, QA) → 10 микрофлоу с wireframes → единый hi-fi сценарий (26 экранов) как приоритет v1: максимум пользы при минимуме затрат на разработку.

**Вводный текст:** Улучшение AI super-app через аналитику Hotjar. 65 сессий записано, 18 разобрано вглубь, 10 критичных микросценариев выявлено и переработано в 26 hi-fi экранов.

### EN

**Subtitle:** Research-led redesign of Overchat's web app — from Hotjar replays and hands-on QA to hi-fi concept UI for home, unified tool chat, and Discover.

**Intro:** Improving an AI super-app experience through Hotjar analytics. 65 sessions recorded, 18 deep-reviewed, 10 critical micro-scenarios identified and redesigned into 26 hi-fi screens.

### Метрики

| Значение | Метка |
|----------|-------|
| 65 | Sessions Recorded |
| **18** | Deep-reviewed |
| 20+ | Competitors Studied |
| 10 | Micro-scenarios |
| 26 | Hi-fi Screens |

---

## 01 · Project Overview / Обзор проекта

### EN

Overchat is an AI super-app that aggregates multiple AI tools — chat, image generation, video creation, media editing, audio, and more — under one interface with a credit-based monetization model.

The product was experiencing high trial-user drop-off, low conversion rates, and frequent task abandonment during content generation. The goal was to analyze real user behavior through Hotjar recordings and redesign the most problematic interaction flows.

Concept hi-fi mocks 001–026; full research breadth in micro-flow wireframes on Figma.

### RU

Overchat — AI super-app, агрегатор AI-инструментов (чат, генерация изображений, видео, редактирование, аудио и др.) с кредитной монетизацией. Каждое AI-действие тратит кредиты.

Провела аудит Overchat: Hotjar, аналитика, ручной QA. Собрала трение в 10 микросценариев и wireframe-правки по всей поверхности продукта. Единый сценарий на 26 hi-fi экранов — не все рекомендации сразу, а приоритет, который я как дизайнер советую на первую итерацию: максимум пользы для пользователя при минимуме затрат разработки и бюджета.

Полный охват — в микрофлоу и Figma-доске; сквозная история — в hi-fi. Концепт-кейс, не заказная работа.

| | |
|---|---|
| **Роль / Role** | Product Designer |
| **Сроки / Timeline** | 4 недели / 4 weeks |
| **Методы / Methods** | Hotjar, Competitive Analysis, User Flows, Wireframing, Hi-fi |

---

## 02 · Research Process / Исследование

### Этапы процесса

| # | EN | RU | Описание EN | Описание RU |
|---|----|----|-------------|-------------|
| 1 | Inputs | Входные данные | Product context, marketer usage stats, competitor patterns | Контекст продукта, статистика маркетинга, паттерны конкурентов |
| 2 | Hotjar | Hotjar | 65 replays → 20 selected → 18 deep-reviewed with Loom timestamps | 65 записей → 20 отобрано → 18 разобрано вглубь с таймкодами в Loom |
| 3 | Synthesis | Синтез | Issue matrix → 10 micro-scenarios with critical UX failures | Матрица проблем → 10 микросценариев с критичными UX-провалами |
| 4 | Heatmaps | Хитмапы | Problem screens: home, paywall, catalog | Проблемные экраны: главная, paywall, каталог |
| 5 | QA | QA | Hands-on: Image Combiner gaps, follow-up, prompt recovery | Ручной QA: пробелы Image Combiner, follow-up, восстановление промпта |
| 6 | Wireframes | Wireframes | 10 micro-flows: Before stickers + After wireframes with Fix/Why | 10 микрофлоу: стикеры Before + wireframes After с Fix/Why |
| 7 | Hi-fi | Hi-fi | 26 screens — unified scenario, designer-prioritized v1 | 26 экранов — единый сценарий, приоритет дизайнера на v1 |
| 8 | Validation | Валидация | Metrics to track in GA4/Hotjar if shipped | Метрики для отслеживания в GA4/Hotjar при внедрении |

### Hotjar Session Selection / Отбор сессий Hotjar

**EN:** 65 replays in Hotjar over 30 days on /web/. Selected 20 sessions for analysis (not random), then deep-reviewed 18 with timestamped Loom notes.

**RU:** В Hotjar за 30 дней — 65 replays на /web/. Для анализа отобрала 20 сессий (не случайную выборку), затем 18 из них разобрала вглубь с таймкодами и скриншотами.

**Критерии отбора:**

- Аномалии — супер-активность (1000+ кликов), очень долгая сессия (до 113 мин), быстрый уход (<1 мин)
- Сигналы трения — много кликов за короткое время (rage clicks), мало кликов при долгом времени (застрял)
- Разброс engagement: High / Moderate / Low / Very Low — и фрустрация, и редкие успешные паттерны
- География — US, EU, LATAM и др., не один рынок
- Пересечение с гипотезами маркетинга: home как вход, paywall на combine-images, скрытый баланс

*18 сессий с таймкодами покрывают 10 микрофлоу кейса; 2 из 20 — без полного Loom-разбора.*

---

## 03 · Findings & Solutions / Находки и решения

**Вводный текст (RU):** Из трения в продакшне и Hotjar — к единому сценарию на 26 экранов: одна непрерывная история от первого визита до подписки, вместо разрозненных поверхностей.

**Вводный текст (EN):** From prod friction and Hotjar evidence to one unified 26-screen story — a continuous journey from first visit to subscription, instead of disconnected surfaces.

---

### 1. Smart Tool Discovery / Понятный поиск инструментов

**Severity:** High · Путаница при поиске инструментов

**Before:**
- Home pushed «chat with AI» instead of task-first entry
- Popular tools hidden in 'More' category
- Discover — flat scroll, no categories or intent structure

**After:**
- **Task-first home** — «What would you like to create?» + mode carousel Image · Video · Edit · Audio · Study
- **Featured apps with prices** — preview and credit cost before selection
- **Discover by intent** — quick-filter chips, inline-play on hover, Start from scratch catalog

---

### 2. Auth & Draft Retention / Авторизация и сохранение черновика

**Severity:** Critical · Цикл трения с платным доступом

**Before:**
- Auth and paywall interrupt typing
- Prompts and refs wiped after sign-up; price jumped 25 → 200
- No value shown before payment — users abandon after emotional investment

**After:**
- **Soft gate — auth on Send only** — prompt, refs and model selection preserved through sign-up
- **50 free credits upfront** — users experience the full flow before paying
- **Continue creating** — return to the same generation after payment, not home

---

### 3. Cost Before Action / Цена до действия

**Severity:** High · Непрозрачность стоимости кредитов

**Before:**
- Credit cost revealed only at generation step
- Paywall triggered even when credits on balance
- No running balance — unclear what is Have / Need / Missing

**After:**
- **Cost on Send** — price visible before committing to generation
- **Balance in header** — always visible after sign-up
- **Paywall when funds are low** — Need · Have · Missing breakdown, not a surprise wall

---

### 4. Unified Tool Chat / Единый tool-chat

**Severity:** High · Провал итераций

**Before:**
- Two tool UIs — home circle vs catalog popup, learn twice
- Follow-up requires re-uploading two files
- Closing tool chat erases prompts and thread context

**After:**
- **One unified tool-chat** — guest → auth → Pro — learn once, reuse everywhere
- **Follow-up without re-attach** — system keeps sources and latest result
- **History reopens full thread** — every prompt recoverable, not just the file

---

### 5. Paywall Transparency / Прозрачный paywall

**Severity:** Critical · Непрозрачный paywall

**Before:**
- Surprise paywall with no math
- After payment — back to home, not the same task
- One payment path when Subscribe vs Top-up would fit better

**After:**
- **Two-stage paywall** — Subscribe for new users, Top-up packs for active Pro
- **Need · Have · Missing** — transparent breakdown before checkout
- **Success → same generation** — no dead-end after payment

---

### 6. Proactive Assistant / Проактивный ассистент

**Severity:** High · Нет подсказок следующего шага

**Before:**
- No suggestions after a result — user doesn't know what to do next
- Chat doesn't route requests to relevant tools
- Blank canvas anxiety on first visit

**After:**
- **Next-step chips** — Edit · Variations · Combine suggested for every result
- **Chat routing to tools** — AI suggests relevant tools for the request
- **Prompt examples + Recently created** — proven scenarios on home, higher engagement in Hotjar

---

### 7. Subscription Clarity / Понятная подписка

**Severity:** Medium · Непрозрачная подписка

**Before:**
- Unclear plan status — active, ending, or lapsed
- Cancel / resubscribe / expiry dates hard to find
- No single place to see renews · credits left

**After:**
- **Settings · one panel** — active plan, ending date, lapsed state in one place
- **Renews · credits left · Cancel** — transparent subscription management
- **Resubscribe on expiry** — win-back path for lapsed Pro (screen 026)

---

## 04 · Competitive Analysis / Конкурентный анализ

### Direct

| Product | Model |
|---------|-------|
| ChatGPT | Subscription |
| Claude | Subscription |
| Gemini | Freemium |
| Poe | Credits |
| TypingMind | License |
| AiZolo | Credits |

### Indirect

| Product | Model |
|---------|-------|
| Notion AI | Add-on |
| Zapier | Subscription |
| Motion | Subscription |
| Midjourney | Subscription |
| Runway | Credits |
| ElevenLabs | Credits |

### Substitutes

| Product | Model |
|---------|-------|
| Sintra AI | AI Employees |
| Genspark | AI Search |
| Perplexity | AI Search |
| Manus | AI Agent |
| v0.dev | AI Prototyping |
| Canva AI | Freemium |

### Insights

**Monetization Trend:** Credit-based models (like Overchat) are common among multi-tool AI platforms, but leaders like ChatGPT use flat subscriptions — reducing per-action anxiety.

**Paywall Best Practice:** Top competitors show watermarked previews or low-res results before paywall, letting users see value before paying. Overchat showed nothing.

**Onboarding Pattern:** Successful platforms guide users to a "first win" within 60 seconds. Overchat's trial flow required 4+ steps before any result.

---

## 05 · Solution Search / Поиск решения

Микросценарии · wireframes: prod Before со стикерами проблем и After с Fix/Why. Ниже — один пример; все 10 микрофлоу — в Figma.

### Micro-flow #1 · Image Combiner paywall

**Проблема:** Free user with credits on balance — unexpected paywall, price jump after auth, upload reset on mobile

**RU:** Бесплатный пользователь с кредитами на балансе — неожиданный paywall, скачок цены после авторизации, сброс загрузок на mobile

**Figma (все микрофлоу):** https://www.figma.com/design/CyhMpmspezxmFPhIXh3KO2/2026---Overchat--Hotjar-?node-id=290-54485

*10 micro-flows · Before · stickers · wireframes · Fix/Why*

---

## 05b · Before & After

Шесть ключевых пар: продакшн-скриншот (Before) и концепт из Figma (After). Одна задача пользователя — разный результат.

### A · Quick access to generation / Быстрый доступ к генерации

Home is a single entry point for any content — prompt examples, featured apps and tasks, trending and new models. Blocks adapt to the selected mode and surface scenarios matched to the user's goal.

### B · One input pattern for every tool / Единый инпут для всех инструментов

The same composer across tools — users learn once and carry habits everywhere, with less cognitive load. One pattern is also cheaper to build, extend, and maintain for product and engineering.

### C · A clearer catalog structure / Улучшение структуры каталога

When featured picks on home are not enough, Discover offers more examples and tools — with filters and categories to find the right app or prompt faster.

### D · All tools in one place / Быстрый доступ ко всем инструментам

Instead of hopping between Image Generator, Video Generator, and Discover more — hunting in each for the right tool — one Discover entry covers any task.

### E · Shorter path to popular tools / Сокращаем путь к популярным инструментам

Image and video generation used to mean a deep catalog hunt. Popular native tools now live in the sidebar — pin any other frequent one. Inside each tool, light prompt examples let you try a proven scenario instead of starting from scratch.

### F · Unified history & recent on home / Единая история и недавние на главной

One chronological history for images, video, and chats — each thread shows a tool icon or the latest generation preview. Media you need again is one tap away in Recently created on home.

**Figma (полный концепт):** https://www.figma.com/design/CyhMpmspezxmFPhIXh3KO2/2026---Overchat--Hotjar-?node-id=2003-11648

---

## 06 · After · Concept UI (26 screens)

Эти 26 экранов — не полный список всех рекомендаций из wireframes. Отобрано в единый сценарий только то, что даёт максимум пользы при минимуме ресурсов разработки на первую итерацию.

| # | Title EN | Title RU | Caption EN |
|---|----------|----------|------------|
| 001 | Home · guest | Главная · гость | Multiple ways to start: chat, mode chips, featured apps with cost |
| 002 | Home · Image mode | Главная · режим Image | Mode chip switches composer to image settings |
| 003 | Image Combiner · setup | Image Combiner · настройка | Unified tool chat: two refs, prompt, cost on Send |
| 004 | Combiner · refs filled | Combiner · ref заполнены | Featured tool pre-fills tags and attachments |
| 005 | Sign up on Send | Регистрация на Send | Auth at peak intent; draft + refs saved |
| 006 | Thread started | Тред создан | History entry; context kept after auth |
| 007 | Generating | Генерация | Loading inside the same tool thread |
| 008 | First result | Первый результат | Default prompt · photorealistic output |
| 009 | Follow-up edit | Follow-up правка | Text-only — no re-upload of two files |
| 010 | Discover · Image | Discover · Image | Outcome-based browse while generation runs |
| 011 | Discover · filters | Discover · фильтры | Structured catalog — not flat model circles |
| 012 | Start from scratch | Start from scratch | Full image model catalog for open-ended work |
| 013 | Discover · browse | Discover · обзор | Mixed exploration without losing home context |
| 014 | Generate Video | Generate Video | Native video tool with examples and cost on Send |
| 015 | Home · Recently created | Главная · Recently created | New outputs visible on home |
| 016 | Recently · hover actions | Recently · действия по hover | Quick path to reuse as reference |
| 017 | View assets | View assets | Home → library shortcut |
| 018 | Subscribe | Подписка | Need/Have/Missing context + plan picker |
| 019 | Subscription success | Подписка оформлена | Continue creating — return to generation |
| 020 | Home · music prompt | Главная · музыкальный промпт | Post-subscription home with balance visible |
| 021 | Chat · routing to tools | Чат · маршрутизация к инструментам | AI suggests relevant video tools for audio request |
| 022 | AI Stadium Trend · entry | AI Stadium Trend · вход | Tool-chat with carousel, cost on Send |
| 023 | Stadium · result + follow-up | Stadium · результат + follow-up | Follow-up edit; balance dropped — triggers top-up |
| 024 | Top-up credits | Пополнение кредитов | Need/Have/Missing + packs; valid 1 year |
| 025 | Settings · active plan | Настройки · активный план | Renews · credits left · cancel |
| 026 | Settings · plan ending | Настройки · план заканчивается | Ends on date · Resubscribe (finale) |

---

## 07 · Outcome / Итог

**RU:** Если внедрить эти правки, ожидаем сдвиг по ключевым продуктовым метрикам — не гарантия, а гипотезы, вытекающие из того, что видели в Hotjar.

**EN:** If these changes ship, we'd expect movement on core product metrics — not guaranteed outcomes, but design hypotheses tied to what we saw in Hotjar.

### Ожидаемые эффекты

1. Быстрее путь до первой генерации — task-first главная, популярные инструменты и Discover по задаче должны сократить time-to-first-action
2. Меньше уходов с сайта на полпути — авторизация на Send, сохранение черновика и бесплатные кредиты должны снизить отток на регистрации и paywall
3. Больше генераций за сессию — единый tool-chat, follow-up без перезагрузки и примеры промптов должны убрать трение итераций
4. Выше конверсия в подписку и докупку кредитов — прозрачная цена (на Send, Need · Have · Missing) должна снизить недоверие перед оплатой
5. Активнее повторное использование — единая история, Recently created и возврат к генерации после оплаты должны поднять retention и возвраты

### Ссылки

- **Концепт UI в Figma:** https://www.figma.com/design/CyhMpmspezxmFPhIXh3KO2/2026---Overchat--Hotjar-?node-id=2003-11648
- **Доска исследования в Figma:** https://www.figma.com/design/CyhMpmspezxmFPhIXh3KO2/2026---Overchat--Hotjar-?node-id=290-54485
