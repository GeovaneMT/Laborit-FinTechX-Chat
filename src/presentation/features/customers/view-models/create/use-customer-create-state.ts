'use client'

import type { stepsStateProps } from '@features/customers/view-models/create/use-customer-create-steps'

import type { StepsState as PhoneStoreStepsState } from '@features/customers/view-models/phone/create/use-phone-store-create-submit-state'

export type StepsState =
  | 'add-phone'
  | 'loading-phone'
  | 'validating-phone'
  | 'show-phone-errors'
  //
  | 'loading'
  | 'validating'
  | 'show-errors'
  | 'advance-step'
  | 'create-customer'

export type SubmitConfig = {
  form: 'phoneCreateForm' | 'customerCreateForm'
  label: React.ReactNode
}

interface useCustomerCreateStateProps extends Omit<stepsStateProps, 'setStep'> {
  hasErrors: boolean
  isLoading: boolean
  isValidating: boolean
  canCreateCustomer: boolean
  phoneStoreStepsState: PhoneStoreStepsState
}

export const useCustomerCreateState = ({
  step,
  isLoading,
  hasErrors,
  isValidating,
  canCreateCustomer,
  phoneStoreStepsState,
}: useCustomerCreateStateProps): StepsState => {
  if (isValidating) {
    return 'validating'
  }

  if (step === 'phones' && phoneStoreStepsState === 'validating-phone') {
    return 'validating-phone'
  }

  if (isLoading) {
    return 'loading'
  }

  if (step === 'phones' && phoneStoreStepsState === 'loading') {
    return 'loading-phone'
  }

  if (hasErrors) {
    return 'show-errors'
  }

  if (step === 'phones' && phoneStoreStepsState === 'show-errors') {
    return 'show-phone-errors'
  }

  if (step === 'phones' && phoneStoreStepsState === 'add-phone') {
    return 'add-phone'
  }

  if (canCreateCustomer) {
    return 'create-customer'
  }

  return 'advance-step'
}
