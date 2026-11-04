# Architecture — Project Lantern

## 1. Initial architecture

Use a **modular monolith** for the API. Keep module boundaries explicit, but deploy one API until scale and team size justify independent services.

```text
Web (Next.js)
    |
    | HTTPS / JSON
    v
API (NestJS)
    |
    +-- Identity module       (planned)
    +-- Catalogue module     (planned)
    +-- Playback module      (planned)
    +-- Rights module        (planned)
    +-- Watchlist module     (planned)
    +-- Advertising module   (planned)
    |
    +-- PostgreSQL
    +-- Object storage       (planned)
    +-- CDN                  (planned)
    +-- Job queue            (planned)
```

## 2. Workspace boundaries

- `apps/web`: presentation, routing, browser-side playback integration.
- `apps/api`: HTTP API and domain modules.
- `packages/contracts`: shared, transport-safe TypeScript contracts.
- `packages/config`: reserved for shared tooling configuration.
- `packages/validators`: reserved for shared runtime validation schemas.

Apps may depend on shared packages. Shared packages must not import application code.

## 3. Media pipeline (planned)

1. Admin submits an asset and rights metadata.
2. Ingestion validates file type, checksum, and required rights.
3. Background worker probes media with FFmpeg.
4. Worker generates approved renditions and audio/subtitle variants.
5. Packager creates HLS outputs.
6. Assets go to private object storage.
7. Playback authorization checks user, title, territory, time window, and device rules.
8. CDN serves authorized media using short-lived access.

Do not proxy large video files through the application API.

## 4. Data ownership

PostgreSQL stores identities, metadata, rights, playback progress, and audit records. Object storage holds video, audio, subtitle, and artwork assets. The database stores object identifiers, not public permanent URLs.

## 5. Security boundaries

- Browser clients are untrusted.
- Admin operations require explicit roles and audit logging.
- Media access is authorized server-side.
- Secrets are environment variables or managed secrets, never committed.
- Apply rate limits, request validation, secure headers, and least privilege.

## 6. Scaling policy

Start with one API deployment and one relational database. Add Redis, queues, transcoding workers, and service separation only when requirements or measurements justify them.
