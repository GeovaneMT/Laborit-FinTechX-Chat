import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') ?? '10', 10)
  const query = searchParams.get('query') ?? ''
  const cursor = searchParams.get('cursor') ?? null

  const mockCustomers = [
    {
      id: 'cust_1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+55 11 91234-5678',
    },
    {
      id: 'cust_2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+55 11 98765-4321',
    },
    {
      id: 'cust_3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '+55 21 99999-9999',
    },
  ]

  let filteredCustomers = mockCustomers
  if (query) {
    filteredCustomers = mockCustomers.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.email.toLowerCase().includes(query.toLowerCase()),
    )
  }

  let startIndex = cursor
    ? mockCustomers.findIndex((c) => c.id === cursor) + 1
    : 0
  startIndex = Math.max(0, startIndex)

  const paginatedCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + limit,
  )

  return NextResponse.json({
    customers: paginatedCustomers,
    hasMore: startIndex + limit < filteredCustomers.length,
    nextCursor:
      paginatedCustomers.length > 0
        ? paginatedCustomers[paginatedCustomers.length - 1].id
        : null,
  })
}
