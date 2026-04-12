import { describe, expect, it } from 'vitest'

import {
  allItemTags,
  cacheTags,
  serverResourceCacheTags,
} from '@infra/cache-tags'

describe('cacheTags', () => {
  it('builds item detail tag', () => {
    expect(cacheTags.itemDetail('x')).toBe('tag:item:x')
  })

  it('builds items list tag with and without scope', () => {
    expect(cacheTags.itemsList()).toBe('tag:items:list')
    expect(cacheTags.itemsList('abc')).toBe('tag:items:list:abc')
  })

  it('exposes serverResourceCacheTags and allItemTags', () => {
    expect(serverResourceCacheTags.items).toBe('tag:items:list')
    expect(serverResourceCacheTags.profile).toBe(cacheTags.profile)
    const all = allItemTags()
    expect(Array.isArray(all)).toBe(true)
    expect(all[0]).toBe('tag:items:list')
  })
})
