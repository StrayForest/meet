# 07 — Analytics, i18n, country expansion and scaling

## Analytics
PostHog for product events/cohorts/experiments; BigQuery warehouse. Server mutations authoritative. Never send raw DOB, exact private location, KYC evidence, message bodies, push tokens or raw device-integrity payloads.

## Product/business metrics
North-star outcome: **successful IRL participation**, with repeat successful IRL participation as the strongest PMF signal.

Funnel: public discovery → relevance → **social confidence** → intent/join → credible attendance → repeat/connection. Marketplace: relevant opportunities/user, socially-active opportunities/user, empty-social-card rate, join/fill/show-up/waitlist/time-to-first/repeat. Supply: source freshness/cancellations/coverage/dedupe. Trust: reports/severe incidents/moderation/appeals. Growth: channel → activation → attendance → 30/60-day repeat/referral and CAC per successful/repeat IRL participant. B2B: active orgs, paid conversion, ARPA, retention and campaign outcomes. Client health: versions/capabilities/reconnect. Reliability uses formal SLIs, not product analytics.

Social-confidence diagnostics include social-context viewed, group/company flow opened, join abandoned/completed and optional standardized decline reasons. Never infer comfort/safety from sensitive traits or optimize via fake social proof.

## Recommendation evidence
Do not require declared hobbies/interests. Recommendation evidence is weighted by behavioural reliability: credible attendance/repeat > join/save/Pod > repeated open/search/filter > impression. Use recency/decay, exploration/diversity and user controls. Optimize offline success/repeat, not CTR/time-in-app. Inferred affinity is private product data, not a public profile attribute.

Cohorts must be segmented by city, acquisition channel, event category and launch language without using sensitive attributes inappropriately.

## i18n/time
**Finnish (`fi`), English (`en`) and Russian (`ru`) are mandatory launch languages.** Interface locale and event-language preferences are separate. Language support is part of beachhead/GTM strategy, not a discretionary later localization. UTC absolute timestamps + occurrence IANA timezone. Recurrence local wall-clock/DST tested.

## PMF/liquidity
Thresholds and falsifiable hypotheses are governed by `business/PMF_HYPOTHESES.md` and `business/CITY_LIQUIDITY_MODEL.md`. Do not replace weak social confidence/attendance/repeat with vanity registration/MAU reporting.

## Country config
Country/locales/currency/age/identity/connectors/payments/legal/private-home/moderation product config centralized. OperationalFlags and experiments are separate concerns.

## Expansion
Per country: legal/privacy, identity, source rights, localization, moderation/support, payments/tax, mobile links/store config and city liquidity. Country availability may precede active GTM; active city growth follows liquidity/economic evidence.

## Scale
Do not tie architecture changes to MAU. Use `CAPACITY_AND_COST_MODEL.md`: RPS, concurrent sockets, DB CPU/IO/connections, PostGIS QPS, ingestion records/day, notification fanout, media/egress, queue age and unit cost.

Extract search/chat/recommendation/notifications/ingestion only for measured independent scaling, reliability isolation or ownership cadence. DR maturity is driven by RTO/RPO/business impact, not MAU.