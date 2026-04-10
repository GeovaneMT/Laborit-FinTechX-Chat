import { HTTPError } from 'ky'

import { Either, left, right } from '@core/either'

import { CustomError } from '@errors/custom.error'
import { ConflictError } from '@errors/conflict.error'
import { ForbiddenError } from '@errors/forbidden.error'
import { BadRequestError } from '@errors/bad-request.error'
import { InternalServerError } from '@errors/internal.error'
import { UnauthorizedError } from '@errors/unauthorized.error'
import { NotFoundError } from '@errors/resource-not-found.error'

import { validatePhone as validatePhoneApi } from '@http/generated'

import type { ValidatePhoneReplyDtoOutput } from '@http/generated/models'

type ValidatePhoneReplyProps = Either<
  | CustomError
  | NotFoundError
  | ConflictError
  | BadRequestError
  | InternalServerError,
  ValidatePhoneReplyDtoOutput
>

export const validatePhone = async (
  number: string,
): Promise<ValidatePhoneReplyProps> => {
  try {
    return right(await validatePhoneApi({ number }))
  } catch (error) {
    if (error instanceof HTTPError) {
      const { status } = error.response

      switch (status) {
        case 400:
          return left(
            new BadRequestError(
              'O telefone fornecido é inválido ou não pôde ser processado.',
            ),
          )
        case 403:
          return left(
            new ForbiddenError('Acesso negado para validação do telefone.'),
          )
        case 401:
          return left(
            new UnauthorizedError(
              'Não autorizado a realizar a validação do telefone.',
            ),
          )
        case 409:
          return left(
            new ConflictError(
              'Um cliente com esse telefone já foi cadastrado.',
            ),
          )
        case 500:
          return left(
            new InternalServerError(
              'Erro interno do servidor. Não foi possível validar o telefone.',
            ),
          )
        default:
          return left(
            new CustomError({
              statusCode: status,
              errorMessage:
                'Erro desconhecido. Não foi possível validar o telefone.',
            }),
          )
      }
    }

    return left(
      new CustomError({
        statusCode: 500,
        errorMessage: `Erro desconhecido. Não foi possível validar o telefone. Tente novamente mais tarde: ${error}`,
      }),
    )
  }
}
