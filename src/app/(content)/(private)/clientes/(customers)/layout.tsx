import { TypographyH2 } from '@ui/typography/hx/h2'

import type { Metadata } from 'next'

interface customerIndexLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Clientes',
  description: 'Clientes AutoFlow',
  openGraph: {
    title: 'Clientes',
    description: 'Clientes AutoFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clientes',
    description: 'Clientes AutoFlow',
  },
}

const customerIndexLayout = ({ children }: customerIndexLayoutProps) => (
  <>
    <TypographyH2>Clientes</TypographyH2>
    {children}
  </>
)
export default customerIndexLayout
