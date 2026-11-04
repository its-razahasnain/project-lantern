# Security baseline

- Never commit `.env` or real credentials.
- Use HTTPS in deployed environments.
- Hash passwords with Argon2id or an appropriately configured modern password hash.
- Use secure, HttpOnly, SameSite cookies for browser sessions where applicable.
- Validate and normalize all external input.
- Apply authorization checks on every protected resource.
- Rate-limit authentication, search, and playback authorization endpoints.
- Keep media buckets private; use short-lived signed access.
- Record admin and rights-management changes in audit logs.
- Minimize personal data collection and define retention/deletion policies.
- Perform dependency, secret, and vulnerability scans before production.
- Do not claim DRM or download protection until platform-specific implementation and tests exist.
