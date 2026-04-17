# ErrorCard Component

**Description:** A stylized error display component with customizable title,
message, action button, and helpful tips. Built on top of the Alert component
for consistent error messaging.

**Use Case:** Display error states in forms, failed operations, or page-level
errors. Provides users with context and recovery actions (like refresh or
retry).

**Variants:** Custom title, message, action button, tips list

---

## Import

```tsx
import { ErrorCard } from '@/presentation/ui/error-card'
```

## Props

```tsx
interface ErrorCardProps {
  /**
   * Error title displayed as main heading.
   * @default "Erro desconhecido"
   * @example "Something went wrong"
   */
  title?: string

  /**
   * Error description text.
   * @default "Por favor, tente novamente mais tarde."
   * @example "Failed to load user data. Please refresh the page."
   */
  message?: string

  /**
   * Action button label.
   * @default "Recarregar"
   * @example "Retry"
   */
  actionTitle?: string

  /**
   * Callback when action button is clicked.
   * @default location.reload()
   */
  action?: () => void

  /**
   * Icon to display on action button.
   * @default <RefreshCcwIcon />
   */
  actionIcon?: React.ReactNode

  /**
   * List of helpful tips for users.
   * If undefined, shows default tips.
   */
  tips?: string[]

  /**
   * Hide tips section if true.
   * @default false
   */
  noTips?: boolean
}
```

---

## Basic Example

Simple error card with defaults:

```tsx
import { ErrorCard } from '@/presentation/ui/error-card'

export function BasicErrorCard() {
  return <ErrorCard />
}
```

---

## Advanced Examples

### Custom Title and Message

```tsx
import { ErrorCard } from '@/presentation/ui/error-card'

export function CustomErrorCard() {
  return (
    <ErrorCard
      title="Failed to Load Data"
      message="The server encountered an error while fetching your data. Please try again in a few moments."
    />
  )
}
```

### Custom Action Button

Handle errors with custom retry logic:

```tsx
import { ErrorCard } from '@/presentation/ui/error-card'
import { RefreshCwIcon } from 'lucide-react'

export function RetryErrorCard() {
  const handleRetry = async () => {
    try {
      // Retry API call
      await fetchData()
    } catch (error) {
      console.error('Retry failed:', error)
    }
  }

  return (
    <ErrorCard
      title="Data Loading Failed"
      message="Unable to fetch the requested data."
      actionTitle="Try Again"
      actionIcon={<RefreshCwIcon />}
      action={handleRetry}
    />
  )
}
```

### Custom Tips

Display relevant suggestions for the error:

```tsx
import { ErrorCard } from '@/presentation/ui/error-card'

export function ErrorWithTips() {
  return (
    <ErrorCard
      title="Network Error"
      message="Unable to connect to the server."
      actionTitle="Retry"
      tips={[
        'Check your internet connection',
        'Try again after a few moments',
        'If problem persists, contact support',
      ]}
    />
  )
}
```

### No Tips Version

Clean error card without suggestions:

```tsx
import { ErrorCard } from '@/presentation/ui/error-card'

export function SimpleErrorCard() {
  return (
    <ErrorCard title="Error" message="Something went wrong." noTips={true} />
  )
}
```

### Form Submission Error

Handle form errors:

```tsx
import { ErrorCard } from '@/presentation/ui/error-card'
import { useState } from 'react'

export function FormErrorCard() {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    try {
      await submitForm(formData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    }
  }

  return (
    <>
      {error && (
        <ErrorCard
          title="Form Submission Failed"
          message={error}
          actionTitle="Try Again"
          action={() => setError(null)}
          tips={[
            'Check all fields are filled correctly',
            'Verify your network connection',
            'Try submitting again',
          ]}
        />
      )}

      {/* Form here */}
    </>
  )
}
```

### Async Data Loading

Handle loading errors in data fetching:

```tsx
import { ErrorCard } from '@/presentation/ui/error-card'
import { useEffect, useState } from 'react'

interface UserData {
  name: string
  email: string
}

export function UserDataLoader() {
  const [data, setData] = useState<UserData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/user')
      if (!response.ok) throw new Error('Failed to fetch user data')
      const userData = await response.json()
      setData(userData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  if (isLoading) return <div>Loading...</div>

  if (error) {
    return (
      <ErrorCard
        title="Failed to Load User"
        message={error}
        actionTitle="Reload"
        action={() => loadData()}
        tips={[
          'Check your internet',
          'Ensure you are logged in',
          'Try again later',
        ]}
      />
    )
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
    </div>
  )
}
```

### API Error Handler

Map API errors to user-friendly messages:

```tsx
import { ErrorCard } from '@/presentation/ui/error-card'

interface ApiError {
  code: string
  message: string
  details?: string
}

export function ApiErrorDisplay({ error }: { error: ApiError }) {
  const errorConfig = {
    NETWORK_ERROR: {
      title: 'Connection Lost',
      message: 'Please check your internet connection',
      tips: ['Check your network', 'Refresh the page', 'Try again later'],
    },
    AUTH_ERROR: {
      title: 'Authentication Failed',
      message: 'Please log in again to continue',
      tips: [
        'Sign in with correct credentials',
        'Reset your password if needed',
      ],
    },
    SERVER_ERROR: {
      title: 'Server Error',
      message: 'The server is experiencing issues',
      tips: [
        'Try again in a few moments',
        'Contact support if problem persists',
      ],
    },
  }

  const config =
    errorConfig[error.code as keyof typeof errorConfig] ||
    errorConfig.SERVER_ERROR

  return (
    <ErrorCard
      title={config.title}
      message={error.details || config.message}
      tips={config.tips}
      actionTitle="Refresh"
      action={() => location.reload()}
    />
  )
}
```

---

## Styling

### Default Alert Variant

Uses the `destructive` Alert variant with:

- Red/pink background in light mode
- Red-tinted background in dark mode
- Alert icon and prominent styling
- Accessible color contrast ratios

### Custom Styling

The component uses shadcn/ui Alert internally, which respects dark mode:

```tsx
<div className="dark">
  <ErrorCard
    title="Dark Mode Error"
    message="This respects your dark mode setting"
  />
</div>
```

---

## Accessibility

- ✅ **Alert Role:** Uses `role="alert"` for screen reader announcement
- ✅ **Semantic HTML:** Proper heading hierarchy
- ✅ **Icon:** Alert icon included for visual indication
- ✅ **Text Clarity:** Clear, non-technical error messages
- ✅ **Keyboard Navigation:** Button is keyboard accessible

```tsx
<ErrorCard
  title="Accessible Error"
  message="Screen readers will announce this alert"
  actionTitle="Fix It"
  aria-live="polite"
/>
```

---

## Best Practices

1. **User-Friendly Messages:** Avoid technical jargon, explain what happened
2. **Actionable:** Always provide a clear action (retry, go back, contact
   support)
3. **Tips:** Include 2-3 helpful suggestions when relevant
4. **Context:** Remove error message after user takes action or on page change
5. **Logging:** Log errors server-side for debugging
6. **Specific Titles:** Use descriptive titles related to the error

---

## Common Patterns

### Try-Catch Error

```tsx
const [error, setError] = useState<string | null>(null)

const handleAction = async () => {
  try {
    await riskyOperation()
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Unknown error')
  }
}

if (error) {
  return <ErrorCard message={error} action={() => setError(null)} />
}
```

### Network Error Recovery

```tsx
const handleNetworkError = () => {
  return (
    <ErrorCard
      title="Network Error"
      message="Cannot connect to server"
      actionTitle="Reconnect"
      action={async () => {
        await connectToServer()
      }}
    />
  )
}
```

### 404 Page

```tsx
export function NotFoundPage() {
  return (
    <ErrorCard
      title="Page Not Found"
      message="The page you're looking for doesn't exist."
      actionTitle="Go Home"
      action={() => (window.location.href = '/')}
      noTips={true}
    />
  )
}
```

---

## Troubleshooting

### Tips Not Showing

Ensure `noTips` is not set to true:

```tsx
{
  /* ✅ Will show tips */
}
;<ErrorCard tips={['Tip 1', 'Tip 2']} />

{
  /* ❌ Will hide tips */
}
;<ErrorCard tips={['Tip 1', 'Tip 2']} noTips={true} />
```

### Action Button Not Working

Verify the action function is defined and called:

```tsx
const handleRetry = () => {
  // Make sure this function does something
  console.log('Retrying...')
}

;<ErrorCard action={handleRetry} />
```

### Styling Issues

If error card styling looks wrong, verify Alert component is imported correctly
from shadcn/ui:

```tsx
// Should be from shadcn, not custom
import { Alert } from '@shadcn/alert'
```

---

## Related Components

- **[Alert](../shadcn-components)** — Base alert component
- **[Button](./button.md)** — Action button used in error card
- **[Spinner](./spinner.md)** — Show while retrying
