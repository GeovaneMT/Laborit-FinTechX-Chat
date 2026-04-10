import { HTTPError } from 'ky'
import { auth } from '@clerk/nextjs/server'

import { Either, left, right } from '@core/either'

import { CustomError } from '@errors/custom.error'
import { ConflictError } from '@errors/conflict.error'
import { ForbiddenError } from '@errors/forbidden.error'
import { BadRequestError } from '@errors/bad-request.error'
import { InternalServerError } from '@errors/internal.error'
import { UnauthorizedError } from '@errors/unauthorized.error'
import { NotFoundError } from '@errors/resource-not-found.error'

import { fetchCustomers as fetchCustomersApi } from '@http/generated'

import type {
  FetchCustomersParams,
  CustomersDTOOutput,
} from '@http/generated/models'

type CustomersReplyProps = Either<
  | CustomError
  | NotFoundError
  | ConflictError
  | BadRequestError
  | InternalServerError,
  CustomersDTOOutput
>

export const fetchCustomers = async ({
  cursor = undefined,
  limit = 10,
  query,
}: FetchCustomersParams): Promise<CustomersReplyProps> => {
  const { getToken } = await auth()
  const token = await getToken()
  if (!token) {
    return left(
      new UnauthorizedError(
        'Sessão inválida ou expirada. Faça login novamente.',
      ),
    )
  }

  try {
    return right(
      await fetchCustomersApi(
        { cursor, limit, query },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      ),
    )
  } catch (error) {
    if (error instanceof HTTPError) {
      const { status } = error.response

      switch (status) {
        case 400:
          return left(
            new BadRequestError(
              'Não foi possível buscar os clientes. Tente novamente mais tarde.',
            ),
          )
        case 401:
          return left(
            new UnauthorizedError(
              'Não autorizado. Tente novamente mais tarde.',
            ),
          )
        case 403:
          return left(
            new ForbiddenError('Sem autorização. Tente novamente mais tarde.'),
          )
        case 404:
          return left(new NotFoundError('Nenhum cliente encontrado.'))
        case 500:
          return left(
            new InternalServerError(
              'Erro interno do servidor. Não foi possível buscar os clientes. Tente novamente mais tarde.',
            ),
          )
        default:
          return left(
            new CustomError({
              statusCode: status,
              errorMessage:
                'Erro desconhecido. Não foi possível buscar os clientes. Tente novamente mais tarde.',
            }),
          )
      }
    }

    return left(
      new CustomError({
        statusCode: 500,
        errorMessage:
          'Erro desconhecido. Não foi possível buscar os clientes. Tente novamente mais tarde.',
      }),
    )
  }
}
