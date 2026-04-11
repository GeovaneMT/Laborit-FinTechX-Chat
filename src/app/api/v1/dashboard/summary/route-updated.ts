import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    headline: 'Total de cadastros',
    count: 42,
    success: true,
    message: 'Cadastrados buscados com sucesso!',
  })
}
