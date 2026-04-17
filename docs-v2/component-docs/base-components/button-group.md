# ButtonGroup Component

**Description:** A flexible container that groups related buttons together with
support for horizontal, vertical, and responsive orientations. Automatically
handles rounded corners, spacing, and border management.

**Use Case:** Organize related actions together (e.g., filter buttons, mutually
exclusive options, action groups). Perfect for segmented controls, button sets,
or action toolbars.

**Variants:** Horizontal, Vertical, Responsive (default)

---

## Import

```tsx
import { ButtonGroup } from '@/presentation/ui/button-group'
```

## Props

```tsx
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Layout orientation for the button group.
   * @default "responsive"
   * - 'responsive': Vertical on mobile, horizontal on tablets+
   * - 'horizontal': Always horizontal layout
   * - 'vertical': Always vertical layout
   */
  orientation?: 'responsive' | 'horizontal' | 'vertical'

  /**
   * Visual style variant.
   * @default undefined (no outline)
   * - 'outlined': Adds border and hover effects
   */
  styles?: 'outlined'

  /**
   * Additional CSS classes for additional styling.
   */
  className?: string

  /**
   * Child elements (typically Button components).
   */
  children?: React.ReactNode
}
```

---

## Basic Example

Group buttons horizontally:

```tsx
import { ButtonGroup } from '@/presentation/ui/button-group'
import { Button } from '@/presentation/ui/button'

export function BasicButtonGroup() {
  return (
    <ButtonGroup orientation="horizontal">
      <Button variant="outline">Option 1</Button>
      <Button variant="outline">Option 2</Button>
      <Button variant="outline">Option 3</Button>
    </ButtonGroup>
  )
}
```

---

## Advanced Examples

### Responsive Orientation

Automatically switches from vertical on mobile to horizontal on larger screens:

```tsx
export function ResponsiveButtonGroup() {
  return (
    <ButtonGroup orientation="responsive">
      <Button>Mobile Stacks</Button>
      <Button>Desktop Row</Button>
      <Button>Adaptive</Button>
    </ButtonGroup>
  )
}
```

### Outlined Style

Add a border container with hover effects:

```tsx
export function OutlinedButtonGroup() {
  return (
    <ButtonGroup orientation="horizontal" styles="outlined">
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </ButtonGroup>
  )
}
```

### Vertical Layout

Stack buttons vertically:

```tsx
export function VerticalButtonGroup() {
  return (
    <ButtonGroup orientation="vertical">
      <Button className="w-full">Save Changes</Button>
      <Button variant="outline" className="w-full">
        Reset
      </Button>
      <Button variant="destructive" className="w-full">
        Cancel
      </Button>
    </ButtonGroup>
  )
}
```

### Segmented Control

Create a segmented control for mutually exclusive options:

```tsx
import { useState } from 'react'

export function SegmentedControl() {
  const [selected, setSelected] = useState<'day' | 'week' | 'month'>('day')

  return (
    <ButtonGroup orientation="horizontal" styles="outlined">
      <Button
        variant={selected === 'day' ? 'default' : 'ghost'}
        onClick={() => setSelected('day')}
      >
        Day
      </Button>
      <Button
        variant={selected === 'week' ? 'default' : 'ghost'}
        onClick={() => setSelected('week')}
      >
        Week
      </Button>
      <Button
        variant={selected === 'month' ? 'default' : 'ghost'}
        onClick={() => setSelected('month')}
      >
        Month
      </Button>
    </ButtonGroup>
  )
}
```

### Filter Buttons

Group filter options together:

```tsx
import { useState } from 'react'

export function FilterButtons() {
  const [filters, setFilters] = useState({
    active: false,
    archived: false,
    draft: false,
  })

  const handleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <ButtonGroup orientation="responsive">
      <Button
        variant={filters.active ? 'default' : 'outline'}
        onClick={() => handleFilter('active')}
      >
        Active
      </Button>
      <Button
        variant={filters.archived ? 'default' : 'outline'}
        onClick={() => handleFilter('archived')}
      >
        Archived
      </Button>
      <Button
        variant={filters.draft ? 'default' : 'outline'}
        onClick={() => handleFilter('draft')}
      >
        Draft
      </Button>
    </ButtonGroup>
  )
}
```

### Button Group with Select

Combine buttons with dropdown select:

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/presentation/ui/shadcn/select'

export function ButtonGroupWithSelect() {
  return (
    <ButtonGroup orientation="horizontal">
      <Button>Add Item</Button>
      <Button variant="outline">Edit</Button>
      <Select>
        <SelectTrigger>Actions</SelectTrigger>
        <SelectContent>
          <SelectItem value="duplicate">Duplicate</SelectItem>
          <SelectItem value="archive">Archive</SelectItem>
          <SelectItem value="delete">Delete</SelectItem>
        </SelectContent>
      </Select>
    </ButtonGroup>
  )
}
```

---

## Styling

### Responsive Behavior

The `responsive` orientation automatically adjusts layout:

- **Mobile (< 768px):** Vertical stack with full-width buttons
- **Tablet/Desktop (≥ 768px):** Horizontal row with connected corners

### Border Management

- First child: `rounded-tl` and `rounded-bl` (or `rounded-tr` and `rounded-br`
  for vertical)
- Middle children: `rounded-none`
- Last child: `rounded-tr` and `rounded-br` (or `rounded-bl` and `rounded-bl`
  for vertical)
- Adjacent items: Borders merge smoothly

### Dark Mode

All button variants support dark mode automatically via Tailwind's `dark:`
prefix. The component respects the parent's dark mode context.

```tsx
<div className="dark">
  <ButtonGroup orientation="horizontal" styles="outlined">
    <Button>Works in dark mode</Button>
    <Button>Automatically styled</Button>
  </ButtonGroup>
</div>
```

---

## Accessibility

- ✅ **Semantic HTML:** Uses `<div role="group">` for grouping
- ✅ **Keyboard Navigation:** Focus moves between buttons with Tab/Shift+Tab
- ✅ **ARIA Labels:** Add `aria-label` to parent for context

```tsx
<ButtonGroup orientation="horizontal" role="group" aria-label="View options">
  <Button>List</Button>
  <Button>Grid</Button>
  <Button>Table</Button>
</ButtonGroup>
```

---

## Best Practices

1. **Limit Group Size:** Keep button groups to 2-5 buttons; use a menu for more
   options
2. **Clear Purpose:** Ensure buttons in a group have a clear relationship
3. **Consistent Sizing:** Use matching button sizes within a group
4. **Responsive Design:** Use `orientation="responsive"` for mobile-friendly
   layouts
5. **Icon + Text:** Combine icons and text for better usability
6. **Indicate Selection:** Use `variant="default"` to show selected state

---

## Common Patterns

### View Mode Toggle

```tsx
const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

return (
  <ButtonGroup orientation="horizontal">
    <Button
      variant={viewMode === 'grid' ? 'default' : 'ghost'}
      onClick={() => setViewMode('grid')}
    >
      Grid View
    </Button>
    <Button
      variant={viewMode === 'list' ? 'default' : 'ghost'}
      onClick={() => setViewMode('list')}
    >
      List View
    </Button>
  </ButtonGroup>
)
```

### Sort Order Selection

```tsx
const [sort, setSort] = useState<'asc' | 'desc'>('asc')

return (
  <ButtonGroup orientation="horizontal" styles="outlined">
    <Button
      variant={sort === 'asc' ? 'default' : 'outline'}
      onClick={() => setSort('asc')}
    >
      Ascending
    </Button>
    <Button
      variant={sort === 'desc' ? 'default' : 'outline'}
      onClick={() => setSort('desc')}
    >
      Descending
    </Button>
  </ButtonGroup>
)
```

### Action Group

```tsx
return (
  <ButtonGroup orientation="horizontal">
    <Button>Save</Button>
    <Button variant="outline">Save as Draft</Button>
    <Button variant="ghost">Cancel</Button>
  </ButtonGroup>
)
```

---

## Troubleshooting

### Rounded Corners Not Showing

Ensure children buttons don't override border radius. Use the ButtonGroup's
classes or add overflow handling:

```tsx
<ButtonGroup className="overflow-hidden">
  <Button>Works with overflow-hidden</Button>
  <Button>Rounded corners visible</Button>
</ButtonGroup>
```

### Buttons Not Aligned Horizontally

Check that parent container has sufficient width. Mobile might stack
vertically—use `orientation="horizontal"` to force horizontal layout:

```tsx
<ButtonGroup orientation="horizontal">
  {/* Force horizontal even on mobile */}
</ButtonGroup>
```

### Uneven Button Widths

For equal width buttons, add `flex-1` or `w-full` to children:

```tsx
<ButtonGroup orientation="horizontal">
  <Button className="flex-1">Option 1</Button>
  <Button className="flex-1">Option 2</Button>
</ButtonGroup>
```

---

## Related Components

- **[Button](./button.md)** — Individual button component
- **[Form](./form.md)** — Form wrapper for button groups in forms
- **Separator** — Visual divider between button groups
