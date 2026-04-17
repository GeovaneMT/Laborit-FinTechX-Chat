# Radio Group Component

Select one option from a group of mutually exclusive options. Built on
[Radix UI Radio Group](https://www.radix-ui.com/docs/primitives/components/radio-group).

## Import

```typescript
import { RadioGroup, RadioGroupItem } from '@shadcn/radio-group'
import { Label } from '@shadcn/label'
```

## Basic Usage

```typescript
import { RadioGroup, RadioGroupItem } from '@shadcn/radio-group'
import { Label } from '@shadcn/label'

export function BasicRadioGroup() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  )
}
```

## Controlled Radio Group

```typescript
export function ControlledRadioGroup() {
  const [selected, setSelected] = React.useState('email')

  return (
    <div className="space-y-4">
      <RadioGroup value={selected} onValueChange={setSelected}>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="email" id="email" />
          <Label htmlFor="email">Email notifications</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="sms" id="sms" />
          <Label htmlFor="sms">SMS notifications</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="none" id="none" />
          <Label htmlFor="none">No notifications</Label>
        </div>
      </RadioGroup>
      <p className="text-sm text-muted-foreground">
        Selected: {selected}
      </p>
    </div>
  )
}
```

## Vertical Layout

```typescript
export function VerticalRadioGroup() {
  const options = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ]

  return (
    <RadioGroup defaultValue="medium">
      <div className="space-y-3">
        {options.map(({ value, label }) => (
          <div key={value} className="flex items-center gap-2">
            <RadioGroupItem value={value} id={value} />
            <Label htmlFor={value}>{label}</Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  )
}
```

## Horizontal Layout

```typescript
export function HorizontalRadioGroup() {
  const options = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'maybe', label: 'Maybe' },
  ]

  return (
    <RadioGroup defaultValue="yes" className="flex gap-4">
      {options.map(({ value, label }) => (
        <div key={value} className="flex items-center gap-2">
          <RadioGroupItem value={value} id={value} />
          <Label htmlFor={value}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
```

## Radio Group with Description

```typescript
export function RadioGroupWithDescription() {
  const options = [
    {
      value: 'plan-basic',
      label: 'Basic Plan',
      description: 'Perfect for getting started',
      price: 'Free',
    },
    {
      value: 'plan-pro',
      label: 'Pro Plan',
      description: 'For growing teams',
      price: '$29/mo',
    },
    {
      value: 'plan-enterprise',
      label: 'Enterprise',
      description: 'Custom solutions for large teams',
      price: 'Custom',
    },
  ]

  return (
    <RadioGroup defaultValue="plan-basic">
      <div className="space-y-3">
        {options.map(({ value, label, description, price }) => (
          <div
            key={value}
            className="flex items-start gap-3 p-3 rounded-lg border border-muted hover:bg-muted/50 cursor-pointer"
          >
            <RadioGroupItem value={value} id={value} className="mt-1" />
            <div className="flex-1">
              <label htmlFor={value} className="cursor-pointer font-medium">
                {label}
              </label>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="font-semibold">{price}</div>
          </div>
        ))}
      </div>
    </RadioGroup>
  )
}
```

## Disabled Radio Group

```typescript
export function DisabledRadioGroup() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-medium">Enabled</h3>
        <RadioGroup defaultValue="option1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="enabled1" />
            <Label htmlFor="enabled1">Option 1</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="enabled2" />
            <Label htmlFor="enabled2">Option 2</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Disabled Group</h3>
        <RadioGroup defaultValue="option1" disabled>
          <div className="flex items-center gap-2 opacity-50">
            <RadioGroupItem value="option1" id="disabled1" disabled />
            <Label htmlFor="disabled1">Option 1</Label>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <RadioGroupItem value="option2" id="disabled2" disabled />
            <Label htmlFor="disabled2">Option 2</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
```

## Form Integration

```typescript
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from '@shadcn/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  frequency: z.enum(['daily', 'weekly', 'monthly']),
})

export function RadioGroupFormExample() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      frequency: 'weekly',
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
          name="frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Frequency</FormLabel>
              <FormControl>
                <RadioGroup value={field.value} onValueChange={field.onChange}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="daily" id="daily" />
                    <Label htmlFor="daily">Daily</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="weekly" id="weekly" />
                    <Label htmlFor="weekly">Weekly</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormDescription>
                Choose how often you want to receive emails
              </FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
```

## Survey/Likert Scale

```typescript
export function LikertScaleRadioGroup() {
  const options = [
    { value: '1', label: 'Strongly Disagree' },
    { value: '2', label: 'Disagree' },
    { value: '3', label: 'Neutral' },
    { value: '4', label: 'Agree' },
    { value: '5', label: 'Strongly Agree' },
  ]

  return (
    <div className="space-y-4">
      <p className="font-medium">How satisfied are you with our service?</p>
      <RadioGroup defaultValue="3" className="grid grid-cols-5 gap-2">
        {options.map(({ value, label }) => (
          <div key={value} className="flex flex-col items-center gap-2">
            <RadioGroupItem value={value} id={`likert-${value}`} />
            <Label htmlFor={`likert-${value}`} className="text-xs text-center cursor-pointer">
              {label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
```

## Props Interface

### RadioGroup

```typescript
interface RadioGroupProps extends React.ComponentProps<
  typeof RadioGroupPrimitive.Root
> {
  className?: string
  disabled?: boolean
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}
```

### RadioGroupItem

```typescript
interface RadioGroupItemProps extends React.ComponentProps<
  typeof RadioGroupPrimitive.Item
> {
  className?: string
  value: string
  disabled?: boolean
}
```

## Accessibility

- **Keyboard Navigation:** Tab to group, arrow keys to navigate options
- **Screen Readers:** Announces group and selected option
- **Labels:** Always use associated `<label>` elements
- **ARIA Roles:** Proper roles for group and items
- **Focus:** Clear focus indicator for keyboard users

### Accessible Implementation

```typescript
export function AccessibleRadioGroup() {
  return (
    <fieldset className="space-y-3">
      <legend className="font-medium">Contact preference</legend>
      <RadioGroup>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="email" id="email-pref" />
          <Label htmlFor="email-pref" aria-describedby="email-desc">
            Email
          </Label>
          <span id="email-desc" className="text-xs text-muted-foreground">
            Recommended
          </span>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="phone" id="phone-pref" />
          <Label htmlFor="phone-pref">Phone</Label>
        </div>
      </RadioGroup>
    </fieldset>
  )
}
```

## Styling and Customization

### Card-Style Options

```typescript
export function CardStyleRadioGroup() {
  const options = ['Small', 'Medium', 'Large']

  return (
    <RadioGroup defaultValue="Medium" className="grid grid-cols-3 gap-3">
      {options.map((option) => (
        <div key={option}>
          <RadioGroupItem value={option} id={option} className="hidden" />
          <label
            htmlFor={option}
            className="flex items-center justify-center px-4 py-2 rounded-lg border-2 border-muted cursor-pointer hover:border-muted-foreground has-data-checked:border-primary has-data-checked:bg-primary/5"
          >
            {option}
          </label>
        </div>
      ))}
    </RadioGroup>
  )
}
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<RadioGroup className="dark:text-slate-200">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="dark-option1" className="dark:border-slate-600" />
    <Label htmlFor="dark-option1">Dark mode option</Label>
  </div>
</RadioGroup>
```

## Performance Considerations

- **Large Lists:** For 100+ options, consider virtualization or search
- **Form State:** Use form library to manage selection state
- **Memoization:** Wrap large radio groups with `React.memo()`

## Troubleshooting

### Options Not Mutually Exclusive

Ensure all items share the same `RadioGroup`:

```typescript
// ✅ Correct - all in one group
<RadioGroup>
  <RadioGroupItem value="1" id="item1" />
  <RadioGroupItem value="2" id="item2" />
</RadioGroup>

// ❌ Wrong - separate groups
<RadioGroup>
  <RadioGroupItem value="1" id="item1" />
</RadioGroup>
<RadioGroup>
  <RadioGroupItem value="2" id="item2" />
</RadioGroup>
```

### Label Not Associated

Always use matching `id` and `htmlFor`:

```typescript
// ✅ Correct
<RadioGroupItem value="opt" id="option" />
<Label htmlFor="option">Option</Label>

// ❌ Wrong
<RadioGroupItem value="opt" />
<Label>Option</Label>
```

## Related Components

- [Checkbox](/docs-v2/component-docs/shadcn-components/checkbox.md) — Multiple
  selections
- [Select](/docs-v2/component-docs/shadcn-components/select.md) — Dropdown
  alternative
- [Form](/docs-v2/component-docs/base-components/form.md) — Form integration
