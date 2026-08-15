# Screen reference pack

Visual examples live under `design/screens/` and use stable IDs.

## Surfaces
- `M01–M88` → `design/screens/consumer.html` + `consumer-data.js`
- `B01–B18` → `design/screens/b2b.html` + `b2b-data.js`
- `A01–A20` → `design/screens/admin.html` + `admin-data.js`

## ID ranges
Consumer: M01–M13 onboarding/permissions; M14–M24 discovery; M25–M35 participation/attendance; M36–M49 creation/management; M50–M55 Pods; M56–M60 chat; M61–M77 profile/settings/data rights; M78–M85 safety; M86–M88 client/offline states.

B2B: B01–B06 organization/events/recurrence; B07–B09 operational attendee/check-in/comms; B10 analytics; B11–B12 team/RBAC; B13–B18 organization/claim/integrations/promotion/billing/settings.

Admin: A01 operations dashboard; A02–A05 moderation/reports/appeals; A06 users; A07 events; A08–A09 organizations; A10 identity; A11–A13 ingestion/dedupe; A14–A16 operational controls/client policy; A17 audit; A18 operations; A19 sensitive location access; A20 experiment/operational-control boundary.

## Agent use
Search the data file by ID/title and inspect that object plus shared renderer only if implementation details require it. Do not read all 126 examples into context. Visual examples define hierarchy/layout intent; product specs, state matrix, security rules and design tokens remain authoritative.
