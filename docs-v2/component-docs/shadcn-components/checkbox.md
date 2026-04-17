# Checkbox Component

Control element for toggling a boolean value. Built on
[Radix UI Checkbox](https://www.radix-ui.com/docs/primitives/components/checkbox).

## Import

```typescript
import { Checkbox } from '@shadcn/checkbox'
```

## Basic Usage

```typescript
import { Checkbox } from '@shadcn/checkbox'

export function BasicCheckbox() {
  const [checked, setChecked] = React.useState(false)

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="accept"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <label htmlFor="accept" className="cursor-pointer">
        Accept terms and conditions
      </label>
    </div>
  )
}
```

## With Label

```typescript
import { Label } from '@shadcn/label'

export function CheckboxWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="notifications" />
      <Label htmlFor="notifications" className="cursor-pointer">
        Enable notifications
      </Label>
    </div>
  )
}
```

## Multiple Checkboxes

```typescript
export function MultipleCheckboxes() {
  const [selected, setSelected] = React.useState<string[]>([])

  const options = [
    { id: 'email', label: 'Email notifications' },
    { id: 'sms', label: 'SMS notifications' },
    { id: 'push', label: 'Push notifications' },
    { id: 'weekly', label: 'Weekly digest' },
  ]

  const handleChange = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-3">
      {options.map(({ id, label }) => (
        <div key={id} className="flex items-center gap-2">
          <Checkbox
            id={id}
            checked={selected.includes(id)}
            onCheckedChange={() => handleChange(id)}
          />
          <label htmlFor={id} className="cursor-pointer">
            {label}
          </label>
        </div>
      ))}
      <p className="text-sm text-muted-foreground">
        Selected: {selected.join(', ') || 'None'}
      </p>
    </div>
  )
}
```

## Checkbox Grid

```typescript
export function CheckboxGrid() {
  const [selected, setSelected] = React.useState<string[]>([])

  const features = [
    'Dark mode',
    'Analytics',
    'Export',
    'API Access',
    'Custom domain',
    'Team collaboration',
  ]

  const toggleFeature = (feature: string) => {
    setSelected((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-2">
          <Checkbox
            id={feature}
            checked={selected.includes(feature)}
            onCheckedChange={() => toggleFeature(feature)}
          />
          <label htmlFor={feature} className="cursor-pointer text-sm">
            {feature}
          </label>
        </div>
      ))}
    </div>
  )
}
```

## Checkbox with Description

```typescript
export function CheckboxWithDescription() {
  return (
    <div className="flex items-start gap-3">
      <Checkbox id="marketing" className="mt-1" />
      <div>
        <label htmlFor="marketing" className="cursor-pointer font-medium">
          Marketing emails
        </label>
        <p className="text-sm text-muted-foreground">
          Receive updates about new features and products
        </p>
      </div>
    </div>
  )
}
```

## Disabled Checkbox

```typescript
export function DisabledCheckbox() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Checkbox id="enabled" />
        <label htmlFor="enabled" className="cursor-pointer">
          Enabled checkbox
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <label htmlFor="disabled" className="cursor-pointer opacity-50">
          Disabled checkbox
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <label htmlFor="disabled-checked" className="cursor-pointer opacity-50">
          Disabled and checked
        </label>
      </div>
    </div>
  )
}
```

## Indeterminate State

Mixed selection state for parent/child relationships.

```typescript
export function IndeterminateCheckbox() {
  const [parentChecked, setParentChecked] = React.useState(false)
  const [indeterminate, setIndeterminate] = React.useState(false)
  const [children, setChildren] = React.useState({
    option1: false,
    option2: false,
    option3: false,
  })

  const checkedCount = Object.values(children).filter(Boolean).length

  const handleParentChange = (checked: boolean) => {
    setParentChecked(checked)
    setIndeterminate(false)
    setChildren({
      option1: checked as boolean,
      option2: checked as boolean,
      option3: checked as boolean,
    })
  }

  const handleChildChange = (key: string) => {
    const newChildren = { ...children, [key]: !children[key as keyof typeof children] }
    setChildren(newChildren)

    const newCheckedCount = Object.values(newChildren).filter(Boolean).length

    if (newCheckedCount === 0) {
      setParentChecked(false)
      setIndeterminate(false)
    } else if (newCheckedCount === Object.keys(newChildren).length) {
      setParentChecked(true)
      setIndeterminate(false)
    } else {
      setIndeterminate(true)
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Checkbox
          id="parent"
          checked={indeterminate ? 'indeterminate' : parentChecked}
          onCheckedChange={handleParentChange}
        />
        <label htmlFor="parent" className="cursor-pointer font-medium">
          Select all options
        </label>
      </div>

      <div className="ml-6 space-y-2">
        {Object.entries(children).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <Checkbox
              id={key}
              checked={value}
              onCheckedChange={() => handleChildChange(key)}
            />
            <label htmlFor={key} className="cursor-pointer text-sm">
              Option {key.slice(-1)}
            </label>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        {checkedCount} of 3 selected
      </p>
    </div>
  )
}
```

## Form Integration

```typescript
import { Form, FormField, FormItem, FormLabel, FormControl } from '@shadcn/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  agree: z.boolean().default(false),
  notifications: z.array(z.string()).default([]),
})

export function CheckboxFormExample() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agree: false,
      notifications: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>
                I agree to the terms and conditions
              </FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notifications"
          render={() => (
            <FormItem>
              <FormLabel>Notifications</FormLabel>
              <div className="space-y-2">
                {['email', 'sms', 'push'].map((type) => (
                  <FormField
                    key={type}
                    control={form.control}
                    name="notifications"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(type)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...(field.value || []), type]
                                : field.value?.filter((item) => item !== type) || []
                              field.onChange(newValue)
                            }}
                          />
                        </FormControl>
                        <FormLabel>{type}</FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
```

## Props Interface

```typescript
interface CheckboxProps extends React.ComponentProps<
  typeof CheckboxPrimitive.Root
> {
  className?: string
}
```

## Accessibility

- **Keyboard Support:** Space or Enter to toggle
- **Screen Readers:** Announces checkbox state (checked/unchecked)
- **Labels:** Always use associated `<label>` elements
- **Focus:** Clear focus indicator for keyboard navigation
- **Disabled State:** Properly announced to screen readers

### Accessible Implementation

```typescript
export function AccessibleCheckbox() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="agree"
        aria-label="I agree to the privacy policy"
        aria-describedby="agree-desc"
      />
      <label htmlFor="agree" className="cursor-pointer">
        I agree to the privacy policy
      </label>
      <p id="agree-desc" className="text-xs text-muted-foreground">
        Required to continue
      </p>
    </div>
  )
}
```

## Styling and Customization

### Larger Checkbox

```typescript
<Checkbox className="w-6 h-6" />
```

### Custom Colors

```typescript
<Checkbox className="data-checked:bg-blue-500 data-checked:border-blue-600" />
```

### With Badge

```typescript
<div className="flex items-center gap-2">
  <Checkbox id="pro" />
  <label htmlFor="pro" className="cursor-pointer">
    Pro feature
    <span className="ml-2 inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
      NEW
    </span>
  </label>
</div>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<Checkbox className="dark:border-slate-600 dark:data-checked:bg-slate-700" />
```

## Performance Considerations

- **Controlled vs Uncontrolled:** Use controlled component with form state
- **Batch Updates:** Group multiple checkbox changes in form
- **Memoization:** Wrap checkbox lists with `React.memo()` for large lists

## Troubleshooting

### Checkbox Not Responding

Ensure proper state management:

```typescript
// ✅ Correct
const [checked, setChecked] = React.useState(false)
<Checkbox checked={checked} onCheckedChange={setChecked} />

// ❌ Wrong - no state
<Checkbox />
```

### Label Not Associated

Always use matching `id` and `htmlFor`:

```typescript
// ✅ Correct
<Checkbox id="accept" />
<label htmlFor="accept">Accept</label>

// ❌ Wrong - no association
<Checkbox />
<label>Accept</label>
```

## Related Components

- [Radio Group](/docs-v2/component-docs/shadcn-components/radio-group.md) —
  Mutually exclusive options
- [Switch](/docs-v2/component-docs/shadcn-components/switch.md) — Toggle boolean
  state
- [Form](/docs-v2/component-docs/base-components/form.md) — Form integration
