# Table Component

Display data in a structured table format. Built on HTML semantic table elements
with Tailwind styling.

## Import

```typescript
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
} from '@shadcn/table'
```

## Basic Usage

```typescript
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@shadcn/table'

export function BasicTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Viewer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
```

## User Data Table

Display user information with actions.

```typescript
import { Button } from '@shadcn/button'
import { MoreHorizontal, Edit, Trash } from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive' | 'pending'
  joinDate: string
}

const users: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    status: 'active',
    joinDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Michael Ross',
    email: 'michael@example.com',
    status: 'active',
    joinDate: '2024-02-20',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    status: 'pending',
    joinDate: '2024-03-10',
  },
]

export function UserDataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Join Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : user.status === 'inactive'
                      ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}
              >
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </span>
            </TableCell>
            <TableCell>{user.joinDate}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                <Edit className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash className="w-4 h-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

## Financial Data Table

Display financial information with formatted numbers.

```typescript
interface Transaction {
  id: string
  description: string
  amount: number
  category: string
  date: string
}

const transactions: Transaction[] = [
  { id: '1', description: 'Subscription Payment', amount: 99.99, category: 'Recurring', date: '2024-03-20' },
  { id: '2', description: 'Product Purchase', amount: 249.5, category: 'Sales', date: '2024-03-19' },
  { id: '3', description: 'Refund', amount: -50.0, category: 'Returns', date: '2024-03-18' },
]

export function FinancialTable() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell
              className={`text-right font-medium ${
                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {formatCurrency(transaction.amount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

## Sortable Table

Table with column sorting functionality.

```typescript
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

type SortDirection = 'asc' | 'desc' | null

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
}

export function SortableTable() {
  const [products, setProducts] = React.useState<Product[]>([
    { id: '1', name: 'Product A', category: 'Electronics', price: 299, stock: 45 },
    { id: '2', name: 'Product B', category: 'Clothing', price: 49, stock: 120 },
    { id: '3', name: 'Product C', category: 'Electronics', price: 999, stock: 12 },
  ])

  const [sortColumn, setSortColumn] = React.useState<string | null>(null)
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(null)

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc')
      } else if (sortDirection === 'desc') {
        setSortColumn(null)
        setSortDirection(null)
      }
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const getSortedProducts = () => {
    if (!sortColumn || !sortDirection) return products

    return [...products].sort((a, b) => {
      const aValue = a[sortColumn as keyof Product]
      const bValue = b[sortColumn as keyof Product]

      if (typeof aValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue as string)
          : (bValue as string).localeCompare(aValue)
      }

      return sortDirection === 'asc' ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number)
    })
  }

  const SortIcon = ({ column }: { column: string }) => {
    if (sortColumn !== column) return <ArrowUpDown className="w-4 h-4 ml-2" />
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-4 h-4 ml-2" />
    ) : (
      <ArrowDown className="w-4 h-4 ml-2" />
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead
            className="cursor-pointer hover:bg-muted"
            onClick={() => handleSort('name')}
          >
            <div className="flex items-center">
              Name
              <SortIcon column="name" />
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer hover:bg-muted"
            onClick={() => handleSort('category')}
          >
            <div className="flex items-center">
              Category
              <SortIcon column="category" />
            </div>
          </TableHead>
          <TableHead
            className="text-right cursor-pointer hover:bg-muted"
            onClick={() => handleSort('price')}
          >
            <div className="flex items-center justify-end">
              Price
              <SortIcon column="price" />
            </div>
          </TableHead>
          <TableHead
            className="text-right cursor-pointer hover:bg-muted"
            onClick={() => handleSort('stock')}
          >
            <div className="flex items-center justify-end">
              Stock
              <SortIcon column="stock" />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {getSortedProducts().map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell className="text-right">${product.price}</TableCell>
            <TableCell className="text-right">{product.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

## Selectable Table

Table with row selection.

```typescript
import { Checkbox } from '@shadcn/checkbox'

interface SelectableItem {
  id: string
  name: string
  email: string
  status: string
}

export function SelectableTable() {
  const [items, setItems] = React.useState<SelectableItem[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' },
  ])

  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set())

  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedRows(newSelected)
  }

  const toggleAll = () => {
    if (selectedRows.size === items.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(items.map((item) => item.id)))
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <Checkbox
              checked={selectedRows.size === items.length && items.length > 0}
              indeterminate={selectedRows.size > 0 && selectedRows.size < items.length}
              onCheckedChange={() => toggleAll()}
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id} className={selectedRows.has(item.id) ? 'bg-muted' : ''}>
            <TableCell>
              <Checkbox
                checked={selectedRows.has(item.id)}
                onCheckedChange={() => toggleRow(item.id)}
              />
            </TableCell>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

## Table with Footer

```typescript
export function TableWithFooter() {
  const data = [
    { product: 'Widget A', price: 99, quantity: 5, total: 495 },
    { product: 'Widget B', price: 149, quantity: 3, total: 447 },
    { product: 'Widget C', price: 199, quantity: 2, total: 398 },
  ]

  const grandTotal = data.reduce((sum, item) => sum + item.total, 0)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{item.product}</TableCell>
            <TableCell className="text-right">${item.price}</TableCell>
            <TableCell className="text-right">{item.quantity}</TableCell>
            <TableCell className="text-right">${item.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right font-semibold">${grandTotal}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
```

## Props Interface

```typescript
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string
}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string
}

interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string
}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  className?: string
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
}
```

## Accessibility

- **Semantic HTML:** Uses proper `<table>`, `<thead>`, `<tbody>`, `<tfoot>`
  elements
- **Header Association:** `<th>` elements properly associate with columns
- **ARIA Roles:** Proper ARIA labeling for table structure
- **Keyboard Navigation:** Full keyboard support through native table structure
- **Screen Readers:** Announces table structure and relationships properly

### Accessible Table Example

```typescript
export function AccessibleTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Name</TableHead>
          <TableHead scope="col">Role</TableHead>
          <TableHead scope="col">Email</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell headers="name">John Doe</TableCell>
          <TableCell headers="role">Administrator</TableCell>
          <TableCell headers="email">john@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
```

## Styling and Customization

### Striped Rows

```typescript
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {data.map((item, idx) => (
      <TableRow key={idx} className={idx % 2 === 0 ? 'bg-muted/50' : ''}>
        <TableCell>{item.col1}</TableCell>
        <TableCell>{item.col2}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Compact Table

```typescript
<Table>
  <TableHeader>
    <TableRow className="hover:bg-transparent">
      <TableHead className="py-2 px-1">Name</TableHead>
      <TableHead className="py-2 px-1">Status</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    <TableRow className="hover:bg-muted/30">
      <TableCell className="py-2 px-1">Item</TableCell>
      <TableCell className="py-2 px-1">Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Bordered Table

```typescript
<Table className="border border-collapse">
  <TableHeader>
    <TableRow className="border">
      <TableHead className="border p-2">Header 1</TableHead>
      <TableHead className="border p-2">Header 2</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    <TableRow className="border">
      <TableCell className="border p-2">Cell 1</TableCell>
      <TableCell className="border p-2">Cell 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Dark Mode

Tables support dark mode with automatic color adjustments.

```typescript
<Table className="dark:text-slate-200">
  <TableHeader className="dark:bg-slate-950">
    <TableRow className="dark:border-slate-700">
      <TableHead className="dark:text-slate-300">Column</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    <TableRow className="dark:hover:bg-slate-800 dark:border-slate-700">
      <TableCell className="dark:text-slate-300">Cell</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Performance Considerations

- **Virtual Scrolling:** For large tables (1000+ rows), use virtual scrolling
  libraries
- **Memoization:** Wrap row components with `React.memo()` to prevent
  unnecessary re-renders
- **Pagination:** Implement pagination to limit rendered rows at once
- **Lazy Loading:** Load table data on demand or in chunks

```typescript
const TableRow = React.memo(({ item }: { item: TableItem }) => (
  <TableRow>
    <TableCell>{item.name}</TableCell>
  </TableRow>
))
```

## Troubleshooting

### Table Layout Issues

Ensure the parent container has defined width:

```typescript
<div className="w-full overflow-x-auto">
  <Table>
    {/* Table content */}
  </Table>
</div>
```

### Column Alignment

Use `text-right` or `text-center` for header and cell alignment:

```typescript
<TableHead className="text-right">Amount</TableHead>
<TableCell className="text-right">$99.99</TableCell>
```

### Responsive Tables

Implement responsive design for mobile:

```typescript
export function ResponsiveTable() {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        {/* Table content */}
      </Table>
      {/* Mobile-specific layout */}
    </div>
  )
}
```

## Related Components

- [Pagination](/docs-v2/component-docs/shadcn-components/pagination.md) —
  Navigate tables
- [Button](/docs-v2/component-docs/base-components/button.md) — Action buttons
  in tables
- [Checkbox](/docs-v2/component-docs/shadcn-components/checkbox.md) — Row
  selection
- [Dialog](/docs-v2/component-docs/shadcn-components/dialog.md) — Edit/detail
  modals
