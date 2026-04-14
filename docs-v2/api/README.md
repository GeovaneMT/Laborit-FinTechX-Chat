# API & HTTP Client Documentation

Integration patterns for backend communication and REST API consumption.

## Overview

This project uses an HTTP client generated from OpenAPI/Swagger specifications
using **Orval**. The client provides:

- Type-safe API endpoints
- Automatic request/response validation
- Mutation hooks for React Query
- Error handling
- Authentication support

## Quick Start

### Basic Usage

```typescript
// 1. Import the generated client
import { useGetUser, useCreateUser } from '@/http/generated/users'

// 2. Use in components
export function UserProfile({ userId }: { userId: string }) {
  // Fetch data
  const { data: user, isLoading } = useGetUser({ id: userId })

  // Mutation
  const { mutate: updateUser } = useUpdateUser()

  const handleUpdate = (name: string) => {
    updateUser({ id: userId, body: { name } })
  }

  if (isLoading) return <Spinner />

  return (
    <div>
      <h1>{user?.name}</h1>
      <button onClick={() => handleUpdate('New Name')}>
        Update Name
      </button>
    </div>
  )
}
```

## Architecture

### File Structure

```
src/http/
├── README.md                          # This file
├── api-client.ts                      # Custom client configuration
├── orval.config.ts                    # Orval configuration
├── mutator/
│   ├── custom-axios-instance.ts       # Shared axios configuration
│   └── index.ts
├── contracts/
│   └── *.ts                           # Contract types (generated/manual)
├── generated/
│   ├── index.ts                       # Main export barrel
│   ├── users/                         # Generated hooks by resource
│   ├── products/
│   ├── orders/
│   └── etc.
└── __specs__/
    └── openapi.json                   # OpenAPI specification
```

### Layers

**API Client** (`api-client.ts`)

- Axios instance configuration
- Interceptors for auth, errors, logging
- Base URL management

**HTTP Layer** (`generated/`)

- Auto-generated React Query hooks
- Type-safe endpoint functions
- Request/response types from OpenAPI spec

**Contract Layer** (`contracts/`)

- Request/response interfaces
- Domain types
- Error types

## Configuration

### Orval Setup

The `orval.config.ts` file configures how the client is generated:

```typescript
// src/http/orval.config.ts
export default {
  api: {
    input: './src/http/__specs__/openapi.json',
    output: {
      target: './src/http/generated/index.ts',
      schemas: './src/http/generated/schemas',
      client: 'react-query',
      mode: 'tags-split', // Split by OpenAPI tags
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
}
```

### Update Generated Client

When the OpenAPI spec changes:

```bash
# Regenerate client
pnpm http:generate

# Or manually with orval
npx orval --config src/http/orval.config.ts
```

## Using the API Client

### Query Hooks (Fetching Data)

```typescript
import { useGetUsers, useGetUser } from '@/http/generated/users'

// List all users
export function UsersList() {
  const { data: users, isLoading, error } = useGetUsers()

  if (isLoading) return <Spinner />
  if (error) return <ErrorMessage error={error} />

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

// Get single user
export function UserDetail({ userId }: { userId: string }) {
  const { data: user } = useGetUser({ id: userId })
  return <div>{user?.name}</div>
}
```

### Mutation Hooks (Creating/Updating/Deleting)

```typescript
import {
  useCreateUser,
  useUpdateUser,
  useDeleteUser
} from '@/http/generated/users'

export function UserForm() {
  const { mutate: createUser, isPending } = useCreateUser({
    onSuccess: (data) => {
      console.log('User created:', data)
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error) => {
      console.error('Creation failed:', error)
    },
  })

  const handleSubmit = (formData: CreateUserRequest) => {
    createUser({ body: formData })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(getFormData())
    }}>
      {/* form fields */}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Creating...' : 'Create'}
      </button>
    </form>
  )
}
```

### Interceptors & Custom Configuration

The client uses axios interceptors for:

- Adding authentication tokens
- Logging requests/responses
- Handling errors globally
- Retry logic

```typescript
// src/http/mutator/custom-axios-instance.ts
import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// Request interceptor - add auth token
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor - handle errors
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)
```

## Error Handling

### Type-Safe Errors

```typescript
import type { ApiError } from '@/http/contracts'

export function UserForm() {
  const { mutate: createUser } = useCreateUser({
    onError: (error: ApiError) => {
      // Type-safe error handling
      switch (error.code) {
        case 'VALIDATION_ERROR':
          showValidationErrors(error.details)
          break
        case 'DUPLICATE_EMAIL':
          showError('Email already in use')
          break
        case 'UNAUTHORIZED':
          redirectToLogin()
          break
        default:
          showGenericError(error.message)
      }
    },
  })
}
```

### Error Types

```typescript
// Common error responses from API
type ApiError =
  | ValidationError // 400 - Invalid request data
  | UnauthorizedError // 401 - Auth required
  | ForbiddenError // 403 - Not allowed
  | NotFoundError // 404 - Resource not found
  | ConflictError // 409 - Resource conflict
  | RateLimitError // 429 - Too many requests
  | ServerError // 5xx - Server error
```

## Authentication

### Token Management

```typescript
// src/http/mutator/auth.ts
import { useAuthStore } from '@/infra/stores/auth'

// Interceptor automatically adds token to requests
instance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle token refresh on 401
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const newToken = await refreshToken()
        useAuthStore.setState({ token: newToken })
        originalRequest.headers.Authorization = `Bearer ${newToken}`
        return instance(originalRequest)
      } catch {
        // Refresh failed - redirect to login
        redirectToLogin()
      }
    }

    return Promise.reject(error)
  },
)
```

## Advanced Patterns

### Optimistic Updates

```typescript
export function UserCard({ user }: { user: User }) {
  const { mutate: updateUser } = useUpdateUser({
    onMutate: async (newData) => {
      // Cancel ongoing queries
      await queryClient.cancelQueries({
        queryKey: ['users', user.id]
      })

      // Snapshot current data
      const previousData = queryClient.getQueryData(['users', user.id])

      // Update UI immediately
      queryClient.setQueryData(['users', user.id], newData)

      return { previousData }
    },
    onError: (error, newData, context) => {
      // Rollback on error
      if (context?.previousData) {
        queryClient.setQueryData(['users', user.id], context.previousData)
      }
    },
    onSuccess: () => {
      // Refetch to ensure consistency
      queryClient.invalidateQueries({ queryKey: ['users', user.id] })
    },
  })

  return (
    <button onClick={() => updateUser({ id: user.id, name: 'Updated' })}>
      Update
    </button>
  )
}
```

### Server Actions with API Client

```typescript
// 'use server'
import { api } from '@/http/api-client'

// Call API from Server Action
export async function fetchUserData(userId: string) {
  try {
    const user = await api.getUser({ id: userId })
    return { data: user }
  } catch (error) {
    return { error: 'Failed to fetch user' }
  }
}
```

### Caching Strategies

```typescript
// Cache responses for extended periods
const { data: config } = useGetConfig({
  staleTime: 1000 * 60 * 60, // 1 hour
  cacheTime: 1000 * 60 * 60 * 24, // 24 hours
})

// Disable caching for real-time data
const { data: status } = useGetStatus({
  staleTime: 0,
  cacheTime: 0,
})

// Manual invalidation
const handleRefresh = () => {
  queryClient.invalidateQueries({ queryKey: ['users'] })
}
```

## Testing

### Mocking API Responses

```typescript
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

// Setup mock server (in test setup)
export const mockServer = setupServer(
  http.get('/api/users/:id', () => {
    return HttpResponse.json({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    })
  })
)

// Use in tests
describe('UserProfile', () => {
  it('displays user data', async () => {
    render(<UserProfile userId="1" />)

    await screen.findByText('John Doe')
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })
})
```

## Best Practices

1. **Always use generated hooks** — Don't call axios directly
2. **Handle loading states** — Show spinners while fetching
3. **Handle errors gracefully** — Show error messages to users
4. **Invalidate cache** — After mutations, invalidate related queries
5. **Use optimistic updates** — For better UX on mutations
6. **Type everything** — Use generated types from OpenAPI
7. **Document custom endpoints** — If adding manual endpoints
8. **Test with mock server** — Use MSW for predictable tests

## Resources

- [React Query Documentation](https://tanstack.com/query/latest)
- [Axios Documentation](https://axios-http.com/)
- [Orval Documentation](https://orval.dev/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [MSW - Mock Service Worker](https://mswjs.io/)

## Troubleshooting

### Generated Client Not Updating

```bash
# Clear cache and regenerate
rm -rf src/http/generated
pnpm http:generate
```

### API Endpoints Not Found

1. Check that the OpenAPI spec is up to date
2. Verify the spec is in the right location (`src/http/__specs__/openapi.json`)
3. Regenerate the client: `pnpm http:generate`
4. Restart the dev server

### Type Errors with Generated Hooks

```bash
# Rebuild type definitions
pnpm type-check

# Clean and rebuild
pnpm clean && pnpm install && pnpm build
```

---

**Last Updated:** April 14, 2026 | **Maintained by:** Backend & Frontend Teams
