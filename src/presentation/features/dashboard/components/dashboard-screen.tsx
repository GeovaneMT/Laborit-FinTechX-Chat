import { DashboardPanel } from './dashboard-panel'
import type { DashboardMessages } from '../i18n'

type DashboardScreenProps = {
  messages: DashboardMessages
}

export function DashboardScreen({ messages }: DashboardScreenProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{messages['dashboard.title']}</h1>
      <DashboardPanel />
    </div>
  )
}
