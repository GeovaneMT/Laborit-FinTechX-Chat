# Best Practices & Development Guidelines

Our standards for clean, maintainable, and sustainable code.

## Code Quality

### TypeScript

**Always use TypeScript. Never use `any`.**

```typescript
// ✅ Good
interface User {
  id: string
  name: string
  email: string
}

function getUser(id: string): Promise<User> {
  // ...
}

// ❌ Poor
function getUser(id: any): Promise<any> {
  // ...
}
```

### Naming Conventions

```typescript
// Components
// ✅ PascalCase
export function UserProfile() {}
export function UserProfileCard() {}

// ✅ Hook: useXxx
export function useAuth() {}
export function useUserProfile(id: string) {}

// ✅ Utilities/Services: camelCase
export function formatDate(date: Date) {}
export const getUserById = (id: string) => {}

// ✅ Constants: UPPER_SNAKE_CASE
export const MAX_RETRY_ATTEMPTS = 3
export const DEFAULT_PAGE_SIZE = 20

// ✅ Enums: PascalCase
export enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}
```

### Import Organization

```typescript
// ✅ Good — organized by source
// 1. External packages
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

// 2. Internal: app/core
import { UserUseCase } from '@/core/use-cases'
import type { User } from '@/core/types'

// 3. Internal: infra/components
import { useAuthStore } from '@/infra/stores'
import { api } from '@/http/api-client'

// 4. Relative
import { UserCard } from './components/UserCard'
import styles from './page.module.css'
```

## Component Design

### Single Responsibility

```typescript
// ✅ Good — each component has one job
export function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <CardContent>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </CardContent>
    </Card>
  )
}

// ❌ Poor — too many responsibilities
export function UserCard({ userId }: { userId: string }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Fetch user, manage state, render card...
  }, [])

  // All in one component
}
```

### Prop Types

```typescript
// ✅ Good
interface UserCardProps {
  user: User
  onClick?: () => void
  isSelected?: boolean
}

export function UserCard({ user, onClick, isSelected = false }: UserCardProps) {
  // ...
}

// ❌ Poor
export function UserCard(props: any) {
  // No type safety
}
```

### Component Composition

```typescript
// ✅ Compose components
<Card>
  <CardHeader>
    <CardTitle>Users</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  </CardContent>
</Card>

// ❌ Monolithic component
<div className="rounded-lg border p-6">
  <div className="text-2xl font-bold mb-4">Users</div>
  <div className="space-y-2">
    {users.map(user => (
      <div key={user.id} className="p-2 border rounded">
        {user.name}
      </div>
    ))}
  </div>
</div>
```

## State Management

### Local State

```typescript
// ✅ For UI state (open/closed, form value)
const [isOpen, setIsOpen] = useState(false)
const [selectedTab, setSelectedTab] = useState('tab-1')
```

### Global State (Zustand)

```typescript
// ✅ For app-wide state
const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))

// Usage
const user = useAuthStore((state) => state.user)
```

### Server State (React Query)

```typescript
// ✅ For fetched data
const { data: user, isLoading } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => userUseCase.getUser(userId),
})
```

## Patterns

### Custom Hooks

```typescript
// ✅ Extract logic into hooks
function useAsync(asyncFunction: () => Promise<T>) {
  const [state, setState] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    let mounted = true

    setState('pending')
    asyncFunction().then((result) => {
      if (mounted) {
        setData(result)
        setState('success')
      }
    }).catch(() => {
      if (mounted) setState('error')
    })

    return () => { mounted = false }
  }, [])

  return { state, data }
}

// Usage
export function UserProfile() {
  const { state, data } = useAsync(() => getUser('123'))

  if (state === 'pending') return <Spinner />
  if (state === 'error') return <Error />
  return <UserCard user={data} />
}
```

### Higher-Order Components (when appropriate)

```typescript
// ✅ Wrap components for cross-cutting concerns
export function withAuth<P>(Component: React.ComponentType<P>) {
  return function AuthorizedComponent(props: P) {
    const user = useAuthStore(state => state.user)

    if (!user) return <LoginPage />
    return <Component {...props} />
  }
}

// Usage
const ProtectedProfile = withAuth(UserProfile)
```

## Testing

### Unit Tests

```typescript
describe('UserCard', () => {
  it('renders user name', () => {
    const user = { id: '1', name: 'John', email: 'john@example.com' }
    render(<UserCard user={user} />)
    expect(screen.getByText('John')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<UserCard user={mockUser} onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
```

### Component Tests

```typescript
describe('UserForm', () => {
  it('submits form with user data', async () => {
    const onSubmit = vi.fn()
    render(<UserForm onSubmit={onSubmit} />)

    await userEvent.type(screen.getByLabelText('Name'), 'John')
    await userEvent.type(screen.getByLabelText('Email'), 'john@example.com')
    await userEvent.click(screen.getByRole('button', { name: /submit/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'John',
      email: 'john@example.com'
    })
  })
})
```

## Performance

### Memoization

```typescript
// ✅ Memo expensive components
const UserCard = memo(function UserCard({ user }: Props) {
  return <div>{user.name}</div>
}, (prev, next) => prev.user.id === next.user.id)

// ✅ useCallback for expensive computations
const handleSort = useCallback((field: string) => {
  // Expensive operation
}, [dependency])
```

### Code Splitting

```typescript
// ✅ Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'))

export function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <HeavyComponent />
    </Suspense>
  )
}
```

## Accessibility

### Semantic HTML

```typescript
// ✅ Use semantic elements
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// ❌ Div soup
<div>
  <div>
    <div><a href="/">Home</a></div>
    <div><a href="/about">About</a></div>
  </div>
</div>
```

### ARIA Labels

```typescript
// ✅ Accessible buttons
<button aria-label="Close dialog">
  <TimeIcon />
</button>

// ✅ Form labels
<label htmlFor="email">Email address</label>
<input id="email" type="email" required />
```

## Documentation

### JSDoc Comments

```typescript
/**
 * Create a new user
 *
 * @param data - User data including name and email
 * @returns Promise containing the created user
 * @throws ValidationError if data is invalid
 *
 * @example
 * const user = await createUser({
 *   name: 'John Doe',
 *   email: 'john@example.com'
 * })
 */
export async function createUser(data: CreateUserData): Promise<User> {
  // ...
}
```

### Component Documentation

```typescript
/**
 * Displays a user card with profile information
 *
 * @component
 * @example
 * const user = { id: '1', name: 'John', email: 'john@example.com' }
 * return <UserCard user={user} />
 */
export function UserCard({ user }: UserCardProps) {
  // ...
}
```

## Error Handling

### Typed Errors

```typescript
// ✅ Custom, typed errors
class ValidationError extends Error {
  constructor(
    public field: string,
    message: string,
  ) {
    super(message)
    this.name = 'ValidationError'
  }
}

// ✅ Use try/catch with typing
try {
  await userUseCase.createUser(data)
} catch (error) {
  if (error instanceof ValidationError) {
    showFieldError(error.field, error.message)
  } else {
    showGenericError('An unexpected error occurred')
  }
}
```

## Deployment

### Environment Variables

```bash
# ✅ .env.example (commit to repo)
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_AUTH_DOMAIN=

# ✅ .env.local (never commit)
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_AUTH_DOMAIN=localhost
```

### Build Optimization

```bash
# ✅ Build locally before pushing
pnpm build

# ✅ Run type checking
pnpm type-check

# ✅ Run linting
pnpm lint

# ✅ Run tests
pnpm test
```

## Code Review Checklist

- [ ] TypeScript — No `any` types
- [ ] Types — Input/output properly typed
- [ ] Tests — Unit and integration tests included
- [ ] Accessibility — Keyboard accessible, ARIA labels
- [ ] Performance — No unnecessary renders, appropriate memoization
- [ ] Security — No secrets in code, validation on server
- [ ] Documentation — JSDoc comments, component docs
- [ ] Naming — Descriptive, consistent with conventions
- [ ] Formatting — Prettier formatted, ESLint passing
- [ ] Dependencies — No unnecessary packages

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Best Practices](https://react.dev/learn)
- [Accessibility Guidelines](../design-system/accessibility.md)
- [Testing Library](https://testing-library.com/)
- [Vitest](https://vitest.dev/)

---

**Last Updated:** April 14, 2026 | **Focus:** Clean, maintainable, accessible
code
