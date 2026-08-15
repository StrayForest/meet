# Active plan — Phase 0 Foundation

## Goal
Create an agent-legible, production-shaped monorepo with enforceable architecture/design boundaries before product feature implementation.

## Source specs
AGENTS.md, ARCHITECTURE.md, DESIGN.md, FRONTEND.md, 08_REPOSITORY_STRUCTURE.md, 09_FIXED_ARCHITECTURE_DECISIONS.md, 10_IMPLEMENTATION_BACKLOG.md.

## Milestones
1. pnpm/Turborepo/Node24/strict TS workspace.
2. app/package skeletons.
3. lint/format/test/build commands.
4. design-token generation into `packages/ui`.
5. Postgres/PostGIS + Valkey local environment.
6. contract/error/idempotency primitives.
7. architecture boundary lint/structural tests.
8. OTel/Sentry/PostHog abstractions/no-op local providers.
9. Terraform skeleton.
10. CI including docs/link/generated freshness checks.
11. deterministic fixture/visual screenshot harness shell.

## Non-goals
No real consumer feature, real payment, real KYC, custom ML or production deployment.

## Acceptance
A fresh checkout has one documented setup command, all root quality commands pass, architecture/design docs are discoverable, and Codex can boot/test a worktree without hidden human setup.

## Progress log
- [ ] not started

## Decisions/deviations
None. Any fixed-stack conflict requires ADR.