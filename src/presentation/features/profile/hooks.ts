import { useState } from 'react'

export function useProfileForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = async (data: Record<string, unknown>) => {
    setIsSubmitting(true)
    try {
      // Submit logic
      console.log('Submitting profile:', data)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, submitForm }
}
