# 04 — Event ingestion, discovery, search and recommendations

## 1. Goal

The app must be useful across Finland before community supply reaches density. Imported and official events provide initial liquidity; social participation and Pods create proprietary network effects.

## 2. Event source classes

1. Finnish municipal/open-data APIs.
2. Ticket/event provider APIs.
3. Tourism/Visit APIs.
4. Organization partner APIs.
5. ICS/RSS feeds.
6. Organization direct publishing.
7. Community-created events.
8. Scraping only when terms/robots/licensing explicitly permit it and after review.

## 3. Connector interface

Every connector exposes:
- source key;
- country/region scope;
- rights/license metadata;
- cursor/watermark strategy;
- fetch/pagination;
- parser;
- rate-limit policy;
- deletion/cancellation semantics;
- source health.

Canonical Event must never contain source-specific fields that force coupling to one provider.

## 4. Pipeline

`Fetch → Raw Record → Validate → Normalize → Resolve Organizer/Venue → Geocode → Classify → Dedupe → Canonical Upsert → Translate/Moderate → Publish Projection`

### Raw record stores
- source key;
- source event ID;
- fetched_at;
- source updated_at;
- response/hash metadata;
- license/rights snapshot;
- raw payload or object-storage reference;
- parse status/errors.

## 5. Canonical normalization

Normalize:
- title;
- organizer;
- venue;
- start/end;
- timezone;
- coordinates/address;
- categories;
- language;
- ticket URL;
- price representation;
- age restrictions;
- accessibility;
- media;
- cancellation state.

## 6. Deduplication

### Candidate generation
Find events in a sensible time/geo window.

### Score signals
- normalized title similarity;
- organizer similarity;
- venue identity/similarity;
- start-time proximity;
- end-time proximity;
- geo distance;
- performer/artist overlap;
- shared external identifiers.

### Thresholds
- high confidence → auto-link/merge;
- medium → admin dedupe queue;
- low → remain separate.

Never erase provenance when sources merge into one canonical event.

## 7. Source precedence

Default field authority:
1. verified organizer direct management;
2. official organizer partner API;
3. authoritative municipal/open data;
4. licensed ticket/event provider;
5. lower-confidence source;
6. community suggestion.

Precedence can be field-specific. Safety/legal overrides always win.

## 8. Source disappearance/cancellation

One source disappearing does not immediately delete canonical event.
Reconcile:
- explicit cancellation;
- other active sources;
- organizer-owned status;
- event time;
- source reliability.

## 9. Organization claiming through imported supply

Imported supply may create UNCLAIMED organization profiles.
Claim flow:
1. user requests claim;
2. relation/domain/business evidence;
3. strong identity where required;
4. automated/staff review;
5. VERIFIED organization;
6. verified owner gets controlled canonical overrides.

## 10. Discovery V1

PostgreSQL/PostGIS + deterministic ranker.

Eligibility filters happen before rank:
- occurrence published/scheduled;
- time window;
- country;
- age eligibility;
- safety/account restrictions;
- event audience policy;
- availability/join state;
- blocked relationships;
- geo scope.

## 11. Rank signals

Positive:
- starts soon/time relevance;
- distance;
- interest/category affinity;
- language match;
- seats available;
- organizer reliability;
- event data quality;
- connections/social context;
- normalized popularity;
- freshness/exploration;
- historical attendance affinity.

Penalties:
- repeated exposure;
- high cancellation history;
- low organizer trust;
- unrealistic travel/time;
- low data quality;
- safety/risk flags.

Diversity constraints prevent a homogeneous feed.

## 12. Search V1

- PostgreSQL full-text search;
- `pg_trgm` fuzzy title/organizer/venue matching;
- PostGIS spatial filters;
- structured filters.

Natural-language query is parsed to a structured filter object. It does not generate events.

## 13. Map

Endpoint takes:
- viewport bounds or center/radius;
- time range;
- filters;
- zoom/cluster hint.

Private-home events only return coarse public location unless actor is authorized for exact address.

## 14. Search-engine extraction seam

Discovery depends on an interface/read repository, not direct assumptions about Postgres implementation.

When metrics justify it, an OpenSearch/Elastic-class index can be populated asynchronously from existing versioned outbox events. PostgreSQL remains source of truth.

## 15. Recommendation ML later

Only after reliable data.

Target:
`P(attended | user, occurrence, context)`

Possible features:
- views/saves/joins/cancels/attendance;
- category/time/day affinity;
- distance tolerance;
- languages;
- event size;
- organizer history;
- connection signals;
- repeated organizer/category;
- no-show risk.

Release process:
1. warehouse data quality;
2. offline evaluation;
3. compare against deterministic ranker;
4. privacy/fairness review;
5. feature-flagged experiment;
6. optimize attendance/retention/safety, not CTR alone.

## 16. Source health KPIs

- fetch success rate;
- freshness lag;
- parse error rate;
- events imported/updated/cancelled;
- dedupe rate;
- stale records;
- API quota;
- rights/license review date.
