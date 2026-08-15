# CRYPTOGRAPHY_KEY_MANAGEMENT — Sensitive field encryption

## Scope
Application-level encryption is reserved for fields whose accidental DB/read-model exposure would create disproportionate harm, primarily exact private-home location and selected moderation/security evidence.

## Envelope format
Ciphertext is self-describing through metadata stored with it:
- `crypto_version`
- `algorithm`
- `kms_key_resource`
- `encrypted_dek`
- `nonce`
- `aad_version`
- ciphertext
- timestamps/rotation metadata

Plaintext private location is serialized as one versioned payload (address + exact coordinate + optional access instructions), encrypted with a random data-encryption key; DEK is wrapped by Cloud KMS.

## Associated data
AAD binds ciphertext to stable context such as record ID/data class/schema version so ciphertext cannot be safely transplanted between records.

## Key policy
- application service account receives only required encrypt/decrypt permission;
- humans do not receive routine decrypt permission;
- key rotation is supported without product-code redesign;
- KMS/key location and DR availability are validated against `DISASTER_RECOVERY.md`;
- deletion of key versions follows retention/legal review and cannot make required retained evidence unrecoverable unexpectedly.

## Rotation
Support lazy rewrap/re-encrypt plus controlled batch rotation. Store crypto metadata so old rows remain decryptable during transition.

## Logging
Never log plaintext, DEKs, ciphertext payload content, auth tokens or full KMS responses.

## Tests
Roundtrip, wrong-AAD, wrong-key, rotated-key, revoked-access and DR recovery tests are mandatory before broad private-home rollout.
