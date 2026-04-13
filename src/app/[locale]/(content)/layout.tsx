'use client'

import { useParentSize } from '@/presentation/pattern/hooks/use-parent-size'

interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout({
  children,
}: Readonly<ContentLayoutProps>) {
  const { width, height } = useParentSize()

  return (
    <div className="relative" style={{ minHeight: height, minWidth: width }}>
      {children}
    </div>
  )
}
