# Finland event-source integration register — initial

Every connector must confirm current terms/license before production use. Do not infer permission from public visibility.

## Priority A — Helsinki Linked Events ecosystem
City of Helsinki identifies Linked Events as a significant open API for tourism/events; Helsinki can list thousands of public events per month.

Use for: Helsinki metropolitan event coverage, places/categories where available.
Source: https://www.hel.fi/en/business-and-work/helsinki-tourism-and-event-data

Required connector work: confirm API documentation/version, attribution/license, pagination, update/cancel semantics, image rights and rate limits.

## Priority A — VisitTampere API
Official Tampere data portal describes REST/JSON event/location data. Dataset is listed under Creative Commons Attribution 4.0.

Use for: Tampere events and venue/location resolution.
Source: https://data.tampere.fi/data/dataset/visittampere-fi-sivuston-api

Store required attribution metadata with provenance.

## Priority B — Ticketmaster Discovery API
Official API supports FI and also SE/NO/DK, useful for commercial/ticketed events and Nordic expansion.

Use for: concerts/sports/ticketed public events; external ticket links.
Source: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/

Before production: verify API/affiliate terms, caching/display/image rules and quota.

## Priority B — Visit Finland DataHub
Evaluate for tourism/activity products and organization/place enrichment. Confirm whether event coverage fits our canonical Event model and publishing terms.

## Other municipalities
Add connectors only after source/license review. Connector interface, provenance and dedupe prevent municipal schema leakage into canonical domain.

## Launch metric
Track event count/freshness/category coverage per city/day. “All Finland” coverage means the product can display supported public supply nationwide, not that every municipality is guaranteed equally complete on day one.