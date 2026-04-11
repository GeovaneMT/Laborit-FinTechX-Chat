export type Profile = {
  displayName: string
  email: string
}

export const createProfile = (params: Profile): Profile => params
