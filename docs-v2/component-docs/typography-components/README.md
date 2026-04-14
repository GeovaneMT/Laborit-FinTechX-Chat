# Typography Components

Reusable typography utilities for consistent text styling throughout Laborit.

## Overview

Typography components ensure consistent styling for headings, body text, and
other text elements. They enforce typography hierarchy and design system
compliance.

**Location:** `src/presentation/ui/typography/` **Count:** 10+ components

## Component List

### Headings

| Component         | HTML   | Size        | Use Case                  |
| ----------------- | ------ | ----------- | ------------------------- |
| `Heading1` / `H1` | `<h1>` | 4xl (36px)  | Page title (one per page) |
| `Heading2` / `H2` | `<h2>` | 3xl (30px)  | Major sections            |
| `Heading3` / `H3` | `<h3>` | 2xl (24px)  | Subsections               |
| `Heading4` / `H4` | `<h4>` | xl (20px)   | Minor headings            |
| `Heading5` / `H5` | `<h5>` | lg (18px)   | Small headings            |
| `Heading6` / `H6` | `<h6>` | base (16px) | Labels/captions           |

### Body Text

| Component               | HTML     | Size        | Use Case                |
| ----------------------- | -------- | ----------- | ----------------------- |
| `BodyText`              | `<p>`    | base (16px) | Standard paragraph text |
| `SmallText` / `Caption` | `<p>`    | sm (14px)   | Secondary text, labels  |
| `MutedText`             | `<span>` | base (16px) | De-emphasized text      |
| `Code`                  | `<code>` | sm / mono   | Inline code             |
| `CodeBlock` / `Pre`     | `<pre>`  | sm / mono   | Code blocks             |

## Quick Start

### Import Typography Components

```tsx
import { Heading1, Heading2, Heading3 } from '@/presentation/ui/typography'
import { BodyText, SmallText, MutedText } from '@/presentation/ui/typography'
import { Code, CodeBlock } from '@/presentation/ui/typography'
```

### Basic Usage

```tsx
import { Heading1, BodyText, SmallText } from '@/presentation/ui/typography'

export function ArticlePreview() {
  return (
    <article>
      <Heading1>Article Title</Heading1>
      <SmallText>By Author on Date</SmallText>
      <BodyText>
        Article content paragraph with standard body text styling...
      </BodyText>
    </article>
  )
}
```

## Heading Component Reference

### Heading1

Page title (main heading). Use only once per page.

```tsx
<Heading1>Dashboard</Heading1>

// With props
<Heading1 className="text-center mb-8">Welcome</Heading1>
```

### Heading2

Major section heading. Primary organizational level.

```tsx
<Heading2>Recent Activity</Heading2>
<section>
  {/* Content */}
</section>

<Heading2>Settings</Heading2>
<section>
  {/* Settings content */}
</section>
```

### Heading3

Subsection heading. Secondary organizational level.

```tsx
<Heading2>Profile</Heading2>
<Heading3>Personal Information</Heading3>
{/* Form fields */}
<Heading3>Security</Heading3>
{/* Security settings */}
```

### Heading4–6

Progressively smaller headings for deeper nesting. Use sparingly. Heading4 is
the smallest recommended for typical UI.

```tsx
<Heading4>Advanced Options</Heading4>
<Heading5>Option Name</Heading5>
<Heading6>Setting Label (like a form label)</Heading6>
```

## Body Text Component Reference

### BodyText

Standard paragraph text, primary reading content.

```tsx
<BodyText>
  This is standard paragraph text with comfortable leading for reading.
</BodyText>

// Multiline content
<BodyText>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</BodyText>
```

### SmallText / Caption

Secondary text, labels, help text, metadata.

```tsx
<SmallText>Secondary information</SmallText>
<SmallText className="text-slate-500">Posted on March 15, 2026</SmallText>
<label className="block mb-2">
  <SmallText className="font-medium">Email Address</SmallText>
</label>
```

### MutedText

De-emphasized text for less important information.

```tsx
<MutedText>This feature is experimental</MutedText>
<MutedText>Last updated 2 hours ago</MutedText>
```

### Code

Inline code references.

```tsx
<p>
  Run <Code>npm install</Code> to get started.
</p>

<p>
  The <Code className="bg-slate-100 px-2 py-1 rounded">import</Code> statement
  defines dependencies.
</p>
```

### CodeBlock / Pre

Code blocks for displaying code samples.

```tsx
<CodeBlock>{`
function greeting(name) {
  return \`Hello, \${name}!\`;
}
`}</CodeBlock>
```

## Typography Hierarchy Example

```tsx
import {
  Heading1,
  Heading2,
  Heading3,
  BodyText,
  SmallText,
  Code,
} from '@/presentation/ui/typography'

export function DocumentPage() {
  return (
    <article>
      <Heading1>Getting Started with React</Heading1>
      <SmallText>Published March 14, 2026 • 5 min read</SmallText>

      <Heading2>Introduction</Heading2>
      <BodyText>
        React is a JavaScript library for building user interfaces...
      </BodyText>

      <Heading2>Installation</Heading2>
      <Heading3>Using Create React App</Heading3>
      <BodyText>
        The easiest way to get started is with Create React App:
      </BodyText>
      <CodeBlock>{`npx create-react-app my-app`}</CodeBlock>

      <Heading3>Manual Setup</Heading3>
      <BodyText>
        For more control, you can set up React manually. First, install the npm
        packages:
      </BodyText>
      <CodeBlock>{`npm install react react-dom`}</CodeBlock>

      <Heading2>Next Steps</Heading2>
      <BodyText>
        Check out the official React documentation for advanced topics.
      </BodyText>
    </article>
  )
}
```

## Responsive Text Sizes

Typography components are fixed size. For responsive text, use Tailwind
utilities:

```tsx
// Fixed size (component default)
<Heading1>Title</Heading1>

// Responsive with Tailwind className
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Title
</h1>

// Better — composition approach
<Heading1 className="md:text-5xl">Responsive Title</Heading1>
```

## Text Styling Utilities

Combine with Tailwind classes for additional styling:

```tsx
// Bold emphasis
<BodyText className="font-bold">Important text</BodyText>

// Colored text
<BodyText className="text-blue-600">Blue text</BodyText>

// Line-through
<BodyText className="line-through">Deleted text</BodyText>

// Truncation
<BodyText className="truncate">Very long text that will truncate...</BodyText>

// Line clamping
<BodyText className="line-clamp-3">Text limited to 3 lines...</BodyText>

// Italic
<BodyText className="italic">Italicized text</BodyText>

// Underline
<BodyText className="underline">Underlined text</BodyText>
```

## Dark Mode

Typography components automatically adapt to dark mode:

```tsx
// Light mode: dark text on light background
// Dark mode: light text on dark background
<Heading1>Adaptive Title</Heading1>
<BodyText>Adaptive body text</BodyText>
```

## Semantic HTML

Typography components use proper semantic HTML:

```tsx
// Heading1 renders as <h1>
<Heading1>This is an h1</Heading1>

// BodyText renders as <p>
<BodyText>This is a paragraph</BodyText>

// Code renders as <code>
<Code>inline code</Code>

// CodeBlock renders as <pre><code>
<CodeBlock>Block of code</CodeBlock>
```

## Accessibility

### Screen Reader Considerations

Typography components maintain semantic structure:

- Headings have proper hierarchy (`<h1>` → `<h6>`)
- Functional headings (interactive) use `<button>` with `aria-expanded` if
  needed
- Code elements are marked as code for screen readers

### Contrast

All text colors maintain WCAG 2.1 AA contrast ratios:

- **BodyText** — Dark on light (21:1), light on dark (18:1)
- **SmallText** — Dark on light (4.6:1), light on dark (4.6:1)
- **MutedText** — Appropriate contrast with lighter color

### Font Sizing

- Minimum readable size: `text-base` (16px)
- Hierarchy maintained through size, weight, and color
- Never justify on screen (increases dyslexia risk)

## Common Patterns

### Article/Blog Post

```tsx
<article className="space-y-6">
  <header>
    <Heading1>Article Title</Heading1>
    <SmallText>By Author • Published Date • Reading Time</SmallText>
  </header>
  <figure>
    <img src="image.jpg" alt="Article header image" />
  </figure>
  <section>
    <BodyText>Introduction paragraph...</BodyText>
  </section>
  <section>
    <Heading2>Section 1</Heading2>
    <BodyText>Section content...</BodyText>
  </section>
  <section>
    <Heading2>Section 2</Heading2>
    <BodyText>More content...</BodyText>
  </section>
</article>
```

### Card with Typography

```tsx
<Card>
  <CardHeader>
    <Heading3>Card Title</Heading3>
    <SmallText className="text-slate-600">Subtitle</SmallText>
  </CardHeader>
  <CardContent>
    <BodyText>Card content with body text...</BodyText>
  </CardContent>
</Card>
```

### Lists with Typography

```tsx
<div className="space-y-4">
  <Heading2>Item List</Heading2>
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item.id}>
        <Heading4>{item.title}</Heading4>
        <BodyText>{item.description}</BodyText>
        <SmallText className="text-slate-500">{item.metadata}</SmallText>
      </li>
    ))}
  </ul>
</div>
```

## Typography Best Practices

1. ✅ **Use semantic components** — Maintain heading hierarchy
2. ✅ **One `<h1>` per page** — For SEO and accessibility
3. ✅ **Proper hierarchy** — Don't skip heading levels (h1 → h3 is poor)
4. ✅ **Adequate line length** — 50-75 characters for comfortable reading
5. ✅ **Sufficient contrast** — Always maintain WCAG AA standards
6. ✅ **Test zoom** — Ensure content readable at 200% zoom
7. ❌ **Don't use headings for styling** — Use typography components instead
8. ❌ **Don't flatten hierarchy** — All h3 with varying sizes is confusing
9. ❌ **Don't rely on color alone** — Text meaning should be clear without color

## Resources

- [Design System Typography](../../design-system/typography.md) — Detailed
  typography guide
- [Accessibility Guidelines](../../design-system/accessibility.md) — a11y best
  practices
- [Component Template](../COMPONENT_TEMPLATE.md) — Documentation template
- [Tailwind Typography](https://tailwindcss.com/docs/font-size) — Tailwind
  utilities

---

**Last Updated:** April 14, 2026 | **Components:** 10+ | **Status:** Production
Ready
