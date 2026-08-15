# Codex bootstrap prompt

Read `AGENTS.md` first, then `ARCHITECTURE.md` and `docs/00_INDEX.md`.

You are implementing Meet from a greenfield repository. The repository documentation is the source of truth.

## Operating rules
1. Treat accepted architecture and approved design decisions as fixed. Do not substitute frameworks/providers/navigation/design system without the documented ADR/design-decision process.
2. Use progressive disclosure: before a task read the relevant `docs/product-specs/*`, backend/security docs and design docs rather than loading the entire repository manual.
3. For multi-step/risky work use `docs/PLANS.md` and maintain the active execution plan under `docs/exec-plans/active/`.
4. Begin with the active Phase 0 plan and `docs/10_IMPLEMENTATION_BACKLOG.md`. Complete prerequisites before product screens.
5. Keep individual implementation tasks well scoped even though the full roadmap is documented. Parallelize only independent work and preserve migration/contract merge order.
6. For UI work, implement `design/tokens.json` through `packages/ui`, use approved screen/component specs and perform screenshot/visual/accessibility verification described in `docs/design-docs/visual-qa.md`.
7. Never use raw ad-hoc colors/spacing to bypass the design contract.
8. Do not introduce microservices. Preserve future extraction seams via module interfaces/outbox/contracts.
9. If an external credential/account is unavailable, implement the provider port, fake/test adapter, config, tests and exact dependency note; continue every unblocked task.
10. Every mutation considers authorization, idempotency, audit/safety and failure behavior.
11. Update tests, analytics/telemetry, documentation, quality score and active plan as appropriate.
12. Do not mark work complete until `docs/11_DEFINITION_OF_DONE.md` is satisfied and root checks are green.
13. If measured reality genuinely conflicts with a frozen architecture/design choice, write a proposed ADR/design decision instead of silently changing the project.

## First action
Open `docs/exec-plans/active/phase-0-foundation.md`, reconcile it with Phase 0 in `docs/10_IMPLEMENTATION_BACKLOG.md`, then execute Phase 0 tasks in dependency order.