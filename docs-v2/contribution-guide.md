# Contribution Guide

How to contribute to the Laborit project — code, documentation, and design.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Coding Standards](#coding-standards)
4. [Git Workflow](#git-workflow)
5. [Pull Request Process](#pull-request-process)
6. [Documentation Contributions](#documentation-contributions)
7. [Component Contributions](#component-contributions)
8. [Reporting Issues](#reporting-issues)

---

## Getting Started

### Prerequisites

- Node.js 18+ (verify with `node --version`)
- pnpm 8+ (verify with `pnpm --version`)
- Git
- VS Code with recommended extensions

### Setup Development Environment

```bash
# Clone the repository
git clone <repo-url>
cd Laborit-Frontend

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

### Verify Setup

```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Build
pnpm build
```

---

## Development Workflow

### 1. Create a Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch with conventional naming
git checkout -b feature/short-description
git checkout -b fix/short-description
git checkout -b docs/short-description

# Examples
git checkout -b feature/user-auth
git checkout -b fix/button-styling
git checkout -b docs/design-system
```

### 2. Make Changes

```bash
# Work on your feature
# Follow coding standards (below)
# Commit frequently with clear messages

git add src/
git commit -m "feat: add user authentication"

git add docs-v2/
git commit -m "docs: update component guide"
```

### 3. Test Locally

```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Unit tests
pnpm test

# E2E tests (requires dev server running)
pnpm test:e2e

# All at once
pnpm check-all
```

### 4. Push & Create Pull Request

```bash
# Push your branch
git push origin feature/short-description

# Create PR on GitHub
# Fill in the PR template
# Request reviews from team leads
```

---

## Coding Standards

### TypeScript

- **No `any` types** — Always use explicit types
- **Interfaces over types** for object shapes (exception: simple object types,
  unions)
- **Export types** — Make your API clear

```typescript
// ✅ Good
interface UserProfile {
  id: string
  name: string
  email: string
}

function getUser(id: string): Promise<UserProfile> {
  // ...
}

// ❌ Don't
function getUser(id: any): Promise<any> {
  // ...
}
```

### Naming Conventions

```typescript
// Components: PascalCase
export function UserCard() {}
export function UserProfileModal() {}

// Hooks: useXxx
export function useAuth() {}
export function useUserProfile() {}

// Utilities: camelCase
export function formatDate(date: Date) {}
export const stripHtml = (html: string) => {}

// Constants: UPPER_SNAKE_CASE
export const MAX_ATTEMPTS = 3
export const DEFAULT_PAGE_SIZE = 20
```

### File Organization

```
src/presentation/ui/
├── button/
│   ├── button.tsx              # Component
│   ├── button.types.ts         # Types/interfaces
│   ├── button.module.css       # Styles
│   ├── button.stories.tsx      # Storybook
│   └── __tests__/
│       ├── button.test.tsx     # Unit tests
│       ├── button.e2e.test.ts  # E2E tests
│       └── fixtures.ts         # Test data
```

### Code Formatting

```bash
# Prettier auto-formats
pnpm format

# ESLint auto-fixes
pnpm lint:fix
```

### Comments & Documentation

```typescript
// ✅ JSDoc for public functions
/**
 * Create a new user account
 *
 * @param data - User registration data
 * @returns Promise with the created user
 * @throws ValidationError if data is invalid
 *
 * @example
 * const user = await createUser({
 *   email: 'john@example.com',
 *   password: 'secure-password'
 * })
 */
export async function createUser(data: CreateUserRequest): Promise<User> {
  // Implementation
}

// ✅ Explain WHY, not WHAT
// The spec requires rate limiting per IP, not per user,
// so we cache by request.ip rather than user.id
const cacheKey = `rate-limit:${request.ip}`

// ❌ Don't repeat the code
// set user id
userId = data.id
```

### Testing

All code should be tested:

```typescript
// Unit tests (src/**/*.test.ts)
describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2024-01-15')
    expect(formatDate(date)).toBe('15 Jan 2024')
  })
})

// Component tests (test rendering, interactions)
describe('Button', () => {
  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})

// E2E tests (src/**/*.e2e.test.ts, full user workflows)
describe('User Registration Flow', () => {
  it('registers a new user successfully', async () => {
    await page.goto('/register')
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', 'secure-password')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL('/dashboard')
  })
})
```

### Imports Organization

```typescript
// ✅ Organize in groups
// 1. External packages
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

// 2. Internal: core layer
import { UserUseCase } from '@/core/use-cases'
import type { User } from '@/core/types'

// 3. Internal: infra layer
import { useAuthStore } from '@/infra/stores'
import { api } from '@/http/api-client'

// 4. Relative imports
import { UserCard } from './components/UserCard'
import styles from './page.module.css'

export function UserProfile() {
  // Component
}
```

---

## Git Workflow

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: <type>(<scope>): <subject>

# Types:
# feat:      New feature
# fix:       Bug fix
# docs:      Documentation
# style:     Formatting, missing semicolons, etc.
# refactor:  Code refactoring without adding features
# perf:      Performance improvements
# test:      Test changes
# chore:     Build, dependencies, tooling
# ci:        CI/CD configuration

# Examples:
git commit -m "feat(auth): add login page"
git commit -m "fix(button): resolve hover state on mobile"
git commit -m "docs: update component guide"
git commit -m "refactor: extract auth logic to hook"
git commit -m "chore(deps): upgrade react to 19"
```

### Branch Naming

```bash
# feature/<feature-name>
git checkout -b feature/user-authentication

# fix/<issue-name>
git checkout -b fix/mobile-responsive-layout

# docs/<doc-name>
git checkout -b docs/api-guide

# refactor/<area>
git checkout -b refactor/form-handling
```

### Before Pushing

```bash
# Update with latest main
git fetch origin
git rebase origin/main

# Never force push to shared branches
# Only force push to your own feature branch if needed
git push origin feature/name --force-with-lease  # Safer than --force

# Keep commits clean
git rebase -i main  # Interactive rebase to clean up commits
```

---

## Pull Request Process

### 1. Before Creating PR

- [ ] Run all checks: `pnpm check-all`
- [ ] Write/update tests
- [ ] Update documentation if needed
- [ ] Test locally in multiple browsers
- [ ] Rebase on latest main: `git rebase origin/main`

### 2. PR Title & Description

```markdown
# feat: Add user authentication system

## Changes

- Add login/register pages
- Implement JWT token handling
- Add protected route middleware

## Type of Change

- [ ] New feature
- [x] Bug fix
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [x] Unit tests added
- [x] E2E tests added
- [x] Manual testing completed

## Checklist

- [x] Code follows style guidelines
- [x] No new warnings in console
- [x] Tests pass locally
- [x] Documentation updated
- [x] No unrelated changes
```

### 3. Review & Feedback

- [ ] Respond to all code review comments
- [ ] Make requested changes
- [ ] Push updates to the same branch (don't create new PR)
- [ ] Re-request review when ready

### 4. Merge

Once approved:

```bash
# Update one more time
git fetch origin
git rebase origin/main

# Push updates
git push origin feature/name

# Merge via GitHub (squash or rebase, depending on team preference)
```

---

## Documentation Contributions

### Adding Component Documentation

1. Review
   [COMPONENT_TEMPLATE.md](../docs-v2/component-docs/COMPONENT_TEMPLATE.md)
2. Create new file in appropriate folder:
   - Base: `docs-v2/component-docs/base-components/component-name.md`
   - shadcn: `docs-v2/component-docs/shadcn-components/component-name.md`
   - Typography:
     `docs-v2/component-docs/typography-components/component-name.md`
   - Custom: `docs-v2/component-docs/custom-components/component-name.md`

3. Follow the template format with:
   - Component description
   - Installation/import
   - Props interface
   - Basic usage example
   - Advanced examples
   - Accessibility notes
   - Related components

### Updating Existing Documentation

1. Locate the file in `docs-v2/`
2. Update content to reflect current implementation
3. Add a note: "Updated: YYYY-MM-DD"
4. Ensure links still work
5. Update SITEMAP.md if structure changed

### Documentation Standards

- Use Markdown with proper heading hierarchy
- Include code examples (with language specified)
- Keep lines < 100 characters for readability
- Use relative links: `../design-system/colors.md`
- Add "Last Updated" dates to important files
- Test all links before committing

---

## Component Contributions

### Creating a New Base Component

1. Create folder in `src/presentation/ui/`
2. Create component file with TypeScript
3. Create types file
4. Create tests
5. Create story for Storybook
6. Create documentation in `docs-v2/component-docs/base-components/`

Example structure:

```bash
mkdir -p src/presentation/ui/my-component
touch src/presentation/ui/my-component/my-component.tsx
touch src/presentation/ui/my-component/my-component.types.ts
touch src/presentation/ui/my-component/my-component.module.css
touch src/presentation/ui/my-component/my-component.stories.tsx
mkdir -p src/presentation/ui/my-component/__tests__
touch src/presentation/ui/my-component/__tests__/my-component.test.tsx
touch docs-v2/component-docs/base-components/my-component.md
```

### Component Checklist

- [ ] Component is TypeScript with proper types
- [ ] Component has 100% test coverage
- [ ] Component has Storybook stories (basic, advanced, edge cases)
- [ ] Component is documented in docs-v2/
- [ ] Component is accessible (keyboard, ARIA labels, screen readers)
- [ ] Component works in light and dark modes
- [ ] Component is responsive
- [ ] Component uses Tailwind CSS for styling
- [ ] Component is added to component barrel exports
- [ ] Component follows naming conventions

---

## Reporting Issues

### Use the Bug Report Template

```markdown
## Description

Clear description of the issue

## Steps to Reproduce

1. Step one
2. Step two
3. What happened?

## Expected Behavior

What should have happened

## Actual Behavior

What actually happened

## Environment

- Browser: (Chrome, Firefox, Safari, etc.)
- OS: (Windows, macOS, Linux)
- Node version: (output of `node --version`)

## Additional Context

Screenshots, error messages, etc.
```

### Severity Levels

- **Critical:** Application crashes, data loss, security breach
- **High:** Major feature broken, significantly impacts workflow
- **Medium:** Feature partially broken, has workaround
- **Low:** Minor issue, cosmetic, nice to have
- **Documentation:** Outdated or unclear documentation

---

## Resources

- [Development Guide](../docs-v2/dev-setup.md)
- [Best Practices](../docs-v2/best-practices.md)
- [Architecture Overview](../docs-v2/architecture/)
- [Component Documentation](../docs-v2/component-docs/)
- [Design System](../docs-v2/design-system/)

---

## Questions?

- **Code Questions:** Create a discussion or ask in PR
- **Process Questions:** Ask a tech lead
- **Feature Questions:** Open an issue or discussion
- **General Help:** Check the [documentation](../docs-v2/)

---

**Last Updated:** April 14, 2026 | **Maintained by:** Development Team

Welcome to the Laborit project! We're excited to have you contribute. 🚀
