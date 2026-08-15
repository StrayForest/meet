# 04 — Event ingestion, discovery, dedupe and canonical identity

## 1. Goal
Imported/official supply makes Meet useful nationwide before community density exists. Social participation/Pods create proprietary value on top of any eligible physical event.

## 2. Source classes
1. municipal/open-data APIs
2. ticket/event provider APIs
3. tourism/Visit APIs
4. organization partner APIs
5. ICS/RSS
6. organization direct publishing
7. community-created events
8. scraping only when terms/robots/licensing explicitly permit and after review

## 3. Source registry and connector contract
Each source has a registry row/config with:
- source key/type
- country/region scope
- rights/license metadata + review date
- connector version/config
- rate limit/quota policy
- health/freshness SLA
- enabled operational flag

Connector exposes cursor/watermark, fetch/pagination, parse, cancellation/deletion semantics and health.

## 4. Import runs
Every sync is represented by `ingestion_runs` with status, cursor/watermark, counts, timing and error summary. Raw records keep fetch/source update times, content hash, rights snapshot and payload/object reference.

## 5. Pipeline
`Fetch → Raw Record → Validate → Normalize → Resolve Organizer/Venue → Geocode → Classify → Dedupe → Canonical Upsert → Translate/Moderate → Publish Projection`

## 6. Canonical event/occurrence mapping
Normalize stable Event identity separately from concrete EventOccurrence identity. Ticket/source records that describe individual dates map to occurrence source links where possible.

Admission/ticket data is normalized independently from Meet social participation policy. Imported ticket source never disables social participation by default; policy decides whether social layer is eligible.

Online-only source items are excluded from V1 public discovery unless a future explicit product decision enables them. Hybrid records require a physical occurrence.

## 7. Dedupe candidate score
Signals:
- normalized title
- organizer
- venue identity/similarity
- start/end proximity
- geo distance
- performers
- shared provider/external identifiers

High confidence auto-link; medium admin queue; low remain separate.

## 8. Stable identity after merge — mandatory
A merge never makes an old Meet ID disappear semantically.

Use:
- `event_aliases(alias_event_id → canonical_event_id)`
- merge/audit metadata
- equivalent occurrence alias/history if occurrence-level duplicate IDs were publicly issued

Rules:
- old public deep link resolves to canonical event and web returns canonical redirect where appropriate;
- internal reads resolve aliases centrally;
- saved references/Pods/analytics can be migrated or resolved without user-visible loss;
- alias chains are flattened/prevented from cycles;
- canonical event cannot alias to itself;
- provenance remains attached to canonical source mappings.

## 9. Source precedence
Default field authority:
1. verified organizer direct management
2. official organizer partner API
3. authoritative municipal/open data
4. licensed ticket/event provider
5. lower-confidence source
6. community suggestion

Precedence may be field-specific. Safety/legal removal always wins.

## 10. Disappearance/cancellation
One source disappearing does not immediately delete/cancel canonical event. Reconcile explicit cancellation, remaining active sources, organizer status, timing and source reliability.

## 11. Organization/venue source mappings
Organizations and venues keep explicit source mappings instead of stuffing source-specific IDs into canonical rows. Claiming an organization never destroys source mappings.

## 12. Discovery V1
PostgreSQL/PostGIS + deterministic ranking.
Eligibility before rank:
- physical/hybrid occurrence
- scheduled/published
- time/country/geo scope
- user age/audience/safety eligibility
- social participation availability when relevant
- blocked relationships

Rank signals: time relevance, distance, category affinity, language, social context, organizer reliability, data quality, normalized popularity, freshness/exploration, attendance history.

## 13. Search
Postgres FTS + pg_trgm + PostGIS. Natural-language parser only produces structured filters and never generates events.

## 14. Map
Viewport/radius/time/filter query. Private-home returns coarse public location only. National events are never downloaded wholesale to client.

## 15. Search extraction seam
Discovery uses read/search interfaces. Future external search index is an async projection from versioned domain/outbox events; PostgreSQL stays authoritative.

## 16. Recommendation ML later
Target `P(successful_attendance | user, occurrence, context)`, not CTR. Requires warehouse quality, offline evaluation, privacy/fairness review and controlled experiment.

## 17. Source health
Track fetch success, freshness lag, parse errors, imported/updated/cancelled counts, dedupe rate, stale records, quota and rights review date.
