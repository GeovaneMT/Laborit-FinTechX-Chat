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
import type { ProfileDto, UpdateProfileDto } from '@http/generated/models'

export type UpdateProfileReplyProps = Either<
  | ConflictError
  | BadRequestError
  | ForbiddenError
  | UnauthorizedError
  | InternalServerError
  | NotFoundError,
  ProfileDto
>

export async function updateProfile(
  profile: UpdateProfileDto,
): Promise<UpdateProfileReplyProps> {
  try {
    const data = await api
      .patch('profile', {
        json: profile,
      })
      .json<{ profile: ProfileDto }>()

    return right(data.profile)
  } catch (error) {
    if (error instanceof HTTPError) {
      const { status } = error.response

      switch (status) {
        case 409:
          return left(
            new ConflictError(
              'Conflito ao atualizar o perfil do usuário. Tente novamente.',
            ),
          )
        case 403:
          return left(
            new ForbiddenError(
              'Você não tem permissão para atualizar o perfil.',
            ),
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
              'Não foi possível atualizar o perfil do usuário.',
            ),
          )
        case 404:
          return left(new NotFoundError('Perfil do usuário não encontrado.'))
        case 500:
          return left(
            new InternalServerError(
              'Erro interno do servidor ao atualizar o perfil.',
            ),
          )
        default:
          return left(
            new CustomError({
              statusCode: status,
              errorMessage: 'Erro inesperado ao atualizar o perfil do usuário.',
            }),
          )
      }
    }

    return left(
      new CustomError({
        statusCode: 500,
        errorMessage: 'Erro inesperado ao atualizar o perfil do usuário.',
      }),
    )
  }
}
