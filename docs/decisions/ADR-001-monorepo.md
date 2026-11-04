# ADR-001: Use a pnpm monorepo

**Status:** Accepted  
**Decision:** Use pnpm workspaces for the web app, API, and shared TypeScript packages.

## Context
The product targets web first and later mobile/desktop. Shared contracts and validation reduce drift, while a monorepo simplifies solo development.

## Consequences
- One repository and lockfile.
- Clear package boundaries.
- Workspace scripts can run checks consistently.
- Apps remain independently buildable.
