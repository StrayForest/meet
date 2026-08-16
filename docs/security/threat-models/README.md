# Threat Models — Architecture 1.3

Threat modeling is mandatory for high-risk boundaries. A checklist is not a substitute for a concrete model. Each reachable high-risk boundary has its own file with assets, adversaries, trust boundaries, attack paths, preventive controls, detection, recovery, residual risk and validation mapping.

## V1 launch-required models

| Boundary | Model | Launch status |
|---|---|---|
| Account takeover/session recovery | `account-takeover.md` | required before authenticated consumer launch |
| Host/event abuse | `host-event-abuse.md` | required before community event creation/participation |
| Moderation/report abuse | `moderation-abuse.md` | required before launch moderation is relied on |
| Staff compromise | `staff-compromise.md` | required before privileged admin production access |
| Media upload | `media-upload.md` | required before untrusted user media is accepted |
| Ingestion/SSRF | `ingestion-ssrf.md` | required before production external ingestion |
| Realtime/chat abuse | `realtime-abuse.md` | required before occurrence chat/realtime activation |

## Design-only / activation-gated models

| Boundary | Model | Gate |
|---|---|---|
| Private-home disclosure | `private-home-disclosure.md` | design review retained, but PRIVATE_HOME is explicitly NOT V1; re-review against implementation before any user-facing activation |
| Payment abuse | create `payment-abuse.md` when billing/native payment flows enter implementation scope | monetization/payment evidence + legal/security review |

## Review contract
For each model:
1. map every mandatory preventive/detective control to an implementation owner or explicit deferred gate;
2. map reachable controls to automated/integration/security tests where practical;
3. record residual risks that remain after controls;
4. re-review when trust boundaries, providers, authentication model, data classification or product exposure materially changes.

A high-risk feature cannot launch because this directory merely contains a file. The concrete implementation and tests must satisfy the model.
