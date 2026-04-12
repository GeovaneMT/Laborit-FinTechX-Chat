import type { z } from 'zod/v4'

import { err, ok, type Result } from '@core/contracts/result'
import type { Profile } from '@core/entities/profile'
import type { ProfileInput } from '@core/schemas/profile.schema'
import {
  profileSchema,
  safeParseProfileEmail,
} from '@core/schemas/profile.schema'

export function formatProfileDisplayName(profile: Profile): string {
  return profile.displayName.trim()
}

export function isValidProfileEmail(profile: Profile): boolean {
  const { success, error } = safeParseProfileEmail(profile.email)

  if (!success || error) {
    return false
  }

  return true
}

export function validateProfilePayload(
  payload: unknown,
): Result<Profile, z.ZodError<ProfileInput>> {
  const result = profileSchema.safeParse(payload)

  if (result.success) {
    return ok(result.data)
  }

  return err(result.error)
}
