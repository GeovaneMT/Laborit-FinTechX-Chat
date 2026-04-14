import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Methods',
  description: 'Payment Methods',
  openGraph: {
    title: 'Payment Methods',
    description: 'Payment Methods',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Methods',
    description: 'Payment Methods',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
