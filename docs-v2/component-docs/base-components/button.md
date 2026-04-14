# Button Component

The Button component is the most fundamental interactive element in our design
system. It provides a flexible, accessible button with multiple variants,
effects, and sizes.

## Import

```typescript
import { Button } from '@/presentation/ui/button'
```

## Basic Usage

```tsx
import { Button } from '@/presentation/ui/button'

export function MyComponent() {
  return <Button onClick={() => console.log('Clicked!')}>Click me</Button>
}
```

## Variants

### Primary (Default)

The default button style for primary actions.

```tsx
<Button variant="default">Primary Action</Button>
```

### Secondary

For secondary actions that are less prominent.

```tsx
<Button variant="secondary">Secondary Action</Button>
```

### Destructive

For dangerous or destructive actions like delete.

```tsx
<Button variant="destructive">Delete Item</Button>
```

### Outline

A subtle button with border only.

```tsx
<Button variant="outline">Outline Button</Button>
```

### Ghost

Minimal styling, often used in toolbars or secondary navigation.

```tsx
<Button variant="ghost">Ghost Button</Button>
```

### Link

Styled as a text link.

```tsx
<Button variant="link">Link Button</Button>
```

## Sizes

### Default

Standard button size (40px height).

```tsx
<Button size="default">Default Size</Button>
```

### Small

Compact button for tight spaces (36px height).

```tsx
<Button size="sm">Small Button</Button>
```

### Large

Emphasized button for important actions (44px height).

```tsx
<Button size="lg">Large Button</Button>
```

### Icon Only

Square button for icon-only actions (40px × 40px).

```tsx
<Button size="icon">
  <PlusIcon className="h-4 w-4" />
</Button>
```

## Effects

### Shine

Animated shine effect on hover.

```tsx
<Button effect="shine">Shine Effect</Button>
```

### Ring Hover

Ring animation on hover.

```tsx
<Button effect="ringHover">Ring Hover</Button>
```

### Spin Icon

Icon rotates on hover.

```tsx
<Button effect="spinIcon" icon={<SettingsIcon />}>
  Settings
</Button>
```

### Expand Icon

Icon expands from hidden state on hover.

```tsx
<Button effect="expandIcon" icon={<ChevronRightIcon />}>
  Expand
</Button>
```

### Gooey Effects

Morphing background effects.

```tsx
<Button effect="gooeyRight">Gooey Right</Button>
<Button effect="gooeyLeft">Gooey Left</Button>
```

### Underline Effects

Text underline animations.

```tsx
<Button effect="underline">Underline</Button>
<Button effect="hoverUnderline">Hover Underline</Button>
```

### Gradient

Animated gradient background.

```tsx
<Button effect="gradientSlideShow">Gradient</Button>
```

## With Icons

### Icon Left (Default)

```tsx
<Button icon={<PlusIcon />}>Add Item</Button>
```

### Icon Right

```tsx
<Button icon={<ChevronRightIcon />} iconPlacement="right">
  Continue
</Button>
```

### Icon Only

```tsx
<Button size="icon" icon={<MenuIcon />} />
```

## Advanced Patterns

### As Link

Use `asChild` to render as a different element (like Link).

```tsx
import Link from 'next/link'

;<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

### Loading State

Combine with loading state management.

```tsx
function SubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <Button disabled={isLoading}>
      {isLoading ? 'Submitting...' : 'Submit'}
    </Button>
  )
}
```

### Form Submission

```tsx
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await submitForm(data)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
```

### Button Group

For related actions.

```tsx
<div className="flex gap-2">
  <Button variant="outline">Cancel</Button>
  <Button>Save Changes</Button>
</div>
```

## Props Interface

```typescript
interface ButtonProps
  extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  iconPlacement?: 'left' | 'right'
}
```

### Variant Props

```typescript
type ButtonVariants = {
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'passiveDestructive'
    | 'ghostDestructive'
    | 'outline'
    | 'ghost'
    | 'ghostSmooth'
    | 'camouflaged'
    | 'link'

  effect?:
    | 'none'
    | 'spinIcon'
    | 'expandIcon'
    | 'expandText'
    | 'shine'
    | 'shineHover'
    | 'ringHover'
    | 'gooeyRight'
    | 'gooeyLeft'
    | 'underline'
    | 'hoverUnderline'
    | 'hoverUnderlineExpandText'
    | 'hoverUnderlineExpandIcon'
    | 'gradientSlideShow'

  size?: 'default' | 'sm' | 'lg' | 'icon'
}
```

## Accessibility

### Keyboard Navigation

- Fully keyboard accessible
- Focus visible with ring indicator
- Enter/Space activates button

### Screen Readers

- Proper button semantics
- Icon-only buttons include `aria-label`
- Loading states communicated

### Focus Management

```tsx
// For icon-only buttons, always provide accessible label
<Button size="icon" aria-label="Open menu">
  <MenuIcon />
</Button>

// For destructive actions, consider confirmation
<Button
  variant="destructive"
  onClick={() => {
    if (confirm('Are you sure you want to delete this item?')) {
      deleteItem()
    }
  }}
>
  Delete
</Button>
```

## Dark Mode

All button variants automatically adapt to dark mode:

```tsx
// Light mode: primary background
// Dark mode: automatically switches to dark variant
<Button variant="primary">Adaptive Button</Button>
```

## Composition

### With Tooltips

```tsx
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'

;<Tooltip>
  <TooltipTrigger asChild>
    <Button size="icon">
      <InfoIcon />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>More information</p>
  </TooltipContent>
</Tooltip>
```

### In Forms

```tsx
import { FormField, FormLabel, FormControl } from '@/ui/form'

;<FormField>
  <FormLabel>Email</FormLabel>
  <FormControl>
    <Input type="email" />
  </FormControl>
  <Button type="submit">Subscribe</Button>
</FormField>
```

## Performance

- Uses CSS-in-JS with class-variance-authority for optimal bundle size
- Effects use CSS transforms for smooth 60fps animations
- No runtime JavaScript for basic variants

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Button not clickable

Check if parent has `pointer-events: none` or button is disabled.

```tsx
// ✅ Correct
<Button disabled={isLoading}>Submit</Button>

// ❌ Wrong - button is always disabled
<Button disabled>Submit</Button>
```

### Icon not showing

Ensure icon is a valid React element.

```tsx
// ✅ Correct
import { PlusIcon } from 'lucide-react'
<Button icon={<PlusIcon />}>Add</Button>

// ❌ Wrong - string instead of element
<Button icon="plus">Add</Button>
```

### Effect not working

Some effects require specific setup or may conflict with other styles.

```tsx
// Shine effect needs proper positioning
<div className="relative">
  <Button effect="shine">Shine Button</Button>
</div>
```

## Related Components

- [ButtonGroup](../button-group.md) — Group related buttons
- [IconButton](../icon-button.md) — Specialized icon-only buttons
- [LoadingButton](../loading-button.md) — Buttons with loading states
- [Form](../form.md) — Form components that work with buttons

## Migration from HTML

```html
<!-- Old HTML -->
<button class="btn btn-primary">Click me</button>

<!-- New React -->
<button variant="default">Click me</button>
```

```html
<!-- Old HTML with icon -->
<button class="btn btn-icon">
  <svg>...</svg>
  Click me
</button>

<!-- New React -->
<Button icon={<Icon />}>Click me</Button>
```

---

**Last Updated:** April 14, 2026 | **Version:** 1.0.0

**[← Back to Base Components](../base-components/README.md)**
