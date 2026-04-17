# Textarea Component

Multi-line text input field for longer text content.

## Import

```typescript
import { Textarea } from '@shadcn/textarea'
```

## Basic Usage

```typescript
import { Textarea } from '@shadcn/textarea'

export function BasicTextarea() {
  const [value, setValue] = React.useState('')

  return (
    <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-medium">
        Message
      </label>
      <Textarea
        id="message"
        placeholder="Enter your message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
```

## With Label

```typescript
import { Label } from '@shadcn/label'

export function TextareaWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        placeholder="Enter a detailed description..."
      />
    </div>
  )
}
```

## Disabled Textarea

```typescript
export function DisabledTextarea() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Enabled</label>
        <Textarea placeholder="Type here..." />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Disabled</label>
        <Textarea placeholder="Disabled textarea" disabled />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Read-only</label>
        <Textarea placeholder="Read-only content" readOnly value="Cannot edit" />
      </div>
    </div>
  )
}
```

## With Character Count

```typescript
export function TextareaWithCharCount() {
  const [value, setValue] = React.useState('')
  const maxLength = 500

  return (
    <div className="space-y-2">
      <label htmlFor="bio" className="text-sm font-medium">
        Bio
      </label>
      <Textarea
        id="bio"
        placeholder="Write your bio..."
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, maxLength))}
      />
      <div className="text-xs text-muted-foreground text-right">
        {value.length} / {maxLength} characters
      </div>
    </div>
  )
}
```

## Form Integration

```typescript
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@shadcn/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@shadcn/button'

const formSchema = z.object({
  message: z.string().min(10, 'Message must be at least 10 characters'),
  feedback: z.string().optional(),
})

export function TextareaFormExample() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
      feedback: '',
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message..." {...field} />
              </FormControl>
              <FormDescription>
                Your message will be sent to our support team
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback (optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Help us improve..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Send</Button>
      </form>
    </Form>
  )
}
```

## Autogrow Textarea

```typescript
export function AutogrowTextarea() {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  return (
    <Textarea
      ref={textareaRef}
      placeholder="This textarea automatically grows as you type..."
      onInput={handleInput}
      className="resize-none"
    />
  )
}
```

## Markdown Editor

```typescript
export function MarkdownTextarea() {
  const [markdown, setMarkdown] = React.useState('# Hello\n\nWrite markdown here...')

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Markdown</label>
        <Textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write markdown..."
          className="font-mono"
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Preview</label>
        <div className="p-3 rounded-lg border bg-muted min-h-[120px]">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {markdown}
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Comment Box

```typescript
import { Button } from '@shadcn/button'
import { Avatar, AvatarImage } from '@shadcn/avatar'

export function CommentBox() {
  const [comment, setComment] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async () => {
    if (!comment.trim()) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    console.log('Submitted:', comment)
    setComment('')
    setIsSubmitting(false)
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
        </Avatar>

        <div className="flex-1">
          <Textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="resize-none"
          />

          <div className="flex justify-end gap-2 mt-2">
            <Button variant="ghost" onClick={() => setComment('')}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!comment.trim() || isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Post'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Props Interface

```typescript
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  rows?: number
  cols?: number
  maxLength?: number
  minLength?: number
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}
```

## Accessibility

- **Label Association:** Always use `<label>` with matching `id`
- **Keyboard Access:** Full keyboard navigation and editing
- **Screen Readers:** Announces textarea role and content
- **Focus:** Clear focus indicator for keyboard users
- **Error States:** Proper ARIA attributes for validation errors

### Accessible Implementation

```typescript
export function AccessibleTextarea() {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value
    setValue(val)
    if (val.length < 10) {
      setError('At least 10 characters required')
    } else {
      setError('')
    }
  }

  return (
    <div className="space-y-2">
      <label htmlFor="accessible-textarea" className="font-medium">
        Message <span aria-label="required">*</span>
      </label>
      <Textarea
        id="accessible-textarea"
        value={value}
        onChange={handleChange}
        aria-invalid={!!error}
        aria-describedby={error ? 'textarea-error' : undefined}
        placeholder="Enter at least 10 characters"
      />
      {error && (
        <p id="textarea-error" className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
```

## Styling and Customization

### Bordered Textarea

```typescript
<Textarea
  placeholder="With border"
  className="border-2 border-blue-500 focus-visible:border-blue-600"
/>
```

### Rounded Textarea

```typescript
<Textarea
  placeholder="Extra rounded"
  className="rounded-2xl"
/>
```

### Custom Height

```typescript
<Textarea placeholder="Taller textarea" rows={8} className="resize-none" />
```

### Monospace Font

```typescript
<Textarea
  placeholder="Code input"
  className="font-mono text-xs"
/>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<Textarea
  placeholder="Dark mode textarea"
  className="dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
/>
```

## Advanced Patterns

### Textarea with Hints

```typescript
export function TextareaWithHints() {
  const hints = ['Be specific', 'Show gratitude', 'Share details']

  return (
    <div className="space-y-3">
      <Textarea placeholder="Write your feedback..." />
      <div className="text-xs text-muted-foreground space-y-1">
        <p className="font-medium">Tips:</p>
        <ul className="list-inside list-disc space-y-1">
          {hints.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
```

### Rich Text Editor

```typescript
export function RichTextEditor() {
  const [value, setValue] = React.useState('')

  const insertFormat = (before: string, after: string = '') => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selected = value.substring(start, end)

    const newValue =
      value.substring(0, start) + before + selected + after + value.substring(end)
    setValue(newValue)
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-1 p-2 border-b">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => insertFormat('**', '**')}
        >
          Bold
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => insertFormat('_', '_')}
        >
          Italic
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => insertFormat('`', '`')}
        >
          Code
        </Button>
      </div>
      <Textarea value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}
```

## Performance Considerations

- **Controlled Component:** Use state to manage value for large textareas
- **Debouncing:** Debounce onChange for expensive operations
- **Large Content:** Consider virtualization for very large text files
- **Resize Handling:** Use CSS `resize: none` with explicit height to prevent
  layout shifts

## Troubleshooting

### Textarea Not Resizable

Add `resize` class or Tailwind utility:

```typescript
<Textarea className="resize" />  // Allow resize
<Textarea className="resize-none" />  // Disable resize
```

### Value Not Updating

Ensure controlled component pattern:

```typescript
// ✅ Correct
const [value, setValue] = React.useState('')
<Textarea value={value} onChange={(e) => setValue(e.target.value)} />

// ❌ Wrong - uncontrolled
<Textarea defaultValue="Initial" />
```

### Scrolling Issues

Add overflow handling:

```typescript
<Textarea className="overflow-auto resize-none" rows={5} />
```

## Related Components

- [Input](/docs-v2/component-docs/shadcn-components/input.md) — Single-line
  input
- [Form](/docs-v2/component-docs/base-components/form.md) — Form integration
- [Label](/label.md) — Text labeling
