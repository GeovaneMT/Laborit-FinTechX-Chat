# Separator Component

**Description:** A simple visual divider component that separates content
sections. Built as a thin line (horizontal or vertical) that provides visual
hierarchy without semantic meaning.

**Use Case:** Divide form sections, separate list items, create visual breaks
between content areas, or build spacer elements in complex layouts.

**Variants:** Orientation (horizontal, vertical), Size (customizable)

---

## Import

```tsx
import { Separator } from '@/presentation/ui/separator'
```

## Props

```tsx
interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Orientation of the separator line.
   * @default "horizontal"
   * - 'horizontal': Full-width horizontal line
   * - 'vertical': Full-height vertical line
   */
  orientation?: 'horizontal' | 'vertical'

  /**
   * Whether this is a decorative separator (no semantic meaning).
   * Hides from screen readers when true.
   * @default true
   */
  decorative?: boolean

  /**
   * Additional CSS classes for custom styling.
   */
  className?: string

  // ... other HTMLAttributes
}
```

---

## Basic Example

Simple horizontal separator:

```tsx
import { Separator } from '@/presentation/ui/separator'

export function BasicSeparator() {
  return (
    <div>
      <p>Section A</p>
      <Separator />
      <p>Section B</p>
    </div>
  )
}
```

---

## Advanced Examples

### Multiple Sections

Divide content into distinct sections:

```tsx
import { Separator } from '@/presentation/ui/separator'

export function MultipleSection() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-bold">Profile Information</h2>
        <p>Name: John Doe</p>
      </div>

      <Separator />

      <div>
        <h2 className="font-bold">Contact Details</h2>
        <p>Email: john@example.com</p>
      </div>

      <Separator />

      <div>
        <h2 className="font-bold">Settings</h2>
        <p>Notifications: Enabled</p>
      </div>
    </div>
  )
}
```

### Vertical Separator

Create vertical divider for side-by-side content:

```tsx
import { Separator } from '@/presentation/ui/separator'

export function SideBySideSeparator() {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <h3>Left Column</h3>
        <p>Content here</p>
      </div>

      <Separator orientation="vertical" />

      <div className="flex-1">
        <h3>Right Column</h3>
        <p>Content here</p>
      </div>
    </div>
  )
}
```

### Form Section Divider

Separate form fields by section:

```tsx
import { Separator } from '@/presentation/ui/separator'

export function FormSections() {
  return (
    <form className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Personal Information</h3>
        <input
          placeholder="First Name"
          className="mb-2 w-full rounded border p-2"
        />
        <input placeholder="Last Name" className="w-full rounded border p-2" />
      </div>

      <Separator />

      <div>
        <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
        <input placeholder="Email" className="mb-2 w-full rounded border p-2" />
        <input placeholder="Phone" className="w-full rounded border p-2" />
      </div>

      <Separator />

      <div>
        <h3 className="mb-4 text-lg font-semibold">Preferences</h3>
        <input type="checkbox" /> Subscribe to newsletter
      </div>
    </form>
  )
}
```

### List Item Dividers

Add separators between list items:

```tsx
import { Separator } from '@/presentation/ui/separator'

export function ItemList() {
  const items = [
    { id: 1, title: 'Task 1', completed: true },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
  ]

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id}>
          <div className="p-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={item.completed} readOnly />
              <span className={item.completed ? 'line-through' : ''}>
                {item.title}
              </span>
            </label>
          </div>
          {index < items.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  )
}
```

### Card Separator

Divide card sections:

```tsx
import { Separator } from '@/presentation/ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card'

export function CardWithSeparator() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>

      <Separator />

      <CardContent className="pt-4">
        <div className="mb-4">
          <p className="text-muted-foreground text-sm">Email</p>
          <p>user@example.com</p>
        </div>

        <Separator />

        <div>
          <p className="text-muted-foreground text-sm">Joined</p>
          <p>January 2024</p>
        </div>
      </CardContent>
    </Card>
  )
}
```

### Navigation Menu

Divide menu items:

```tsx
import { Separator } from '@/presentation/ui/separator'
import { Button } from '@/presentation/ui/button'

export function Navigation() {
  return (
    <nav className="space-y-0">
      <Button variant="ghost" className="w-full justify-start">
        Home
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        About
      </Button>

      <Separator className="my-2" />

      <Button variant="ghost" className="w-full justify-start">
        Settings
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Help
      </Button>
    </nav>
  )
}
```

### Two-Column Layout

Separate columns with vertical line:

```tsx
import { Separator } from '@/presentation/ui/separator'

export function TwoColumnLayout() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h2>Main Content</h2>
        <p>Your main content goes here.</p>
      </div>

      <Separator orientation="vertical" />

      <div>
        <h2>Sidebar</h2>
        <p>Sidebar content.</p>
      </div>
    </div>
  )
}
```

---

## Styling

### Horizontal Separator

- **Height:** 1px (single pixel line)
- **Width:** 100% (full width of container)
- **Color:** Border color from theme (light gray in light mode, dark gray in
  dark mode)
- **Margin:** Can be controlled with `className`

### Vertical Separator

- **Width:** 1px (single pixel line)
- **Height:** Full height of parent container
- **Color:** Same as horizontal
- **Margins:** Must be set via parent flex/grid layout

### Custom Styling

```tsx
{
  /* Extra thick separator */
}
;<Separator className="h-2" />

{
  /* With margins */
}
;<Separator className="my-4" />

{
  /* Custom color */
}
;<Separator className="bg-red-500" />

{
  /* Dashed style (using border utility) */
}
;<div className="border-t border-dashed">{/* Alternative to Separator */}</div>
```

### Dark Mode

Automatically adapts to dark mode:

```tsx
<div className="dark">
  <Separator /> {/* Will be darker shade in dark mode */}
</div>
```

---

## Accessibility

- ✅ **Decorative by Default:** Hidden from screen readers (correct for visual
  elements)
- ✅ **Semantic:** Use `decorative={false}` if separator has semantic meaning
- ✅ **Semantic HTML:** Uses proper `<div>` with ARIA attributes
- ✅ **No Impact:** Doesn't interfere with document outline

```tsx
{
  /* Decorative - hidden from screen readers */
}
;<Separator />

{
  /* Semantic - included in accessibility tree */
}
;<Separator decorative={false} aria-label="Section divider" />
```

---

## Best Practices

1. **Meaningful Use:** Use to separate logical sections, not just as spacing
2. **Margin Control:** Use className to adjust spacing around the separator
3. **Consistent:** Keep separators consistent throughout your UI
4. **Responsive:** Adjust or hide separators on mobile if needed
5. **Don't Overuse:** Too many separators create visual clutter
6. **Color:** Use default border color for consistency

---

## Common Patterns

### Form Sections

```tsx
<>
  <input placeholder="Name" />
  <Separator className="my-4" />
  <input placeholder="Email" />
</>
```

### Card Dividers

```tsx
<Card>
  <CardContent>
    <div>Header Info</div>
    <Separator className="my-4" />
    <div>Body Info</div>
  </CardContent>
</Card>
```

### Menu Items

```tsx
<Button>Item 1</Button>
<Separator />
<Button>Item 2</Button>
```

### Sidebar Layout

```tsx
<>
  <div>Main</div>
  <Separator orientation="vertical" />
  <div>Sidebar</div>
</>
```

---

## Troubleshooting

### Separator Not Visible

Check if parent has proper sizing:

```tsx
{
  /* ✅ Works - parent has height */
}
;<div className="flex h-96">
  <div>Content</div>
  <Separator orientation="vertical" />
  <div>Content</div>
</div>

{
  /* ❌ Won't work - no parent height */
}
;<div className="flex">
  <div>Content</div>
  <Separator orientation="vertical" />
  <div>Content</div>
</div>
```

### Unexpected Spacing

Add margin control with className:

```tsx
{
  /* Remove default spacing */
}
;<Separator className="my-0" />

{
  /* Add custom spacing */
}
;<Separator className="my-6" />
```

### Color Not Changing

Ensure you're using the correct background class:

```tsx
{
  /* ✅ Correct */
}
;<Separator className="bg-red-500" />

{
  /* Use border color instead */
}
;<div className="border-t border-red-500" />
```

---

## Related Components

- **[ButtonGroup](./button-group.md)** — Separators work well with button groups
- **[Card](../shadcn-components)** — Divide card sections with separators
- **[ScrollArea](./scroll-area.md)** — Use separators within scrollable content
