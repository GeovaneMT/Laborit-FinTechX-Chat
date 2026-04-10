import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
}

export function OnboardingLayout({ children, title }: Props) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-6 px-4 py-10">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {children}
    </div>
  )
}
