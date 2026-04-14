# Next.js 16 SPA Template Reference

Source adapted from [docs/instructions/SPA Prompt template - Next.js
16.md](/workspace/docs/instructions/SPA Prompt template - Next.js 16.md).

## Purpose

This reference defines the technical blueprint for generating a new Next.js 16
application with a strict frontend architecture. It must be used as an
implementation reference, not as product/domain content to be copied literally.

## Core Instruction

Generate a new web application with an architecture that is practically
identical to the template blueprint, but without copying business rules, domain
names, flows, texts, or contracts from the original source.

Replicate only the technical blueprint:

- stack
- folder structure
- layers
- conventions
- dependency boundaries
- bootstrap
- routing
- cache
- forms
- UI system
- tests
- frontend MVVM + light DDD organization

Use a neutral domain. Prefer names like `item`, `profile`, `settings`,
`feature-a`, and `feature-b`.

## Required Deliverable

Provide an implementation-ready project with:

1. directory structure
2. base files and configuration
3. minimal routes and features
4. enough examples to prove the architecture
5. a brief final explanation of the organization

## Mandatory Stack

- Next.js 16 with App Router
- React 19
- strict TypeScript
- `pnpm`
- Turbopack
- Server Components
- Cache Components with `cacheComponents: true`
- `use cache`, `cacheLife`, `cacheTag`, `updateTag`, `revalidateTag`,
  `revalidatePath`
- Server Actions as the main integration boundary with the backend
- Orval for typed clients from OpenAPI
- TanStack Query for client-side GETs with server-side prefetch +
  dehydration/hydration
- TanStack Form
- TanStack Table + TanStack Virtual
- Zustand
- Zustand V4
- Tailwind CSS v4
- CVA
- `tailwind-merge`
- `shadcn/ui` + Radix UI
- `@radix-ui/react-slot` for `asChild`
- `motion`
- `msw`
- Vitest + Testing Library
- ESLint with `eslint-plugin-boundaries`
- `oxlint`
- i18n

## Architecture

Organize the app into `core`, `infra`, `http`, `presentation`, and `app`, mixing
light DDD on the frontend with MVVM by feature.

- `core/`: entities, value objects, contracts, types, pure use cases, constants,
  and utilities without React
- `infra/`: auth, analytics, cookies, cache, i18n, stores, adapters, mappers,
  runtime integration, and framework support
- `http/`: `http-resource`, technical routes, mutators, Orval config, generated
  code, and HTTP wrappers
- `presentation/`: UI, patterns, layouts, features, providers, and view models
- `app/`: App Router, route groups, layouts, pages, loading, error, not-found,
  and final composition
- `mocks/`: MSW for dev and tests

## MVVM + DDD

- Use MVVM by feature
- `presentation/features/*/view-models/` concentrates screen state,
  orchestration of queries/actions, and adaptation for UI
- `presentation/features/*/components/` represents the View and should stay
  declarative
- `core/` concentrates pure and highly testable rules
- `infra/` implements technical details
- `http/` concentrates transport and backend access
- Avoid overly academic DDD; keep only abstractions that improve clarity, reuse,
  and testability

## Dependency Rules

- `core` imports only from `core`
- `infra` imports from `core` and `infra`
- `http` imports from `core`, `infra`, and `http`
- `presentation/ui` imports from `presentation/ui`, UI libraries, and shared
  visual utilities
- `presentation/pattern` imports from `core`, `infra`, `presentation/ui`, and
  `presentation/pattern`
- `presentation/layouts` imports from `core`, `infra`, `presentation/ui`,
  `presentation/pattern`, and `presentation/layouts`
- `presentation/features` imports from `core`, `infra`, `http`,
  `presentation/ui`, `presentation/pattern`, and `presentation/features`
- `app` imports from `core`, `infra`, `http`, `presentation`, and `app`
- `mocks` imports from `core`, `infra`, `http`, `mocks`, and
  `presentation/features`

Enforce this with `eslint-plugin-boundaries`.

## Mandatory Conventions

- do not use barrel exports
- prefer `type` over `interface`
- prefer pure functions over classes
- use path aliases
- avoid unnecessary casts
- centralize query keys, query options, cache tags, and data-access helpers
- keep `page.tsx` and `layout.tsx` thin
- keep routes, pages, layouts, route handlers, and Server Actions thin and
  delegated
- `presentation/ui/` must not know the domain
- `presentation/pattern/` must not know a specific feature
- feature components must delegate behavior to view models
- compositional manual components should accept `asChild` with Radix `Slot`
- prefer `shadcn/ui` whenever there is an equivalent component
- every form starts from a validated schema
- every mutation defines an explicit cache invalidation strategy
- no direct HTTP call inside Client Components

## Path Aliases

- `@/*` -> `src/*`
- `@app/*` -> `src/app/*`
- `@core/*` -> `src/core/*`
- `@infra/*` -> `src/infra/*`
- `@http/*` -> `src/http/*`
- `@presentation/*` -> `src/presentation/*`
- `@ui/*` -> `src/presentation/ui/*`
- `@pattern/*` -> `src/presentation/pattern/*`
- `@features/*` -> `src/presentation/features/*`
- `@layouts/*` -> `src/presentation/layouts/*`
- `@mocks/*` -> `src/mocks/*`

## Required Base Code in `core`

Include an `Either` implementation in `core` with a matching unit test.
Reproduce the same structural idea:

### `@core/either.ts`

```ts
export class Left<L, R> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return false
  }

  isLeft(): this is Left<L, R> {
    return true
  }
}

export class Right<L, R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return true
  }

  isLeft(): this is Left<L, R> {
    return false
  }
}

export type Either<L, R> = Left<L, R> | Right<L, R>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
```

### `@core/either.spec.ts`

```ts
import { Either, left, right } from '@core/either'

function doSomeThing(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10)
  }

  return left('error')
}

test('success result', () => {
  const result = doSomeThing(true)

  expect(result.isRight()).toBe(true)
  expect(result.isLeft()).toBe(false)
})

test('error result', () => {
  const result = doSomeThing(false)

  expect(result.isLeft()).toBe(true)
  expect(result.isRight()).toBe(false)
})
```

## Expected Structure

```text
src/
  app/
    (public)/
      layout.tsx
      login/page.tsx
      register/page.tsx
    (private)/
      layout.tsx
      settings/page.tsx
      items/page.tsx
      items/[itemId]/page.tsx
    api/
      revalidate/route.ts
    global-error.tsx
    not-found.tsx
    layout.tsx
    loading.tsx
    page.tsx
  core/
    entities/
    value-objects/
    contracts/
    mappers/
    use-cases/
    __specs__/
    constants.ts
    ids.ts
    utils.ts
  infra/
    analytics/
    auth/
    cache/
    cookies/
    i18n/
    stores/
    server/
    __specs__/
    app-store.ts
    auth-context.ts
    auth-provider.tsx
    auth-session.ts
    cache-life.ts
    cache-tags.ts
    i18n.ts
    queries.ts
    session-store.ts
  http/
    client/
    contracts/
    generated/
    mutators/
    routes/
    __specs__/
    http-resource.ts
    orval.config.ts
  presentation/
    ui/
      shadcn/
      __specs__/
      variants.ts
      button.tsx
      input.tsx
      dialog.tsx
      popover.tsx
      form.tsx
      table.tsx
      badge.tsx
      tabs.tsx
      header.tsx
      loading.tsx
      toaster.tsx
    pattern/
      __specs__/
      form.tsx
      form.contexts.ts
      form.hooks.ts
      data-grid.tsx
      friendly-error-dialog.tsx
      widget-boundary.tsx
    layouts/
      public-layout.tsx
      private-layout.tsx
      onboarding-layout.tsx
      pages/not-found-page.tsx
    features/
      settings/
        actions.ts
        hooks.ts
        schemas.ts
        components/
        view-models/
        __specs__/
    providers/
      query-provider.tsx
  mocks/
    browser.ts
    handlers.ts
    server.ts
    setup-specs.ts
  instrumentation-client.ts
  proxy.ts
```

## Bootstrap and Providers

Implement bootstrap in this order:

1. enable `cacheComponents: true` in `next.config.ts`
2. load locale and session on the server
3. prefetch the route's initial queries on the server
4. hydrate TanStack Query on the client
5. start MSW in dev when enabled
6. start instrumentation/tracking
7. render `app/layout.tsx` with i18n, auth, query provider/hydration, client
   state, and `Toaster`

In `app/layout.tsx`, include:

- `html` and `body`
- initial locale
- `AuthProvider`
- query provider/hydration
- cookies/consent provider if one exists
- `Toaster`
- base metadata
- devtools only in development when it makes sense

Also implement `app/not-found.tsx`, `app/global-error.tsx`, and
`app/loading.tsx`.

## Routing and Access

Use App Router with route-group boundaries:

- `(public)` for public routes
- `(private)` for private routes

Rules:

- routes should compose layouts and features, not concentrate business logic
- validate access on the server before render
- `src/proxy.ts` should optimistically control access, redirect unauthenticated
  users out of private routes, and optionally prevent authenticated users from
  accessing `/login` and `/register`
- use typed and sanitized `searchParams` when URL state exists

Include example routes:

- `/settings`
- `/items`
- `/items/[itemId]`

## Data, Cache, and HTTP

- all integration with the main backend happens through Server Actions
- initial GET uses server-side prefetch + dehydration/hydration
- subsequent client-side GET uses TanStack Query
- the client-side `queryFn` must call a dedicated Server Action for reading
- reusable reads should use `use cache`, `cacheLife`, and `cacheTag`
- after writes, use `updateTag`
- for on-demand invalidation, use `revalidateTag(tag, 'max')`
- for route invalidation, use `revalidatePath`
- avoid duplicating Next cache and client cache unnecessarily
- the View never calls `fetch` directly

### `infra/queries.ts`

Centralize reusable read functions. Each should make explicit:

- `queryKey`
- whether it uses `fetch` with `next.tags`
- whether it uses `use cache`
- which `cacheLife` applies
- when it needs to be dynamic
- how it will be invalidated

Also centralize reusable query options to avoid spreading query configuration
around routes and features.

### `infra/query-keys.ts`

Centralize query keys by technical domain and export a reusable registry.

### `infra/cache-tags.ts`

Centralize cache tags by technical domain, including helpers for list, detail,
and cross-cutting scopes.

### `http/`

- use Orval to generate typed clients from OpenAPI
- isolate generated code inside `http/generated/`
- use a custom mutator when needed
- keep ergonomic manual wrappers for use in Server Actions
- `http/http-resource.ts` should centralize `defineApiRoute`,
  `defineApiRouteFn`, `httpResource<T>()`, `httpUpload<T>()`, error handling,
  `application/problem+json`, auth, locale, and failure normalization

## State

- initial server state: server-side prefetch + hydration
- interactive client server state: TanStack Query
- remote mutations: Server Actions
- local UI state: `useState` or `useReducer`
- small global state: Zustand
- compound components: React Context
- URL state: `searchParams`
- screen state: feature view models

Do not use `useEffect` for primary data fetching, mutations, or derived state.

## Forms

Implement forms in two layers:

1. `presentation/ui/form.tsx`
2. `presentation/pattern/form.tsx` + `presentation/pattern/form.hooks.ts`

Requirements:

- TanStack Form
- Zustand V4 as source of truth
- types inferred from schemas
- `createFormHook(...)`
- `createFormSubmitHandler(...)`
- integration with Server Actions
- reusable fields and error messages isolated from visual structure

## UI System

Build `presentation/ui/` as an internal design system:

- based on `shadcn/ui` + Radix UI
- variants with CVA
- class merging with `tailwind-merge`
- support for `data-slot`, `data-variant`, `data-size` when useful
- manual components with `asChild` via `Slot` when they are compositional
  wrappers

Include at least:

- button
- input
- textarea
- select
- checkbox
- radio-group
- badge
- alert
- dialog
- popover
- dropdown-menu
- tabs
- tooltip
- table
- scroll-area
- header
- loading
- skeleton
- toast

## Pattern, Layouts, and Features

- `presentation/pattern/` should concentrate the data grid, form infrastructure,
  visual error boundaries, friendly dialogs, and shared wrappers
- for the data grid, include at least `data-grid.tsx`, `data-grid-header.tsx`,
  `data-grid-table.tsx`, `data-grid-footer.tsx`, and `data-grid.variants.tsx`
- `presentation/layouts/` should contain `PublicLayout`, `PrivateLayout`, and
  `OnboardingLayout`
- each feature should be self-contained and include `actions.ts`, `hooks.ts`,
  `schemas.ts`, `components/`, `view-models/`, and `__specs__/`
- feature `actions.ts` should include GETs for prefetch/hydration and mutations

## i18n and Auth

Implement:

- initial locale on the server
- persisted locale when client state exists
- messages loaded before final root-layout composition
- a global i18n provider
- auth decoupled from business domain
- session reflected in `session-store.ts`

## Tests

Configure:

- `msw`
- `mocks/browser.ts`
- `mocks/server.ts`
- `mocks/handlers.ts`
- `mocks/setup-specs.ts`

Include:

- unit tests for `core`
- unit tests for view models
- unit tests for `infra`, `http`, hooks, and utilities
- browser tests for `presentation/ui`
- integration tests for routes, Server Actions, prefetch/hydration, TanStack
  Query, and `src/proxy.ts`

Scripts:

- `test:unit`
- `test:browser`
- `test:integration`
- `test`

## Tooling

Provide and configure:

- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `eslint.config.js`
- Vitest
- `postcss.config.*`
- `components.json`

In `next.config.ts`, include:

- `cacheComponents: true`
- secure image configuration
- configuration coherent with App Router
- space for a bundle analyzer in development

In `eslint.config.js`, include:

- `typescript-eslint`
- `eslint-plugin-boundaries`
- `eslint-plugin-oxlint`
- `@next/eslint-plugin-next`

Also configure `shadcn/ui`, Radix UI, and Orval scripts.

## Quality Rules

Generate code:

- without unnecessary comments
- without classes beyond the required `Either` example structure
- without bloated files
- without god pages, god hooks, or god view models
- without business logic in `presentation/ui/`
- without circular coupling
- without barrel exports
- without spreading Orval-generated code outside `http/`

## Final Restrictions

- do not copy real domain names, texts, labels, messages, flows, or contracts
- do not use names from the original project
- use only neutral names and generic infrastructure
- preserve architecture, not product
- replace only what Next.js 16 solves better or what is incompatible in the
  original prompt
