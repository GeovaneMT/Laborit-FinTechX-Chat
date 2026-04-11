import type { ZodError } from 'zod/v4'

export function mapZodErrorMessages<T>(
  error: ZodError<T>,
): Record<string, string> {
  return error.issues.reduce<Record<string, string>>((result, issue) => {
    const path = issue.path.length ? issue.path.join('.') : 'root'
    result[path] = issue.message
    return result
  }, {})
}

export function getFirstZodErrorMessage(error: ZodError): string {
  return error.issues[0]?.message ?? 'Invalid input.'
}
