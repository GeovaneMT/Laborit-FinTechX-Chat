import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Your Profile',
  openGraph: {
    title: 'Profile',
    description: 'Your Profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profile',
    description: 'Your Profile',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
