# Threat model — Realtime and occurrence chat abuse

Status: **V1 launch-required before Phase 6 chat/realtime activation**

## Scope
Occurrence/company-finding chat membership, websocket/subscription authorization, durable message mutations, reconnect/recovery, block enforcement and realtime fanout. V1 has no random/open DMs.

## Assets
Conversation confidentiality, membership correctness, durable message integrity, block/safety enforcement, service availability and participant privacy.

## Adversaries
Non-members attempting to subscribe/read, removed or blocked users, spam/flood bots, compromised sessions, malicious members posting abuse and clients creating reconnect/fanout storms.

## Trust boundaries
Authenticated client ↔ realtime gateway; gateway ↔ authoritative membership/block state; realtime fanout ↔ durable message source of truth; websocket recovery ↔ REST/history API.

## Attack paths
- subscribing to a conversation by guessing an ID;
- continuing to receive/send after membership removal or block;
- relying on stale cache/fanout membership instead of authoritative policy;
- duplicate message creation on reconnect/retry;
- spam or oversized message/media metadata causing resource pressure;
- reconnect storms exhausting gateway/database/cache;
- presence/social metadata leaking more participant information than intended;
- realtime outage causing accepted-but-lost messages;
- future connection/DM conversation type accidentally becoming V1-reachable without evidence gate.

## Preventive controls
- authenticate every connection and authorize every conversation subscription/send against current membership/policy;
- authoritative membership/block state remains in PostgreSQL; cache/fanout is not permission truth;
- durable message commit precedes or is independently recoverable from realtime delivery;
- client-generated/idempotency key or equivalent duplicate protection for retry-prone sends;
- per-user/conversation/IP-risk rate limits, message-size limits and bounded fanout/backpressure;
- revocation/removal/block invalidates subscription/send authorization promptly;
- REST/history recovery with cursor/version semantics after reconnect;
- no random/open DM or persistent connection chat routes before their explicit evidence gate;
- minimize presence/typing/participant metadata and do not expose hidden/blocked relationships.

## Detection
Monitor authorization-denied subscriptions, send-rate abuse, duplicate/retry rates, reconnect rate, queue/backpressure depth, durable-send vs delivery divergence, blocked-user attempts and abnormal conversation enumeration.

## Response and recovery
Disconnect abusive/unauthorized sessions, revoke conversation access, degrade to durable REST/polling behavior when realtime is unhealthy, preserve accepted durable messages, suppress unsafe delivery, rate-limit storms and use operational controls to disable chat/realtime without disabling Tier-0 safety/reporting.

## Residual risk
Members of a legitimate chat can copy content outside Meet, and realtime systems are inherently abuse/amplification surfaces. Product copy/privacy must not promise confidentiality beyond platform controls.

## Validation mapping
Before activation, test non-member subscription denial, removal/block revocation, duplicate send/reconnect, durable recovery after realtime outage, rate/backpressure limits, old-client compatibility and proof that deferred DM/conversation types are unreachable in V1.
