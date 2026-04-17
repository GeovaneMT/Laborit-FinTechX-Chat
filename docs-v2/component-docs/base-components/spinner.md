# Spinner Component

**Description:** An animated loading spinner with customizable size and color.
Displays a rotating 12-bar animation to indicate loading states.

**Use Case:** Show loading progress during async operations (API calls, file
uploads, data fetching). Perfect for page loads, button actions, or content
placeholder states.

**Variants:** Size (customizable), Color (customizable)

---

## Import

```tsx
import { Spinner } from '@/presentation/ui/spinner'
```

## Props

```tsx
interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the spinner in pixels.
   * @default 16
   * @example 24, 32, 48
   */
  size?: number

  /**
   * Color of the spinner bars.
   * Use Tailwind color name (without 'bg-' prefix).
   * @default "white"
   * @example "black", "blue-500", "primary"
   */
  color?: string

  /**
   * Additional CSS classes.
   */
  className?: string

  /** Standard HTML div attributes. */
  // ... other HTMLAttributes
}
```

---

## Basic Example

Default loading spinner:

```tsx
import { Spinner } from '@/presentation/ui/spinner'

export function BasicSpinner() {
  return <Spinner />
}
```

---

## Advanced Examples

### Different Sizes

Create spinners with various sizes:

```tsx
export function SpinnerSizes() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size={16} />
      <Spinner size={24} />
      <Spinner size={32} />
      <Spinner size={48} />
    </div>
  )
}
```

### Custom Colors

Style spinners with different colors:

```tsx
export function CustomColorSpinners() {
  return (
    <div className="flex gap-4">
      <Spinner size={32} color="black" />
      <Spinner size={32} color="blue-500" />
      <Spinner size={32} color="green-600" />
      <div className="dark">
        <Spinner size={32} color="white" />
      </div>
    </div>
  )
}
```

### Loading State in Button

Show spinner inside a button during async action:

```tsx
import { useState } from 'react'
import { Button } from '@/presentation/ui/button'
import { Spinner } from '@/presentation/ui/spinner'

export function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert('Success!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={isLoading}>
      {isLoading ? (
        <div className="flex items-center gap-2">
          <Spinner size={16} color="white" />
          <span>Loading...</span>
        </div>
      ) : (
        'Submit'
      )}
    </Button>
  )
}
```

### Content Loading Placeholder

Show spinner while fetching content:

```tsx
import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/presentation/ui/shadcn/card'
import { Spinner } from '@/presentation/ui/spinner'

interface DataItem {
  id: string
  name: string
}

export function LoadingContent() {
  const [items, setItems] = useState<DataItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setItems([
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
      ])
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Items</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Spinner size={32} color="blue-500" />
          </div>
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
```

### Overlay Loading

Show spinner with overlay during long operations:

```tsx
import { useState } from 'react'
import { Spinner } from '@/presentation/ui/spinner'

export function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLongOperation = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative h-64 w-full rounded-lg border">
      <button
        onClick={handleLongOperation}
        className="rounded bg-blue-500 p-4 text-white"
      >
        Start Operation
      </button>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50">
          <Spinner size={48} color="white" />
        </div>
      )}
    </div>
  )
}
```

### Multiple Spinners

Layout multiple spinners for batch operations:

```tsx
export function MultipleSpinners() {
  const [progress, setProgress] = useState({
    upload: false,
    processing: false,
    save: false,
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        {progress.upload && <Spinner size={20} />}
        <span>Uploading file...</span>
      </div>
      <div className="flex items-center gap-3">
        {progress.processing && <Spinner size={20} />}
        <span>Processing data...</span>
      </div>
      <div className="flex items-center gap-3">
        {progress.save && <Spinner size={20} />}
        <span>Saving results...</span>
      </div>
    </div>
  )
}
```

---

## Styling

### Size Scale

The component supports any pixel size:

- **Small:** `size={16}` — inline with text, button labels
- **Medium:** `size={24}` — standard loading indicator
- **Large:** `size={32}` — prominent loading state
- **Extra Large:** `size={48}` — full-screen loading

### Color Support

Use any Tailwind color:

- **Standard:** `color="white"`, `color="black"`, `color="gray-500"`
- **Primary/Brand:** `color="blue-500"`, `color="purple-600"`
- **Semantic:** Use `color="white"` on dark backgrounds, `color="black"` on
  light

### Custom Styling

Add custom classes for additional effects:

```tsx
<Spinner size={24} color="blue-500" className="opacity-75 drop-shadow-lg" />
```

---

## Accessibility

- ✅ **Semantic Role:** Uses `role="status"` for screen readers
- ✅ **Aria Label:** Default `aria-label="Loading"` provided
- ✅ **Perceivable:** High contrast animation visible to all users
- ✅ **Customizable:** Can override aria-label for context

```tsx
<Spinner size={32} aria-label="Loading user data" aria-busy="true" />
```

---

## Best Practices

1. **Show Context:** Always indicate what's loading with nearby text
2. **Appropriate Size:** Use smaller spinners inline, larger for full-page loads
3. **Clear Color:** Ensure high contrast against background
4. **Timeout Handling:** Always set timeouts to prevent infinite spinners
5. **Error States:** Show error message after reasonable timeout
6. **Disable Interactions:** Disable buttons/inputs during loading

---

## Common Patterns

### API Data Fetching

```tsx
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
  fetch('/api/data')
    .then((res) => res.json())
    .then((data) => setData(data))
    .finally(() => setLoading(false))
}, [])

return loading ? <Spinner size={32} /> : <div>{/* render data */}</div>
```

### Async Form Submission

```tsx
const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (data) => {
  setIsSubmitting(true)
  try {
    await submitForm(data)
  } finally {
    setIsSubmitting(false)
  }
}

return (
  <button disabled={isSubmitting}>
    {isSubmitting && <Spinner size={16} />}
    Submit
  </button>
)
```

### Load with Fallback

```tsx
if (isLoading) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <Spinner size={40} />
      <p className="text-muted-foreground">Loading content...</p>
    </div>
  )
}
```

---

## Troubleshooting

### Spinner Not Visible

Check background color contrast:

- Use white spinner on dark backgrounds
- Use dark spinner on light backgrounds

```tsx
{
  /* Light background */
}
;<Spinner color="black" />

{
  /* Dark background */
}
;<Spinner color="white" />
```

### Animation Choppy or Stuttering

The animation uses CSS keyframes. If choppy, check:

- Browser hardware acceleration is enabled
- No heavy JavaScript on same thread
- Container has proper dimensions

```tsx
<Spinner size={32} className="will-change-transform" />
```

### Color Not Applying

Ensure color is a valid Tailwind class name (without `bg-` prefix):

```tsx
{
  /* ✅ Correct */
}
;<Spinner color="blue-500" />

{
  /* ❌ Wrong */
}
;<Spinner color="bg-blue-500" />
```

---

## Related Components

- **[LoadingPulse](./loading-pulse.md)** — Simpler animated pulse indicator
- **[Button](./button.md)** — Show spinner with button state
- **[ErrorCard](./error-card.md)** — Handle loading errors
