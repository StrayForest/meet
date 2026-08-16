# Product spec — Trust, safety and private-home events

**Status: deferred / evidence-gated. PRIVATE_HOME is not part of consumer V1 and must not be implemented merely because this design exists.** Activation requires the product evidence/ADR gate defined by `validation/MVP_BOUNDARY.md` and `10_IMPLEMENTATION_BACKLOG.md`, followed by a fresh security/privacy review.

Detailed engineering/security source: `../05_TRUST_SECURITY_PRIVACY.md`.

This document preserves the future safety boundary so later rollout does not require unsafe architectural rework.

## Future activation gate
Before any consumer PRIVATE_HOME rollout: validate user need, host/participant safety model, moderation capacity, disclosure UX, legal/privacy impact and operational kill-switch readiness. Only then promote this document from deferred design to active implementation spec.

## Future host gate
Host >=18, phone verified, strong identity verified, participant cap and safety policy pass. First-party operational flag can disable new private-home publishing without deploy or third-party experiment dependency.

## Address/location model
Exact private location is attached to the **concrete EventOccurrence/location assignment**, not automatically to every occurrence in a recurring Event.

Public discovery must never receive exact private address. If the feature is activated, discovery receives only the policy-approved coarse area/point. Exact address/location is separately encrypted and generic Event/Occurrence serializers are structurally unable to include it.

Exact location retrieval, if activated, uses a dedicated endpoint/path that revalidates at request time:
- current occurrence state;
- current confirmed/approved participation or authorized host role;
- block/safety restrictions;
- required verification;
- disclosure window/policy.

Do not rely solely on a location value cached before a membership/safety change.

## Recurring private-home activities
If later supported, different occurrences may use different private locations/hosts/venues. Editing series defaults must not silently reveal or copy exact addresses across occurrences.

## Safety experience
If activated, explain private-home context and host verification before join. Offer Share My Plans. Report/block/remove is easy. Avoid fear-heavy UI for normal verified state.

## Share My Plans
If activated, token is revocable/expiring and contains only necessary fields. Exact address is included only if the user explicitly chooses and policy allows. No continuous GPS tracking.

## Moderation
Reports create reason-coded cases/actions/appeals. AI may assist triage; high-impact irreversible enforcement supports human review.

## Anti-dating
Explicit sexual solicitation, dating-ad events and repeated unwanted romantic/sexual outreach violate policy.

## Activation acceptance
These tests are required only if PRIVATE_HOME is explicitly promoted into active scope:
- occurrence-specific private location tests;
- generic DTO/HTML/map leak tests;
- authorization revalidation after participant removal/block;
- staff exceptional access audited where appropriate;
- operational flag works if experiment providers are unavailable;
- dedicated security review/pentest before broad rollout.
