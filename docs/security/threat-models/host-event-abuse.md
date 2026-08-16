# Threat model — Host and event abuse

Status: **V1 launch-required before community event creation/participation**

## Scope
Community-created PUBLIC_VENUE/OUTDOOR events, organizer identity/context, event publication, participation/capacity, arrival information and event changes. PRIVATE_HOME is outside V1.

## Assets
Participant physical safety, trustworthy event time/place/host context, user contact/privacy data, platform reputation, participation state and reliable cancellation/change truth.

## Adversaries
Malicious hosts, impersonated organizations, scammers, harassers, spammers, users creating deceptive or unsafe events, coordinated abusive groups and compromised host accounts.

## Trust boundaries
Host client ↔ API; organization/claim verification ↔ staff controls; event content/media ↔ publication/discovery; host ↔ participant communication; external source identity ↔ canonical Meet identity.

## Attack paths
- creating a deceptive event to lure users to an unsafe or unrelated place;
- impersonating an organization or venue;
- changing time/location materially after users commit without adequate notice;
- manipulating attendee/social context or capacity to create false confidence/urgency;
- collecting participant information beyond the product's legitimate need;
- harassment/discrimination through eligibility, removal or chat controls;
- repeated event spam or coordinated abuse across accounts;
- hiding a removed/unsafe event by recreating aliases or source records.

## Preventive controls
- V1 creation only for PUBLIC_VENUE/OUTDOOR; PRIVATE_HOME and ONLINE/HYBRID are rejected at product/API policy boundaries;
- progressive host/organization verification proportional to reach/risk;
- publication validation, abuse/rate limits and moderation controls;
- source/organizer provenance visible enough to support informed decisions;
- material change/cancellation semantics are authoritative and notify affected participants;
- no fabricated attendee counts, urgency or unsupported safety/solo-friendly claims;
- eligibility/moderation actions use explicit policy and auditable commands;
- source precedence/removal policy prevents ingestion from resurrecting safety/legal removals;
- block/report controls available from relevant event/social surfaces;
- OperationalFlags/kill switches for high-risk creation or participation capabilities.

## Detection
Monitor high report rate, rapid event creation, repeated removals/recreations, materially changed events after joins, abnormal invitation/participant-removal behavior, organization-claim anomalies and safety incidents by host/organization/source.

## Response and recovery
Unpublish/remove unsafe events, stop new participation, propagate cancellation/removal immediately, notify affected users, preserve minimized evidence, restrict/suspend responsible accounts/organizations, prevent automatic source resurrection and review whether broader feature/source flags must be disabled.

## Residual risk
Public-place events can still be unsafe and organizer verification is not a guarantee of behavior. Meet must communicate factual context rather than claiming that verification makes an event safe.

## Validation mapping
Before community event launch, test V1 place-type rejection, material-update propagation, removal precedence, host authorization, organizer claim permissions, report/block reachability, rate limits and kill-switch behavior. Run abuse-case walkthroughs on creation and event-detail UX.
