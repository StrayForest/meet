# Configuration and secret registry

Exact names are finalized during Phase 0; this defines ownership/handling categories, not values.

## Public/build config
Potentially client-safe after explicit classification:
- API/public web base URLs
- environment name
- public map style/token if provider classifies client-safe
- Sentry DSN where appropriate
- non-sensitive app build/runtime metadata
- Universal/App Link domains

Do not put operational safety flag values/secrets into immutable client build config when runtime control is required.

## Server/runtime secrets
- consumer auth server configuration/credentials where applicable
- DB credentials/connector
- Valkey auth
- KMS/Secret Manager references
- external event-source API secrets
- strong-ID/KYC credentials
- moderation provider key
- Stripe secret/webhook secrets
- email/push server credentials
- map/geocoding server-only credentials

## Mobile release/signing credentials
Managed through approved Expo EAS / Apple App Store / Google Play credential mechanisms with restricted release-operator access. Do not copy signing credentials into ordinary application `.env` or repository.

Examples of release configuration (non-secret where applicable):
- EAS project identifier
- update channel
- runtimeVersion policy
- bundle/application identifiers
- associated domains/app links

## Operational runtime config
First-party OperationalFlags and ClientPolicies are **database-backed runtime state**, not environment secrets and not PostHog experiment flags. Changes are authorized/audited through Admin/application commands.

## Rules
- production secrets in Secret Manager/provider credential vault; no `.env` committed;
- `.env.example` contains names/descriptions only;
- runtime schema validates required/optional per app/environment;
- secret rotation does not require product code change;
- CI uses WIF rather than long-lived GCP JSON key;
- client-safe keys are explicitly classified;
- no secret is logged or sent to analytics;
- build-time config is not used for emergency runtime kill switches.

## Ownership
Each config/secret belongs to one package/app/provider module. Duplicated differently named values for the same concept are prohibited. Phase 0 creates typed configuration schemas and ownership comments/docs.
