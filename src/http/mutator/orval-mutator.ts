import { api } from '@http/api-client'

export const http = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const normalizedUrl = url.replace(/^\/+/, '')
  const response = await api(normalizedUrl, options)
  return response.json<T>()
}
