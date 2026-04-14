# shadcn/ui Components

Extended library of high-quality, accessible React components built on Radix UI
and Tailwind CSS.

## Overview

shadcn/ui provides a comprehensive set of production-ready components that can
be copied and customized. These components are designed to be accessible,
unstyled, and composable.

**Source:** [shadcn/ui](https://ui.shadcn.com/) **Location:**
`src/presentation/ui/shadcn/` **Count:** 57+ components

## Component Categories

### Dialogs & Modals

- `Dialog` — Modal dialog for important actions
- `AlertDialog` — Alert dialog for destructive actions
- `Sheet` — Side sheet/drawer component
- `Popover` — Popup container
- `Tooltip` — Hover-triggered tooltip

### Forms & Inputs

- `Checkbox` — Checkbox input
- `Radio` — Radio button input
- `Switch` — Toggle switch
- `Select` — Dropdown select
- `Combobox` — Searchable select
- `Autocomplete` — Auto-completing select
- `DatePicker` — Date selection
- `TimePicker` — Time selection
- `Tags` — Tag input

### Dropdowns & Menus

- `DropdownMenu` — Action dropdown menu
- `ContextMenu` — Right-click context menu
- `CommandPalette` — Command/search palette

### Tables & Data

- `Table` — Data table component
- `DataTable` — Advanced data table
- `Tree` — Tree view component
- `VirtualScroller` — Virtual scrolling for large lists

### Navigation

- `Tabs` — Tab navigation
- `Breadcrumb` — Breadcrumb navigation
- `Pagination` — Pagination controls
- `Menu` — Navigation menu

### Feedback & Status

- `Alert` — Alert message box
- `Toast` — Toast notification
- `Progress` — Progress bar
- `Skeleton` — Loading skeleton
- `Badge` — Status badge
- `Label` — Form label

### Layout

- `Accordion` — Expandable accordion
- `Collapsible` — Collapsible container
- `ScrollArea` — Scrollable area
- `AspectRatio` — Aspect ratio container
- `Separator` — Visual divider

### Text

- `Code` — Inline code
- `Pre` — Code block
- `Blockquote` — Quote block
- `Kbd` — Keyboard key

### Other

- `Carousel` — Image carousel
- `Calendar` — Calendar widget
- `Slider` — Range slider
- `Resizable` — Resizable panels

## Quick Start

### Import shadcn Components

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/presentation/ui/shadcn/dialog'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/presentation/ui/shadcn/select'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/presentation/ui/shadcn/tabs'
```

### Common Usage Patterns

**Dialog/Modal:**

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/presentation/ui/shadcn/dialog'
import { Button } from '@/presentation/ui/button'

;<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    <p>Content</p>
    <DialogFooter>
      <Button>Close</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**Select:**

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/presentation/ui/shadcn/select'

;<Select value={selected} onValueChange={setSelected}>
  <SelectTrigger>
    <SelectValue placeholder="Choose option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

**Tabs:**

```tsx
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/presentation/ui/shadcn/tabs'

;<Tabs defaultValue="tab-1">
  <TabsList>
    <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab-1">Content 1</TabsContent>
  <TabsContent value="tab-2">Content 2</TabsContent>
</Tabs>
```

## Features

- ✅ **Accessible** — Built on Radix UI with WCAG 2.1 AA compliance
- ✅ **Flexible** — Composable component structure
- ✅ **Styled** — Tailwind CSS for consistent styling
- ✅ **Customizable** — Easy to modify and extend
- ✅ **Dark Mode** — Full dark mode support
- ✅ **Type Safe** — Full TypeScript support

## Best Practices

### 1. Composition Pattern

shadcn components use composition for flexibility:

```tsx
// ✅ Good — composing parts
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>

// ❌ Avoid — tight coupling
<Dialog isOpen={true} title="Title">
  Content
</Dialog>
```

### 2. Controlled vs Uncontrolled

Most shadcn components support both patterns:

```tsx
// Uncontrolled (simplest)
<Select defaultValue="option1">
  {/* ... */}
</Select>

// Controlled (for external state management)
<Select value={selected} onValueChange={setSelected}>
  {/* ... */}
</Select>
```

### 3. Accessibility First

shadcn components include accessibility by default:

```tsx
// ARIA attributes are included automatically
<Dialog>
  {/* Dialog has aria-modal, role="dialog" */}
</Dialog>

// Use semantic prop combinations
<Button asChild>
  <a href="/page">Link Button</a>
</Button>
```

## Advanced Patterns

### Form Integration with React Hook Form

```tsx
import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/presentation/ui/form'
import { Input } from '@/presentation/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/presentation/ui/shadcn/select'

const form = useForm()

<Form {...form}>
  <FormField
    control={form.control}
    name="status"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Status</FormLabel>
        <FormControl>
          <Select {...field} onValueChange={field.onChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

### Complex Data Tables

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/presentation/ui/shadcn/table'

const DataTable = ({ data, columns }) => (
  <Table>
    <TableHeader>
      <TableRow>
        {columns.map((col) => (
          <TableHead key={col.key}>{col.label}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          {columns.map((col) => (
            <TableCell key={col.key}>{row[col.key]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
```

## Dark Mode

All shadcn components automatically support dark mode:

```tsx
// Styles adjust automatically when `dark` class is on <html>
<AlertDialog>
  {/* Uses light colors in light mode, dark in dark mode */}
</AlertDialog>
```

## Customization

### Extending shadcn Components

While components are designed to be used as-is, you can customize through:

1. **Props** — Adjust behavior via component props
2. **className** — Override styles with Tailwind utilities
3. **Composition** — Build custom components from parts
4. **Extension** — Create wrapper components for project-specific needs

```tsx
// Wrapper component for project-specific defaults
export function ProjectDialog(props) {
  return <Dialog {...props}>{/* Custom defaults */}</Dialog>
}
```

## Accessibility

All shadcn components include:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ ARIA attributes
- ✅ Color contrast

Test in your application and refer to
[Accessibility Guidelines](../../design-system/accessibility.md).

## Performance

- Components use React best practices
- Memoization where appropriate
- Lazy loading for large lists (Virtual Scroller)
- Efficient event handling

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Component Examples](https://ui.shadcn.com/docs/components/) — Official
  examples
- [Radix UI Primitives](https://www.radix-ui.com/) — Underlying primitive
  library
- [Tailwind CSS](https://tailwindcss.com/) — Styling framework
- [Accessibility Guide](../../design-system/accessibility.md) — Laborit a11y
  standards

## Contributing

To document a shadcn component for Laborit:

1. Use [Component Template](../COMPONENT_TEMPLATE.md)
2. Create `component-name.md` in this directory
3. Focus on Laborit-specific patterns and customizations
4. Include examples matching project conventions
5. Link to official shadcn docs

---

**Last Updated:** April 14, 2026 | **Components:** 57+ | **Source:** shadcn/ui
