import { NextResponse } from 'next/server'

import { parseItemId } from '@core/value-objects/item-id'
import { parseItem } from '@/core/schemas/item.schema'

type Params = { params: Promise<{ id: string }> }

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params
  const validId = parseItemId(id)

  const item = {
    id: validId,
    title: `Item ${validId}`,
    updatedAt: new Date().toISOString(),
  }

  return NextResponse.json(parseItem(item))
}
