# Project Lantern

A web-first, ad-supported video-on-demand platform foundation. The public brand name is still under review; `Project Lantern` is the repository and engineering codename.

## Current scope

- `apps/web`: Next.js web application.
- `apps/api`: NestJS modular-monolith API.
- `packages/contracts`: shared TypeScript API contracts.
- PostgreSQL local development service.
- Architecture, security, product, and licensing documentation.

No third-party movie streams, scraped catalogues, or unlicensed media are included. Only content with verified distribution rights may be published.

## Requirements

- Node.js 22 or newer (Node 24 LTS is suitable).
- pnpm 12.4.1.
- Git.
- Docker Desktop or Docker Engine (only needed for local PostgreSQL).

## Setup

```bash
corepack enable
corepack prepare pnpm@12.4.1 --activate
pnpm install
cp .env.example .env
docker compose up -d postgres
pnpm dev
```

On Windows PowerShell, replace the copy command with:

```powershell
Copy-Item .env.example .env
```

Open:
- Web: http://localhost:3000
- API health: http://localhost:4000/api/v1/health

## Verification

Run these from the repository root:

```bash
pnpm typecheck
pnpm test
pnpm lint
pnpm build
```

To check PostgreSQL:

```bash
docker compose ps
docker compose exec postgres pg_isready -U lantern -d lantern
```

## Development conventions

- Keep the backend as a modular monolith until measured scale justifies a split.
- Validate all external input at API boundaries.
- Do not commit `.env`, credentials, private keys, media files, or user data.
- Treat catalogue metadata and media assets as separate concerns.
- A title must have verified rights, territory, permitted business model, and availability dates before publication.
- Never expose raw object-storage paths or permanent media URLs to clients.
- Add automated tests with every meaningful feature.

## Current limitations

This is a development scaffold, not a production streaming service. Authentication, catalogue persistence, video ingestion, playback authorization, ads, DRM, downloads, and licensing workflows are not implemented yet.
