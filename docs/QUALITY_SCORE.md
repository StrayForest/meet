# QUALITY_SCORE — Living quality map — Architecture 1.3

A = launch-ready with implementation/operational evidence; B = strong spec/implementation with known gaps; C = incomplete; D = prototype; F = absent.

| Area | Current | Finland launch target |
|---|---:|---:|
| Product/domain spec | A- spec | A |
| Schema/data model V3 | A- spec | A after migration/constraint evidence |
| Active async/event contracts | B spec | A only where transport is activated |
| Design system | B | A |
| Mobile compatibility/privacy | B spec | A |
| Accessibility | C | A |
| Auth/authorization | F implementation | A |
| Participation concurrency | F implementation | A |
| Launch trust/safety/moderation | B- spec | A |
| PRIVATE_HOME future safety design | B- deferred spec | not a V1 launch target |
| Reliability SLI/SLO | B- spec | A measured |
| Backup/restore | B- spec | A drill/evidence |
| Multi-region DR | B- deferred | evidence-gated, not a V1 launch target |
| Origin security | B spec | A bypass tests |
| Supply chain/repo governance | B spec | A enforced |
| Audit/crypto/data lifecycle | B spec | A for data/workflows actually used at launch |
| Capacity/cost model | B spec | A measured |
| Documentation legibility | A | A |

Architecture quality does not promote deferred product breadth into launch scope. PRIVATE_HOME, persistent social graph/DMs, advanced async infrastructure and multi-region maturity are graded separately and only become launch criteria if their explicit evidence/ADR gates activate them.

No implementation grade is promoted without tests/operations evidence.
