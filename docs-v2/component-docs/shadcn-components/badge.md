# Badge Component

Display labels, tags, or status indicators. Uses CVA for flexible variants.

## Import

```typescript
import { Badge } from '@shadcn/badge'
```

## Basic Usage

```typescript
import { Badge } from '@shadcn/badge'

export function BasicBadge() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge>Badge Text</Badge>
      <Badge>Label</Badge>
    </div>
  )
}
```

## Variants

```typescript
export function BadgeVariants() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
    </div>
  )
}
```

## Status Badges

```typescript
export function StatusBadges() {
  const statuses = [
    { label: 'Active', variant: 'default' as const },
    { label: 'Pending', variant: 'secondary' as const },
    { label: 'Archived', variant: 'outline' as const },
    { label: 'Error', variant: 'destructive' as const },
  ]

  return (
    <div className="space-y-3">
      {statuses.map(({ label, variant }) => (
        <div key={label} className="flex items-center gap-2">
          <Badge variant={variant}>{label}</Badge>
          <span className="text-sm text-muted-foreground">Status</span>
        </div>
      ))}
    </div>
  )
}
```

## With Icons

```typescript
import { Check, X, Clock, AlertCircle } from 'lucide-react'

export function BadgesWithIcons() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Badge>
        <Check className="w-3 h-3 mr-1" />
        Completed
      </Badge>
      <Badge variant="destructive">
        <X className="w-3 h-3 mr-1" />
        Failed
      </Badge>
      <Badge variant="secondary">
        <Clock className="w-3 h-3 mr-1" />
        In Progress
      </Badge>
      <Badge variant="outline">
        <AlertCircle className="w-3 h-3 mr-1" />
        Warning
      </Badge>
    </div>
  )
}
```

## Tag List

```typescript
export function TagList() {
  const [tags, setTags] = React.useState(['React', 'TypeScript', 'Tailwind', 'UI'])

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, idx) => (
          <Badge
            key={idx}
            variant="secondary"
            className="cursor-pointer hover:opacity-75"
            onClick={() => removeTag(idx)}
          >
            {tag} ×
          </Badge>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">Click to remove</p>
    </div>
  )
}
```

## Category Badges

```typescript
export function CategoryBadges() {
  const categories = [
    { label: 'Bug', color: 'bg-red-100 text-red-800' },
    { label: 'Feature', color: 'bg-blue-100 text-blue-800' },
    { label: 'Enhancement', color: 'bg-green-100 text-green-800' },
    { label: 'Documentation', color: 'bg-purple-100 text-purple-800' },
  ]

  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map(({ label, color }) => (
        <div key={label} className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
          {label}
        </div>
      ))}
    </div>
  )
}
```

## Badge Count

```typescript
export function BadgeCount() {
  const notifications = 12
  const alerts = 3

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span>Notifications</span>
        <Badge>{notifications}</Badge>
      </div>

      <div className="flex items-center gap-2">
        <span>Critical Alerts</span>
        <Badge variant="destructive">{alerts}</Badge>
      </div>
    </div>
  )
}
```

## User Role Badges

```typescript
export function RoleBadges() {
  const users = [
    { name: 'John Doe', role: 'Admin', variant: 'destructive' as const },
    { name: 'Jane Smith', role: 'Editor', variant: 'default' as const },
    { name: 'Bob Johnson', role: 'Viewer', variant: 'outline' as const },
  ]

  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div key={user.name} className="flex items-center justify-between p-2 border rounded">
          <span className="text-sm">{user.name}</span>
          <Badge variant={user.variant}>{user.role}</Badge>
        </div>
      ))}
    </div>
  )
}
```

## Props Interface

```typescript
interface BadgeProps extends React.ComponentProps<'span'> {
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link'
  asChild?: boolean
}
```

## Accessibility

- **Semantic Markup:** Uses `<span>` or custom element via `asChild`
- **Color Meaning:** Not solely reliant on color to convey meaning
- **Text Contrast:** Maintains WCAG AA contrast ratios
- **Icon Labels:** Icons paired with text labels

### Accessible Badge

```typescript
<Badge aria-label="Status: Active">
  <CheckCircle className="w-4 h-4" />
  Active
</Badge>
```

## Styling and Customization

### Large Badge

```typescript
<Badge className="text-sm px-3 py-1">Larger badge</Badge>
```

### Rounded Full

```typescript
<Badge className="rounded-full">Pill Badge</Badge>
```

### Custom Color

```typescript
<Badge className="bg-indigo-500 text-white hover:bg-indigo-600">
  Custom
</Badge>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<Badge className="dark:bg-slate-700 dark:text-slate-100">
  Dark mode badge
</Badge>
```

## Advanced Patterns

### Dismissible Badge

```typescript
export function DismissibleBadge() {
  const [visible, setVisible] = React.useState(true)

  return visible ? (
    <div className="flex items-center gap-2">
      <Badge>Removable badge</Badge>
      <button
        onClick={() => setVisible(false)}
        className="text-xs text-muted-foreground hover:text-foreground"
      >
        ×
      </button>
    </div>
  ) : null
}
```

### Animated Badge

```typescript
export function AnimatedBadge() {
  return (
    <Badge className="animate-pulse">
      <span className="flex items-center gap-1">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Live
      </span>
    </Badge>
  )
}
```

## Props Interface

```typescript
interface BadgeProps extends React.ComponentProps<'span'> {
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link'
}
```

## Performance Considerations

- **Static Rendering:** Badges typically render statically
- **List Rendering:** Use keys when rendering badge lists
- **Memoization:** For dynamic badge lists, wrap with `React.memo()`

## Troubleshooting

### Variant Not Applied

Ensure variant is passed correctly:

```typescript
// ✅ Correct
<Badge variant="destructive">Error</Badge>

// ❌ Wrong - invalid variant
<Badge variant="red">Error</Badge>
```

### Icon Not Centered

Wrap icon and text together:

```typescript
// ✅ Centered
<Badge>
  <Icon className="

w-3 h-3" />
  Text
</Badge>

// ❌ Off-center
<Badge>
  <Icon className="w-6 h-6" />
  Text
</Badge>
```

## Related Components

- [Avatar](/avatar.md) — Profile pictures with badges
- [Button](/docs-v2/component-docs/base-components/button.md) — Action buttons
- [Card](/docs-v2/component-docs/shadcn-components/card.md) — Container for
  badges
