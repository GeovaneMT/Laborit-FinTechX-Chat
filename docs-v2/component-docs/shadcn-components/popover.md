# Popover Component

Display content in a floating panel that appears next to a trigger element.
Built on
[Radix UI Popover](https://www.radix-ui.com/docs/primitives/components/popover).

## Import

```typescript
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from '@shadcn/popover'
```

## Basic Usage

```typescript
import { Button } from '@shadcn/button'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@shadcn/popover'

export function BasicPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>This is a popover with content.</p>
      </PopoverContent>
    </Popover>
  )
}
```

## With Header and Description

```typescript
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from '@shadcn/popover'

export function PopoverWithHeader() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Information</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>
            This is a description for the popover content.
          </PopoverDescription>
        </PopoverHeader>
        <p className="text-sm mt-4">Additional content goes here.</p>
      </PopoverContent>
    </Popover>
  )
}
```

## Filter Popover Pattern

```typescript
import { Label } from '@shadcn/label'
import { Checkbox } from '@shadcn/checkbox'

export function FilterPopover() {
  const [filters, setFilters] = React.useState({
    active: false,
    archived: false,
    pending: false,
  })

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Filters</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <PopoverHeader>
            <PopoverTitle>Filter Options</PopoverTitle>
          </PopoverHeader>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="active"
                checked={filters.active}
                onCheckedChange={(checked) =>
                  setFilters({ ...filters, active: checked as boolean })
                }
              />
              <Label htmlFor="active" className="cursor-pointer">
                Active Items
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="archived"
                checked={filters.archived}
                onCheckedChange={(checked) =>
                  setFilters({ ...filters, archived: checked as boolean })
                }
              />
              <Label htmlFor="archived" className="cursor-pointer">
                Archived Items
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="pending"
                checked={filters.pending}
                onCheckedChange={(checked) =>
                  setFilters({ ...filters, pending: checked as boolean })
                }
              />
              <Label htmlFor="pending" className="cursor-pointer">
                Pending Items
              </Label>
            </div>
          </div>

          <div className="flex gap-2 pt-4 border-t">
            <Button size="sm" variant="outline" className="flex-1">
              Reset
            </Button>
            <Button size="sm" className="flex-1">
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

## Search Popover

```typescript
import { Input } from '@shadcn/input'
import { Search, Users, FileText, Settings } from 'lucide-react'

export function SearchPopover() {
  const [search, setSearch] = React.useState('')

  const results = [
    { icon: Users, label: 'Team Members' },
    { icon: FileText, label: 'Documentation' },
    { icon: Settings, label: 'Settings' },
  ].filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Search className="w-4 h-4" />
          Search
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="p-4 border-b">
          <Input
            placeholder="Type to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-0 focus-visible:ring-0"
          />
        </div>

        <div className="max-h-80 overflow-y-auto">
          {results.length > 0 ? (
            <div className="space-y-1 p-2">
              {results.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-sm text-muted-foreground text-center">
              No results found
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

## Timezone Settings Popover

```typescript
import { Label } from '@shadcn/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shadcn/select'

export function TimezonePopover() {
  const [timezone, setTimezone] = React.useState('UTC')

  const timezones = ['UTC', 'EST', 'CST', 'MST', 'PST', 'GMT', 'CET', 'IST']

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Timezone: {timezone}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <PopoverHeader>
            <PopoverTitle>Select Timezone</PopoverTitle>
            <PopoverDescription>
              Choose your preferred timezone for displaying times.
            </PopoverDescription>
          </PopoverHeader>

          <div className="space-y-2">
            <Label htmlFor="tz-select">Timezone</Label>
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger id="tz-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {timezones.map((tz) => (
                  <SelectItem key={tz} value={tz}>
                    {tz}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-xs text-muted-foreground">
            Current time: {new Date().toLocaleString('en-US', { timeZone: 'UTC' })}
          </p>

          <Button className="w-full">Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

## Share Settings Popover

```typescript
import { Copy, Twitter, Linkedin, Mail } from 'lucide-react'
import { Input } from '@shadcn/input'

export function SharePopover() {
  const shareUrl = 'https://example.com/share-link'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
  }

  const shareButtons = [
    { icon: Twitter, label: 'Twitter', color: 'text-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', color: 'text-blue-600' },
    { icon: Mail, label: 'Email', color: 'text-gray-600' },
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Share</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <PopoverHeader>
            <PopoverTitle>Share this page</PopoverTitle>
            <PopoverDescription>
              Copy the link or share on social media
            </PopoverDescription>
          </PopoverHeader>

          <div className="flex gap-2">
            <Input value={shareUrl} readOnly className="flex-1" />
            <Button size="icon" variant="ghost" onClick={copyToClipboard}>
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">Share on</p>
            <div className="flex gap-2">
              {shareButtons.map(({ icon: Icon, label, color }) => (
                <Button
                  key={label}
                  size="icon"
                  variant="outline"
                  className={`${color} hover:bg-muted`}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

## Info Popover with Multiple Sections

```typescript
export function InfoPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          ?
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-4">
          <PopoverHeader>
            <PopoverTitle>Feature Guide</PopoverTitle>
          </PopoverHeader>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm mb-1">How it works</h4>
              <p className="text-xs text-muted-foreground">
                This feature allows you to manage your preferences and settings
                in one convenient location.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-1">Getting Started</h4>
              <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Click the settings button</li>
                <li>Adjust your preferences</li>
                <li>Save your changes</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-1">Tips</h4>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                <li>Changes are saved automatically</li>
                <li>You can reset to defaults anytime</li>
              </ul>
            </div>
          </div>

          <a href="#" className="text-xs text-blue-500 hover:underline">
            Read full documentation →
          </a>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

## Props Interface

### Popover

```typescript
interface PopoverProps extends React.ComponentProps<
  typeof PopoverPrimitive.Root
> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
```

### PopoverTrigger

```typescript
interface PopoverTriggerProps extends React.ComponentProps<
  typeof PopoverPrimitive.Trigger
> {
  asChild?: boolean
}
```

### PopoverContent

```typescript
interface PopoverContentProps extends React.ComponentProps<
  typeof PopoverPrimitive.Content
> {
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  className?: string
}
```

## Accessibility

- **Focus Management:** Focus trap within popover, returns to trigger on close
- **Keyboard Navigation:** Close with Escape key
- **Screen Readers:** Proper ARIA roles and labels
- **Click Outside:** Closes when clicking outside content
- **Semantic Structure:** Proper heading hierarchy with PopoverTitle

### Accessible Popover Example

```typescript
export function AccessiblePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button aria-label="Open settings popover">Settings</Button>
      </PopoverTrigger>
      <PopoverContent role="dialog" aria-labelledby="popover-title">
        <PopoverHeader>
          <PopoverTitle id="popover-title">Settings</PopoverTitle>
          <PopoverDescription>Configure your preferences</PopoverDescription>
        </PopoverHeader>
        {/* Content */}
      </PopoverContent>
    </Popover>
  )
}
```

## Styling and Customization

### Custom Width

```typescript
<Popover>
  <PopoverTrigger asChild>
    <Button>Custom Width</Button>
  </PopoverTrigger>
  <PopoverContent className="w-96 max-w-96">
    Wide popover content
  </PopoverContent>
</Popover>
```

### Custom Colors

```typescript
<PopoverContent className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
  <p>Custom colored popover</p>
</PopoverContent>
```

### Rounded Corners

```typescript
<PopoverContent className="rounded-2xl">
  Extra rounded popover
</PopoverContent>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="dark:border-slate-700">
      Open
    </Button>
  </PopoverTrigger>
  <PopoverContent className="dark:bg-slate-950 dark:border-slate-800">
    <p className="dark:text-slate-200">Dark mode popover</p>
  </PopoverContent>
</Popover>
```

## Advanced Patterns

### Controlled Popover

```typescript
export function ControlledPopover() {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button>
          {open ? 'Close' : 'Open'}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Controlled popover content</p>
      </PopoverContent>
    </Popover>
  )
}
```

### Async Loading Popover

```typescript
export function AsyncPopover() {
  const [loading, setLoading] = React.useState(false)

  const handleOpen = (open: boolean) => {
    if (open) {
      setLoading(true)
      setTimeout(() => setLoading(false), 1000)
    }
  }

  return (
    <Popover onOpenChange={handleOpen}>
      <PopoverTrigger asChild>
        <Button>Load Content</Button>
      </PopoverTrigger>
      <PopoverContent>
        {loading ? <p>Loading...</p> : <p>Content loaded</p>}
      </PopoverContent>
    </Popover>
  )
}
```

## Performance Considerations

- **Content Rendering:** Popover content is only rendered when open
- **Portal Rendering:** Content renders in portal for proper z-index
- **Event Delegation:** Click outside handling optimized
- **Lazy Content:** Load popover content only when opened

## Troubleshooting

### Popover Cut Off by Parent Container

Ensure parent has `overflow: visible` or wrap in a portal:

```typescript
<div className="overflow-visible">
  <Popover>
    {/* Content */}
  </Popover>
</div>
```

### Z-Index Issues

Adjust z-index if popover appears behind other elements:

```typescript
<PopoverContent className="z-50">
  {/* Content */}
</PopoverContent>
```

### Focus Not Trapping

Ensure PopoverTrigger uses `asChild` correctly:

```typescript
// ✅ Correct
<PopoverTrigger asChild>
  <Button>Open</Button>
</PopoverTrigger>

// ❌ Wrong
<PopoverTrigger>Open</PopoverTrigger>
```

## Related Components

- [Tooltip](/docs-v2/component-docs/shadcn-components/tooltip.md) — Brief
  informational content
- [Dialog](/docs-v2/component-docs/shadcn-components/dialog.md) — Modal dialogs
- [Dropdown Menu](/docs-v2/component-docs/shadcn-components/dropdown-menu.md) —
  Menu popovers
