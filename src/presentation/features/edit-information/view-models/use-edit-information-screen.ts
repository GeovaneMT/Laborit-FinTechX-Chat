'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

export function useEditInformationScreen() {
  const router = useRouter()
  const [name, setName] = useState('João Silva')
  const [email, setEmail] = useState('joao@example.com')

  const handleSubmit = useCallback(
    (event: React.FormEvent, onSuccess: () => void) => {
      event.preventDefault()
      onSuccess()
      router.push('/profile')
    },
    [router],
  )

  return {
    name,
    email,
    setName,
    setEmail,
    handleSubmit,
  }
}
