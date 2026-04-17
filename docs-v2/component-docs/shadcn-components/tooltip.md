# Tooltip Component

Display brief informational text on hover or keyboard focus. Built on
[Radix UI Tooltip](https://www.radix-ui.com/docs/primitives/components/tooltip).

## Import

```typescript
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@shadcn/tooltip'
```

## Basic Usage

```typescript
import { Button } from '@shadcn/button'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@shadcn/tooltip'
import { Plus } from 'lucide-react'

export function BasicTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon">
            <Plus className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Add item</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## Positioning

Tooltips can appear in different positions relative to the trigger.

### Top Alignment (Default)

```typescript
export function TooltipTop() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Top tooltip content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Right Alignment

```typescript
export function TooltipRight() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Right tooltip content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Bottom Alignment

```typescript
export function TooltipBottom() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Bottom tooltip content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Left Alignment

```typescript
export function TooltipLeft() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Left tooltip content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## All Sides Example

```typescript
export function TooltipAllSides() {
  const sides = ['top', 'right', 'bottom', 'left'] as const

  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 gap-8 p-8">
        {sides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-full">
                {side.charAt(0).toUpperCase() + side.slice(1)}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              Tooltip on {side}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
```

## With Keyboard Shortcut

```typescript
import { Code } from '@shadcn/typography'

export function TooltipWithShortcut() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Save</Button>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-2">
          <span>Save document</span>
          <Code>Ctrl+S</Code>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## Icon Button Tooltips

Common pattern for icon buttons.

```typescript
import { Settings, Download, Trash2, Copy } from 'lucide-react'

export function IconButtonTooltips() {
  const actions = [
    { icon: Download, label: 'Download' },
    { icon: Copy, label: 'Copy' },
    { icon: Settings, label: 'Settings' },
    { icon: Trash2, label: 'Delete' },
  ]

  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {actions.map(({ icon: Icon, label }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <Icon className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
```

## Rich Content Tooltip

Display more complex content in tooltip.

```typescript
export function RichContentTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Info</Button>
        </TooltipTrigger>
        <TooltipContent className="w-80">
          <div className="space-y-2">
            <p className="font-semibold">Feature Information</p>
            <p className="text-sm">
              This feature allows you to perform advanced operations. Click learn more for
              additional documentation.
            </p>
            <a href="#" className="text-xs text-blue-400 hover:underline">
              Learn more →
            </a>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## Tooltip Grid

Multiple tooltips in a grid layout.

```typescript
export function TooltipGrid() {
  const items = [
    { label: 'Copy', hint: 'Duplicate' },
    { label: 'Paste', hint: 'Insert' },
    { label: 'Cut', hint: 'Remove' },
    { label: 'Undo', hint: 'Revert' },
    { label: 'Redo', hint: 'Repeat' },
    { label: 'Delete', hint: 'Remove' },
  ]

  return (
    <TooltipProvider>
      <div className="grid grid-cols-3 gap-4 p-4">
        {items.map(({ label, hint }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-full">
                {label}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{hint}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
```

## Delayed Tooltip

Control tooltip delay with provider.

```typescript
export function DelayedTooltip() {
  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Delayed 500ms</Button>
        </TooltipTrigger>
        <TooltipContent>This tooltip shows after 500ms</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## Props Interface

### Tooltip

```typescript
interface TooltipProps extends React.ComponentProps<
  typeof TooltipPrimitive.Root
> {
  // No additional props
}
```

### TooltipTrigger

```typescript
interface TooltipTriggerProps extends React.ComponentProps<
  typeof TooltipPrimitive.Trigger
> {
  asChild?: boolean
}
```

### TooltipContent

```typescript
interface TooltipContentProps extends React.ComponentProps<
  typeof TooltipPrimitive.Content
> {
  className?: string
  sideOffset?: number
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
}
```

### TooltipProvider

```typescript
interface TooltipProviderProps extends React.ComponentProps<
  typeof TooltipPrimitive.Provider
> {
  delayDuration?: number
  skipDelayDuration?: number
}
```

## Accessibility

- **Keyboard Access:** Tooltips show on focus with keyboard navigation
- **Screen Readers:** Content announced when tooltip appears
- **Delay:** Prevents immediate tooltip display on hover (default 0ms)
- **ARIA Labels:** Proper `role="tooltip"` on content
- **Dismissable:** Escape key hides tooltip

### Accessible Tooltip Pattern

```typescript
export function AccessibleTooltip() {
  const [tooltipOpen, setTooltipOpen] = React.useState(false)

  return (
    <TooltipProvider>
      <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
        <TooltipTrigger asChild>
          <Button
            aria-label="Info about this feature"
            aria-describedby="feature-tooltip"
          >
            ?
          </Button>
        </TooltipTrigger>
        <TooltipContent id="feature-tooltip" role="tooltip">
          Detailed feature information
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## Styling and Customization

### Custom Colors

```typescript
export function CustomColorTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Custom Color</Button>
        </TooltipTrigger>
        <TooltipContent className="bg-blue-600 text-white border-blue-700">
          Custom colored tooltip
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Styled Variants

```typescript
export function StyledTooltips() {
  const variants = [
    'bg-green-600 text-white',
    'bg-purple-600 text-white',
    'bg-orange-600 text-white',
  ]

  return (
    <TooltipProvider>
      <div className="flex gap-4">
        {variants.map((className, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Button variant="outline">Style {idx + 1}</Button>
            </TooltipTrigger>
            <TooltipContent className={className}>
              Custom styled tooltip
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
```

### Wide Tooltip

```typescript
<Tooltip>
  <TooltipTrigger asChild>
    <Button>Wide Tooltip</Button>
  </TooltipTrigger>
  <TooltipContent className="w-96 max-w-96">
    <p className="text-sm font-medium">Long content</p>
    <p className="text-xs text-muted-foreground mt-1">
      This is a wider tooltip that can display more detailed information about the
      feature or action.
    </p>
  </TooltipContent>
</Tooltip>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" className="dark:border-slate-700">
        Dark Mode
      </Button>
    </TooltipTrigger>
    <TooltipContent className="dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700">
      Dark mode tooltip
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Advanced Patterns

### Tooltip with Arrow

```typescript
export function TooltipWithArrow() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Arrow Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          Tooltip content
          <div className="absolute w-2 h-2 bg-foreground rotate-45 translate-x-0" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Conditional Tooltip

```typescript
export function ConditionalTooltip() {
  const [showTooltip, setShowTooltip] = React.useState(true)

  return (
    <TooltipProvider>
      <Tooltip open={showTooltip && true}>
        <TooltipTrigger asChild>
          <Button onClick={() => setShowTooltip(false)}>
            Click to hide tooltip
          </Button>
        </TooltipTrigger>
        <TooltipContent>This can be hidden</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Tooltip with Loading

```typescript
export function TooltipWithLoading() {
  const [loading, setLoading] = React.useState(false)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button disabled={loading} onClick={() => setLoading(true)}>
            {loading ? 'Loading...' : 'Hover for info'}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {loading ? 'Please wait...' : 'Ready to use'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## Performance Considerations

- **Provider Wrapping:** Wrap entire app or section with `TooltipProvider` once
- **Delay Duration:** Use appropriate delay to prevent tooltip spam
- **Content Rendering:** Tooltip content is only rendered when open
- **Portal Rendering:** Content is rendered in portal for proper z-index

```typescript
// ✅ Correct - single provider
export function App() {
  return (
    <TooltipProvider>
      <div>
        <Tooltip>
          <TooltipTrigger>Item 1</TooltipTrigger>
          <TooltipContent>Content 1</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>Item 2</TooltipTrigger>
          <TooltipContent>Content 2</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
```

## Troubleshooting

### Tooltip Not Appearing

Ensure `TooltipProvider` wraps the entire component:

```typescript
// ✅ Correct
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>Shows</TooltipContent>
  </Tooltip>
</TooltipProvider>

// ❌ Wrong
<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>Doesn't show</TooltipContent>
</Tooltip>
```

### Z-Index Issues

If tooltip appears behind other elements, adjust z-index:

```typescript
<TooltipContent className="z-50">
  Ensure visibility
</TooltipContent>
```

### Positioning Conflicts

Adjust `sideOffset` if tooltip is too close or far:

```typescript
<TooltipContent sideOffset={10}>More space</TooltipContent>
```

## Related Components

- [Button](/docs-v2/component-docs/base-components/button.md) — Tooltip trigger
- [Popover](/docs-v2/component-docs/shadcn-components/popover.md) — Interactive
  alternative
- [Dialog](/docs-v2/component-docs/shadcn-components/dialog.md) — Detailed
  content
