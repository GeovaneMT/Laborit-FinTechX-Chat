import { queryKeyRegistry } from '@infra/query-keys'

import { useQuery } from '@tanstack/react-query'

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
