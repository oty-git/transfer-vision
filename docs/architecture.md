# Architecture

> Living document. Update when significant decisions change. For locked-in decisions with rationale, write an ADR in `docs/adr/`.

## High-level shape

This is a single Next.js 16 application using the App Router. There is no separate backend yet — Route Handlers in `src/app/api/` serve as a temporary backend layer. A real backend (NestJS / Express / Prisma) will be introduced when the data and domain logic outgrow Route Handlers.

```
┌─────────────────────────────────────────┐
│           Next.js App Router            │
│                                         │
│  ┌────────────────┐  ┌───────────────┐  │
│  │ Server         │  │ Client        │  │
│  │ Components     │  │ Components    │  │
│  │ + RSC          │  │ ("use client")│  │
│  │   data fetch   │  │   + hooks     │  │
│  └────────┬───────┘  └───────┬───────┘  │
│           │                  │          │
│           ▼                  ▼          │
│  ┌─────────────────────────────────┐    │
│  │   src/lib (shared utilities)    │    │
│  │   src/features/* (domain)       │    │
│  └────────────────┬────────────────┘    │
│                   │                     │
│  ┌────────────────▼────────────────┐    │
│  │   Route Handlers (src/app/api)  │    │
│  │   (placeholder backend)         │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

## Data flow

| Concern | Tool | Where it lives |
|---------|------|----------------|
| Server state (lists, entities, user data from API) | TanStack Query | `src/features/<feature>/queries.ts` |
| Client-only state (UI toggles, multi-step form state, derived UI) | Redux Toolkit | `src/store/` (slices), accessed via typed hooks in `src/store/hooks.ts` |
| Form state | React Hook Form + Zod | colocated with feature |
| URL state | Next.js `useSearchParams` / route params | colocated with feature |
| Server-side fetching | RSC `fetch` (cached) or `fetchQuery` from TanStack Query in Server Components | Server Components in `src/app/` |

**Hard rule:** server data goes through TanStack Query. Client UI state goes through Redux Toolkit. We do not store server responses in Redux, and we do not put UI toggles in TanStack Query.

## Boundaries

- **Server Components by default** — only mark `"use client"` when you need state, effects, browser APIs, or event handlers.
- **No server-only code in client modules** — secrets, DB access, server SDKs must never be imported from a `"use client"` module. Keep them in `src/app/api/` or in modules imported only by Server Components.
- **`src/features/<feature>/` is the unit of cohesion.** A feature owns its components, hooks, queries, types, and mocks. Cross-feature reuse goes to `src/lib/` or `src/components/`.

## Cross-cutting

- **Error handling** — feature-level `error.tsx` boundaries. Sentry captures all unhandled errors. User-facing errors are typed (`{ code, message, hint? }`).
- **Logging** — server-side via Sentry breadcrumbs; client-side via `console.error` for dev + Sentry for prod.
- **Auth** — TBD (will land in a dedicated ADR before implementation).
- **Validation** — Zod schemas live next to the contract they describe. Client and server use the same schema where possible.
- **Network mocking** — MSW handlers in `src/mocks/`. Used for unit tests, dev (when API is down), and Playwright E2E.

## Performance principles

- **RSC streaming** — render the static shell first, stream slow data with `<Suspense>`.
- **Avoid `"use client"` when not needed** — every Client Component is JS in the bundle.
- **Lazy-load heavy widgets** — charts, maps, video.
- **Image optimization** — use `next/image`. Reference assets in `docs/assets/` are originals; production images go through the optimizer.
- **Web Vitals are non-negotiable** — LCP < 2.5s, INP < 200ms, CLS < 0.1. Track via Sentry Performance.

## Deferred decisions

These will get ADRs when revisited:

- Monorepo (Turborepo, Module Federation) — not needed until we split apps.
- Real backend (NestJS / Express / Prisma) — start when Route Handlers feel cramped.
- Auth provider (Auth.js / Clerk / custom JWT) — depends on backend choice.
- CI/CD beyond a basic GitHub Actions lint+test+build.

## Reference

- Stack rationale: [adr/0001-stack-decisions.md](adr/0001-stack-decisions.md)
- Coding conventions: [conventions.md](conventions.md)
- Reference assets (Transfer Vision originals): [assets/](assets/)
