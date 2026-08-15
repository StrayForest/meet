# Screen reference pack

Visual examples live under `design/screens/` and use stable IDs.

## Surfaces
- `M01–M97` → `design/screens/consumer*.js` + `consumer.html`
- `B01–B20` → `design/screens/b2b*.js` + `b2b.html`
- `A01–A22` → `design/screens/admin*.js` + `admin.html`

## ID ranges
Consumer: M01–M13 onboarding/permissions; M14–M24 discovery; M25–M35 participation/attendance; M36–M49 creation/management; M50–M55 Pods; M56–M60 chat; M61–M77 profile/settings/data rights; M78–M85 safety; M86–M88 client/offline states; M89–M97 critical event/state variants required by visual QA.

B2B: B01–B06 organization/events/recurrence; B07–B09 operational attendee/check-in/comms; B10 analytics; B11–B12 team/RBAC; B13–B18 organization/claim/integrations/promotion/billing/settings; B19 concrete occurrence; B20 attendee approval.

Admin: A01 operations dashboard; A02–A05 moderation/reports/appeals; A06 users; A07 events; A08–A09 organizations; A10 identity; A11–A13 ingestion/dedupe; A14–A16 operational controls/client policy; A17 audit; A18 operations; A19 sensitive location access; A20 experiment/control boundary; A21 dedupe merge preview; A22 immutable evidence viewer.

## Agent use
Search the screen data files by ID/title and inspect that object plus shared renderer only if implementation details require it. Do not read all 139 examples into context. Visual examples define hierarchy/layout intent; product specs, state matrix, security rules and design tokens remain authoritative.
