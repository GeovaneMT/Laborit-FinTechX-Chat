# Breadcrumb Component

Navigation path showing the current location in a hierarchy. Built with semantic
HTML.

## Import

```typescript
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@shadcn/breadcrumb'
```

## Basic Usage

```typescript
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@shadcn/breadcrumb'

export function BasicBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Widget</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

## Long Navigation Path

```typescript
export function LongBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components/breadcrumb">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Usage</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

## With Ellipsis

```typescript
import { Ellipsis } from 'lucide-react'

export function BreadcrumbWithEllipsis() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

## E-Commerce Example

```typescript
export function EcommerceBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Store</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/electronics">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/electronics/laptops">Laptops</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>MacBook Pro 16"</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

## Dynamic Breadcrumb

```typescript
import { useLocation } from 'react-router-dom'

export function DynamicBreadcrumb() {
  const location = useLocation()

  const pathSegments = location.pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array) => ({
      label: segment.replace(/-/g, ' ').toUpperCase(),
      href: '/' + array.slice(0, index + 1).join('/'),
      isLast: index === array.length - 1,
    }))

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, idx) => (
          <React.Fragment key={idx}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {segment.isLast ? (
                <BreadcrumbPage>{segment.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={segment.href}>
                  {segment.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

## With Icons

```typescript
import { Home, ChevronRight } from 'lucide-react'

export function BreadcrumbWithIcons() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-1">
            <Home className="w-4 h-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:w-4 [&>svg]:h-4" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:w-4 [&>svg]:h-4" />
        <BreadcrumbItem>
          <BreadcrumbPage>Details</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

## Props Interface

### Breadcrumb

```typescript
interface BreadcrumbProps extends React.ComponentProps<'nav'> {
  className?: string
}
```

### BreadcrumbList

```typescript
interface BreadcrumbListProps extends React.ComponentProps<'ol'> {
  className?: string
}
```

### BreadcrumbItem

```typescript
interface BreadcrumbItemProps extends React.ComponentProps<'li'> {
  className?: string
}
```

### BreadcrumbLink

```typescript
interface BreadcrumbLinkProps extends React.ComponentProps<'a'> {
  asChild?: boolean
  className?: string
  href?: string
}
```

### BreadcrumbPage

```typescript
interface BreadcrumbPageProps extends React.ComponentProps<'span'> {
  className?: string
}
```

## Accessibility

- **Semantic HTML:** Uses `<nav>` with `aria-label="breadcrumb"`
- **Current Page:** Uses `<span>` with `aria-current="page"` for current
  location
- **Links:** Proper `<a>` elements with href attributes
- **Keyboard Navigation:** Full keyboard support through HTML links
- **Screen Readers:** Announces breadcrumb trail and current location

### Accessible Implementation

```typescript
export function AccessibleBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" aria-label="Go to home page">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator aria-hidden="true" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products" aria-label="Go to products page">
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator aria-hidden="true" />
        <BreadcrumbItem>
          <BreadcrumbPage aria-current="page">Current Product</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

## Styling and Customization

### Custom Separator

```typescript
export function CustomSeparator() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-muted-foreground">→</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-muted-foreground">→</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Current</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

### Styled Links

```typescript
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink
        href="/"
        className="text-blue-600 hover:text-blue-800 hover:underline"
      >
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<Breadcrumb className="dark:text-slate-300">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink
        href="/"
        className="dark:hover:text-slate-100"
      >
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Performance Considerations

- **Static Content:** Breadcrumbs are typically static
- **Dynamic Routes:** Generate breadcrumbs from URL path
- **Memoization:** Wrap in `React.memo()` if re-rendering frequently

```typescript
const Breadcrumbs = React.memo(() => (
  // Breadcrumb content
))
```

## Troubleshooting

### Breadcrumb Not Responsive

Add flex wrapping and responsive font sizes:

```typescript
<BreadcrumbList className="flex flex-wrap gap-1 text-xs sm:text-sm">
  {/* Items */}
</BreadcrumbList>
```

### Separators Not Showing

Ensure `BreadcrumbSeparator` components are included:

```typescript
// ✅ Correct
<BreadcrumbLink>Home</BreadcrumbLink>
<BreadcrumbSeparator />
<BreadcrumbLink>Products</BreadcrumbLink>

// ❌ Missing separators
<BreadcrumbLink>Home</BreadcrumbLink>
<BreadcrumbLink>Products</BreadcrumbLink>
```

### Current Page Not Styled

Use `BreadcrumbPage` for current item:

```typescript
// ✅ Correct - styled as current
<BreadcrumbPage>Current</BreadcrumbPage>

// ❌ Wrong - doesn't look different
<BreadcrumbLink>Current</BreadcrumbLink>
```

## Related Components

- [Navigation Menu](/navigation-menu.md) — Complex navigation
- [Pagination](/docs-v2/component-docs/shadcn-components/pagination.md) — Page
  navigation
- [Tabs](/docs-v2/component-docs/shadcn-components/tabs.md) — Tab navigation
