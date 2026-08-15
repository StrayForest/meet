# Configuration and secret registry

Names become exact during Phase 0; this file defines ownership/handling categories, not secret values.

## Public/build config
App/API base URLs, environment name, feature-flag public keys where safe, map style/public token if provider classifies it as client-safe, Sentry DSN when appropriate.

## Server secrets
Identity provider server credentials/config, DB credentials/connector, Valkey auth, KMS/Secret Manager references, event-source API secrets, KYC keys, moderation provider key, Stripe secret/webhook secrets, email/push credentials.

## Rules
- production secrets in Secret Manager; no `.env` committed;
- local `.env.example` contains names/descriptions only;
- runtime schema validates required/optional per app/environment;
- secret rotation does not require code change;
- CI uses WIF rather than long-lived GCP JSON key;
- client-safe keys are explicitly classified, never assumed safe because a SDK uses them.

## Ownership
Each config variable belongs to one package/app/provider module. Duplicated differently named variables for the same concept are prohibited.