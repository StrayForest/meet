# DISASTER_RECOVERY — Region loss and data recovery

## Objective
DR is driven by business/safety impact, not MAU.

Primary: GCP `europe-north1` Finland.
Preferred EU/EEA recovery region: `europe-north2` Stockholm where required services are supported.

## Failure classes
- instance/service revision failure → Cloud Run/managed service recovery;
- zonal failure → managed regional HA;
- database logical corruption → PITR/known-good restore;
- primary-region outage → cross-region recovery procedure;
- credential/security compromise → isolated recovery with secret/key rotation;
- bad deploy/migration → application rollback/forward-fix + DB recovery rules.

## Recovery maturity
### Launch baseline
- Cloud SQL HA + PITR/backups;
- Terraform can recreate regional stateless stack;
- container images/config versions retained;
- storage versioning/lifecycle for critical objects;
- Terraform state stored outside app runtime failure domain with versioning;
- documented recovery in Stockholm from backups/replicas available at that stage;
- quarterly restore drill once production is live.

### Business-critical gate
Before downtime/data loss has material safety/revenue impact, add cross-region Cloud SQL replica or equivalent continuously replicated recovery path to Stockholm, pre-created minimal network/secrets/runtime dependencies and regular failover exercises.

### Later
Warm standby or multi-region traffic only when measured RTO/RPO, geography or ownership justify it. Active-active is not a valuation requirement.

## Targets
Mature core-data targets: RPO ≤5 min and RTO ≤60 min. Launch may have a documented weaker regional-disaster target until continuous cross-region replication is activated; the actual achieved target must be measured and shown, never claimed from documentation alone.

## KMS/secrets
Recovery must prove encrypted private-location data remains decryptable by authorized workloads after region failure. Key location/permissions, Secret Manager replication and emergency access are tested.

## Recovery order
1. incident isolation/credentials;
2. network/load balancer/control plane;
3. database authoritative state;
4. KMS/secrets;
5. API/Tier-0 commands;
6. safety/admin controls;
7. workers/notifications;
8. discovery/realtime;
9. analytics/non-critical systems.

## Drill evidence
Record timestamp, scenario, restored data point, achieved RPO/RTO, integrity checks, blockers and follow-up actions in repository/incident system.
