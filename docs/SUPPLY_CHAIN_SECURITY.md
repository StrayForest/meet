# SUPPLY_CHAIN_SECURITY — Source, CI and artifact integrity

## Repository
- protected main/release branches when plan supports it;
- PR required for production code/infrastructure after Phase 0 bootstrap;
- required CI checks and CODEOWNERS for sensitive areas;
- no routine direct push to main;
- least-privilege GitHub permissions.

## GitHub Actions
- pin third-party Actions to full commit SHA;
- minimize `GITHUB_TOKEN` permissions per job;
- use OIDC/WIF for GCP, not long-lived cloud keys;
- never execute untrusted PR-controlled scripts with production secrets;
- dependency review/secret scanning where plan/features allow.

## Dependencies
- lockfile committed and deterministic installs;
- Dependabot/Renovate-class update automation;
- critical security advisories triaged with SLA;
- new high-risk native/analytics/identity SDK requires provider/privacy/security review;
- install scripts and transitive native dependencies reviewed for high-risk packages.

## Build artifacts
- build OCI images in CI, not developer laptops;
- deploy immutable digest, not floating tag;
- generate SBOM for production containers/mobile dependency inventory;
- generate build provenance/attestation when GitHub plan supports private-repository attestations, otherwise retain CI metadata/digests and revisit at plan upgrade;
- scan container/dependencies before production promotion.

## Secrets
- CI production environment protected;
- release signing credentials restricted;
- secret rotation documented;
- no secret in build logs/artifacts/source maps.

## Release promotion
The same tested artifact digest is promoted staging→production where possible; do not rebuild different production bytes from the same source without provenance.
