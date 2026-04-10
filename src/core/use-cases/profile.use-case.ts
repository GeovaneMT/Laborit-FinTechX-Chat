import type { Profile } from '@core/entities/profile'

export function formatProfileDisplayName(profile: Profile): string {
  return profile.displayName.trim()
}

export function isValidProfileEmail(profile: Profile): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(profile.email)
}
