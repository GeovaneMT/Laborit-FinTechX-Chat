'use client'

import { toast } from 'sonner'
import { useEffect, useRef, useState } from 'react'

import { useDebounce } from '@pattern/hooks/use-debounce'
import { useValidateEmailMutation } from '@features/customers/view-models/email/use-validate-email-mutation'

import type { CreateAccountRequestDTO } from '@http/generated'

import type {
  FieldErrors,
  UseFormSetError,
  UseFormClearErrors,
} from 'react-hook-form'

interface useEmailAsyncValidationProps {
  email: string

  errors: FieldErrors<Omit<CreateAccountRequestDTO, 'username'>>
  setError: UseFormSetError<Omit<CreateAccountRequestDTO, 'username'>>
  clearErrors: UseFormClearErrors<Omit<CreateAccountRequestDTO, 'username'>>
}

export const useEmailAsyncValidation = ({
  email,
  errors,
  setError,
  clearErrors,
}: useEmailAsyncValidationProps) => {
  const debouncedEmail = useDebounce(email, 800)
  const lastValidated = useRef<string | null>(null)

  const { mutateAsync, isPending, error } = useValidateEmailMutation()

  const [emailValidationError, setEmailValidationError] =
    useState<Error | null>(null)

  useEffect(() => {
    if (Object.keys(errors).length > 0) return
    if (lastValidated.current === debouncedEmail) return
    if (!debouncedEmail || !debouncedEmail.includes('@')) return

    lastValidated.current = debouncedEmail

    toast.promise(
      mutateAsync(debouncedEmail, {
        onSuccess(data) {
          if (!data.isValid) {
            const message = data.errorMessage || 'Invalid email'

            setEmailValidationError(new Error(message))

            setError('email', {
              type: 'manual',
              message,
            })

            throw new Error(message)
          }

          setEmailValidationError(null)
          clearErrors('email')
        },
      }),
      {
        loading: 'Validando email...',
        success: 'Email disponível',
        error: (error: Error) => error.message,
      },
    )
  }, [errors, mutateAsync, clearErrors, setError, debouncedEmail])

  return {
    emailValidationError,
    mutationError: error,
    isValidatingEmail: isPending,
  }
}
