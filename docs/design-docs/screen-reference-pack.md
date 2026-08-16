# Screen reference pack

Visual examples live under `design/screens/` and use stable IDs.

## Active surfaces
- Consumer V1: `M01–M25` → `design/screens/consumer-v1-data.js` + `consumer.html`
- B2B: `B01–B20` → `design/screens/b2b*.js` + `b2b.html`
- Admin: `A01–A22` → `design/screens/admin*.js` + `admin.html`

## Consumer V1 ranges
- `M01–M06` discovery/event detail;
- `M07–M09` progressive identity/onboarding;
- `M10` participation;
- `M11–M12` company finding + occurrence-scoped chat;
- `M13` My plans;
- `M14–M15` attendance + next IRL action;
- `M16–M18` V1 public-venue/outdoor creation;
- `M19` safety/reporting;
- `M20–M21` profile/privacy;
- `M22–M25` low-density, cancellation, accessibility and notifications.

The previous `consumer-data.js` / `consumer-data-*.js` set is **historical design material only**. It predates the validation audit and may contain deprecated flows such as account-first onboarding, mandatory interests/gender, consumer `Pod` terminology, persistent social graph assumptions and PRIVATE_HOME creation. It must not be used for implementation or visual acceptance. `consumer.html` intentionally does not load it.

## B2B/Admin ranges
B2B: B01–B06 organization/events/recurrence; B07–B09 operational attendee/check-in/comms; B10 analytics; B11–B12 team/RBAC; B13–B18 organization/claim/integrations/promotion/billing/settings; B19 concrete occurrence; B20 attendee approval.

Admin: A01 operations dashboard; A02–A05 moderation/reports/appeals; A06 users; A07 events; A08–A09 organizations; A10 identity; A11–A13 ingestion/dedupe; A14–A16 operational controls/client policy; A17 audit; A18 operations; A19 future-sensitive-location access tooling; A20 experiment/control boundary; A21 dedupe merge preview; A22 immutable evidence viewer.

## Agent use
For consumer implementation, search only `consumer-v1-data.js` by ID/title unless a task explicitly asks for historical comparison. Visual examples define hierarchy/layout intent; product specs, `validation/MVP_BOUNDARY.md`, state/security rules and design tokens remain authoritative. If a visual example conflicts with them, the visual example loses.