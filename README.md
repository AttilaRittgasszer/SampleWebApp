# Community Events

Közösségi eseménykezelő példaalkalmazás Next.js, React, TypeScript és PostgreSQL alapokon.

## Fejlesztői indulás

Elvárt runtime: Node.js 22 és pnpm 10.32.1.

```powershell
corepack enable
pnpm install
pnpm dev
```

Az alkalmazás alapértelmezés szerint a `http://localhost:3000` címen indul.

## Gyakori parancsok

```powershell
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm verify
```

## Public repository szabályok

Ez a repository public indulásra készül. Valódi secret, API kulcs, token, OAuth secret, Resend kulcs, database URL, staging/production adat vagy bizalmas üzleti adat nem kerülhet a repositoryba, issue-ba, pull requestbe vagy logba.

Csak placeholderes `.env.example` és `.env.local.example` fájlok commitolhatók. A valódi `.env*` fájlok git által ignoráltak.

## GitHub workflow

Az ellenőrző GitHub Actions workflow csak `main` branch push esetén és kézi indítással fut. Pull request előtt a fejlesztők lokálisan futtatják a `pnpm verify` parancsot vagy a VS Code `pre-PR verification` taskot.

## Dokumentáció

- `docs\development.md`
- `docs\environment.md`
- `docs\architecture.md`
- `docs\deployment.md`
- `docs\security.md`
- `docs\operations.md`
- `docs\decisions.md`
