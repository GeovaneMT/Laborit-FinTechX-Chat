# Card Component

The Card component provides a flexible container for grouping related content
and actions. It follows a structured layout with header, content, and footer
sections.

## Import

```typescript
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@/presentation/ui/shadcn/card'
```

## Basic Usage

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/presentation/ui/shadcn/card'

export function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Additional user information...</p>
      </CardContent>
    </Card>
  )
}
```

## Sizes

### Default Size

Standard card with comfortable spacing.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Default Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content with standard padding and spacing.</p>
  </CardContent>
</Card>
```

### Small Size

Compact card for dense layouts.

```tsx
<Card size="sm">
  <CardHeader>
    <CardTitle>Compact Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Tighter spacing for space-constrained areas.</p>
  </CardContent>
</Card>
```

## Complete Layout

### With All Sections

```tsx
<Card>
  <CardHeader>
    <CardTitle>Project Title</CardTitle>
    <CardDescription>
      A brief description of the project and its goals.
    </CardDescription>
  </CardHeader>

  <CardContent>
    <div className="space-y-4">
      <p>Main content goes here...</p>
      <div className="grid grid-cols-2 gap-4">
        <div>Stat 1</div>
        <div>Stat 2</div>
      </div>
    </div>
  </CardContent>

  <CardFooter>
    <Button>Primary Action</Button>
    <Button variant="outline">Secondary</Button>
  </CardFooter>
</Card>
```

### With Actions

```tsx
<Card>
  <CardHeader>
    <CardTitle>Task Item</CardTitle>
    <CardDescription>Due tomorrow</CardDescription>
    <CardAction>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVerticalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </CardAction>
  </CardHeader>

  <CardContent>
    <p>Task description and details...</p>
  </CardContent>
</Card>
```

## Common Patterns

### Dashboard Card

```tsx
function DashboardCard({ title, value, change }: StatsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <TrendingUpIcon className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-muted-foreground text-xs">
          {change > 0 ? '+' : ''}
          {change}% from last month
        </p>
      </CardContent>
    </Card>
  )
}
```

### User Profile Card

```tsx
function UserProfileCard({ user }: { user: User }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.role}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Joined:</span>
            <span>{formatDate(user.createdAt)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full">
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Product Card

```tsx
function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <Badge variant={product.inStock ? 'default' : 'secondary'}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" disabled={!product.inStock}>
          {product.inStock ? 'Add to Cart' : 'Notify When Available'}
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Settings Card

```tsx
function SettingsCard({ setting }: { setting: Setting }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{setting.title}</CardTitle>
        <CardDescription>{setting.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {setting.type === 'toggle' && (
            <div className="flex items-center justify-between">
              <Label htmlFor={setting.id}>{setting.label}</Label>
              <Switch id={setting.id} defaultChecked={setting.value} />
            </div>
          )}

          {setting.type === 'select' && (
            <div className="space-y-2">
              <Label>{setting.label}</Label>
              <Select defaultValue={setting.value}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {setting.options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
```

## Props Interface

```typescript
// Main Card component
interface CardProps extends React.ComponentProps<'div'> {
  size?: 'default' | 'sm'
}

// All other components extend React.ComponentProps<'div'>
interface CardHeaderProps extends React.ComponentProps<'div'> {}
interface CardTitleProps extends React.ComponentProps<'div'> {}
interface CardDescriptionProps extends React.ComponentProps<'div'> {}
interface CardActionProps extends React.ComponentProps<'div'> {}
interface CardContentProps extends React.ComponentProps<'div'> {}
interface CardFooterProps extends React.ComponentProps<'div'> {}
```

## Layout Behavior

### Automatic Spacing

Cards automatically handle spacing between sections:

- **Header**: Top padding, gap between title/description
- **Content**: Standard padding, no top/bottom margins needed
- **Footer**: Background color, border-top, bottom padding

### Responsive Design

Cards adapt to container width and handle content overflow:

```tsx
// Cards automatically stack content on small screens
<Card className="w-full max-w-md">{/* Content automatically adjusts */}</Card>
```

### Image Handling

Cards have special styling for images:

```tsx
<Card>
  {/* First image gets rounded top corners */}
  <img src="..." alt="..." />

  <CardHeader>
    <CardTitle>With Image</CardTitle>
  </CardHeader>

  {/* Last image gets rounded bottom corners */}
  <img src="..." alt="..." />
</Card>
```

## Accessibility

### Semantic Structure

- Uses proper heading hierarchy
- CardTitle renders as semantic heading
- Screen readers can navigate card sections

### Keyboard Navigation

- Interactive elements within cards remain focusable
- Card itself is not focusable (container role)

### Color Contrast

- Respects design system color tokens
- Automatic dark mode adaptation

## Dark Mode

Cards automatically adapt to dark mode:

```tsx
// Light mode: light background, dark text
// Dark mode: dark background, light text
<Card>
  <CardContent>Adaptive content</CardContent>
</Card>
```

## Styling Customization

### Custom Backgrounds

```tsx
<Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
  <CardContent>Custom gradient background</CardContent>
</Card>
```

### Border Variants

```tsx
<Card className="border-muted border-2 border-dashed">
  <CardContent>Dashed border</CardContent>
</Card>
```

### Shadow Effects

```tsx
<Card className="shadow-lg transition-shadow hover:shadow-xl">
  <CardContent>Elevated card with hover effect</CardContent>
</Card>
```

## Performance

- Lightweight CSS-only components
- No JavaScript overhead
- Efficient re-renders with proper memoization

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Content Overflow

Cards handle overflow automatically, but for custom content:

```tsx
<Card>
  <CardContent className="max-h-64 overflow-auto">
    <div>Long content that might overflow</div>
  </CardContent>
</Card>
```

### Spacing Issues

If default spacing doesn't work, customize with classes:

```tsx
<Card>
  <CardHeader className="pb-2">
    {' '}
    {/* Reduce bottom padding */}
    <CardTitle>Custom Spacing</CardTitle>
  </CardHeader>
  <CardContent className="pt-2">
    {' '}
    {/* Reduce top padding */}
    Content
  </CardContent>
</Card>
```

### Image Aspect Ratios

For consistent image sizes:

```tsx
<Card>
  <div className="aspect-video overflow-hidden rounded-t-xl">
    <img src="..." alt="..." className="h-full w-full object-cover" />
  </div>
  <CardHeader>...</CardHeader>
</Card>
```

## Related Components

- [Dialog](../dialog.md) — Modal cards
- [Sheet](../sheet.md) — Slide-out cards
- [Popover](../popover.md) — Floating cards
- [Accordion](../accordion.md) — Expandable card sections
- [Tabs](../tabs.md) — Tabbed card content

## Migration Guide

### From Custom Divs

```html
<!-- Old custom div structure -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
    <p class="card-description">Description</p>
  </div>
  <div class="card-content">Content</div>
</div>

<!-- New Card components -->
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### From Other Card Libraries

```jsx
// From react-bootstrap or similar
<Card>
  <Card.Body>
    <Card.Title>Content</Card.Title>
  </Card.Body>
</Card>

// To our Card
<Card>
  <CardContent>
    <CardTitle>Content</CardTitle>
  </CardContent>
</Card>
```

---

**Last Updated:** April 14, 2026 | **Version:** 1.0.0

**[← Back to shadcn Components](../shadcn-components/README.md)**
