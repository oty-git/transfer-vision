# Transfer Vision

AI-powered football scouting platform. This repo is a **learning adaptation** used to prepare for Senior Frontend interviews — practicing production patterns end-to-end on a real product idea.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, Turbopack, React Compiler) |
| Language | TypeScript strict — no `any` |
| Server state | TanStack Query |
| Client state | Redux Toolkit |
| API | REST + GraphQL (`graphql-request`) |
| UI | Tailwind CSS v4 + shadcn/ui |
| Forms | React Hook Form + Zod |
| Unit tests | Vitest + React Testing Library |
| E2E tests | Playwright |
| Network mocking | MSW |
| Monitoring | Sentry |
| Deploy | Vercel via GitHub Actions (planned) |

## Commands

```bash
npm run dev          # dev server (Turbopack)
npm run build        # production build
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint
npm test             # Vitest (run once)
npm run test:watch   # Vitest watch
npm run test:e2e     # Playwright
npm run format       # Prettier
```

## Project structure

```
src/
├── app/
│   ├── (public)/        # unauthenticated pages (landing)
│   ├── (app)/           # authenticated shell (sidebar + pages)
│   ├── layout.tsx       # root layout — fonts, Providers
│   └── providers.tsx    # 'use client' — TanStack Query + Redux
├── components/
│   ├── ui/              # shadcn primitives
│   └── features/        # cross-feature shared components
├── features/            # feature-sliced modules
├── lib/                 # shared utilities
├── hooks/               # shared React hooks
├── store/               # Redux Toolkit (slices, store, typed hooks)
├── types/               # shared TS types
└── mocks/               # MSW handlers

tests/
├── e2e/                 # Playwright specs
└── setup.ts             # Vitest setup (RTL matchers, MSW lifecycle)

docs/
├── architecture.md      # system design decisions
├── conventions.md       # coding conventions
├── adr/                 # Architecture Decision Records
└── assets/              # reference images (Transfer Vision originals)
```

## Claude Code integration

Custom slash commands in `.claude/commands/`:

- `/review` — Senior-level code review (🔴🟡🟢)
- `/test` — TDD guided workflow
- `/explain` — explain pattern/file in interview terms
- `/interview` — mock technical interview round

MCP servers (`.mcp.json`): `context7` (live docs), `playwright` (browser automation).

## Docs

- [Architecture](docs/architecture.md)
- [Conventions](docs/conventions.md)
- [ADR 0001 — Stack decisions](docs/adr/0001-stack-decisions.md)
