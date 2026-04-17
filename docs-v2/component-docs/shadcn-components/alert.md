# Alert Component

Display important messages or warnings. Uses CVA for variant styling.

## Import

```typescript
import { Alert, AlertTitle, AlertDescription } from '@shadcn/alert'
```

## Basic Usage

```typescript
import { Alert, AlertTitle, AlertDescription } from '@shadcn/alert'
import { AlertCircle } from 'lucide-react'

export function BasicAlert() {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>
        This is an informational alert message.
      </AlertDescription>
    </Alert>
  )
}
```

## Variants

### Default Alert

```typescript
import { Info } from 'lucide-react'

export function DefaultAlert() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Informational</AlertTitle>
      <AlertDescription>
        This is an informational alert with neutral styling.
      </AlertDescription>
    </Alert>
  )
}
```

### Destructive Alert

```typescript
import { AlertTriangle } from 'lucide-react'

export function DestructiveAlert() {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  )
}
```

## All Variants Example

```typescript
import { AlertCircle, CheckCircle2, AlertTriangle, Info } from 'lucide-react'

export function AlertVariants() {
  return (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>
          This is an informational message.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This action cannot be undone.
        </AlertDescription>
      </Alert>

      <Alert>
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          Your changes have been saved.
        </AlertDescription>
      </Alert>
    </div>
  )
}
```

## Alert with Action

```typescript
import { AlertTriangle } from 'lucide-react'
import { Button } from '@shadcn/button'

export function AlertWithAction() {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <div className="flex-1">
        <AlertTitle>Session Expired</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again to continue.
        </AlertDescription>
      </div>
      <Button size="sm" variant="outline">
        Log In
      </Button>
    </Alert>
  )
}
```

## Maintenance Alert

```typescript
import { Wrench } from 'lucide-react'

export function MaintenanceAlert() {
  return (
    <Alert>
      <Wrench className="h-4 w-4" />
      <AlertTitle>Scheduled Maintenance</AlertTitle>
      <AlertDescription>
        Our service will be down for maintenance on Saturday from 2-4 AM EST.
        We apologize for the inconvenience.
      </AlertDescription>
    </Alert>
  )
}
```

## Network Status Alert

```typescript
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export function NetworkAlert() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine)

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (isOnline) {
    return (
      <Alert>
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertTitle>Connected</AlertTitle>
        <AlertDescription>You are online.</AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Offline</AlertTitle>
      <AlertDescription>
        You are offline. Some features may not work properly.
      </AlertDescription>
    </Alert>
  )
}
```

## Dismissible Alert

```typescript
import { X, AlertCircle } from 'lucide-react'

export function DismissibleAlert() {
  const [visible, setVisible] = React.useState(true)

  if (!visible) return null

  return (
    <div className="relative">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          This is a dismissible alert message.
        </AlertDescription>
      </Alert>
      <button
        onClick={() => setVisible(false)}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
```

## Data Validation Alert

```typescript
import { AlertCircle } from 'lucide-react'
import { Input } from '@shadcn/input'
import { Button } from '@shadcn/button'

export function ValidationAlert() {
  const [email, setEmail] = React.useState('')
  const [errors, setErrors] = React.useState<string[]>([])

  const handleSubmit = () => {
    const newErrors: string[] = []

    if (!email) newErrors.push('Email is required')
    if (!email.includes('@')) newErrors.push('Invalid email format')

    setErrors(newErrors)
  }

  return (
    <div className="space-y-4">
      {errors.length > 0 && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Validation Error</AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      <Input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}
```

## Props Interface

### Alert

```typescript
interface AlertProps extends React.ComponentProps<'div'> {
  variant?: 'default' | 'destructive'
}
```

## Accessibility

- **Semantic Role:** Uses `role="alert"` for announcements
- **ARIA Live Region:** Announces to screen readers automatically
- **Icon + Text:** Never rely on icons alone for conveying information
- **Keyboard Accessible:** All interactive elements are keyboard accessible

### Accessible Alert

```typescript
export function AccessibleAlert() {
  return (
    <Alert role="alert" aria-live="polite" aria-atomic="true">
      <AlertCircle className="h-4 w-4" aria-hidden="true" />
      <AlertTitle>Attention Required</AlertTitle>
      <AlertDescription>
        Your form has {errorCount} validation error{errorCount !== 1 ? 's' : ''}.
      </AlertDescription>
    </Alert>
  )
}
```

## Styling and Customization

### Custom Colors

```typescript
<Alert className="border-blue-200 bg-blue-50 text-blue-900">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Custom Styled</AlertTitle>
</Alert>
```

### Full Width

```typescript
<div className="w-full">
  <Alert className="rounded-none">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Full Width Alert</AlertTitle>
  </Alert>
</div>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<Alert className="dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Dark Mode Alert</AlertTitle>
</Alert>
```

## Advanced Patterns

### Alert Queue

```typescript
export function AlertQueue() {
  const [alerts, setAlerts] = React.useState<Array<{ id: string; message: string }>>([])

  const addAlert = (message: string) => {
    const id = Date.now().toString()
    setAlerts((prev) => [...prev, { id, message }])

    setTimeout(() => {
      setAlerts((prev) => prev.filter((a) => a.id !== id))
    }, 5000)
  }

  return (
    <div className="space-y-2">
      <Button onClick={() => addAlert('New notification!')}>Add Alert</Button>
      <div className="space-y-2">
        {alerts.map((alert) => (
          <Alert key={alert.id} className="animate-in">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  )
}
```

### Contextual Alerts

```typescript
export function ContextualAlerts() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )

  const Icon = {
    idle: AlertCircle,
    loading: AlertCircle,
    success: () => <span>✓</span>,
    error: AlertTriangle,
  }[status]

  return (
    <div className="space-y-4">
      {status !== 'idle' && (
        <Alert variant={status === 'error' ? 'destructive' : 'default'}>
          <Icon className="h-4 w-4" />
          <AlertTitle>
            {status === 'loading' && 'Processing...'}
            {status === 'success' && 'Success!'}
            {status === 'error' && 'Error'}
          </AlertTitle>
        </Alert>
      )}
      <Button onClick={() => setStatus('loading')}>Process</Button>
    </div>
  )
}
```

## Performance Considerations

- **Static Content:** Alerts typically contain static content
- **Animate-In:** Use CSS animations for alert appearance
- **Auto-Dismiss:** Implement timeouts for temporary alerts
- **DOM Cleanup:** Remove dismissed alerts from DOM

## Troubleshooting

### Alert Not Announced

Ensure `role="alert"` is present:

```typescript
// ✅ Correct
<Alert role="alert">Message</Alert>

// ❌ Screen readers won't announce
<div className="alert">Message</div>
```

### Icon Not Visible

Use appropriate icon sizes:

```typescript
// ✅ Correct size
<AlertCircle className="h-4 w-4" />

// ❌ Too large
<AlertCircle className="h-8 w-8" />
```

## Related Components

- [Button](/docs-v2/component-docs/base-components/button.md) — Action buttons
  in alerts
- [Card](/docs-v2/component-docs/shadcn-components/card.md) — Container
  component
- [Dialog](/docs-v2/component-docs/shadcn-components/dialog.md) — Modal alerts
