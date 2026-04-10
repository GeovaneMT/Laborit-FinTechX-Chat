import { useQuery } from '@tanstack/react-query'

import { queryKeys } from '@infra/query-keys'

export function useProfileViewModel() {
  const { data: profile, isLoading } = useQuery({
    queryKey: queryKeys.profiles.detail('current'),
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
