import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Change Password',
  description: 'Change your account Password',
  openGraph: {
    title: 'Change Password',
    description: 'Change your account Password',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Change Password',
    description: 'Change your account Password',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
