# Typography

Complete guide to typography tokens, font scales, weights, and usage patterns in
Laborit.

## Font Stack

Laborit uses a **system font stack** for optimal performance and native
look-and-feel across all platforms:

```css
font-family:
  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
  'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Font Family Assignments

| Use Case        | Font Family                        | Utility     |
| --------------- | ---------------------------------- | ----------- |
| Body text, UI   | System fonts (above)               | Default     |
| Monospace, Code | `Monaco, 'Courier New', monospace` | `font-mono` |

## Font Sizes

Laborit uses a modular scale for typography, based on Tailwind CSS defaults:

### Complete Font Size Scale

| Size     | Value           | Utility Class | Use Case                               |
| -------- | --------------- | ------------- | -------------------------------------- |
| **xs**   | 0.75rem (12px)  | `text-xs`     | Small labels, badges, captions         |
| **sm**   | 0.875rem (14px) | `text-sm`     | Secondary text, form labels, help text |
| **base** | 1rem (16px)     | `text-base`   | Body text, standard UI                 |
| **lg**   | 1.125rem (18px) | `text-lg`     | Large body text, emphasis              |
| **xl**   | 1.25rem (20px)  | `text-xl`     | Subheadings, section headers           |
| **2xl**  | 1.5rem (24px)   | `text-2xl`    | Page titles, major sections            |
| **3xl**  | 1.875rem (30px) | `text-3xl`    | Large titles                           |
| **4xl**  | 2.25rem (36px)  | `text-4xl`    | Hero titles                            |
| **5xl**  | 3rem (48px)     | `text-5xl`    | Large hero titles                      |
| **6xl**  | 3.75rem (60px)  | `text-6xl`    | Extra large hero titles                |

### Recommended Usage

```tsx
// Page Title / Hero
<h1 className="text-4xl font-bold">Main Title</h1>

// Section Heading
<h2 className="text-2xl font-semibold">Section Header</h2>

// Subsection
<h3 className="text-xl font-semibold">Subsection</h3>

// Body Text
<p className="text-base leading-relaxed">Body paragraph text...</p>

// Small Text / Citation
<span className="text-xs text-slate-500">Small caption</span>
```

## Font Weights

Laborit uses six font weight levels for typography hierarchy:

| Weight        | Value | Utility                 | Use Case                      |
| ------------- | ----- | ----------------------- | ----------------------------- |
| **Light**     | 300   | `font-light`            | De-emphasized text            |
| **Normal**    | 400   | `font-normal` (default) | Body text                     |
| **Medium**    | 500   | `font-medium`           | Slightly emphasized text      |
| **Semibold**  | 600   | `font-semibold`         | Headings, strong emphasis     |
| **Bold**      | 700   | `font-bold`             | Strong emphasis, titles       |
| **Extrabold** | 800   | `font-extrabold`        | Hero titles, maximum emphasis |

### Font Weight Guidelines

```tsx
// Light — De-emphasize
<span className="font-light text-slate-600">Disabled or muted text</span>

// Normal — Standard body text
<p className="font-normal">Standard paragraph content</p>

// Medium — Subtle emphasis
<label className="font-medium">Form Label</label>

// Semibold — Headings and strong emphasis
<h2 className="font-semibold">Section heading</h2>

// Bold — Strong emphasis, titles
<h1 className="font-bold">Page Title</h1>

// Extrabold — Maximum emphasis
<h1 className="font-extrabold">Hero Title</h1>
```

## Line Height

Proper line height ensures readability and visual rhythm:

| Line Height | Value | Utility           | Use Case              |
| ----------- | ----- | ----------------- | --------------------- |
| **Tight**   | 1.25  | `leading-tight`   | Headings, short text  |
| **Snug**    | 1.375 | `leading-snug`    | Subheadings           |
| **Normal**  | 1.5   | `leading-normal`  | Standard body text    |
| **Relaxed** | 1.625 | `leading-relaxed` | Long-form reading     |
| **Loose**   | 2     | `leading-loose`   | Spaced text, emphasis |

### Line Height Guidelines

```tsx
// Headings — Tight spacing
<h1 className="text-3xl font-bold leading-tight">
  Multi-line heading text
</h1>

// Body text — Relaxed spacing for readability
<p className="text-base leading-relaxed">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</p>

// Form labels — Normal spacing
<label className="text-sm font-medium leading-normal">
  Email Address
</label>
```

## Heading System

Laborit uses a semantic heading hierarchy with consistent styling:

### Heading Hierarchy

```tsx
// H1 — Page Title (one per page)
<h1 className="text-4xl font-bold leading-tight mb-6">
  Page Title
</h1>

// H2 — Major Sections
<h2 className="text-3xl font-bold leading-snug mb-4">
  Section Title
</h2>

// H3 — Subsections
<h3 className="text-2xl font-semibold leading-snug mb-3">
  Subsection Title
</h3>

// H4 — Minor subsections
<h4 className="text-xl font-semibold leading-normal mb-2">
  Minor Heading
</h4>

// H5, H6 — Labels, small headings
<h5 className="text-lg font-semibold leading-normal mb-1">
  Label or Small Heading
</h5>
```

## Body Text

Body text provides the primary content and readability baseline:

```tsx
// Standard body text
<p className="text-base leading-relaxed text-slate-900">
  Standard paragraph with comfortable line height for reading.
</p>

// Secondary body text (labels, descriptions)
<p className="text-sm leading-relaxed text-slate-600">
  Secondary or descriptive text with reduced font size.
</p>

// Emphasized text
<strong className="font-semibold">Important information</strong>

// De-emphasized text
<span className="text-slate-500 font-light">Less important</span>
```

## Text Utilities

### Text Alignment

```tsx
<p className="text-left">Aligned left (default)</p>
<p className="text-center">Centered text</p>
<p className="text-right">Aligned right</p>
<p className="text-justify">Justified text</p>
```

### Text Transform

```tsx
<p className="uppercase">UPPERCASE TEXT</p>
<p className="lowercase">lowercase text</p>
<p className="capitalize">Capitalize text</p>
<p className="normal-case">normal case</p>
```

### Text Truncation

```tsx
{
  /* Truncate single line */
}
;<p className="truncate">Very long text that will truncate...</p>

{
  /* Truncate multiple lines */
}
;<p className="line-clamp-3">Text truncated after 3 lines...</p>
```

### Letter Spacing

```tsx
<p className="tracking-tighter">Tighter letter spacing</p>
<p className="tracking-normal">Normal letter spacing</p>
<p className="tracking-wider">Wider letter spacing</p>
```

## Dark Mode Typography

Typography automatically adapts to dark mode:

```tsx
// Light mode: dark text on light background
// Dark mode: light text on dark background
<p className="text-slate-900 dark:text-slate-50">
  Adaptive text color
</p>

// For secondary text
<p className="text-slate-600 dark:text-slate-400">
  Secondary text in both modes
</p>
```

## Typography Scale Examples

### Small/Compact Text

```tsx
<div className="space-y-2">
  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
    Label
  </p>
  <p className="text-sm text-slate-700">Compact body text</p>
</div>
```

### Standard/Comfortable Text

```tsx
<div className="space-y-4">
  <h2 className="text-2xl leading-tight font-bold">Section Title</h2>
  <p className="text-base leading-relaxed text-slate-600">
    Standard paragraph with comfortable reading rhythm.
  </p>
</div>
```

### Large/Featured Text

```tsx
<div className="space-y-6">
  <h1 className="text-5xl leading-tight font-extrabold">
    Large featured heading
  </h1>
  <p className="text-lg leading-relaxed text-slate-600">
    Larger body text for emphasis or featured content.
  </p>
</div>
```

## Accessibility Considerations

### Font Size & Readability

- **Minimum body text size:** `text-base` (16px) for comfortable reading
- **For users with vision impairment:** Ensure zoom/scaling works without
  horizontal scroll
- **Line length:** Optimal 50-75 characters per line; avoid lines exceeding 100
  characters

### Contrast & Dark Mode

- Text must maintain **4.5:1 contrast ratio** (WCAG AA) against background
- Always test light and dark mode text combinations
- Use `dark:` prefix for dark mode text colors

### Font Size Responsiveness

Use responsive text sizes for better mobile/tablet experience:

```tsx
// Small on mobile, larger on desktop
<h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">Responsive Title</h1>
```

## Typography Best Practices

1. **Semantic HTML** — Use `<h1>`, `<h2>`, `<p>`, `<strong>`, `<em>` for meaning
2. **Font Size Hierarchy** — Use consistent scale; avoid arbitrary font sizes
3. **Line Height** — Ensure adequate spacing (1.5–2 for body text)
4. **Contrast** — Always maintain sufficient contrast ratios
5. **Dark Mode** — Test all typography in light and dark modes
6. **Responsive** — Use responsive utilities (`md:`, `lg:`) for text sizes
7. **Avoid Font Embedding Bloat** — Use system fonts; limit custom fonts

## Adding New Typography Tokens

To extend typography:

1. Update `tailwind.config.ts` if adding custom font sizes
2. Document new tokens in this file
3. Provide usage examples
4. Test contrast and readability
5. Update [Design System README](./README.md)

---

**Last Updated:** April 14, 2026 | **Accessibility:** WCAG 2.1 AA
