# Input Component

Text input field component for user text entry. Supports various types and
states.

## Import

```typescript
import { Input } from '@/presentation/ui/shadcn/input'
```

## Basic Usage

```tsx
import { Input } from '@/presentation/ui/shadcn/input'

export function SearchForm() {
  const [search, setSearch] = useState('')

  return (
    <Input
      placeholder="Search users..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
```

## Input Types

### Text

```tsx
<Input type="text" placeholder="Enter text" />
```

### Email

```tsx
<Input type="email" placeholder="Enter email address" />
```

### Password

```tsx
<Input type="password" placeholder="Enter password" />
```

### Number

```tsx
<Input type="number" placeholder="Enter a number" min="0" max="100" />
```

### Search

```tsx
<Input type="search" placeholder="Search..." />
```

### Date

```tsx
<Input type="date" />
```

### Time

```tsx
<Input type="time" />
```

### File

```tsx
<Input type="file" accept=".pdf,.docx" />
```

## With Form Integration

```tsx
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/presentation/ui/form'
import { Input } from '@/presentation/ui/shadcn/input'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password too short'),
})

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
```

## Advanced Patterns

### With Prefix/Suffix

```tsx
<div className="flex items-center gap-2">
  <span className="text-muted-foreground">$</span>
  <Input type="number" placeholder="0.00" className="flex-1" />
</div>

<div className="flex items-center gap-2">
  <Input type="password" placeholder="Password" className="flex-1" />
  <Eye className="h-4 w-4 cursor-pointer text-muted-foreground" />
</div>
```

### With Validation

```tsx
const [error, setError] = useState('')
const [value, setValue] = useState('')

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const val = e.target.value

  if (!val.includes('@')) {
    setError('Email must contain @')
  } else {
    setError('')
  }

  setValue(val)
}

;<div className="space-y-2">
  <Input
    type="email"
    value={value}
    onChange={handleChange}
    className={error ? 'border-red-500' : ''}
  />
  {error && <p className="text-sm text-red-500">{error}</p>}
</div>
```

### Search with Debounce

```tsx
const [search, setSearch] = useState('')
const [results, setResults] = useState([])

const debouncedSearch = useMemo(
  () =>
    debounce((value: string) => {
      if (value.length > 2) {
        fetchResults(value).then(setResults)
      }
    }, 300),
  [],
)

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value)
  debouncedSearch(e.target.value)
}

;<div className="space-y-4">
  <Input placeholder="Search users..." value={search} onChange={handleChange} />
  {results.map((result) => (
    <div key={result.id}>{result.name}</div>
  ))}
</div>
```

### Autocomplete

```tsx
const [open, setOpen] = useState(false)
const [value, setValue] = useState('')
const [options, setOptions] = useState([])

const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
  const val = e.target.value
  setValue(val)

  if (val.length > 0) {
    const results = await fetchAutocomplete(val)
    setOptions(results)
    setOpen(true)
  }
}

;<div className="relative">
  <Input placeholder="Search..." value={value} onChange={handleChange} />
  {open && options.length > 0 && (
    <ul className="absolute top-full right-0 left-0 mt-1 rounded-md border bg-white shadow-md">
      {options.map((option) => (
        <li
          key={option.id}
          onClick={() => {
            setValue(option.label)
            setOpen(false)
          }}
          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
        >
          {option.label}
        </li>
      ))}
    </ul>
  )}
</div>
```

## States

### Disabled

```tsx
<Input disabled placeholder="Disabled input" />
```

### Read Only

```tsx
<Input readOnly value="Read only value" />
```

### With Error

```tsx
<Input
  className="border-red-500 focus-visible:ring-red-500"
  placeholder="Error state"
/>
```

### With Success

```tsx
<Input
  className="border-green-500 focus-visible:ring-green-500"
  placeholder="Success state"
/>
```

## Props Interface

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // All standard HTML input attributes
  type?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  className?: string
  // etc.
}
```

## Accessibility

### Label Association

```tsx
<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email Address
  </label>
  <Input id="email" type="email" placeholder="Enter email" />
</div>
```

### Error Messages

```tsx
<div className="space-y-2">
  <Input aria-describedby="email-error" aria-invalid={hasError} type="email" />
  {hasError && (
    <p id="email-error" className="text-sm text-red-500">
      Invalid email format
    </p>
  )}
</div>
```

### Keyboard Navigation

- Tab moves focus to input
- Shift+Tab moves focus away
- Arrow keys for special input types (date, number)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Value not updating

Check onChange handler:

```tsx
// ✅ Correct
const [value, setValue] = useState('')
<Input value={value} onChange={(e) => setValue(e.target.value)} />

// ❌ Missing handler
<Input value={value} />
```

### Styles not applying

Input inherits from form context:

```tsx
// Inside form, styles from FormControl apply
<FormControl>
  <Input />
</FormControl>

// Outside form, add custom styles
<Input className="h-10 px-4 py-2 rounded-md border" />
```

## Related Components

- [Textarea](../textarea.md) — Multi-line text input
- [InputGroup](../input-group.md) — Input with icons/buttons
- [Form](../form.md) — Form context
- [Select](../select.md) — Dropdown selection

---

**Last Updated:** April 14, 2026 | **Version:** 1.0.0

**[← Back to shadcn Components](../shadcn-components/README.md)**
