# 10 — Exact implementation backlog

Execute in dependency order. Large phases are a roadmap; implementation work must remain well scoped. Codex may parallelize independent tasks, but merge order preserves migrations/contracts. For multi-step work maintain an execution plan.

## Phase 0 — Agent-legible repository, design and platform foundation

### P0-000 Documentation harness
Validate root maps/index, add docs link checker, reserve `docs/generated/` regeneration checks and ensure architecture/design decisions are mechanically discoverable.
Acceptance: no broken indexed links; one command validates docs when tooling exists.

### P0-001 Monorepo
Create pnpm/Turborepo workspace with `apps/mobile`, `apps/web`, `apps/b2b`, `apps/admin`, `apps/api`, `apps/workers`, shared packages and `infra`.
Acceptance: root lint/typecheck/test/build commands work.

### P0-002 Toolchain
Pin Node 24 LTS, pnpm 11, strict TS, ESLint, Prettier, Vitest, editor config and deterministic installs.

### P0-003 Design token pipeline and primitives
Generate typed light/dark token exports from `design/tokens.json` into `packages/ui`; build Button, Text, Icon, Avatar, Badge, Chip, Input, SearchField, Card shell, Sheet/Modal, Banner, Toast, Skeleton, EmptyState and ErrorState primitives.
Acceptance: no product screen needs raw color/space/radius values; component preview/tests cover states/themes/text expansion.

### P0-004 Shared contracts
Create UUID/value schemas, Problem Details errors, cursor pagination, locale/country/money/time contracts and stable error-code baseline.

### P0-005 Local dependencies
PostgreSQL 18 + PostGIS, Valkey and test/fake async/storage/providers with one documented bootstrap command.

### P0-006 Database migration baseline
Drizzle migrations; enable PostGIS and pg_trgm; zero-to-latest migration test.

### P0-007 Architecture boundary enforcement
Add dependency/structural checks that prevent forbidden module imports, server business logic in shared contracts and consumer access to admin-only packages. Add lint/rule for design-token bypass where practical.

### P0-008 Observability baseline
Request/correlation IDs, structured logs, OTel hooks, Sentry adapters/no-op local behavior.

### P0-009 Analytics baseline
Canonical analytics package, PostHog provider interface and no-op/test provider.

### P0-010 Config/feature flags
Runtime env validation, country config loader and feature flag abstraction.

### P0-011 Deterministic fixtures and visual QA harness
Create seeded fixtures and runnable/screenshot-capable shell for mobile/web reference states. Establish visual snapshot directory/process without pretending implementation screenshots already exist.

### P0-012 Terraform foundation
Module/env folders, GCP provider/state strategy and least-privilege/WIF design.

### P0-013 CI
GitHub Actions for docs links/generated freshness, architecture checks, lint/typecheck/tests/contracts/migrations/build/security scans. UI jobs gain screenshot/accessibility gates as reference screens become implemented.

**Phase 0 gate:** fresh checkout is bootable from documented commands; root checks are green; design tokens/primitives and architecture checks exist before product UI.

## Phase 1 — Auth, user and Finland foundation

### P1-001 Identity Platform adapter
Token/session validation + test adapter.

### P1-002 Internal user bootstrap
Create UUIDv7 User on first valid auth.

### P1-003 Profile data
Public/private profile split, nickname, DOB, gender, city, languages, interests.

### P1-004 18+ server policy
Cannot bypass through client.

### P1-005 Preferences
Privacy/discovery/notification preferences.

### P1-006 Device registration
Push token/device model.

### P1-007 Account status
ACTIVE/RESTRICTED/SUSPENDED/DELETION_PENDING/DELETED.

### P1-008 Finland seed/config
Country, FI/EN/RU, cities/regions import strategy.

### P1-009 Mobile onboarding
Implement `product-specs/new-user-onboarding.md` and approved design specs using token primitives. Capture FI/EN/RU + large-text reference screenshots and accessibility evidence.

### P1-010 Consumer web shell
Auth/deep-link/public shell with frontend/design contracts.

## Phase 2 — Events, venues and ingestion

### P2-001 Venue model + PostGIS indexes
### P2-002 Event/EventOccurrence model
### P2-003 Event translations/media/restrictions
### P2-004 Public/private location split
### P2-005 Recurrence materialization worker
### P2-006 Connector framework
### P2-007 Raw event record/provenance/rights storage
### P2-008 Canonical normalizer
### P2-009 Organizer/venue entity resolution
### P2-010 Dedupe engine v1
### P2-011 Admin dedupe queue
### P2-012 Helsinki/first highest-value licensed/open Finland source connector
### P2-013 Additional Finland connectors one-by-one from source register after current license review
### P2-014 Source health dashboard
### P2-015 Multi-source cancellation/update reconciliation

**Phase gate:** nationwide event store can be populated without source-specific fields leaking into canonical domain; provenance/rights retained.

## Phase 3 — Discovery, map, search

### P3-001 Occurrence-centric discovery query layer
### P3-002 Nearby PostGIS feed
### P3-003 For You / Now / Today / Weekend / Nearby sections
### P3-004 Deterministic ranker + score explanation
### P3-005 FTS + pg_trgm search
### P3-006 Natural-language → structured-filter parser
### P3-007 Map viewport/clustering endpoint
### P3-008 Event detail API
### P3-009 Mobile Home per discovery/design specs + visual QA
### P3-010 Mobile MapLibre map per map/privacy specs + visual QA
### P3-011 Search/filter UX
### P3-012 Public event web pages/deep links/SEO

## Phase 4 — Community event creation

### P4-001 Idempotent create-event command
### P4-002 Draft/edit/review/publish lifecycle
### P4-003 Location selection including private-home model
### P4-004 Capacity/join policies
### P4-005 Eligibility/audience policies
### P4-006 Signed media upload/quarantine/process/publish
### P4-007 Mobile creation wizard per product/design specs + autosave
### P4-008 Host management
### P4-009 Material update/cancellation notifications

## Phase 5 — Participation, approval, waitlist

### P5-001 Participation state machine
### P5-002 Transactionally safe instant join
### P5-003 Approval-required join
### P5-004 Leave/cancel + capacity release
### P5-005 Waitlist ordering
### P5-006 Cloud Tasks slot offers/expiry
### P5-007 Invitations/private joins
### P5-008 Participant privacy/block awareness
### P5-009 Calendar export/handoff
### P5-010 Reminders
### P5-011 Concurrency/load tests for popular-event join storm

## Phase 6 — Pods, chat, realtime

### P6-001 Pod model/state
### P6-002 Pod capacity/approval
### P6-003 Pod meeting point
### P6-004 Conversation/membership model
### P6-005 Durable messages
### P6-006 Authenticated WebSocket gateway
### P6-007 Valkey cross-instance fan-out
### P6-008 Chat report/moderation integration
### P6-009 Mobile chats per contextual/non-dating design contract
### P6-010 Pods on imported events — launch-critical differentiator

## Phase 7 — Attendance, reputation, connections

### P7-001 QR/code check-in
### P7-002 Attendance signal reconciliation
### P7-003 No-show derivation/policy
### P7-004 Structured post-event feedback
### P7-005 Reputation read projection/badges
### P7-006 Mutual connections
### P7-007 Connection DM only after permission
### P7-008 Block enforcement across all social paths

## Phase 8 — Trust, identity, moderation

### P8-001 Report API/taxonomy
### P8-002 Moderation cases/evidence
### P8-003 Reason-coded actions
### P8-004 Appeals
### P8-005 Admin moderation queue
### P8-006 Identity-provider abstraction + dev fake
### P8-007 Finland strong-eID provider integration after provider/legal selection
### P8-008 International age/KYC provider interface
### P8-009 Private-home verification gate
### P8-010 KMS-backed exact-address encryption/access
### P8-011 Share My Plans
### P8-012 AI text/image moderation pre-screen provider
### P8-013 Anti-dating/sexual solicitation enforcement
### P8-014 Trust/safety analytics dashboard

## Phase 9 — Organizations / B2B2C

### P9-001 Organization type/status model
### P9-002 Imported unclaimed organizations
### P9-003 Claim flow/evidence
### P9-004 Organization verification
### P9-005 RBAC with six roles + permission matrix tests
### P9-006 B2B Next.js application shell
### P9-007 Organization event/recurring management
### P9-008 Attendee approval/removal
### P9-009 QR check-in dashboard
### P9-010 Basic organization analytics
### P9-011 Announcements
### P9-012 Organization/staff audit coverage

## Phase 10 — Production infrastructure hardening

### P10-001 Terraform dev environment
### P10-002 Isolated staging
### P10-003 Production GCP topology
### P10-004 Cloudflare WAF/rates/Turnstile
### P10-005 Origin protection
### P10-006 Cloud SQL HA/PITR/backups
### P10-007 CI deploy via Workload Identity Federation
### P10-008 Canary/rollback using Cloud Run revisions
### P10-009 Alerts/SLO dashboards
### P10-010 Budgets/quotas/max-instance safeguards
### P10-011 Security/authorization review
### P10-012 External pentest before broad private-home launch

## Phase 11 — Finland public launch

### P11-001 Event source coverage/freshness review by city/category
### P11-002 FI/EN/RU localization QA
### P11-003 Terms/privacy/community-guideline versioning
### P11-004 DPIA/privacy legal launch gate
### P11-005 DSA/moderation process launch gate
### P11-006 Support/moderation operating process
### P11-007 App Store/Google Play production builds
### P11-008 Consumer web production
### P11-009 City liquidity dashboards; Helsinki activation first
### P11-010 Feature-flagged private-home rollout after safety evidence/pentest
### P11-011 Finnish usability/accessibility validation across age/language cohorts; resolve launch-blocking design findings

## Phase 12 — Monetization only after activity proof

### P12-001 Stripe Billing adapter/webhooks
### P12-002 Entitlements
### P12-003 Organization Pro
### P12-004 Promoted events with clear labeling/ranking guardrails
### P12-005 B2B billing UI
### P12-006 Affiliate ticket links per provider agreement
### P12-007 Native ticketing product/legal feasibility
### P12-008 Stripe Connect only if marketplace payouts approved

## Phase 13 — ML and Nordic expansion

### P13-001 Reliable warehouse models
### P13-002 Privacy-reviewed attendance prediction dataset
### P13-003 ML ranker offline evaluation
### P13-004 Feature-flagged online experiment
### P13-005 Sweden config/localization/connectors + local usability review
### P13-006 Norway EEA config/localization/connectors + local usability review
### P13-007 Denmark config/localization/connectors + local usability review
### P13-008 External search index only when Postgres metrics justify it

## Build-order prohibition
Do NOT prioritize before core phases: custom ML, stories/reels, voice/video, complex Groups, consumer premium, native ticket marketplace, microservices or visual redesign outside approved design-decision process.