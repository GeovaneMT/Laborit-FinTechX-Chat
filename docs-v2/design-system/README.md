# Design System — Laborit

Laborit's unified design system provides a comprehensive set of design tokens,
components, and patterns that ensure visual and functional consistency across
the application. This system is built on **Tailwind CSS v4** and **shadcn/ui**
components.

## Overview

The design system encompasses:

- **Design Tokens** — Core values (colors, spacing, typography, shadows,
  gradients, animations)
- **Component Library** — Reusable UI components built on shadcn/ui and custom
  implementations
- **Patterns & Guidelines** — Best practices for composition, accessibility, and
  responsive design
- **Accessibility Standards** — WCAG 2.1 AA compliance targets and guidelines

## Quick Links

- [Colors & Palette](./colors.md) — Color tokens, usage conventions, dark mode
- [Typography](./typography.md) — Font scales, weights, line heights, headings,
  body text
- [Spacing & Grid](./spacing.md) — Spacing scale, grid system, padding/margin
  conventions
- [Icons](./icons.md) — Available icon sets and usage guidelines
- [Accessibility](./accessibility.md) — a11y guidelines, WCAG compliance, focus
  management
- [Design Tokens (Raw)](./tokens/) — Complete token reference documentation

## Design Philosophy

**Consistency over Flexibility** — The design system enforces intentional
constraints to reduce decision fatigue and maintain visual coherence. When
adding new components or tokens, consider whether they truly need to exist or if
an existing pattern can be extended.

**Mobile-First Responsive Design** — All components and guidelines are designed
mobile-first and scale up to larger viewports.

**Accessible by Default** — Accessibility is not an afterthought; components and
patterns are built with a11y at their core.

**Dark Mode Support** — All components support dark mode via Tailwind's `dark:`
prefix and theme toggling.

## Technology Stack

| Technology          | Purpose                                                               |
| ------------------- | --------------------------------------------------------------------- |
| **Tailwind CSS v4** | Utility-first CSS framework for design tokens and responsive behavior |
| **shadcn/ui**       | High-quality React component library                                  |
| **React 19**        | Component framework                                                   |
| **TypeScript**      | Type safety for components and props                                  |

## Getting Started

### Using Components

Refer to [Component Documentation](../component-docs/README.md) for:

- Component library overview
- Import patterns
- Props documentation
- Usage examples and best practices

### Creating New Components

When adding a new component:

1. Check [Component Guidelines](../component-docs/getting-started.md) for when
   to create new vs. extend existing
2. Use the [Component Template](../component-docs/COMPONENT_TEMPLATE.md) for
   documentation
3. Adhere to design tokens (no magic numbers or arbitrary values)
4. Include accessibility attributes (roles, labels, aria-\*)
5. Support both light and dark modes
6. Document props and usage examples
7. Add co-located `.stories.tsx` file for Storybook

### Design Token Usage

All design values should reference design tokens:

```tsx
// ✅ Good — Uses design tokens
<button className="px-3 py-2 bg-primary text-white rounded-md">
  Click me
</button>

// ❌ Bad — Arbitrary values
<button style={{ padding: '14px', backgroundColor: '#2e5fb4' }}>
  Click me
</button>
```

Refer to specific token documentation:

- [Colors](./colors.md) for `bg-primary`, `text-*`
- [Spacing](./spacing.md) for `px-*`, `py-*`
- Typography tokens in [Typography](./typography.md)

## Governance

### Adding New Design Tokens

New tokens should follow this process:

1. **Document the need** — Explain why an existing token cannot be extended
2. **Define range** — Establish the full set if it's a scale (e.g., all spacing
   increments)
3. **Review** — Ensure alignment with system constraints
4. **Update docs** — Add to relevant token section
5. **Version** — Document when this token was introduced

### Component Versioning

Components follow semantic versioning:

- **Minor version bump** — New props/variants, backward-compatible
- **Major version bump** — Breaking prop changes, removed variants

## Current Token Usage

The design system currently uses **Tailwind CSS default theme** with custom
configurations documented in:

- `tailwind.config.ts` — Main configuration
- [Tokens](./tokens/README.md) — Extracted and documented tokens

Dark mode is configured as **class-based** (toggled via `dark` class on `<html>`
element).

## Contribution Guidelines

When contributing to the design system:

1. Update relevant token documentation
2. Ensure all components are tested in light and dark modes
3. Add accessibility annotations (a11y)
4. Create Storybook stories for visual testing
5. Update the component-docs folder with new documentation
6. Submit PRs with clear rationale for changes

## Support & Questions

For questions about the design system, refer to:

- This documentation
- [Component Guidelines](../component-docs/README.md)
- [Architecture Overview](../architecture/README.md)
- Project skills: `skills/laborit-culture/` and `skills/nextjs-16-maintenance/`

---

**Last Updated:** April 14, 2026 | **Version:** 2.0.0
