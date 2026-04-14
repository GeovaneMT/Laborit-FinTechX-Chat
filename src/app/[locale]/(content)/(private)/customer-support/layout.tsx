import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Support',
  description: 'Customer Support',
  openGraph: {
    title: 'Customer Support',
    description: 'Customer Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Support',
    description: 'Customer Support',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
