# Cache & Revalidation Guide

## Quick Reference

### Cache Tags (src/infra/cache-tags.ts)

```typescript
export const cacheTags = {
  profile: 'tag:profile',
  dashboard: 'tag:dashboard',
  itemsList: (scope?: string) =>
    scope ? `tag:items:list:${scope}` : 'tag:items:list',
  itemDetail: (id: string) => `tag:item:${id}`,
} as const
```

### Revalidation in Server Actions

In `wrapServerActionMutation` and `wrapServerActionResult`, always use:

```typescript
revalidateTag(tag, 'max') // ✅ Correct - Next.js 16 syntax
revalidateTag(tag) // ❌ Deprecated - will fail
```

The `'max'` profile enables **stale-while-revalidate** semantics:

- Marks data as stale
- Serves stale content on next request
- Fetches fresh content in background

## Cache Revalidation Flow

### 1. Query Action (Read)

```typescript
// Optional revalidation if data needs refresh
export const getCustomersAction = async () => {
  const reply = await fetchCustomers()

  return await wrapServerActionResult(reply, {
    revalidateTags: ['tag:items:list'], // Optional
  })
}
```

### 2. Mutation Action (Write)

```typescript
// Always revalidate affected tags
export const createPhoneAction = async (input: CreatePhoneInput) => {
  const reply = await createPhone(input)

  return await wrapServerActionMutation(reply, 'Saved', {
    revalidateTags: ['tag:customer:' + input.userId, 'tag:profile'],
  })
}
```

## Next.js 16 Specifics

### revalidateTag() Signature

```typescript
// REQUIRED: Both parameters must be provided
revalidateTag(tag: string, profile: string | CacheLifeConfig): void

// Profile options:
// 'max'                    → stale-while-revalidate (default, recommended)
// { expire: 0 }            → immediate expiration
// Full custom profile      → from cacheLife config
```

### revalidatePath() Signature

```typescript
// Optional second parameter
revalidatePath(path: string, type?: 'layout' | 'page'): void
```

## Best Practices

✅ **DO:**

- Use `'max'` profile for stale-while-revalidate semantics
- Use predefined tags from `src/infra/cache-tags.ts`
- Always revalidate on mutation success
- Never revalidate on error
- Group related tags together

❌ **DON'T:**

- Call `revalidateTag(tag)` with only one argument (deprecated)
- Revalidate on errors
- Create undefined/random tag names
- Mix old patterns with new N16 syntax

## Examples

### Single Tag Revalidation

```typescript
return await wrapServerActionMutation(reply, 'Created', {
  revalidateTags: [cacheTags.profile], // Tag from centralized registry
})
```

### Multiple Tags Revalidation

```typescript
return await wrapServerActionMutation(reply, 'Updated', {
  revalidateTags: [
    cacheTags.itemsList(),
    cacheTags.itemDetail(itemId),
    'tag:search-results', // Custom tag for this mutation
  ],
})
```

### With Path Revalidation

```typescript
return await wrapServerActionMutation(reply, 'Saved', {
  revalidateTags: ['tag:profile'],
  revalidatePaths: ['/profile', '/settings'], // Full page refresh
})
```

## Migration from Old Syntax

**Before (Deprecated):**

```typescript
for (const tag of tags) {
  revalidateTag(tag) // ❌ Missing profile argument
}
```

**After (Next.js 16):**

```typescript
for (const tag of tags) {
  revalidateTag(tag, 'max') // ✅ Correct syntax
}
```

## Route Handler Example

```typescript
// src/app/api/revalidate/route.ts
import { revalidateTag, revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const secret = request.headers.get('x-revalidate-secret')
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const body = (await request.json()) as { tag?: string; path?: string }

  if (body.tag) {
    revalidateTag(body.tag, 'max') // ✅ With profile parameter
  }

  if (body.path) {
    revalidatePath(body.path) // ✅ Correct
  }

  return NextResponse.json({ ok: true })
}
```

## Further Reading

- [Next.js 16 revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
- [Cache Tags Registry](../../../src/infra/cache-tags.ts)
- [Cache Life Presets](../../../src/infra/cache-life.ts)
- [Action Factory](../../../src/infra/server/actions/common/action-factory.ts)
