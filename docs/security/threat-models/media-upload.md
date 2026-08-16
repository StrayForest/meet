# Threat model — Media upload and serving

Status: **V1 launch-required before untrusted user media is accepted**

## Scope
User/organizer image upload, object storage, scanning/quarantine, transforms, moderation metadata and public delivery.

## Assets
Client safety, object-storage integrity, serving origin, moderation pipeline, cloud credentials, application availability and user privacy.

## Adversaries
Users uploading malware/polyglots, decompression bombs, crafted parser exploits, illegal/abusive content, tracking payloads and attackers attempting to overwrite/read another user's object.

## Trust boundaries
Client ↔ signed upload authorization ↔ quarantine storage; quarantine ↔ scanner/transform worker; processed object ↔ public serving origin; metadata ↔ application/moderation systems.

## Attack paths
- MIME/extension spoofing and polyglot content;
- image decoder/transform exploit;
- oversized/decompression-bomb resource exhaustion;
- upload-key tampering or object overwrite;
- serving original active content from a trusted application origin;
- sensitive metadata/EXIF leakage;
- unscanned object becoming publicly reachable;
- malicious content evading automated checks and harming users;
- storage URL/token leakage granting broader access than intended.

## Preventive controls
- signed, short-lived upload authorization scoped to one object/key/size/type expectation;
- new uploads enter `QUARANTINED`; only `READY` transformed outputs are publicly served;
- validate magic bytes/decoded type, dimensions and byte/decompression limits rather than trusting filename/MIME alone;
- use maintained isolated decoder/transform tooling and re-encode supported public formats;
- strip unnecessary metadata including location metadata;
- malware/content scanning appropriate to accepted types and moderation policy;
- immutable/unique storage keys; no caller-selected arbitrary bucket path;
- separate media serving origin from privileged application/admin origins where practical;
- least-privilege storage credentials and private source objects unless explicitly public;
- deletion/retention follows lifecycle and moderation-evidence rules.

## Detection
Track rejected file signatures, transform/scanner failures, decoder crashes, abnormal upload size/rate, repeated abusive uploads, quarantine age and any serving request for a non-READY object.

## Response and recovery
Quarantine/delete affected public derivatives, revoke upload capability/account where policy supports it, patch decoder/scanner, identify objects processed by the vulnerable pipeline version if recorded, rotate storage credentials on exposure and preserve only minimized moderation evidence required by policy.

## Residual risk
Automated scanning cannot perfectly classify harmful content or eliminate zero-day decoder bugs. Isolation, re-encoding, rate limits and moderation response reduce blast radius.

## Validation mapping
Before V1 media launch, test signed-scope enforcement, wrong MIME/magic bytes, excessive dimensions/size, non-READY serving denial, metadata stripping, object-key isolation, scanner/transform failure behavior and safe deletion/evidence retention.
