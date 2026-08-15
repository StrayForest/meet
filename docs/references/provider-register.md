# Third-party provider register

Architecture fixes provider classes/boundaries; commercial vendor selections may remain pending until integration phase.

| Capability | Baseline | Status |
|---|---|---|
| Consumer auth | Google Cloud Identity Platform | fixed; launch DPA/data-location review required |
| Strong Finnish identity | FTN-capable provider adapter | vendor selection pending |
| International age/KYC | document/liveness provider adapter | vendor selection pending |
| Mobile build/submit | Expo EAS Build + EAS Submit | fixed |
| Mobile OTA | EAS Update with explicit runtimeVersion compatibility | fixed boundary |
| Maps client | MapLibre | fixed |
| Map tiles/geocoding | provider abstraction | initial vendor to select before production |
| Product analytics/experiments | PostHog | fixed; not operational kill-switch authority |
| Operational flags | first-party PostgreSQL + Valkey cache + Admin audit | fixed |
| Warehouse | BigQuery | fixed |
| Error monitoring | Sentry | fixed |
| Cloud/compute/data | GCP | fixed |
| Edge/WAF | Cloudflare | fixed |
| Billing/payments | Stripe boundary | fixed for monetization phase |
| Email | provider abstraction | vendor selection pending |
| Push | APNs/FCM via Expo-compatible implementation initially | implementation within boundary |
| AI moderation | provider abstraction | production model/vendor selected with safety/cost review |

For every production vendor record:
- region/data processing/residency characteristics;
- DPA/service terms;
- retention/subprocessors;
- security/auth model;
- outage/degraded behavior;
- quotas/rate limits;
- cost model;
- data export/deletion behavior where relevant;
- exit/migration strategy.

Do not infer a provider's data residency from the GCP application region. Provider compliance review is a launch gate for auth, identity/KYC, analytics, messaging and payments.
