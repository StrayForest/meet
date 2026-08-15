# Product spec — Discovery, map and search

## Goal
User finds a credible activity for now/today/weekend quickly even before social network density is high.

## Home
Header city/area + notifications; search; quick time chips; sections Now/For You/Today/Weekend/Nearby as supply warrants.

## Ranking V1
Eligibility first, then deterministic score: time relevance, distance, interests, language, availability, event quality, organizer trust, social signal, freshness, diversity. Optimize toward attendance. Log score reasons internally.

## Low-density behavior
Expand radius/date, include licensed imported supply, explain widened area, offer create-event action. Never fabricate events or hide that an event is far away.

## Map
Secondary discovery mode using same filters/query context. Clusters; selected-event bottom sheet. Private-home uses coarse point only. Location permission optional; manual city works.

## Search
Title/organizer/venue/category + pg_trgm/FTS. Natural language only parses structured filters and cannot invent an event.

## Acceptance
Cursor/bounded APIs; loading/empty/error states; map/list consistency; blocked/restricted content excluded; cancellation state updates promptly; visual specs in design docs.