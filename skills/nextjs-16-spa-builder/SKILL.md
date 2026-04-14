---
name: nextjs-16-spa-builder
description:
  Generate or scaffold a new Next.js 16 application using a strict architectural
  blueprint with App Router, React 19, TypeScript, TanStack Query/Form/Table,
  Zustand, Tailwind v4, shadcn/ui, MSW, Vitest, Orval, cache components, Server
  Actions, MVVM by feature, and light DDD. Use when Codex needs to create a
  fresh frontend codebase, starter architecture, or implementation prompt that
  follows this specific stack, layering, folder structure, dependency rules,
  bootstrap order, routing model, cache strategy, and testing/tooling
  conventions without copying the original product domain.
---

# Nextjs 16 Spa Builder

## Overview

Use this skill to turn a high-level request for a Next.js 16 frontend into a
concrete starter project or implementation prompt that follows the repository's
prescribed blueprint.

Keep the generated product domain neutral. Preserve architecture and engineering
conventions, not the original business domain, labels, flows, or contracts.

## Workflow

1. Confirm whether the user wants:
   - a reusable prompt;
   - a scaffolded codebase;
   - a partial implementation inside an existing repo;
   - or a review/adaptation of an existing Next.js 16 project against this
     blueprint.
2. Read
   [references/nextjs-16-spa-template.md](./references/nextjs-16-spa-template.md)
   before generating code or prompts.
3. Extract the non-negotiable requirements from the reference:
   - stack and tooling;
   - directory structure;
   - dependency boundaries;
   - routing boundaries;
   - cache and data-fetching strategy;
   - form architecture;
   - UI system conventions;
   - testing expectations;
   - final restrictions.
4. Translate those requirements into the user's requested output:
   - if generating code, create the minimum working structure that proves the
     architecture;
   - if generating a prompt, keep it implementation-oriented and explicit;
   - if adapting an existing repo, preserve working code and evolve toward the
     blueprint incrementally.
5. Keep all examples domain-neutral. Prefer names such as `settings`, `items`,
   `profile`, `feature-a`, and `feature-b`.

## Output Rules

- Preserve the architecture, not the original product.
- Do not copy proprietary domain terms, labels, messages, flows, or backend
  contracts.
- Keep `page.tsx`, `layout.tsx`, route handlers, and Server Actions thin.
- Centralize query keys, cache tags, query options, and reusable data access
  helpers.
- Avoid direct HTTP calls from Client Components.
- Prefer function-based, compositional code with strict TypeScript.
- Do not introduce barrel exports unless the user explicitly asks for them.
- Keep `presentation/ui` domain-agnostic and `presentation/pattern`
  feature-agnostic.

## Implementation Heuristics

- Use `core/`, `infra/`, `http/`, `presentation/`, and `app/` as the default
  top-level architecture.
- Model features with MVVM:
  - `components/` for declarative view code;
  - `view-models/` for screen orchestration and UI-facing state;
  - `actions.ts`, `hooks.ts`, and `schemas.ts` per feature as needed.
- Use Server Actions as the primary integration boundary for backend
  communication.
- Use TanStack Query for hydrated server-prefetched reads and interactive client
  reads.
- Use Next.js cache primitives intentionally and define invalidation explicitly.
- Use schema-driven forms and keep validation close to feature logic.
- Use `shadcn/ui` and Radix-first primitives before creating custom low-level
  UI.

## Reference Loading

Read
[references/nextjs-16-spa-template.md](./references/nextjs-16-spa-template.md)
when you need:

- the exact required stack;
- the expected folder tree;
- the `Either` example required in `core`;
- route examples and route-group expectations;
- cache, invalidation, and hydration rules;
- testing/tooling details;
- or the full wording of the original scaffold prompt.

Do not inline the full reference into responses unless the user explicitly asks
for it. Summarize and apply it.
