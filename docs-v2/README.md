# Documentation v2 Hub

Complete and up-to-date documentation for the Laborit platform. Welcome to the
modern documentation system!

## Quick Navigation

**New to Laborit?** Start here:

- [Getting Started](./getting-started.md) — Project setup and first steps
- [Architecture Overview](./architecture/) — System design and structure

**Looking for guidance?**

- [Component Library](./component-docs/) — UI components documentation
- [Design System](./design-system/) — Design tokens, colors, typography,
  accessibility
- [Best Practices](./best-practices.md) — Development guidelines and patterns

**Navigating the project?**

- [Process & Lifecycle](./process/) — Project stages and workflows
- [Requirements](./requirements/) — Features, requirements, and user stories
- [API Integration](./api/) — HTTP client and API usage
- [Patterns & Architecture](./patterns/) — Technical patterns and decisions

**Quick Links:**

- [SITEMAP](./SITEMAP.md) — Complete documentation index
- [Storybook](../../.storybook/) — Visual component showcase

---

## Documentation Structure

### `design-system/`

Everything about visual design, tokens, and accessibility.

- **Colors** — Color palette, semantic usage, dark mode
- **Typography** — Font scales, weights, hierarchy
- **Spacing & Grid** — Spacing scale, layout system
- **Icons** — Icon usage and guidelines
- **Accessibility** — WCAG 2.1 AA compliance, a11y patterns

### `component-docs/`

Complete reference for all 80+ UI components.

- **Base Components** — Core building blocks (button, form, card, etc.)
- **shadcn Components** — Extended component library (57+ components)
- **Typography** — Text and heading utilities
- **MagicUI** — Animated and advanced components
- **Custom** — Project-specific components (coming soon)
- **Getting Started** — Import patterns, usage examples, best practices

### `architecture/`

System design, layers, and project structure.

- Project structure and folder organization
- Layer descriptions (core, infra, http, presentation)
- Server Actions and data fetching patterns
- State management approach
- Testing strategy

### `patterns/`

Technical patterns and architectural decisions.

- **Server Actions** — Pattern for server-side operations
- **Cache Revalidation** — Data caching and revalidation strategies
- **Others** — Additional patterns as needed

### `process/`

Project lifecycle from problem definition to deployment.

- **Discovery** — Problem definition and requirements (Etapas 1-2)
- **Planning** — Planning and architecture (Etapas 3-5)
- **Execution** — Development and testing (Etapas 6-9)
- **Deployment** — Security, CI/CD, and operations (Etapas 10-13)

### `requirements/`

Feature requirements, user stories, and specifications.

- **MoSCoW Prioritization** — Feature prioritization
- **RF** — Functional requirements
- **RN** — Non-functional requirements
- **RNF** — Additional requirements
- **User Stories** — User-centered feature definitions

### `api/`

HTTP client and API integration guidance.

- Orval configuration and auto-generated client
- API resource structure
- HTTP interceptors and error handling
- Authentication patterns

---

## Key Documents

### Getting Oriented

1. **New Team Member?** → [Project Setup](./dev-setup.md) →
   [Architecture](./architecture/)
2. **Building a Feature?** → [Requirements](./requirements/) →
   [Patterns](./patterns/) → [Components](./component-docs/)
3. **Contributing Code?** → [Best Practices](./best-practices.md) →
   [Development Guidelines](./contribution-guide.md)
4. **Deploying?** → [Process/Deployment](./process/deployment/) →
   [CI/CD Guide](./process/deployment/cicd.md)

### Governance

- [Design System](./design-system/README.md) — Design governance
- [Component Template](./component-docs/COMPONENT_TEMPLATE.md) — New component
  requirements
- [Best Practices](./best-practices.md) — Code quality standards
- [Accessibility Guidelines](./design-system/accessibility.md) — a11y compliance

---

## Technologies

| Technology          | Purpose                                  |
| ------------------- | ---------------------------------------- |
| **Next.js 16**      | React framework, routing, server actions |
| **React 19**        | UI components and state management       |
| **TypeScript**      | Type safety across the codebase          |
| **Tailwind CSS v4** | Utility-first CSS, design tokens         |
| **shadcn/ui**       | Component library (57+ components)       |
| **TanStack Query**  | Server state management                  |
| **Zustand**         | Client state management                  |
| **React Hook Form** | Form state and validation                |
| **Orval**           | API client code generation               |

---

## Quick Start

### 1. Clone & Install

```bash
git clone <repository>
cd Teste\ técnico\ Laborit\ -\ Frontend
pnpm install
```

### 2. Setup Local Development

```bash
# Complete setup guide
cat docs-v2/dev-setup.md

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

### 3. Explore Components

```bash
# Start Storybook (interactive component showcase)
pnpm storybook

# Browse components in your IDE
# → Check docs-v2/component-docs/
```

### 4. Read Key Docs

1. [Architecture Overview](./architecture/) — How the project is organized
2. [Component Library](./component-docs/) — Available components
3. [Best Practices](./best-practices.md) — How we write code

---

## Development Workflow

### Starting a Feature

1. Check [Requirements](./requirements/) for feature details
2. Review [User Stories](./requirements/user-stories/) for context
3. Look at [Patterns](./patterns/) for relevant architecture
4. Browse [Components](./component-docs/) for existing UI
5. Follow [Best Practices](./best-practices.md) while coding
6. Reference [Accessibility Guide](./design-system/accessibility.md) for a11y

### Code Review Checklist

- [ ] Follows [Best Practices](./best-practices.md)
- [ ] Uses existing [Components](./component-docs/) when possible
- [ ] Implements [Patterns](./patterns/) correctly
- [ ] Meets [Accessibility Standards](./design-system/accessibility.md)
- [ ] Includes tests
- [ ] Updates documentation

### Deployment

Follow [Deployment Guide](./process/deployment/) for:

- Pre-deployment checklist
- CI/CD pipeline
- Environment configuration
- Rollback procedures

---

## Common Questions

### How do I use a component?

1. Find it in [Component Library](./component-docs/)
2. Check "Getting Started" or specific component docs
3. Copy the import statement
4. Follow usage examples
5. Review accessibility notes

### How do I add a new design token?

1. Update `tailwind.config.ts`
2. Document in [Design System](./design-system/) (relevant file)
3. Update [Tokens Reference](./design-system/tokens/README.md)
4. Test in light and dark modes

### What's the project structure?

See [Architecture Overview](./architecture/) for:

- Folder organization
- Layer descriptions
- Key file locations
- Pattern directory

### How do I write accessible components?

Read [Accessibility Guidelines](./design-system/accessibility.md) for:

- WCAG 2.1 AA standards
- Keyboard navigation
- Screen reader support
- Color contrast requirements
- ARIA attributes

### How do I contribute?

1. Create a branch
2. Follow [Best Practices](./best-practices.md)
3. Update documentation
4. Submit pull request
5. Get review approval

---

## Resources

### Internal Docs

- [Requirements](./requirements/) — Features and specifications
- [Process](./process/) — Project lifecycle
- [Architecture](./architecture/) — System design
- [Best Practices](./best-practices.md) — Development standards

### External References

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [WCAG 2.1 Specification](https://www.w3.org/WAI/WCAG21/quickref/)

### Skills & Guidance

- `skills/laborit-culture/` — Company culture and values
- `skills/nextjs-16-maintenance/` — Maintenance and upgrades
- `skills/nextjs-16-spa-builder/` — SPA scaffolding

---

## Contributing to Documentation

Documentation is a shared responsibility. To improve docs:

1. Create branch
2. Edit relevant `.md` file in `docs-v2/`
3. Update [SITEMAP](./SITEMAP.md) if adding new pages
4. Submit PR for review
5. Deploy once approved

See [Contribution Guide](./contribution-guide.md) for details.

---

## Documentation Status

- ✅ Design System — Complete
- ✅ Component Documentation — Infrastructure complete, 100+ components ready
  for individual docs
- ✅ Architecture — Overview included
- ✅ Patterns — Updated patterns from v1
- ✅ Process — Organized lifecycle phases
- ✅ Requirements — Structured for easy reference
- 🔄 API Documentation — In progress
- 🔄 Dev Setup — Basic guide available
- 🔄 Best Practices — Comprehensive guide available

**Last Updated:** April 14, 2026 | **Status:** Modern, organized, comprehensive

---

## Quick Help

**Can't find something?**

- Check [SITEMAP](./SITEMAP.md) for complete index
- Use search in your IDE (Ctrl/Cmd + P)
- Ask the team on Slack/Discord

**Found an issue?**

- Submit corrections via PR
- Flag inaccuracies in issues
- Help keep docs current!

**Have a suggestion?**

- Create discussion or issue
- Propose improvements in PR
- Help shape our documentation

---

**Welcome to Laborit! Happy coding! 🚀**
