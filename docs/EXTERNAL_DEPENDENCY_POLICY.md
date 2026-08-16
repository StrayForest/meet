# External Dependency Failure Policy — Architecture 1.3

Every network provider integration declares a typed policy before production use.

## Required contract
For each dependency document: owner, purpose, data classification, timeout, retryable errors, max attempts/horizon, exponential backoff+jitter, idempotency behavior, circuit-breaker threshold, fallback/degraded mode, quota handling, webhook verification, DLQ/manual replay path, SLI and kill switch.

## Defaults
- Explicit connect/read/total timeouts; no unbounded requests.
- Retry only transient failures and only when operation semantics are safe.
- Mutating provider calls require provider idempotency key or an equivalent durable deduplication strategy.
- 4xx/business rejection is not retried except documented rate-limit/auth-refresh cases.
- Backoff includes jitter and a finite retry horizon.
- Webhooks are signature-verified, replay-protected and duplicate-safe.
- Provider outage must not weaken auth, identity, private-location or moderation gates.

## Provider classes
Identity, email/SMS/push, maps/geocoding, payment/billing, ticket providers, external event sources, object/media processors and AI moderation all follow this policy.
