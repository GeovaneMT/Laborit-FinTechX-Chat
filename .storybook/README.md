# Storybook Setup

Visual component development and documentation environment.

## Overview

Storybook provides an isolated development environment for building and
documenting UI components. It allows:

- Visual component testing
- Interactive component exploration
- Component documentation & examples
- Accessibility testing
- Responsive design verification

## Installation

Storybook is already configured for this project. To get started:

```bash
# Start Storybook development server
pnpm storybook

# Open browser to http://localhost:6006
```

## Project Integration

### Configuration Files

- **`.storybook/main.ts`** — Storybook configuration
- **`.storybook/preview.ts`** — Global settings, decorators, parameters
- **`.storybook/manager.ts`** — Manager UI customization (optional)

### Story Files

Stories are located near components with `.stories.tsx` extension:

```
src/presentation/ui/button/
├── button.tsx           # Component
├── button.types.ts      # Types
├── button.module.css    # Styles
├── button.stories.tsx   # ← Story for Storybook
└── __tests__/
    └── button.test.tsx
```

## Writing Stories

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
