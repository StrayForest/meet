# 01 — Product and complete feature specification

## 1. Product thesis

Build the default real-world social layer for cities: a user opens the app and understands **what is happening nearby, who is going, and how to join**.

The product is not marketed as “for lonely people”. Loneliness may be reduced, but the product identity is participation in real-world activities.

### Category
**Event-first IRL social network / real-world social marketplace.**

### Core loop
`External/official events → discovery → I'm going → Pods / people going together → IRL participation → trust/connections → community events → more supply → organizations → more discovery`

### Core jobs-to-be-done
1. I want to do something now/today.
2. I know an event I want to attend but do not want to go alone.
3. I want to create an activity and find participants.
4. I run an organization and want people to discover/attend my activities.
5. I want recurring offline social activity without dating or endless content scrolling.

## 2. Launch strategy

- Product/event coverage: all Finland from launch.
- Social/community activation: city-by-city; Helsinki metro first, then Tampere, Turku, Oulu, Jyväskylä, Vaasa, Kuopio and other cities.
- Languages: Finnish, English, Russian.
- Public network: 18+.
- Expansion target: Nordics/EEA/EU via country configuration, not forks.

## 3. Product principles

1. Events before profiles.
2. Offline outcomes before engagement time.
3. Imported event supply solves cold start.
4. Any event can gain a social layer through participation and Pods.
5. Trust/reputation are marketplace infrastructure.
6. Privacy is architectural.
7. No dating drift.
8. No random DMs.
9. Organizations are supply partners before revenue customers.
10. Country expansion = config + connectors + localization + legal/safety policy.

## 4. North Star and health metrics

### North Star
**Successful IRL Participations / week**

A successful participation is an event attendance attributable to the platform through check-in, host confirmation, peer confirmation or another approved signal.

### Supporting metrics
- Weekly Active Participants
- Join conversion rate
- Event fill rate
- Show-up rate
- Repeat participation D30/D90
- Median time to first successful participation
- Events with >=2 platform participants
- Share of supply created by community/organizations
- Invite/referral rate
- Organic acquisition share
- Safety incidents / 10k participations
- Moderation resolution time
- Appeal overturn rate

## 5. User roles

### Consumer user
Discovers, joins, creates community activities, joins Pods, chats in context, builds trusted connections.

### Community host
A consumer user who creates/hosts events.

### Organization member
Acts on behalf of an organization according to RBAC.

### Organization owner/admin
Claims/verifies organization and manages team/billing.

### Staff moderator/operator
Uses isolated Admin surface, MFA required, all sensitive actions audited.

## 6. Account and onboarding

### Authentication
- Email sign-in.
- Google sign-in.
- Apple sign-in on Apple platforms where required.
- Managed by Google Cloud Identity Platform.
- Internal `User` UUIDv7 created after valid auth.

### Required onboarding fields
- nickname;
- date of birth;
- gender;
- home city/area;
- languages;
- interests;
- acceptance of Terms, Privacy Policy and Community Guidelines with version/timestamp.

### Optional/encouraged
- profile photo;
- bio;
- phone verification;
- stronger identity verification.

### Public profile
- nickname;
- avatar;
- derived age, never DOB;
- optional bio;
- languages;
- interests;
- city/area;
- optional gender visibility;
- verification badges;
- attendance/host/reliability badges or bands.

### Private profile data
- DOB;
- auth subject;
- email/phone;
- verification provider references;
- device/session data;
- safety/risk metadata.

## 7. Mobile information architecture

Bottom tabs:
1. Home
2. Map
3. Create
4. Chats
5. Profile

Global actions:
- Search
- Notifications
- Share/deep-link
- Safety/report actions

## 8. Discovery

### Home sections
- For You
- Now
- Today
- Weekend
- Nearby
- Saved
- Following/Organizations later

### Event card
Shows at minimum:
- title;
- category;
- start/time-to-start;
- distance;
- official/community/imported badge;
- available seats/capacity if applicable;
- languages;
- number of platform participants or Pods when privacy permits;
- primary CTA Join / Request / Tickets / View.

### Filters
- distance;
- date/time;
- category;
- free/paid;
- language;
- age eligibility;
- legitimate audience/gender eligibility;
- indoor/outdoor;
- accessibility;
- seats available;
- source type;
- connections attending;
- verification requirement.

### Map
- cluster at low zoom;
- event pins at high zoom;
- viewport/time/filter query;
- private-home exact point never exposed to unauthorized clients.

### Search
- title;
- organizer;
- venue;
- category;
- fuzzy matching;
- natural-language intent converted to structured filters.

LLM/search interpretation must never invent events.

## 9. Event model

### Origin
- IMPORTED
- ORGANIZATION
- COMMUNITY
- PLATFORM

### Visibility/access
- PUBLIC
- UNLISTED
- PRIVATE
- ORGANIZATION_ONLY

### Join modes
- OPEN
- APPROVAL_REQUIRED
- INVITE_ONLY
- EXTERNAL_TICKET

### Place
- PUBLIC_VENUE
- OUTDOOR
- PRIVATE_HOME
- ONLINE

### Time
- ONE_TIME
- RECURRING

### Event fields
- title/description;
- category;
- language(s);
- date/time/timezone;
- recurrence;
- venue/place/address policy;
- capacity;
- join mode;
- age eligibility (never below platform minimum);
- audience policy;
- cost/free indicator;
- external ticket link;
- media;
- accessibility;
- cancellation policy;
- verification requirement;
- source/provenance.

## 10. Event lifecycle

DRAFT → PENDING_REVIEW → PUBLISHED → COMPLETED/ARCHIVED

Alternative terminal paths:
- CANCELLED
- REMOVED by moderation/platform

Imported source updates must not automatically reverse a safety removal.

## 11. Event detail

Display:
- localized title/description;
- source/origin;
- organizer;
- start/end/timezone;
- location/venue;
- public/coarse address according to policy;
- categories/languages;
- accessibility;
- capacity/availability;
- join mode;
- platform attendees subject to privacy;
- Pods;
- ticket URL;
- safety/verification requirements;
- save/share/report.

## 12. Community event creation

Wizard:
1. event type/category;
2. title/description/languages;
3. date/time/recurrence;
4. place/location;
5. capacity and join policy;
6. eligibility/audience;
7. media;
8. safety/verification requirements;
9. preview;
10. publish.

Host management:
- edit;
- close joining;
- approve/reject participants;
- remove participant with reason;
- cancel occurrence or series;
- announcements;
- check-in;
- attendee list.

## 13. Participation

### Join paths
- instant confirmed;
- approval requested;
- waitlisted;
- external ticket flow;
- invite-only acceptance.

### Required mechanics
- capacity enforced transactionally;
- waitlist;
- slot offer with expiry;
- automatic next offer;
- idempotent join/leave;
- cancellation;
- host removal;
- calendar export/add;
- reminders;
- participant privacy.

## 14. Pods

A Pod is a small social group attached to an EventOccurrence.

Examples:
- “Going from Espoo”
- “English speakers”
- “Meet before the concert”
- “First time here”

Capabilities:
- create;
- open/approval join;
- capacity;
- meeting point;
- members;
- Pod chat;
- report;
- leave/cancel;
- post-event feedback.

Pods work on imported, official and community events and are a primary differentiator.

## 15. Chat and connections

### Conversation types
- Event chat
- Pod chat
- Connection DM
- Organization announcement

### Launch message types
- text;
- emoji;
- image;
- meeting point/location message;
- system message.

Not launch scope:
- arbitrary files;
- voice;
- video;
- calls.

### Direct messages
Random DMs are forbidden by product design.

Connection DM becomes available only after mutual connection or explicit post-event connection flow.

### Blocking
Block must affect:
- DMs;
- contextual social visibility where feasible;
- Pod/event interactions;
- recommendations/social signals;
- notifications.

## 16. Attendance and reputation

### Attendance signals
- QR/code check-in;
- organizer confirmation;
- peer confirmation;
- optional coarse geofence assist;
- no continuous location tracking.

### Post-event flow
- Did you attend?
- Who did you meet?
- Respectful
- Friendly
- On time
- Good organizer
- Would meet again
- private safety/negative feedback
- Connect?

### Public reputation
Allowed:
- identity/phone badges;
- attended/hosted counts or bands;
- reliable participant/host badges;
- structured positive aggregates after minimum sample threshold.

Forbidden:
- public 1–5 star human rating;
- public negative free-form reviews of people.

## 17. Private-home events

Allowed, but high-risk.

Required:
- host 18+;
- host phone verified;
- host strong identity verified;
- participant cap;
- exact address stored separately and encrypted;
- public card shows only coarse area;
- exact address revealed only to confirmed/approved participants according to disclosure policy/window;
- safety warning;
- Share My Plans;
- heightened risk scoring/moderation;
- immediate report/block/removal.

## 18. Identity verification

Trust levels can include:
- authenticated;
- email verified;
- phone verified;
- liveness/photo verified;
- strong identity/age verified;
- verified organization authority.

Strong verification mandatory for:
- private-home host;
- organization owner/claim owner where policy requires;
- staff;
- safety-escalated accounts.

The platform stores only verification outcome/provider reference, not identity documents.

## 19. Dating policy

The service is not a dating product.

Prohibited:
- explicit sexual solicitation;
- events that are essentially personal dating ads;
- repeated romantic/sexual cold outreach;
- unwanted sexual follow-up after events.

Legitimate women-only/men-only/community/safety events are policy-governed and not automatically considered dating.

## 20. Trust & Safety

Report targets:
- user;
- event;
- Pod;
- message;
- organization;
- media.

Reasons:
- harassment;
- sexual solicitation;
- threat/violence;
- hate;
- scam/fraud;
- spam;
- impersonation;
- unsafe event;
- illegal activity/goods;
- privacy violation;
- suspected underage user;
- other.

Actions:
- no action;
- limit/remove content;
- warning;
- chat restriction;
- event-create restriction;
- participation restriction;
- require verification;
- temporary suspension;
- permanent ban;
- organization restriction;
- risk/device flag.

Appeals are a modeled workflow, not ad-hoc support messages.

## 21. Organizations / B2B2C

Organization types:
- Business
- Venue
- NGO
- Municipality
- University
- Student organization
- Religious organization
- Sports club
- Community
- Event organizer

### Organization states
- UNCLAIMED
- CLAIM_PENDING
- VERIFIED
- SUSPENDED
- CLOSED

### Roles
- OWNER
- ADMIN
- EVENT_MANAGER
- MODERATOR
- ANALYST
- BILLING

### B2B launch features
- claim profile;
- verification;
- team/roles;
- events;
- recurring events;
- attendee management;
- approval/removal;
- QR check-in;
- announcements;
- basic analytics.

### Later Pro
- advanced analytics;
- larger teams;
- exports;
- integrations;
- promoted events;
- billing;
- attendee forms/CRM-like tools.

## 22. Monetization sequence

1. Free B2B supply acquisition.
2. Promoted events.
3. Organization Pro subscription.
4. Ticket affiliate revenue where agreement allows.
5. Native ticketing.
6. Stripe Connect marketplace payouts only when native marketplace is justified.
7. Consumer Plus only after PMF and without paywalling core participation.

Default payment provider boundary: Stripe.

## 23. Notifications

Channels:
- push;
- in-app;
- email.

Events:
- join accepted/rejected;
- someone joined hosted event;
- waitlist offer;
- reminder;
- update/cancellation;
- Pod activity;
- connection request/accepted;
- organization announcement;
- moderation/safety notice.

User controls:
- granular preferences;
- quiet hours;
- marketing separate from safety/transactional.

## 24. B2B web navigation

- Overview
- Events
- Recurring schedules
- Attendees
- Check-in
- Announcements
- Analytics
- Promotions later
- Team
- Integrations later
- Settings
- Billing later

## 25. Admin surface

- Moderation queue
- Reports
- Appeals
- Users
- Events
- Organizations/claims
- Verification status
- Event sources
- Ingestion runs
- Dedupe candidates
- Feature flags
- Audit
- Operations links

## 26. Explicitly deferred

- users under 18 / Youth Mode;
- open DMs;
- stories/reels/content creator feed;
- voice/video calls;
- full Groups/Facebook-clone;
- crypto/blockchain;
- in-house KYC;
- custom ML before data;
- marketplace payouts before ticketing PMF.
