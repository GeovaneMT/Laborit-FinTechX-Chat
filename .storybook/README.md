# Storybook Setup

**Phase 5:** Visual component development and documentation environment.

Storybook provides an isolated development environment for building, testing,
and documenting UI components in isolation from the main application.

## Overview

Storybook allows:

- ✅ **Visual Development** — Build components in isolation
- ✅ **Interactive Exploration** — Test props and states interactively
- ✅ **Documentation** — Auto-generate component docs from code
- ✅ **Accessibility Testing** — Check WCAG compliance and keyboard navigation
- ✅ **Responsive Design** — Test components at multiple viewports
- ✅ **Visual Regression** — Catch unintended visual changes
- ✅ **Design System** — Share components across teams

## Quick Start

### Start Storybook

```bash
# Start development server
pnpm storybook

# Open in browser
# http://localhost:6006
```

### Build for Production

```bash
# Create static build
pnpm build-storybook

# Output in storybook-static/
```

## Project Integration

### Configuration Files

| File                        | Purpose                                           |
| --------------------------- | ------------------------------------------------- |
| **`.storybook/main.ts`**    | Storybook configuration, stories location, addons |
| **`.storybook/preview.ts`** | Global settings, decorators, viewports, themes    |
| **`.storybook/manager.ts`** | Manager UI customization (optional)               |

### Story File Location

Stories are colocated with components using `.stories.tsx` extension:

```
src/presentation/ui/button/
├── button.tsx              # Component
├── button.types.ts         # Types
├── button.module.css       # Styles
├── button.stories.tsx      # ← Story file
└── __tests__/
    └── button.test.tsx     # Tests
```

Or in the component root:

```
src/presentation/ui/
├── button.tsx
├── button.stories.tsx      # ← Story colocated
├── spinner.tsx
└── spinner.stories.tsx
```

## Writing Stories

### Basic Story Template

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
  title: 'Base Components/Button',      // Category/Component name
  component: Button,                     // Component to document
  parameters: {
    layout: 'centered',                  // Center story in canvas
  },
  tags: ['autodocs'],                    // Auto-generate docs
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'Visual style variant',
    },
    onClick: {
      control: false,                    // Hide in controls
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic story
export const Default: Story = {
  args: {
    children: 'Click me',
  },
}

// Story with interaction
export const Interactive: Story = {
  args: { children: 'Clickable' },
  render: (args) => (
    <Button {...args} onClick={() => alert('Clicked!')} />
  ),
}
```

### Story Categories

Organize stories by folder in `title`:

```typescript
// Renders under "Base Components" > "Button"
title: 'Base Components/Button'

// Renders under "Forms" > "Input"
title: 'Forms/Input'

// Multiple levels
title: 'UI/Feedback/Alert'
```

### Docstring & ArgTypes

Auto-generate documentation from prop comments:

```typescript
interface ButtonProps {
  /**
   * Visual style variant.
   * @default "default"
   */
  variant?: 'default' | 'primary'

  /**
   * Button size.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg'
}
```

Configure controls in `argTypes`:

```typescript
argTypes: {
  variant: {
    control: 'select',
    options: ['default', 'primary'],
  },
  disabled: {
    control: 'boolean',
  },
  count: {
    control: { type: 'number', min: 0, max: 100 },
  },
}
```

### Common Patterns

#### Usage Example

```typescript
export const WithIcon: Story = {
  render: () => (
    <Button variant="primary">
      <PlusIcon /> Add Item
    </Button>
  ),
}
```

#### Multiple Variants

```typescript
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
}
```

#### Responsive Preview

```typescript
export const Responsive: Story = {
  args: { children: 'Responsive Button' },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
```

#### Dark Mode

```typescript
export const DarkMode: Story = {
  args: { children: 'Dark Button' },
  parameters: {
    isDark: true,
  },
}
```

#### Loading State

```typescript
export const Loading: Story = {
  render: (args) => {
    const [isLoading, setIsLoading] = React.useState(false)
    return (
      <Button
        {...args}
        onClick={() => setIsLoading(true)}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>
    )
  },
}
```

## Addons

### Essential Addons

| Addon            | Purpose                           |
| ---------------- | --------------------------------- |
| **Essentials**   | Controls, Actions, Docs, Viewport |
| **A11y**         | Accessibility testing (WCAG)      |
| **Viewport**     | Responsive design testing         |
| **Interactions** | Component interaction testing     |

### Using Addons

#### Controls Tab

Interactively change props:

- Select dropdown, text, number, checkbox inputs
- See component re-render in real-time
- Inspect generated code

#### Docs Tab

Auto-generates documentation from:

- JSDoc comments
- ArgTypes configuration
- Story examples
- Source code

#### A11y Tab

Check accessibility compliance:

- WCAG contrast ratios
- ARIA attributes
- Keyboard navigation
- Screen reader compatibility

#### Interactions Tab

Test user interactions:

- Click buttons
- Fill forms
- Verify output
- Record interactions

## Dark Mode Support

### Configure Theme Decorator

In `.storybook/preview.ts`:

```typescript
decorators: [
  (Story, context) => {
    const isDark = context.parameters.isDark ?? false
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return Story()
  },
]
```

### Use in Stories

```typescript
export const DarkVariant: Story = {
  parameters: {
    isDark: true,
  },
}
```

## Viewports & Responsive Testing

Configure custom viewports:

```typescript
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const viewports = {
  // Standard viewports included
  ...INITIAL_VIEWPORTS,

  // Custom viewports
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
}
```

Test stories at viewport:

```typescript
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
}
```

## Accessibility Testing

### Run A11y Checks

1. Open story in Storybook
2. Click "Accessibility" tab
3. Review violations and best practices

### Test via CLI

```bash
# Check accessibility in all stories
pnpm storybook:test:a11y
```

### Common Issues

- **Color Contrast** — Ensure text/background have sufficient contrast
- **Alt Text** — Provide `alt` for images
- **ARIA Labels** — Label interactive elements
- **Keyboard Navigation** — Test with keyboard only

## Best Practices

### 1. One Component Per Story File

Keep stories focused:

```
button.stories.tsx      # Only Button component
spinner.stories.tsx     # Only Spinner component
```

### 2. Test All States

```typescript
export const Default: Story = {
  /* ... */
}
export const Disabled: Story = {
  /* ... */
}
export const Loading: Story = {
  /* ... */
}
export const Error: Story = {
  /* ... */
}
```

### 3. Use Descriptive Names

```typescript
// ✅ Good
export const LargeButtonWithIcon: Story = {
  /* ... */
}

// ❌ Avoid
export const Example2: Story = {
  /* ... */
}
```

### 4. Document Props

```typescript
argTypes: {
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
    description: 'Button size variant',  // ← Add descriptions
    table: {
      defaultValue: { summary: 'md' },
      type: { summary: 'string' },
    },
  },
}
```

### 5. Avoid Over-mocking

Let Storybook wire up real props and callbacks when possible.

### 6. Test Real Use Cases

Stories should reflect actual usage patterns, not just showcase props.

## Base Component Stories

Example stories are provided for:

- **Button** (`src/presentation/ui/button.stories.tsx`)
- **Spinner** (`src/presentation/ui/spinner.stories.tsx`)

Use these as templates for documenting other components.

## Publishing Storybook

### Deploy Static Build

```bash
# Build Storybook
pnpm build-storybook

# Deploy storybook-static/ to static host:
# Vercel, Netlify, GitHub Pages, etc.
```

### Link from Documentation

Add to main `docs-v2/README.md`:

```markdown
## Component Playground

Explore components interactively: → [Storybook](https://storybook.example.com)
```

## Troubleshooting

### Stories Not Appearing

Check `.storybook/main.ts` stories glob pattern:

```typescript
stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)']
```

### Path Aliases Not Working

Verify webpack config in `.storybook/main.ts`:

```typescript
webpackFinal: async (config) => {
  config.resolve?.alias = {
    // ... your aliases
  }
  return config
}
```

### Tailwind Not Applied

Ensure Tailwind CSS is imported in `.storybook/preview.ts`:

```typescript
// This happens automatically with @storybook/nextjs
```

## Related Documentation

- [Storybook Official Docs](https://storybook.js.org/)
- [Component Documentation](../docs-v2/component-docs/)
- [Base Components](../docs-v2/component-docs/base-components/)

### Basic Story

```typescript
// src/presentation/ui/button/button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}
```

### Story with Interaction Testing

```typescript
import { expect, within, userEvent } from '@storybook/test'

export const Clickable: Story = {
  args: {
    children: 'Click me',
    onClick: fn(), // fn() creates a spy function
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await userEvent.click(button)
    await expect(button).toHaveFocus()
  },
}
```

### Documenting Component

```typescript
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'UI/Form/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible input component for form fields. Supports validation, icons, and error states.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'HTML input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
  },
} satisfies Meta<typeof Input>

export default meta
```

## Testing in Storybook

### Accessibility Testing

1. Open Storybook
2. Install accessibility addon: `npm install --save-dev @storybook/addon-a11y`
3. Access from "Accessibility" tab
4. Review violations and warnings

### Responsive Testing

```bash
# Open DevTools in Storybook
# Use device toolbar to test various screen sizes
# Stories automatically adapt to viewport changes
```

### Visual Testing

Use Storybook + Chromatic for visual regression testing:

```bash
npm install --save-dev chromatic
npx chromatic --project-token=<your-token>
```

## Organizing Stories

### Directory Structure

```
src/presentation/ui/
├── button/
│   ├── button.tsx
│   └── button.stories.tsx
├── form/
│   ├── form.tsx
│   ├── form-field.tsx
│   ├── form-field.stories.tsx
│   └── form.stories.tsx
├── shadcn/
│   ├── dialog/
│   │   ├── dialog.tsx
│   │   └── dialog.stories.tsx
│   └── select/
│       ├── select.tsx
│       └── select.stories.tsx
└── typography/
    └── headings/
        ├── heading.tsx
        └── heading.stories.tsx
```

### Story Titles

Use hierarchical titles for organization:

```typescript
export default {
  // ← Creates folder structure in Storybook
  title: 'Design System/Typography/Headings',
  component: Heading,
}
```

## Building & Deploying

### Build Storybook

```bash
# Generate static Storybook build
pnpm build:storybook

# Output: storybook-static/ directory
```

### Deploy to Vercel

```bash
# Build Storybook
pnpm build:storybook

# Push to repository
git push origin

# Vercel auto-deploys from: storybook-static/
```

### Deploy to Netlify

```bash
# Configure netlify.toml
[build]
  command = "pnpm build:storybook"
  publish = "storybook-static"
```

## Best Practices

### 1. One Story Per Use Case

```typescript
// ✅ Multiple stories showing different states
export const Default: Story = {
  /* ... */
}
export const WithError: Story = {
  /* ... */
}
export const Loading: Story = {
  /* ... */
}
export const Disabled: Story = {
  /* ... */
}

// ❌ Avoid: Single story with multiple variants
export const Variants: Story = {
  /* ... */
}
```

### 2. Clear Story Names

```typescript
// ✅ Descriptive names
export const PrimaryLarge: Story = {
  /* ... */
}
export const SecondarySmall: Story = {
  /* ... */
}
export const DisabledState: Story = {
  /* ... */
}

// ❌ Vague names
export const Story1: Story = {
  /* ... */
}
export const Test: Story = {
  /* ... */
}
```

### 3. Document with MDX

```typescript
import { Meta, Canvas, Story } from '@storybook/addon-docs'
import { Button } from './Button'

<Meta title="UI/Button" component={Button} />

# Button Component

The Button component is a core interactive element.

## Usage

<Canvas>
  <Story id="ui-button--primary" />
</Canvas>

## Props

- `variant` — Visual style (primary, secondary, etc.)
- `size` — Button size (sm, md, lg)
- `disabled` — Disable interaction
```

### 4. Use Controls for Interactivity

```typescript
export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}
```

## Component Documentation in Storybook

### Link from Component Docs

In your component documentation (e.g.,
`docs-v2/component-docs/base-components/button.md`):

```markdown
# Button Component

## View in Storybook

See [Button in Storybook](../../../.storybook/stories/button.stories.tsx) for
interactive examples.
```

### Auto-Generated Docs

Storybook can auto-generate docs from JSDoc:

```typescript
/**
 * A flexible button component
 * @component
 * @example
 * const args = { children: 'Click me', variant: 'primary' }
 * return <Button {...args} />
 */
export function Button({ children, variant }: ButtonProps) {
  // ...
}
```

## Resources

- [Storybook Official Docs](https://storybook.js.org/docs/react/get-started/install)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Testing with Storybook](https://storybook.js.org/docs/react/writing-tests/introduction)
- [Addon Ecosystem](https://storybook.js.org/docs/react/addons/addon-list)

## Troubleshooting

### Storybook Not Starting

```bash
# Clear cache and reinstall
rm -rf node_modules/.cache
pnpm install
pnpm storybook
```

### Stories Not Showing

Ensure story files:

1. Are named `*.stories.tsx`
2. Export a `default` meta object
3. Export at least one story
4. Use correct component import

### Styles Not Applying

```typescript
// Ensure Tailwind is loaded in preview
import './globals.css' // If using global styles

export const preview = {
  parameters: {
    // Storybook settings
  },
}
```

---

**Last Updated:** April 14, 2026 | **Status:** Ready for stories
