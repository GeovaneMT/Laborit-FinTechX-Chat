'use client'

import Image from 'next/image'

import { TypographyMuted } from '@ui/typography/basic/muted'
import { TypographyH1 } from '@ui/typography/hx/h1'

import { APP_NAME, APP_VERSION } from '@/core/constants'
import { cn } from '@/core/utils/cn'

type SplashScreenProps = {
  className?: string
}

export const SplashScreen = ({ className }: SplashScreenProps) => (
  <section
    className={cn(
      `ointer-events-none flex h-screen flex-col p-10 select-none`,
      className,
    )}
  >
    <div className="flex-1 place-content-center place-self-center">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={120}
        height={120}
        className="w-32 animate-spin"
      />
    </div>
    <TypographyH1 className="place-self-center">{APP_NAME}</TypographyH1>
    <TypographyMuted className="place-self-center">
      version {APP_VERSION}
    </TypographyMuted>
  </section>
)
