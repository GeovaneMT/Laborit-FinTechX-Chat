# Switch Component

Toggle boolean values on/off. Built on
[Radix UI Switch](https://www.radix-ui.com/docs/primitives/components/switch).

## Import

```typescript
import { Switch } from '@shadcn/switch'
```

## Basic Usage

```typescript
import { Switch } from '@shadcn/switch'
import { Label } from '@shadcn/label'

export function BasicSwitch() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="flex items-center gap-2">
      <Switch checked={enabled} onCheckedChange={setEnabled} />
      <Label>Enable feature</Label>
    </div>
  )
}
```

## With Label

```typescript
export function SwitchWithLabel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications">Notifications</Label>
        <Switch id="notifications" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="darkmode">Dark mode</Label>
        <Switch id="darkmode" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="updates">Auto-update</Label>
        <Switch id="updates" />
      </div>
    </div>
  )
}
```

## Sizes

```typescript
export function SwitchSizes() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Switch size="sm" />
        <span className="text-sm">Small</span>
      </div>
      <div className="flex items-center gap-2">
        <Switch size="default" />
        <span className="text-sm">Default</span>
      </div>
    </div>
  )
}
```

## Settings Panel

```typescript
export function SettingsSwitchPanel() {
  const [settings, setSettings] = React.useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false,
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-4 round border p-4">
      <h3 className="font-semibold">Settings</h3>

      <div className="space-y-3">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <Label>
              {key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())}
            </Label>
            <Switch
              checked={value}
              onCheckedChange={() => handleToggle(key as keyof typeof settings)}
            />
          </div>
        ))}
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
  marketing: z.boolean().default(false),
  security: z.boolean().default(true),
})

export function SwitchFormExample() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marketing: false,
      security: true,
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
          name="marketing"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between space-y-0">
              <div>
                <FormLabel>Marketing Emails</FormLabel>
                <FormDescription>
                  Receive emails about new features and products
                </FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="security"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between space-y-0">
              <div>
                <FormLabel>Security Alerts</FormLabel>
                <FormDescription>
                  Get notified about unusual account activity
                </FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
```

## Privacy Controls

```typescript
export function PrivacySwitches() {
  const [privacy, setPrivacy] = React.useState({
    public: true,
    allowMessages: false,
    shareActivity: false,
  })

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="font-semibold">Privacy Settings</h3>

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium">Public Profile</p>
            <p className="text-sm text-muted-foreground">
              Allow anyone to find your profile
            </p>
          </div>
          <Switch
            checked={privacy.public}
            onCheckedChange={(checked) =>
              setPrivacy((prev) => ({ ...prev, public: checked }))
            }
          />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium">Allow Messages</p>
            <p className="text-sm text-muted-foreground">
              Let others send you direct messages
            </p>
          </div>
          <Switch
            checked={privacy.allowMessages}
            onCheckedChange={(checked) =>
              setPrivacy((prev) => ({ ...prev, allowMessages: checked }))
            }
          />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium">Share Activity</p>
            <p className="text-sm text-muted-foreground">
              Share your activity with followers
            </p>
          </div>
          <Switch
            checked={privacy.shareActivity}
            onCheckedChange={(checked) =>
              setPrivacy((prev) => ({ ...prev, shareActivity: checked }))
            }
          />
        </div>
      </div>
    </div>
  )
}
```

## Disabled Switch

```typescript
export function DisabledSwitch() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Switch checked={enabled} onCheckedChange={setEnabled} />
        <Label>Enabled</Label>
      </div>

      <div className="flex items-center gap-2">
        <Switch disabled />
        <Label opacity-50">Disabled (off)</Label>
      </div>

      <div className="flex items-center gap-2">
        <Switch defaultChecked disabled />
        <Label className="opacity-50">Disabled (on)</Label>
      </div>
    </div>
  )
}
```

## Theme Toggle Switch

```typescript
import { Moon, Sun } from 'lucide-react'

export function ThemeToggleSwitch() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border">
      <Sun className="w-4 h-4 text-yellow-500" />
      <Switch checked={isDark} onCheckedChange={setIsDark} />
      <Moon className="w-4 h-4 text-blue-500" />
      <span className="ml-auto text-sm text-muted-foreground">
        {isDark ? 'Dark' : 'Light'} Mode
      </span>
    </div>
  )
}
```

## Props Interface

```typescript
interface SwitchProps extends React.ComponentProps<
  typeof SwitchPrimitive.Root
> {
  className?: string
  size?: 'sm' | 'default'
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  defaultChecked?: boolean
}
```

## Accessibility

- **Keyboard Support:** Space or Enter to toggle
- **Screen Readers:** Announces switch state (on/off)
- **Labels:** Always use associated `<label>` elements
- **Focus:** Clear focus indicator
- **ARIA Attributes:** Proper `aria-checked` state

### Accessible Implementation

```typescript
export function AccessibleSwitch() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="flex items-center gap-2">
      <Switch
        id="accessible"
        checked={enabled}
        onCheckedChange={setEnabled}
        aria-describedby="switch-desc"
      />
      <div>
        <Label htmlFor="accessible">Feature</Label>
        <p id="switch-desc" className="text-xs text-muted-foreground">
          Turn this feature on or off
        </p>
      </div>
    </div>
  )
}
```

## Styling and Customization

### Larger Switch

```typescript
<Switch className="scale-125" />
```

### Custom Colors

```typescript
<Switch className="data-checked:bg-green-500 data-unchecked:bg-gray-300" />
```

### Switch with Icon

```typescript
<div className="flex items-center gap-2">
  <Switch id="volume" className="relative" />
  <Label htmlFor="volume" className="flex items-center gap-2">
    {enabled ? (
      <Volume2 className="w-4 h-4" />
    ) : (
      <VolumeX className="w-4 h-4" />
    )}
    Volume
  </Label>
</div>
```

## Dark Mode

Full dark mode support with automatic color adjustments.

```typescript
<Switch className="dark:data-checked:bg-slate-700 dark:data-unchecked:bg-slate-600" />
```

## Advanced Patterns

### Dependent Switches

```typescript
export function DependentSwitches() {
  const [mainEnabled, setMainEnabled] = React.useState(false)
  const [subEnabled, setSubEnabled] = React.useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Enable main feature</Label>
        <Switch checked={mainEnabled} onCheckedChange={setMainEnabled} />
      </div>

      <div className="flex items-center justify-between opacity-50 pointer-events-none">
        <Label>Sub-feature (requires main)</Label>
        <Switch
          checked={subEnabled && mainEnabled}
          onCheckedChange={setSubEnabled}
          disabled={!mainEnabled}
        />
      </div>
    </div>
  )
}
```

### Switch with Loading

```typescript
export function LoadingSwitch() {
  const [enabled, setEnabled] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleToggle = async (checked: boolean) => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    setEnabled(checked)
    setLoading(false)
  }

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={enabled}
        onCheckedChange={handleToggle}
        disabled={loading}
      />
      {loading && <span className="text-xs text-muted-foreground">Updating...</span>}
    </div>
  )
}
```

## Performance Considerations

- **Controlled Component:** Always manage state with `checked` and
  `onCheckedChange`
- **Memoization:** Wrap switch lists with `React.memo()` for large collections
- **Debouncing:** Add debounce for switches that trigger API calls

```typescript
const debouncedToggle = React.useMemo(
  () => debounce((checked: boolean) => updateApi(checked), 300),
  []
)

<Switch onCheckedChange={debouncedToggle} />
```

## Troubleshooting

### Switch Not Responding

Ensure proper state management:

```typescript
// ✅ Correct
const [checked, setChecked] = React.useState(false)
<Switch checked={checked} onCheckedChange={setChecked} />

// ❌ Wrong - no state
<Switch />
```

### Not Toggling

Ensure proper event handler:

```typescript
// ✅ Correct
<Switch onCheckedChange={(checked) => setState(checked)} />

// ❌ Wrong - missing onChange
<Switch />
```

## Related Components

- [Checkbox](/docs-v2/component-docs/shadcn-components/checkbox.md) — Multiple
  selections
- [Toggle](/toggle.md) — Button-style toggle
- [Form](/docs-v2/component-docs/base-components/form.md) — Form integration
