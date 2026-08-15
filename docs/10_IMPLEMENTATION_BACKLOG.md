# 10 — Exact implementation backlog

Execute in dependency order. Multi-step work uses `PLANS.md` + active exec plan. A phase gate must pass before downstream work relies on it.

## Phase 0 — Agent-legible repository and platform contracts

### P0-000 Documentation conformance
Validate indexed links, ADR links, DBML/prose references and generated-doc locations.
Acceptance: no broken indexed references; architecture docs identify V2 schema as authoritative.

### P0-001 Monorepo
pnpm/Turborepo with `apps/mobile`, `apps/web`, `apps/b2b`, `apps/admin`, `apps/api`, `apps/workers`, shared packages and `infra`.

### P0-002 Toolchain
Node 24 LTS, pnpm 11, strict TS, ESLint, Prettier, Vitest, deterministic installs.

### P0-003 Design token pipeline/primitives
Generate typed light/dark tokens from `design/tokens.json`; core UI primitives and preview states.

### P0-004 Shared contracts
UUID/value types, Problem Details, cursor pagination, locale/country/money/time, client metadata/capability envelope, stable error codes.

### P0-005 Local dependencies
PostgreSQL 18 + PostGIS, Valkey, fake async/storage/provider adapters. One documented bootstrap command.

### P0-006 V2 database baseline
Implement Drizzle schema/migration from `schemas/database.dbml` V2. Enable PostGIS/pg_trgm.
Mandatory DB CHECK/unique constraints:
- private-home occurrence/location consistency
- canonical connection pair
- conversation context XOR/type consistency
- idempotency actor_scope uniqueness
- subscriber subject consistency
- recurrence subset validity
- alias cycle/self prevention at application + DB-supported layer
Acceptance: zero→latest migration and schema conformance tests.

### P0-007 Architecture boundary enforcement
Prevent forbidden module imports, server logic in shared contracts, consumer access to admin/staff packages and design-token bypass where practical.

### P0-008 Observability baseline
Correlation IDs, structured logs, OTel, Sentry adapters/no-op local.

### P0-009 Analytics baseline
Canonical analytics package/PostHog adapter. Explicit rule: experiments ≠ operational flags.

### P0-010 First-party operational flags
PostgreSQL source + Valkey cache + typed config interface + safe defaults + audit hook. No UI required yet.

### P0-011 Client compatibility baseline
Client metadata headers, `/v1/client/bootstrap` contract, capability model, minimum/recommended version policy repository/service.

### P0-012 Mobile release skeleton
Expo/EAS configuration structure, runtimeVersion strategy, channels/environments documentation; no production credentials required.

### P0-013 Deterministic fixtures + visual QA harness
Seeded fixtures and screenshot-capable mobile/web shells.

### P0-014 Terraform foundation
GCP env/module skeleton, WIF/state design, DB connection budget variables.

### P0-015 CI
Docs/ADR/schema checks, architecture boundaries, lint/typecheck/tests/contracts/migrations/build/security. Visual/accessibility jobs activate as screens appear.

**Phase 0 gate:** fresh checkout boots; V2 schema migrates; contracts/flags/client policy exist; root checks green; no product screen uses an obsolete join/admission model.

---

## Phase 1 — Auth, users, staff and account lifecycle

### P1-001 Consumer Identity Platform adapter
Token/session validation + test adapter.

### P1-002 User bootstrap
Create UUIDv7 User from authenticated subject.

### P1-003 Profile/interests/languages/preferences
Public/private split.

### P1-004 18+ server policy
No UI-only age gate.

### P1-005 Devices/push registrations
Track platform/app/build/runtime/capabilities.

### P1-006 Legal documents/acceptances
Versioned Terms/Privacy/Guidelines acceptance.

### P1-007 Export/deletion workflow
Durable data export and deletion request/status jobs.

### P1-008 Account statuses/restrictions
ACTIVE/RESTRICTED/SUSPENDED/DELETION_PENDING/DELETED.

### P1-009 Finland seed/i18n
FI, cities/regions strategy, fi/en/ru.

### P1-010 Mobile onboarding
Uses design/feature specs, analytics, accessibility and server policy.

### P1-011 Consumer web auth/profile shell
Deep-link fallback capable.

### P1-012 Staff identity baseline
Separate StaffAccount + roles/scopes + mandatory MFA adapter boundary; no consumer-user impersonation shortcut.

---

## Phase 2 — Canonical event/occurrence domain and ingestion

### P2-001 Categories/media assets
Event categories + media upload/quarantine metadata.

### P2-002 Venue model/source mappings
PostGIS, public address/geo and source mapping.

### P2-003 Event model V2
Event stable identity with defaults/origin/access/owner/organization/category/translations/media.

### P2-004 EventOccurrence model V2
Concrete physical instance: time/timezone/venue/place/private location/admission/participation/waitlist/capacity/version.

### P2-005 Admission vs participation policies
AdmissionMode and ParticipationMode are independently validated and serialized. Pods must not accept admission mode.

### P2-006 Native recurrence subset
DAILY/WEEKLY/MONTHLY + INTERVAL/BYDAY/COUNT/UNTIL + local DTSTART/timezone; rolling materialization and DST tests.

### P2-007 Private-location storage
KMS-ready encrypted exact location record; occurrence assignment; generic DTO leak tests.

### P2-008 Source registry/import runs/raw records
Rights metadata/review date, health/config, run metrics/history.

### P2-009 Connector framework
Separate source adapters with cursor/rate/cancellation semantics.

### P2-010 Normalization/entity resolution
Canonical Event vs Occurrence mapping; org/venue source mappings.

### P2-011 Dedupe engine
Candidate score, auto/manual thresholds.

### P2-012 Stable aliases/merge history
Old Event/Occurrence IDs resolve to canonical IDs; cycle/self prevention; deep-link migration tests.

### P2-013 Admin dedupe queue
Audited merge/link actions.

### P2-014 Finland connectors
Add approved high-value sources one by one behind same contract.

### P2-015 Source reconciliation/health
Freshness, cancellations, stale records, quotas, rights review.

**Phase 2 gate:** one imported external-ticket event can expose `Tickets` and independent `I'm going`; recurring occurrences can override location/capacity safely.

---

## Phase 3 — Discovery, public web, deep links and search

### P3-001 Occurrence-centric read model
Efficient physical-occurrence queries and freshness/version metadata.

### P3-002 Nearby feed
PostGIS/time/eligibility.

### P3-003 Home sections
For You/Now/Today/Weekend/Nearby.

### P3-004 Deterministic ranker
Attendance-oriented signals/diversity with explainable debug reasons.

### P3-005 Search
FTS + pg_trgm + filters.

### P3-006 Natural-language filter parser
Structured filters only; no invented events.

### P3-007 Map viewport/clusters
Never expose private exact point.

### P3-008 Event/Occurrence detail API
Admission and social participation rendered separately; alias resolution.

### P3-009 Mobile Home/Map/Search
All screen-state matrix conditions.

### P3-010 Public event/organization pages
Next.js SEO-capable output.

### P3-011 Universal Links / Android App Links
Canonical HTTPS URL opens app when installed, web otherwise.

### P3-012 SEO metadata
Canonical redirects, OG, eligible Schema.org Event, sitemap/robots/noindex rules.

### P3-013 Critical truth revalidation
Imminent event/join/ticket/private-location actions refresh authoritative state.

---

## Phase 4 — Community event creation

### P4-001 Create Event draft
Idempotent command and ownership.

### P4-002 One-time/recurring flow
Only supported recurrence subset.

### P4-003 Physical place flow
PUBLIC_VENUE/OUTDOOR/PRIVATE_HOME/HYBRID. No online-only V1 creation.

### P4-004 Admission setup
NONE/FREE/EXTERNAL_TICKET; INTERNAL_TICKET feature-gated.

### P4-005 Social participation setup
OPEN/APPROVAL_REQUIRED/INVITE_ONLY/DISABLED + social capacity + waitlist.

### P4-006 Eligibility/audience/safety
18+ floor and policy rules.

### P4-007 Media pipeline
Signed upload→quarantine→process/moderate→ready.

### P4-008 Mobile create wizard/preview
Design contract + accessibility/analytics.

### P4-009 Host occurrence/series management
Occurrence overrides/cancellation vs series edits explicit.

### P4-010 Material update notifications
Time/location/cancellation changes produce durable notification + delivery attempts.

---

## Phase 5 — Participation and waitlist

### P5-001 Participation state machine
Occurrence-targeted only.

### P5-002 Instant join
Concurrency-safe social capacity.

### P5-003 Approval flow
Request/approve/reject.

### P5-004 Leave/host removal
Reasoned/idempotent, releases capacity.

### P5-005 Waitlist/slot offers
Only when waitlist enabled; Cloud Tasks expiry, atomic acceptance.

### P5-006 Invite-only flow
Secure invitation tokens/status.

### P5-007 External admission independence
Ticket purchase/URL never counts as confirmed Meet participation unless explicit integration later says so.

### P5-008 Calendar/reminders
Occurrence-local truth.

### P5-009 Concurrency/load tests
Final slot, duplicate request, duplicate task/message.

---

## Phase 6 — Pods, chat and realtime

### P6-001 Pod model
Occurrence-linked; social participation mode only.

### P6-002 Pod membership/capacity
Open/approval/invite semantics.

### P6-003 Conversation model + DB XOR constraints
Occurrence/Pod/Connection/Organization contexts valid only.

### P6-004 Message persistence/media/report hooks
Durable state before fanout.

### P6-005 Realtime gateway
Auth/subscriptions/versioned events.

### P6-006 Reconnect/recovery
Forced disconnect tests, reauth/resubscribe, REST cursor recovery.

### P6-007 Presence/typing
Valkey TTL, approximate only.

### P6-008 Backpressure/limits
Payload/subscription/rate/buffer limits.

### P6-009 Mobile chats/Pods
Visual/accessibility/offline states.

---

## Phase 7 — Attendance, reputation and connections

### P7-001 Check-in
QR/code architecture.

### P7-002 Attendance reconciliation
Host/peer/check-in precedence.

### P7-003 No-show/reliability private signals

### P7-004 Structured feedback
Private negative safety path.

### P7-005 Public reputation projection
No human star score.

### P7-006 Canonical mutual connections
Ordered pair invariant; no A↔B duplicate rows.

### P7-007 Connection DM
Only after allowed mutual connection.

### P7-008 Block enforcement
All communication/social paths.

---

## Phase 8 — Trust, identity and moderation

### P8-001 Reports/taxonomy

### P8-002 Moderation cases/evidence

### P8-003 Reason-coded actions/appeals

### P8-004 Admin moderation queue
Separate staff identity, audit.

### P8-005 Identity provider abstraction
Fake/dev + production boundary.

### P8-006 Finnish strong identity vendor integration
After provider/compliance review.

### P8-007 Home-host verification gate

### P8-008 Exact-location disclosure endpoint
Current membership/verification/policy revalidated every access.

### P8-009 Share My Plans
Expiring/revocable token.

### P8-010 AI moderation pre-screen
Provider abstraction; no sole irreversible authority.

### P8-011 Safety metrics/kill switches
First-party operational flags.

---

## Phase 9 — Organizations / B2B2C
Organization model/imported mappings, claim, verification, RBAC, B2B app, event/occurrence management, attendees/check-in, analytics, announcements, audit.

---

## Phase 10 — Production infrastructure and mobile delivery

### P10-001 GCP dev/staging/prod Terraform
Isolated projects and private DB/cache.

### P10-002 Cloud SQL connection budget
Pool defaults and Cloud Run max-instance calculations enforced/configured; saturation alert.

### P10-003 Cloudflare/origin protection

### P10-004 Backups/PITR/restore drill procedure

### P10-005 CI deploy + canary/rollback
WIF and immutable images.

### P10-006 Operational flag Admin controls
Audited and independent of PostHog.

### P10-007 EAS Build/Submit environments
Production signing access, store pipeline and release runbook.

### P10-008 EAS Update/runtimeVersion
Staging/production channels, rollback procedure.

### P10-009 Client compatibility dashboards
Active versions/capabilities/deprecation usage.

### P10-010 SLO/security/cost alerts

### P10-011 Security review/pentest
Before broad private-home rollout.

---

## Phase 11 — Finland public launch gates
- source coverage/freshness review
- FI/EN/RU localization/accessibility QA
- Terms/Privacy/Guidelines versions
- DPIA/GDPR/DSA review
- Identity Platform/provider DPA/data-processing/data-location review
- moderation/support/on-call operations
- app-store production binaries + Universal/App Links
- minimum supported client policy verified
- private-home limited rollout via first-party operational flag
- DB restore drill and severe-safety runbook
- Helsinki liquidity dashboard

---

## Phase 12 — Monetization
Stripe Billing, entitlements, promoted events, B2B billing, affiliate ticket links. Native ticketing/Stripe Connect only after separate product/legal/payment review.

---

## Phase 13 — Data/ML and expansion
Warehouse quality, attendance dataset, offline ML ranker evaluation, controlled experiment, Sweden/Norway/Denmark country configs/connectors. External search index only when Postgres metrics justify it.

## Execution rule
Codex may parallelize independent tasks but must preserve contracts/migration order. If implementation reveals a conflict with accepted ADR/design/domain contract, stop that path and propose an ADR/spec change instead of silently adapting architecture.
