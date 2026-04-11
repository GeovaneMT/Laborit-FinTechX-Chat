# TODO

## 1. Server Actions

- [ ] Refactor existing server actions to follow project standards
- [ ] Ensure consistent naming (`*.action.ts`)
- [ ] Enforce input/output validation via Zod
- [ ] Handle errors in a standardized way
- [ ] Review examples: `create-phone.action.ts`, `fetch-customers.action.ts`,
      `validate-phone.action.ts`

## 2. UI Structure (Navigation & Footer)

- [ ] Implement a reusable navigation menu component
- [ ] Implement a reusable footer component
- [ ] Ensure responsiveness and accessibility (a11y)
- [ ] Integrate with routing and layout system

## 3. Chatbot

- [ ] Create a postgres for chatbot history

## 4. Storybook, Design System & Documentation

- [ ] Remove all docs from docs folder and all git branches/commits/history and
      generate new ones
- [ ] Set up and configure Storybook
- [ ] Document all shared UI components
- [ ] Create stories for different states (loading, error, variants)
- [ ] Establish a design system (tokens, spacing, typography, colors)
- [ ] Document usage guidelines and best practices
- [ ] Align components with accessibility standards (ARIA, keyboard nav)
- [ ] Keep documentation close to components (colocation or MDX)
