# Spacing & Grid System

Complete reference for spacing tokens and grid system guidelines used in
Laborit.

## Spacing Scale

Laborit uses Tailwind CSS's **rem-based spacing scale** for consistent and
scalable spacing throughout the application.

### Complete Spacing Scale

| Value   | Pixels | Rem      | Utility Classes       | Use Case                     |
| ------- | ------ | -------- | --------------------- | ---------------------------- |
| **0**   | 0px    | 0        | `p-0`, `m-0`, `gap-0` | Reset spacing                |
| **1px** | 1px    | —        | `p-px`, `border`      | Thin borders                 |
| **0.5** | 2px    | 0.125rem | `p-0.5`               | Minimal spacing              |
| **1**   | 4px    | 0.25rem  | `p-1`                 | Small spacing                |
| **2**   | 8px    | 0.5rem   | `p-2`                 | Compact spacing              |
| **3**   | 12px   | 0.75rem  | `p-3`                 | Small spacing                |
| **4**   | 16px   | 1rem     | `p-4`                 | Standard spacing             |
| **5**   | 20px   | 1.25rem  | `p-5`                 | Medium spacing               |
| **6**   | 24px   | 1.5rem   | `p-6`                 | Comfortable spacing          |
| **7**   | 28px   | 1.75rem  | `p-7`                 | Generous spacing             |
| **8**   | 32px   | 2rem     | `p-8`                 | Large spacing                |
| **10**  | 40px   | 2.5rem   | `p-10`                | Extra large spacing          |
| **12**  | 48px   | 3rem     | `p-12`                | Major sections               |
| **14**  | 56px   | 3.5rem   | `p-14`                | Page sections                |
| **16**  | 64px   | 4rem     | `p-16`                | Large sections               |
| **20**  | 80px   | 5rem     | `p-20`                | Full page spacing            |
| **24**  | 96px   | 6rem     | `p-24`                | Oversized spacing            |
| **28**  | 112px  | 7rem     | `p-28`                | Extra oversized              |
| **32**  | 128px  | 8rem     | `p-32`                | Full viewport height spacing |

## Spacing Utilities

### Margin Utilities

```tsx
// Margin on all sides
<div className="m-4">Content with 16px margin</div>

// Margin on X (left/right)
<div className="mx-4">Content with horizontal margin</div>

// Margin on Y (top/bottom)
<div className="my-4">Content with vertical margin</div>

// Individual sides
<div className="mt-4 mr-2 mb-6 ml-1">Individual margin values</div>

// Margin auto (centering)
<div className="mx-auto">Centered content</div>
```

### Padding Utilities

```tsx
// Padding on all sides
<div className="p-4">Content with 16px padding</div>

// Padding on X (left/right)
<div className="px-4">Content with horizontal padding</div>

// Padding on Y (top/bottom)
<div className="py-4">Content with vertical padding</div>

// Individual sides
<div className="pt-4 pr-2 pb-6 pl-1">Individual padding values</div>

// Responsive padding
<div className="p-2 md:p-4 lg:p-6">Adapts to screen size</div>
```

### Gap Utilities (Flexbox & Grid)

```tsx
// Gap between flex items
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Gap between grid items
<div className="grid grid-cols-3 gap-6">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

// Responsive gap
<div className="flex gap-2 md:gap-4 lg:gap-6">
  Column items
</div>
```

## Spacing Guidelines

### Composition Spacing

Use consistent spacing increments to create visual rhythm:

```tsx
// Tight composition
<div className="space-y-2">
  <h3 className="font-semibold">Title</h3>
  <p className="text-sm">Tightly spaced items</p>
</div>

// Comfortable composition
<div className="space-y-4">
  <h2 className="text-2xl font-bold">Section</h2>
  <p className="text-base leading-relaxed">Content</p>
</div>

// Spacious composition
<div className="space-y-6">
  <h1 className="text-4xl font-bold">Page Title</h1>
  <article className="text-lg">Featured content</article>
</div>
```

### Component Spacing

```tsx
// Button internal padding
<button className="px-4 py-2">Standard button</button>
<button className="px-6 py-3">Large button</button>

// Card padding
<div className="p-4 border rounded-lg">Compact card</div>
<div className="p-6 border rounded-lg">Standard card</div>
<div className="p-8 border rounded-lg">Spacious card</div>

// Input padding
<input className="px-3 py-2 border rounded" placeholder="Input" />
```

### Page-Level Spacing

```tsx
// Page container with padding
<main className="p-4 md:p-6 lg:p-8">
  {/* Page content */}
</main>

// Section spacing
<section className="py-12 md:py-16 lg:py-20">
  <div className="px-4 md:px-8 max-w-6xl mx-auto">
    {/* Section content */}
  </div>
</section>

// Header/Footer spacing
<header className="py-4 px-4 md:px-6">
  {/* Header content */}
</header>
```

## Grid System

Laborit uses a **flexible 12-column grid**via Tailwind CSS Grid utilities for
layout composition.

### Grid Columns

```tsx
// 2-column layout
<div className="grid grid-cols-2 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

// 3-column layout
<div className="grid grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

// 4-column layout
<div className="grid grid-cols-4 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>

// 6-column layout
<div className="grid grid-cols-6 gap-4">
  {/* Six equal columns */}
</div>

// 12-column layout (for fine-grained control)
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-4">1/3 width</div>
  <div className="col-span-4">1/3 width</div>
  <div className="col-span-4">1/3 width</div>
</div>
```

### Responsive Grid

```tsx
// 1 column on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// Adaptive columns
<div className="grid auto-cols-max gap-4">
  <div>Auto-sized column 1</div>
  <div>Auto-sized column 2</div>
</div>
```

### Grid Rows

```tsx
// Explicit row heights
<div className="grid grid-rows-3 h-64 gap-4">
  <div className="h-24">Row 1</div>
  <div className="h-24">Row 2</div>
  <div className="h-24">Row 3</div>
</div>

// Auto rows
<div className="grid auto-rows-max gap-4">
  <div>Row 1 (auto height)</div>
  <div>Row 2 (auto height)</div>
</div>
```

## Flexbox Layout Spacing

```tsx
// Horizontal flex with spacing
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Vertical flex with centered main axis spacing
<div className="flex flex-col gap-6 items-center">
  <h1>Title</h1>
  <p>Content</p>
  <button>Action</button>
</div>

// Space-between distribution
<div className="flex justify-between gap-4">
  <div>Left</div>
  <div>Right</div>
</div>
```

## Spacing Best Practices

1. **Use Scale Values** — Always use values from the scale (avoid `p-3.5` unless
   necessary)
2. **Responsive Spacing** — Use `md:` and `lg:` for different screen sizes
3. **Consistency** — Use multiples of 4px for visual harmony
4. **Breathing Room** — Ensure adequate whitespace around components
5. **Rhythm** — Create visual hierarchy through spacing patterns

## Common Spacing Patterns

### Singlepage Container

```tsx
<main className="flex min-h-screen flex-col">
  <header className="border-b px-4 py-4 md:px-6"></header>
  <div className="flex flex-1">
    <aside className="hidden w-64 border-r px-4 py-6 md:block"></aside>
    <section className="flex-1 p-4 md:p-6 lg:p-8"></section>
  </div>
</main>
```

### Card Grid

```tsx
<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
  {cards.map((card) => (
    <div key={card.id} className="rounded-lg border p-6">
      {/* Card content */}
    </div>
  ))}
</div>
```

### Form Layout

```tsx
<form className="max-w-md space-y-4 p-4">
  <div>
    <label className="mb-1 block text-sm font-medium">Field 1</label>
    <input className="w-full rounded border px-3 py-2" />
  </div>
  <div>
    <label className="mb-1 block text-sm font-medium">Field 2</label>
    <input className="w-full rounded border px-3 py-2" />
  </div>
  <button className="w-full px-4 py-2">Submit</button>
</form>
```

## Adding New Spacing Values

To add custom spacing values:

1. Update `tailwind.config.ts` with new spacing value
2. Document the use case in this file
3. Add examples
4. Update [Design System README](./README.md)

---

**Last Updated:** April 14, 2026
