# Component Documentation Template

Use this template to document new UI components in Laborit. Copy this file and
fill in all sections.

## Component Name

**Description:** One sentence describing what this component does and its
primary use case.

**Use Case:** When should developers use this component? What problems does it
solve?

**Variants/States:** List any variants (size, color, state) this component
supports.

---

## Import

```tsx
import { ComponentName } from '@/presentation/ui/component-name'
// or for shadcn
import { ComponentName } from '@/presentation/ui/shadcn/component-name'
```

## Props

### PropName

```tsx
interface ComponentNameProps {
  /**
   * Description of what this prop does.
   * @default defaultValue
   * @example "active"
   */
  propName?: 'option1' | 'option2' | 'option3'

  /**
   * Another prop description.
   * Required prop explanation.
   */
  requiredProp: string

  /** Boolean flag for feature. */
  isFeatureEnabled?: boolean

  /** Callback when action is triggered. */
  onAction?: (value: ValueType) => void

  /** Additional CSS classes for styling. */
  className?: string

  /** Children elements. */
  children?: React.ReactNode
}
```

---

## Basic Example

The simplest way to use this component:

```tsx
import { ComponentName } from '@/presentation/ui/component-name'

export function BasicExample() {
  return <ComponentName>Default Content</ComponentName>
}
```

---

## Advanced Examples

### Example 1: With Props

```tsx
import { ComponentName } from '@/presentation/ui/component-name'

export function WithProps() {
  return (
    <ComponentName
      propName="option1"
      requiredProp="value"
      isFeatureEnabled={true}
    >
      Content with props
    </ComponentName>
  )
}
```

### Example 2: With State

```tsx
import { ComponentName } from '@/presentation/ui/component-name'
import { useState } from 'react'

export function WithState() {
  const [state, setState] = useState(false)

  return (
    <ComponentName isActive={state} onAction={() => setState(!state)}>
      Stateful content
    </ComponentName>
  )
}
```

### Example 3: Common Pattern

```tsx
// Real-world usage pattern
import { ComponentName } from '@/presentation/ui/component-name'

export function CommonPattern() {
  const handleSubmit = () => {
    // Handle submission
  }

  return (
    <div className="space-y-4">
      <ComponentName onAction={handleSubmit}>Action Button</ComponentName>
    </div>
  )
}
```

---

## Variants & Styling

### Size Variants

```tsx
<ComponentName size="sm">Small</ComponentName>
<ComponentName size="md">Medium</ComponentName>
<ComponentName size="lg">Large</ComponentName>
```

### Color/Intent Variants

```tsx
<ComponentName variant="primary">Primary</ComponentName>
<ComponentName variant="secondary">Secondary</ComponentName>
<ComponentName variant="destructive">Destructive</ComponentName>
<ComponentName variant="outline">Outline</ComponentName>
<ComponentName variant="ghost">Ghost</ComponentName>
```

### State Variants

```tsx
<ComponentName disabled>Disabled</ComponentName>
<ComponentName isLoading>Loading</ComponentName>
<ComponentName isActive>Active</ComponentName>
```

---

## Composition Patterns

### Combining with Other Components

```tsx
import { ComponentName } from '@/presentation/ui/component-name'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/presentation/ui/card'
import { Button } from '@/presentation/ui/button'

export function ComposedExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Title</CardTitle>
      </CardHeader>
      <CardContent>
        <ComponentName>Nested content</ComponentName>
        <Button className="mt-4">Action</Button>
      </CardContent>
    </Card>
  )
}
```

---

## Common Patterns & Anti-Patterns

### ✅ Good Patterns

```tsx
// Pattern 1: Meaningful props
<ComponentName label="Action" variant="primary" />

// Pattern 2: Clear intent
<ComponentName
  isDisabled={!canSubmit}
  onClick={handleSubmit}
>
  Submit Form
</ComponentName>

// Pattern 3: Accessible composition
<div className="space-y-2">
  <label>Label</label>
  <ComponentName />
</div>
```

### ❌ Anti-Patterns to Avoid

```tsx
// ❌ Over-customizing with className
<ComponentName className="w-full h-20 px-8 py-4 text-xl font-bold">
  Content
</ComponentName>

// ❌ Redundant props
<ComponentName
  isVisible={true}
  show={true}
  hidden={false}
>
  Confusing props
</ComponentName>

// ❌ Nesting too deeply without structure
<ComponentName>
  <div>
    <div>
      <span>Hard to read</span>
    </div>
  </div>
</ComponentName>
```

---

## Accessibility

### Keyboard Navigation

- Component supports **Tab key** for focus
- **Enter/Space** to trigger actions
- **Arrow keys** for navigation (if applicable)
- **Escape** to close/dismiss (if applicable)

### ARIA Attributes

```tsx
// Proper ARIA labels
<ComponentName
  aria-label="Component action"
  aria-describedby="help-text"
  role="button"
>
  Content
</ComponentName>

// Form accessibility
<ComponentName
  id="component-1"
  aria-required={true}
  aria-invalid={hasError}
  aria-errormessage="error-1"
>
  Form field
</ComponentName>
```

### Color Contrast

- Text contrast ratio: **4.5:1** (WCAG AA)
- Interactive elements: **3:1** contrast minimum
- Dark mode: Color palette adjusts automatically

### Screen Reader Support

Component announces:

- Current state (active, disabled, loading)
- Available actions
- Error messages (if applicable)

---

## Dynamic Content Example

```tsx
import { ComponentName } from '@/presentation/ui/component-name'
import { useState, useEffect } from 'react'

export function DynamicExample() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Fetch data
  }, [])

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <ComponentName key={item.id} isLoading={isLoading}>
          {item.name}
        </ComponentName>
      ))}
    </div>
  )
}
```

---

## Dark Mode Support

Component automatically adapts to dark mode:

```tsx
// Light mode: appropriate colors
// Dark mode: colors invert with dark: prefix
<ComponentName className="bg-white dark:bg-slate-900">
  Content adapts to theme
</ComponentName>
```

Test in both modes by toggling the theme in your application.

---

## Performance Considerations

- Component uses memo/useMemo where appropriate
- Callbacks are properly memoized (useCallback)
- Event handlers don't cause unnecessary re-renders
- No memory leaks from event listeners

---

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Android)

---

## Related Components

Components that work well alongside this one:

- [Component 1](./related-1.md) — Why use together
- [Component 2](./related-2.md) — When to choose between
- [Component 3](./related-3.md) — Common composition

---

## Storybook

View interactive examples and test states:

```bash
npm run storybook
# Then navigate to ComponentName in the sidebar
```

---

## Migration Guide (if applicable)

### From Previous Version

If this is an updated component:

```tsx
// Old way
import { OldComponent } from '@/old-ui'
;<OldComponent prop="value" />

// New way
import { ComponentName } from '@/presentation/ui/component-name'
;<ComponentName prop="value" />
```

---

## Troubleshooting

### Issue: Component not styling correctly

**Solution:** Use component variants instead of className overrides. See
[common patterns](#common-patterns--anti-patterns).

### Issue: Props not working as expected

**Solution:** Ensure props match the interface. Hover over component for
TypeScript hints. Check [Props section](#props).

### Issue: Accessibility errors

**Solution:** Include proper ARIA attributes. See
[Accessibility section](#accessibility). Review
[Design System accessibility guide](../design-system/accessibility.md).

---

## Contributing

Find issues or improvements?

1. Update this documentation
2. Add new examples if needed
3. Test in Storybook
4. Submit PR with rationale

---

## References

- [Component Source Code](../../src/presentation/ui/component-name/)
- [Design System](../design-system/README.md)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Docs](https://react.dev/)
- [Accessibility Guidelines](../design-system/accessibility.md)
- [shadcn/ui Docs](https://ui.shadcn.com/) (if shadcn component)

---

**Component Status:** Production-Ready | **Last Updated:** April 14, 2026
