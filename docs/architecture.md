# Architecture

## Client architecture

Use a feature-based React architecture with MVVM-like separation:

- View: pages, layouts, and React components.
- ViewModel-like layer: custom hooks, form state, UI state, and validation adapters.
- Model: Prisma models, DTOs, Zod schemas, and TypeScript types.
- Server/service layer: server-side business logic, data access, transactions, and authorization checks.

## Main folders

- `src\app` Next.js App Router routes and layouts.
- `src\components` shared UI components.
- `src\features` feature modules.
- `src\server` server-side application logic.
- `src\lib` shared utilities and configuration.
- `prisma` Prisma schema, migrations, and seed script.
