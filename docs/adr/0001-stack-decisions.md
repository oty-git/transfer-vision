# ADR 0001: Initial Stack Decisions

- **Status:** Accepted
- **Date:** 2026-05-07
- **Context:** Setting up `transfer-vision` as a Senior Frontend learning project — single Next.js app, single contributor, goal is interview prep + production-pattern practice.

## Decision

| Concern | Choice | Why |
|---------|--------|-----|
| Framework | Next.js 16 (App Router, Turbopack, React Compiler) | Industry-standard React framework; App Router and React 19 are current Senior interview territory. |
| Language | TypeScript strict, no `any` | Senior bar. Catches more bugs than runtime tests. ESLint enforces. |
| Server state | TanStack Query | De-facto standard for async data in React. Better DX than RTK Query for this use case. |
| Client state | Redux Toolkit | Owner has prior depth here; common in Senior interviews. RTK Query studied separately as a comparison point. |
| API protocol | REST + GraphQL (graphql-request) | Owner needs both on the resume. Both flow through TanStack Query. |
| UI | Tailwind CSS v4 + shadcn/ui | Tailwind is the default at most companies; shadcn gives accessible primitives without lock-in. |
| Forms | React Hook Form + Zod | Best perf + type-safety combo. Zod schemas reusable on the server. |
| Unit tests | Vitest + React Testing Library | Vitest is faster than Jest with native ESM/TS. RTL is the standard. |
| E2E | Playwright | Better DX than Cypress; first-class TypeScript; multi-browser. |
| Network mocking | MSW | Same handlers for unit, dev, and E2E. Closer to real network than `vi.fn()` mocks. |
| Monitoring | Sentry | Industry standard. Owner needs hands-on for interviews. |
| Deploy | Vercel via GitHub Actions | Frictionless for Next.js. CI runs lint+test+build before deploy. |

## Studied but rejected (with reasoning)

- **Apollo Client** — heavier than `graphql-request` + TanStack Query; cache complexity not worth it for this project. Studied for trade-off awareness in interviews.
- **Redux Saga** — owner has prior experience; legacy. New code uses RTK + Thunks (or RTK Query). Saga reviewed only for legacy-codebase familiarity.
- **Jest** — Vitest replaces it cleanly with better speed and zero config in Vite-based / Next.js projects.
- **Cypress** — Playwright wins on DX, debugging, and parallelism for this project's scale.
- **Module Federation** — solves a problem we don't have (independent deploys of micro-frontends). Studied conceptually only.

## Deferred

These will get their own ADRs when revisited. Reasoning for deferring:

- **Monorepo (Turborepo)** — single app today. Adds overhead without payoff until we split.
- **Real backend (NestJS / Express / Prisma)** — Next.js Route Handlers are sufficient for the data we have. Move when domain logic outgrows them.
- **Auth provider** — depends on backend choice and product direction.
- **CI/CD beyond basic lint+test+build** — unnecessary complexity until first real deploy.

## Consequences

- We accept some duplication: separate `@reduxjs/toolkit` and `@tanstack/react-query` dependencies, two state-management mental models.
- Tailwind v4 is new — fewer Stack Overflow answers; rely on `context7` MCP for current docs.
- Shadcn components live in our repo, not as a dependency — we own them.
- Sentry is wired up early but only meaningful once a real error budget exists.
