# 07 — Analytics, i18n, country expansion and scaling

## Analytics
PostHog for product events/cohorts/experiments; BigQuery warehouse. Server mutations authoritative. Never send raw DOB, exact private location, KYC evidence, message bodies, push tokens or raw device-integrity payloads.

## Metrics
Marketplace: physical supply, join/fill/show-up/waitlist/time-to-first/repeat. Supply: source freshness/cancellations/coverage/dedupe. Trust: reports/severe incidents/moderation/appeals. Client health: versions/capabilities/reconnect. Reliability uses formal SLIs, not product analytics.

## i18n/time
fi/en/ru launch. UTC absolute timestamps + occurrence IANA timezone. Recurrence local wall-clock/DST tested.

## Country config
Country/locales/currency/age/identity/connectors/payments/legal/private-home/moderation product config centralized. OperationalFlags and experiments are separate concerns.

## Expansion
Per country: legal/privacy, identity, source rights, localization, moderation/support, payments/tax, mobile links/store config and city liquidity.

## Scale
Do not tie architecture changes to MAU. Use `CAPACITY_AND_COST_MODEL.md`: RPS, concurrent sockets, DB CPU/IO/connections, PostGIS QPS, ingestion records/day, notification fanout, media/egress, queue age and unit cost.

Extract search/chat/recommendation/notifications/ingestion only for measured independent scaling, reliability isolation or ownership cadence. DR maturity is driven by RTO/RPO/business impact, not MAU.
