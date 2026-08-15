# 10 — Implementation backlog — Architecture 1.3

Dependency order. One coherent task/PR preferred. **This file is scheduling, not task context:** use the active exec plan + the smallest pack in `00_INDEX.md`; do not preload phase-wide docs.

## Phase 0 — Foundation/contracts/governance
P0-000 docs/link/ADR consistency.
P0-001 pnpm/Turborepo apps+packages+infra.
P0-002 Node24/pnpm11/strict TS/tooling.
P0-003 design tokens/primitives.
P0-004 shared API/value/error/client contracts.
P0-005 local Postgres18+PostGIS/Valkey/fake providers.
P0-006 implement V3 Drizzle schema/migration: EventOccurrenceTemplate, physical location split, org multi-role, report-case/evidence, outbox V3, ingestion versions, waitlist/feedback invariants, versioned flags, tamper-evident audit, device attestation metadata.
P0-007 schema-governance cutover; generate/verify DBML/schema docs.
P0-008 architecture boundary checks.
P0-009 typed domain-event registry + compatibility tests.
P0-010 observability/correlation/Sentry/OTel.
P0-011 analytics baseline; experiments != ops flags.
P0-012 OperationalFlags concurrency + two-person framework.
P0-013 client compatibility/bootstrap.
P0-014 Expo/EAS + mobile privacy/SDK inventory skeleton.
P0-015 deterministic fixtures/visual QA.
P0-016 repository/supply-chain baseline.
P0-017a Terraform primary/runtime + DB connection-budget foundation.
P0-017b Terraform DR recovery skeleton.
P0-017c Terraform origin-security skeleton.
P0-018 CI including `scripts/check-context-budget.mjs`.

Gate: fresh checkout boots; V3 zero→latest; generated DBML matches; event contracts typed; no ONLINE/HYBRID/obsolete join semantics; critical DB invariants tested.

## Phase 1 — Auth/users/staff/data rights
Identity Platform adapter; bootstrap/profile/interests/languages/preferences; 18+; devices/push/integrity boundary; legal acceptance; deletion/export; status; FI/i18n; onboarding/web shell; separate StaffAccount/MFA.

## Phase 2 — Event/occurrence/ingestion
Categories/media; venues/source mappings; Event/Template/Recurrence/Occurrence; admission/participation; private-location crypto; import provenance/versions; connectors/normalization/dedupe/aliases/admin; Finland sources/freshness.

Gate: recurrence materializes duration/location across DST; external ticket + independent I'm-going works; parser-version trace finds affected records.

## Phase 3 — Discovery/public web
Occurrence read model; feed/ranker/search/map; public event/org pages; Universal/App Links; SEO; critical-truth revalidation.

## Phase 4 — Community event creation
Draft/publish; one-time/recurrence template; physical place only; admission; participation/waitlist; eligibility/media; mobile wizard; series/occurrence management; material-update notifications.

## Phase 5 — Participation/waitlist
State machine; concurrency-safe join/approval/leave/removal; waitlist order + one active offer; invite; admission independence; reminders; race/load tests.

## Phase 6 — Pods/chat/realtime
Pod membership/capacity; conversation XOR; message persistence/evidence hooks; WebSocket auth/recovery/presence/backpressure; mobile chats.

## Phase 7 — Attendance/reputation/connections
Check-in/reconciliation/no-show; unique structured feedback; projection; canonical connection/DM; block enforcement.

## Phase 8 — Trust/identity/moderation
Reports/cases/evidence/actions/appeals/admin; strong ID; home-host gate/exact-location disclosure/Share My Plans; AI pre-screen; integrity risk; safety metrics/flags/audit.

## Phase 9 — Organizations/B2B
Claim/verification; source mapping; multi-role RBAC; B2B events/templates/recurrence/occurrences; attendees/check-in; analytics/announcements/audit.

## Phase 10 — Production hardening
GCP/Cloud SQL HA; origin controls; KMS; backups/PITR/restore; DR tier; deploy/canary; immutable audit sink; EAS prod; SLI/error-budget/cost dashboards; supply-chain/SBOM/provenance; security review/pentest.

## Phase 11 — Finland launch gates
Source freshness, localization/accessibility, legal/DPIA/DSA, provider reviews, moderation/on-call, store privacy manifests, origin bypass tests, restore+DR exercise, safety runbooks, min-client policy, private-home limited flag, Helsinki liquidity.

## Phase 12 — Monetization
Stripe Billing, entitlements, promoted events, billing UI, affiliate tickets; native ticketing/Connect only after separate review.

## Phase 13 — Data/ML/country expansion
Warehouse quality; attendance dataset; offline ML eval; Sweden/Norway/Denmark config/connectors; external search only on measured need.
