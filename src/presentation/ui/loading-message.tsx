import { Spinner } from '@ui/spinner'

export const LoadingMessage = ({ message }: { message?: string }) => (
  <section className="flex items-center justify-center gap-4">
    <Spinner />
    {message ?? 'Carregando...'}
  </section>
)
