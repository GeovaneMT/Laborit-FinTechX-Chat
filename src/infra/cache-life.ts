export const cacheLifePresets = {
  short: { stale: 60, revalidate: 300, expire: 3600 },
  medium: { stale: 300, revalidate: 3600, expire: 86400 },
} as const
