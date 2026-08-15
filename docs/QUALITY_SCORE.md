# QUALITY_SCORE — Living quality map

This is a maintained engineering dashboard, not marketing.

Grades: A = launch-ready with strong automated/operational evidence; B = strong specification/implementation with known non-critical gaps; C = incomplete; D = prototype-only; F = absent/unsafe.

| Area | Current | Target before Finland launch | Evidence |
|---|---:|---:|---|
| Product specs | A- (spec) | A | indexed product specs + implemented acceptance |
| Domain/data architecture | A- (spec) | A | ADR-0001/0002 + DBML V2 + migration/constraint tests |
| Visual design system | B | A | tokens + implementation visual QA |
| Mobile release/compatibility | B (spec) | A | EAS pipeline + supported-client tests/metrics |
| Mobile accessibility | C | A | automated + manual audit |
| Web accessibility | C | A | WCAG 2.2 AA audit |
| Auth/authorization | F | A | implementation/tests pending |
| Event domain implementation | F | A | V2 migration/domain tests pending |
| Ingestion/provenance/aliases | C (spec) | A | connector + merge/deep-link tests |
| Participation concurrency | F | A | load/concurrency tests pending |
| Realtime recovery | C (spec) | A | disconnect/recovery/load evidence |
| Trust & Safety | C (spec) | A | operational + test evidence |
| Private-home safety | C (spec) | A | KMS/auth/leak/pentest evidence |
| Reliability/observability | C (spec) | A | dashboards/SLO evidence |
| Operational kill switches | C (spec) | A | first-party flag implementation/failure drill |
| Disaster recovery | D | A | restore drill |
| Documentation legibility | A | A | index/ADRs/schema conflict rule/link lint |

## Architecture hardening status
Senior architecture review before implementation closed the identified specification blockers:
- admission vs participation split;
- Event vs EventOccurrence/recurrence correction;
- occurrence-scoped private location;
- DBML V2 missing entities/constraints;
- mobile EAS release lifecycle;
- mobile/API compatibility;
- PostHog vs operational flag separation;
- realtime reconnect/recovery contract;
- DB connection budget;
- canonical merge aliases/deep links;
- real ADR rationale;
- separate staff identity;
- no online-only V1 discovery.

These are **specification closures**, not implementation evidence. Grades become A only after code/tests/operations prove them.

## Maintenance
Update after each completed phase and meaningful architecture/reliability review. A regression creates active plan or tech-debt item. No area is launch-ready solely because UI/code exists.
