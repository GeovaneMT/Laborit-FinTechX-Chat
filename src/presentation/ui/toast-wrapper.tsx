'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { toast } from 'sonner'

interface ToastWrapperProps {
  message: string
  error?: boolean
  success?: boolean
}

export function ToastWrapper({ message, error, success }: ToastWrapperProps) {
  const hasShownToast = useRef(false)
  const router = useRouter()

  useEffect(() => {
    if (hasShownToast.current) return

    hasShownToast.current = true

    if (success) {
      toast.success(message || 'Operação realizada com sucesso.')
    } else if (error) {
      toast.error(message || 'Ocorreu um erro.')
    } else {
      toast(message)
    }

    router.back()
  }, [message, success, error, router])

  return null
}
