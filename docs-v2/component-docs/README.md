# Component Library Documentation

Welcome to Laborit's component library documentation. This guide covers all
available UI components, their usage, props, and best practices.

## Quick Start

### Finding Components

Components are organized by category:

- **Base Components** — Core reusable elements (buttons, forms, cards)
- **shadcn Components** — Extended library of high-quality components
- **Typography Components** — Text and heading utilities
- **MagicUI Components** — Animated and advanced components
- **Custom Components** — Laborit-specific custom implementations

### Importing Components

```tsx
// Base components (from root)
import { Button } from '@/presentation/ui/button'
import { Card, CardContent, CardHeader } from '@/presentation/ui/card'

// shadcn components (organized)
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/presentation/ui/shadcn/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
} from '@/presentation/ui/shadcn/select'

// Typography
import { Heading1, BodyText } from '@/presentation/ui/typography'

// MagicUI
import { AnimatedButton } from '@/presentation/ui/magicui/animated-button'
```

### Using Components

Each component page includes:

- **Purpose** — What the component is for and when to use it
- **Props Interface** — TypeScript interface and prop documentation
- **Basic Example** — Simple usage example
- **Advanced Examples** — Complex use cases and patterns
- **Accessibility Notes** — a11y considerations and ARIA attributes
- **Related Components** — Links to related or similar components

## Component Sections

| Section                                   | Count | Description                                 |
| ----------------------------------------- | ----- | ------------------------------------------- |
| [Base Components](./base-components/)     | 14+   | Core UI elements (button, form, card, etc.) |
| [shadcn Components](./shadcn-components/) | 57+   | Production-ready component library          |
| [Typography](./typography-components/)    | ~10   | Text, headings, and typography utilities    |
| [MagicUI](./magicui-components/)          | 3     | Animated and advanced UI effects            |
| [Custom](./custom-components/)            | —     | Coming soon / project-specific components   |

## Getting Started

### 1. Choose a Component

Browse the relevant category above or use the search function.

### 2. Review Documentation

Each component has:

- Clear description and use case
- TypeScript props interface
- 1-2 usage examples
- Common patterns and anti-patterns
- Accessibility guidelines

### 3. Import & Use

```tsx
import { Button } from '@/presentation/ui/button'

export function MyComponent() {
  return (
    <Button variant="primary" size="lg">
      Click Me
    </Button>
  )
}
```

### 4. Check Accessibility

Review the accessibility section to ensure proper usage:

- Use semantic HTML
- Provide proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast

## Best Practices

### When to Use Components

✅ **Use existing components when:**

- A component in the library matches your need
- You're building standard UI patterns (buttons, forms, cards)
- You want consistency across the application
- You need accessibility built-in

❌ **Create new components when:**

- A similar component truly doesn't exist
- You've exhausted component variants/customization
- You have unique project-specific UI requirements

### Component Composition

```tsx
// ✅ Good — compose with existing components
function UserCard({ user }) {
  return (
    <Card>
      <CardHeader>
        <Heading1>{user.name}</Heading1>
      </CardHeader>
      <CardContent>
        <BodyText>{user.bio}</BodyText>
      </CardContent>
      <CardFooter>
        <Button>Edit Profile</Button>
      </CardFooter>
    </Card>
  )
}

// ❌ Poor — creating custom when composition works
function UserCard({ user }) {
  return (
    <div className="rounded-lg border p-6">
      <div className="mb-4">
        <div className="text-2xl font-bold">{user.name}</div>
      </div>
      <div className="mb-4">
        <div className="text-base">{user.bio}</div>
      </div>
      <button className="rounded bg-blue-600 px-4 py-2 text-white">
        Edit Profile
      </button>
    </div>
  )
}
```

### Props & Variants

Use component props and variants instead of overriding styles:

```tsx
// ✅ Good — use built-in variants
<Button variant="primary" size="lg" disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>

// ❌ Poor — overriding with className
<Button className="w-full bg-red-600 text-white px-8 py-4">
  Submit
</Button>
```

### Accessibility

Always consider accessibility:

```tsx
// ✅ Good — accessible form
<form>
  <label htmlFor="email">Email address</label>
  <input id="email" type="email" required />
  <Button type="submit">Submit</Button>
</form>

// ✅ Good — icon button with label
<Button aria-label="Delete item" variant="ghost" size="sm">
  <TrashIcon className="w-4 h-4" />
</Button>

// ❌ Poor — missing labels
<input />
<Button>
  <TrashIcon className="w-4 h-4" />
</Button>
```

## Navigation

- [Base Components](./base-components/README.md) — Core UI building blocks
- [shadcn Components](./shadcn-components/README.md) — Extended library
- [Typography](./typography-components/README.md) — Text utilities
- [MagicUI](./magicui-components/README.md) — Animated components
- [Getting Started](./getting-started.md) — Detailed import and usage guide
- [Component Template](./COMPONENT_TEMPLATE.md) — Template for new component
  docs

## Contributing

When adding new components:

1. **Follow the directory structure** — Place in appropriate subdirectory
2. **Use the template** — Follow
   [COMPONENT_TEMPLATE.md](./COMPONENT_TEMPLATE.md)
3. **Document props** — Include TypeScript interface
4. **Add examples** — Provide 1-2 usage examples
5. **Test accessibility** — Ensure WCAG 2.1 AA compliance
6. **Create Storybook story** — Add `.stories.tsx` file
7. **Update this README** — Link to new component

## Storybook

Visual component showcase and interactive testing:

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build:storybook
```

See [Storybook Documentation](../../../.storybook/README.md) for setup details.

## Support

- **Questions?** Check [Getting Started](./getting-started.md)
- **Need a new component?** Review [Component Template](./COMPONENT_TEMPLATE.md)
- **Design questions?** See [Design System](../design-system/README.md)
- **Architecture?** Review [Architecture Overview](../architecture/README.md)

---

**Last Updated:** April 14, 2026 | **Total Components:** 80+ | **System:**
Tailwind CSS v4 + shadcn/ui
