# ADR-0008 — Supply-chain, repository and origin governance
Status: ACCEPTED

Production changes flow through PR/CI/review/promotion. Pin Actions by full SHA, least permissions/WIF, deterministic dependencies, immutable image digest, SBOM/provenance where plan supports. Cloudflare cannot be trivially bypassed: Cloud Run ingress/default URL restrictions plus GCP LB origin controls and preferred mTLS AOP after validated proof-of-concept.
