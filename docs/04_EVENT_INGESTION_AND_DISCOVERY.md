# 04 — Event ingestion, discovery, dedupe and canonical identity

## Goal
Imported/official physical supply makes Meet useful before community density. Pods/social participation create proprietary value over any eligible occurrence.

## Sources
Municipal/open APIs, ticket/event providers, tourism APIs, organization feeds, ICS/RSS, direct organization publishing, community events; scraping only with explicit rights/terms review.

## Source/run provenance
Each source stores rights/license review, quota/freshness/config and enabled control. Every ingestion run records:
- connector version;
- normalizer version;
- classifier version where used;
- cursor/watermark;
- counts/errors/timing.

Raw records preserve source IDs, source update time, content hash, rights snapshot and payload/object reference.

## Pipeline
Fetch → raw → validate → normalize → resolve organizer/venue → geocode → classify → dedupe → canonical Event/Occurrence upsert → translate/moderate → discovery projection.

## Physical-only V1
Online-only records are excluded. Do not keep a HYBRID enum without modeled virtual semantics; Architecture 1.3 V1 uses physical occurrences only.

## Canonical identity
Stable Event and concrete EventOccurrence are mapped separately. Admission data never defines Meet participation.

## Dedupe/merge
High-confidence auto-link, medium admin review, low separate. Merge preserves event/occurrence aliases, canonical redirects, source provenance and affected references. Alias cycles/self-alias prohibited.

## Source precedence
Verified organizer → official partner → authoritative municipal source → licensed provider → lower-confidence source → community suggestion. Safety/legal removal overrides all source refreshes.

## Discovery
PostgreSQL/PostGIS deterministic ranking initially. Eligibility first; rank by time, distance, category/language, social context, organizer/data quality, freshness/exploration and attendance history. Target real attendance, not CTR.

## Search/map
Postgres FTS + pg_trgm + PostGIS. Map is viewport-bounded. Private-home exposes only occurrence public label/coarse point.

## Extraction seam
Future search index is an async projection populated by governed event contracts. PostgreSQL remains authoritative.
