# Server Actions Pattern Guide

This document outlines the standardized pattern for creating and maintaining
server actions in this Next.js project.

## Overview

Server actions are the bridge between client components and backend services.
They handle:

1. **Input validation** (Zod schemas)
2. **Service calls** (HTTP requests via services)
3. **Error handling** (Either/Result pattern)
4. **Cache management** (revalidation)
5. **Type safety** (TypeScript)

## Architecture Flow

```
Client Component
    ↓
Server Action (*.action.ts)
    ↓
Service (*.service.ts)
    ↓
HTTP Client (ky)
    ↓
Mock API Route (/api/v1/*)
    ↓
Response → Either<Error, Data>
    ↓
Wrapped Result {success, data|error}
    ↓
Client Component
```

## Quick Start

### Creating a Query Action (Fetch Data)

```typescript
'use server'

import { wrapServerActionResult } from '@infra/server/actions/common/action-factory'
import { myService } from '@http/services/my.service'
import type { ServerActionResult } from '@infra/server/actions/common/types'

export const getDataAction = async (): Promise<ServerActionResult<MyData>> => {
  try {
    // 1. Call service (returns Either<Error, Data>)
    const reply = await myService.fetchData()

    // 2. Wrap result for serialization
    return await wrapServerActionResult(reply, {
      revalidateTags: ['my-data'], // Optional: for cache invalidation
    })
  } catch (error) {
    console.error('Error in getDataAction:', error)
    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to fetch data',
        statusCode: 500,
      },
    }
  }
}
```

### Creating a Mutation Action (Create/Update/Delete)

```typescript
'use server'

import { z } from 'zod/v4'
import { wrapServerActionMutation } from '@infra/server/actions/common/action-factory'
import { myService } from '@http/services/my.service'
import { getFirstZodErrorMessage } from '@core/validation/zod-errors'

// 1. Define input schema
const createResourceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
})

export type CreateResourceInput = z.infer<typeof createResourceSchema>

export const createResourceAction = async (
  input: CreateResourceInput,
): Promise<{
  success: boolean
  message?: string
  error?: { code: string; message: string }
}> => {
  try {
    // 2. Validate input
    const validatedInput = createResourceSchema.parse(input)

    // 3. Call service (returns Either<Error, Data>)
    const reply = await myService.create(validatedInput)

    // 4. Wrap mutation with cache revalidation
    return await wrapServerActionMutation(
      reply,
      'Resource created successfully',
      {
        revalidateTags: ['resources'],
        revalidatePaths: ['/dashboard'],
      },
    )
  } catch (error) {
    // 5. Handle validation errors
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: getFirstZodErrorMessage(error),
        },
      }
    }

    return {
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to create resource',
      },
    }
  }
}
```

## Naming Conventions

### Files

- Query actions: `get{Resource}.action.ts`
- Mutations: `create{Resource}.action.ts`, `update{Resource}.action.ts`,
  `delete{Resource}.action.ts`
- Examples: All in `src/infra/server/actions/examples-only/`

### Functions

- Follow camelCase: `getCustomersAction`, `createPhoneAction`, etc.

### Types

- Input: `{Action}Input` (e.g., `CreatePhoneInput`)
- Output: `ServerActionResult<T>` for queries, `{success, message?, error?}` for
  mutations

## Return Types

### Query Actions

```typescript
type ServerActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: ServerActionError }

interface ServerActionError {
  code: string
  message: string
  statusCode?: number
}
```

**Usage:**

```typescript
const result = await getCustomersAction()
if (result.success) {
  console.log(result.data) // Typed data
} else {
  console.error(result.error.message, result.error.statusCode)
}
```

### Mutation Actions

```typescript
type ServerActionMutationResult =
  | { success: true; message?: string }
  | { success: false; error: ServerActionError }
```

**Usage:**

```typescript
const result = await createPhoneAction({ userId: '123', number: '+55 11 123' })
if (result.success) {
  console.log(result.message) // "Phone created successfully"
} else {
  console.error(result.error.message)
}
```

## Error Handling

### Service Layer

Services return `Either<Error, Data>` types:

```typescript
type ServiceReply = Either<
  BadRequestError | UnauthorizedError | NotFoundError | InternalServerError,
  SuccessData
>
```

### Action Layer

The `wrapServerActionResult` and `wrapServerActionMutation` functions
automatically:

- Extract errors from Either types
- Convert to serializable format
- Map error codes and status codes
- Trigger cache revalidation on success

### Custom Errors

All custom errors inherit from `CustomError`:

```typescript
import {
  CustomError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  InternalServerError,
} from '@core/errors'

// Use specific error types in services
throw new BadRequestError('Invalid input')
throw new NotFoundError('Customer not found')
throw new ConflictError('Phone number already exists')
```

## Cache Revalidation

### Next.js 16 Cache Invalidation Strategy

Next.js 16 requires the `revalidateTag(tag, profile)` function with two
parameters:

```typescript
// Signature (Next.js 16)
revalidateTag(tag: string, profile: string | { expire?: number }): void
```

**Profile Options:**

- `'max'` (recommended): Marks data stale, serves stale-while-revalidate on next
  visit
- `{ expire: 0 }`: Immediate expiration (use for webhooks/external updates)
- Custom profiles: See `src/infra/cache-life.ts` for custom cache life presets

### Cache Tagging System

The project uses a standardized cache tag system in
[`src/infra/cache-tags.ts`](../../../src/infra/cache-tags.ts):

```typescript
export const cacheTags = {
  profile: 'tag:profile',
  dashboard: 'tag:dashboard',
  itemsList: (scope?: string) =>
    scope ? `tag:items:list:${scope}` : 'tag:items:list',
  itemDetail: (id: string) => `tag:item:${id}`,
} as const
```

### Tags vs Paths

Use **tags** for granular cache invalidation (recommended):

```typescript
import { cacheTags } from '@infra/cache-tags'

revalidateTags: [
  cacheTags.profile,
  cacheTags.itemsList(),
  cacheTags.itemDetail(resourceId),
]
```

Use **paths** for full page revalidation when needed:

```typescript
revalidatePaths: ['/dashboard', '/profile']
```

### When to Revalidate

- **Query actions**: Optional, only if data is likely to be stale
- **Mutation actions**: Always revalidate affected tags/paths
- **On error**: Never revalidate (don't lie about success)

### Example: Mutation with Cache Tags

```typescript
export const createPhoneAction = async (
  input: CreatePhoneInput,
): Promise<{ success: boolean; error?: ServerActionError }> => {
  try {
    const validatedInput = createPhoneInputSchema.parse(input)
    const reply = await createPhone(validatedInput)

    // Wrap with cache revalidation using 'max' profile
    return await wrapServerActionMutation(reply, 'Phone created', {
      revalidateTags: [
        `tag:customer:${validatedInput.userId}`,
        `tag:customer-email:${validatedInput.userEmail}`,
      ],
    })
  } catch (error) {
    // Handle errors...
  }
}
```

## Input Validation

Always validate server action inputs:

```typescript
import { z } from 'zod/v4'
import { getFirstZodErrorMessage } from '@core/validation/zod-errors'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})

try {
  const validated = schema.parse(input)
} catch (error) {
  if (error instanceof z.ZodError) {
    const message = getFirstZodErrorMessage(error)
    return { success: false, error: { code: 'VALIDATION_ERROR', message } }
  }
}
```

## Factory Reference

### `wrapServerActionResult<T>()`

Wraps Either type for query actions.

**Signature:**

```typescript
export async function wrapServerActionResult<T>(
  either: Either<unknown, T>,
  options?: ServerActionOptions,
): Promise<ServerActionResult<T>>
```

**Options:**

```typescript
interface ServerActionOptions {
  revalidateTags?: string[]
  revalidatePaths?: string[]
  validateInput?: boolean
  onError?: (error: ServerActionError) => void
}
```

### `wrapServerActionMutation<T>()`

Wraps Either type for mutation actions.

**Signature:**

```typescript
export async function wrapServerActionMutation<T>(
  either: Either<unknown, T>,
  successMessage?: string,
  options?: ServerActionOptions,
): Promise<{ success: boolean; message?: string; error?: ServerActionError }>
```

## Mock API Routes

All services call mock HTTP endpoints during development.

### Route Structure

```
/api/v1/
  ├── customers/
  │   └── route.ts          GET /api/v1/customers
  ├── items/
  │   └── route.ts          GET /api/v1/items
  ├── phones/
  │   ├── route.ts          POST /api/v1/phones
  │   └── validate/
  │       └── route.ts      GET /api/v1/phones/validate
  ├── profile/
  │   └── route.ts          GET/POST /api/v1/profile
  └── dashboard/
      └── summary/
          └── route.ts      GET /api/v1/dashboard/summary
```

### Creating a Mock Route

```typescript
import { NextResponse } from 'next/server'

/**
 * Mock endpoint: GET /api/v1/my-resource
 * Returns hardcoded or dynamically generated mock data
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const param = searchParams.get('param')

  // Validation
  if (!param) {
    return NextResponse.json(
      { success: false, error: 'Param is required' },
      { status: 400 },
    )
  }

  // Mock logic
  const mockData = { id: '1', name: 'Mock Item' }

  return NextResponse.json(mockData)
}

export async function POST(request: Request) {
  const payload = await request.json()

  // Validation and mock response
  return NextResponse.json({ success: true, id: 'new_id' }, { status: 201 })
}
```

## Examples

### Example 1: Fetch Customers (Query)

**Service:**

```typescript
// src/http/services/example-only/fetch-customers.service.ts
export const fetchCustomers = async (
  params: FetchCustomersParams,
): Promise<CustomersReplyProps> => {
  const { getToken } = await auth()
  const token = await getToken()
  if (!token) return left(new UnauthorizedError('Session expired'))

  try {
    return right(
      await fetchCustomersApi(params, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    )
  } catch (error) {
    // Error handling...
  }
}
```

**Action:**

```typescript
// src/infra/server/actions/examples-only/fetch-customers.action.ts
import { cacheTags } from '@infra/cache-tags'

export const fetchCustomersAction = async (
  params: FetchCustomersParams,
): Promise<ServerActionResult<FetchCustomersOutput>> => {
  try {
    const reply = await fetchCustomers(params)
    return await wrapServerActionResult(reply, {
      revalidateTags: [cacheTags.itemsList('customers')],
    })
  } catch (error) {
    return {
      success: false,
      error: { code: 'INTERNAL_ERROR', message: 'Failed' },
    }
  }
}
```

**Component:**

```typescript
'use client'

import { fetchCustomersAction } from '@infra/server/actions/examples-only/fetch-customers.action'

export function CustomersList() {
  const handleFetch = async () => {
    const result = await fetchCustomersAction({ limit: 20, query: '' })

    if (result.success) {
      console.log(result.data.customers)
    } else {
      console.error(result.error.message)
    }
  }

  return <button onClick={handleFetch}>Fetch Customers</button>
}
```

### Example 2: Create Phone (Mutation)

**Service:**

```typescript
// src/http/services/example-only/create-phone.service.ts
export async function createPhone(data: CreatePhoneProps): Promise<CreatePhoneReplyProps> {
  // Validation, auth, error handling...
  return right(await createPhoneApi(...))
}
```

**Action:**

```typescript
// src/infra/server/actions/examples-only/create-phone.action.ts
export const createPhoneAction = async (input: CreatePhoneActionInput) => {
  try {
    const validatedInput = createPhoneInputSchema.parse(input)
    const reply = await createPhone(validatedInput)
    return await wrapServerActionMutation(reply, 'Phone created', {
      revalidateTags: [`customer:${validatedInput.userId}`],
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: getFirstZodErrorMessage(error),
        },
      }
    }
    return {
      success: false,
      error: { code: 'INTERNAL_ERROR', message: 'Failed' },
    }
  }
}
```

**Component:**

```typescript
'use client'

import { createPhoneAction } from '@infra/server/actions/examples-only/create-phone.action'

export function AddPhoneForm() {
  const handleSubmit = async (formData: FormData) => {
    const result = await createPhoneAction({
      userId: 'user_123',
      userEmail: 'user@example.com',
      number: formData.get('phone') as string,
    })

    if (result.success) {
      alert(result.message)
    } else {
      alert(`Error: ${result.error.message}`)
    }
  }

  return <form onSubmit={(e) => { e.preventDefault(); handleSubmit(new FormData(e.currentTarget)) }}>...</form>
}
```

## Troubleshooting

### 1. Type Errors with Either

**Problem:** "Cannot serialize class instance"

**Solution:** Always wrap Either with `wrapServerActionResult` or
`wrapServerActionMutation` in actions. Never return Either directly.

### 2. Missing Cache Revalidation

**Problem:** Stale data after mutation

**Solution:** Always pass `revalidateTags` in mutation actions:

```typescript
return await wrapServerActionMutation(reply, 'Success', {
  revalidateTags: ['resource-tag'],
})
```

### 3. Validation Error Not Caught

**Problem:** ZodError thrown but not handled

**Solution:** Import `z.ZodError` and catch it specifically:

```typescript
import { z } from 'zod/v4'

try {
  schema.parse(input)
} catch (error) {
  if (error instanceof z.ZodError) {
    // Handle
  }
}
```

### 4. Service Returns Wrong Data

**Problem:** Service response doesn't match schema

**Solution:** Ensure mock route returns correct structure. Check:

- Route file in `/api/v1/`
- Response matches service return type
- All required fields present

## Best Practices

1. ✅ **Always validate input** - Use Zod schemas
2. ✅ **Always use factory** - Never return Either directly
3. ✅ **Always handle errors** - Catch and return meaningful messages
4. ✅ **Always revalidate mutations** - Use tags or paths
5. ✅ **Keep actions thin** - Let services handle business logic
6. ✅ **Document with JSDoc** - Include usage examples
7. ✅ **Name consistently** - Follow conventions
8. ✅ **Test error paths** - Break mocks intentionally

## Further Reading

- [Either Pattern](../../../src/core/either.ts) - Core implementation
- [Error Classes](../../../src/core/errors/custom.error.ts) - Custom errors
- [Factory Functions](../../../src/infra/server/actions/common/action-factory.ts) -
  Wrapper functions
- [Template](../../../src/infra/server/actions/common/action.template.ts) - Code
  template
