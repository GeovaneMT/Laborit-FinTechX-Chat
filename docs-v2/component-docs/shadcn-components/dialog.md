# Dialog Component

Modal dialog component for focused user interactions. Built on Radix UI with
animations.

## Import

```typescript
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/presentation/ui/shadcn/dialog'
```

## Basic Usage

```tsx
import { Button } from '@/presentation/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/presentation/ui/shadcn/dialog'

export function ConfirmDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Delete Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Item?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

## Dialog States

### Open/Closed Control

```tsx
const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </DialogContent>
</Dialog>
```

### Prevent Close

```tsx
const [canClose, setCanClose] = useState(true)

<Dialog
  open={open}
  onOpenChange={(newOpen) => {
    if (!newOpen && !canClose) return
    setOpen(newOpen)
  }}
>
  {/* ... */}
</Dialog>
```

## Advanced Patterns

### Form Dialog

```tsx
const [open, setOpen] = useState(false)
const form = useForm()

const onSubmit = (data: FormData) => {
  handleSubmit(data)
  setOpen(false)
}

;<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Add Item</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add New Item</DialogTitle>
      <DialogDescription>
        Fill in the form below to create a new item.
      </DialogDescription>
    </DialogHeader>

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
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Creating...' : 'Create'}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  </DialogContent>
</Dialog>
```

### Alert Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete Account</DialogTitle>
      <DialogDescription>
        Are you sure you want to delete your account? This action is permanent
        and cannot be undone.
      </DialogDescription>
    </DialogHeader>

    <div className="space-y-4">
      <Alert variant="destructive">
        <AlertCircleIcon className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          All your data will be permanently deleted.
        </AlertDescription>
      </Alert>
    </div>

    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button variant="destructive">Delete Account</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Scrollable Content

```tsx
<DialogContent className="max-h-screen overflow-y-auto">
  <DialogHeader>
    <DialogTitle>Long Content</DialogTitle>
  </DialogHeader>

  <div className="space-y-4">
    {longContentArray.map((item) => (
      <div key={item.id}>{item.content}</div>
    ))}
  </div>
</DialogContent>
```

## Props Interface

```typescript
interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  modal?: boolean
}

interface DialogTriggerProps extends React.ComponentPropsWithoutRef<
  typeof Trigger
> {}

interface DialogContentProps extends React.ComponentPropsWithoutRef<
  typeof Content
> {}

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

interface DialogTitleProps extends React.ComponentPropsWithoutRef<
  typeof Title
> {}

interface DialogDescriptionProps extends React.ComponentPropsWithoutRef<
  typeof Description
> {}

interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

interface DialogCloseProps extends React.ComponentPropsWithoutRef<
  typeof Close
> {}
```

## Accessibility

### Keyboard Support

- Escape key closes dialog
- Focus management (traps focus inside)
- Tab order preserved within dialog

### Screen Readers

- Dialog role automatically set
- Title automatically associated
- Proper ARIA attributes

### Focus Management

```tsx
// Focus returns to trigger on close
<Dialog>
  <DialogTrigger>
    <Button>Open</Button> {/* Focus returns here */}
  </DialogTrigger>
  <DialogContent>{/* Focus trapped in content */}</DialogContent>
</Dialog>
```

## Troubleshooting

### Dialog not closing

Check onOpenChange handler:

```tsx
// ✅ Correct
const [open, setOpen] = useState(false)
<Dialog open={open} onOpenChange={setOpen}>
  <DialogClose asChild>
    <Button>Close</Button>
  </DialogClose>
</Dialog>

// ❌ Missing state update
<Dialog>
  <DialogClose>Close</DialogClose>
</Dialog>
```

### Content overflowing

Add scroll or sizing:

```tsx
<DialogContent className="max-h-screen max-w-md overflow-y-auto">
  {/* Content */}
</DialogContent>
```

## Related Components

- [Drawer](../drawer.md) — Slide-in dialog
- [Popover](../popover.md) — Floating content
- [AlertDialog](../alert-dialog.md) — Alert-specific dialogs

---

**Last Updated:** April 14, 2026 | **Version:** 1.0.0

**[← Back to shadcn Components](../shadcn-components/README.md)**
