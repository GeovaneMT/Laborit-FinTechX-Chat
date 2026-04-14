export type ProfileDto = {
  displayName: string
  email: string
  accountSecurity: number
  avatarUrl: string
}

export type UpdateProfileDto = {
  email: string
  displayName: string
}
