# Server Actions Pattern

Guide to using Next.js Server Actions for server-side operations in Laborit.

## Overview

Server Actions enable calling backend functions directly from client components
without building an API route. They provide a simple way to:

- Handle form submissions server-side
- Perform mutations securely
- Execute code that should only run on the server

## Basic Usage

### Defining a Server Action

```typescript
'use server'

import { db } from '@/infra/database'

export async function createPost(formData: FormData) {
  const content = formData.get('content') as string

  // Server-only code here
  const post = await db.posts.create({
    content,
    authorId: getCurrentUserId(), // Server-side auth check
  })

  // Revalidate cache
  revalidatePath('/posts')

  return post
}
```

### Using in a Client Component

```typescript
'use client'

export function CreatePostForm() {
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    try {
      const result = await createPost(formData)
      console.log('Post created:', result)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <form action={handleSubmit}>
      <textarea name="content" required />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Posting...' : 'Post'}
      </button>
    </form>
  )
}
```

## Advanced Patterns

### With React Hook Form

```typescript
'use client'

import { useForm } from 'react-hook-form'

export function UserForm() {
  const form = useForm()
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(data: UserFormData) {
    try {
      const result = await updateUserServerAction(data)
      if (result.error) {
        setError(result.error)
      } else {
        // Success
      }
    } catch (err) {
      setError('An unexpected error occurred')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {error && <Alert>{error}</Alert>}
      {/* Form fields */}
      <Button type="submit">Save</Button>
    </form>
  )
}
```

### Server Action as Event Handler

```typescript
'use client'

import { deletePostServerAction } from '@/app/actions'

export function PostCard({ post }: { post: Post }) {
  const [isPending, setIsPending] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this post?')) return

    setIsPending(true)
    try {
      await deletePostServerAction(post.id)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Card>
      <CardContent>{post.content}</CardContent>
      <Button onClick={handleDelete} disabled={isPending} variant="destructive">
        {isPending ? 'Deleting...' : 'Delete'}
      </Button>
    </Card>
  )
}
```

### Handling Errors

```typescript
'use server'

export async function unsafeOperation(id: string) {
  try {
    // Some operation that might fail
    const result = await riskyOperation(id)

    // Revalidate cache on success
    revalidatePath('/page')

    return { success: true, data: result }
  } catch (error) {
    // Return error message (safe for client)
    if (error instanceof ValidationError) {
      return { error: error.message }
    }

    // Log actual error server-side (not sent to client)
    console.error('Critical error:', error)
    return { error: 'An error occurred. Please try again.' }
  }
}
```

## Security Considerations

### 1. Authentication Check

```typescript
'use server'

import { getSession } from '@/infra/auth'

export async function updateProfile(data: ProfileData) {
  // Verify user is authenticated
  const session = await getSession()
  if (!session?.user?.id) {
    throw new Error('Not authenticated')
  }

  // Only let users update their own profile
  if (data.userId !== session.user.id) {
    throw new Error('Unauthorized')
  }

  // Proceed with update
  return await db.users.update(data.userId, data)
}
```

### 2. Authorization/Permissions

```typescript
'use server'

export async function deletePost(postId: string) {
  const session = await getSession()
  if (!session?.user?.id) {
    throw new Error('Not authenticated')
  }

  // Check if user owns this post
  const post = await db.posts.findById(postId)
  if (post.authorId !== session.user.id) {
    throw new Error('You cannot delete this post')
  }

  await db.posts.delete(postId)
  revalidatePath('/posts')
}
```

### 3. Input Validation

```typescript
'use server'

import { CreatePostSchema } from '@/core/schemas'
import { z } from 'zod'

export async function createPost(input: unknown) {
  // Validate input server-side
  const validInput = CreatePostSchema.parse(input)

  // Validated input is now type-safe
  return await db.posts.create(validInput)
}
```

## Best Practices

### 1. Keep Server Actions Focused

```typescript
// ✅ Good — Single responsibility
'use server'
export async function createPost(data: PostData) {
  const post = await db.posts.create(data)
  revalidatePath('/posts')
  return post
}

// ❌ Poor — Too many responsibilities
'use server'
export async function handlePostFlow(data: any) {
  const post = await db.posts.create(data)
  const notification = await notificationService.create(...)
  const analytics = await trackEvent(...)
  // ... many more operations
}
```

### 2. Use Types for Safety

```typescript
// ✅ Good — Type-safe
interface CreatePostInput {
  content: string
  tags: string[]
}

;('use server')
export async function createPost(input: CreatePostInput) {
  // Type-safe operations
  const post = await useCase.createPost(input)
  return post
}

// ❌ Poor — Loose types
export async function createPost(input: any) {
  // No type safety
}
```

### 3. Return Appropriate Data

```typescript
// ✅ Good — Return necessary data
'use server'
export async function createPost(data: PostData) {
  const post = await db.posts.create(data)
  return { id: post.id, slug: post.slug } // Only necessary data
}

// ⚠️ Avoid — Returning sensitive data
export async function getUser(id: string) {
  const user = await db.users.findById(id)
  return user // Contains password hash, tokens, etc!
}
```

### 4. Handle Loading States

```typescript
'use client'

export function PostForm() {
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    try {
      await createPostServerAction(formData)
    } finally {
      setIsPending(false) // Always reset, even on error
    }
  }

  return (
    <form action={handleSubmit}>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Creating...' : 'Create'}
      </button>
    </form>
  )
}
```

## Performance Tips

### 1. Revalidate Strategically

```typescript
'use server'

export async function updateUser(id: string, data: UserData) {
  const user = await db.users.update(id, data)

  // Only revalidate affected paths
  revalidatePath(`/users/${id}`)
  revalidatePath('/users') // If listing page shows user

  return user
}
```

### 2. Use Revalidate Tags

```typescript
'use server'

// When caching a page with a specific tag
// In your fetch or use-case
cache('user', { tags: ['user-profile', `user-${userId}`] })

// Then invalidate specific tag
export async function updateUser(id: string) {
  const result = await db.users.update(id, data)
  revalidateTag(`user-${id}`)
  return result
}
```

## Common Patterns

### Form Submission

```typescript
// app/actions.ts
'use server'

export async function submitContactForm(formData: FormData) {
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  try {
    await sendEmail({ email, message })
    return { success: true }
  } catch (error) {
    return { error: 'Failed to send. Try again.' }
  }
}

// components/contact-form.tsx
'use client'

export function ContactForm() {
  const [result, setResult] = useState<{ error?: string }>({})

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setResult(result)
  }

  return (
    <form action={handleSubmit}>
      <input name="email" type="email" required />
      <textarea name="message" required />
      {result.error && <Alert>{result.error}</Alert>}
      <button type="submit">Send</button>
    </form>
  )
}
```

### Optimistic Updates

```typescript
'use client'

import { updateTodoServerAction } from '@/app/actions'

export function TodoItem({ todo }: { todo: Todo }) {
  const [optimisticTodo, setOptimisticTodo] = useState(todo)

  async function handleToggle() {
    // Optimistic UI update
    setOptimisticTodo(prev => ({
      ...prev,
      completed: !prev.completed
    }))

    // Server update
    try {
      await updateTodoServerAction(todo.id, {
        completed: !todo.completed
      })
    } catch (error) {
      // Revert on error
      setOptimisticTodo(todo)
    }
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={optimisticTodo.completed}
        onChange={handleToggle}
      />
      {optimisticTodo.title}
    </li>
  )
}
```

## Troubleshooting

### Issue: "use server" throws error

**Solution:** Ensure file is a `.ts` or `.tsx` file (not `.js`). Server Actions
require TypeScript in this project.

### Issue: Data not updating after Server Action

**Solution:** Remember to call `revalidatePath()` or `revalidateTag()` to update
cached data:

```typescript
'use server'

export async function updateItem(id: string, data: any) {
  const result = await db.items.update(id, data)
  revalidatePath('/items') // Don't forget this!
  return result
}
```

### Issue: Sensitive data leaking to client

**Solution:** Only return necessary data:

```typescript
'use server'

export async function getUser(id: string) {
  const user = await db.users.findById(id)
  // Only return what's needed
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    // Don't return: passwordHash, tokens, etc.
  }
}
```

## Resources

- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
- [Security Best Practices](https://cheatsheetseries.owasp.org/)

---

**Last Updated:** April 14, 2026 | **Framework:** Next.js 16
