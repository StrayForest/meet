# Architecture Decision Records

Accepted architecture rationale lives here. `../09_FIXED_ARCHITECTURE_DECISIONS.md` is only the quick index.

## Accepted
- `0001-event-first-domain.md` — Event/Occurrence, admission vs participation, recurrence, physical V1.
- `0002-backend-data.md` — TypeScript modular monolith, PostgreSQL/PostGIS, REST/OpenAPI, outbox.
- `0003-mobile-expo.md` — React Native/Expo, EAS delivery and client compatibility.
- `0004-gcp-runtime.md` — GCP/Cloud Run, connection budget and operational controls.
- `0005-safety-identity.md` — adult network, verification, private-home/staff safety.

## Process
New architectural change starts from `TEMPLATE.md` as PROPOSED. It is not implementation authority until explicitly accepted and indexed in `09_FIXED_ARCHITECTURE_DECISIONS.md`.

ADR must record context, decision, alternatives, consequences, compatibility/migration/rollback and evidence/approval where relevant. Superseded ADRs remain in history and point to the replacement.
