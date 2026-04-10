import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novo Cliente',
  description: 'Criar novo cliente AutoFlow',
  openGraph: {
    title: 'Novo Cliente',
    description: 'Criar novo cliente AutoFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novo Cliente',
    description: 'Criar novo cliente AutoFlow',
  },
}

interface customerDetailsLayoutProps {
  children: React.ReactNode
}

const CustomerCreateLayout = ({ children }: customerDetailsLayoutProps) => {
  return <>{children}</>
}
export default CustomerCreateLayout
