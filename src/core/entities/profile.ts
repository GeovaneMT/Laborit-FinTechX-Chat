export type Profile = {
  email: string
  displayName: string
  accountSecurity: number
  avatarUrl: string
}

export const createProfile = (params: Profile): Profile => params
