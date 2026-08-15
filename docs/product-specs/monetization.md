# Product spec — Monetization (deferred until activity proof)

## Principle
Core event discovery/social participation remains useful for free. Monetization must not create unsafe or misleading ranking.

## Sequence
1. Organization Pro subscription.
2. Clearly labeled promoted events.
3. Affiliate ticket links under provider agreement.
4. Native ticketing after separate legal/payment product review.
5. Stripe Connect only if marketplace payouts are approved.
6. Consumer Plus only after demonstrated non-essential value.

## Organization Pro
Entitlements, not hard-coded plan checks. Examples: advanced analytics, larger team, exports/integrations/advanced organizer tools.

## Promotion
Paid placement is labeled; eligibility/safety filters run before promotion boost; user can distinguish sponsored from organic. Promotion cannot resurrect cancelled/removed/irrelevant events.

## Billing
Stripe provider boundary; webhook signatures/idempotency; internal subscription/entitlement state; money minor units/currency; no card data stored directly.

## Acceptance
Entitlement tests; duplicate webhook safe; cancellation/grace/refund states defined before launch; analytics separates organic vs sponsored exposure.