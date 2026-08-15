# ORIGIN_SECURITY — Cloudflare → GCP → Cloud Run

## Mandatory baseline
1. Public DNS points through Cloudflare proxy.
2. GCP global External Application Load Balancer fronts serverless NEGs/Cloud Run.
3. Cloud Run ingress = `internal-and-cloud-load-balancing`.
4. Disable default public `run.app` endpoint for public API/realtime services where compatible with internal integrations.
5. Internal GCP jobs/services use explicit private/internal-compatible invocation paths rather than reopening public origin.
6. Cloud Armor/origin controls reject traffic not expected from Cloudflare/approved operational paths.

This prevents trivial direct Cloud Run bypass of Cloudflare/WAF.

## Cloudflare-to-LB authentication
Preferred production hardening after proof-of-concept and plan check:
- zone/per-hostname Cloudflare Authenticated Origin Pull using a dedicated client certificate;
- GCP External Application Load Balancer frontend mTLS validates only the configured trust anchor with `REJECT_INVALID`;
- certificate rotation procedure and monitoring.

If custom AOP/mTLS is unavailable on the selected Cloudflare plan or fails compatibility testing, fallback is Cloudflare source-IP allowlisting at GCP/Cloud Armor plus a rotated secret origin header validated by Cloud Armor/application boundary. The fallback is explicitly documented and tested; never assume obscurity of LB IP is protection.

## Operations
Direct bypass/testing uses a separate authenticated operator path or temporary audited rule, never a permanent unprotected origin hostname.

## Tests
- direct `run.app` fails;
- direct LB request without allowed source/origin auth fails;
- Cloudflare request succeeds;
- certificate/header rotation has rollback;
- websocket and file/upload routes remain protected.
