# REALTIME — WebSocket, recovery and presence contract

## 1. Role
Realtime improves UX for chat, participant counts, waitlist offers and live event changes. It is never authoritative storage.

Topology:
`Client ↔ Cloud Run realtime gateway ↔ Valkey Pub/Sub` with durable state in PostgreSQL and async effects through outbox/Pub/Sub.

## 2. Connection lifecycle
1. connect
2. authenticate
3. server returns connection/session metadata
4. client subscribes to authorized channels
5. messages/events flow
6. connection may end for network, deploy, Cloud Run timeout or auth expiry
7. client reconnects with jittered exponential backoff
8. reauthenticate
9. resubscribe
10. recover durable state via REST using last known cursor/version

Clients must expect regular reconnects; no correctness depends on a connection staying open.

## 3. Channels
- `conversation:{id}`
- `occurrence:{id}:participants`
- `occurrence:{id}:waitlist`
- `pod:{id}`
- `user:{id}:notifications`

Authorization checked on subscribe and on sensitive event delivery; membership/restriction changes revoke access promptly.

## 4. Durable vs ephemeral events
Durable:
- persisted message created/removed
- event material update/cancellation
- participant/waitlist state change
- durable notification

Durable event payload includes a stable entity version/cursor where applicable and can be reconstructed through REST.

Ephemeral:
- typing
- presence
- transient UI hints

Ephemeral events may be dropped and are never replayed.

## 5. Ordering
No global ordering guarantee.
For conversation messages, clients order by durable `(created_at,id)`/server cursor and deduplicate by message ID.
For entity state, newer entity version supersedes older updates.

## 6. Duplicates
Duplicate realtime/domain delivery is expected. Client and server handlers are idempotent by stable IDs/version.

## 7. Presence
Presence is approximate.
- Valkey TTL-backed
- heartbeat interval shorter than TTL
- disconnect is not guaranteed to be observed instantly
- never use presence for safety-critical decisions

Typing indicator has short TTL and no persistence.

## 8. Backpressure and limits
Server defines configuration-driven limits:
- max subscriptions/connection
- max message payload
- inbound events/second
- outbound queue/buffer
- image/media is uploaded out-of-band, not sent as raw WebSocket bytes

Slow consumer policy may drop ephemeral events or close/reconnect; durable truth remains recoverable.

## 9. Authentication expiry
Connection credentials are not immortal. On expiry/revocation:
- connection is reauthenticated or closed;
- suspended/blocked membership changes stop further authorized delivery;
- reconnect cannot restore revoked access.

## 10. Deployment/timeouts
Cloud Run revisions/timeout/network can end connections. Client reconnect logic is mandatory and tested with forced disconnects/deploy-like interruptions.

## 11. REST recovery
On reconnect/client resume:
- fetch conversation messages after durable cursor
- refresh occurrence/participation state
- refresh waitlist offer state
- refresh durable notifications

If cursor is unknown/expired, fetch bounded latest authoritative state rather than failing permanently.

## 12. Monitoring
Track:
- active connections
- reconnect rate
- auth/subscription failures
- fanout latency
- Valkey Pub/Sub health
- dropped ephemeral events
- outbound backpressure disconnects
- message REST/realtime consistency errors
