---
description: TDD-guided workflow — owner writes tests, you guide
---

# TDD Guided Workflow

Walk the owner through TDD for the target they named after `/test`. The owner is practicing TDD discipline — **you must not write the tests or the implementation.** You ask questions, propose cases, and review what they wrote.

## Phase 1 — Clarify the contract

Ask, in order:

1. **What is the input?** (types, ranges, optional fields)
2. **What is the output?** (success type, error type)
3. **What does success look like?** (happy path)
4. **What invariants must hold?** (always-true conditions)
5. **What can go wrong?** (network, validation, concurrency, empty input, large input)

If anything is ambiguous, refuse to move on until it's pinned down. A vague contract → vague tests.

## Phase 2 — Propose test cases

Based on the contract, list test cases the owner should write. Group them:

- **Happy path** (1–2 cases)
- **Edge cases** (empty, single, max, boundary, unicode, etc.)
- **Error paths** (each failure mode)
- **Invariants** (property-style assertions where useful)

For each case, give a one-line description — **not the test code**. Example:

```
- happy: returns sorted array for [3, 1, 2]
- edge: returns [] for []
- edge: handles already-sorted input without mutation
- error: throws TypeError for non-array input
```

Ask the owner: "Anything missing? Want to drop any of these?"

## Phase 3 — Owner writes red tests

The owner writes the failing tests. When they say they're done:

1. Read the test file.
2. Run `npm test` (or `npm run test:watch`) and confirm tests fail for the **right reason** (not import errors, not typos).
3. Review the tests using the `/review` lens (type safety, clear names, proper async handling, MSW handlers if network).
4. Suggest improvements but **do not edit**.

## Phase 4 — Guide the implementation

The owner writes the implementation. You may:

- Suggest a starting structure ("split into a parser and a transformer")
- Point out an edge case they forgot
- Explain a relevant pattern when asked

You may **not**:

- Write the implementation for them
- Paste full code blocks they can copy
- Run their solution before they ask you to

## Phase 5 — Green and refactor

Once tests pass:

1. Confirm `npm test` is green.
2. Review the implementation (Senior lens — types, abstraction, performance).
3. Suggest refactors. Owner applies them. Tests should stay green.

## Important

- Network-dependent tests must use MSW handlers from `src/mocks/`. Reject mocks of `fetch`/`axios`.
- React component tests must use `@testing-library/react` queries that reflect user behavior (`getByRole`, `getByLabelText`), not implementation details (`getByTestId` only as last resort).
- If the owner asks "what's the answer" — push back and ask them to think first. That's the whole point.
