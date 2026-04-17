# Logo Component

**Description:** A theme-aware logo component that automatically switches
between light and dark mode versions. Simple wrapper around Next.js Image with
responsive sizing.

**Use Case:** Display the Laborit brand logo in headers, navigation bars, login
pages, and other brand-prominent areas. Automatically adapts to light/dark
theme.

**Variants:** Size (via className), Theme (automatic)

---

## Import

```tsx
import { Logo } from '@/presentation/ui/logo'
```

## Props

```tsx
interface LogoProps {
  /**
   * Additional CSS classes for custom sizing and positioning.
   * Use for responsive sizing and margins.
   * @example "h-8", "w-32 h-10", "sm:h-8 lg:h-10"
   */
  className?: string
}
```

---

## Basic Example

Default logo in header:

```tsx
import { Logo } from '@/presentation/ui/logo'

export function Header() {
  return (
    <header className="border-b py-4">
      <Logo />
    </header>
  )
}
```

---

## Advanced Examples

### Custom Size

Control logo size with Tailwind classes:

```tsx
export function LogoSizes() {
  return (
    <div className="flex flex-col gap-8">
      <div className="border bg-gray-50 p-4">
        <Logo className="h-6" />
      </div>
      <div className="border bg-gray-50 p-4">
        <Logo className="h-10" />
      </div>
      <div className="border bg-gray-50 p-4">
        <Logo className="h-16" />
      </div>
    </div>
  )
}
```

### Navigation Header

Use logo in top navigation:

```tsx
import { Logo } from '@/presentation/ui/logo'
import { Button } from '@/presentation/ui/button'

export function NavigationHeader() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <Logo className="h-8" />

      <div className="flex gap-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Contact</Button>
      </div>

      <Button>Sign In</Button>
    </nav>
  )
}
```

### Login Page

Display logo prominently on login:

```tsx
import { Logo } from '@/presentation/ui/logo'

export function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-linear-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="flex justify-center">
          <Logo className="h-12" />
        </div>

        <h1 className="text-2xl font-bold">Welcome Back</h1>

        <form className="space-y-4">{/* Login form fields */}</form>
      </div>
    </div>
  )
}
```

### Sidebar Logo

Use in collapsed/expandable sidebar:

```tsx
import { Logo } from '@/presentation/ui/logo'
import { Button } from '@/presentation/ui/button'

export function Sidebar({ isExpanded }: { isExpanded: boolean }) {
  return (
    <aside
      className={`border-r transition-all ${isExpanded ? 'w-64' : 'w-20'}`}
    >
      <div className="flex items-center justify-between p-4">
        <Logo
          className={`transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
        />
        <Button variant="ghost" size="icon">
          {/* Toggle button */}
        </Button>
      </div>

      {/* Navigation items */}
    </aside>
  )
}
```

### Footer Logo

Include logo in footer with copyright:

```tsx
import { Logo } from '@/presentation/ui/logo'

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 py-8 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="mb-8 grid grid-cols-3 gap-8">
          <div>
            <Logo className="mb-4 h-8" />
            <p className="text-muted-foreground text-sm">
              Building products that matter.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground border-t pt-8 text-center text-sm">
          <p>&copy; 2024 Laborit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

### Responsive Header

Logo size adapts to screen size:

```tsx
import { Logo } from '@/presentation/ui/logo'

export function ResponsiveHeader() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto px-4">
        <Logo className="h-6 sm:h-8 lg:h-10" />
      </div>
    </header>
  )
}
```

### Loading State with Logo

Show logo during initial app load:

```tsx
import { Logo } from '@/presentation/ui/logo'

export function AppBootloader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <Logo className="mb-4 h-12 animate-pulse" />
        <p className="text-muted-foreground">Loading application...</p>
      </div>
    </div>
  )
}
```

---

## Styling

### Size Variants

Use Tailwind height classes:

```tsx
{
  /* Small - sidebar/compact */
}
;<Logo className="h-6" />

{
  /* Medium - headers */
}
;<Logo className="h-8" />

{
  /* Large - hero sections */
}
;<Logo className="h-12" />

{
  /* Extra Large - landing pages */
}
;<Logo className="h-16" />
```

### Theme Switching

The component automatically detects and respects the current theme:

```tsx
// Light mode: displays Icon-Text-Black.svg
// Dark mode: displays Icon-Text-White.svg
<Logo />
```

### Dark Mode

Works seamlessly with dark mode context:

```tsx
<div className="dark">
  <Logo className="h-8" />
</div>
```

### Custom Styling

Add spacing and effects via className:

```tsx
<Logo className="h-8 mb-4 drop-shadow-lg" />

<Logo className="h-10 object-contain" />

<Logo className="h-12 transition-opacity hover:opacity-80" />
```

---

## Accessibility

- ✅ **Image Alt Text:** Includes "GMT Logo" alt attribute
- ✅ **Semantic:** Wrapped in `<div>` for layout flexibility
- ✅ **Next.js Image:** Optimized for performance with blur data URL
- ✅ **Theme Support:** Respects system dark mode preference

```tsx
{
  /* Alt text is automatically set */
}
;<Logo aria-label="Laborit Logo" className="h-8" />
```

---

## Best Practices

1. **Consistent Size:** Use same size across the app for brand consistency
2. **Clickable:** Wrap in a link to homepage

   ```tsx
   <a href="/">
     <Logo className="h-8" />
   </a>
   ```

3. **Responsive:** Use responsive classes for different screen sizes
4. **Contrast:** Automatically handles light/dark, ensure sufficient contrast in
   custom backgrounds
5. **Loading:** Show logo during app initialization
6. **Spacing:** Add margin for breathing room around logo

---

## Common Patterns

### Logo Link to Home

```tsx
<Link href="/">
  <Logo className="h-8 transition-opacity hover:opacity-80" />
</Link>
```

### Logo with Brand Name

```tsx
<div className="flex items-center gap-2">
  <Logo className="h-8" />
  <span className="text-xl font-bold">Laborit</span>
</div>
```

### Logo in Navigation

```tsx
<nav className="flex items-center justify-between">
  <Logo className="h-8" />
  <Menu />
  <ThemeToggle />
</nav>
```

### Logo with Loading State

```tsx
const isLoading = useQueryClient().isFetching() > 0

return <Logo className={`h-8 ${isLoading ? 'animate-pulse' : ''}`} />
```

---

## Troubleshooting

### Logo Not Showing Correct Theme Version

The component uses `useTheme()` from `next-themes`. Ensure your app has:

```tsx
// In app root or layout
<ThemeProvider>
  <App />
</ThemeProvider>
```

### Size Not Applying

Logo uses `h-8` height by default. Override with className:

```tsx
{
  /* ✅ Correct - custom height */
}
;<Logo className="h-12" />

{
  /* ❌ Won't work - use h-* not fixed width */
}
;<Logo className="w-32" />
```

### Blur Image Not Showing (Expected)

The component includes `blurDataURL` for progressive image loading. This is
intentional to improve perceived performance.

---

## Related Components

- **[Header Navigation](./navigation.md)** — Use logo in navigation bars
- **[Button](./button.md)** — Clickable logo wrapper
- **[Separator](./separator.md)** — Separate logo from content
