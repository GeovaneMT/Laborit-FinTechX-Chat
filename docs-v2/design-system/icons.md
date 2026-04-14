# Icons

Complete reference for icon usage, available icon sets, and guidelines.

## Available Icon Sets

Laborit uses multiple icon sets for different use cases:

### Heroicons (Primary)

**Primary icon set** for UI elements, navigation, and general usage.

- **Library:** [heroicons.com](https://heroicons.com/)
- **Style:** Clean, minimal, 24px base size
- **Usage:** General UI icons, actions, navigation
- **Import:** Can be installed via `@heroicons/react`

### Lucide Icons (Alternative)

**Alternative icon set** for modern, consistent icons.

- **Library:** [lucide.dev](https://lucide.dev/icons/)
- **Style:** Consistent weight, 24px base
- **Usage:** When Heroicons lacks coverage

### Custom Icons

**Project-specific icons** for brand elements and custom designs.

- **Location:** `src/presentation/ui/icons/` (if any custom icons exist)
- **Format:** SVG components or Tailwind classes

## Icon Sizing

Use consistent icon sizes based on context:

| Size     | Pixels | Utility     | Use Case                  |
| -------- | ------ | ----------- | ------------------------- |
| **sm**   | 16px   | `w-4 h-4`   | Inline icons, badges      |
| **base** | 20px   | `w-5 h-5`   | Standard UI icons         |
| **lg**   | 24px   | `w-6 h-6`   | Navigation icons, buttons |
| **xl**   | 32px   | `w-8 h-8`   | Large icons, features     |
| **2xl**  | 40px   | `w-10 h-10` | Hero icons, full features |
| **3xl**  | 48px   | `w-12 h-12` | Large feature icons       |

## Icon Usage Examples

### Inline Icons in Text

```tsx
import { CheckIcon } from '@heroicons/react/24/solid'

// Success badge
<div className="flex items-center gap-2">
  <CheckIcon className="w-4 h-4 text-green-600" />
  <span className="text-sm">Completed</span>
</div>

// Error indicator
<div className="flex items-center gap-2">
  <ExclamationIcon className="w-4 h-4 text-red-600" />
  <span className="text-sm">Error</span>
</div>
```

### Button Icons

```tsx
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

// Icon before text
<button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded">
  <PlusIcon className="w-5 h-5" />
  <span>Add Item</span>
</button>

// Icon after text
<button className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded">
  <span>Delete</span>
  <TrashIcon className="w-5 h-5" />
</button>

// Icon only (with title for accessibility)
<button title="Settings" className="p-2 hover:bg-slate-100 rounded">
  <CogIcon className="w-6 h-6" />
</button>
```

### Navigation Icons

```tsx
import { HomeIcon, CalendarIcon, UsersIcon } from '@heroicons/react/24/outline'

// Navigation with icons
;<nav className="flex gap-4">
  <a href="/" className="flex items-center gap-2 text-sm hover:text-blue-600">
    <HomeIcon className="h-6 w-6" />
    <span>Home</span>
  </a>
  <a
    href="/calendar"
    className="flex items-center gap-2 text-sm hover:text-blue-600"
  >
    <CalendarIcon className="h-6 w-6" />
    <span>Calendar</span>
  </a>
  <a
    href="/team"
    className="flex items-center gap-2 text-sm hover:text-blue-600"
  >
    <UsersIcon className="h-6 w-6" />
    <span>Team</span>
  </a>
</nav>
```

### Status Icons

```tsx
import { CheckCircleIcon, ExclamationIcon, InformationCircleIcon } from '@heroicons/react/24/solid'

// Success status
<div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded">
  <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
  <div>
    <h4 className="font-semibold text-green-900">Success</h4>
    <p className="text-sm text-green-800">Operation completed successfully</p>
  </div>
</div>

// Warning status
<div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded">
  <ExclamationIcon className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
  <div>
    <h4 className="font-semibold text-amber-900">Warning</h4>
    <p className="text-sm text-amber-800">Please review before proceeding</p>
  </div>
</div>

// Info status
<div className="flex items-start gap-3 p-4 bg-sky-50 border border-sky-200 rounded">
  <InformationCircleIcon className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
  <div>
    <h4 className="font-semibold text-sky-900">Information</h4>
    <p className="text-sm text-sky-800">This feature requires additional setup</p>
  </div>
</div>
```

### Loading Spinner

```tsx
import { ArrowPathIcon } from '@heroicons/react/24/solid'

// Animated loading
;<div className="flex items-center gap-2">
  <ArrowPathIcon className="h-5 w-5 animate-spin text-blue-600" />
  <span className="text-sm">Loading...</span>
</div>
```

### Feature Icons

```tsx
import {
  SparklesIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

// Feature grid
;<div className="grid grid-cols-3 gap-6">
  <div className="text-center">
    <SparklesIcon className="mx-auto mb-2 h-12 w-12 text-yellow-600" />
    <h3 className="font-semibold">Quality</h3>
    <p className="text-sm text-slate-600">Premium quality</p>
  </div>
  <div className="text-center">
    <LightBulbIcon className="mx-auto mb-2 h-12 w-12 text-blue-600" />
    <h3 className="font-semibold">Innovation</h3>
    <p className="text-sm text-slate-600">Cutting edge</p>
  </div>
  <div className="text-center">
    <RocketLaunchIcon className="mx-auto mb-2 h-12 w-12 text-purple-600" />
    <h3 className="font-semibold">Performance</h3>
    <p className="text-sm text-slate-600">Lightning fast</p>
  </div>
</div>
```

## Icon Best Practices

### Accessibility

1. **Meaningful Icons** — Use icons that clearly represent their purpose
2. **Context** — Pair icons with text when meaning isn't immediately clear
3. **aria-label** — Add labels for icon-only buttons

```tsx
// ✅ Good — Icon with text
<button className="flex items-center gap-2">
  <DownloadIcon className="w-5 h-5" />
  <span>Download</span>
</button>

// ❌ Poor — Icon only without label
<button>
  <DownloadIcon className="w-5 h-5" />
</button>

// ✅ Good — Icon only with aria-label
<button aria-label="Download file" className="p-2">
  <DownloadIcon className="w-5 h-5" />
</button>
```

### Color Usage

1. **Avoid Color-Only Communication** — Don't rely solely on icon color for
   meaning
2. **Contrast** — Ensure icons have sufficient contrast against background
3. **Dark Mode** — Test icon colors in both light and dark modes

```tsx
// ✅ Good — Color + text + icon
<div className="flex items-center gap-2">
  <CheckIcon className="w-5 h-5 text-green-600" />
  <span className="text-green-700">Completed</span>
</div>

// Better — Color + context
<status className="text-sm font-medium text-green-700">
  <CheckIcon className="w-4 h-4 inline mr-1" />
  Task completed
</status>
```

### Sizing

1. **Consistency** — Use consistent sizes for related icons
2. **Scale Appropriately** — Larger icons for features, smaller for inline
3. **Respect Padding** — Ensure icons don't appear cramped

```tsx
// ✅ Good — Consistent sizing
<nav className="flex gap-4">
  {navItems.map((item) => (
    <a key={item.id} className="flex items-center gap-2">
      <item.Icon className="h-6 w-6" />
      <span>{item.label}</span>
    </a>
  ))}
</nav>
```

### Animation

Use icon animations sparingly for loading or interactive states:

```tsx
// Spinning loader
<ArrowPathIcon className="w-5 h-5 animate-spin" />

// Pulse animation
<BellIcon className="w-5 h-5 animate-pulse" />

// Bounce animation
<ChevronDownIcon className="w-5 h-5 animate-bounce" />
```

## Icon Color Guidelines

| Use Case            | Color     | Utility              |
| ------------------- | --------- | -------------------- |
| Success / Positive  | Green 600 | `text-green-600`     |
| Error / Destructive | Red 600   | `text-red-600`       |
| Warning / Caution   | Amber 600 | `text-amber-600`     |
| Info / Notice       | Sky 600   | `text-sky-600`       |
| Primary Action      | Blue 600  | `text-blue-600`      |
| Neutral / Default   | Slate 600 | `text-slate-600`     |
| Muted               | Slate 400 | `text-slate-400`     |
| Light Mode          | Slate 900 | `text-slate-900`     |
| Dark Mode           | Slate 50  | `dark:text-slate-50` |

## Finding & Using Icons

### Heroicons

1. Visit [heroicons.com](https://heroicons.com/)
2. Search for icon by name or category
3. Copy the React import or SVG code
4. Import in your component

### Lucide Icons

1. Visit [lucide.dev](https://lucide.dev/icons/)
2. Search by keyword
3. Copy the React import
4. Install: `npm install lucide-react`

### Custom Icons

Place custom SVG icons in `src/presentation/ui/icons/` and export as React
components.

## Icon Best Practices Summary

- ✅ Use consistent icon sets (prefer Heroicons or Lucide)
- ✅ Size icons appropriately for context (16–48px)
- ✅ Pair icons with text labels when needed
- ✅ Use `aria-label` for icon-only buttons
- ✅ Test colors in light and dark modes
- ✅ Avoid color-only communication
- ✅ Use semantic colors (green for success, red for error)
- ❌ Don't use inconsistent icon styles
- ❌ Don't make icons too small (<16px for standard UI)
- ❌ Don't add too many decorative animations

---

**Last Updated:** April 14, 2026 | **Icon Library:** Heroicons / Lucide Icons
