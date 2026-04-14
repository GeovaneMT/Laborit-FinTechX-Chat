// import { auth } from '@clerk/nextjs/server'
import { HTTPError } from 'ky'

import type { Either } from '@core/either'
import { left, right } from '@core/either'
import { NotFoundError } from '@core/errors'
import {
  BadRequestError,
  ConflictError,
  CustomError,
  ForbiddenError,
  InternalServerError,
  UnauthorizedError,
} from '@core/errors'

import { api } from '@http/api-client'
import type { ProfileDto } from '@http/generated/models'

export type GetMeReplyProps = Either<
  | ConflictError
  | BadRequestError
  | ForbiddenError
  | UnauthorizedError
  | InternalServerError
  | NotFoundError,
  ProfileDto
>

export async function getMe(): Promise<GetMeReplyProps> {
  try {
    // const { getToken } = await auth()
    // const token = await getToken()
    // if (!token) {
    //   return left(
    //     new UnauthorizedError(
    //       'Sessão inválida ou expirada. Faça login novamente.',
    //     ),
    //   )
    // }

    const data = await api('me').json<ProfileDto>()

    return right(data)
  } catch (error) {
    if (error instanceof HTTPError) {
      const { status } = error.response

      switch (status) {
        case 409:
          return left(
            new ConflictError(
              'Conflito ao carregar o perfil do usuário. Tente novamente.',
            ),
          )
        case 403:
          return left(
            new ForbiddenError('Você não tem permissão para acessar o perfil.'),
          )
        case 401:
          return left(
            new UnauthorizedError(
              'Sessão inválida ou expirada. Faça login novamente.',
            ),
          )
        case 400:
          return left(
            new BadRequestError(
              'Não foi possível carregar o perfil do usuário.',
            ),
          )
        case 404:
          return left(new NotFoundError('Perfil do usuário não encontrado.'))
        case 500:
          return left(
            new InternalServerError(
              'Erro interno do servidor ao carregar o perfil.',
            ),
          )
        default:
          return left(
            new CustomError({
              statusCode: status,
              errorMessage: 'Erro inesperado ao carregar o perfil do usuário.',
            }),
          )
      }
    }

    return left(
      new CustomError({
        statusCode: 500,
        errorMessage: 'Erro inesperado ao carregar o perfil do usuário.',
      }),
    )
  }
}
