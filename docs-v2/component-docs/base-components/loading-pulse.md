# LoadingPulse Component

**Description:** A simple animated pulse indicator that shows a pulsing dot.
Lightweight alternative to the Spinner component for subtle loading states.

**Use Case:** Show that something is loading or active with minimal visual
prominence. Perfect for indicator badges, list items, or status markers.

**Variants:** Size (via className), Color (via className)

---

## Import

```tsx
import { LoadingPulse } from '@/presentation/ui/loading-pulse'
```

## Props

```tsx
// LoadingPulse is a simple JSX element with no props
// Use className for customization
const LoadingPulse = () => {
  // Returns a pulsing circle animation
}
```

---

## Basic Example

Simple loading pulse indicator:

```tsx
import { LoadingPulse } from '@/presentation/ui/loading-pulse'

export function BasicLoadingPulse() {
  return <LoadingPulse />
}
```

---

## Advanced Examples

### Inline with Text

Show pulse next to status text:

```tsx
import { LoadingPulse } from '@/presentation/ui/loading-pulse'

export function ProcessingStatus() {
  return (
    <div className="flex items-center gap-2">
      <LoadingPulse />
      <span className="text-muted-foreground text-sm">Processing...</span>
    </div>
  )
}
```

### In List Item

Indicate activity on a list item:

```tsx
import { LoadingPulse } from '@/presentation/ui/loading-pulse'

export function DevicesList() {
  const devices = [
    { id: 1, name: 'Phone', syncing: true },
    { id: 2, name: 'Tablet', syncing: false },
    { id: 3, name: 'Laptop', syncing: true },
  ]

  return (
    <ul className="space-y-2">
      {devices.map((device) => (
        <li
          key={device.id}
          className="flex items-center justify-between rounded border p-2"
        >
          <span>{device.name}</span>
          {device.syncing && (
            <div className="flex items-center gap-2">
              <LoadingPulse />
              <span className="text-muted-foreground text-xs">Syncing</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
```

### Status Badge

Use as activity indicator in avatar badge:

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@shadcn/avatar'
import { LoadingPulse } from '@/presentation/ui/loading-pulse'

export function UserAvatar({ online }: { online: boolean }) {
  return (
    <div className="relative inline-block">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {online && (
        <div className="absolute right-0 bottom-0">
          <LoadingPulse />
        </div>
      )}
    </div>
  )
}
```

### Multiple Pulses

Show multiple loading indicators:

```tsx
import { LoadingPulse } from '@/presentation/ui/loading-pulse'

export function MultipleSync() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <LoadingPulse />
        <span>Syncing emails...</span>
      </div>
      <div className="flex items-center gap-2">
        <LoadingPulse />
        <span>Updating calendar...</span>
      </div>
      <div className="flex items-center gap-2">
        <LoadingPulse />
        <span>Refreshing contacts...</span>
      </div>
    </div>
  )
}
```

### Connection Status

Show online/syncing status:

```tsx
import { LoadingPulse } from '@/presentation/ui/loading-pulse'

export function ConnectionStatus({ isConnected, isSyncing }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {isConnected ? (
        <>
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span>Connected</span>
        </>
      ) : (
        <>
          <LoadingPulse />
          <span className="text-muted-foreground">Connecting...</span>
        </>
      )}
      {isSyncing && <LoadingPulse />}
    </div>
  )
}
```

### Card with Loading State

Show pulse in card header:

```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/card'
import { LoadingPulse } from '@/presentation/ui/loading-pulse'

export function SyncCard({ isSyncing }: { isSyncing: boolean }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Data Sync</CardTitle>
        {isSyncing && <LoadingPulse />}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {isSyncing ? 'Synchronizing...' : 'Last sync: 2 minutes ago'}
        </p>
      </CardContent>
    </Card>
  )
}
```

### Table Row Indicator

Indicate loading state for table rows:

```tsx
import { LoadingPulse } from '@/presentation/ui/loading-pulse'

export function DataTable() {
  const items = [
    { id: 1, name: 'Item 1', loading: true },
    { id: 2, name: 'Item 2', loading: false },
    { id: 3, name: 'Item 3', loading: true },
  ]

  return (
    <table className="w-full">
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="border-b">
            <td className="p-2">{item.name}</td>
            <td className="p-2 text-right">
              {item.loading && <LoadingPulse />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
```

---

## Styling

### Default Style

- **Size:** 12px × 12px (h-3 w-3)
- **Color:** Accent color (from theme)
- **Animation:** Ping animation with opacity fade
- **Border:** None (solid circle)

### Custom Size

Modify with Tailwind scale classes:

```tsx
{
  /* Smaller */
}
;<div className="scale-75">
  <LoadingPulse />
</div>

{
  /* Larger */
}
;<div className="scale-150">
  <LoadingPulse />
</div>
```

### Custom Color

Wrap and override color classes:

```tsx
{
  /* Green pulse */
}
;<div className="[&>*]:bg-green-500">
  <LoadingPulse />
</div>

{
  /* Red pulse */
}
;<div className="[&>*]:bg-red-500">
  <LoadingPulse />
</div>
```

### Dark Mode

Automatically respects dark mode via Tailwind:

```tsx
<div className="dark">
  <LoadingPulse />
</div>
```

---

## Accessibility

- ✅ **Perceived Motion:** Only uses standard CSS animation
- ✅ **Prefers Reduced Motion:** Respects `prefers-reduced-motion` media query
- ✅ **Semantic:** Often paired with text descriptions
- ✅ **Lightweight:** No JavaScript animation overhead

```tsx
{
  /* Provide text context for screen readers */
}
;<div className="flex items-center gap-2">
  <LoadingPulse />
  <span aria-live="polite">Loading data...</span>
</div>
```

---

## Best Practices

1. **Pair with Text:** Always include descriptive text nearby
2. **Subtle Use:** Perfect for background processes (sync, auto-save)
3. **Meaningful:** Don't use for critical blocking operations (use Spinner
   instead)
4. **Consistent:** Use in same place for same operation type
5. **Performance:** Lightweight, won't impact page performance
6. **Accessibility:** Include aria-live text for context

---

## Common Patterns

### Background Sync Indicator

```tsx
const [isSyncing, setIsSyncing] = useState(false)

return isSyncing ? (
  <div className="flex items-center gap-2">
    <LoadingPulse />
    <span>Syncing changes...</span>
  </div>
) : null
```

### Active Connection Status

```tsx
<div className="flex items-center gap-2">
  {isConnected ? (
    <>
      <div className="h-3 w-3 rounded-full bg-green-500" />
      Online
    </>
  ) : (
    <>
      <LoadingPulse />
      Connecting...
    </>
  )}
</div>
```

### Auto-Save Indicator

```tsx
const [isSaving, setIsSaving] = useState(false)

return (
  isSaving && (
    <span className="text-muted-foreground flex items-center gap-1 text-xs">
      <LoadingPulse />
      Saving...
    </span>
  )
)
```

---

## Troubleshooting

### Animation Not Visible

Ensure element has proper size and color:

```tsx
{/* ✅ Visible */}
<LoadingPulse /> {/* 12px default size */}

{/* Might be too small in some contexts */}
<div className="scale-50">
  <LoadingPulse />
</div>
```

### Color Not Showing (Dark Mode)

The pulse uses the accent color. If not visible, you might need to wrap:

```tsx
{
  /* Use in container with proper text for visibility */
}
;<div className="flex items-center gap-2">
  <LoadingPulse />
  <span>Loading...</span>
</div>
```

---

## Related Components

- **[Spinner](./spinner.md)** — Heavier loading indicator for prominent states
- **[LoadingMessage](./loading-message.md)** — Full loading state card
- **[Button](./button.md)** — Use pulse in button loading state
