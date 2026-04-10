import { ContentShell } from '@layouts/content-shell'

interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout({
  children,
}: Readonly<ContentLayoutProps>) {
  return <ContentShell>{children}</ContentShell>
}
