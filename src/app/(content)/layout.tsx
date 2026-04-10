import { ContentShell } from '@layouts/content-shell'

interface ContentLayoutProps {
  sheet: React.ReactNode
  children: React.ReactNode
}

export default function ContentLayout({
  sheet,
  children,
}: Readonly<ContentLayoutProps>) {
  return <ContentShell sheet={sheet}>{children}</ContentShell>
}
