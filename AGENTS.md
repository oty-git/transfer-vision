<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Transfer Vision — Senior Frontend Learning Project

This file is the single source of truth for AI agents (Claude Code, Cursor, Codex, etc.) working in this repo. `CLAUDE.md` references this file via `@AGENTS.md`.

## Project Context

**Transfer Vision** — AI-powered football scouting platform. This repo is the **learning adaptation** used by the owner to prepare for Senior Frontend interviews and practice production patterns end-to-end.

The product itself is a 4-stage scouting funnel → TVS Index player rating → club recommendations, with a freemium → premium → B2B monetization model. Reference assets live in `docs/assets/`.

## Primary Working Principle

The owner is preparing for interviews. **Do not write production code unless explicitly asked.** Default to:

- **Explain** patterns, trade-offs, and "why this over that"
- **Review** code the owner wrote (use `/review` command — Senior-level critique)
- **Guide** through TDD (`/test`) and mock interviews (`/interview`)
- **Suggest** approaches, but let the owner type the implementation

When unsure whether the owner wants code or explanation — ask.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, Turbopack, React Compiler) |
| Language | TypeScript strict, **no `any`** (use `unknown` + narrowing) |
| Server state | TanStack Query |
| Client state | Redux Toolkit (RTK) — also know RTK Query for comparison |
| API | REST + GraphQL via `graphql-request` + TanStack Query |
| UI | Tailwind CSS v4 + shadcn/ui |
| Forms | React Hook Form + Zod (validation always) |
| Unit tests | Vitest + React Testing Library |
| E2E tests | Playwright |
| Network mocking | MSW (both unit and E2E) |
| Monitoring | Sentry |
| Deploy | Vercel (planned) via GitHub Actions |

**Deferred decisions:** monorepo (Turborepo / Module Federation), backend (NestJS / Express / Prisma — currently using Next.js Route Handlers as a placeholder).

**Study theoretically (do not build on):** Redux Saga (legacy), Apollo Client (know trade-offs), Module Federation (concept).

## Conventions

- Server state → TanStack Query. Client state → Redux Toolkit. **Never** the reverse.
- Forms: React Hook Form + Zod resolver. No uncontrolled-only forms in production code.
- Components: feature-sliced. UI primitives in `src/components/ui/` (shadcn). Feature components in `src/components/features/` or `src/features/<feature>/`.
- Server vs Client components: prefer Server by default. Add `"use client"` only when needed (state, effects, browser APIs, event handlers).
- Imports: use `@/*` alias, not relative `../../..`.
- Tests live next to code: `foo.ts` + `foo.test.ts` (or `__tests__/foo.test.ts` for groups).
- TDD preferred for new logic. Network mocked via MSW handlers in `src/mocks/`.

## Folder Structure

```
src/
├── app/                  # Next.js App Router (pages, layouts, route handlers)
├── components/
│   ├── ui/               # shadcn primitives
│   └── features/         # cross-feature shared components
├── features/             # feature-sliced modules (scouting, players, ratings)
├── lib/                  # utilities (cn, query client, sentry init, etc.)
├── hooks/                # shared React hooks
├── store/                # Redux Toolkit slices + store
├── types/                # shared TS types
└── mocks/                # MSW handlers (handlers.ts, browser.ts, server.ts)

tests/
├── e2e/                  # Playwright specs
└── setup.ts              # Vitest setup (RTL matchers, MSW lifecycle)

docs/
├── architecture.md
├── conventions.md
├── adr/                  # Architecture Decision Records
└── assets/               # reference images, screenshots
```

## Commands

```
npm run dev              # Next.js dev server (Turbopack)
npm run build            # production build
npm run start            # serve production build
npm run lint             # ESLint
npm run typecheck        # tsc --noEmit
npm test                 # Vitest (run once)
npm run test:watch       # Vitest watch mode
npm run test:e2e         # Playwright
npm run format           # Prettier write
```

## MCP Servers

Configured in `.mcp.json` (project-scoped, committed):

**Active:**
- `context7` — fetches up-to-date docs for libraries on demand. Critical for Next.js 16 / React 19 / TanStack Query / RTK so suggestions don't rely on stale training data.
- `playwright` — opens a browser, clicks through UI, reads console/network. Used to verify UI changes before reporting "done".

**Intentionally NOT installed:**
- `filesystem` — Claude Code's built-in Read/Write/Edit/Glob/Grep already cover this. MCP duplicates functionality.
- `github` — `gh` CLI via Bash covers all solo-project scenarios (`gh pr create`, `gh issue list`, `gh pr view`, etc.).

**Optional (add when justified):**
- `sentry` — once a real Sentry project is wired up
- `shadcn` — for faster component lookups
- `vercel` — after first deploy, for build/runtime logs
- `postgres` / `sqlite` — once a real backend with a DB exists
- `figma` — once real Transfer Vision design files exist

## Learning Goals (gaps the owner is closing)

TypeScript advanced · Testing (unit + E2E + TDD) · Architecture & patterns · Performance & Web Vitals · System design · Auth & Security · CI/CD · AI-assisted development · Backend basics

When reviewing code or explaining concepts, frame insights against these gaps where relevant.
