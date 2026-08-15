# 10 — Implementation backlog — Architecture 1.3

Execute in dependency order. One coherent task/PR preferred. Phase gates block downstream reliance.

## Phase 0 — Foundation/contracts/governance
P0-000 docs/link/ADR consistency.
P0-001 pnpm/Turborepo apps+packages+infra.
P0-002 Node24/pnpm11/strict TS/tooling.
P0-003 design tokens/primitives.
P0-004 shared API/value/error/client contracts.
P0-005 local Postgres18+PostGIS/Valkey/fake providers.
P0-006 implement **V3** Drizzle schema/migration from design blueprint: EventOccurrenceTemplate, physical location split, org multi-role, report-case link/evidence snapshot, outbox V3 envelope, ingestion versions, waitlist/feedback invariants, versioned flags, tamper-evident audit, device attestation metadata.
P0-007 schema governance cutover: Drizzle+migrations become executable truth; generate/verify DBML and schema docs in CI.
P0-008 architecture import/boundary checks.
P0-009 typed domain event registry + compatibility tests per EVENT_CONTRACTS.
P0-010 observability/correlation/Sentry/OTel.
P0-011 analytics baseline; experiments separate from ops flags.
P0-012 OperationalFlags optimistic concurrency + change-request/two-person framework.
P0-013 client compatibility/bootstrap.
P0-014 Expo/EAS skeleton + mobile privacy/SDK inventory skeleton.
P0-015 deterministic fixtures/visual QA.
P0-016 repository/supply-chain baseline: CODEOWNERS/PR template, pinned Action policy when workflows added, WIF design, immutable artifact conventions, dependency automation plan.
P0-017 Terraform foundation including primary+DR variables, origin-security modules and DB connection budget.
P0-018 CI: docs/generated/schema/event-contract/boundary/lint/type/tests/migration/security/build checks.

**Gate:** fresh checkout boots; V3 schema zero→latest; generated DBML matches; event contracts typed; no HYBRID/ONLINE or obsolete join semantics; critical DB invariants tested.

## Phase 1 — Auth/users/staff/data rights
Identity Platform adapter; User bootstrap; profile/interests/languages/preferences; 18+ policy; devices/push + device-integrity adapter boundary; legal acceptances; deletion/export lifecycle; account status; FI seed/i18n; mobile onboarding; web shell; separate StaffAccount/MFA roles.

## Phase 2 — Event/occurrence/ingestion
Categories/media; venues/source mappings; Event; EventOccurrenceTemplate; EventRecurrence; EventOccurrence; admission/participation; physical/private location crypto; source registry/import runs with connector/normalizer versions; connector framework; normalization; dedupe; aliases; admin dedupe; Finland sources; freshness/reconciliation.

**Gate:** recurring event materializes correct duration/location across DST; external ticket + independent I'm-going works; parser-version trace query identifies affected records.

## Phase 3 — Discovery/public web
Occurrence read model; nearby/feed/ranker/search/map; public event/org pages; Universal/App Links; SEO; critical truth revalidation.

## Phase 4 — Community event creation
Draft/publish; one-time/recurrence writes template; physical place only; admission; social participation/waitlist; eligibility; media; mobile wizard; series vs occurrence management; material-update notifications.

## Phase 5 — Participation/waitlist
State machine; concurrency-safe join; approvals; leave/removal; waitlist unique order + one active offer; invite; admission independence; reminders; load/race tests.

## Phase 6 — Pods/chat/realtime
Pod membership/capacity; conversation XOR; message persistence/evidence hooks; WebSocket auth/recovery/presence/backpressure; mobile chats.

## Phase 7 — Attendance/reputation/connections
Check-in/reconciliation/no-show; unique structured feedback; public projection; canonical connection; connection DM; block enforcement.

## Phase 8 — Trust/identity/moderation
Reports; report-case links; immutable evidence snapshots; actions/appeals/admin queue; strong ID provider; home-host gate; exact-location disclosure; Share My Plans; AI pre-screen; device-integrity risk integration; safety metrics/flags/audit.

## Phase 9 — Organizations/B2B
Organization/source mapping/claim/verification; multi-role RBAC; B2B app; events/templates/recurrence/occurrences; attendees/check-in; analytics/announcements/audit.

## Phase 10 — Production hardening
GCP projects/resources; Cloud SQL HA/connection budget; Cloudflare+LB+Cloud Run origin controls; Secret/KMS crypto; backups/PITR + restore drill; DR recovery implementation per current business tier; CI deploy/canary; audit external immutable sink; EAS production; client dashboards; formal SLI/SLO/error-budget dashboards; cost/capacity dashboards; supply-chain scans/SBOM/provenance based on GitHub plan; security review/pentest.

## Phase 11 — Finland launch gates
Source freshness/coverage, localization/accessibility, legal docs/DPIA/DSA, provider DPAs/data location, moderation/support/on-call, mobile store privacy/Data Safety/manifests, origin bypass tests, DB restore + DR exercise, safety runbooks, min-client policy, private-home limited flag, Helsinki liquidity dashboard.

## Phase 12 — Monetization
Stripe Billing, entitlements, promoted events, billing UI, affiliate tickets; native ticketing/Connect only after separate review.

## Phase 13 — Data/ML/country expansion
Warehouse quality; attendance dataset; offline ML evaluation/experiment; Sweden/Norway/Denmark config/connectors; external search only on measured need.
