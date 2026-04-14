import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invite',
  description: 'Invite a friend',
  openGraph: {
    title: 'Invite',
    description: 'Invite a friend',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invite',
    description: 'Invite a friend',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
