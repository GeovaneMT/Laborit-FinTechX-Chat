# Custom Components (Coming Soon)

This section will house custom, Laborit-specific UI components created for
unique project requirements.

## Overview

Custom components are purpose-built solutions that don't exist in our base
library or shadcn/ui. They are typically:

- Project-specific features
- Complex composed components
- Reusable patterns unique to Laborit
- Feature-complete business logic components

## When to Create Custom Components

Create a custom component when:

1. ✅ No existing component matches the requirement
2. ✅ Component will be reused in 3+ places
3. ✅ Component encapsulates complex logic or composition
4. ✅ Component needs dedicated documentation

Do NOT create a custom component for:

- ❌ One-off UI elements
- ❌ Simple compositions of existing components
- ❌ Components with a single use case
- ❌ When extending an existing component would suffice

## Component Checklist

Before creating a custom component:

- [ ] Searched base components for similar functionality
- [ ] Checked shadcn/ui for matching patterns
- [ ] Confirmed component will be reused
- [ ] Identified props and variants needed
- [ ] Planned for accessibility
- [ ] Designed dark mode support
- [ ] Considered responsive behavior

## Directory Structure

```
src/presentation/ui/custom/
├── component-name/
│   ├── component-name.tsx          # Main component
│   ├── component-name.types.ts     # TypeScript interfaces
│   ├── component-name.module.css   # Scoped styles (if needed)
│   ├── component-name.stories.tsx  # Storybook stories
│   └── __tests__/
│       └── component-name.test.tsx # Unit tests
└── index.ts                        # Barrel export
```

## Documentation Template

Use [Component Template](../COMPONENT_TEMPLATE.md) to create documentation:

1. Create `component-name.md`
2. Follow template structure
3. Include all examples
4. Document accessibility
5. Add to this README

## Current Status

**0 custom components** currently documented.

### Planned Components

- (None scheduled)

### Submitted Ideas

- (None yet)

## How to Contribute

### 1. Create the Component

```tsx
// src/presentation/ui/custom/my-component/my-component.tsx
import { ComponentProps } from 'react'

export interface MyComponentProps extends ComponentProps<'div'> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function MyComponent({
  variant = 'primary',
  size = 'md',
  ...props
}: MyComponentProps) {
  return (
    <div {...props} data-variant={variant} data-size={size}>
      {/* Component JSX */}
    </div>
  )
}
```

### 2. Create Storybook Story

```tsx
// src/presentation/ui/custom/my-component/my-component.stories.tsx
import { MyComponent } from './my-component'

export default {
  title: 'Custom/MyComponent',
  component: MyComponent,
}

export const Primary = () => (
  <MyComponent variant="primary">Content</MyComponent>
)
export const Secondary = () => (
  <MyComponent variant="secondary">Content</MyComponent>
)
```

### 3. Write Tests

```tsx
// src/presentation/ui/custom/my-component/__tests__/my-component.test.tsx
import { render, screen } from '@testing-library/react'
import { MyComponent } from '../my-component'

describe('MyComponent', () => {
  it('renders content', () => {
    render(<MyComponent>Test content</MyComponent>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})
```

### 4. Document Component

Create `docs-v2/component-docs/custom-components/my-component.md` using
[COMPONENT_TEMPLATE.md](../COMPONENT_TEMPLATE.md):

1. Component description
2. Props interface
3. Examples
4. Accessibility notes
5. Related components

### 5. Update Index

```tsx
// src/presentation/ui/custom/index.ts
export { MyComponent } from './my-component/my-component'
export type { MyComponentProps } from './my-component/my-component'
```

### 6. Update This README

Add component to the list and describe its purpose.

## Review Process

Before shipping a custom component:

1. **Code Review** — PR reviewed for quality and standards compliance
2. **Accessibility** — Tested per
   [a11y guidelines](../../design-system/accessibility.md)
3. **Documentation** — Complete documentation following template
4. **Tests** — Unit tests with adequate coverage
5. **Storybook** — Stories demonstrating all variants
6. **Dark Mode** — Tested in both light and dark modes
7. **Type Safety** — Full TypeScript types defined
8. **Performance** — No unnecessary re-renders, memo where appropriate

## Examples (Feel Free to Implement)

### Example 1: Custom Card Component

```tsx
// src/presentation/ui/custom/feature-card/feature-card.tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/presentation/ui/card'

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card>
      <CardHeader className="text-center">
        <Icon className="mx-auto mb-2 h-8 w-8" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-slate-600">{description}</p>
      </CardContent>
    </Card>
  )
}
```

### Example 2: Custom Form Component

```tsx
// src/presentation/ui/custom/user-form/user-form.tsx
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from '@/presentation/ui/form'
import { Input } from '@/presentation/ui/input'
import { Button } from '@/presentation/ui/button'

export function UserForm({ onSubmit }) {
  const form = useForm()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Create User</Button>
      </form>
    </Form>
  )
}
```

## Community Standards

### Code Style

- Follow TypeScript best practices
- Use descriptive names
- Add JSDoc comments for public APIs
- Keep components focused and single-purpose

### Accessibility

- WCAG 2.1 AA compliance minimum
- Test with keyboard navigation
- Include proper ARIA labels
- Support dark mode

### Documentation

- Document all public props
- Provide at least 2 usage examples
- Include accessibility notes
- Link to related components

### Testing

- Aim for 80%+ code coverage
- Test happy path and error cases
- Include accessibility tests
- Test dark mode variant

## Resources

- [Component Template](../COMPONENT_TEMPLATE.md) — Documentation template
- [Design System](../../design-system/) — Design tokens and guidelines
- [Base Components](../base-components/) — Existing components to reuse
- [Accessibility Guidelines](../../design-system/accessibility.md) — a11y
  standards
- [shadcn/ui](https://ui.shadcn.com/) — Component library reference

## FAQ

**Q: How do I decide if something should be a custom component?**  
A: Ask: "Will this be used in multiple places?" If yes, consider making it a
custom component. If no, it's probably just composition.

**Q: Can I modify shadcn components?**  
A: Yes, shadcn components are yours to customize. If customization is extensive,
consider wrapping in a custom component instead.

**Q: How do I handle complex state in custom components?**  
A: Keep components focused. Lift state to parent components or use React
context. Components should be smart about their own styling/behavior but dumb
about business logic when possible.

---

**Last Updated:** April 14, 2026 | **Components:** 0 | **Status:** Ready for
contributions
