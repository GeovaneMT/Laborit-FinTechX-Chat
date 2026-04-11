'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Either } from '@core/either'
import type {
  ServerActionError,
  ServerActionOptions,
  ServerActionResult,
} from '@/infra/server/types/server.types'

function mapErrorToServerActionError(error: unknown): ServerActionError {
  if (
    error &&
    typeof error === 'object' &&
    'errorMessage' in error &&
    'statusCode' in error
  ) {
    const customError = error as {
      errorMessage: string
      statusCode: number
      code?: string
    }
    return {
      code: customError.code || `ERROR_${customError.statusCode}`,
      message: customError.errorMessage,
      statusCode: customError.statusCode,
    }
  }

  if (error instanceof Error) {
    return {
      code: 'UNKNOWN_ERROR',
      message: error.message,
      statusCode: 500,
    }
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: 'An unexpected error occurred',
    statusCode: 500,
  }
}

export async function wrapServerActionResult<T>(
  either: Either<unknown, T>,
  options?: ServerActionOptions,
): Promise<ServerActionResult<T>> {
  if (either.isLeft()) {
    const error = mapErrorToServerActionError(either.value)

    if (options?.onError) {
      options.onError(error)
    }

    return {
      success: false,
      error,
    }
  }

  if (options?.revalidateTags) {
    for (const tag of options.revalidateTags) {
      try {
        revalidateTag(tag, 'max')
      } catch (e) {
        console.warn(`Failed to revalidate tag: ${tag}`)
      }
    }
  }

  if (options?.revalidatePaths) {
    for (const path of options.revalidatePaths) {
      try {
        revalidatePath(path)
      } catch (e) {
        console.warn(`Failed to revalidate path: ${path}`)
      }
    }
  }

  const rightEither = either as unknown as { value: T }
  return {
    success: true,
    data: rightEither.value,
  }
}

export async function wrapServerActionMutation<T>(
  either: Either<unknown, T>,
  successMessage: string = 'Operation completed successfully',
  options?: ServerActionOptions,
): Promise<{ success: boolean; message?: string; error?: ServerActionError }> {
  if (either.isLeft()) {
    const error = mapErrorToServerActionError(either.value)

    if (options?.onError) {
      options.onError(error)
    }

    return {
      success: false,
      error,
    }
  }

  if (options?.revalidateTags) {
    for (const tag of options.revalidateTags) {
      try {
        revalidateTag(tag, 'max')
      } catch (e) {
        console.warn(`Failed to revalidate tag: ${tag}`)
      }
    }
  }

  if (options?.revalidatePaths) {
    for (const path of options.revalidatePaths) {
      try {
        revalidatePath(path)
      } catch (e) {
        console.warn(`Failed to revalidate path: ${path}`)
      }
    }
  }

  return {
    success: true,
    message: successMessage,
  }
}
