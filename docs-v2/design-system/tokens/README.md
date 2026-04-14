# Design Tokens Reference

Complete reference of all design tokens used in Laborit. These tokens are the
source of truth for all design values.

## Token Categories

### Color Tokens

[View Colors](../colors.md) — Complete color palette, usage conventions,
semantic colors.

**Default Tailwind Colors Available:**

- `slate` — Neutral grays
- `gray` — Standard grays
- `zinc` — Cool grays
- `neutral` — True neutrals
- `stone` — Warm neutrals
- `red` — Reds and error states
- `orange` — Oranges
- `yellow` — Yellows and warnings
- `green` — Greens and success states
- `teal` — Teals
- `cyan` — Cyans
- `sky` — Sky blues
- `blue` — Blues and primary states
- `indigo` — Indigos
- `violet` — Violets
- `purple` — Purples
- `fuchsia` — Fuchsias
- `pink` — Pinks
- `rose` — Roses

### Spacing Scale

[View Spacing](../spacing.md) — Complete spacing scale, grid system,
margin/padding values.

**Tailwind Spacing Scale:**

```
0, 1px, 0.125rem (2px), 0.25rem (4px), 0.375rem (6px), 0.5rem (8px), 0.625rem (10px),
0.75rem (12px), 1rem (16px), 1.25rem (20px), 1.5rem (24px), 1.75rem (28px), 2rem (32px),
2.5rem (40px), 3rem (48px), 3.5rem (56px), 4rem (64px), 5rem (80px), 6rem (96px),
7rem (112px), 8rem (128px)
```

### Typography

[View Typography](../typography.md) — Font scales, weights, line heights, font
families.

**Font Stack:**

- Primary: System fonts (Segoe UI, Roboto, sans-serif)
- Monospace: Monaco, Courier New, monospace

**Font Sizes:**

```
xs: 0.75rem (12px)     text-xs
sm: 0.875rem (14px)    text-sm
base: 1rem (16px)      text-base
lg: 1.125rem (18px)    text-lg
xl: 1.25rem (20px)     text-xl
2xl: 1.5rem (24px)     text-2xl
3xl: 1.875rem (30px)   text-3xl
4xl: 2.25rem (36px)    text-4xl
5xl: 3rem (48px)       text-5xl
6xl: 3.75rem (60px)    text-6xl
```

**Font Weights:**

- `font-thin` — 100
- `font-extralight` — 200
- `font-light` — 300
- `font-normal` — 400 (default)
- `font-medium` — 500
- `font-semibold` — 600
- `font-bold` — 700
- `font-extrabold` — 800
- `font-black` — 900

### Shadows

[View Shadows](./shadows.md) — Shadow depth levels for elevation.

**Shadow Levels:**

```
shadow-sm     — Light shadow (0 1px 2px 0 rgba(0, 0, 0, 0.05))
shadow        — Default shadow
shadow-md     — Medium shadow
shadow-lg     — Large shadow
shadow-xl     — Extra large shadow
shadow-2xl    — 2x large shadow
```

### Border Radius

**Radius Scale:**

```
rounded-none     — 0px
rounded-sm       — 0.125rem (2px)
rounded          — 0.25rem (4px)
rounded-md       — 0.375rem (6px)
rounded-lg       — 0.5rem (8px)
rounded-xl       — 0.75rem (12px)
rounded-2xl      — 1rem (16px)
rounded-3xl      — 1.5rem (24px)
rounded-full     — 9999px (circles)
```

### Transitions & Animations

[View Animations](./animations.md) — Animation timings, easing functions, and
animation presets.

**Transition Durations:**

```
duration-75      — 75ms
duration-100     — 100ms
duration-150     — 150ms
duration-200     — 200ms
duration-300     — 300ms
duration-500     — 500ms
duration-700     — 700ms
duration-1000    — 1000ms
```

**Easing Functions:**

- `ease-linear`
- `ease-in`
- `ease-out`
- `ease-in-out`

### Breakpoints (Responsive)

**Tailwind Breakpoints:**

```
sm   — 640px
md   — 768px
lg   — 1024px
xl   — 1280px
2xl  — 1536px
```

## Usage Guidelines

### Applying Tokens in Components

**Colors:**

```tsx
<Box className="bg-primary text-white" />
<Button className="hover:bg-primary-600" />
```

**Spacing:**

```tsx
<Box className="p-4 m-2" /> {/* 16px padding, 8px margin */}
<Box className="px-6 py-3" /> {/* 24px horizontal, 12px vertical */}
```

**Typography:**

```tsx
<Text className="text-xl font-semibold" />
<Heading className="text-3xl font-bold" />
```

**Shadows:**

```tsx
<Card className="shadow-md" />
<Modal className="shadow-xl" />
```

**Rounded Corners:**

```tsx
<Button className="rounded-lg" />
<Avatar className="rounded-full" />
```

## Design Token Philosophy

1. **Consistency** — All design values derive from tokens, reducing arbitrary
   styling
2. **Scalability** — Adding new tokens is straightforward; removing is
   discouraged
3. **Maintainability** — Tokens are versioned and documented for easy updates
4. **Accessibility** — Tokens support dark mode and sufficient contrast ratios
5. **Performance** — Tokens are optimized at build time by Tailwind CSS

## Dark Mode Token Behavior

Dark mode tokens automatically adjust when the `dark` class is applied to the
`<html>` element:

```tsx
// Automatically adapts to dark mode
<Box className="bg-white text-black dark:bg-slate-950 dark:text-white" />
```

## Adding New Tokens

To extend the design system with new tokens:

1. Define the token value (e.g., new color, spacing increment)
2. Add to `tailwind.config.ts` if extending Tailwind defaults
3. Document in relevant section (colors.md, spacing.md, etc.)
4. Update this README
5. Notify team via PR with rationale

## Reference

- [Tailwind CSS Default Theme](https://tailwindcss.com/docs/default-configuration)
- [Colors](../colors.md)
- [Typography](../typography.md)
- [Spacing](../spacing.md)
- [Icons](../icons.md)
- [Accessibility](../accessibility.md)

---

**Last Updated:** April 14, 2026
