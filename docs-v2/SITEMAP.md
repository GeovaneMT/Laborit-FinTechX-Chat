# Complete Documentation SITEMAP

**Last Updated:** April 14, 2026

## Quick Links

- [Main Hub](./README.md) — Start here
- [Getting Started](./dev-setup.md) — Setup & installation
- [Architecture](./architecture/) — System design overview

---

## Documentation Structure

### Design System (`docs-v2/design-system/`)

The complete visual design system and accessibility guidelines.

- **[README](./design-system/README.md)** — System overview & governance
- **[Colors](./design-system/colors.md)** — Color palette, semantic usage, WCAG
  compliance
- **[Typography](./design-system/typography.md)** — Font scales, weights,
  hierarchy
- **[Spacing & Grid](./design-system/spacing.md)** — Spacing scale, layout
  system
- **[Icons](./design-system/icons.md)** — Icon usage and guidelines
- **[Accessibility](./design-system/accessibility.md)** — WCAG 2.1 AA standards,
  patterns
- **Tokens Folder** — Raw token reference
  - [Tokens README](./design-system/tokens/README.md) — Token categories & usage

### Component Documentation (`docs-v2/component-docs/`)

Complete reference for 80+ UI components across multiple libraries.

- **[README](./component-docs/README.md)** — Component library overview
- **[Getting Started](./component-docs/getting-started.md)** — Import patterns,
  usage examples
- **[Component Template](./component-docs/COMPONENT_TEMPLATE.md)** — Template
  for documenting new components

**Base Components** (`docs-v2/component-docs/base-components/`)

- [README](./component-docs/base-components/README.md) — 14+ core components
- Includes: Button, Form, Input, Card, Label, ErrorCard, Spinner, etc.

**shadcn Components** (`docs-v2/component-docs/shadcn-components/`)

- [README](./component-docs/shadcn-components/README.md) — 57+ high-quality
  components
- Categories: Dialogs, Forms, Tables, Navigation, Feedback, Layout

**Typography** (`docs-v2/component-docs/typography-components/`)

- [README](./component-docs/typography-components/README.md) — Text & heading
  utilities
- Includes: H1-H6, BodyText, SmallText, Code, CodeBlock

**MagicUI** (`docs-v2/component-docs/magicui-components/`)

- [README](./component-docs/magicui-components/README.md) — Animated & advanced
  components
- Includes: AnimatedButton, CircularProgress, StripedPattern

**Custom Components** (`docs-v2/component-docs/custom-components/`)

- [README](./component-docs/custom-components/README.md) — Project-specific
  components (placeholder)

### Architecture (`docs-v2/architecture/`)

System design, layers, and project structure.

- **[README](./architecture/README.md)** — Complete architecture overview
  - Layered design explanation
  - Project structure breakdown
  - Technology choices
  - Data flow patterns
  - Best practices
  - Testing strategy

### Patterns (`docs-v2/patterns/`)

Technical patterns and architectural decisions.

- **[SERVER_ACTIONS.md](./patterns/SERVER_ACTIONS.md)** — Next.js Server Actions
  guide
  - Basic usage
  - Advanced patterns
  - Security considerations
  - Best practices
  - Common patterns
- **[CACHE_REVALIDATION.md](./patterns/CACHE_REVALIDATION.md)** — Cache
  management strategy
  - Revalidation patterns
  - Tag-based caching
  - Cascade invalidation
  - Best practices

### Process (`docs-v2/process/`)

Project lifecycle from problem definition to deployment.

- **Discovery** — Understanding the problem (Etapas 1-2)
  - Problem definition
  - Requirements discovery
- **Planning** — Planning & architecture (Etapas 3-5)
  - Agile planning
  - Architecture design
  - Data modeling

- **Execution** — Development & testing (Etapas 6-9)
  - UX & design
  - Implementation strategy
  - Development practices
  - Quality assurance

- **Deployment** — Security, CI/CD, operations (Etapas 10-13)
  - Security & reliability
  - CI/CD pipeline
  - Documentation & handoff
  - Retrospective

### Requirements (`docs-v2/requirements/`)

Features, specifications, and user stories.

- **[MoSCoW.md](./requirements/)** — Feature prioritization matrix
- **RF/** — Functional requirements
  - Organized by feature/module
- **RN/** — Non-functional requirements
  - Performance, security, scalability
- **RNF/** — Additional requirements
  - Additional specifications

- **user-stories/** — User-centered feature definitions
  - Organized by user persona/feature

### API Documentation (`docs-v2/api/`)

HTTP client and API integration guidance.

- HTTP client setup & usage
- Orval configuration
- API resource structure
- Authentication patterns
- Error handling

---

## Key Standalone Documents

- **[README.md](./README.md)** — Main documentation hub
  - Quick navigation
  - Technology stack
  - Quick start guide
  - Common questions
- **[dev-setup.md](./dev-setup.md)** — Local development setup
  - Installation steps
  - Development commands
  - Project structure quick reference
  - Troubleshooting

- **[best-practices.md](./best-practices.md)** — Development guidelines
  - Code quality standards
  - Component design patterns
  - State management
  - Testing guidelines
  - Accessibility requirements
  - Code review checklist

---

## Navigation by Role

### New Team Member

1. [README.md](./README.md) — Get oriented
2. [dev-setup.md](./dev-setup.md) — Set up environment
3. [architecture/README.md](./architecture/) — Understand system
4. [component-docs/README.md](./component-docs/) — Browse components

### Frontend Developer

- [component-docs/](./component-docs/) — Find components to use
- [design-system/](./design-system/) — Design tokens & guidelines
- [best-practices.md](./best-practices.md) — Development standards
- [patterns/](./patterns/) — Architecture patterns

### Designer

- [design-system/](./design-system/) — Complete design reference
- [component-docs/](./component-docs/) — Component inventory
- [Process/Execution](./process/execution/) — UX & Design phase

### Product Manager

- [Requirements/](./requirements/) — Features & user stories
- [Process/](./process/) — Project lifecycle
- [README.md](./README.md) — Project overview

### DevOps/Operations

- [Process/Deployment](./process/deployment/) — Deployment guide
- [architecture/README.md](./architecture/) — System design

### Tech Lead/Architect

- [architecture/README.md](./architecture/) — Complete architecture
- [best-practices.md](./best-practices.md) — Development standards
- [patterns/](./patterns/) — Architectural patterns

---

## Search & Find

### Find a Component

1. Start: [component-docs/README.md](./component-docs/)
2. Choose category: [base](./component-docs/base-components/),
   [shadcn](./component-docs/shadcn-components/),
   [typography](./component-docs/typography-components/),
   [magicui](./component-docs/magicui-components/)
3. Read component doc

### Find a Design Token

1. Start: [design-system/README.md](./design-system/)
2. Choose type: [Colors](./design-system/colors.md),
   [Typography](./design-system/typography.md),
   [Spacing](./design-system/spacing.md), [Icons](./design-system/icons.md)
3. Use the token

### Find How to Do Something

1. Check [best-practices.md](./best-practices.md) for general patterns
2. Check [patterns/](./patterns/) for architectural patterns
3. Check [architecture/README.md](./architecture/) for system design

### Find a Feature Requirement

1. Start: [requirements/](./requirements/)
2. Choose section: [MoSCoW](./requirements/), [RF](./requirements/RF/),
   [RN](./requirements/RN/), [User Stories](./requirements/user-stories/)
3. Search for feature

### Find Process Info

1. Start: [process/](./process/)
2. Choose phase: [Discovery](./process/discovery/),
   [Planning](./process/planning/), [Execution](./process/execution/),
   [Deployment](./process/deployment/)
3. Read phase docs

---

## File Structure Reference

```
docs-v2/
├── README.md
├── SITEMAP.md (this file)
├── dev-setup.md
├── best-practices.md
├── getting-started.md (if added)
├── contribution-guide.md (optional)
├── design-system/
│   ├── README.md
│   ├── colors.md
│   ├── typography.md
│   ├── spacing.md
│   ├── icons.md
│   ├── accessibility.md
│   └── tokens/
│       ├── README.md
│       ├── shadows.md
│       ├── animations.md
│       └── etc.
├── component-docs/
│   ├── README.md
│   ├── getting-started.md
│   ├── COMPONENT_TEMPLATE.md
│   ├── base-components/
│   │   ├── README.md
│   │   ├── button.md
│   │   ├── card.md
│   │   └── etc.
│   ├── shadcn-components/
│   │   ├── README.md
│   │   ├── dialog.md
│   │   ├── select.md
│   │   └── etc.
│   ├── typography-components/
│   │   ├── README.md
│   │   ├── headings.md
│   │   └── etc.
│   ├── magicui-components/
│   │   ├── README.md
│   │   └── etc.
│   └── custom-components/
│       └── README.md
├── architecture/
│   └── README.md
├── patterns/
│   ├── SERVER_ACTIONS.md
│   ├── CACHE_REVALIDATION.md
│   └── etc.
├── process/
│   ├── discovery/
│   ├── planning/
│   ├── execution/
│   └── deployment/
├── requirements/
│   ├── MoSCoW.md
│   ├── RF/
│   ├── RN/
│   ├── RNF/
│   └── user-stories/
└── api/
    └── README.md
```

---

## Total Documentation Statistics

- **52+** markdown files
- **8** major sections
- **30+** components documented
- **100+** code examples
- **80+** responsive images & diagrams (planned)

---

## Contributing to Docs

1. Check [COMPONENT_TEMPLATE.md](./component-docs/COMPONENT_TEMPLATE.md) for new
   components
2. Follow existing structure and formatting
3. Include code examples
4. Test links and references
5. Update this SITEMAP if adding new sections
6. Submit PR for review

---

## Version & Maintenance

- **Status:** v2.0 — Modern, comprehensive
- **Last Updated:** April 14, 2026
- **Maintenance:** Keep docs in sync with code
- **Review Frequency:** Monthly
- **Deprecation Policy:** Mark outdated docs clearly

---

**[← Back to Main Hub](./README.md)**
