# Token/context efficiency policy

Goal: reduce context cost **without reducing correctness, safety or verification**.

## Budgets
- Root/scoped `AGENTS.md`: hard cap 4 KiB; target materially below it.
- `CODEX_BOOTSTRAP_PROMPT.md`: ≤1 KiB.
- `docs/00_INDEX.md`: ≤4 KiB.
- Before editing code, a normal task should need one context pack and roughly 2–5 docs, not the whole knowledge base.

## Reading discipline
1. Locate first (`rg --files`, `rg -n`).
2. Read the smallest useful range/file.
3. Expand only after evidence says context is missing.
4. Never dump whole logs, lockfiles, generated outputs or large schemas just to inspect them.
5. Prefer source near the edit over prose summaries of source code.

## Prompt/session discipline
- Prompt like a GitHub issue: task, scope, acceptance criteria, named paths when known.
- Do not restate architecture already in repo docs.
- One coherent task/PR; use a fresh session when switching to an unrelated task so old history is not carried indefinitely.
- Execution plans store links + deltas/decisions, not copied specifications.

## Validation discipline
Token savings never justify skipping tests, auth/safety checks, migration checks, visual QA or required release gates. Run focused checks first; run broad suites at phase/release gates or when affected surface warrants them.

## Mechanical guard
`node scripts/check-context-budget.mjs` enforces project-doc size limits. CI must run it in Phase 0.

## Evaluation
When changing these rules, compare representative tasks on both **task success** and token use. Keep an optimization only if correctness is unchanged or better. Avoid silent project-doc truncation and aggressive tool-output caps unless separately measured.

Basis: current OpenAI Codex/harness guidance favors short map-like AGENTS files, progressive disclosure, lean prompts and task-sized work; community experience also favors scoped instructions/search-first reading. Community claims are treated as heuristics, not guarantees.
