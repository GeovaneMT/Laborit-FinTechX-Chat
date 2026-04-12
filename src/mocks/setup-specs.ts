import { server } from '@mocks/server'
import { afterAll, afterEach, beforeAll } from 'vitest'

import '@testing-library/jest-dom/vitest'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' })
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
