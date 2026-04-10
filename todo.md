# TODO

## 1. i18n

- [ ] Refactor all i18n files to match @infra/i18n pattern
- [ ] Refactor all route locations to source from URL (/[locale]) → primary
      source

## 2. Validations

- [ ] Use Zod (v4) schemas as the single source of truth
- [ ] Centralize schemas following existing architecture
- [ ] Reuse schemas across client and server
- [ ] Validate inputs at boundaries (forms, server actions, APIs)

## 3. Server Actions

- [ ] Refactor existing server actions to follow project standards
- [ ] Ensure consistent naming (`*.action.ts`)
- [ ] Enforce input/output validation via Zod
- [ ] Handle errors in a standardized way
- [ ] Review examples: `create-phone.action.ts`, `fetch-customers.action.ts`,
      `validate-phone.action.ts`

## 4. UI Structure (Navigation & Footer)

- [ ] Implement a reusable navigation menu component
- [ ] Implement a reusable footer component
- [ ] Ensure responsiveness and accessibility (a11y)
- [ ] Integrate with routing and layout system

## 5. Storybook, Design System & Documentation

- [ ] Set up and configure Storybook
- [ ] Document all shared UI components
- [ ] Create stories for different states (loading, error, variants)
- [ ] Establish a design system (tokens, spacing, typography, colors)
- [ ] Document usage guidelines and best practices
- [ ] Align components with accessibility standards (ARIA, keyboard nav)
- [ ] Keep documentation close to components (colocation or MDX)

## 6. Chatbot

- [ ] Create a postgres for chatbot history
