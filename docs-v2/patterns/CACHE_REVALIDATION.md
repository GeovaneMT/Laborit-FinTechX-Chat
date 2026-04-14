# Cache Revalidation Pattern

Strategy for managing cached data and keeping it synchronized with server state.

## Overview

In Next.js, pages and API responses can be cached for performance. However, when
data changes (via mutations), we need to **revalidate** cached data to ensure
users always see current information.

## Core Concepts

### Types of Caching

1. **Page Cache** — Static pages cached for duration
2. **API Route Cache** — API response cached
3. **Data Cache** — Query results cached
4. **Component Cache** — Rendered components cached

### Revalidation Triggers

1. **On Demand** — Manually invalidate specific paths/tags
2. **Time-based** — Auto-revalidate after interval (ISR)
3. **Event-based** — Revalidate on specific events

## Usage

### Basic Revalidation with `revalidatePath()`

```typescript
'use server'

import { revalidatePath } from 'next/cache'

export async function createPost(data: PostData) {
  // Perform mutation
  const post = await db.posts.create(data)

  // Revalidate affected pages
  revalidatePath('/posts') // Revalidate list page
  revalidatePath(`/posts/${post.id}`) // Revalidate post detail

  return post
}
```

### Tag-based Revalidation with `revalidateTag()`

```typescript
'use server'

import { revalidateTag } from 'next/cache'

export async function updateUser(id: string, data: UserData) {
  // Perform mutation
  const user = await db.users.update(id, data)

  // Revalidate by tag (more granular)
  revalidateTag(`user-${id}`) // Specific user
  revalidateTag('user-list') // User listing

  return user
}
```

## Patterns

### Pattern 1: Revalidate on Mutation

```typescript
'use server'

import { revalidatePath } from 'next/cache'

export async function deleteComment(commentId: string) {
  // Verify authorization
  const session = await getSession()
  if (!session?.user?.id) throw new Error('Unauthorized')

  // Get comment to find parent post
  const comment = await db.comments.findById(commentId)
  if (comment.authorId !== session.user.id) throw new Error('Unauthorized')

  // Delete comment
  await db.comments.delete(commentId)

  // Revalidate parent post page
  revalidatePath(`/posts/${comment.postId}`)

  return { success: true }
}
```

### Pattern 2: Selective Revalidation

```typescript
'use server'

export async function updatePostDraft(postId: string, content: string) {
  // Only revalidate draft editing pages, not public pages
  // (Drafts aren't visible publicly, so no need to revalidate)

  await db.posts.updateDraft(postId, content)

  // Only revalidate editor page
  revalidatePath(`/editor/${postId}`)

  // Don't revalidate public pages since draft isn't public
}
```

### Pattern 3: Cascade Revalidation

```typescript
'use server'

export async function publishPost(postId: string) {
  // Get post details
  const post = await db.posts.findById(postId)

  // Publish the post
  await db.posts.publish(postId)

  // Revalidate all affected pages (cascade)
  revalidatePath(`/posts/${postId}`) // Post detail page
  revalidatePath('/posts') // Posts list page
  revalidatePath(`/users/${post.authorId}`) // Author's profile
  revalidatePath('/feed') // Feed/homepage if it shows posts

  return { success: true }
}
```

### Pattern 4: Tag-based Grouping

```typescript
'use server'

import { revalidateTag } from 'next/cache'

// When caching data (in use case or fetcher)
async function getUser(id: string) {
  return await cache(
    async () => db.users.findById(id),
    [`user-${id}`], // Cache key
    { tags: [`user-${id}`, 'user'] }, // Tags for grouping
  )
}

// When updating, revalidate by tag
export async function updateUserProfile(id: string, data: UserData) {
  const result = await db.users.update(id, data)

  // Revalidate this specific user across all pages
  revalidateTag(`user-${id}`)

  // Or revalidate all users
  revalidateTag('user')

  return result
}
```

## Advanced Patterns

### Pattern: Smart Revalidation Based on Changes

```typescript
'use server'

export async function updateProduct(id: string, changes: Partial<Product>) {
  const oldProduct = await db.products.findById(id)
  const newProduct = await db.products.update(id, changes)

  // Only revalidate if certain fields changed
  if (oldProduct.price !== newProduct.price) {
    revalidatePath('/products') // Public listing affected by price
    revalidatePath('/search') // Search results affected by price
  }

  if (oldProduct.name !== newProduct.name) {
    revalidatePath(`/products/${id}`) // Product detail affected
  }

  if (oldProduct.status !== newProduct.status) {
    revalidatePath('/admin/products') // Admin dashboard affected
  }

  return newProduct
}
```

### Pattern: Batch Revalidation

```typescript
'use server'

export async function archiveOldPosts() {
  const oldPosts = await db.posts.findOlder('30 days')
  const updated = await db.posts.archiveMany(oldPosts.map((p) => p.id))

  // Revalidate all affected pages at once
  const pathsToRevalidate = [
    '/posts',
    '/feed',
    ...oldPosts.map((p) => `/posts/${p.id}`),
  ]

  pathsToRevalidate.forEach((path) => revalidatePath(path))

  return { archived: updated.length }
}
```

### Pattern: Cache with Custom Expiration

```typescript
// In a use case or fetcher
async function getCachedUserPosts(userId: string, opts = {}) {
  const revalidate = opts.revalidate ?? 60 // 60 seconds default

  return unstable_cache(
    async () => db.posts.findByUserId(userId),
    [`user-posts-${userId}`],
    {
      tags: [`user-posts-${userId}`],
      revalidate, // Time-based revalidation
    },
  )()
}

// Then revalidate on demand when user creates post
;('use server')
export async function createPost(data: PostData) {
  const post = await db.posts.create(data)

  // Revalidate cached user posts
  revalidateTag(`user-posts-${post.authorId}`)

  return post
}
```

## Best Practices

### 1. Revalidate Minimally but Completely

```typescript
// ✅ Good — Revalidate only what changed
export async function updateCommentText(commentId: string, text: string) {
  await db.comments.update(commentId, { text })
  revalidatePath(`/posts/${postId}`) // Only affected post
}

// ❌ Poor — Revalidating everything
export async function updateCommentText(commentId: string, text: string) {
  await db.comments.update(commentId, { text })
  revalidatePath('/') // Overkill!
}
```

### 2. Use Tags for Related Data

```typescript
// ✅ Good — Semantic tags
revalidateTag(`user-${userId}`)
revalidateTag(`post-${postId}`)
revalidateTag('user-list')

// ❌ Vague — Hard to understand
revalidateTag('cache')
revalidateTag('data')
```

### 3. Document Revalidation Dependencies

```typescript
'use server'

/**
 * Update user profile
 *
 * Triggers revalidation:
 * - /profile (user's profile page)
 * - /users (if public user list)
 * - Feed/posts (if publishes user updates)
 */
export async function updateProfile(data: ProfileData) {
  await db.users.update(getCurrentUserId(), data)

  revalidatePath('/profile')
  revalidatePath('/users') // May not be needed
  revalidateTag('user-posts') // Posts by this user
}
```

### 4. Handle Cascading Mutations

```typescript
// Deleting a post cascades to comments, likes, etc.
'use server'

export async function deletePost(postId: string) {
  // Delete post and cascade
  const post = await db.posts.findById(postId)
  await db.posts.delete(postId)

  // Cascade: comments, likes, etc. are deleted via DB constraints
  // Revalidate all affected pages

  // Direct post pages
  revalidatePath(`/posts/${postId}`) // 404 after deletion
  revalidatePath('/posts') // Remove from list

  // Author's profile
  revalidatePath(`/users/${post.authorId}`)

  // Feed/home if it shows posts
  revalidatePath('/feed')

  // Search index if applicable
  revalidateTag('search')
}
```

## Common Patterns by Feature

### Blog Post Management

```typescript
'use server'

export async function createBlogPost(data: BlogPostData) {
  const post = await db.posts.create(data)

  // Revalidate blog listing and homepage
  revalidatePath('/blog')
  revalidatePath('/') // If homepage shows recent posts

  return post
}

export async function publishDraft(postId: string) {
  const post = await db.posts.publish(postId)

  // Goes from draft → published
  revalidatePath(`/blog/${post.slug}`)
  revalidatePath('/blog')
  revalidatePath('/feed')
}

export async function updateBlogPost(postId: string, updates: any) {
  await db.posts.update(postId, updates)

  // Revalidate the post and list
  revalidatePath(`/blog/${postId}`)
  revalidatePath('/blog')
}
```

### User Comments

```typescript
'use server'

export async function postComment(postId: string, text: string) {
  const comment = await db.comments.create({ postId, text })

  // Only revalidate the post page (comment count/thread)
  revalidatePath(`/posts/${postId}`)
}

export async function deleteComment(commentId: string) {
  const comment = await db.comments.findById(commentId)
  await db.comments.delete(commentId)

  // Revalidate parent post
  revalidatePath(`/posts/${comment.postId}`)
}
```

### E-Commerce Product Stock

```typescript
'use server'

export async function updateProductStock(productId: string, quantity: number) {
  const product = await db.products.update(productId, { quantity })

  // Revalidate multiple pages that show stock
  revalidatePath(`/products/${productId}`) // Product page
  revalidatePath('/products') // Category/list view
  revalidatePath('/search') // Search results
  revalidateTag('cart') // Might affect cart displays
}
```

## Troubleshooting

### Issue: Changes not showing up

**Problem:** Forgot to call `revalidatePath()` or `revalidateTag()`

**Solution:**

```typescript
'use server'

export async function updateItem(id: string, data: any) {
  await db.items.update(id, data)

  // ✅ Add revalidation
  revalidatePath(`/items/${id}`)
  revalidatePath('/items')
}
```

### Issue: Too many pages being revalidated

**Problem:** Revalidating entire routes unnecessarily

**Solution:** Be more specific with paths:

```typescript
// ❌ Broad
revalidatePath('/')

// ✅ Specific
revalidatePath(`/items/${itemId}`)
revalidatePath('/items')
```

### Issue: Performance degradation

**Problem:** Revalidating too frequently

**Solution:** Combine related updates or use tags:

```typescript
// Instead of revalidating on every small change
// Group related changes and revalidate once

revalidateTag('user')
// This will update all pages tagged with 'user'
```

## Resources

- [Next.js Data Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
- [Server Actions](./SERVER_ACTIONS.md)
- [Caching Best Practices](https://web.dev/performance-optimization/)

---

**Last Updated:** April 14, 2026 | **Framework:** Next.js 16
