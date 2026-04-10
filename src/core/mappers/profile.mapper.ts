import type { Profile } from '@core/entities/profile'
import type { ProfileDto } from '@core/types/profile-dto'

export function mapProfileDtoToProfile(dto: ProfileDto): Profile {
  return {
    displayName: dto.displayName,
    email: dto.email,
  }
}
