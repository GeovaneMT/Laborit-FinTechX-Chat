export type MutatorInit = RequestInit & {
  baseUrl?: string
}

export async function defaultMutator<T>(
  url: string,
  init: MutatorInit,
): Promise<T> {
  const base = init.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE ?? ''
  const res = await fetch(`${base}${url}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || res.statusText)
  }
  return (await res.json()) as T
}
