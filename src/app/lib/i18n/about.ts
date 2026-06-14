import type { SiteLocale } from "../locale-types";

export type AboutContent = {
  badge: string;
  title: string;
  intro1: string;
  intro2: string;
  downloadCv: string;
  contact: string;
  portrait: string;
  facts: [string, string][];
  quotes: { text: string; author: string }[];
  philosophyLabel: string;
  philosophyHeading: string;
  meaningTitle: string;
  meaningBody: string;
  howThinkTitle: string;
  howThinkBody1: string;
  howThinkBody2: string;
  efficiencyTitle: string;
  efficiencyBody: string;
  valuesTitle: string;
  valuesBody: string;
  helpLabel: string;
  helpHeading: string;
  helpWith: { k: string; v: string; items: string[] }[];
  processLabel: string;
  processHeading: string;
  processIntro: string;
  process: { no: string; phase: string; sub: string; what: string }[];
  skillsLabel: string;
  skillsHeading: string;
  skills: { group: string; items: string[] }[];
  toolsLabel: string;
  tools: string[];
  experienceLabel: string;
  experienceHeading: string;
  experience: { when: string; role: string; where: string; note: string; points: string[] }[];
  educationLabel: string;
  educationHeading: string;
  education: { when: string; where: string; note: string }[];
  profDevLabel: string;
  profDevHeading: string;
  courses: { year: string; course: string }[];
  languagesLabel: string;
  languages: { name: string; level: string }[];
  socialHeading: string;
  socialBody: string;
};

const content: Record<SiteLocale, AboutContent> = {
  en: {
    badge: "About · Diana Burmistrova",
    title: "I turn ambiguous problems into clear, scalable design.",
    intro1:
      "Product Designer with 9+ years of experience designing complex, user-centered digital products across web, mobile, and enterprise platforms. I specialize in translating ambiguous business problems into intuitive, scalable design solutions through rigorous user research, information architecture, and systems thinking.",
    intro2:
      "Experienced in 0-to-1 MVP delivery, design systems, and cross-functional collaboration with engineering and product teams. Open to full-time remote roles or long-term B2B contracts (available via Mellow — no Deel required on your end).",
    downloadCv: "Download CV (PDF)",
    contact: "LinkedIn",
    portrait: "Portrait placeholder",
    facts: [
      ["Experience", "9+ years"],
      ["Languages", "RU · EN"],
      ["Mode", "Remote-first"],
      ["Open to", "Full-time · long-term B2B"],
    ],
    quotes: [
      {
        text: "He who has a why to live for can bear almost any how.",
        author: "Viktor Frankl",
      },
      {
        text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
        author: "Johann Wolfgang von Goethe",
      },
    ],
    philosophyLabel: "Philosophy",
    philosophyHeading: "How I think about design",
    meaningTitle: "Meaning-first",
    meaningBody:
      "There's an old debate in design: what comes first — function or form? I believe both miss the point. What comes first is meaning. When a product has a clear purpose, the right logic follows naturally, and the right aesthetics emerge from within. Not function-first. Not form-first. Meaning-first.",
    howThinkTitle: "How I think",
    howThinkBody1:
      "As a child I was equally drawn to drawing and to mathematics. Nothing has changed since. My core skill is taking a big, tangled, complex problem and turning it into something simple, structured, and clear. I think in systems — I see connections between seemingly unrelated things, find patterns in chaos, and build logical structures almost instinctively. I call it logical intuition: not pure math, more the ability to feel structure before I can explain it in words.",
    howThinkBody2:
      "But I'm not a pure logician. I'm just as drawn to psychology — how people behave, why they make the decisions they do, what motivates them. Mental health, awareness and human potential matter to me. That combination — systems thinking plus empathy — is what makes me a product designer rather than just a UI designer. I love inventing non-obvious solutions and then ruthlessly optimizing them. If I were “punished” by being made to build a design system for a month, I'd be thrilled.",
    efficiencyTitle: "Efficiency as a principle",
    efficiencyBody:
      "I'm driven by doing more with less effort. The Pareto principle says 20% of effort yields 80% of the result — I'm always looking to push that ratio further. Every feature, every screen, every decision should justify its existence. The same goes for process: I'd rather spend an extra hour making sense of a problem than a week fixing the wrong solution. Clarity before speed. Strategy before pixels.",
    valuesTitle: "What I care about",
    valuesBody:
      "I try to work in line with my values — freedom, creativity, and helping people realize their potential. I'm happiest on projects where meaning and profit work together, but meaning leads. I do my best work when I genuinely care about what I'm building — that's not idealism, it's efficiency. Extractive industries and predatory lending — nothing personal, just not where my superpowers work at full strength. (Kidding. Mostly.)",
    helpLabel: "What I can help with",
    helpHeading: "Three ways I usually plug in",
    helpWith: [
      {
        k: "0→1 MVP design",
        v: "Full product-design cycle — from research to launch: discovery, strategy, UX, UI and design system.",
        items: ["End-to-end: research → UI", "For startups & new products", "Figma prototypes & dev hand-off"],
      },
      {
        k: "Usability audit & improvement",
        v: "Expert evaluation of existing products with concrete, data-backed recommendations.",
        items: ["Heuristic analysis & usability tests", "Behavioral analytics (Hotjar etc.)", "Data-backed recommendations"],
      },
      {
        k: "Design system audit & creation",
        v: "Building scalable design systems from scratch, or auditing existing component libraries.",
        items: ["Tokens & component library", "Audit of existing systems", "Consistency across product & team"],
      },
    ],
    processLabel: "How I work",
    processHeading: "My design process for MVPs",
    processIntro:
      "A typical end-to-end MVP process — it covers everything above. The same process is applied in the AmigoChat case study.",
    process: [
      { no: "01", phase: "Discover", sub: "Research & framing", what: "Competitor analysis, surveys, in-depth interviews, market analysis, domain immersion (crypto, AI, B2B, API)." },
      { no: "02", phase: "Define", sub: "Understanding users", what: "Personas, CJM, problem statement, “How might we…”." },
      { no: "03", phase: "Ideate", sub: "Strategy & planning", what: "User scenarios, Lean Canvas, MVP features, Kano, roadmap." },
      { no: "04", phase: "Design", sub: "Architecture & interface", what: "IA, card sorting, sitemap, wireframes, visual design, UI kit." },
      { no: "05", phase: "Validate", sub: "Testing & iteration", what: "Usability tests, iterations, design QA / author supervision." },
      { no: "06", phase: "Launch & Grow", sub: "Post-launch", what: "Dev supervision, post-launch iterations, UI kit evolution." },
    ],
    skillsLabel: "Skills & expertise",
    skillsHeading: "What I bring to a team",
    skills: [
      { group: "Product & UX", items: ["Product thinking", "B2B & enterprise UX", "Complex scenarios", "Information architecture", "Interaction design", "Wireframing & prototyping", "0→1 product discovery"] },
      { group: "Research & validation", items: ["User research & interviews", "Usability testing", "Heuristic analysis", "Card sorting", "CJM"] },
      { group: "Design systems", items: ["Design systems", "Design tokens", "Component documentation", "Figma Variables & Tokens Studio"] },
      { group: "Product team", items: ["Cross-functional work", "Hand-off & design QA", "Async work & documentation", "Stakeholder alignment"] },
    ],
    toolsLabel: "Tools",
    tools: ["Figma", "Figma Make", "Figma Variables", "Tokens Studio", "Axure RP", "Notion", "Miro", "Hotjar", "React (basics)", "Tailwind (basics)"],
    experienceLabel: "Experience",
    experienceHeading: "Roles & places",
    experience: [
      {
        when: "Apr 2022 — Present",
        role: "Product Designer (freelance)",
        where: "Self-employed",
        note: "Worked with 9+ clients across FinTech, enterprise SaaS and e-commerce — full design cycle from research to hand-off, fully remote.",
        points: [
          "0→1 MVP for StarCheck (crypto AML/KYT) — two-click flow, freemium model",
          "Full signing flow for DocuChain (e-signature + blockchain audit)",
          "Key scenarios for IVA Connect (enterprise video conferencing)",
          "UI library modernization (60+ components, Material style)",
          "Catalog section in a B2B e-commerce admin — UX audit & IA",
        ],
      },
      {
        when: "Jun 2017 — Mar 2022",
        role: "Interface Designer",
        where: "Usethics",
        note: "Full design cycle in consulting — from research to hand-off.",
        points: [
          "Contributed to a shared design system across client products",
          "Hypothesis-driven usability testing",
          "IA and navigation for enterprise interfaces",
        ],
      },
      {
        when: "Jan 2015 — Mar 2017",
        role: "UI/UX Designer",
        where: "Tensor (SBIS)",
        note: "UX/UI of the claims and complaints module in a large ERP.",
        points: ["Concept for an internal helpdesk system", "Scenarios, Axure RP prototypes, specs for development"],
      },
      {
        when: "Jun 2014 — Jan 2015",
        role: "Project Manager",
        where: "Volga-Web",
        note: "On-time delivery of web projects, client communication, coordination of designers and developers.",
        points: [],
      },
    ],
    educationLabel: "Education",
    educationHeading: "Degrees & background",
    education: [
      { when: "2004 — 2009", where: "P.G. Demidov Yaroslavl State University", note: "Specialist in Sociology (Master's equivalent) · Faculty of Social and Political Sciences" },
      { when: "2012 — 2013", where: "N.P. Pastukhov Academy (GAPM)", note: "Requalification: computer graphics, publishing systems and web design" },
    ],
    profDevLabel: "Professional development",
    profDevHeading: "Courses & continued learning",
    courses: [
      { year: "2026", course: "Design Tokens Mastery — Romina Kavčič · The Design System Guide (in progress)" },
      { year: "2025 — 2026", course: "Product Design (UX/UI) Program — DesignerUp (in progress)" },
      { year: "2022", course: "UX/UI Designer Profession — Uprock school" },
      { year: "2019", course: "Grids & Website Design — Bang Bang Education" },
      { year: "2018", course: "Workshop — Design Line" },
      { year: "2016", course: "iOS Mobile App Designer — Igor Dzhazov online intensive" },
      { year: "2015", course: "UX Designer — Igor Dzhazov online intensive" },
    ],
    languagesLabel: "Languages",
    languages: [
      { name: "Russian", level: "Native" },
      { name: "English", level: "Working" },
    ],
    socialHeading: "Profiles & writing",
    socialBody: "Selected work and longer-form notes on the platforms below — if you want to follow along beyond this site.",
  },
  ru: {
    badge: "Обо мне · Диана Бурмистрова",
    title: "Превращаю размытые задачи в понятные и масштабируемые решения.",
    intro1:
      "Продуктовый дизайнер с 9+ годами опыта — веб, мобайл и enterprise. Беру нечёткие бизнес-задачи и превращаю их в понятные продуктовые решения через исследования, информационную архитектуру и системное мышление.",
    intro2:
      "Запускала MVP с нуля, строила дизайн-системы, работала с продуктовыми и инженерными командами. Открыта к full-time remote или долгосрочному B2B-контракту (работаю через Mellow — Deel на вашей стороне не нужен).",
    downloadCv: "Скачать CV (PDF)",
    contact: "LinkedIn",
    portrait: "Фото — скоро",
    facts: [
      ["Опыт", "9+ лет"],
      ["Языки", "RU · EN"],
      ["Формат", "Удалённо"],
      ["Открыта к", "Full-time · B2B-контракт"],
    ],
    quotes: [
      { text: "Тот, кто знает зачем, вынесет любое как.", author: "Виктор Франкл" },
      {
        text: "Если вы что-то можете сделать или вам кажется, что можете — начинайте. Смелость содержит в себе гений, силу и волшебство.",
        author: "Иоганн Вольфганг фон Гёте",
      },
    ],
    philosophyLabel: "Философия",
    philosophyHeading: "Как я смотрю на дизайн",
    meaningTitle: "Смысл — первичен",
    meaningBody:
      "В дизайне спорят: что важнее — функция или форма? Оба варианта упускают главное. Первичен смысл. Когда у продукта есть чёткая цель, логика выстраивается сама, а эстетика рождается изнутри. Не функция-первична. Не форма-первична. Смысл — первичен.",
    howThinkTitle: "Как я думаю",
    howThinkBody1:
      "В детстве одинаково тянуло к рисованию и математике — с тех пор ничего не изменилось. Главный навык — брать большую запутанную проблему и превращать её в простое, структурированное, понятное. Мыслю системами: вижу связи, нахожу паттерны в хаосе, строю логику почти инстинктивно. Называю это логической интуицией — не чистая математика, скорее чувство структуры раньше, чем её можно объяснить словами.",
    howThinkBody2:
      "Но я не чистый логик. В равной мере тянет к психологии — как люди ведут себя, почему принимают решения, что мотивирует. Важны осознанность и человеческий потенциал. Системное мышление плюс эмпатия — то, что делает меня продуктовым дизайнером, а не просто UI. Люблю нестандартные решения и потом безжалостно их оптимизировать. Месяц на дизайн-систему — для меня награда, а не наказание.",
    efficiencyTitle: "Эффективность как принцип",
    efficiencyBody:
      "Стремлюсь делать больше меньшими усилиями. 20% усилий дают 80% результата — и я ищу, как сдвинуть это соотношение. Каждая фича, экран и решение должны оправдывать своё существование. В процессе так же: лучше лишний час на ясность задачи, чем неделя на исправление неверного хода. Сначала ясность, потом скорость. Сначала стратегия, потом пиксели.",
    valuesTitle: "Что мне важно",
    valuesBody:
      "Стараюсь работать в согласии со своими ценностями — свобода, творчество, помощь людям раскрыть потенциал. Ближе всего проекты, где смысл и прибыль идут вместе, но ведёт смысл. Лучше всего работаю, когда мне правда важно то, что создаю — это не идеализм, а эффективность. Добывающие отрасли и хищническое кредитование — ничего личного, просто не там, где суперсилы работают на полную. (Шучу. Почти.)",
    helpLabel: "Чем могу помочь",
    helpHeading: "Три формата, в которых чаще всего подключаюсь",
    helpWith: [
      {
        k: "Дизайн MVP с нуля",
        v: "Полный цикл — от исследования до запуска: дискавери, стратегия, UX, UI и дизайн-система.",
        items: ["Полный процесс: ресёрч → UI", "Для стартапов и новых продуктов", "Прототипы в Figma и хэндофф"],
      },
      {
        k: "Аудит и улучшение UX",
        v: "Экспертная оценка продукта с конкретными рекомендациями на данных.",
        items: ["Эвристический анализ и юзабилити-тесты", "Поведенческая аналитика (Hotjar и др.)", "Рекомендации с опорой на данные"],
      },
      {
        k: "Дизайн-система: аудит и создание",
        v: "Создание системы с нуля или аудит существующей библиотеки компонентов.",
        items: ["Токены и библиотека компонентов", "Аудит существующих систем", "Консистентность продукта и команды"],
      },
    ],
    processLabel: "Как я работаю",
    processHeading: "Процесс дизайна для MVP",
    processIntro:
      "Типичный end-to-end процесс для MVP — он покрывает всё выше. Тот же подход — в кейсе AmigoChat.",
    process: [
      { no: "01", phase: "Discover", sub: "Исследование и постановка", what: "Конкурентный анализ, опросы, глубинные интервью, рынок, погружение в домен (крипто, AI, B2B, API)." },
      { no: "02", phase: "Define", sub: "Понимание пользователей", what: "Персоны, CJM, формулировка проблемы, «Как мы могли бы…»." },
      { no: "03", phase: "Ideate", sub: "Стратегия и план", what: "User scenarios, Lean Canvas, MVP-функции, Kano, роадмап." },
      { no: "04", phase: "Design", sub: "Архитектура и интерфейс", what: "IA, card sorting, sitemap, вайрфреймы, визуал, UI kit." },
      { no: "05", phase: "Validate", sub: "Тесты и итерации", what: "Юзабилити-тесты, итерации, Design QA / авторский надзор." },
      { no: "06", phase: "Launch & Grow", sub: "После запуска", what: "Надзор в разработке, пост-релизные итерации, развитие UI kit." },
    ],
    skillsLabel: "Навыки и компетенции",
    skillsHeading: "Что приношу в команду",
    skills: [
      { group: "Продукт и UX", items: ["Продуктовое мышление", "B2B и enterprise UX", "Сложные сценарии", "Информационная архитектура", "Interaction design", "Вайрфреймы и прототипы", "0→1 discovery"] },
      { group: "Исследования и валидация", items: ["Исследования и интервью", "Юзабилити-тесты", "Эвристический анализ", "Card sorting", "CJM"] },
      { group: "Дизайн-системы", items: ["Дизайн-системы", "Design tokens", "Документация компонентов", "Figma Variables и Tokens Studio"] },
      { group: "Продуктовая команда", items: ["Кросс-функциональная работа", "Хэндофф и Design QA", "Асинхрон и документация", "Согласование со стейкхолдерами"] },
    ],
    toolsLabel: "Инструменты",
    tools: ["Figma", "Figma Make", "Figma Variables", "Tokens Studio", "Axure RP", "Notion", "Miro", "Hotjar", "React (базово)", "Tailwind (базово)"],
    experienceLabel: "Опыт",
    experienceHeading: "Роли и места",
    experience: [
      {
        when: "Апр 2022 — сейчас",
        role: "Продуктовый дизайнер (фриланс)",
        where: "Самозанятость",
        note: "9+ клиентов в FinTech, enterprise SaaS и e-commerce — полный цикл от исследований до хэндоффа, удалённо.",
        points: [
          "MVP с нуля для StarCheck (крипто AML/KYT) — флоу в два клика, freemium",
          "Сценарий подписания для DocuChain (e-signature + блокчейн-аудит)",
          "Ключевые сценарии IVA Connect (корпоративные видеоконференции)",
          "Модернизация UI-библиотеки (60+ компонентов, Material)",
          "Каталог в B2B e-commerce admin — UX-аудит и IA",
        ],
      },
      {
        when: "Июн 2017 — Мар 2022",
        role: "Дизайнер интерфейсов",
        where: "Usethics",
        note: "Полный цикл в консалтинге — от исследований до хэндоффа.",
        points: [
          "Вклад в общую дизайн-систему клиентских продуктов",
          "Гипотезо-ориентированные юзабилити-тесты",
          "IA и навигация для enterprise",
        ],
      },
      {
        when: "Янв 2015 — Мар 2017",
        role: "UI/UX-дизайнер",
        where: "Тензор (СБИС)",
        note: "UX/UI модуля претензий и жалоб в крупной ERP.",
        points: ["Концепция внутренней helpdesk", "Сценарии, прототипы в Axure RP, ТЗ для разработки"],
      },
      {
        when: "Июн 2014 — Янв 2015",
        role: "Менеджер проектов",
        where: "Волга-Веб",
        note: "Сдача веб-проектов в срок, клиенты, координация дизайнеров и разработчиков.",
        points: [],
      },
    ],
    educationLabel: "Образование",
    educationHeading: "Дипломы и бэкграунд",
    education: [
      { when: "2004 — 2009", where: "ЯГУ им. П.Г. Демидова", note: "Специалист по социологии (аналог магистра) · социально-политический факультет" },
      { when: "2012 — 2013", where: "ГАПМ им. Н.П. Пастухова", note: "Переквалификация: компьютерная графика, издательские системы и веб-дизайн" },
    ],
    profDevLabel: "Профессиональное развитие",
    profDevHeading: "Курсы и обучение",
    courses: [
      { year: "2026", course: "Design Tokens Mastery — Romina Kavčič · The Design System Guide (в процессе)" },
      { year: "2025 — 2026", course: "Product Design (UX/UI) — DesignerUp (в процессе)" },
      { year: "2022", course: "Профессия UX/UI-дизайнер — Uprock" },
      { year: "2019", course: "Сетки и проектирование сайтов — Bang Bang Education" },
      { year: "2018", course: "Workshop — Design Line" },
      { year: "2016", course: "Дизайнер мобильных приложений iOS — интенсив Игоря Джазова" },
      { year: "2015", course: "UX-дизайнер — интенсив Игоря Джазова" },
    ],
    languagesLabel: "Языки",
    languages: [
      { name: "Русский", level: "Родной" },
      { name: "Английский", level: "Рабочий" },
    ],
    socialHeading: "Профили и публикации",
    socialBody: "Работы и тексты о процессе — на площадках ниже, если хотите следить за проектами не только здесь.",
  },
};

export function getAboutContent(locale: SiteLocale) {
  return content[locale];
}
