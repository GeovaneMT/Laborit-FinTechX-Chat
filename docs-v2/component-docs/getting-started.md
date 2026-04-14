# Getting Started with Components

This guide explains how to import, use, and compose components in Laborit.

## Import Patterns

### Base Components

Base components are located in `src/presentation/ui/` and can be imported
directly:

```tsx
import { Button } from '@/presentation/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/presentation/ui/card'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/presentation/ui/form'
import { Input } from '@/presentation/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/presentation/ui/select'
```

### shadcn Components

shadcn components are in `src/presentation/ui/shadcn/` organized by category:

```tsx
// Dialog/Modal components
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/presentation/ui/shadcn/dialog'

// Dropdown/Popover components
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/presentation/ui/shadcn/popover'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/presentation/ui/shadcn/dropdown-menu'

// Table components
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '@/presentation/ui/shadcn/table'

// Tabs
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/presentation/ui/shadcn/tabs'

// Pagination
import {
  Pagination,
  PaginationButton,
} from '@/presentation/ui/shadcn/pagination'
```

### Typography Components

Typography utilities for consistent text styling:

```tsx
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from '@/presentation/ui/typography'
import { BodyText, SmallText, MutedText } from '@/presentation/ui/typography'
import { Code, CodeBlock } from '@/presentation/ui/typography'
```

### MagicUI Components

Animated and advanced UI components:

```tsx
import { AnimatedButton } from '@/presentation/ui/magicui/animated-button'
import { CircularProgress } from '@/presentation/ui/magicui/circular-progress'
import { StripedPattern } from '@/presentation/ui/magicui/striped-pattern'
```

## Common Usage Patterns

### Button

```tsx
import { Button } from '@/presentation/ui/button'

// Basic button
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With state
<Button disabled>Disabled</Button>
<Button isLoading>Loading...</Button>

// Icon buttons
<Button variant="ghost" size="sm" aria-label="Settings">
  <CogIcon className="w-4 h-4" />
</Button>
```

### Form

```tsx
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/presentation/ui/form'
import { Input } from '@/presentation/ui/input'
import { Button } from '@/presentation/ui/button'

export function MyForm() {
  const form = useForm({ defaultValues: { email: '' } })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="user@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Card

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/presentation/ui/card'

;<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>{/* Content */}</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Dialog / Modal

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/presentation/ui/shadcn/dialog'
import { Button } from '@/presentation/ui/button'

export function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog description</DialogDescription>
        </DialogHeader>
        <div>{/* Content */}</div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### Table

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/presentation/ui/shadcn/table'

;<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {items.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.status}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Select

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/presentation/ui/select'

;<Select value={selected} onValueChange={setSelected}>
  <SelectTrigger>
    <SelectValue placeholder="Choose an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option-1">Option 1</SelectItem>
    <SelectItem value="option-2">Option 2</SelectItem>
    <SelectItem value="option-3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### Tabs

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
    <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab-1">Content for tab 1</TabsContent>
  <TabsContent value="tab-2">Content for tab 2</TabsContent>
  <TabsContent value="tab-3">Content for tab 3</TabsContent>
</Tabs>
```

## Best Practices

### 1. Composition Over Customization

Compose components instead of overriding styles:

```tsx
// ✅ Good
<div className="flex gap-4 p-6 bg-slate-50 rounded-lg border">
  <Card>
    <CardHeader>
      <CardTitle>Title</CardTitle>
    </CardHeader>
    <CardContent>Content</CardContent>
  </Card>
</div>

// ❌ Avoid
<Card className="w-full max-w-2xl shadow-2xl">
  {/* Using arbitrary values */}
</Card>
```

### 2. Use Variants for Styling

Components provide variants for consistent styling:

```tsx
// ✅ Good — use component variants
<Button variant="primary" size="lg">Primary Action</Button>
<Button variant="secondary" size="md">Secondary Action</Button>

// ❌ Avoid — custom styling
<Button className="bg-blue-700 px-8 py-4 text-lg font-bold">Action</Button>
```

### 3. Keep Component Props Clean

Pass only necessary props:

```tsx
// ✅ Good
<Button onClick={handleClick} disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>

// ❌ Cluttered
<Button
  onClick={handleClick}
  disabled={isLoading}
  className="w-full"
  type="submit"
  autoFocus
  tabIndex={0}
  role="button"
>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>
```

### 4. Accessibility First

Always consider accessibility:

```tsx
// ✅ Good
<div className="space-y-4">
  <label htmlFor="email-input">Email Address</label>
  <Input id="email-input" type="email" placeholder="you@example.com" required />
  <Button type="submit">Submit</Button>
</div>

// Accessible icon button
<Button
  variant="ghost"
  size="sm"
  onClick={handleDelete}
  aria-label="Delete this item"
>
  <TrashIcon className="w-4 h-4" />
</Button>
```

### 5. Responsive Design

Use responsive utilities for mobile-first design:

```tsx
// ✅ Good — responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id}>{/* ... */}</Card>)}
</div>

// ✅ Good — responsive button
<Button className="w-full md:w-auto">Submit</Button>
```

## When to Create New Components

Create new components when:

1. **No similar component exists** — You've exhausted the library
2. **It's reusable** — Used in 3+ places or likely to be used again
3. **It has variants** — Different sizes, colors, or states
4. **It's complex** — Handles complex state or logic
5. **It needs docs** — Worth documenting for the team

Do NOT create new components for:

- One-off UI elements
- Simple compositions of existing components
- Components with a single use case

## Component Discovery

### Finding the Right Component

1. **Check Base Components** first — Most common elements are here
2. **Browse shadcn Library** — 57+ components for common patterns
3. **Check related docs** — Similar components might be nearby
4. **Ask the team** — Check if someone created something similar

### Component Categories

- **Buttons & Actions** — Button, IconButton, ToggleButton
- **Forms** — Input, Select, Checkbox, Radio, Textarea, Form
- **Cards & Containers** — Card, Panel, Container, Box
- **Modals & Dialogs** — Dialog, Sheet, AlertDialog
- **Navigation** — Tabs, Breadcrumb, Pagination
- **Data Display** — Table, Tree, List
- **Feedback** — Toast, Alert, Skeleton
- **Typography** — Heading, Text, Code
- **Animations** — AnimatedButton, CircularProgress

## Troubleshooting

### Component Not Working?

1. **Check imports** — Ensure correct import path
2. **Review props** — Props might have different names
3. **Check TypeScript** — Hover over component for prop interface
4. **See example** — Check [Component Library README](./README.md) or
   documentation for your component
5. **Ask team** — Component might have undocumented quirks

### Style Not Applying?

1. **Avoid className overrides** — Use component variants first
2. **Check specificity** — Tailwind utilities should apply
3. **Verify utilities** — Check [Design System](../design-system/README.md)
4. **Use px utilities** — Prevent external styles with `!` (sparingly)

## Resources

- [Component Library](./README.md) — Browse all components
- [Design System](../design-system/README.md) — Design tokens and guidelines
- [Storybook](../../../.storybook/) — Visual component showcase
- [shadcn/ui Docs](https://ui.shadcn.com/) — Official component library docs
- [Tailwind CSS](https://tailwindcss.com/) — Styling framework

---

**Last Updated:** April 14, 2026
