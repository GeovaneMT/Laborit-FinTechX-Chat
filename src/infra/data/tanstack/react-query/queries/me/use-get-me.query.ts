import { useSuspenseQuery } from '@tanstack/react-query'

import { profileQueryFn } from '@/infra/data/query-functions/me/get-me.query'
import { queryKeyRegistry } from '@/infra/query-keys'

export const useGetMeQuery = () => {
  return useSuspenseQuery({
    queryKey: queryKeyRegistry.profile.current,
    queryFn: profileQueryFn,

    gcTime: Infinity,
    staleTime: Infinity,

    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}
