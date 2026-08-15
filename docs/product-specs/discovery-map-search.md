# Product spec — Discovery, map and search

## Goal
User finds a credible **physical** activity for now/today/weekend quickly even before social-network density is high.

## Eligible supply V1
Primary discovery contains PUBLIC_VENUE, OUTDOOR, PRIVATE_HOME and HYBRID physical occurrences. Online-only events are excluded from V1 product discovery.

## Home
Header city/area + notifications; search; quick time chips; sections Now/For You/Today/Weekend/Nearby as supply warrants.

Event card represents a concrete upcoming EventOccurrence while retaining canonical Event identity.

## Ranking V1
Eligibility first, then deterministic score: time relevance, distance, interests, language, social availability, event quality, organizer trust, social signal, freshness, diversity. Optimize toward successful attendance. Log score reasons internally.

Admission/ticket status and Meet social participation availability are separate rank/display signals. A ticketed event is not automatically excluded from social discovery.

## Low-density behavior
Expand radius/date, include licensed imported physical supply, explain widened area, offer create-event action. Never fabricate events or hide distance.

## Map
Secondary discovery with same filters/query context. Clusters; selected-event sheet. Private-home coarse point only. Location permission optional; manual city works.

## Search/filters
Title/organizer/venue/category + pg_trgm/FTS. Natural language only parses structured filters.

Relevant filters can distinguish:
- free / external ticketed;
- Meet social participation available / full / waitlist;
- source/origin;
- time/distance/language/category/accessibility.

## Freshness
Cached read models are allowed for browsing. Cancellation/material occurrence updates propagate promptly. High-impact actions revalidate current server occurrence truth.

## Acceptance
Cursor/bounded APIs; no nationwide client-side dump; loading/empty/stale/error states; map/list consistency; blocked/restricted content excluded; online-only excluded; external-ticket + social-open event represented correctly; visual specs followed.
