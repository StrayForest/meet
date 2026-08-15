# Third-party provider register — Architecture 1.3

| Capability | Baseline | Status |
|---|---|---|
| Consumer auth | Google Cloud Identity Platform | fixed; DPA/data-location review gate |
| Finnish strong identity | FTN-capable adapter | vendor pending |
| International age/KYC | provider adapter | vendor pending |
| Mobile build/submit/OTA | Expo EAS | fixed boundary |
| iOS app integrity | Apple App Attest/DeviceCheck | optional risk signal, integration review |
| Android app integrity | Play Integrity | optional risk signal, integration review |
| Maps client | MapLibre | fixed |
| Tiles/geocoding | provider abstraction | vendor pending |
| Product analytics | PostHog | fixed; not ops authority |
| Warehouse | BigQuery | fixed |
| Errors | Sentry | fixed |
| Cloud/data | GCP | fixed |
| Edge | Cloudflare | fixed |
| Origin authentication | Cloud Run ingress/default-URL restrictions + GCP LB controls; preferred Cloudflare custom AOP→GCP frontend mTLS after POC | fixed architecture boundary |
| Payments | Stripe boundary | monetization phase |
| Email | adapter | vendor pending |
| Push | APNs/FCM via Expo-compatible path initially | boundary |
| AI moderation | adapter | vendor/model pending |

Every production vendor record includes DPA/data location/subprocessors/retention/security/outage/quotas/cost/deletion/export/exit strategy. Mobile SDK additions also update mobile privacy/store declarations.
