'use client'

import { useState, type Dispatch, type SetStateAction } from 'react'

export interface stepsStateProps {
  nextIndex: number
  step: 'customer' | 'phones'
  steps: readonly ['customer', 'phones']
  setStep: Dispatch<SetStateAction<stepsStateProps['step']>>
}

export const useCustomerCreateSteps = () => {
  const steps = ['customer', 'phones'] as const
  type Steps = (typeof steps)[number]

  const [step, setStep] = useState<Steps>('customer')
  const nextIndex = steps.indexOf(step) + 1
  const isLastStep = nextIndex === steps.length

  return {
    step,
    steps,
    setStep,
    nextIndex,
    isLastStep,
  }
}
