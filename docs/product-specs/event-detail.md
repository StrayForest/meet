# Product spec — Event detail

## Goal
Give enough factual and social context to decide whether to attend while keeping admission/ticketing distinct from the Meet social layer.

## Required hierarchy
Image → concrete occurrence time/title → venue/area → primary social CTA → admission/ticket action where relevant → social capacity → attendees/Pods → organizer/trust → description → restrictions/accessibility/cost → safety/source → share/report.

## Event/occurrence identity
Page represents canonical Event plus selected/current EventOccurrence. Recurring series allow choosing another occurrence without confusing series identity with concrete time/place.

Alias URLs resolve to canonical Event and preserve user-facing continuity.

## Admission display
Examples:
- FREE → `Free`
- EXTERNAL_TICKET → external `Get tickets`/`Register` action
- NONE → no admission action

Meet never shows “ticket purchased” unless a future verified integration actually knows that state.

## Social participation display
Independent states:
- Join
- Request to join
- Invite required
- Waitlist
- Joined
- Request pending
- Social participation disabled

A ticketed occurrence can simultaneously show `Get tickets` + `I'm going`.

## Occurrence states
Open/scheduled, join closed, full/waitlist, cancelled, completed, removed/unavailable. Material time/location/cancellation overrides normal layout with persistent banner.

## Freshness/revalidation
For imminent/materially changed events, page refreshes authoritative occurrence state before enabling high-impact actions. If source freshness is degraded, UI must not invent current ticket/cancellation truth.

## Privacy
Private-home exact location is absent from generic page/API. After disclosure policy permits, authorized participant fetches exact address through dedicated current-state authorization path. Participant list obeys privacy/block rules.

## Deep links/SEO
Share uses canonical HTTPS Event URL; occurrence-specific URL only when needed. Universal/App Links open native route when installed. Public web follows `DEEP_LINKS_SEO.md`.

## Acceptance
- locale/time/timezone correct;
- external ticket + social join separation clear;
- recurring occurrence switch preserves correct location/capacity;
- alias link resolves canonical;
- private exact address absent from unauthorized HTML/API;
- cancelled/material update persistent;
- report always reachable.
