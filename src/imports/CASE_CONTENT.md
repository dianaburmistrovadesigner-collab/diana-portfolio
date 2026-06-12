# Кейс «Редизайн AI/ML API» — контент новых блоков (после блока «Что показало исследование»)

> Источник правды — девять файлов Notion (01–09). Ниже для каждого блока:
> **A. Готовый текст** (можно копировать прямо на страницу) и
> **B. Промпт для Figma Make** (для визуального артефакта блока).
>
> Структура: блоки идут в том же порядке 01–09, что и файлы Notion.
> Где в Notion стояла пометка «[нужно уточнить]» — я не выдумывал данные, а формулировал осторожно.

---

## Блок 01 — Анализ конкурентов

### A. Текст

**Заголовок:** Анализ конкурентов: где рынок оставил свободное место

**Лид:**
Я изучил 20 игроков рынка AI/ML API — от гигантов вроде OpenAI, Hugging Face и Anthropic до нишевых сервисов (ElevenLabs, Replicate, fal.ai, OpenRouter, Together AI). Цель — понять, как конкуренты себя позиционируют, какие возможности стали отраслевым стандартом, а где остались незакрытые ниши.

**Как конкуренты себя позиционируют:**
В позиционировании доминируют три смысла — «функционально», «профессионально» и «надёжно». Это уже не отличие, а базовое ожидание: чтобы просто войти на рынок, нужно быть надёжным и профессиональным. Реже встречаются «современно» (Replicate, fal.ai, Vercel, xAI) и «просто» (Replicate, OpenRouter, fal.ai). Hugging Face при всей мощи воспринимается как «перегруженный и запутанный».

**Что стало стандартом (must-have):**
- Playground / встроенное тестирование (OpenAI, Mistral, Replicate, OpenRouter, Together AI, Cohere).
- Каталог моделей с поиском и фильтрами (Hugging Face, OpenRouter, fal.ai).
- Аналитика и контроль расходов: лимиты, алерты, экспорт (OpenAI, Anthropic, fal.ai, Together AI).
- Командный доступ и роли, AI-помощник внутри документации, Quick Start и Changelog.

**Явные слабости конкурентов (= наши возможности):**
- Сложная, запутанная навигация (OpenRouter, Fireworks, Hugging Face, Cohere, Eden AI, Mistral).
- Восприятие «только для разработчиков» (Anyscale, Hugging Face, Mistral).
- Непрозрачное ценообразование — «непонятно, сколько в итоге платить» (Replicate, OpenRouter, Together AI, Mistral).

**Вывод (3 инсайта → импликации):**
1. «Надёжно и профессионально» — больше не дифференциатор, а минимум входа. → Держим базовую планку, а отличие строим поверх неё.
2. Свободные ниши: **минимализм**, **оптимизация затрат** и **автоматизация** (умный выбор моделей). → Выигрываем не количеством функций, а тем, *как* они упакованы: чище, дешевле, умнее.
3. Обязательны качество документации, простой онбординг и производительность API; точки роста — упрощение выбора модели и растущий no-code рынок. → Делаем акценты «быстро начать / быстро выбрать / быстро протестировать / собрать из шаблонов».

### B. Промпт для Figma Make

```
Create a competitive analysis visualization for a UX case study, light theme, clean SaaS aesthetic.

Layout: a 2x2 positioning matrix (perceptual map).
- X axis: "For developers only" (left) → "For everyone / no-code friendly" (right)
- Y axis: "Complex / overloaded" (bottom) → "Simple / minimal" (top)
Plot ~12 labeled dots for competitors: OpenAI, Hugging Face, Anthropic, OpenRouter, Replicate, fal.ai, Together AI, Mistral, Cohere, ElevenLabs, Fireworks, Vercel.
Cluster most competitors in the "complex + developer-only" quadrant. Highlight the empty top-right quadrant ("simple + for everyone") with a soft accent fill and a label "Free niche: minimalism, cost optimization, automation".

Below the matrix, add a 3-column comparison strip titled "Must-have baseline":
1) Playground / testing  2) Model catalog with filters  3) Cost analytics & alerts.

Style: 1 primary accent color (teal or blue), neutral grays, white background, max 2 fonts, generous spacing, subtle borders, no gradients. Sans-serif. Make it look like a designer's portfolio diagram.
```

---

## Блок 02 — Целевая аудитория

### A. Текст

**Заголовок:** Для кого мы проектируем: три сегмента, три логики поведения

**Лид:**
Аудитория продукта неоднородна. По брифу ~20% — технические специалисты с высокой интернет-грамотностью (8/10), а ~80% — нетехнические пользователи (грамотность 2/10): владельцы бизнеса, менеджеры проектов, маркетологи, студенты. Это ключевое противоречие всего редизайна.

**Сегмент 1. Beginner users (новички).**
UX/UI-дизайнеры, маркетологи, SMM, фрилансеры, креативные предприниматели. Хотят простые и доступные решения, готовые шаблоны и быстрый результат. Чувствительны к цене, предпочитают freemium, учатся по YouTube. Боятся технической сложности.

**Сегмент 2. Technical experts (эксперты).**
Senior-разработчики, ML-инженеры, DevOps, tech leads. Сначала читают документацию, тестируют через trial, влияют на выбор инструментов в команде. Им важны надёжность и стабильность API, гибкость настроек, прозрачность цен при масштабировании и отсутствие vendor lock-in.

**Сегмент 3. Business users (бизнес).**
VP Product, продакт-менеджеры, Head of Marketing, BizDev. Решения принимают коллективно, требуют доказательства ROI, предпочитают пилоты. Нужны понятные бизнес-кейсы, надёжная поддержка, интеграции и масштабируемость.

**Цепочка принятия решения (из брифа):**
Продакт-менеджер исследует → созванивается с sales → отправляет разработчика для интеграции. Важно: тот, кто *выбирает*, и тот, кто *интегрирует*, — разные люди с разными болями.

**3 персоны:**
- **James Wilson, 38, VP of Product (San Francisco).** Цель — измеримый ROI от AI. Боль — нет технических знаний для оценки решений, давление CEO, непредсказуемые затраты при масштабировании. Цитата: «Мне нужны не крутые AI-фичи, а решения, которые реально улучшат продуктовые метрики».
- **Tom Anderson, 32, Senior Python Developer (Berlin).** Цель — надёжный, хорошо документированный API без vendor lock-in. Боль — плохая документация, нестабильность, медленная поддержка. Цитата: «Я не буду использовать API, пока не изучу документацию и не протестирую на реальных данных».
- **Sofia Chen, 27, Digital Marketing Specialist (Austin).** Цель — автоматизировать рутину без кода. Боль — техническая сложность, ограниченный бюджет, нет структурного обучения. Цитата: «Хочу использовать AI, чтобы тратить меньше времени на рутину и больше — на креатив».

**Вывод:**
У каждого сегмента свой «центр ценности» в интерфейсе: у разработчика — документация, выбор модели, параметры; у менеджера — dashboard, траты, алерты; у team lead — выбор платформы и понимание стоимости. Значит, один и тот же интерфейс воспринимается по-разному → нужны роль-ориентированные точки входа и общая терминология-«мост» между ними.

### B. Промпт для Figma Make

```
Create a target audience / personas board for a UX case study. Light theme, clean, portfolio-quality.

Top: a horizontal split bar showing audience ratio — 20% "Technical experts (internet literacy 8/10)" vs 80% "Non-technical users (literacy 2/10)". Make the 80% block visually dominant.

Below: three persona cards in a row, equal width:
1) James Wilson, 38 — VP of Product. Goal: measurable ROI. Pain: no tech knowledge to evaluate AI, CEO pressure.
2) Tom Anderson, 32 — Senior Python Developer. Goal: reliable, well-documented API, no vendor lock-in. Pain: poor docs, instability.
3) Sofia Chen, 27 — Digital Marketing Specialist. Goal: automate routine, no-code. Pain: technical complexity, limited budget.
Each card: avatar placeholder circle, name + role, one "Goal" line, one "Pain" line, one short quote.

Bottom: a simple decision-flow chip row: "Product Manager researches → calls Sales → sends Developer to integrate".

Style: one accent color, neutral grays, white background, 2 fonts max, rounded cards, soft shadows, no gradients, no emojis.
```

---

## Блок 03 — Генерация идеи и поиск решения

### A. Текст

**Заголовок:** От проблемы к решению: ключевые идеи редизайна

**Ключевая проблема:**
Платформа подключает пользователей к 300+ AI-моделям, но её интерфейс был слишком сложен для людей без технического бэкграунда. Полная информация была спрятана в документации «только для разработчиков», возможности платформы — скрыты, а данные для интеграции приходилось собирать по кускам. Изначальный developer-first дизайн не обслуживал растущую и разнородную аудиторию.

**Ключевые идеи решения (наблюдение → идея → эффект):**
1. **Восстановить Dashboard как обязательную базу.** Dashboard почти не работал, токены никто не понимал, не было названий ключей и сумм в деньгах. → Починить графики и фильтры, добавить названия ключей, показывать баланс в деньгах. → Критично для retention.
2. **Аналитика по типам контента (output), а не по моделям.** Инсайт от PM: разбивать не по моделям, а по типам генерации. → 4 категории: Текст, Изображения, Аудио, Видео + проваливание в топ моделей. → Конкурентное преимущество, «такого нет ни у кого».
3. **Система критических алертов.** Реальный кейс: пользователь терял деньги из-за ботовых атак. → Алерты по балансу (10/5/3/2/1%), детекция аномалий >25%/день, push + email. → Предотвращение убытков.
4. **Система выбора моделей.** Боль всех ролей: «не понимаю, какую модель выбрать и почему», выбор «методом тыка». → База знаний моделей, сравнительные таблицы, AI-помощник выбора, реальные кейсы. → Сокращение time-to-value.
5. **Понятная аналитика для менеджеров.** → Таблица «модель + запросы + стоимость», кастомные периоды, тренды, экспорт. → Рост ARPU через контроль затрат.
6. **Умное управление ключами + лимиты/алерты.** → Лимиты по моделям/суммам/времени, но с опцией «только алерты» (не отключать), человекочитаемые названия ключей. → Enterprise-готовность.
7. **Ролевая модель и командный доступ.** → Роли (Founder, Финменеджер, CTO, Admin, Developer, Аналитик), логи действий, проектные пространства.
8. **Сдвиг концепции:** от технической панели к business intelligence — прогноз затрат, ROI-аналитика, benchmarking.

**Принципы обновления:**
- Лендинг и документация остаются без изменений.
- Веб-приложение получает расширенный функционал.
- Дублирование ключевого контента из документации в веб-интерфейс.
- Сохранение знакомой структуры навигации.

**Адаптивный интерфейс по ролям:** Beginner Mode (упрощённый), Business Mode (акцент на метрики), Expert Mode (полный доступ).

### B. Промпт для Figma Make

```
Create an "idea generation / solution map" diagram for a UX case study. Light theme, portfolio-quality.

Left side: a "Problem" card — "300+ AI models, but interface too complex for non-technical users. Info buried in developer-only docs."

Right side: a radial / grouped map of 8 solution ideas connected to the problem, each as a small labeled node:
1) Fix Dashboard (money instead of tokens, key names)
2) Analytics by OUTPUT type (Text / Image / Audio / Video)
3) Critical alerts (balance + anomaly detection)
4) Model selection system (compare + AI helper)
5) Manager-friendly analytics (table: model/requests/cost)
6) Smart API keys (limits + alerts only)
7) Roles & team access
8) Shift to Business Intelligence

Bottom strip: three "mode" pills — Beginner Mode / Business Mode / Expert Mode.

Style: one accent color, neutral grays, white bg, connector lines, rounded nodes, 2 fonts max, no gradients, clean and airy.
```

---

## Блок 04 — Карты пользовательских путей (UJM)

### A. Текст

**Заголовок:** Карты пользовательских путей: два сценария до результата

**Лид:**
Я построил две карты пути для разных сегментов, чтобы увидеть эмоции, барьеры и точки истины на каждом этапе. Персоны (James, Tom, Sofia) подробно представлены в блоке «Целевая аудитория» — здесь я не повторяю их описания, а показываю их путь к результату.

> Каждая карта построена как путь из **6 этапов**. Все ссылки на «точки истины» и «барьеры» ниже привязаны к номерам этих 6 этапов (а не к шагам детального флоу из следующего блока).

**UJM 1 — Стартап EduFlow создаёт AI-сервис CourseGenie (James + Tom).**
Цель: запустить EdTech-продукт с бюджетом $500/мес и максимальной скоростью.
Путь из 6 этапов: **(1)** поиск AI-решения → **(2)** изучение AIMLAPI и решение → **(3)** быстрый старт по готовому шаблону → **(4)** кастомизация под уникальные нужды → **(5)** интеграция и запуск MVP → **(6)** мониторинг, оптимизация и масштабирование.
- Эмоциональный пик: «Wow, это уже 60% нашего MVP!» — на этапе 3 (готовый шаблон).
- Экономика как драйвер: «$300/мес вместо $800 с OpenAI» (этап 2), «умное распределение нагрузки экономит 40% бюджета» (этап 6).
- Точки истины: экономическое обоснование (этапы 1–2), наличие подходящих шаблонов (этап 3), скорость настройки и покрытие требований (этапы 3–4), результаты беты (этап 5).
- Барьеры: чувствительность к цене, техническая сложность интеграции, качество документации.

**UJM 2 — Amazon-менеджер создаёт AI-ассистента (Sofia).**
Цель: собрать простого AI-ассистента под Amazon и зарабатывать на помощи коллегам.
Путь из 6 этапов: **(1)** поиск готовых решений (фрустрация от цен $99–399 и сложности) → **(2)** идея простого нишевого решения → **(3)** изучение AIMLAPI и расчёт ($80/мес за 1000 описаний + 500 изображений) → **(4)** быстрая регистрация и первый тест → **(5)** сборка ассистента в no-code конструкторе → **(6)** запуск и монетизация.
- Эмоциональная дуга: фрустрация → надежда → облегчение → гордость («Из обычного менеджера я стала AI-предпринимателем!»).
- Точки истины: разочарование в конкурентах (этап 1), понимание возможностей (этапы 2–3), первый опыт и качество результата (этап 4), наличие no-code (этап 5 — обязателен).
- Барьеры: нехватка технических знаний, страх сложности, ограниченный бюджет, специфика Amazon.

**Вывод:**
Оба пути ломаются в одних и тех же местах — непрозрачная экономика и техническая сложность входа. Значит, ключевые рычаги: калькулятор стоимости/ROI, готовые шаблоны и no-code сборка.

### B. Промпт для Figma Make

```
Create two user journey maps (UJM) for a UX case study, stacked vertically. Light theme, portfolio-quality.

Each journey = a horizontal row of 6 stages with:
- stage title on top
- a small action line
- an emotion curve line running across all 6 stages (a continuous line that goes up and down through emotion dots: negative / neutral / positive)

Journey 1 — "Startup EduFlow: CourseGenie (James + Tom)":
stages: 1 Search AI solution → 2 Study AIMLAPI & decide → 3 Quick start via template → 4 Customization → 5 Integration & MVP launch → 6 Monitor, optimize, scale.
Emotion curve: starts tense, dips at cost concern, big spike at stage 3 ("60% of MVP!"), steady-high at the end.

Journey 2 — "Amazon Manager: Sofia":
stages: 1 Search ready solutions (frustration) → 2 Idea of simple niche tool → 3 Study AIMLAPI ($80/mo) → 4 Register & first test → 5 No-code builder → 6 Launch & monetize.
Emotion curve: starts low (frustration), rises with hope, relief at $80 calc, peak pride at the end.

Add small "moment of truth" markers under key stages. Style: one accent color for emotion line, neutral grays, white bg, 2 fonts max, no gradients, clean.
```

---

## Блок 05 — Пользовательские сценарии (User Flows)

### A. Текст

**Заголовок:** Пользовательские сценарии: как было и как должно стать

**Лид:**
Помимо двух целевых флоу (CourseGenie и Amazon-ассистент), я детально разобрал **текущий процесс** выбора и внедрения API — именно он показывает, где система буксует сегодня.

**Текущий flow (current user flow), 15 шагов — где ломается:**
1. Возникает задача добавить AI в продукт (PM/CTO).
2. Первичный ресёрч делает менеджер-не-разработчик → «синдром неопределённости будущего»: не знает, что понадобится завтра.
3. Тест в Playground: примерно выбирает модель, делает запросы.
4. Техническая растерянность → зовёт разработчика.
5. Разработчик сразу идёт в документацию.
6. **Критическая точка отсева:** качество документации. Плохая документация → уходят навсегда.
7. Генерация тестового ключа.
8. Тестирование через curl/Postman — НЕ через Playground.
9. Консолидация: цены непонятны → берут самый дешёвый тариф.
10. Согласование с руководством.
11. **Новая критическая точка:** именованный ключ с ограничениями, командный доступ.
12. Интеграция; ключ контролирует менеджер, не разработчик.
13. **Финансовая слепота:** Dashboard сломан, нет связи между ключами и тратами.
14. Мониторинг качества и стоимости.
15. «Скорбная» оптимизация постфактум.

**Что меняем (как было → как стало):**
- **Тестирование:** Playground был необязателен для dev → становится точкой первичной ценности для новичка (готовые шаблоны под задачу).
- **Выбор модели и старт:** «примерно выбирает модель» → старт через библиотеку шаблонов, one-click deployment, оценка покрытия (60% MVP), no-code конструктор.
- **Экономика и ROI:** «берут самый дешёвый тариф вслепую» → калькулятор стоимости + ROI-калькулятор + прогноз, money-back guarantee.
- **Роли и ключи:** разрозненный контроль → именованные ключи, лимиты/алерты, командный доступ.

**Негативные сценарии (Sofia) и реакции:**
- Не разобралась с конструктором → упростить интерфейс + видео-туториалы + готовые шаблоны интерфейса.
- Качество генерации не под Amazon → улучшить промпты + валидация контента.
- Не нашла клиентов → маркетинговые инструменты + партнёрская программа.

### B. Промпт для Figma Make

```
Create a user-flow comparison diagram for a UX case study: "Current flow" vs "Redesigned flow". Light theme, portfolio-quality.

Top lane — "Current flow (15 steps, where it breaks)":
a horizontal flow of nodes; highlight 3 red "pain" markers at:
- Step 6 "Documentation quality = drop-off point"
- Step 9 + 13 "Financial blindness: unclear pricing, broken dashboard"
- Step 11 "API key management / team access"

Bottom lane — "Redesigned flow":
parallel horizontal flow with green "fix" markers:
- Templates + one-click deploy + coverage estimate
- Cost calculator + ROI calculator + forecast
- Named keys + limits/alerts + team access
- No-code builder with ready templates

Use connecting arrows between nodes, decision diamonds where the user can branch off. Style: two state colors (red for pain, green for fix) plus one neutral accent, white bg, 2 fonts max, no gradients, clean flowchart look.
```

---

## Блок 06 — Информационная архитектура (sitemap)

### A. Текст

**Заголовок:** Информационная архитектура: знакомый скелет + новые возможности

**Лид:**
Н��вая ИА строится на компромиссе: сохранить узнаваемую структуру (чтобы не ломать ментальную модель при переходе с других платформ) и при этом добавить разделы, закрывающие боли всех сегментов.

**Основная навигация (левый сайдбар):**
- **Dashboard** *(расширен)* — калькулятор стоимости, сравнение затрат с конкурентами, персональные рекомендации, быстрый доступ.
- **Playground** *(сохранён + расширен)* — библиотека промптов по индустриям, сохранение и шаринг экспериментов, метрики качества.
- **Templates** *(НОВЫЙ)* — библиотека готовых решений по индустриям, фильтр по сложности (Beginner/Expert), one-click deployment, рейтинги.
- **Constructor** *(НОВЫЙ, для новичков)* — no-code конструктор, drag-and-drop, визуальный редактор промптов, предпросмотр.
- **Models** *(НОВЫЙ, дублируем из документации)* — полный список, характеристики, сравнение, рекомендации, примеры.
- **API Keys** *(расширен)* — лимиты по ключам, webhooks, мониторинг в реальном времени, алерты.
- **Analytics** *(расширен Usage)* — детальная аналитика, тренды, рекомендации, прогноз затрат, экспорт.
- **Plans** *(расширен)* — ROI-калькулятор по тарифам, сравнение с текущим использованием, прогноз экономии.
- **Billing** *(расширен)* — прогноз затрат, алерты о бюджете, детализация по проектам.

**Правая панель Quick Links:** добавлены Business Tools, Project Manager, ROI Calculator (плюс сохранённые Help Center и Documentation).

**Мобильный приоритет:** Dashboard / Playground / Templates / Analytics → остальное в «More».

**Адаптивные режимы:** Beginner Mode (скрываем сложное), Business Mode (приоритет Analytics/Billing/ROI), Expert Mode (все разделы + advanced settings).

**Что сохранили / добавили / переработали:**
- **Сохранили:** лендинг и документацию, узнаваемость базовых разделов (Ключи, Статистика, Платежи).
- **Добавили:** Templates, Constructor, Models, бизнес-инструменты, роль-адаптивность.
- **Переработали:** Dashboard, Playground, Analytics, API Keys, Plans, Billing → от «панели показателей» к инструменту контроля и оптимизации; логика выбора смещена в сторону задач («Я хочу…», коллекции по бизнес-кейсам и бюджетам).

### B. Промпт для Figma Make

```
Create an information architecture sitemap (tree diagram) for a web app, UX case study, light theme, portfolio-quality.

Root node: "AIMLAPI Web App".
Primary nav branch (left sidebar) with 9 children, each a labeled box:
Dashboard, Playground, Templates (NEW), Constructor (NEW), Models (NEW), API Keys, Analytics, Plans, Billing.
Mark "Templates", "Constructor", "Models" with a small "NEW" badge in the accent color.
Show 2-4 sub-items under a few key nodes (e.g. Dashboard → Cost Calculator, Recommendations; Templates → By Industry, By Complexity; Models → Compare, Search, Pricing).

Side branch: "Quick Links" → Business Tools, Project Manager, ROI Calculator.
Bottom: three role-mode pills — Beginner / Business / Expert.

Style: clean tree with connector lines, rounded boxes, one accent color for NEW badges, neutral grays, white bg, 2 fonts max, no gradients. Looks like a designer's sitemap.
```

---

## Блок 07 — Стратегия и планирование (MVP, приоритизация)

### A. Текст

**Заголовок:** Стратегия: что делаем сначала и почему

**Лид:**
Решения приоритизировались по трём критериям: критичность для удержания (retention), уникальность/конкурентное преимущество и предотвращение прямых потерь пользователя. Логика — поэтапная трансформация: сначала починить основу, затем добавить уникальность, потом строить экосистему.

**Состав MVP (1–2 месяца, «делать немедленно»):**
1. **Экстренное восстановление Dashboard** — починить графики и фильтры, человекочитаемые названия ключей, баланс в деньгах, правильная сортировка, кеширование (убрать 10-секундные загрузки).
2. **Аналитика по типам контента** — 4 категории (Текст/Изображения/Аудио/Видео), многоуровневая детализация, инсайты переливов («текст падает, видео растёт»).
3. **Система критическ��х алертов** — пороги по балансу, детекция аномалий >25%/день, push + email, настраиваемые пороги.
*Плюс из ИА:* Templates, Models (дублирование из документации), Dashboard с калькулятором, расширение Analytics.

**Приоритизация (как зафиксировано):**
- **Критично — немедленно:** восстановление Dashboard, ан��литика по типам, критические алерты.
- **Важно — 2–4 мес:** система выбора моделей, продвинутая аналитика для менеджеров, умное управление ключами.
- **Стратегически — 6–12 мес:** командный доступ с ролями, BI-платформа, AI-ассистент платформы.
- **Не приоритет:** Playground v2.0 (разработчики не используют, менеджеры редко), Community-функции (Discord почти не используется).

**ROI-обоснование:**
- Высокий ROI сейчас: починка Dashboard (низкая стоимость, критичный impact), категоризация по типам (уникальное преимущество), алерты (предотвращение убытков).
- Средний ROI (планировать): выбор моделей, продвинутая аналитика, управление ключами.
- Долгосрочный ROI: командный доступ, BI, AI-ассистент.

**Обоснование решений:**
- Dashboard — экстренно: «без работающего Dashboard менеджеры уходят».
- Категоризация по output — уникально: «такого нет ни у кого».
- Алерты — защита денег: реальные потери от ботовых атак.

### B. Промпт для Figma Make

```
Create a prioritization / MVP roadmap visualization for a UX case study. Light theme, portfolio-quality.

Part 1 — a priority matrix (impact vs effort), 2x2:
- X: Effort (low → high), Y: Impact (low → high)
Plot labeled items:
High impact/low effort (do now): "Fix Dashboard", "Critical alerts", "Analytics by content type"
High impact/high effort (plan): "Model selection system", "Advanced analytics", "Smart API keys"
Lower priority: "Playground v2.0", "Community features" (place bottom).

Part 2 — a 3-phase horizontal roadmap timeline:
Phase 1 (1-2 mo) "Fix the foundation": Dashboard, content-type analytics, alerts.
Phase 2 (2-4 mo) "Add uniqueness": model selection, manager analytics, API keys.
Phase 3 (6-12 mo) "Build ecosystem": team access/roles, BI platform, AI assistant.

Style: one accent color, neutral grays, white bg, rounded chips on the timeline, 2 fonts max, no gradients, clean and structured.
```

---

## Блок 08 — Визуальный дизайн (ключевой сценарий)

### A. Текст

> Примечание по источнику: в Notion к финальным макетам нет текстовых описаний UI-решений и явного описания «ключевого сценария». Поэтому текст ниже опирается только на подтверждённый факт — перечень готовых экранов — и связывает их с ранее выявленными болями, без додумывания деталей реализации.

**Заголовок:** Визуальный дизайн: ключевые экраны

**Лид:**
Финальные макеты покрывают сквозной сценарий работы с продуктом: войти → оценить состояние через Dashboard/Usage → выбрать модель (Browse Models) → протестировать в Playground.

**Ключевые экраны:**
- **Empty Dashboard** — стартовое/пустое состояние дашборда (онбординг нового пользователя).
- **Dashboard with Stats** — рабочий дашборд со статистикой; отвечает на боль «Dashboard не работает, токены непонятны, нет сумм в деньгах и названий ключей».
- **Browse Models** — просмотр и выбор моделей; отвечает на боль «не понимаю, какую модель выбрать и почему».
- **Usage Overview** — обзор использования; отвечает на потребность менеджеров в прозрачной аналитике и контроле расходов.
- **New chat in Playground** — начало нового чата; тестирование модели под задачу.
- **Playground with images** — сценарий генерации изображений.

**Связки «проблема → экран»:**
- Сломанный дашборд и непонятные токены → перерисованные **Empty Dashboard** и **Dashboard with Stats**.
- Хаотичный выбор модели «методом тыка» → экран **Browse Models**.
- Непрозрачные расходы → **Usage Overview**.
- Слабый Playground → **New chat in Playground** и **Playground with images**.

*Конкретные UI-механики каждого экрана (деньги вместо токенов, сравнение моделей, табличная аналитика и т.д.) — нужно уточнить и описать при добавлении самих макетов.*

### B. Промпт для Figma Make

```
Create a UI showcase board displaying 6 app screens of an AI/ML API platform, light theme, modern clean SaaS UI, portfolio-quality mockups arranged in a grid.

Screens to mock up (use placeholder but realistic content):
1) Empty Dashboard — onboarding empty state with a friendly prompt and a primary CTA.
2) Dashboard with Stats — cards showing balance in USD (not tokens), named API keys, spend chart, sortable cost list.
3) Browse Models — grid of model cards with filters (by task/type), compare button, recommendation tags.
4) Usage Overview — analytics table: model / requests / cost, with date-range filter and a trend chart.
5) New chat in Playground — chat interface with model selector and parameter panel.
6) Playground with images — image generation view with prompt input and result thumbnails.

Style: one primary accent color (teal or blue), neutral grays, white background, left sidebar navigation, rounded cards, soft shadows, 2 fonts max, no gradients. Clean, trustworthy, business-friendly dashboard aesthetic.
```

---

## Блок 09 — Итоги: Lessons Learned и Next Steps

### A. Текст

**Заголовок:** Итоги: чему научил проект и что дальше

**Lessons Learned:**
1. **Глубокое понимание API позволяет переосмыслить интерфейс.** Упрощение технически сложного интерфейса требовало не только дизайн-навыков, но и понимания принципов API — это позволило сместить фокус с технических деталей на реальные цели пользователей.
2. **Задачи пользователей — ключ к навигации.** Фокус на конкретных задачах дал ясные подсказки, как организовать навигацию, и заметно упростил взаимодействие с платформой.
3. **Упрощение полезно всем.** Упрощение техн��ческих аспектов помогло не только новичкам — опытные пользователи экономят время за счёт готовых решений, не погружаясь в документацию.
4. **Баланс достигается через кастомизацию.** С разнородной аудиторией критично не только найти баланс функциональности и простоты, но и дать кастомизацию интерфейса — комфорт для каждого сегмента при минимальных затратах на разработку.

**Главный вывод:**
Сделать технический продукт по-настоящему доступным — это не «просто упростить интерфейс», а глубоко переосмыслить концепцию взаимодействия, опираясь на реальные задачи и потребности пользователей.

**Next Steps:**
1. **Итеративная реализация с постоянной обратной связью** — сбор отзывов, уточнение информации от отделов, чёткие фазы внедрения, приоритизация.
2. **Тестирование начального прототипа** на реальных пользователях — выявить и устранить проблемы юзабилити до полноценного запуска.
3. **Детальная проработка каталога моделей** — интуитивная каталогизация и поиск для лёгкого выбора решения под задачу.

**Немедленные действия (из стратегии):**
Аудит текущего Dashboard и фиксация багов → backlog критичных исправлений → sprint по экстренному восстановлению → старт дизайна системы категоризации по типам контента.

**Стратегическая подготовка:** UJM для каждой роли, north star метрики на квартал, product council с представителями пользователей, запуск continuous research.

### B. Промпт для Figma Make

```
Create a closing "results / lessons learned" summary block for a UX case study. Light theme, portfolio-quality.

Left column — "Lessons Learned": 4 numbered cards:
1) Deep API understanding lets you rethink the interface
2) User tasks are the key to navigation
3) Simplification benefits everyone, not just beginners
4) Balance comes through interface customization
Add one highlighted callout below: "Making a technical product truly accessible means rethinking the whole interaction concept, not just simplifying the UI."

Right column — "Next Steps": 3 cards:
1) Iterative rollout with continuous feedback
2) Prototype testing with real users
3) Detailed model catalog & search

Style: one accent color, neutral grays, white bg, rounded cards with numbers in accent circles, 2 fonts max, no gradients, calm and conclusive tone.
```

---

## Памятка по реализации (когда дашь отмашку на оформление)

- Блоки идут после секции «Что показало исследование» в порядке 01 → 09.
- В проекте уже есть стиль (см. `competitor-section.tsx`, `research-section.tsx`) — новые секции стоит делать в той же визуальной системе и положить данные в `lib/case-data.ts`.
- Визуальные артефакты из Figma Make экспортируй в PNG/SVG и клади в `public/`, затем подставляй в соответствующий блок.
