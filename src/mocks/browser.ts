import { handlers } from '@mocks/handlers'
import { setupWorker } from 'msw/browser'

export function startBrowserMocks() {
  const worker = setupWorker(...handlers)
  return worker.start({ onUnhandledRequest: 'bypass' })
}
