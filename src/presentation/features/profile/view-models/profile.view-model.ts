import { useQuery } from '@tanstack/react-query'

import { queryKeyRegistry } from '@infra/query-keys'

export function useProfileViewModel() {
  const { data: profile, isLoading } = useQuery({
    queryKey: queryKeyRegistry.profile.current,
    queryFn: async () => {
      // Fetch profile logic
      return { displayName: 'John Doe', email: 'john@example.com' }
    },
  })

  return {
    profile,
    isLoading,
  }
}
