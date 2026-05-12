# Setup Process

Документация того, что и почему было сделано при инициализации проекта. Служит ориентиром при онбординге и разборе решений на интервью.

---

## 1. Инициализация Next.js 16

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --eslint --turbopack --use-npm --yes
```

**Флаги и их смысл:**

| Флаг | Что включает |
|------|-------------|
| `--typescript` | TypeScript strict mode |
| `--tailwind` | Tailwind CSS v4 + PostCSS |
| `--app` | App Router (не Pages Router) |
| `--src-dir` | Код в `src/` а не в корне |
| `--import-alias "@/*"` | Алиас вместо относительных `../../` путей |
| `--eslint` | Базовый ESLint конфиг |
| `--turbopack` | Быстрый dev-бандлер (заменяет Webpack для dev) |

---

## 2. Зависимости

### Runtime

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
npm install @reduxjs/toolkit react-redux
npm install graphql graphql-request
npm install react-hook-form @hookform/resolvers zod
npm install @sentry/nextjs
```

### Dev / тестирование

```bash
npm install -D vitest @vitejs/plugin-react happy-dom
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install -D @playwright/test
npm install -D msw
npm install -D prettier eslint-config-prettier prettier-plugin-tailwindcss
npx playwright install chromium
```

**Почему `happy-dom` вместо `jsdom`:** Node 20.18 не поддерживает `require(esm)`. jsdom тянет ESM-only зависимости (`@csstools/css-calc`), что ломает Vitest. happy-dom — легче и не имеет этой проблемы. После апгрейда Node до 20.19+ / 22 LTS можно вернуться на jsdom.

### UI

```bash
npx shadcn@latest init --defaults --yes
```

Инициализирует shadcn/ui — копирует компоненты в `src/components/ui/`, создаёт `src/lib/utils.ts` с утилитой `cn`, обновляет `globals.css` с CSS-переменными.

---

## 3. Структура папок

```
src/
├── app/
│   ├── (public)/        # Route group — публичные страницы (не влияет на URL)
│   ├── (app)/           # Route group — authenticated shell
│   ├── layout.tsx       # Root layout: html, body, Providers
│   └── providers.tsx    # 'use client': TanStack Query + Redux
├── components/
│   ├── ui/              # shadcn primitives (auto-generated)
│   └── features/        # Переиспользуемые компоненты между фичами
├── features/            # Feature-sliced: каждая фича — отдельная папка
├── lib/                 # Утилиты (cn, конфиги клиентов и т.д.)
├── hooks/               # Переиспользуемые хуки
├── store/               # Redux Toolkit: store, slices, typed hooks
├── types/               # Общие TypeScript типы
└── mocks/               # MSW: handlers, browser worker, node server
```

---

## 4. App Shell и Route Groups

**Паттерн route groups** (`(public)` / `(app)`):
- Скобки в имени папки → папка **не попадает в URL**
- Каждая группа имеет свой `layout.tsx`
- Публичные страницы и authenticated страницы живут в разных layout-ах

```
app/layout.tsx            → root (html, body, шрифты, провайдеры)
app/(public)/layout.tsx   → можно добавить маркетинговый хедер/футер
app/(app)/layout.tsx      → sidebar + main для authenticated зон
```

**Providers — граница Server/Client:**
```
Root layout (Server Component)
  └── <Providers> (Client Component — 'use client')
        ├── <ReduxProvider store={store}>
        └── <QueryClientProvider client={queryClient}>
```

Root layout **не может** быть Client Component — он экспортирует `metadata`. Поэтому провайдеры вынесены в отдельный Client Component.

**Async params в Next.js 15+:**
```tsx
// ❌ было до Next.js 15
export default function Page({ params }: { params: { id: string } }) {}

// ✅ начиная с Next.js 15
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
}
```

---

## 5. Тестовая инфраструктура

### Vitest

```ts
// vitest.config.mts (расширение .mts → принудительно ESM)
{
  environment: 'happy-dom',
  setupFiles: ['./tests/setup.ts'],
  globals: true,
}
```

### MSW (Mock Service Worker)

Три точки входа:
- `src/mocks/handlers.ts` — общие обработчики запросов
- `src/mocks/server.ts` — Node-сервер для Vitest
- `src/mocks/browser.ts` — Service Worker для браузера (dev/E2E)

`tests/setup.ts` запускает MSW-сервер до тестов и сбрасывает handlers после каждого теста.

### Playwright

`playwright.config.ts` настроен на:
- `testDir: ./tests/e2e`
- Автозапуск dev-сервера через `webServer`
- Только Chromium (Firefox/WebKit добавить когда нужно)

---

## 6. Redux store

```ts
// src/store/index.ts
export const store = configureStore({ reducer: {} });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// src/store/hooks.ts — типизированные обёртки
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
```

Всегда использовать `useAppDispatch`/`useAppSelector` вместо `useDispatch`/`useSelector` — иначе теряется типизация.

---

## 7. ESLint + Prettier

**ESLint** (`eslint.config.mjs` — flat config):
- `@typescript-eslint/no-explicit-any: error` — `any` запрещён
- `react-hooks/exhaustive-deps: error` — пропущенные deps в хуках
- `eslint-config-prettier` — отключает конфликтующие с Prettier правила

**Prettier** (`.prettierrc`):
- `singleQuote: true`, `trailingComma: 'all'`, `printWidth: 100`
- `prettier-plugin-tailwindcss` — сортировка классов Tailwind

VSCode (`settings.json`): `formatOnSave: true`, ESLint `fixAll` on save.

---

## 8. Claude Code интеграция

**CLAUDE.md** → `@AGENTS.md` (один источник правды для всех AI-агентов).

**Slash commands** (`.claude/commands/`):

| Команда | Что делает |
|---------|-----------|
| `/review` | Senior code review: 🔴 critical, 🟡 improve, 🟢 nit |
| `/test` | TDD-guided: контракт → тест-кейсы → ты пишешь → review |
| `/explain` | Разбор паттерна: суть → trade-offs → когда/не когда → follow-ups |
| `/interview` | Mock-интервью: теория, код, system design |

**MCP** (`.mcp.json`):
- `context7` — актуальные доки Next.js 16, TanStack Query, RTK (без устаревших ответов)
- `playwright` — Claude открывает браузер, кликает, читает консоль

---

## 9. npm scripts

```bash
npm run dev          # Next.js dev (Turbopack)
npm run build        # Prod build
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint
npm test             # Vitest run once
npm run test:watch   # Vitest watch
npm run test:e2e     # Playwright
npm run format       # Prettier write
```

---

## Известные ограничения

| Проблема | Причина | Решение |
|----------|---------|---------|
| `happy-dom` вместо `jsdom` | Node 20.18 не поддерживает `require(esm)` | Обновить Node до 20.19+ или 22 LTS |
| `vitest.config.mts` (не `.ts`) | Та же причина — принудительный ESM | Обновить Node |
| Нет CRLF конфига | Windows выдаёт предупреждения при коммите | Добавить `.gitattributes` |
