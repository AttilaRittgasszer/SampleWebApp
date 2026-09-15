# Copilot instructions

This is a public repository. Never add real secrets, API keys, database URLs, tokens, OAuth secrets, production data, staging data, or private business data to files, issues, PRs, tests, seeds, or logs.

Use the planned stack: Next.js App Router, React, TypeScript, pnpm, PostgreSQL, Prisma, Auth.js, Tailwind CSS, shadcn/ui, Vitest, Playwright, Vercel, and Sentry.

Prefer small, focused changes. Keep documentation updated with each feature. Run `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` locally before PRs. GitHub Actions are intentionally limited to `main` and manual runs for cost control.

Keep code portable for a later Google Cloud Run migration: avoid unnecessary Vercel-only APIs, keep configuration in environment variables, and document runtime requirements.
