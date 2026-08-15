# Configuration and secret registry — Architecture 1.3

Public/build: API/web base URLs, environment, client-safe map token, Sentry DSN where appropriate, app/runtime metadata, Universal/App Link domains.

Server secrets: auth config, DB/Valkey, KMS/Secret references, source APIs, KYC, moderation, Stripe, email/push, server geocoding.

Origin security: Cloudflare AOP/custom client cert and GCP frontend mTLS trust configuration when selected; fallback origin-secret material is Secret Manager-managed and rotated. Never embed origin auth secrets in client builds.

DR: primary/DR region config, backup/replica identifiers and recovery-only secrets/permissions are typed and documented.

Mobile signing stays in approved EAS/Apple/Google credential systems with restricted access.

OperationalFlags/ClientPolicies are database runtime state, not env secrets. All config has one owner/schema; no scattered process.env reads or duplicate aliases.
