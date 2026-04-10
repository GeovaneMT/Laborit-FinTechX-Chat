# TODO

## 1. Code Quality

- [ ] Run all tests and fix failures
- [ ] Run ESLint and resolve all warnings/errors
- [ ] Ensure Prettier formatting is consistent across the project

## 2. Theme Management

- [ ] Use `next-themes` as the single source of truth for themes provider
- [ ] Remove any manual theme state or duplicated logic

## 3. Imports Standardization

- [ ] Refactor all imports to use path aliases
- [ ] Ensure aliases are short, consistent, and follow project conventions
- [ ] Group and order imports (external → internal → styles)
- [ ] Organize test files grouping by import source (module boundaries)

## 4. Testing & Coverage

- [ ] Run coverage tests and analyze gaps
- [ ] Add tests for uncovered critical paths
- [ ] Follow project testing standards (naming, structure, patterns)
- [ ] Ensure deterministic and isolated tests

## 5. Validations

- [ ] Use Zod (v4) schemas as the single source of truth
- [ ] Centralize schemas following existing architecture
- [ ] Reuse schemas across client and server
- [ ] Validate inputs at boundaries (forms, server actions, APIs)

## 6. Server Actions

- [ ] Refactor existing server actions to follow project standards
- [ ] Ensure consistent naming (`*.action.ts`)
- [ ] Enforce input/output validation via Zod
- [ ] Handle errors in a standardized way
- [ ] Review examples: `create-phone.action.ts`, `fetch-customers.action.ts`,
      `validate-phone.action.ts`

## 7. UI Structure (Navigation & Footer)

- [ ] Implement a reusable navigation menu component
- [ ] Implement a reusable footer component
- [ ] Ensure responsiveness and accessibility (a11y)
- [ ] Integrate with routing and layout system

## 8. Storybook, Design System & Documentation

- [ ] Set up and configure Storybook
- [ ] Document all shared UI components
- [ ] Create stories for different states (loading, error, variants)
- [ ] Establish a design system (tokens, spacing, typography, colors)
- [ ] Document usage guidelines and best practices
- [ ] Align components with accessibility standards (ARIA, keyboard nav)
- [ ] Keep documentation close to components (colocation or MDX)
