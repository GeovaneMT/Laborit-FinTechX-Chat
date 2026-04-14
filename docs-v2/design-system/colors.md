# Color Tokens & Palette

Complete reference for all color tokens used in Laborit, including usage
guidelines and accessibility considerations.

## Color Palette

Laborit uses **Tailwind CSS default color palette** with semantic color
assignments for UI patterns.

### Semantic Color Usage

#### Primary Colors

Used for main actions, interactive elements, and brand elements.

```
Primary: Blue 600 (bg-blue-600, text-blue-600)
Primary Hover: Blue 700 (hover:bg-blue-700)
Primary Light: Blue 50 (bg-blue-50)
Primary Dark: Blue 900 (dark:bg-blue-900)
```

#### Secondary Colors

Used for alternative actions and secondary elements.

```
Secondary: Slate 600 (bg-slate-600, text-slate-600)
Secondary Hover: Slate 700 (hover:bg-slate-700)
```

#### Neutral Colors

Used for backgrounds, borders, text, and spacing.

```
Background: White (bg-white)
Dark Background: Slate 950 (dark:bg-slate-950)
Border: Slate 200 (border-slate-200, dark:border-slate-800)
Text Primary: Slate 900 (text-slate-900)
Text Secondary: Slate 600 (text-slate-600)
Text Muted: Slate 500 (text-slate-500)
```

#### Status Colors

**Success / Positive Actions**

```
Success: Green 600 (bg-green-600, text-green-600)
Success Hover: Green 700 (hover:bg-green-700)
Success Light: Green 50 (bg-green-50)
Success Dark: Green 900 (dark:bg-green-900)
```

**Warning / Caution**

```
Warning: Amber 600 (bg-amber-600, text-amber-600)
Warning Hover: Amber 700 (hover:bg-amber-700)
Warning Light: Amber 50 (bg-amber-50)
```

**Error / Destructive Actions**

```
Error: Red 600 (bg-red-600, text-red-600)
Error Hover: Red 700 (hover:bg-red-700)
Error Light: Red 50 (bg-red-50)
Error Dark: Red 900 (dark:bg-red-900)
```

**Info / Informational**

```
Info: Sky 600 (bg-sky-600, text-sky-600)
Info Hover: Sky 700 (hover:bg-sky-700)
Info Light: Sky 50 (bg-sky-50)
```

### Tailwind Color Scales

Each color in Tailwind has a scale from 50 (lightest) to 950 (darkest):

```
Color Scale Levels:
50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
```

**Example — Blue Scale:**

```
blue-50    — #eff6ff (lightest)
blue-100   — #dbeafe
blue-200   — #bfdbfe
blue-300   — #93c5fd
blue-400   — #60a5fa
blue-500   — #3b82f6 (midtone)
blue-600   — #2563eb (primary)
blue-700   — #1d4ed8
blue-800   — #1e40af
blue-900   — #1e3a8a
blue-950   — #082f4b (darkest)
```

## Color Application Examples

### Backgrounds

```tsx
// Light mode
<div className="bg-white">Light Background</div>
<div className="bg-slate-50">Subtle Background</div>

// Dark mode
<div className="dark:bg-slate-950">Dark Background</div>
<div className="dark:bg-slate-900">Dark Subtle Background</div>
```

### Text

```tsx
// Primary text
<p className="text-slate-900 dark:text-slate-50">Primary Text</p>

// Secondary text
<p className="text-slate-600 dark:text-slate-400">Secondary Text</p>

// Muted text
<p className="text-slate-500 dark:text-slate-500">Muted Text</p>
```

### Interactive Elements

```tsx
// Button
<button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600">
  Primary Action
</button>

// Button States
<button className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed">
  Click me
</button>
```

### Status Indicators

```tsx
// Success
<div className="bg-green-50 border border-green-200 text-green-800">
  Success message
</div>

// Error
<div className="bg-red-50 border border-red-200 text-red-800">
  Error message
</div>

// Warning
<div className="bg-amber-50 border border-amber-200 text-amber-800">
  Warning message
</div>
```

### Borders

```tsx
// Light border
<div className="border border-slate-200 dark:border-slate-800">
  Content
</div>

// Focused/Active border
<input className="border border-blue-600 focus:ring-2 focus:ring-blue-500" />
```

## Dark Mode Color Behavior

All colors automatically adapt to dark mode when the `dark` class is applied to
the `<html>` element:

```tsx
// Light Mode: white bg, dark text
// Dark Mode: slate-950 bg, light text
<div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
  Content
</div>
```

## Accessibility & Contrast

### Contrast Requirements

Laborit adheres to **WCAG 2.1 AA minimum standards**:

- **Large text (18pt+):** 3:1 contrast ratio
- **Normal text:** 4.5:1 contrast ratio
- **UI components & buttons:** 3:1 contrast ratio

### Safe Color Combinations

✅ **Recommended Combinations:**

- Text: `text-slate-900` on `bg-white` (21:1 contrast)
- Text: `text-slate-50` on `bg-slate-900` (18:1 contrast)
- Button: `bg-blue-600` text `text-white` (8:1 contrast)
- Status: `text-green-700` on `bg-green-50` (8:1 contrast)

⚠️ **Caution — Lower Contrast:**

- `text-slate-500` on `bg-white` (4.6:1 — OK for secondary text only)
- `text-slate-600` on `bg-slate-100` (4.5:1 — borderline)

### Testing Contrast

Always test color combinations using:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)
- [Polypane Accessible Colors](https://polypane.app/accessible-colors/)

## Color Best Practices

1. **Use Semantic Colors** — Use named color intentions (primary, success,
   error) instead of arbitrary colors
2. **Maintain Contrast** — Ensure sufficient contrast for accessibility
3. **Support Dark Mode** — Always use `dark:` prefix for dark-mode variants
4. **Avoid Color-Only Communication** — Don't rely on color alone to convey
   meaning (pair with icons, text, patterns)
5. **Test with Color Blindness Simulators** — Verify designs work for various
   types of color blindness
6. **Align with Brand** — All colors should align with Laborit brand guidelines

## Color Blind Accessibility

Laborit designs are tested for accessibility with color blindness in mind:

- **Deuteranopia** (Red-Green, ~1% of males)
- **Protanopia** (Red-Green, ~1% of males)
- **Tritanopia** (Blue-Yellow, ~0.001% of population)

Test designs using:

- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [Simulator by Daltonize](https://daltonlens.org/daltonize/)

## Current Color Usage

| Element           | Color                     | Usage                                |
| ----------------- | ------------------------- | ------------------------------------ |
| Primary Actions   | `blue-600`                | Buttons, links, interactive elements |
| Secondary Actions | `slate-600`               | Alternative buttons, secondary UI    |
| Success Messages  | `green-600`               | Confirmations, positive feedback     |
| Error Messages    | `red-600`                 | Error states, validation feedback    |
| Warning Messages  | `amber-600`               | Alerts, cautionary content           |
| Info Messages     | `sky-600`                 | Informational content                |
| Backgrounds       | `white` / `slate-950`     | Page and container backgrounds       |
| Text Primary      | `slate-900` / `slate-50`  | Main content text                    |
| Text Secondary    | `slate-600` / `slate-400` | Labels, descriptions                 |
| Borders           | `slate-200` / `slate-800` | Dividers, input borders              |

## Adding New Colors

To add new colors to the palette:

1. Define the color value in `tailwind.config.ts`
2. Document the usage rationale in this file
3. Create color swatches or examples
4. Test contrast ratios and dark mode behavior
5. Update [Design System README](./README.md)

---

**Last Updated:** April 14, 2026 | **Accessibility:** WCAG 2.1 AA
