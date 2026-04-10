import { revalidatePath, revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const secret = request.headers.get('x-revalidate-secret')
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }
  const body = (await request.json()) as { tag?: string; path?: string }
  if (body.tag) {
    revalidateTag(body.tag, 'max')
  }
  if (body.path) {
    revalidatePath(body.path)
  }
  return NextResponse.json({ ok: true })
}
