import type { QueryFunction } from '@tanstack/react-query'

import type { Profile } from '@core/entities/profile'

import { getMeAction } from '@/infra/server/actions/get-me.action'
import type { queryKeyRegistry } from '@infra/query-keys'

type pageParam = never
export type ProfileQueryKey = typeof queryKeyRegistry.profile.current

export const profileQueryFn: QueryFunction<
  Profile,
  ProfileQueryKey,
  pageParam
> = async () => {
  const result = await getMeAction()

  if (!result.success) {
    throw new Error(result.error.message)
  }

  return result.data
}
