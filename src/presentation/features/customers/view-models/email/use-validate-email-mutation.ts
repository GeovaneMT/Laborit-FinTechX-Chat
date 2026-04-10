'use client'

import { useMutation } from '@tanstack/react-query'
import { validateEmailAction } from '@actions/validate-email.action'

export const useValidateEmailMutation = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      const sanitized = email.trim().toLowerCase()
      return validateEmailAction(sanitized)
    },
  })
}
