'use client'

import { useHandlePhones } from '@zustand/phone.store'

export type StepsState =
  | 'loading'
  | 'add-phone'
  | 'show-errors'
  | 'validating-phone'
  | undefined

interface usePhoneStoreCreateStateProps {
  isLoading: boolean
  hasErrors: boolean
  isValidating: boolean
}

export const usePhoneStoreCreateState = ({
  isLoading,
  hasErrors,
  isValidating,
}: usePhoneStoreCreateStateProps): StepsState => {
  const { isPhoneInputEmpty } = useHandlePhones()

  if (isValidating) {
    return 'validating-phone'
  }

  if (isLoading) {
    return 'loading'
  }

  if (hasErrors) {
    return 'show-errors'
  }

  if (!isPhoneInputEmpty) {
    return 'add-phone'
  }
}
