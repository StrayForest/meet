# Product spec — Community event creation — Architecture 1.3

User creates a safe physical activity without event-management jargon.

Wizard: category/title → one-time or supported recurrence → physical place (Public Venue/Outdoor/Private Home) → admission → Meet participation/capacity/waitlist → audience/language → media/accessibility → preview/safety → publish.

Publishing a recurring Event creates/updates EventOccurrenceTemplate plus EventRecurrence; materializer generates concrete occurrences. Template includes duration and default physical location/policies. Single occurrence overrides do not rewrite series defaults.

Private Home immediately explains phone/strong-ID requirement; public label/coarse point are separate from encrypted exact payload.

External ticket is a separate action; never social join mode. V1 has no online/hybrid creation.

Acceptance: idempotent publish, recurrence/DST/template tests, unsupported recurrence rejection, private-location leak/crypto tests, admission/participation independence, cancellation notifications and audited host-sensitive actions.
