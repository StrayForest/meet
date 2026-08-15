# ADR-0006 — Executable schema and durable event-contract governance
Status: ACCEPTED

## Context
Hand-maintained DBML+ORM+migrations drift; outbox becomes future service seam.

## Decision
Before first migration DBML is design blueprint. After P0-006 Drizzle schema+migrations are executable truth and DBML is generated/verified. Durable async events have typed/versioned contracts, aggregate version and compatibility rules.

## Consequence
Less documentation drift; schema/event changes require CI generation/contract checks.
