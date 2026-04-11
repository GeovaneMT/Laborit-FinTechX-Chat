'use client'

import { useState } from 'react'

import { parseProfileInput } from '@core/schemas/profile.schema'

export function useProfileForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = async (data: unknown) => {
    setIsSubmitting(true)
    try {
      if (
        !data ||
        (typeof data === 'object' && Object.keys(data).length === 0)
      ) {
        console.log('No profile payload provided, skipping validation.')
        return
      }

      const validatedProfile = parseProfileInput(data)
      console.log('Submitting profile:', validatedProfile)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, submitForm }
}
