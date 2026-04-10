import { slugify } from '@utils/slugfy'

import { createCustomerAction } from '@actions/create-customer.action'

import type { UseFormReturn } from 'react-hook-form'

import type { CreateAccountRequestDTO } from '@http/generated'

import { type PhoneStoreEntity } from '@zustand/phone.store'
import type { stepsStateProps } from '@features/customers/view-models/create/use-customer-create-steps'

interface onCustomerCreateHandleStepProps
  extends Omit<stepsStateProps, 'step'> {
  isValid: boolean

  setAccordionVisibility: (value: 'OPENED' | 'CLOSED') => void

  form: UseFormReturn<Omit<CreateAccountRequestDTO, 'username'>>

  emailValidationError:
    | {
        status?: number
        message?: string
      }
    | null
    | undefined
}

export interface onCustomerCreateSubmitProps {
  isValid: boolean

  phones: PhoneStoreEntity[]

  customerData: Omit<CreateAccountRequestDTO, 'username'>

  form: UseFormReturn<Omit<CreateAccountRequestDTO, 'username'>>

  emailValidationError:
    | {
        status?: number
        message?: string
      }
    | null
    | undefined
}

export const onCustomerCreateHandleStep = ({
  form,
  steps,
  setStep,
  isValid,
  nextIndex,
  emailValidationError,
  setAccordionVisibility,
}: onCustomerCreateHandleStepProps) => {
  const { setFocus, setError } = form

  const phoneStep = steps.indexOf('phones')
  const nextStepIsPhone = nextIndex < phoneStep

  const nextStep = steps[nextIndex]
  const isLastStep = nextIndex === steps.length

  const validateForm = () => {
    if (emailValidationError) {
      setFocus('email')

      setError('email', {
        type: 'manual',
        message: emailValidationError.message,
      })

      throw new Error(emailValidationError.message)
    }

    if (!isValid) {
      throw new Error('Preencha todos os campos de forma correta.')
    }
  }

  const goToNextStep = () => {
    if (isLastStep) return

    if (nextStepIsPhone) {
      setAccordionVisibility('OPENED')

      return {
        successMessage: 'Adicione um telefone',
      }
    }

    setStep(nextStep)

    return {
      successMessage: null,
    }
  }

  validateForm()
  goToNextStep()
}

export const onCustomerCreateSubmit = async ({
  form,
  phones,
  isValid,
  customerData,
  emailValidationError,
}: onCustomerCreateSubmitProps) => {
  const { setFocus, setError } = form

  const validateForm = () => {
    if (emailValidationError) {
      setFocus('email')

      setError('email', {
        type: 'manual',
        message: emailValidationError.message,
      })

      throw new Error(emailValidationError.message)
    }

    if (!isValid) {
      throw new Error('Preencha todos os campos de forma correta.')
    }
  }

  const submitCustomer = async () => {
    const username = slugify(
      `${customerData.firstName}-${customerData.lastName}-${Date.now()}`,
    )

    const reply = await createCustomerAction({
      ...customerData,
      phones,
      username,
    })

    if (!reply.success) {
      throw new Error(`Erro ${reply.statusCode}: ${reply.errorMessage}`)
    }

    return {
      successMessage: 'Cliente criado com sucesso!',
      data: reply,
    }
  }

  validateForm()
  await submitCustomer()
}
