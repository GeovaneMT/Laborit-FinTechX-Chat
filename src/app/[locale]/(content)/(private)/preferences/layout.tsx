import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preferences',
  description: 'Change Preferences',
  openGraph: {
    title: 'Preferences',
    description: 'Change Preferences',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preferences',
    description: 'Change Preferences',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
