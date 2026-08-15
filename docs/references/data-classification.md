# Data classification and handling

## PUBLIC
Published event/occurrence/organization public fields, public venue data, canonical public URLs. May be cached/CDN only when rights/privacy permit.

## INTERNAL
Operational IDs, non-sensitive metrics/config, event source health, non-secret client capability metadata. Staff/service access by need.

## PERSONAL
Email/phone, DOB, user preferences, device/install records, push tokens, social/participation history, private messages, legal acceptances, export/deletion requests. Access controlled; minimize logs/analytics.

## HIGHLY_SENSITIVE
- exact private-home location;
- moderation evidence with sensitive content;
- security/risk data;
- selected identity-verification metadata;
- privileged StaffAccount/security data;
- secrets/credentials (stored in dedicated secret systems, not ordinary tables).

Use strong access controls, encryption where designed and audit exceptional access.

## NOT_STORED
- passport/identity document images and numbers;
- payment card PAN/CVC;
- continuous location history by default;
- provider secrets in application tables;
- raw auth tokens in logs/analytics.

## Exact private location
Occurrence-scoped restricted data. Generic Event/Occurrence/feed/map DTOs cannot contain exact location. Secure client handling should avoid durable offline caching by default; fetch current authorized truth when needed.

## Analytics
Use pseudonymous IDs/coarse geography. Prohibited: message body, raw DOB, exact private address, KYC evidence, push token, auth token, staff privileged credentials.

## Mobile/device data
App version/build/runtime/capabilities may be used for compatibility telemetry. Push token is PERSONAL and must not be exported into general analytics/logs.

## Backups/deletion
Classification does not independently define legal retention. Deleted data may remain in encrypted backups until expiry but is not restored into active use except controlled recovery. Export/deletion workflows are durable and documented.
