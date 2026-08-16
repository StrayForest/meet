# Concurrency and Consistency — Architecture 1.3

Critical commands declare transaction boundary, concurrency control, idempotency and retry semantics before implementation.

| Command | Required consistency | Transaction/concurrency rule | Idempotency/retry |
|---|---|---|---|
| Join occurrence | strong per occurrence/user | one DB transaction; enforce unique participation and capacity atomically | idempotency key; safe duplicate |
| Accept waitlist offer | strong | validate active offer + capacity + transition atomically | duplicate-safe; expired offer cannot resurrect |
| Approve participant | strong | approval and capacity transition in one transaction | command idempotency required |
| Change capacity | strong against joins | version check/locking; never produce over-capacity silently | optimistic retry with explicit conflict |
| Cancel occurrence | authoritative durable state | cancellation version + outbox in one transaction | same cancellation version is duplicate-safe |
| Publish occurrence | strong invariant validation | publication and required derived state atomically visible | retry-safe command |
| Check-in | unique per user/occurrence | DB unique invariant; offline reconciliation cannot duplicate | duplicate-safe |
| Block user | immediate authoritative relationship control | durable block before async projections | repeat block is no-op |
| Moderation action | strong case/action audit relation | action + immutable evidence/audit linkage atomically recorded | action key prevents duplicate sanction |

## General rules
- Database constraints are the final race-condition backstop.
- No read-then-write capacity logic without transactional protection.
- Async projections may be eventually consistent only when authoritative commands and safety boundaries remain correct.
- Serialization/deadlock failures use bounded retry with jitter; business conflicts are surfaced, not blindly retried.
- External side effects occur after durable commit via outbox/task patterns unless a provider contract requires another proven pattern.
