# Select Component

Dropdown selection component for choosing from predefined options.

## Import

```typescript
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from '@/presentation/ui/shadcn/select'
```

## Basic Usage

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/presentation/ui/shadcn/select'

export function CountrySelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a country..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="us">United States</SelectItem>
        <SelectItem value="ca">Canada</SelectItem>
        <SelectItem value="uk">United Kingdom</SelectItem>
        <SelectItem value="au">Australia</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

## Grouped Options

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a team member..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Frontend</SelectLabel>
      <SelectItem value="alice">Alice Johnson</SelectItem>
      <SelectItem value="bob">Bob Smith</SelectItem>
    </SelectGroup>

    <SelectGroup>
      <SelectLabel>Backend</SelectLabel>
      <SelectItem value="charlie">Charlie Davis</SelectItem>
      <SelectItem value="diana">Diana Wilson</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## With Form Integration

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  country: z.string().min(1, 'Please select a country'),
})

export function PreferencesForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  )
}
```

## Controlled Options

```tsx
import { useMemo } from 'react'

interface Option {
  value: string
  label: string
}

export function DynamicSelect({ options }: { options: Option[] }) {
  const [value, setValue] = useState('')

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="Choose an option" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
```

## Advanced Patterns

### Search within Select

```tsx
const [search, setSearch] = useState('')

const filteredOptions = useMemo(() => {
  return options.filter(opt =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  )
}, [search])

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Search and select..." />
  </SelectTrigger>
  <SelectContent>
    <div className="p-2">
      <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-8"
      />
    </div>
    {filteredOptions.map(option => (
      <SelectItem key={option.value} value={option.value}>
        {option.label}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
```

### Multi-Select (Custom)

```tsx
const [selected, setSelected] = useState<string[]>([])

const toggleOption = (value: string) => {
  setSelected((prev) =>
    prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
  )
}

;<div className="space-y-2">
  {options.map((option) => (
    <label key={option.value} className="flex items-center gap-2">
      <Checkbox
        checked={selected.includes(option.value)}
        onCheckedChange={() => toggleOption(option.value)}
      />
      {option.label}
    </label>
  ))}
</div>
```

### Async Options Loading

```tsx
const [open, setOpen] = useState(false)
const [options, setOptions] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
  if (open && options.length === 0) {
    setLoading(true)
    fetchOptions().then(opts => {
      setOptions(opts)
      setLoading(false)
    })
  }
}, [open])

<Select open={open} onOpenChange={setOpen}>
  <SelectTrigger>
    <SelectValue placeholder="Loading..." />
  </SelectTrigger>
  <SelectContent>
    {loading ? (
      <div className="p-2 text-center text-sm text-muted-foreground">
        Loading...
      </div>
    ) : (
      options.map(opt => (
        <SelectItem key={opt.value} value={opt.value}>
          {opt.label}
        </SelectItem>
      ))
    )}
  </SelectContent>
</Select>
```

## Props Interface

```typescript
interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
  dir?: 'ltr' | 'rtl'
  name?: string
  autoComplete?: string
}

interface SelectTriggerProps extends React.ComponentPropsWithoutRef<
  typeof Trigger
> {}

interface SelectValueProps {
  placeholder?: React.ReactNode
}

interface SelectContentProps extends React.ComponentPropsWithoutRef<
  typeof Content
> {}

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof Item> {
  value: string
}

interface SelectGroupProps extends React.ComponentPropsWithoutRef<
  typeof Group
> {}

interface SelectLabelProps extends React.ComponentPropsWithoutRef<
  typeof Label
> {}
```

## Accessibility

### Keyboard Navigation

- Arrow Up/Down: Navigate options
- Enter/Space: Select option
- Esc: Close menu
- Tab: Move to next element

### Screen Readers

- Proper ARIA roles and attributes
- Value announced on selection
- Options announced when opened

### Focus Management

```tsx
<Select>
  <SelectTrigger aria-label="Country selection">
    <SelectValue placeholder="Select country" />
  </SelectTrigger>
  <SelectContent>{/* Items */}</SelectContent>
</Select>
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Value not updating

Ensure onValueChange is used:

```tsx
// ✅ Correct
const [value, setValue] = useState('')
<Select value={value} onValueChange={setValue}>
  {/* ... */}
</Select>

// ❌ Not updating
<Select value={value}>
  {/* Missing onValueChange */}
</Select>
```

### Options not showing

Check SelectContent is rendered:

```tsx
// ✅ Correct structure
<Select>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>

// ❌ Missing SelectContent
<Select>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectItem value="1">Option 1</SelectItem>
</Select>
```

## Related Components

- [ComboBox](../combobox.md) — Searchable select
- [RadioGroup](../radio-group.md) — Single selection
- [Checkbox](../checkbox.md) — Multiple selection
- [DropdownMenu](../dropdown-menu.md) — Action menu

---

**Last Updated:** April 14, 2026 | **Version:** 1.0.0

**[← Back to shadcn Components](../shadcn-components/README.md)**
