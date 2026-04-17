# Tabs Component

Organize content into multiple sections with a tabbed interface. Built on
[Radix UI Tabs](https://www.radix-ui.com/docs/primitives/components/tabs).

## Import

```typescript
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@shadcn/tabs'
```

## Basic Usage

```typescript
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@shadcn/tabs'

export function BasicTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <p>Content for tab 1</p>
      </TabsContent>

      <TabsContent value="tab2">
        <p>Content for tab 2</p>
      </TabsContent>

      <TabsContent value="tab3">
        <p>Content for tab 3</p>
      </TabsContent>
    </Tabs>
  )
}
```

## Variants

### Default Variant

The default variant displays tabs with a background container.

```typescript
export function DefaultVariantTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList variant="default">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="account" className="mt-4">
        <div className="space-y-4">
          <h3 className="font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account information and preferences.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="password" className="mt-4">
        <div className="space-y-4">
          <h3 className="font-medium">Change Password</h3>
          <p className="text-sm text-muted-foreground">
            Update your password to keep your account secure.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="notifications" className="mt-4">
        <div className="space-y-4">
          <h3 className="font-medium">Notification Settings</h3>
          <p className="text-sm text-muted-foreground">
            Control how and when you receive notifications.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
```

### Line Variant

The line variant displays tabs with a horizontal line indicator beneath the
active tab.

```typescript
export function LineVariantTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-4">
        <p>Overview content goes here</p>
      </TabsContent>

      <TabsContent value="analytics" className="mt-4">
        <p>Analytics content goes here</p>
      </TabsContent>

      <TabsContent value="reports" className="mt-4">
        <p>Reports content goes here</p>
      </TabsContent>
    </Tabs>
  )
}
```

## Orientation

### Horizontal (Default)

```typescript
export function HorizontalTabs() {
  return (
    <Tabs defaultValue="tab1" orientation="horizontal">
      <TabsList>
        <TabsTrigger value="tab1">First</TabsTrigger>
        <TabsTrigger value="tab2">Second</TabsTrigger>
        <TabsTrigger value="tab3">Third</TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">Horizontal content 1</TabsContent>
      <TabsContent value="tab2">Horizontal content 2</TabsContent>
      <TabsContent value="tab3">Horizontal content 3</TabsContent>
    </Tabs>
  )
}
```

### Vertical Orientation

```typescript
export function VerticalTabs() {
  return (
    <div className="flex gap-4">
      <Tabs defaultValue="tab1" orientation="vertical" className="flex flex-col">
        <TabsList className="flex-col h-fit w-fit">
          <TabsTrigger value="tab1" className="justify-start">
            First Tab
          </TabsTrigger>
          <TabsTrigger value="tab2" className="justify-start">
            Second Tab
          </TabsTrigger>
          <TabsTrigger value="tab3" className="justify-start">
            Third Tab
          </TabsTrigger>
        </TabsList>

        <div className="flex-1">
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
```

## Patterns

### Settings Tabs

Common pattern for settings or account management interfaces.

```typescript
import { Input } from '@shadcn/input'
import { Label } from '@shadcn/label'
import { Button } from '@shadcn/button'

export function SettingsTabs() {
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Display Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your.email@example.com" />
        </div>
        <Button>Save Changes</Button>
      </TabsContent>

      <TabsContent value="security" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">Current Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input id="new-password" type="password" />
        </div>
        <Button>Update Password</Button>
      </TabsContent>

      <TabsContent value="billing" className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Manage your billing information and subscriptions.
        </p>
        <Button variant="outline">Add Payment Method</Button>
      </TabsContent>
    </Tabs>
  )
}
```

### Dashboard Tabs

Dashboard with multiple data views.

```typescript
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shadcn/card'

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="performance">Performance</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Your dashboard overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">$45.2K</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="performance">
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
            <CardDescription>System performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Performance data and metrics displayed here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Detailed analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Analytics data displayed here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>Generated reports</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your reports are displayed here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
```

### Wizard Tabs

Step-by-step form using tabs.

```typescript
export function WizardTabs() {
  const [currentStep, setCurrentStep] = React.useState('step1')

  return (
    <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="step1" disabled={currentStep !== 'step1'}>
          Step 1
        </TabsTrigger>
        <TabsTrigger value="step2" disabled={currentStep !== 'step2'}>
          Step 2
        </TabsTrigger>
        <TabsTrigger value="step3" disabled={currentStep !== 'step3'}>
          Step 3
        </TabsTrigger>
      </TabsList>

      <TabsContent value="step1" className="space-y-4">
        <h3 className="font-medium">Step 1: Basic Information</h3>
        <p className="text-sm text-muted-foreground">
          Enter your basic information to get started.
        </p>
        <Button onClick={() => setCurrentStep('step2')}>Next</Button>
      </TabsContent>

      <TabsContent value="step2" className="space-y-4">
        <h3 className="font-medium">Step 2: Additional Details</h3>
        <p className="text-sm text-muted-foreground">
          Provide additional information.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setCurrentStep('step1')}>
            Back
          </Button>
          <Button onClick={() => setCurrentStep('step3')}>Next</Button>
        </div>
      </TabsContent>

      <TabsContent value="step3" className="space-y-4">
        <h3 className="font-medium">Step 3: Confirmation</h3>
        <p className="text-sm text-muted-foreground">
          Review and confirm your information.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setCurrentStep('step2')}>
            Back
          </Button>
          <Button>Complete</Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}
```

### Tab Group with Icons

```typescript
import { Home, Settings, MessageSquare, Users } from 'lucide-react'

export function IconTabs() {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="home" className="gap-2">
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Home</span>
        </TabsTrigger>
        <TabsTrigger value="messages" className="gap-2">
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">Messages</span>
        </TabsTrigger>
        <TabsTrigger value="team" className="gap-2">
          <Users className="w-4 h-4" />
          <span className="hidden sm:inline">Team</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className="gap-2">
          <Settings className="w-4 h-4" />
          <span className="hidden sm:inline">Settings</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="home">Home content</TabsContent>
      <TabsContent value="messages">Messages content</TabsContent>
      <TabsContent value="team">Team content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  )
}
```

## Props Interface

### Tabs

```typescript
interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  className?: string
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
  activationMode?: 'automatic' | 'manual'
}
```

### TabsList

```typescript
interface TabsListProps extends React.ComponentProps<
  typeof TabsPrimitive.List
> {
  className?: string
  variant?: 'default' | 'line'
}
```

### TabsTrigger

```typescript
interface TabsTriggerProps extends React.ComponentProps<
  typeof TabsPrimitive.Trigger
> {
  className?: string
  value: string
  disabled?: boolean
}
```

### TabsContent

```typescript
interface TabsContentProps extends React.ComponentProps<
  typeof TabsPrimitive.Content
> {
  className?: string
  value: string
  forceMount?: boolean
}
```

## Accessibility

- **Keyboard Navigation:** Use arrow keys to navigate between tabs, Enter or
  Space to activate
- **Screen Readers:** Proper ARIA labels for tab roles and states
- **Focus Management:** Focus trap within tab content, visible focus indicators
- **Semantic HTML:** Uses native `<button>` elements for triggers
- **ARIA Attributes:**
  - `role="tablist"` on TabsList
  - `role="tab"` on TabsTrigger
  - `role="tabpanel"` on TabsContent
  - `aria-selected` indicates active tab
  - `aria-controls` links trigger to associated panel

## Styling and Customization

### Custom Colors

```typescript
export function CustomColoredTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="bg-blue-100">
        <TabsTrigger
          value="tab1"
          className="data-active:bg-blue-500 data-active:text-white"
        >
          Active Color
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          className="data-active:bg-blue-500 data-active:text-white"
        >
          Custom Styling
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  )
}
```

### Full Width Tabs

```typescript
export function FullWidthTabs() {
  return (
    <Tabs defaultValue="tab1" className="w-full">
      <TabsList className="grid w-full gap-0 rounded-none">
        <TabsTrigger
          value="tab1"
          className="rounded-none border-b-2 border-transparent data-active:border-foreground data-active:bg-transparent"
        >
          Full Width Tab 1
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          className="rounded-none border-b-2 border-transparent data-active:border-foreground data-active:bg-transparent"
        >
          Full Width Tab 2
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  )
}
```

## Dark Mode

Tabs fully support dark mode with automatic color adaptation through Tailwind's
`dark:` prefix.

```typescript
export function DarkModeTabs() {
  return (
    <Tabs
      defaultValue="tab1"
      className="dark:bg-slate-950"
    >
      <TabsList className="dark:bg-slate-800">
        <TabsTrigger value="tab1" className="dark:text-slate-400 dark:data-active:text-slate-50">
          Dark Tab
        </TabsTrigger>
        <TabsTrigger value="tab2" className="dark:text-slate-400 dark:data-active:text-slate-50">
          Dark Tab
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1" className="dark:text-slate-200">
        Dark mode content
      </TabsContent>
      <TabsContent value="tab2" className="dark:text-slate-200">
        Dark mode content
      </TabsContent>
    </Tabs>
  )
}
```

## Advanced Features

### Controlled Tabs

```typescript
export function ControlledTabs() {
  const [activeTab, setActiveTab] = React.useState('tab1')

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>

        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
        <TabsContent value="tab3">Tab 3 content</TabsContent>
      </Tabs>

      <p className="text-sm text-muted-foreground">
        Current tab: <span className="font-semibold">{activeTab}</span>
      </p>
    </div>
  )
}
```

### Lazy Loading Tab Content

```typescript
export function LazyLoadingTabs() {
  const [loadedTabs, setLoadedTabs] = React.useState(new Set(['tab1']))

  const handleTabChange = (value: string) => {
    setLoadedTabs((prev) => new Set(prev).add(value))
  }

  return (
    <Tabs defaultValue="tab1" onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        {loadedTabs.has('tab1') && <p>Tab 1 content (cached)</p>}
      </TabsContent>

      <TabsContent value="tab2">
        {loadedTabs.has('tab2') && <p>Tab 2 content (loaded on first view)</p>}
      </TabsContent>

      <TabsContent value="tab3">
        {loadedTabs.has('tab3') && <p>Tab 3 content (loaded on first view)</p>}
      </TabsContent>
    </Tabs>
  )
}
```

### Dynamic Tab Management

```typescript
export function DynamicTabs() {
  const [tabs, setTabs] = React.useState([
    { id: '1', label: 'Tab 1' },
    { id: '2', label: 'Tab 2' },
  ])
  const [activeTab, setActiveTab] = React.useState('1')

  const addTab = () => {
    const newId = String(Math.max(...tabs.map((t) => Number(t.id))) + 1)
    setTabs([...tabs, { id: newId, label: `Tab ${newId}` }])
  }

  const removeTab = (id: string) => {
    const newTabs = tabs.filter((t) => t.id !== id)
    setTabs(newTabs)
    if (activeTab === id && newTabs.length > 0) {
      setActiveTab(newTabs[0].id)
    }
  }

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center gap-2">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button onClick={addTab} size="sm">
            Add Tab
          </Button>
        </div>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="flex items-center justify-between">
            <p>{tab.label} content</p>
            <Button onClick={() => removeTab(tab.id)} size="sm" variant="ghost">
              Remove
            </Button>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
```

## Performance Considerations

- **Content Rendering:** Only active tab content is rendered when using
  `TabsContent` without `forceMount`
- **Lazy Loading:** Implement tab content lazy loading for better performance
  with many tabs
- **List Virtualization:** For very large numbers of tabs, consider
  virtualization
- **Memoization:** Use `React.memo()` for tab content components to prevent
  unnecessary re-renders

```typescript
const TabPanel = React.memo(({ id, content }: { id: string; content: ReactNode }) => (
  <TabsContent value={id}>{content}</TabsContent>
))
```

## Troubleshooting

### Tab Content Not Showing

Ensure the `value` prop on `TabsContent` matches a `value` prop on a
`TabsTrigger`.

```typescript
// ❌ Wrong - values don't match
<Tabs defaultValue="tab1">
  <TabsTrigger value="tab-one">Tab</TabsTrigger>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>

// ✅ Correct - values match
<Tabs defaultValue="tab1">
  <TabsTrigger value="tab1">Tab</TabsTrigger>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>
```

### Focus Issues

Use `activationMode="manual"` if you want tabs to require explicit activation
rather than focus-based activation.

```typescript
<Tabs activationMode="manual">
  {/* Tabs require click, not arrow key navigation */}
</Tabs>
```

### Styling Not Applied

Check that Tailwind CSS is properly configured and that you're using the
`data-active` selector correctly.

```typescript
// ✅ Correct
<TabsTrigger className="data-active:bg-blue-500">Tab</TabsTrigger>

// ❌ Wrong
<TabsTrigger className="active:bg-blue-500">Tab</TabsTrigger>
```

## Related Components

- [Card](/docs-v2/component-docs/shadcn-components/card.md) — Container
  component
- [Button](/docs-v2/component-docs/base-components/button.md) — Action buttons
- [Pagination](/docs-v2/component-docs/shadcn-components/pagination.md) —
  Multi-page navigation
- [Select](/docs-v2/component-docs/shadcn-components/select.md) — Dropdown
  selection alternative
