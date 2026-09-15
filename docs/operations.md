# Operations

## Backup and rollback

- Use Neon backup, PITR, or snapshots according to the selected plan.
- Create a restore point or snapshot before risky production migrations.
- Use small, safe Prisma migrations.
- Use Vercel deployment rollback for application rollback.
- Treat code rollback and database rollback as separate processes.

## Observability

- Use structured logs.
- Use request/correlation IDs.
- Use Vercel runtime/build logs.
- Use Sentry for client and server error reporting.
- Add a health check or diagnostic endpoint.
