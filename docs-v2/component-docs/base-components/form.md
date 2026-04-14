# Form Component

The Form component provides a complete form management system built on React
Hook Form with TanStack Form. It includes validation, error handling,
accessibility features, and animated feedback.

## Import

```typescript
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/presentation/ui/form'
```

## Basic Setup

### With React Hook Form

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/presentation/ui/form'
import { Input } from '@/presentation/ui/shadcn/input'
import { Button } from '@/presentation/ui/button'

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type FormData = z.infer<typeof formSchema>

export function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                We'll never share your email with anyone.
              </FormDescription>
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
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </Form>
  )
}
```

## Advanced Patterns

### Complex Form with Multiple Fields

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const userSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email'),
  age: z.number().min(18, 'Must be 18 or older'),
  bio: z.string().max(500, 'Bio must be less than 500 characters'),
  newsletter: z.boolean(),
  country: z.string().min(1, 'Please select a country'),
})

type UserFormData = z.infer<typeof userSchema>

export function UserProfileForm() {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: 18,
      bio: '',
      newsletter: false,
      country: '',
    },
  })

  const onSubmit = async (data: UserFormData) => {
    // Handle form submission
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about yourself..." {...field} />
              </FormControl>
              <FormDescription>
                You can write up to 500 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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

        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-y-0 space-x-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Subscribe to newsletter</FormLabel>
                <FormDescription>
                  Get notified about new features and updates.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit">Save Profile</Button>
      </form>
    </Form>
  )
}
```

### Form with Async Validation

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const asyncSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .refine(async (username) => {
      // Simulate API call to check username availability
      const response = await fetch(`/api/check-username?username=${username}`)
      const data = await response.json()
      return data.available
    }, 'Username is already taken'),
})

export function RegistrationForm() {
  const form = useForm({
    resolver: zodResolver(asyncSchema),
    mode: 'onChange', // Enable real-time validation
  })

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  )
}
```

### Form with File Upload

```tsx
import { useForm } from 'react-hook-form'

const fileSchema = z.object({
  avatar: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, 'Please select a file')
    .refine(
      (files) => files[0]?.size <= 5 * 1024 * 1024,
      'File size must be less than 5MB',
    ),
})

export function AvatarUploadForm() {
  const form = useForm({
    resolver: zodResolver(fileSchema),
  })

  const onSubmit = (data: { avatar: FileList }) => {
    const file = data.avatar[0]
    // Handle file upload
  }

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="avatar"
        render={({ field: { value, onChange, ...field } }) => (
          <FormItem>
            <FormLabel>Avatar</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => onChange(e.target.files)}
                {...field}
              />
            </FormControl>
            <FormDescription>
              Upload a profile picture (max 5MB)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  )
}
```

## Validation States

### Visual Feedback

The form automatically provides visual feedback:

- **Valid touched fields**: Green border and focus ring
- **Invalid fields**: Red border, label, and focus ring
- **Error messages**: Animated red text with separator

```tsx
// Automatic styling based on field state
<FormControl>
  <Input {...field} />
</FormControl>
// - Normal: default border
// - Valid: green border and ring
// - Invalid: red border and ring
```

### Custom Validation Messages

```tsx
const schema = z.object({
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain uppercase letter')
    .regex(/[a-z]/, 'Must contain lowercase letter')
    .regex(/[0-9]/, 'Must contain number')
})

<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <Input type="password" {...field} />
      </FormControl>
      <FormDescription>
        Password must meet all requirements
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Accessibility

### Screen Reader Support

- Proper ARIA labels and descriptions
- Error announcements
- Field relationships

### Keyboard Navigation

- Tab order follows logical field sequence
- Enter submits forms
- Error focus management

### Focus Management

```tsx
// Forms handle focus automatically
// Errors are announced to screen readers
// Invalid fields get proper ARIA attributes
```

## Advanced Features

### Conditional Fields

```tsx
export function ConditionalForm() {
  const form = useForm()
  const hasNewsletter = form.watch('newsletter')

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="newsletter"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>Subscribe to newsletter</FormLabel>
          </FormItem>
        )}
      />

      {hasNewsletter && (
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email for newsletter</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </Form>
  )
}
```

### Array Fields

```tsx
const schema = z.object({
  skills: z.array(z.string().min(1, 'Skill is required')),
})

export function SkillsForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { skills: [''] },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'skills',
  })

  return (
    <Form {...form}>
      {fields.map((field, index) => (
        <FormField
          key={field.id}
          control={form.control}
          name={`skills.${index}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skill {index + 1}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </FormItem>
          )}
        />
      ))}

      <Button type="button" variant="outline" onClick={() => append('')}>
        Add Skill
      </Button>
    </Form>
  )
}
```

## Props Interface

```typescript
// Main Form component (FormProvider)
interface FormProps extends ReactHookFormProps {}

// FormField (Controller wrapper)
interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ControllerProps<TFieldValues, TName> {}

// FormItem (container)
interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {}

// FormLabel (accessible label)
interface FormLabelProps extends React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> {}

// FormControl (Slot for inputs)
interface FormControlProps extends React.ComponentPropsWithoutRef<
  typeof Slot
> {}

// FormDescription (help text)
interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

// FormMessage (error display)
interface FormMessageProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: React.ReactNode
}
```

## useFormField Hook

Provides access to field state and IDs:

```typescript
const {
  id, // Unique field ID
  name, // Field name
  value, // Current value
  formItemId, // Form item ID
  formDescriptionId, // Description ID
  formMessageId, // Message ID
  error, // Validation error
  isTouched, // Field touched state
  isDirty, // Field modified state
  invalid, // Validation state
} = useFormField()
```

## Performance

- Minimal re-renders with proper memoization
- Efficient validation with Zod
- Animated error messages with Framer Motion
- Tree-shakeable imports

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Form not submitting

Check form setup:

```tsx
// ✅ Correct
const form = useForm({ resolver: zodResolver(schema) })

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    {/* fields */}
  </form>
</Form>

// ❌ Missing Form provider
const form = useForm()
<form onSubmit={form.handleSubmit(onSubmit)}>
  {/* fields without Form wrapper */}
</form>
```

### Validation not working

Ensure proper field registration:

```tsx
// ✅ Correct
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormControl>
      <Input {...field} />
    </FormControl>
  )}
/>

// ❌ Missing control prop
<FormField
  name="email"
  render={({ field }) => (
    <Input {...field} />
  )}
/>
```

### Custom components

For custom form controls:

```tsx
// Use FormControl with asChild for custom components
<FormControl>
  <CustomSelect {...field} />
</FormControl>
```

## Related Components

- [Input](../input.md) — Text input fields
- [Textarea](../textarea.md) — Multi-line text input
- [Select](../select.md) — Dropdown selection
- [Checkbox](../checkbox.md) — Boolean inputs
- [Radio Group](../radio-group.md) — Single selection
- [Button](../button.md) — Form submission

## Migration Guide

### From HTML Forms

```html
<!-- Old HTML form -->
<form onsubmit="handleSubmit()">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" />
  <span class="error">Error message</span>
  <button type="submit">Submit</button>
</form>

<!-- New React Hook Form -->
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
    <Button type="submit">Submit</Button>
  </form>
</Form>
```

### From Other Form Libraries

```jsx
// From Formik
<Formik initialValues={{ email: '' }} onSubmit={onSubmit}>
  <Form>
    <Field name="email" component="input" />
  </Form>
</Formik>

// To React Hook Form
const form = useForm({ defaultValues: { email: '' } })

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => <Input {...field} />}
    />
  </form>
</Form>
```

---

**Last Updated:** April 14, 2026 | **Version:** 1.0.0

**[← Back to Base Components](../base-components/README.md)**
