# Pagination Component

Navigate through multiple pages of data. Built on Radix UI primitives with
Tailwind styling.

## Import

```typescript
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@shadcn/pagination'
```

## Basic Usage

```typescript
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@shadcn/pagination'

export function BasicPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

## Controlled Pagination

Manage pagination state in React.

```typescript
export function ControlledPagination() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const totalPages = 5

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </p>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              href="#"
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              href="#"
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
```

## Smart Pagination with Ellipsis

Show first/last pages with ellipsis for large page counts.

```typescript
import { PaginationEllipsis } from '@shadcn/pagination'

export function SmartPagination() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const totalPages = 100

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // Always show first page
    pages.push(1)

    // Calculate range around current page
    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)

    if (start > 2) {
      pages.push('...')
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages - 1) {
      pages.push('...')
    }

    // Always show last page
    pages.push(totalPages)

    return pages
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {getPageNumbers().map((page, idx) =>
          page === '...' ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={() => setCurrentPage(page as number)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

## Table Pagination

Paginate table data.

```typescript
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@shadcn/table'

interface DataItem {
  id: string
  name: string
  email: string
  status: string
}

export function TablePagination() {
  const allData: DataItem[] = Array.from({ length: 47 }, (_, i) => ({
    id: String(i + 1),
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 3 === 0 ? 'Active' : 'Inactive',
  }))

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = React.useState(1)
  const totalPages = Math.ceil(allData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = allData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, allData.length)} of{' '}
          {allData.length} results
        </p>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let page = i + 1
              if (currentPage > 3) page = currentPage - 2 + i
              if (page > totalPages) return null

              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            })}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
```

## Search Results Pagination

Paginate search results with result summary.

```typescript
export function SearchResultsPagination() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const totalResults = 234
  const itemsPerPage = 20
  const totalPages = Math.ceil(totalResults / itemsPerPage)

  const startResult = (currentPage - 1) * itemsPerPage + 1
  const endResult = Math.min(currentPage * itemsPerPage, totalResults)

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Results <span className="font-semibold">{startResult}</span> to{' '}
        <span className="font-semibold">{endResult}</span> of{' '}
        <span className="font-semibold">{totalResults}</span>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>

          {Array.from({ length: Math.min(7, totalPages) }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 7 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
```

## Props Interface

### Pagination

```typescript
interface PaginationProps extends React.ComponentProps<'nav'> {
  className?: string
}
```

### PaginationLink

```typescript
interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon'
}
```

### PaginationContent

```typescript
interface PaginationContentProps extends React.ComponentProps<'ul'> {
  className?: string
}
```

## Accessibility

- **Semantic HTML:** Uses `<nav>` with `aria-label="pagination"`
- **Links:** Page links are proper `<a>` elements for navigation
- **Active State:** `aria-current="page"` on active page link
- **Keyboard Navigation:** Full keyboard support with Tab, Enter
- **Screen Readers:** Announces pagination structure and current page

### Accessible Example

```typescript
export function AccessiblePagination() {
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {[1, 2, 3].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`#page-${page}`}
              isActive={currentPage === page}
              onClick={() => setCurrentPage(page)}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

## Styling and Customization

### Custom Size

```typescript
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" size="lg" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" size="lg">
        1
      </PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Custom Styling

```typescript
<Pagination className="justify-end gap-4">
  <PaginationContent className="gap-2">
    <PaginationItem>
      <PaginationPrevious
        href="#"
        className="text-primary hover:bg-primary/10"
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        href="#"
        className="border-2 border-primary data-active:bg-primary data-active:text-primary-foreground"
      >
        1
      </PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<Pagination className="dark:text-slate-300">
  <PaginationContent className="gap-2">
    <PaginationItem>
      <PaginationPrevious
        href="#"
        className="dark:hover:bg-slate-800"
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        href="#"
        className="dark:border-slate-700 dark:hover:bg-slate-800 dark:data-active:bg-slate-700"
      >
        1
      </PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Performance Considerations

- **Large Datasets:** Use smart pagination that shows ellipsis for 50+ pages
- **Optimistic Updates:** Update page UI before data fetches complete
- **Server-Side Pagination:** Handle pagination logic on backend for large
  datasets
- **URL State:** Store current page in URL for bookmarking and sharing

```typescript
// Server-side pagination with React Query
import { useQuery } from '@tanstack/react-query'

export function ServerPaginatedTable() {
  const [page, setPage] = React.useState(1)

  const { data, isLoading } = useQuery({
    queryKey: ['items', page],
    queryFn: () => fetchItems(page),
  })

  return (
    <div className="space-y-4">
      {/* Table with data */}
      {/* Pagination controls */}
    </div>
  )
}
```

## Troubleshooting

### Pagination Not Clickable

Ensure `onClick` handlers or `href` attributes are properly set:

```typescript
// ✅ Correct
<PaginationLink
  href="#"
  onClick={() => setCurrentPage(2)}
>
  2
</PaginationLink>

// ❌ Wrong - no interaction
<PaginationLink>2</PaginationLink>
```

### Buttons Disabled State

Disable Previous/Next at boundaries:

```typescript
<PaginationPrevious
  href="#"
  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
/>
<PaginationNext
  href="#"
  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
/>
```

### Page Numbers Not Centered

Wrap pagination in a centered container:

```typescript
<div className="flex justify-center">
  <Pagination>{/* Content */}</Pagination>
</div>
```

## Related Components

- [Button](/docs-v2/component-docs/base-components/button.md) — Navigation
  actions
- [Table](/docs-v2/component-docs/shadcn-components/table.md) — Paginated data
  display
- [Select](/docs-v2/component-docs/shadcn-components/select.md) — Items per page
  selector
