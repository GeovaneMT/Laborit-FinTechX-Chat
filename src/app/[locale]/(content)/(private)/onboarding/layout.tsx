import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'Get started',
  openGraph: {
    title: 'Onboarding',
    description: 'Get started',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onboarding',
    description: 'Get started',
  },
}

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: Readonly<LayoutProps>) => <>{children}</>

export default Layout
