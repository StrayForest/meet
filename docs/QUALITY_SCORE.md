# QUALITY_SCORE — Living quality map

This file is a maintained dashboard, not marketing.

Grade meanings: A = launch-ready with strong automated evidence; B = solid with known non-critical gaps; C = incomplete; D = prototype-only; F = absent/unsafe.

| Area | Current | Target before Finland launch | Evidence |
|---|---:|---:|---|
| Product specs | B | A | product/design docs |
| Visual design system | B | A | design tokens + visual QA |
| Mobile accessibility | C | A | automated + manual audit |
| Web accessibility | C | A | WCAG 2.2 AA audit |
| Auth/authorization | F | A | implementation/tests pending |
| Event domain | F | A | implementation pending |
| Ingestion/provenance | F | A | connector tests pending |
| Participation concurrency | F | A | load/concurrency tests pending |
| Trust & Safety | C (spec only) | A | operational + test evidence |
| Private-home safety | C (spec only) | A | pentest + leak tests |
| Reliability/observability | C (spec only) | A | dashboards/SLO evidence |
| Disaster recovery | D | A | restore drill |
| Documentation legibility | A- | A | docs index/link lint |

## Maintenance
- Update after every completed phase.
- A quality regression creates an active plan or tech-debt item.
- CI should eventually validate links, generated-doc freshness and architecture boundaries.
- No product area may be called launch-ready solely because its UI exists.