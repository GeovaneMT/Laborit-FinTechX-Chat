import { describe, expect, it } from 'vitest'
import type { ProblemDetails } from '@http/contracts/problem'

describe('problem contract', () => {
  it('accepts minimal problem', () => {
    const p: ProblemDetails = { title: 'x', status: 400 }
    expect(p.status).toBe(400)
  })
})
