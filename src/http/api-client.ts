import ky from 'ky'

export const api = ky.create({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_PUBLIC_API_BASE_URL,
})
