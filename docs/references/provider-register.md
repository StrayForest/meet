# Third-party provider register

Architecture fixes provider classes/boundaries; commercial vendor selections may remain pending until integration phase.

| Capability | Baseline | Status |
|---|---|---|
| Consumer auth | Google Cloud Identity Platform | fixed |
| Strong Finnish identity | FTN-capable provider adapter | vendor selection pending |
| International age/KYC | document/liveness provider adapter | vendor selection pending |
| Maps client | MapLibre | fixed |
| Map tiles/geocoding | provider abstraction | initial vendor to select before production |
| Product analytics | PostHog | fixed |
| Warehouse | BigQuery | fixed |
| Error monitoring | Sentry | fixed |
| Cloud/compute/data | GCP | fixed |
| Edge/WAF | Cloudflare | fixed |
| Billing/payments | Stripe boundary | fixed for monetization phase |
| Email | provider abstraction | vendor selection pending |
| Push | APNs/FCM via Expo-compatible implementation initially | implementation decision within boundary |
| AI moderation | provider abstraction | production model/vendor selected with safety/cost review |

For every production vendor record region/data processing, DPA, retention, subprocessor considerations, outage behavior, rate limits, cost/quota and exit strategy.