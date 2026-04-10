## Plan: Align Project Architecture with Next.js 16 SPA Template

Verify and correct the current project to match the blueprint in "SPA Prompt
template - Next.js 16.md", ensuring full compliance with the specified stack,
structure, conventions, and patterns.

**Steps**

1. **Fix critical config issues**  
   Update `next.config.ts` to set `cacheComponents: true` for proper Next.js 16
   caching behavior.

2. **Create missing infra subdirectories and files**  
   Add `cache/`, `stores/` subdirectories in `src/infra/`. Add i18n provider to
   `providers.tsx`.

3. **Populate empty core directories**  
   Add example implementations in `mappers/` (e.g., DTO-to-entity transformers)
   and `use-cases/` (e.g., pure business logic orchestrators). Ensure they
   follow pure function conventions.

4. **Add missing http subdirectory**  
   Create `routes/` directory for API route definitions. Implement referenced
   Server Actions in `src/infra/server/actions/` (e.g., deleteCustomerAction,
   validatePhoneAction, createCustomerAction).

5. **Verify and enhance presentation layer**  
   Ensure patterns like data-grid, form hooks are implemented. Add any missing
   feature structures (actions.ts, hooks.ts, schemas.ts, view-models/,
   **specs**/).

6. **Update root layout and providers**  
   Ensure `app/layout.tsx` includes all required providers in correct order:
   locale/session loading, prefetch, hydration, MSW in dev, instrumentation,
   auth provider, query provider, toaster.

**Relevant files**

- `next.config.ts` — Enable cacheComponents
- `src/infra/` — Add stores/, i18n/ subdirs and files
- `src/app/` — Restructure route groups, add missing pages
- `src/core/mappers/`, `src/core/use-cases/` — Add real or example
  implementations
- `src/http/routes/`, `src/infra/server/actions/` — Add missing directories and
  action files
- `src/presentation/` — Verify completeness of UI, patterns, features
- `src/app/layout.tsx` — Update provider composition

**Verification**

1. Run `pnpm build` to ensure cacheComponents works and no TypeScript errors.
2. Execute test suites: `pnpm test:unit`, `pnpm test:browser`,
   `pnpm test:integration` to validate MSW, Vitest, and architecture boundaries.
3. Check ESLint with `pnpm lint` to confirm no boundary violations.
4. Manually test i18n locale switching.

**Decisions**

- Retain both Either and Result patterns in core as they serve different
  purposes (Either for async errors, Result for sync).
- Use Server Actions as primary backend integration (already implemented in some
  features).
- Keep feature-based i18n (local i18n.ts per feature) as it aligns with MVVM
  isolation.

**Further Considerations**

1. Evaluate if additional cache-life presets are needed beyond short/medium.
2. Assess need for onboarding-layout.tsx if not used in current features.
