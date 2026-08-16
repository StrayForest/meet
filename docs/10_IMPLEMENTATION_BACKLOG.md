# 10 — Implementation backlog — Architecture 1.3

Dependency order. One coherent task/PR preferred. **This file is scheduling, not task context:** use the active exec plan + the smallest pack in `00_INDEX.md`.

## Business validation track — runs from day 1
V0-001 weekly customer discovery across activated, attendee, no-show and browse-only cohorts.
V0-002 Helsinki beachhead/supply map; nationwide coverage remains coverage, not assumed liquidity.
V0-003 instrument acquisition → activation → intent → credible attendance → 30/60-day repeat.
V0-004 GTM experiments by SEO, organizers, newcomer/international, Finnish local and Russian-speaking communities; preserve `fi/en/ru` launch support.
V0-005 city-liquidity dashboard/state (`COVERAGE_ONLY/SEEDING/ACTIVE/HEALTHY`) + manual-seeding share.
V0-006 competitor evidence refresh and 90-day feature-copy/moat review before major roadmap additions.
V0-007 bottom-up city economics + organizer willingness-to-pay interviews/pilots.
V0-008 review `business/INVESTOR_MILESTONES.md` at each major roadmap/fundraising gate.
V0-009 first-1,000 Helsinki orchestration: selected categories/time windows, organizers/hosts and socially non-empty priority opportunities.
V0-010 public-web/SEO experiment: useful event/category/city/org surfaces measured through successful IRL participation, not traffic alone.
V0-011 weekly founder/AI operating review: customer/organizer/community work, founder bottlenecks and removable scope.
V0-012 measure social-layer incrementality: comparable social-active vs low-social opportunities on intent, attendance and repeat.

Rule: persistent failure of PMF H2–H4 after adequate liquidity/iterations blocks feature-breadth escalation and triggers product/cohort/positioning review. Architecture 1.3 is sufficiently specified; new architecture work requires an implementation blocker, measured reliability/scale need, safety/legal requirement or accepted ADR — not completeness-seeking.

## Phase 0 — Foundation/contracts/governance
P0-000 docs/link/ADR consistency, including `node scripts/check-architecture-contracts.mjs` and `node scripts/check-business-contracts.mjs`.
P0-001 pnpm/Turborepo apps+packages+infra.
P0-002 Node24/pnpm11/strict TS/tooling.
P0-003 design tokens/primitives + deterministic visual-regression metadata contract.
P0-004 shared API/value/error/client contracts.
P0-005 local Postgres18+PostGIS/Valkey/fake providers; keep optional managed dependencies inactive locally/pre-PMF unless required.
P0-006 implement V3 Drizzle schema/migration: EventOccurrenceTemplate, physical location split, org multi-role, report-case/evidence, outbox V3, ingestion versions, waitlist/feedback invariants, versioned flags, tamper-evident audit, device attestation metadata.
P0-007 schema-governance cutover; generate/verify DBML/schema docs.
P0-008 executable architecture fitness checks: dependency direction, client/server boundaries, cross-module persistence, private-location contract leak checks.
P0-009 typed domain-event registry + compatibility tests.
P0-010 observability/correlation/Sentry/OTel.
P0-011 analytics baseline; experiments != ops flags; business funnel supports channel→IRL outcome cohorts and language/city segmentation.
P0-012 OperationalFlags concurrency + two-person framework.
P0-013 client compatibility/bootstrap.
P0-014 Expo/EAS + mobile privacy/SDK inventory skeleton.
P0-015 deterministic fixtures/visual QA.
P0-016 repository/supply-chain baseline + required branch protection/PR checks when GitHub plan permits.
P0-017a Terraform primary/runtime + DB connection-budget foundation; `architecture ready != every service activated`.
P0-017b Terraform DR recovery skeleton.
P0-017c Terraform origin-security skeleton.
P0-018 CI including context-budget, architecture-contract and business-contract checks.
P0-019 data-classification annotations/policy mapping for persisted/logged/analytics data.
P0-020 module ownership/criticality metadata validation.
P0-021 high-risk threat models for account takeover, private-home disclosure, host abuse, moderation/staff compromise, media, SSRF/ingestion, payment and realtime.
P0-022 external dependency policy adapters + degraded-mode tests for initial providers.
P0-023 concurrency/consistency contract tests for join/waitlist/approval/capacity/cancel/block/moderation commands.

Gate: fresh checkout boots; V3 zero→latest; generated DBML matches; event contracts typed; architecture/data/security/business contract checks pass; fi/en/ru launch contract preserved; no ONLINE/HYBRID/obsolete join semantics; critical DB invariants tested. **Then move to the minimum proof loop; do not extend Phase 0 for speculative scale polish.**

## Phase 1 — Auth/users/staff/data rights
Identity Platform adapter; bootstrap/profile/interests/languages/preferences; 18+; devices/push/integrity boundary; legal acceptance; deletion/export; status; **fi/en/ru** onboarding/web shell; separate StaffAccount/MFA.

## Phase 2 — Event/occurrence/ingestion
Categories/media; venues/source mappings; Event/Template/Recurrence/Occurrence; admission/participation; private-location crypto boundary but broad PRIVATE_HOME rollout remains disabled; import provenance/versions; connectors/normalization/dedupe/aliases/admin; Finland sources/freshness.

Gate: recurrence materializes duration/location across DST; external ticket + independent I'm-going works; parser-version trace finds affected records.

## Phase 3 — Discovery/public web
Occurrence read model; feed/ranker/search/map; useful public event/category/city/org pages; Universal/App Links; SEO acquisition surfaces; critical-truth revalidation. Measure organic landing → IRL outcome.

## Phase 4 — Community event creation
Draft/publish; one-time/recurrence template; physical place only; admission; participation/waitlist; eligibility/media; safety; preview/publish; series/occurrence management; material-update notifications. Prioritize PUBLIC_VENUE/OUTDOOR PMF use cases.

## Phase 5 — Participation/waitlist
State machine; concurrency-safe join/approval/leave/removal; waitlist order + one active offer; invite; admission independence; reminders; race/load tests. Business gate evaluates join→attendance, not only command correctness.

## Phase 6 — Pods/chat/realtime
Pod membership/capacity; conversation XOR; message persistence/evidence hooks; WebSocket auth/recovery/presence/backpressure; mobile chats. Keep only social mechanics that measurably improve trust/offline conversion/repeat.

## Phase 7 — Attendance/reputation/connections
Check-in/reconciliation/no-show; unique structured feedback; projection; canonical connection/DM; block enforcement. Attendance evidence feeds PMF metrics with privacy-safe analytics. This phase closes the minimum proof loop.

## Phase 8 — Trust/identity/moderation
Reports/cases/evidence/actions/appeals/admin; strong ID; home-host gate/exact-location disclosure/Share My Plans; AI pre-screen; integrity risk; safety metrics/flags/audit. PRIVATE_HOME stays limited/flagged until explicit safety evidence supports expansion.

## Phase 9 — Organizations/B2B
Claim/verification; source mapping; multi-role RBAC; B2B events/templates/recurrence/occurrences; attendees/check-in; analytics/announcements/audit. Product scope follows organizer willingness-to-pay evidence; prioritize qualified reach/attendance/repeat-audience outcomes over feature count.

## Phase 10 — Production hardening
GCP/Cloud SQL HA; origin controls; KMS; backups/PITR/restore; DR tier; deploy/canary; immutable audit sink; EAS prod; SLI/error-budget/cost dashboards; supply-chain/SBOM/provenance; security review/pentest; prove provider degraded modes. Activate only the maturity required by real launch/SLO/safety risk.

## Phase 11 — Finland launch gates
Source freshness, fi/en/ru localization/accessibility, legal/DPIA/DSA, provider reviews, moderation/on-call, store privacy manifests, origin bypass tests, restore+DR exercise, safety runbooks, min-client policy, private-home limited flag, **Helsinki liquidity and PMF evidence**; concrete high-risk threat models reviewed against implementation.

## Phase 12 — Monetization
Promoted events + Org Pro experiments first; Stripe Billing/entitlements/billing UI when pilots justify implementation; affiliate tickets where terms allow. Consumer premium must not paywall core social participation. Native ticketing/Connect only after PMF and separate review.

## Phase 13 — Data/ML/country expansion
Warehouse quality; attendance/outcome dataset; offline ML eval; Sweden/Norway/Denmark config/connectors. Use `ARCHITECTURE_MATURITY_LADDER.md` + measured workload before extraction/multi-region changes; use city-liquidity playbook before active GTM expansion. Expansion success means the second city/country reaches liquidity faster/cheaper, not merely that configuration exists.