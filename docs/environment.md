# Environments

The project uses local, staging, and production environments. Preview environments are intentionally not part of the first version.

## Secret storage

- Local secrets live only in `.env.local` on the developer machine.
- Staging and production secrets live in Vercel Environment Variables.
- Provider secrets stay in the provider dashboards where possible.
- GitHub Actions Secrets are used only when a workflow actually needs them.
- Real secrets, API keys, OAuth secrets, database URLs, and tokens must not be committed.

Use `.env.example` and `.env.local.example` as placeholder-only references.
