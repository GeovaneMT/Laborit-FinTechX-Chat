export const cacheTags = {
  dashboard: "tag:dashboard",
  profile: "tag:profile",
  itemsList: (scope?: string) =>
    scope ? `tag:items:list:${scope}` : "tag:items:list",
  itemDetail: (id: string) => `tag:item:${id}`,
  settings: "tag:settings",
} as const;

export function allItemTags() {
  return [cacheTags.itemsList(), cacheTags.profile] as const;
}
