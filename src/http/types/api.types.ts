export type Error = {
  code: string
  message: string
}

export type Success<T> = {
  data: T
}
