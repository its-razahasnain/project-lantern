# ADR-002: Start with a modular monolith

**Status:** Accepted  
**Decision:** Use one NestJS API with explicit domain modules.

## Context
The project is built by one developer with a near-zero initial budget. Microservices would add deployment, observability, and operational overhead before there is a scaling need.

## Consequences
- Faster local development.
- Simpler deployment and testing.
- Domain boundaries remain explicit.
- Services can be extracted later based on measured bottlenecks.
