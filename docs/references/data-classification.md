# Data classification and handling

## PUBLIC
Published event/organization public fields, public venue data. May be cached/CDN if rights permit.

## INTERNAL
Operational IDs, non-sensitive metrics/config. Staff/service access by need.

## PERSONAL
Email/phone, DOB, user preferences, social/participation history, private messages. Access controlled; minimize logs/analytics.

## HIGHLY_SENSITIVE
Exact private-home location, moderation evidence with sensitive content, security/risk data, selected identity-verification metadata. Strong access controls, encryption where designed, audit exceptional access.

## NOT_STORED
Passport/identity document images and numbers, payment card PAN/CVC, continuous location history by default, provider secrets in application tables.

## Analytics
Use pseudonymous IDs/coarse geography. Message body, raw DOB, exact private address and auth tokens are prohibited analytics fields.

## Backups/deletion
Classification does not imply independent legal retention; use documented retention policy/DPIA. Deleted data may persist in encrypted backups until expiry but must not be restored into active use except controlled recovery.