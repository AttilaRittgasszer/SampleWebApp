# Security

This repository is public. Do not commit real secrets, API keys, tokens, database URLs, OAuth secrets, staging/production data, or sensitive personal data.

Security baseline planned for the app:

- Server-side validation with Zod.
- Authorization checks for protected operations.
- Basic abuse prevention for auth and write operations.
- Security headers.
- Safe logging without secrets or sensitive personal data.
- Dependency audit process.
- Secret rotation process for accidental exposure.
