# Threat model — Ingestion and SSRF

Status: **V1 launch-required before production external ingestion**

## Scope
Municipal/provider/organization connectors, feed fetching, raw-record storage, parsing/normalization, URL/media references, geocoding/classification and source-driven canonical updates.

## Assets
Network boundary, cloud metadata/internal services, credentials, authoritative event data, source provenance, parser availability, user trust in event time/place/cancellation and licensed source content.

## Adversaries
Malicious or compromised feed operators, attackers controlling URLs inside otherwise trusted feeds, poisoned payloads, oversized/decompression-bomb content, parser exploit payloads and attackers attempting to use fetchers as internal network proxies.

## Trust boundaries
Configured connector ↔ external network; fetcher ↔ DNS/egress; raw untrusted payload ↔ parser/normalizer; normalized record ↔ authoritative canonical domain; source update ↔ safety/legal removal precedence.

## Attack paths
- SSRF to loopback, RFC1918/link-local/cloud metadata or internal service endpoints;
- DNS rebinding/redirect from allowed host to prohibited target;
- malicious redirect chain or alternate URL scheme;
- huge/slow/decompression payload causing resource exhaustion;
- parser/content payload leading to code execution or unsafe deserialization;
- source poisoning that changes time/place/cancellation incorrectly;
- compromised source resurrecting content removed for safety/legal reasons;
- source-provided media/URL later used by an unsafe generic fetcher;
- parser regression silently corrupting a large set of events.

## Preventive controls
- connectors are allowlisted/configured; no arbitrary user-supplied fetch URL in the ingestion worker;
- allow only required schemes and ports; resolve and reject loopback/private/link-local/metadata targets before connection and after redirects;
- explicit redirect limit with revalidation on every hop;
- bounded connect/read/total timeouts, response-size limits and decompression limits;
- safe parsers with no dynamic code execution/unsafe object deserialization;
- raw payload is treated as untrusted and retained/minimized according to rights/retention policy;
- connector, normalizer and classifier versions are recorded for every run;
- canonical update rules validate required physical/time/location semantics;
- verified organizer/safety/legal removal precedence cannot be overridden by lower-trust refresh;
- separate media ingestion path with its own validation/quarantine controls;
- egress/network policy narrows reachable destinations where practical.

## Detection
Monitor unexpected destination/redirect blocks, timeout/size-limit rate, parser exceptions, abnormal source volume, large cancellation/location-change bursts, freshness failures, version-correlated data anomalies and attempts to access metadata/private address ranges.

## Response and recovery
Disable the affected source/connector through an operational control, preserve run/version/raw references, identify records affected by connector/normalizer/classifier version, rebuild from known-good raw/source data where rights permit, prevent unsafe records from discovery, rotate credentials if exposure is suspected and patch/tests before re-enable.

## Residual risk
Allowlisted external systems can still be compromised or publish semantically wrong data. Provenance/versioning makes impact traceable but cannot guarantee source truth; freshness and organizer/source reconciliation remain product-quality controls.

## Validation mapping
Before each production connector, contract/security tests cover URL allowlisting, prohibited IP ranges, redirect revalidation, timeouts, size/decompression limits, malformed payloads, retry classification, parser-version traceability, cancellation/removal precedence and disabled-source degraded behavior.
