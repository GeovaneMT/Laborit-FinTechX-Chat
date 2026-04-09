import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { Button } from '@ui/button'

import {
  Empty,
  EmptyTitle,
  EmptyHeader,
  EmptyContent,
  EmptyDescription,
} from '@shadcn/empty'

export const NotFound = () => (
  <div className="relative flex min-h-[70vh] flex-col items-center justify-center pb-12 text-center">
    <div className="from-background via-background to-muted/30 pointer-events-none absolute inset-0 -z-10 bg-linear-to-b opacity-60" />

    <Empty className="max-w-2xl">
      <EmptyHeader>
        <div className="relative mb-6">
          <h1 className="text-muted-foreground/5 text-[min(22vw,13rem)] leading-none font-black tracking-tighter select-none">
            404
          </h1>

          <div className="absolute inset-0 -bottom-4 flex items-center justify-center uppercase">
            <EmptyTitle className="from-primary via-primary/90 to-primary/70 bg-linear-to-r bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
              Página não encontrada
            </EmptyTitle>
          </div>
        </div>

        <EmptyDescription className="text-muted-foreground mx-auto max-w-md text-lg sm:text-xl">
          Parece que a página que você procura se perdeu no caminho...
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent className="pt-6">
        <Link href="/">
          <Button size="lg" className="gap-2 text-base">
            <div className="flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o início
            </div>
          </Button>
        </Link>
      </EmptyContent>
    </Empty>

    <div className="text-muted-foreground/60 absolute bottom-4 left-1/2 -translate-x-1/2 text-sm">
      <span className="from-muted-foreground/80 to-muted-foreground bg-linear-to-r bg-clip-text text-transparent">
        Error 404 — Page drifted into the void 🌌
      </span>
    </div>
  </div>
)
