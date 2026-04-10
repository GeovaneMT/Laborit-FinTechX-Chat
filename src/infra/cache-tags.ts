export const cacheTags = {
  profile: 'tag:profile',
  dashboard: 'tag:dashboard',

  itemsList: (scope?: string) =>
    scope ? `tag:items:list:${scope}` : 'tag:items:list',

  itemDetail: (id: string) => `tag:item:${id}`,
} as const

export const serverResourceCacheTags = {
  profile: cacheTags.profile,
  dashboard: cacheTags.dashboard,
  items: cacheTags.itemsList(),
} as const

export function allItemTags() {
  return [cacheTags.itemsList(), cacheTags.profile] as const
}
