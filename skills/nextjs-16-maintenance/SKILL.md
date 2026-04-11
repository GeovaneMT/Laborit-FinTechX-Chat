---
name: nextjs-16-maintenance
description:
  Maintain, upgrade, and refactor a Next.js 16 application while preserving the
  established App Router architecture, cache strategy, Server Actions, and
  repository conventions.
---

# Next.js 16 Maintenance

## Overview

Use this skill to support maintenance, upgrades, refactors, and architecture
drift correction in an existing Next.js 16 project that follows the repository's
prescribed blueprint.

Keep all responses focused on preserving the current architecture, minimizing
risk, and applying the canonical blueprint without copying domain content, UI
text, or proprietary flows.

## Workflow

1. Confirm the user's maintenance intent:
   - bug fix or regression repair;
   - dependency upgrade or compatibility update;
   - architecture drift review;
   - test coverage improvement;
   - cache, query, or invalidation correction;
   - refactor for clarity, modularity, or performance.
2. Read
   [references/nextjs-16-spa-template.md](./references/nextjs-16-spa-template.md)
   before recommending changes.
3. Identify the existing app's architecture and the maintenance scope:
   - route groups and App Router boundaries;
   - `core`, `infra`, `http`, `presentation`, and `app` separation;
   - data access, caching, and Server Actions;
   - test and mock coverage;
   - dependency and tooling compatibility.
4. Produce a targeted outcome:
   - if giving code, limit changes to the affected layers and keep
     routes/layouts thin;
   - if giving a plan, include safe upgrade steps, regression checks, and
     architectural validation;
   - if auditing, highlight drift against the canonical blueprint and suggest
     incremental remediation.
5. Keep examples and recommendations domain-neutral; prefer `dashboard`,
   `settings`, `items`, `profile`, `feature-a`, and `feature-b`.

## Output Rules

- Preserve architecture and conventions, not the product domain.
- Do not introduce new business flows or proprietary terms.
- Keep the maintenance changes minimal, explicit, and reversible.
- Avoid full app scaffolding unless the user explicitly asks for a rebuild.
- Preserve existing API contracts, query keys, and invalidation logic.
- Keep `page.tsx`, `layout.tsx`, route handlers, and Server Actions thin.
- Retain strict TypeScript and avoid unnecessary runtime behavior changes.
- Keep `presentation/ui` domain-agnostic and `presentation/pattern`
  feature-agnostic.

## Implementation Heuristics

- Treat maintenance requests as a combination of architecture review and scoped
  delivery.
- Prefer fixes in the layer closest to the issue: `presentation/features` for UI
  changes, `http` for transport, `infra` for integration, `core` for pure rules.
- When upgrading dependencies, check compatibility with Next.js 16, React 19,
  Node, and the existing cache/Server Action strategy.
- Use schema-driven forms, explicit cache invalidation, and centralized query
  utilities even during refactors.
- Maintain the repository's path aliases and boundary rules.
- Keep test additions aligned with the original architecture and use the same
  tooling conventions.

## Reference Loading

Read
[references/nextjs-16-spa-template.md](./references/nextjs-16-spa-template.md)
when you need:

- the canonical architecture for Next.js 16 maintenance;
- the required stack and folder structure;
- the App Router, cache, and Server Actions expectations;
- dependency and tooling conventions;
- the safe boundaries for incremental updates.
