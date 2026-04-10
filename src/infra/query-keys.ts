export const queryKeyRegistry = {
  dashboard: {
    summary: ['dashboard', 'summary'] as const,
  },
  profile: {
    current: ['profile', 'current'] as const,
  },
  items: {
    list: (filters?: Record<string, string>) =>
      ['items', 'list', filters ?? {}] as const,
    detail: (id: string) => ['items', 'detail', id] as const,
  },
  settings: {
    preferences: ['settings', 'preferences'] as const,
  },
} as const

export const customerDetailsByIdQueryKey = (id: string) =>
  ['customer', 'details', 'id', id] as const

export const customerDetailsByEmailQueryKey = (email: string) =>
  ['customer', 'details', 'email', email] as const
