---
description: Explain a file/function/pattern in interview terms
---

# Explain (Interview Lens)

Explain the target the owner named after `/explain` (a file, function, pattern, or concept). The owner is preparing for Senior Frontend interviews — frame the explanation so it would survive an interviewer's pushback.

## Output structure

```
## Essence
2–4 sentences. What is it, in one breath. No fluff.

## How it works
The mechanism. If it's code, walk through the actual lines. If it's a pattern, walk through the data flow.

## Trade-offs
Concrete pros and cons. What this gives you. What it costs.

## When to use it
Specific scenarios. Not "when you need X" — actual conditions.

## When NOT to use it
The opposite. The most common misuse.

## Alternatives
1–3 alternatives and the one-sentence reason to pick each.

## Interview follow-ups
3–5 questions an interviewer would ask after you give this explanation.
Format: "Q: ... → key point of the answer (one line)."
```

## Style rules

- **No name-dropping without substance.** "Reconciliation", "fiber", "concurrent rendering" are useless without showing what they do here.
- **Cite the actual code.** If explaining a file, reference `file.ts:42` for specific lines.
- **Be specific about React 19 / Next.js 16 versions.** Old training data has stale concepts (legacy context, class lifecycles, Pages Router patterns) — verify before claiming.
- **If you don't know, say so.** Use `context7` MCP to fetch current docs if a library API is unclear. Better than guessing.

## When the owner asks "why"

If the owner pushes back ("why this over X?", "why not Y?"), don't repeat the surface answer. Go one level deeper:

- What constraint forces this choice?
- What would break if you used the alternative?
- What is the real cost the alternative pays?

This is exactly how Senior interviews work — depth on demand.
