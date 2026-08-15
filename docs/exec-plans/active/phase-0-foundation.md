# Active plan — Phase 0 Foundation

## Goal
Create an agent-legible, production-shaped monorepo with enforceable architecture/design/domain/mobile-compatibility boundaries **before any product migration/screen locks in obsolete semantics**.

## Source specs
- `AGENTS.md`
- `ARCHITECTURE.md`
- `docs/00_INDEX.md`
- `docs/DESIGN.md`
- `docs/FRONTEND.md`
- `docs/BACKEND.md`
- `docs/02_DOMAIN_AND_DATABASE.md`
- `schemas/database.dbml` V2
- `docs/MOBILE_RELEASES.md`
- `docs/CLIENT_COMPATIBILITY.md`
- `docs/REALTIME.md`
- `docs/09_FIXED_ARCHITECTURE_DECISIONS.md`
- accepted ADRs
- `docs/10_IMPLEMENTATION_BACKLOG.md`

## Milestones
1. pnpm/Turborepo/Node24/strict TS workspace.
2. app/package skeletons.
3. lint/format/test/build commands.
4. design-token generation + UI primitives.
5. Postgres/PostGIS + Valkey local environment.
6. V2 Drizzle schema/migration with DB checks/constraints.
7. shared contract/error/idempotency/client metadata primitives.
8. first-party OperationalFlag and ClientPolicy service/repository baseline.
9. architecture boundary tests.
10. OTel/Sentry/PostHog adapters/no-op local providers.
11. Expo/EAS config skeleton + runtimeVersion/channel strategy.
12. Terraform skeleton + DB connection budget variables.
13. CI docs/schema/architecture/contracts/migrations checks.
14. deterministic fixtures/visual screenshot harness shell.

## Critical Phase-0 assertions
Automated tests/static checks prove:
- no `EXTERNAL_TICKET` in ParticipationMode;
- EventOccurrence owns physical participation fields;
- private exact location is not a generic Event DTO field;
- PostHog is not operational kill-switch storage;
- idempotency uses non-null actor_scope;
- schema contains staff/device/legal/media/source/alias/notification-delivery/client-policy/operational-flag entities;
- supported client compatibility contract can be represented before mobile product features.

## Non-goals
No real consumer feature, production payment/KYC, custom ML or production deployment.

## Acceptance
Fresh checkout has one documented setup command; root checks green; V2 zero→latest migration succeeds; schema/docs/ADRs agree; Codex can boot/test a worktree without hidden human setup.

## Progress log
- [ ] not started

## Decisions/deviations
Architecture hardening review completed in documentation before implementation. Any new fixed-stack/domain conflict requires ADR.
