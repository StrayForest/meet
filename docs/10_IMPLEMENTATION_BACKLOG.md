# 10 — Implementation backlog — Architecture 1.3

Dependency order. One coherent task/PR preferred. **This file is scheduling, not task context:** use the active exec plan + the smallest pack in `00_INDEX.md`. Pre-PMF work must also obey `validation/MVP_BOUNDARY.md`.

## Business/product validation track — runs before and alongside implementation
V0-000 maintain `validation/ASSUMPTION_REGISTER.md`; no high-cost/low-confidence dependent feature ships without credible evidence.
V0-001 weekly customer discovery across activated, attendee, no-show, browse-only, going-alone/company-finding and organizer cohorts using `validation/USER_RESEARCH.md`.
V0-002 Helsinki beachhead/supply map; nationwide coverage remains coverage, not assumed liquidity.
V0-003 instrument public discovery → Opportunity Success → arrival/social confidence → meaningful intent → credible attendance → 30/60-day repeat.
V0-004 GTM experiments by SEO, organizers, newcomer/international, Finnish local and Russian-speaking communities; preserve `fi/en/ru` launch support.
V0-005 multidimensional liquidity dashboard/state (`city × category/intent × time × language × radius/area`) + manual-seeding share.
V0-006 competitor evidence refresh and 90-day feature-copy/moat review before major roadmap additions.
V0-007 bottom-up city economics + organizer willingness-to-pay interviews/pilots.
V0-008 review `business/INVESTOR_MILESTONES.md` at each major roadmap/fundraising gate.
V0-009 first-1,000 Helsinki orchestration: small selected category/time/area cells, organizers/hosts and socially useful priority opportunities.
V0-010 public-web/SEO experiment measured through successful IRL participation, not traffic alone.
V0-011 weekly founder/AI operating review: evidence, founder bottlenecks, removable scope and assumption-confidence changes.
V0-012 measure social-layer incrementality on attendance/repeat, not only join.
V0-013 test progressive onboarding/public value before signup; measure downstream IRL outcome.
V0-014 test low-choice `What should I do today?` discovery against ordinary browsing.
V0-015 measure join-abandon and arrival/social-confidence gaps; no dark patterns/fake proof.
V0-016 validate recommendation signal hierarchy: attendance/repeat > join/save > repeated browse/filter; no mandatory declared interests.
V0-017 test plain-language `find company/join group` vs domain jargon in fi/en/ru.
V0-018 validate going-alone friction and **solo-to-social attendance** with concierge/lightweight company matching before richer social scope.
V0-019 validate arrival experience: meeting point, host recognition, first-five-minutes expectations, newcomer/solo context.
V0-020 test whether users actually want persistent connections after events; persistent graph is not assumed.
V0-021 validate accessibility/event-accessibility discovery with affected users; treat missing/incorrect venue facts as product-quality issues.
V0-022 validate progressive verification friction by action/risk; public browsing has no phone gate.

Rule: persistent H2–H5 failure after adequate liquidity/iterations blocks feature breadth and triggers the pivot/stop review in `business/PMF_HYPOTHESES.md`. Architecture support never overrides the MVP boundary.

## Phase 0 — Foundation/contracts/governance
P0-000 docs/link/ADR consistency, including architecture/business/validation contract checks.
P0-001 pnpm/Turborepo apps+packages+infra.
P0-002 Node24/pnpm11/strict TS/tooling.
P0-003 design tokens/primitives + deterministic visual-regression metadata contract.
P0-004 shared API/value/error/client contracts.
P0-005 local Postgres18+PostGIS; Valkey/fake providers only where needed; optional managed dependencies inactive locally/pre-PMF.
P0-006 implement core Drizzle schema/migration needed by MVP plus future-safe domain fields that are cheap to preserve. **Do not implement legacy `interests`/`user_interests`; do not build user-facing PRIVATE_HOME workflows.**
P0-007 schema-governance cutover; generate/verify DBML/schema docs.
P0-008 executable architecture checks for dependency direction, client/server boundaries, cross-module persistence and private-location leak prevention.
P0-009 typed domain-event registry only for durable events actually used by current phases; preserve versioning contract without activating speculative transports.
P0-010 observability/correlation/error monitoring baseline proportional to launch.
P0-011 analytics baseline for public discovery→Opportunity Success→social confidence→IRL outcome, solo-to-social, recommendation hierarchy and fi/en/ru/liquidity-cell segmentation.
P0-012 minimum operational flags required for safe rollout; advanced privileged workflow only where risk requires it.
P0-013 client compatibility/bootstrap.
P0-014 Expo/EAS + mobile privacy/SDK inventory skeleton.
P0-015 deterministic fixtures/visual QA.
P0-016 repository/supply-chain baseline + required PR checks when plan permits.
P0-017 primary deployment/Terraform skeleton; **no requirement to activate Stockholm DR, Pub/Sub, Cloud Tasks or managed Valkey pre-PMF without measured need**.
P0-018 CI including context-budget, architecture, business and validation-boundary checks.
P0-019 data-classification policy for persisted/logged/analytics data, including behavioural affinity.
P0-020 ownership/criticality metadata only to the level useful for current team/operations.
P0-021 threat models required for currently reachable high-risk boundaries; retain private-home threat model as design review but no consumer rollout.
P0-022 external dependency failure/degraded-mode tests for initial providers.
P0-023 concurrency/consistency tests for MVP-critical join/waitlist/approval/capacity/cancel/block/moderation commands.

Gate: fresh checkout boots; schema migrates; generated schema docs match; core contracts/checks pass; fi/en/ru preserved; no mandatory interest questionnaire; no ONLINE/HYBRID; no consumer PRIVATE_HOME; critical invariants tested. **Then move directly to the proof loop.**

## Phase 1 — Public discovery + progressive identity
Useful public browsing first; minimal account/profile only when action needs identity; city/area, interface + event languages, 18+, optional photo, legal acceptance, deletion/export, fi/en/ru. No mandatory hobbies/interests/gender and no phone requirement for browsing.

## Phase 2 — Event/occurrence/ingestion
Categories/media; public venues/source mappings; Event/Template/Recurrence/Occurrence; admission/participation; import provenance/versions; Finland connectors/normalization/dedupe/freshness. Preserve private-location security boundary in architecture/schema only as necessary; do not expose PRIVATE_HOME.

Gate: recurrence handles duration/location/DST; external ticket + independent `I'm going` works; parser-version trace identifies affected records.

## Phase 3 — Discovery/event detail/arrival confidence
Occurrence read model; feed/ranker/search/map; public event/category/city/org pages; Today/Nearby/Weekend/Free; explicit filters/session intent/travel tolerance; event detail centered on decision quality; accessibility facts where reliable; arrival instructions; truthful solo/newcomer context experiments; zero-social-proof suppression; simple behavioural affinity with decay/exploration/reset/pause/exclusion; links/SEO. Measure Opportunity Success and Decision Success.

## Phase 4 — Community event creation
Draft/publish; one-time/recurrence; **PUBLIC_VENUE/OUTDOOR only in V1 UI**; admission; participation/capacity/waitlist; eligibility/media; safety; preview/publish; series/occurrence management; material-update notifications.

## Phase 5 — Participation/waitlist
Concurrency-safe join/approval/leave/removal; waitlist; invite; admission independence; reminders; participation-visibility explanation/control. Business gate evaluates social confidence→intent→attendance.

## Phase 6 — Find company + occurrence-scoped chat
Implement the smallest company-finding/group coordination surface supported by V0-018 evidence. Domain may call it Pod; consumer UI uses validated plain language. Conversation is occurrence-scoped; no random/open DMs, general communities, voice/video or social feed. Keep only mechanics that improve offline conversion/safety/repeat.

## Phase 7 — Lightweight attendance + repeat
Reconciled check-in/host/peer/post-event signals; minimize ceremony; no continuous tracking. Close the minimum proof loop. Use attendance/repeat as strongest recommendation evidence with privacy controls. Test useful next-IRL-action prompts.

## Phase 7B — Persistent connections experiment (evidence-gated)
Only if V0-020/H7 supports it: mutual connection and narrowly scoped messaging with block enforcement. Do not make this phase a launch dependency when event-scoped participation works without it.

## Phase 8 — Launch-required trust/moderation
Reports/cases/evidence/actions/appeals/admin, abuse controls, safety metrics/flags/audit and strong verification only for actions whose risk justifies it. PRIVATE_HOME consumer rollout remains excluded.

## Phase 9 — Organizer pilot surface
Only workflows required by validated organizer pilots: claim/verification, event management, attendees/attendance and minimum roles/analytics. Advanced Org Pro breadth waits for willingness-to-pay evidence.

## Phase 10 — Production hardening proportional to real risk
Primary production, origin controls, KMS where required, backups/PITR/restore, deploy/canary, mobile release, SLI/error-budget/cost dashboards, supply-chain/security review and provider degraded modes. DR tier/managed cache/async transports activate only when launch SLO, workload or safety evidence requires them.

## Phase 11 — Helsinki launch gates
Source freshness; fi/en/ru localization; accessibility; legal/DPIA/DSA; moderation/on-call; store privacy; origin tests; restore exercise; safety runbooks; client policy; **Helsinki multidimensional liquidity + H2–H5 evidence**. PRIVATE_HOME is not part of V1 launch gate.

## Phase 12 — Monetization experiments
Promoted events/Org Pro pilots first; billing implementation when evidence justifies it; affiliate tickets where terms allow. Consumer premium cannot paywall core social participation. Native ticketing is post-PMF/separate review.

## Phase 13 — Post-PMF expansion
Warehouse/data quality, custom ML only when simpler rules are insufficient, broader organizer capabilities, second-city/country activation, and architecture maturity changes based on measured workload. PRIVATE_HOME, persistent communities/social graph and multi-region/service extraction each require their own evidence/ADR gates.