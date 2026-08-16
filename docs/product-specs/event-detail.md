# Product spec — Event detail

## Goal
Give enough factual, arrival and social context to decide whether to attend while keeping admission/ticketing distinct from Meet participation.

## Required hierarchy
For consumer V1, prefer:
1. title;
2. concrete occurrence time;
3. public venue/area + distance;
4. price/admission;
5. event language;
6. concise description / who it is for;
7. reliable accessibility facts;
8. organizer/source trust;
9. arrival confidence: meeting point/process, how to recognize host/group, what happens first, newcomer/solo context where defensible;
10. privacy-safe social context only when decision-useful;
11. primary `I'm going` action;
12. secondary `Find company` / validated equivalent where enabled;
13. external ticket/register action where relevant;
14. share/report/safety/source details.

Do not expose `Pod` as required consumer vocabulary and do not make attendee avatars/counts the dominant value proposition.

## Event/occurrence identity
Page represents canonical Event plus selected/current EventOccurrence. Recurring series allow choosing another occurrence without confusing series identity with concrete time/place. Alias URLs resolve to canonical Event and preserve user-facing continuity.

## Admission display
Examples:
- FREE → `Free`;
- EXTERNAL_TICKET → external `Get tickets`/`Register` action;
- NONE → no admission action.

Meet never shows `ticket purchased` unless a future verified integration actually knows that state. Native/internal ticketing is not V1 scope.

## Meet participation display
Independent states include Join / Request to join / Invite required / Waitlist / Joined / Request pending / participation disabled. A ticketed occurrence can simultaneously show `Get tickets` + `I'm going`.

`I'm going` must unlock user value such as useful updates, company-finding context or attendance flow; it is not merely data collection.

## Company finding
Where evidence/policy enables it, use plain action language such as `Find company`. Explain what the group is for and keep it bound to the selected occurrence. Do not require a persistent connection/social graph for a successful event experience.

## Arrival confidence
Arrival information is first-class. Where reliable, include public meeting point, host/group recognition, first-minutes expectation and concise solo/newcomer guidance. `Solo-friendly`/newcomer claims require defensible organizer facts or sufficient evidence and must never be fabricated.

## Occurrence states and freshness
Open/scheduled, join closed, full/waitlist, cancelled, completed, removed/unavailable. Material time/location/cancellation overrides normal layout with persistent banner. For imminent/materially changed events, refresh authoritative occurrence state before high-impact actions. If source freshness is degraded, do not invent current ticket/cancellation truth.

## Privacy and V1 place boundary
Consumer V1 event detail supports PUBLIC_VENUE/OUTDOOR. PRIVATE_HOME is not a normal V1 discovery/detail surface. The future private-home exact-location authorization boundary remains specified elsewhere so domain support cannot leak exact location if later enabled; generic/public event HTML/API never includes private exact location.

Participant/social context obeys privacy and block rules and should expose only information useful to the participation decision.

## Accessibility
Event-level accessibility facts should be structured where reliably known and usable by screen readers. Detail must remain usable with large text, keyboard/web navigation, reduced motion and without relying on map/color alone.

## Deep links/SEO
Share uses canonical HTTPS Event URL; occurrence-specific URL only when needed. Universal/App Links open native route when installed. Public web follows `DEEP_LINKS_SEO.md`.

## Acceptance
- locale/time/timezone correct;
- external ticket + Meet participation separation clear;
- recurring occurrence switch preserves correct location/capacity;
- alias link resolves canonical;
- no consumer V1 PRIVATE_HOME detail path;
- private exact address absent from unauthorized HTML/API;
- arrival/accessibility information renders when reliable and degrades safely when unknown;
- no required `Pod` terminology;
- cancelled/material update persistent;
- report always reachable.