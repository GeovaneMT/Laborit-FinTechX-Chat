# MagicUI Components

Animated and advanced UI effects using motion and visual polish.

## Overview

MagicUI components add sophisticated animations, transitions, and visual effects
to enhance user experience. These components provide animation-focused
alternatives to standard UI.

**Source:** [MagicUI](https://magicui.design/) **Location:**
`src/presentation/ui/magicui/` **Count:** 3+ components

## Component List

| Component            | Purpose                     | Use Case                            |
| -------------------- | --------------------------- | ----------------------------------- |
| **AnimatedButton**   | Button with animation       | Interactive CTAs, highlight actions |
| **CircularProgress** | Animated progress ring      | Loading states, progress indication |
| **StripedPattern**   | Animated striped background | Visual decoration, highlights       |

## Quick Start

### Import MagicUI Components

```tsx
import { AnimatedButton } from '@/presentation/ui/magicui/animated-button'
import { CircularProgress } from '@/presentation/ui/magicui/circular-progress'
import { StripedPattern } from '@/presentation/ui/magicui/striped-pattern'
```

### Basic Usage

```tsx
import { AnimatedButton } from '@/presentation/ui/magicui/animated-button'

export function LandingSection() {
  return (
    <AnimatedButton onClick={() => handleCTA()}>Get Started</AnimatedButton>
  )
}
```

## Component Reference

### AnimatedButton

Interactive button with smooth entrance and hover animations.

```tsx
import { AnimatedButton } from '@/presentation/ui/magicui/animated-button'

// Basic usage
<AnimatedButton>Click me</AnimatedButton>

// With callback
<AnimatedButton onClick={handleClick}>
  Action Button
</AnimatedButton>

// With variant
<AnimatedButton variant="primary" size="lg">
  Primary CTA
</AnimatedButton>

// Icon button
<AnimatedButton aria-label="Close">
  <XIcon className="w-5 h-5" />
</AnimatedButton>
```

**Best For:**

- Primary call-to-action buttons
- Hero section buttons
- Highlight important actions
- Landing page CTAs

**When NOT to Use:**

- Subtle secondary actions
- Icon-only buttons in toolbars
- Disabled buttons (remove animation)

### CircularProgress

Animated circular progress indicator.

```tsx
import { CircularProgress } from '@/presentation/ui/magicui/circular-progress'

// Basic usage
<CircularProgress value={65} />

// With label
<CircularProgress value={65} label="65%" />

// Indeterminate (loading)
<CircularProgress isIndeterminate={true} />

// With custom size
<CircularProgress value={75} size="lg" />

// Different color
<CircularProgress value={80} color="green" />
```

**Props:**

- `value` — Progress percentage (0-100)
- `label` — Display text
- `isIndeterminate` — Loading animation
- `size` — sm, md, lg
- `color` — Color theme

**Best For:**

- File uploads
- Long-running operations
- Progress tracking
- Loading states

**Accessibility:**

- Always include `aria-label` for loading states
- Display numeric value when possible

```tsx
<CircularProgress
  value={progress}
  label={`${progress}%`}
  aria-label={`Uploading: ${progress}% complete`}
/>
```

### StripedPattern

Animated striped background pattern.

```tsx
import { StripedPattern } from '@/presentation/ui/magicui/striped-pattern'

// Basic usage
<StripedPattern className="p-8" />

// As background wrapper
<StripedPattern className="w-full h-64">
  <div className="relative z-10 p-8 text-white">
    Content over striped pattern
  </div>
</StripedPattern>

// Custom colors
<StripedPattern
  color1="blue"
  color2="purple"
  className="h-32"
/>

// Animation speed
<StripedPattern speed="slow" className="h-32" />
<StripedPattern speed="fast" className="h-32" />
```

**Best For:**

- Section backgrounds
- Attention-grabbing elements
- Visual separation
- Feature highlights

**When NOT to Use:**

- Text-heavy content (readability issue)
- Accessibility-critical sections
- Applications with seizure warnings

## Animation Performance

MagicUI components use GPU-accelerated animations:

```tsx
// Performant — uses transform/opacity
<AnimatedButton>Click</AnimatedButton>

// Note: Animations loop/trigger only when necessary
// Disabled animations automatically remove animation computations
```

## Dark Mode Support

All MagicUI components support dark mode:

```tsx
// Automatically adapts colors
<AnimatedButton>Dark mode compatible</AnimatedButton>
<CircularProgress value={50} />
<StripedPattern />
```

## Accessibility

MagicUI components maintain accessibility:

1. **Motion Preferences** — Respects `prefers-reduced-motion`
2. **Labels** — Include `aria-label` for icon buttons
3. **Focus States** — Visible focus indicators
4. **Keyboard Support** — Full keyboard navigation
5. **Screen Readers** — Proper ARIA attributes

```tsx
// ✅ Accessible animated button
<AnimatedButton
  onClick={handleSubmit}
  disabled={isLoading}
  aria-label="Submit form"
>
  {isLoading ? 'Submitting...' : 'Submit'}
</AnimatedButton>

// ✅ Accessible progress indicator
<CircularProgress
  value={progress}
  label={`${progress}%`}
  aria-label={`File upload ${progress}% complete`}
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin={0}
  aria-valuemax={100}
/>
```

## Common Patterns

### CTA Section with AnimatedButton

```tsx
import { AnimatedButton } from '@/presentation/ui/magicui/animated-button'

;<section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16">
  <div className="text-center">
    <h2 className="mb-4 text-4xl font-bold text-white">
      Ready to get started?
    </h2>
    <p className="mb-8 text-lg text-blue-100">
      Join thousands of users already using our platform
    </p>
    <AnimatedButton size="lg" variant="white">
      Sign Up Free
    </AnimatedButton>
  </div>
</section>
```

### Loader with CircularProgress

```tsx
import { CircularProgress } from '@/presentation/ui/magicui/circular-progress'

;<div className="flex flex-col items-center justify-center py-8">
  <CircularProgress isIndeterminate={true} aria-label="Loading content" />
  <p className="mt-4 text-slate-600">Loading...</p>
</div>
```

### Hero with Animated Elements

```tsx
import { AnimatedButton } from '@/presentation/ui/magicui/animated-button'
import { StripedPattern } from '@/presentation/ui/magicui/striped-pattern'

;<StripedPattern className="relative flex h-96 w-full items-center justify-center">
  <div className="relative z-10 text-center text-white">
    <h1 className="mb-4 text-5xl font-bold">Welcome</h1>
    <p className="mb-8 text-xl">Explore amazing features</p>
    <AnimatedButton size="lg">Discover More</AnimatedButton>
  </div>
</StripedPattern>
```

## Performance Considerations

MagicUI animations are optimized for performance:

- ✅ GPU-accelerated (uses `transform`, `opacity`)
- ✅ Respects device capabilities
- ✅ Automatic cleanup on unmount
- ✅ Optional motion preferences support

For accessibility-conscious interfaces or users with motion sensitivity:

```tsx
// Graceful degradation
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

<AnimatedButton disabled={prefersReducedMotion}>
  {/* Component still works, just without animation */}
</AnimatedButton>
```

## Customization

### Extending MagicUI Components

Create project-specific variants:

```tsx
import { AnimatedButton as BaseAnimatedButton } from '@/presentation/ui/magicui/animated-button'

export function ProjectAnimatedButton(props) {
  return (
    <BaseAnimatedButton
      {...props}
      className={`custom-class ${props.className}`}
    />
  )
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Android)

**Note:** Some animations may degrade gracefully on older browsers or low-end
devices.

## When to Use Animations

✅ **Use animations for:**

- Primary call-to-action buttons
- Loading/progress states
- Visual emphasis on important elements
- User engagement (landing pages)
- Feedback (successful actions)

❌ **Avoid animations for:**

- Frequently triggered actions (button spam)
- Accessibility-critical workflows
- Users with `prefers-reduced-motion` enabled
- Performance-sensitive applications
- Users on low-end devices (consider disabling)

## Resources

- [MagicUI Documentation](https://magicui.design/)
- [Motion & Animation Best Practices](../../design-system/README.md)
- [Accessibility Guidelines](../../design-system/accessibility.md)
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Web Animation Performance](https://web.dev/animations-guide/)

---

**Last Updated:** April 14, 2026 | **Components:** 3+ | **Status:** Production
Ready
