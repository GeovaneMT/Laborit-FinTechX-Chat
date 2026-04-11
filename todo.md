# TODO

## 1. Server Actions

- [ ] Refactor existing server actions to follow project standards
- [ ] Ensure consistent naming (`*.action.ts`)
- [ ] Enforce input/output validation via Zod
- [ ] Handle errors in a standardized way
- [ ] server-action -> service -> http -> app/api
- [ ] Review example: `create-phone.action.ts`, `create-phone.service.ts`

## 2. Chatbot

- [ ] Create a postgres for chatbot history

## 3. Storybook, Design System & Documentation

- [ ] Remove all docs from docs folder and all git branches/commits/history and
      generate new ones
- [ ] Set up and configure Storybook
- [ ] Document all shared UI components
- [ ] Create stories for different states (loading, error, variants)
- [ ] Establish a design system (tokens, spacing, typography, colors)
- [ ] Document usage guidelines and best practices
- [ ] Align components with accessibility standards (ARIA, keyboard nav)
- [ ] Keep documentation close to components (colocation or MDX)
