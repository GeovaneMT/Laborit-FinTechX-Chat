import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'History',
  description: 'Chat History',
  openGraph: {
    title: 'History',
    description: 'Chat History',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'History',
    description: 'Chat History',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
