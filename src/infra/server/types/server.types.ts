export interface ServerActionError {
  code: string
  message: string
  statusCode?: number
}

export interface ServerActionSuccessResult<T> {
  success: true
  data: T
}

export interface ServerActionErrorResult {
  success: false
  error: ServerActionError
}

export type ServerActionResult<T> =
  | ServerActionSuccessResult<T>
  | ServerActionErrorResult

export interface ServerActionMutationResult {
  success: boolean
  message?: string
  error?: ServerActionError
}

export interface ServerActionOptions {
  revalidateTags?: string[]
  revalidatePaths?: string[]
  validateInput?: boolean
  onError?: (error: ServerActionError) => void
}
