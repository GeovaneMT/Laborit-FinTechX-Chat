import { ErrorCard } from '@ui/error-card'
import { TypographyH2 } from '@ui/typography/hx/h2'
import { TypographyLarge } from '@ui/typography/sizes/large'
import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const UserAlreadyLoggedModal = () => {
  const router = useRouter()

  return (
    <div>
      <div className="text-2xl font-bold">
        <TypographyH2 className="">
          Entrar na sua conta{' '}
          <TypographyLarge className="text-primary inline w-min font-bold uppercase">
            AutoFlow
          </TypographyLarge>
        </TypographyH2>
      </div>
      <ErrorCard
        title="Você já está logado"
        message="se você não for redirecionado automaticamente:"
        tips={[
          'Clique em voltar no botão abaixo.',
          'Volte para a página anterior.',
        ]}
        actionTitle="voltar"
        actionIcon={<ArrowLeftIcon />}
        action={() => router.back()}
      />
    </div>
  )
}
