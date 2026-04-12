import { NextResponse } from 'next/server'

import { parseItem } from '@/core/schemas/item.schema'
import { parseItemId } from '@core/value-objects/item-id'

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
