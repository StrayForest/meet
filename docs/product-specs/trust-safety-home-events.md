# Product spec — Trust, safety and private-home events

Detailed engineering/security source: `../05_TRUST_SECURITY_PRIVACY.md`.

## Home-event gate
Host >=18, phone verified, strong identity verified, participant cap and safety policy pass. First-party operational flag can disable new private-home publishing without deploy or PostHog dependency.

## Address/location model
Exact private location is attached to the **concrete EventOccurrence/location assignment**, not automatically to every occurrence in a recurring Event.

Public discovery receives coarse area/point only. Exact address/location is separately KMS-encrypted and generic Event/Occurrence serializers are structurally unable to include it.

Exact location retrieval uses dedicated endpoint/path that revalidates at request time:
- current occurrence state;
- current confirmed/approved participation or authorized host role;
- block/safety restrictions;
- required verification;
- disclosure window/policy.

Do not rely solely on a location value cached before a membership/safety change.

## Recurring private-home activities
Different occurrences may use different private locations/hosts/venues. Editing series defaults must not silently reveal or copy exact addresses across occurrences.

## Safety experience
Before join, explain private-home context and host verification. Offer Share My Plans. Report/block/remove is easy. Avoid fear-heavy UI for normal verified state.

## Share My Plans
Token is revocable/expiring and contains only necessary fields. Exact address is included only if the user explicitly chooses and policy allows. No continuous GPS tracking.

## Moderation
Reports create reason-coded cases/actions/appeals. AI triages; high-impact irreversible enforcement supports human review.

## Anti-dating
Explicit sexual solicitation, dating-ad events and repeated unwanted romantic/sexual outreach violate policy.

## Acceptance
- occurrence-specific private location tests;
- generic DTO/HTML/map leak tests;
- authorization revalidation after participant removal/block;
- staff exceptional access audited where appropriate;
- operational flag works if PostHog is unavailable;
- pentest before broad rollout.
