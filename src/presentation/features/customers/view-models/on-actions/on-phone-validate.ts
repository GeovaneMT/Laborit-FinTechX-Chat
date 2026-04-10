'use client'

import { toast } from 'sonner'
import { validatePhoneAction } from '@actions/validate-phone.action'

import type { Dispatch, SetStateAction, startTransition } from 'react'

import type {
  FieldError,
  UseFormSetError,
  UseFormClearErrors,
} from 'react-hook-form'

interface OnPhoneValidateProps {
  number: string
  errors: FieldError | undefined
  startValidatePhoneTransition: typeof startTransition

  setError: UseFormSetError<{
    number: string
  }>

  clearErrors: UseFormClearErrors<{
    number: string
  }>

  setPhoneValidationError: Dispatch<
    SetStateAction<
      | {
          status?: number
          message?: string
        }
      | null
      | undefined
    >
  >
}

export const onPhoneValidate = async ({
  number,
  errors,
  setError,
  clearErrors,
  setPhoneValidationError,
  startValidatePhoneTransition,
}: OnPhoneValidateProps) => {
  startValidatePhoneTransition(() => {
    toast.promise(
      async () => {
        if (!number || errors) throw new Error('Telefone inválido')

        setPhoneValidationError(null)

        const sanitizedPhone = number.trim()

        const { errorMessage, isValid, status } =
          await validatePhoneAction(sanitizedPhone)

        if (!isValid) {
          setError('number', { type: 'manual', message: errorMessage })
          setPhoneValidationError({ message: errorMessage, status })
          throw new Error(errorMessage)
        }

        clearErrors('number')
        return {
          success: true,
          message: 'O telefone escolhido está disponível',
        }
      },
      {
        loading: 'Verificando telefone...',
        error: (err: Error) => {
          return err.message
        },
        success: (res) => {
          return res?.message
        },
      },
    )
  })
}
