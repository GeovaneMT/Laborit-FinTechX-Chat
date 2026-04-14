import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edit Information',
  description: 'Edit your Profile Information',
  openGraph: {
    title: 'Edit Information',
    description: 'Edit your Profile Information',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edit Information',
    description: 'Edit your Profile Information',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
