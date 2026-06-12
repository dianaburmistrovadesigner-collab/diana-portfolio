## Структура приложения (sitemap)

Ниже — **иерархия разделов и экранов нового приложения**, как она описана в заметках (две разные, но совместимые структуры: “обновлённая ИА” + “Web App Structure” с роутами).

### Вариант 1 — “Обновленная структура веб-приложения” (фокус на веб-сервисе)

(как в заметке про обновлённую ИА)

- **Основная навигация (левый сайдбар)**
    - **Dashboard** *(расширить)*
        - 
            - “Калькулятор стоимости API запросов”
        - 
            - “Сравнение затрат с конкурентами”
        - 
            - “Персональные рекомендации по оптимизации”
        - 
            - “Быстрый доступ к популярным функциям”
    - **Playground** *(сохраняем как есть + расширяем)*
        - 
            - “Библиотеку промптов по индустриям”
        - 
            - “Сохранение и шаринг экспериментов”
        - 
            - “Метрики качества ответов”
        - 
            - “Готовые сценарии использования”
    - **Templates** *(НОВЫЙ раздел)*
        - “Библиотека готовых решений по индустриям”
        - “Фильтрация по сложности (Beginner/Expert)”
        - “One-click deployment шаблонов”
        - “Кастомизация под конкретные задачи”
        - “Рейтинги и отзывы пользователей”
    - **Constructor** *(НОВЫЙ раздел — для новичков)*
        - “No-code конструктор AI-ассистентов”
        - “Drag-and-drop интерфейс”
        - “Визуальный редактор промптов”
        - “Готовые компоненты и блоки”
        - “Предпросмотр результата”
    - **Models** *(НОВЫЙ — дублируем из документации)*
        - “Полный список доступных моделей”
        - “Детальные характеристики каждой модели”
        - “Сравнение моделей по параметрам”
        - “Рекомендации по выбору”
        - “Примеры использования”
    - **API Keys** *(сохраняем + расширяем)*
        - 
            - “Настройка лимитов по ключам”
        - 
            - “Webhook конфигурация”
        - 
            - “Мониторинг использования в реальном времени”
        - 
            - “Алерты при превышении лимитов”
    - **Analytics** *(расширяем Usage)*
        - “Детальная аналитика использования”
        - “Графики трендов и паттернов”
        - “Рекомендации по оптимизации”
        - “Прогнозирование затрат”
        - “Экспорт отчетов”
    - **Plans** *(сохраняем + расширяем)*
        - 
            - “ROI калькулятор для каждого тарифа”
        - 
            - “Персональные рекомендации”
        - 
            - “Сравнение с текущим использованием”
        - 
            - “Прогноз экономии”
    - **Billing** *(сохраняем + расширяем)*
        - 
            - “Прогнозирование будущих затрат”
        - 
            - “Алерты о превышении бюджета”
        - 
            - “Детализация по проектам”
        - 
            - “Рекомендации по экономии”
- **Quick Links (правая панель)**
    - **Сохраняем:**
        - Help Center
        - Documentation (ссылка на внешнюю документацию)
    - **Добавляем:**
        - “Business Tools”
        - “Project Manager”
        - “ROI Calculator”
- **Мобильная навигация (приоритет)**
    1. Dashboard
    2. Playground
    3. Templates
    4. Analytics
    5. Остальные — в меню “More”
- **Адаптивный интерфейс по ролям**
    - **Expert Mode (для технических экспертов)** — “Показываем все разделы”
    - **Business Mode (для бизнес-пользователей)** — “Акцент на бизнес-метрики”
    - **Beginner Mode (для новичков)** — “Упрощенный интерфейс: скрываем сложные разделы…”

---

### Вариант 2 — “AI/ML API Web App Structure” (роуты + детальная структура навигации)

(как в заметке со структурой приложения/роутингом)

- **AIMLAPI Web Application**
    - **Authentication Layer**
        - `/login`
        - `/register`
        - `/forgot-password`
        - `/verify-email`
    - **Main Application**
        - **Layouts**
            - Mobile Layout (responsive)
            - Desktop Layout
                - Left Sidebar Navigation
                - Main Content Area
                - Right Quick Links Panel
                - Notifications Bar
- **Left Sidebar Navigation**
    - **Dashboard** `/dashboard`
        - Overview
        - Cost Calculator
        - Quick Actions
        - Personal Recommendations
    - **Playground** `/playground`
        - Chat Models `/playground/chat`
        - Code Generation `/playground/code`
        - Image Generation `/playground/image`
        - Video Generation `/playground/video`
        - Prompt Library `/playground/prompts`
        - Saved Experiments `/playground/saved`
    - **Templates** `/templates`
        - By Industry
            - Education `/templates/education`
            - E-commerce `/templates/ecommerce`
            - Business `/templates/business`
            - Healthcare `/templates/healthcare`
            - Gaming `/templates/gaming`
        - By Use Case
            - Chatbots `/templates/chatbots`
            - Content Generation `/templates/content`
            - Data Analysis `/templates/analysis`
            - Creative Tools `/templates/creative`
        - By Complexity
            - Beginner `/templates/beginner`
            - Intermediate `/templates/intermediate`
            - Advanced `/templates/advanced`
        - Popular Templates `/templates/popular`
    - **Constructor** `/constructor`
        - Visual Builder `/constructor/builder`
        - Components Library `/constructor/components`
        - Workflow Designer `/constructor/workflows`
        - Test & Preview `/constructor/preview`
        - Deploy `/constructor/deploy`
    - **Models** `/models`
        - Models Comparison `/models/compare`
        - Model Search `/models/search`
        - Performance Metrics `/models/metrics`
        - Pricing Calculator `/models/pricing`
        - Documentation `/models/docs`
    - **API Keys** `/api-keys`
        - Keys Management `/api-keys/manage`
        - Key Settings `/api-keys/settings`
        - Usage Monitoring `/api-keys/usage`
        - Alerts & Limits `/api-keys/alerts`
        - Webhooks `/api-keys/webhooks`
    - **Analytics** `/analytics`
        - Usage Overview `/analytics/usage`
        - Cost Analysis `/analytics/costs`
        - Performance Metrics `/analytics/performance`
        - Custom Reports `/analytics/reports`
        - Predictions `/analytics/predictions`
        - Export Data `/analytics/export`
    - **Plans** `/plans`
        - Current Plan `/plans/current`
        - Upgrade Options `/plans/upgrade`
        - ROI Calculator `/plans/roi`
        - Usage Comparison `/plans/compare`
        - Special Offers `/plans/offers`
    - **Billing** `/billing`
        - Invoices `/billing/invoices`
        - Payment Methods `/billing/payment`
        - Usage Details `/billing/usage`
        - Cost Forecast `/billing/forecast`
        - Budget Alerts `/billing/alerts`
        - Export Reports `/billing/export`
- **Quick Links Panel (Right Sidebar)**
    - **Business Tools** `/business`
        - ROI Calculator `/business/roi`
        - Project Manager `/business/projects`
        - Team Management `/business/team`
        - Referral Program `/business/referral`
        - White Label `/business/whitelabel`
    - **Help & Support** `/help`
        - Help Center `/help/center`
        - Live Chat `/help/chat`
        - Contact Support `/help/contact`
        - Tutorials `/help/tutorials`
        - Documentation `https://docs.aimlapi.com`
    - **Settings** `/settings`
        - Profile `/settings/profile`
        - Security `/settings/security`
        - Notifications `/settings/notifications`
        - Preferences `/settings/preferences`
        - Integrations `/settings/integrations`
- **Mobile Navigation**
    - Bottom nav: “Dashboard / Playground / Templates / Analytics / More”
    - More: Constructor, Models, API Keys, Plans, Billing, Business Tools, Settings, Help
- **Adaptive Interface Modes (как в заметках)**
    - Beginner Mode: скрывает часть секций, упрощает Playground/Models/Plans
    - Business Mode: приоритизирует Analytics/Billing/Business Tools/Plans (ROI)
    - Expert Mode: все секции, advanced settings, detailed analytics

---

## Что сохранили, что добавили, что переработали

### Что сохранили

- **“Лендинг и документация остаются без изменений”** (как принцип обновления).
- **“Сохранение знакомой структуры навигации”** (как принцип обновления).
- Базовые “знакомые” разделы/логика (как в выводах по ИА в кейсе):
    - **“основные разделы (Ключи API, Статистика использования, Платежи) сохраняют узнаваемость”**.

### Что добавили

- **Новые разделы в веб-приложении:**
    - **Templates** (библиотека готовых решений по индустриям, фильтрация Beginner/Expert, one-click deployment и т.д.)
    - **Constructor** (no-code, drag-and-drop, визуальный редактор промптов)
    - **Models** (дублирование из документации: список/сравнение/рекомендации/примеры)
- **Quick Links (правая панель):** добавлены “Business Tools”, “Project Manager”, “ROI Calculator”.
- **Роль-адаптивный интерфейс:** Beginner Mode / Business Mode / Expert Mode.

### Что переработали / расширили

- **Dashboard:** из “базовой информации” → расширенный, с калькулятором, сравнениями, рекомендациями (в ИА) и с отдельными подпунктами (Overview/Cost Calculator/Quick Actions/Personal Recommendations).
- **Playground:** расширение за счёт prompt library, saved experiments, готовых сценариев, метрик качества, шаринга.
- **Analytics (Usage):** расширение в сторону трендов/паттернов, оптимизационных рекомендаций, прогнозирования затрат, экспорта отчётов.
- **API Keys:** добавление лимитов, webhooks, real-time monitoring, alerts.
- **Plans / Billing:** добавлены ROI-калькуляторы/прогнозы/алерты/рекомендации и детализация.
- **Смещение логики выбора в сторону задач (как сформулировано в кейсе):**
    - “главная страница теперь включает раздел ‘Я хочу...’, где можно выбрать модели по бизнес-потребностям” **[нужно уточнить, где именно это отражено в sitemap/экранах — в структуре как конкретный экран/блок не прописан, только в выводах]**
    - “модели дополнены коллекциями по бизнес-кейсам, типам приложений и бюджетам” (логика каталога/группировок)
    - “добавлены сравнение параметров и тестовый режим в playground” (как улучшение выбора)

---

## Вывод

Логика новой ИА — **наблюдение → значение → дизайн-импликация** (строго по формулировкам из заметок).

1)

- **Наблюдение:** “Сохранение знакомой структуры навигации” + в кейсе: “основные разделы (Ключи API, Статистика использования, Платежи) сохраняют узнаваемость”.
- **Значение:** переход с конкурирующих платформ и “вход” в продукт становятся менее болезненными: пользователь узнаёт базовую логику.
- **Дизайн-импликация:** при добавлении новых возможностей удерживать знакомую “скелетную” структуру и не ломать ментальную модель (Keys/Usage/Billing остаются якорями).

2)

- **Наблюдение:** добавлены Templates / Constructor / Models, а также режимы Beginner/Business/Expert (адаптивный интерфейс по ролям).
- **Значение:** продукт перестаёт быть “только для технических” и поддерживает разные уровни компетенций и разные цели (быстрый старт vs бизнес‑контроль vs экспертная глубина).
- **Дизайн-импликация:** делать роль-ориентированные entry points и “скрывать сложность” для новичка, не урезая мощность для эксперта (как прямо описано: hidden/simplified/priority sections).

3)

- **Наблюдение:** Dashboard/Analytics/Billing/Plans расширяются в сторону калькуляторов, прогнозов, рекомендаций, алертов и “экспорта отчетов”.
- **Значение:** интерфейс становится не просто “панелью показателей”, а инструментом контроля, планирования и оптимизации.
- **Дизайн-импликация:** на ключевых экранах фокус смещается на decision-support: cost/ROI/forecast/alerts и быстрые действия, а не только отображение данных.

4)

- **Наблюдение:** в выводах по ИА (в кейсе) зафиксирован “фокус на задачах” (раздел “Я хочу…”) и “каталог моделей” с коллекциями по бизнес-кейсам/типам приложений/бюджетам + “сравнение параметров и тестовый режим”.
- **Значение:** навигация и каталог помогают выбирать модель/решение по цели, а не по техническим названиям и хаотичному списку моделей.
- **Дизайн-импликация:** структурировать discovery вокруг задач и контекста использования (коллекции, сравнение, тестирование), и “разводить” базовый и продвинутый уровни (двухэтапная ясность настроек — см. выводы в кейсе). **[нужно уточнить]** — где именно в текущем sitemap зафиксирован экран/механика “Я хочу…”, кроме текстовых выводов.

---

**Использованные заметки/страницы Notion (для проверки источников)**

1. **Информационная архитектура веб-приложения AIMLAPI** (принципы обновления + обновленная структура разделов + режимы по ролям) ([Информационная архитектура веб-приложения AIMLAPI](https://app.notion.com/p/AIMLAPI-233a770b8806809db75dc81ed3453555?pvs=21))
2. **AI/ML API Web App Structure** (архитектура приложения + детальный sitemap с роутами + quick links + mobile + modes) ([**AI/ML API Web App Structure**](https://app.notion.com/p/AI-ML-API-Web-App-Structure-25aa770b88068188ace4dbe655eb2932?pvs=21))
3. **Редизайн веб-приложения AI/ML API** (выводы по ИА: “узнаваемая структура”, “Я хочу…”, “коллекции по бизнес-кейсам/бюджетам”, “сравнение параметров”, “двухэтапная ясность настроек”, “интерактивное руководство”) ([**Редизайн веб-приложения AI/ML API**](https://app.notion.com/p/AI-ML-API-25aa770b880681188945c7cbffedc0fc?pvs=21))