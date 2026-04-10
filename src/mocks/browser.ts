import { setupWorker } from 'msw/browser'
import { handlers } from '@mocks/handlers'

export function startBrowserMocks() {
  const worker = setupWorker(...handlers)
  return worker.start({ onUnhandledRequest: 'bypass' })
}
