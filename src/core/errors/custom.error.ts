export class CustomError {
  readonly statusCode: number
  readonly errorMessage: string
  readonly code: string

  constructor(payload: {
    statusCode: number
    errorMessage: string
    code?: string
  }) {
    this.statusCode = payload.statusCode
    this.errorMessage = payload.errorMessage
    this.code = payload.code ?? 'CUSTOM_ERROR'
  }
}

export class BadRequestError extends CustomError {
  constructor(errorMessage: string) {
    super({
      statusCode: 400,
      errorMessage,
      code: 'BAD_REQUEST',
    })
  }
}

export class UnauthorizedError extends CustomError {
  constructor(errorMessage: string) {
    super({
      statusCode: 401,
      errorMessage,
      code: 'UNAUTHORIZED',
    })
  }
}

export class ForbiddenError extends CustomError {
  constructor(errorMessage: string) {
    super({
      statusCode: 403,
      errorMessage,
      code: 'FORBIDDEN',
    })
  }
}

export class NotFoundError extends CustomError {
  constructor(errorMessage: string) {
    super({
      statusCode: 404,
      errorMessage,
      code: 'NOT_FOUND',
    })
  }
}

export class ConflictError extends CustomError {
  constructor(errorMessage: string) {
    super({
      statusCode: 409,
      errorMessage,
      code: 'CONFLICT',
    })
  }
}

export class InternalServerError extends CustomError {
  constructor(errorMessage: string) {
    super({
      statusCode: 500,
      errorMessage,
      code: 'INTERNAL_SERVER_ERROR',
    })
  }
}
