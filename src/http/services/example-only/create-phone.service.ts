// import { HTTPError } from 'ky'
// import { auth } from '@clerk/nextjs/server'

// import { Either, left, right } from '@core/either'

// import { CustomError } from '@errors/custom.error'
// import { ConflictError } from '@errors/conflict.error'
// import { ForbiddenError } from '@errors/forbidden.error'
// import { BadRequestError } from '@errors/bad-request.error'
// import { InternalServerError } from '@errors/internal.error'
// import { UnauthorizedError } from '@errors/unauthorized.error'
// import { NotFoundError } from '@errors/resource-not-found.error'

// import { createPhone as createPhoneApi } from '@http/generated'

// import type {
//   CreatePhoneRequestDto,
//   CreatedSuccessDtoOutput,
// } from '@http/generated/models'

// export type createPhoneReplyProps = Either<
//   | ConflictError
//   | BadRequestError
//   | ForbiddenError
//   | UnauthorizedError
//   | InternalServerError
//   | NotFoundError,
//   CreatedSuccessDtoOutput
// >

// interface createPhoneProps extends CreatePhoneRequestDto {
//   userId: string
// }

// export async function createPhone(
//   PhoneRequestData: createPhoneProps,
// ): Promise<createPhoneReplyProps> {
//   const { userId, ...dataRest } = PhoneRequestData

//   try {
//     const { getToken } = await auth()
//     const token = await getToken()
//     if (!token) {
//       return left(
//         new UnauthorizedError(
//           'Sessão inválida ou expirada. Faça login novamente.',
//         ),
//       )
//     }

//     return right(
//       await createPhoneApi({ userId }, dataRest, {
//         headers: { Authorization: `Bearer ${token}` },
//       }),
//     )
//   } catch (error) {
//     if (error instanceof HTTPError) {
//       const { status } = error.response

//       switch (status) {
//         case 409:
//           return left(
//             new ConflictError(
//               `Um telefone com esse número ${dataRest.number} já foi cadastrado. Tente novamente mais tarde.`,
//             ),
//           )
//         case 403:
//           return left(
//             new ForbiddenError('Não autorizado. Tente novamente mais tarde.'),
//           )
//         case 401:
//           return left(
//             new UnauthorizedError(
//               'Não autorizado. Tente novamente mais tarde.',
//             ),
//           )
//         case 400:
//           return left(
//             new BadRequestError(
//               'Não foi possível criar o telefone. Tente novamente mais tarde.',
//             ),
//           )
//         case 500:
//           return left(
//             new InternalServerError(
//               'Erro interno do servidor. Não foi possível criar o telefone. Tente novamente mais tarde.',
//             ),
//           )
//         default:
//           return left(
//             new CustomError({
//               statusCode: status,
//               errorMessage:
//                 'Erro desconhecido. Não foi possível criar o telefone. Tente novamente mais tarde.',
//             }),
//           )
//       }
//     }

//     return left(
//       new CustomError({
//         statusCode: 500,
//         errorMessage:
//           'Erro desconhecido. Não foi possível criar o telefone. Tente novamente mais tarde.',
//       }),
//     )
//   }
// }
