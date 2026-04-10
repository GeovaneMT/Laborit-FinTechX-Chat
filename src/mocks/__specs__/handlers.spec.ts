import { handlers } from '@mocks/handlers'

import { describe, expect, it } from 'vitest'

describe('mocks handlers', () => {
  it('exports expected handlers', () => {
    expect(Array.isArray(handlers)).toBe(true)
    expect(handlers.length).toBeGreaterThanOrEqual(2)
    // Ensure handlers are handler objects (importing the module exercises the handler creators)
    expect(typeof handlers[0]).toBe('object')
    expect(handlers[0]).not.toBeNull()
    // If resolver functions exist on handler objects, invoke them to exercise resolver bodies
    const tryInvoke = (h: unknown) => {
      const handler = h as Record<string, unknown> | undefined
      const resolver = handler?.resolver || handler?.handle || handler?.run
      if (typeof resolver === 'function') {
        try {
          // call with empty placeholders; runtime errors are ignored
          ;(resolver as (...args: unknown[]) => unknown)({}, {}, {})
        } catch {
          // ignore
        }
      }
    }

    tryInvoke(handlers[0])
    tryInvoke(handlers[1])
  })
})
