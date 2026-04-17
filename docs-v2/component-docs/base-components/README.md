# Base Components

Core reusable UI components that form the foundation of Laborit's component
system. Focus on custom, proprietary components and foundational patterns.

## Overview

Base components are the building blocks used to construct more complex
interfaces. This documentation focuses on custom components developed
specifically for this project, rather than third-party component library
components.

**Location:** `src/presentation/ui/`

**Documentation Scope:** Custom base components (Button, Form, etc.) excluding
third-party libraries like shadcn/ui or MagicUI.

## Documented Components

### Phase 4a: Priority Base Components (2 docs)

| Component  | Purpose                | Documentation      | Status      |
| ---------- | ---------------------- | ------------------ | ----------- |
| **Button** | Primary action element | [Button](./button) | ✅ Complete |
| **Form**   | Form wrapper & state   | [Form](./form)     | ✅ Complete |

### Phase 4b: Additional Base Components (7 docs)

| Component        | Purpose                   | Documentation                   | Status      |
| ---------------- | ------------------------- | ------------------------------- | ----------- |
| **ButtonGroup**  | Group related buttons     | [ButtonGroup](./button-group)   | ✅ Complete |
| **Spinner**      | Loading spinner indicator | [Spinner](./spinner)            | ✅ Complete |
| **Logo**         | Theme-aware brand logo    | [Logo](./logo)                  | ✅ Complete |
| **ErrorCard**    | Error state display       | [ErrorCard](./error-card)       | ✅ Complete |
| **LoadingPulse** | Subtle loading indicator  | [LoadingPulse](./loading-pulse) | ✅ Complete |
| **Separator**    | Visual divider/separator  | [Separator](./separator)        | ✅ Complete |

**Total: 9 Documented Base Components**

## Planned Components

Components to document in future phases:

- **Label** — Form field labels
- **Textarea** — Multi-line text input
- **ScrollArea** — Scrollable container
- **SheetLayout** — Side sheet layout drawer
- **DetailsItem** — Detail card item component
- **LoadingMessage** — Full loading state message
- **ToastWrapper** — Toast notification wrapper

## Note on Third-Party Components

For documentation on shadcn/ui, Radix UI, or MagicUI components, please refer to
their official documentation:

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [MagicUI](https://magicui.design/)

This project uses these libraries extensively, but focuses custom component
documentation on proprietary extensions and patterns.

## Quick Start

### Import a Component

```tsx
import { Button } from '@/presentation/ui/button'
import { Form } from '@/presentation/ui/form'
```

### Use in Your Component

```tsx
export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Email" />
        <Button className="w-full">Sign Up</Button>
      </CardContent>
    </Card>
  )
}
```

## Component Documentation

Each component has detailed documentation covering:

- Props interface
- Usage examples
- Common patterns
- Accessibility notes
- Related components

Select a component above to view its documentation.

## Best Practices

### 1. Use Components Consistently

```tsx
// ✅ Use component API
<Button variant="primary" size="lg">Click me</Button>

// ❌ Don't override with className
<Button className="bg-blue-700 px-8 py-4">Click me</Button>
```

### 2. Compose for Complex UIs

```tsx
// ✅ Compose base components
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Input placeholder="Name" />
    <Button>Submit</Button>
  </CardContent>
</Card>

// ❌ Don't build custom without cause
<div className="border p-6 rounded">
  <div className="text-2xl font-bold">Title</div>
  <input placeholder="Name" />
  <button>Submit</button>
</div>
```

### 3. Reference Design Tokens

All base components use design tokens. See [Design System](../../design-system/)
for:

- Color values
- Spacing scale
- Typography
- Border radius
- Shadows

## Accessibility

All base components include accessibility features:

- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support

Always test with assistive technologies. See
[Accessibility Guidelines](../../design-system/accessibility.md) for details.

## Styling & Customization

### Using Variants

Components support size and style variants:

```tsx
// Size variants
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Variant styles
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Responsive Utilities

Combine with Tailwind utilities for responsive design:

```tsx
<div className="p-4 md:p-6 lg:p-8">
  <Button className="w-full md:w-auto">Responsive Button</Button>
</div>
```

## Dark Mode

All base components support dark mode automatically:

```tsx
// Light: white background, dark text
// Dark: dark slate background, light text
<div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
  Content
</div>
```

## Common Patterns

### Form Layout

```tsx
import { Input } from '@/presentation/ui/input'
import { Label } from '@/presentation/ui/label'
import { Button } from '@/presentation/ui/button'
;<div className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />
  </div>
  <Button type="submit">Submit</Button>
</div>
```

### Card Grid

```tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/presentation/ui/card'
;<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
    <Card key={item.id}>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>{/* ... */}</CardContent>
    </Card>
  ))}
</div>
```

### Loading States

```tsx
import { Spinner } from '@/presentation/ui/spinner'
import { LoadingCard } from '@/presentation/ui/loading-card'

{
  isLoading ? (
    <div className="flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <Card>Content</Card>
  )
}
```

## Contributing

To document a new base component:

1. Use [Component Template](../COMPONENT_TEMPLATE.md)
2. Create `component-name.md` in this directory
3. Follow the template structure
4. Update this README
5. Create Storybook story

## Resources

- [Getting Started](../getting-started.md) — Usage guide
- [Component Template](../COMPONENT_TEMPLATE.md) — Documentation template
- [Design System](../../design-system/) — Design tokens and guidelines
- [Storybook](../../../../.storybook/) — Visual showcase

---

**Last Updated:** April 14, 2026 | **Components:** 14+ | **Status:** Production
Ready
