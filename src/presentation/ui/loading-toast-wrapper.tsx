'use client'

import { toast } from 'sonner'
import { useEffect } from 'react'

export const LoadingFallback = () => {
  useEffect(() => {
    const id = toast.loading('Carregando...')

    return () => {
      toast.dismiss(id)
    }
  }, [])

  return null
}
