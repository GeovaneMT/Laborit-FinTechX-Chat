# Next.js 16 SPA Template Reference

Source adapted from [docs/instructions/SPA Prompt template - Next.js
16.md](/workspace/docs/instructions/SPA Prompt template - Next.js 16.md).

## Purpose

This reference defines the canonical blueprint for maintaining and upgrading an
existing Next.js 16 application. Use it as the maintenance baseline, not as
product or domain content to be copied literally.

## Canonical Blueprint

For maintenance work, verify that the target app preserves:

- Next.js 16 App Router with React 19 and strict TypeScript
- `core`, `infra`, `http`, `presentation`, and `app` separation
- Server Actions as the main integration boundary
- Next.js cache primitives and explicit invalidation
- Orval-generated typed clients for API contracts
- TanStack Query/Form/Table, Zustand, Tailwind v4, shadcn/ui, CVA, and
  `tailwind-merge`
- MSW for mocks and Vitest for tests
- no direct HTTP calls from Client Components
- thin route handlers, pages, and layouts
- strict dependency boundaries and no barrel exports

## Maintenance Guidance

Use this document to:

- validate architecture against the canonical stack and folder structure;
- assess whether a requested fix is best handled in `presentation`, `http`,
  `infra`, or `core`;
- check that upgrades preserve cache, query, and invalidation semantics;
- confirm that refactors keep the repository conventions intact;
- avoid introducing new business domain details during maintenance.

## Reference Use

Read this reference before generating:

- targeted patches for an existing repo;
- upgrade plans for dependencies or Next.js features;
- architecture drift reports;
- refactor recommendations that keep the blueprint stable.
