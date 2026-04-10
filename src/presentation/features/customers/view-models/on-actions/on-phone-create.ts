import type { UseFormReturn } from 'react-hook-form'
import type { CreatePhoneRequestDto } from '@http/generated'

export interface onPhoneCreateSubmitProps {
  isValid: boolean

  phoneData: CreatePhoneRequestDto

  form: UseFormReturn<CreatePhoneRequestDto>

  phoneValidationError:
    | {
        status?: number
        message?: string
      }
    | null
    | undefined

  createPhone: (phoneData: CreatePhoneRequestDto) => Promise<{
    message?: string
    errorMessage?: string
  }>
}

export const onPhoneCreateSubmit = async ({
  form,
  isValid,
  phoneData,
  createPhone,
  phoneValidationError,
}: onPhoneCreateSubmitProps) => {
  const { setFocus, setError } = form

  const validateForm = () => {
    if (phoneValidationError) {
      setFocus('number')

      setError('number', {
        type: 'manual',
        message: phoneValidationError.message,
      })

      throw new Error(phoneValidationError.message)
    }

    if (!isValid) {
      throw new Error('Preencha todos os campos de forma correta.')
    }
  }

  const submitPhone = async () => {
    const { errorMessage } = await createPhone(phoneData)

    if (errorMessage) {
      throw new Error(`Erro: ${errorMessage}`)
    }
  }

  validateForm()
  await submitPhone()
}
