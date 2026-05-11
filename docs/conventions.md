# Coding Conventions

## TypeScript

- **Strict mode is non-negotiable.** `strict: true` in `tsconfig.json`. Never weaken.
- **No `any`.** ESLint rule enforces this. Use `unknown` + narrowing instead.
- **Discriminated unions over optional fields** for state with mutually exclusive cases (loading/success/error).
- **Type at module boundaries.** Functions exported from a module declare their types explicitly. Inference is fine internally.
- **Generics over type assertions.** If you find yourself writing `as`, ask if a generic would fix it.

## React 19 / Next.js 16

- **Server Components by default.** Add `"use client"` only when needed. If a component just renders, it should not be a Client Component.
- **No barrel files at module boundaries** — they hurt tree-shaking. Use direct imports.
- **`use()` for unwrapping promises in client.** Don't roll your own Suspense glue.
- **`useActionState` for form submissions** to Server Actions. RHF + Zod for client-side validated forms.
- **Don't fetch in `useEffect`** for server data. Use TanStack Query (or a Server Component).

## State management

- **Server state → TanStack Query.** Anything fetched from an API.
- **Client state → Redux Toolkit.** UI toggles, multi-step wizards, complex local state.
- **Component state → `useState` / `useReducer`.** When the state belongs to one component.
- **URL state → Next.js search params.** Filters, pagination, tab selection.

Never duplicate state. If it's in TanStack Query, don't mirror it into Redux.

## Forms

- React Hook Form for state and submission.
- Zod schema for validation. Same schema used on the server in Route Handlers when possible.
- Errors rendered next to fields, not in a global toast (unless it's a server error).

## File organization

```
src/
├── app/                          # Next.js routing only
│   └── (group)/page.tsx          # route groups for layout reuse
│
├── features/<feature>/           # one feature, all its parts
│   ├── components/               # feature-specific components
│   ├── hooks/                    # feature-specific hooks
│   ├── queries.ts                # TanStack Query hooks
│   ├── schema.ts                 # Zod schemas
│   ├── types.ts
│   └── __tests__/
│
├── components/
│   ├── ui/                       # shadcn primitives (don't add custom logic here)
│   └── features/                 # cross-feature shared components
│
├── lib/                          # framework-agnostic utilities (cn, dayjs config, etc.)
├── hooks/                        # cross-cutting React hooks
├── store/                        # Redux Toolkit (slices, store, typed hooks)
├── types/                        # cross-cutting TS types
└── mocks/                        # MSW (handlers, browser, server)
```

## Naming

- **Files:** `kebab-case.ts` for non-components, `PascalCase.tsx` for components, `camelCase.ts` for hooks (`useFooBar.ts`).
- **Components:** `PascalCase`. One default export per file (the component).
- **Hooks:** `useFooBar`. Always start with `use`.
- **Booleans:** `isX`, `hasX`, `canX`. Never `flagX` or just `X`.
- **Event handlers:** prop is `onSomething`, internal handler is `handleSomething`.
- **Tests:** colocated, `foo.test.ts` next to `foo.ts`, or `__tests__/foo.test.ts` for groups.

## Imports

Use the `@/*` alias instead of relative paths:

```ts
// good
import { cn } from '@/lib/utils';

// bad
import { cn } from '../../../lib/utils';
```

VSCode is configured to prefer non-relative imports (see `.vscode/settings.json`).

Order:
1. Node built-ins
2. External packages
3. `@/*` internal modules
4. Sibling/relative
5. Types (with `import type`)
6. Styles / assets

Prettier handles the formatting; ESLint sorts.

## Tests

- **TDD preferred** for non-trivial logic. Use `/test` slash command for guided flow.
- **Unit tests** with Vitest + RTL. User-behavior queries (`getByRole`, `getByLabelText`). `getByTestId` only when no semantic alternative exists.
- **Network in tests goes through MSW**, never `vi.fn()` on `fetch`.
- **E2E** with Playwright for critical user flows. Don't E2E what unit tests cover well.
- **Don't test implementation details** — internal state, private functions, render counts.

## Comments

- Default to none. Well-named identifiers are the documentation.
- Add a comment only when the **why** is non-obvious: a hidden constraint, a workaround for a specific bug, behavior that would surprise a reader.
- Don't write comments that explain the **what** ("// loop through users"). Don't reference the current task or PR.

## Commits

- Conventional Commits: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`, `perf:`.
- Subject line under ~70 chars, imperative mood ("add X", not "added X").
- Body explains **why**, not **what** (the diff shows what).

## Linting & Formatting

- ESLint flat config (`eslint.config.mjs`). Run with `npm run lint`.
- Prettier formats on save (VSCode) and via `npm run format`.
- Tailwind class sorting via `prettier-plugin-tailwindcss`.
- Pre-commit hook: not yet set up — TBD.
