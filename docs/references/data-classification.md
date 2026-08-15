# Data classification and handling — Architecture 1.3

PUBLIC: published Event/Occurrence/org public fields, venue data, canonical public URLs.

INTERNAL: operational IDs, source health, non-secret runtime config/capability metadata.

PERSONAL: email/phone/DOB/preferences/devices/push tokens/social/attendance/messages/legal acceptances/export/deletion requests.

HIGHLY_SENSITIVE: exact private location ciphertext context, moderation evidence, security/risk data, selected identity-verification metadata, staff security data, crypto/audit-control metadata.

NOT_STORED: passport/document images/numbers, PAN/CVC, continuous GPS history by default, provider secrets in app tables, raw auth tokens in logs.

Device/app integrity raw verdicts are minimized and not sent to general analytics. Generic Event/Occurrence/read-model code cannot decrypt private locations. Lifecycle follows DATA_LIFECYCLE_AND_RETENTION; encryption follows CRYPTOGRAPHY_KEY_MANAGEMENT.
