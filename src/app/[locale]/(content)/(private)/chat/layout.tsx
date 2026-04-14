import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Enjoy a smarter life',
  openGraph: {
    title: 'Chat',
    description: 'Enjoy a smarter life',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chat',
    description: 'Enjoy a smarter life',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
