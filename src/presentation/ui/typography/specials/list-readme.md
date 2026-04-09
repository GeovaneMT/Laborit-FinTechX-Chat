# TypographyList Component

The `TypographyList` component is a React functional component that renders a
list of items with labels and corresponding values in a visually styled format
using Tailwind CSS.

## Features

- Dynamically renders a list of items.
- Displays each item as a bullet point (`<li>`).
- Customizable content for each list item using the `items` prop.
- Styled with Tailwind CSS for consistent spacing and design.

## Props

### `TypographyListProps`

| Prop    | Type                                  | Required | Description                                                           |
| ------- | ------------------------------------- | -------- | --------------------------------------------------------------------- |
| `items` | `{ label: string; value: string; }[]` | Yes      | An array of objects containing labels and their corresponding values. |

### Example Item Structure

Each item in the `items` array should be an object with the following structure:

```typescript
{
  label: string // The label to display
  value: string // The value to display
}
```

## Usage

### Installation

Ensure your project uses React and Tailwind CSS. If Tailwind CSS is not already
set up in your project, follow the
[official documentation](https://tailwindcss.com/docs/installation) to install
and configure it.

### Import the Component

```tsx
import { TypographyList } from './TypographyList'
```

### Example Usage

```tsx
import { TypographyList } from './TypographyList'

export default function App() {
  const items = [
    { label: 'Name', value: 'John Doe' },
    { label: 'Age', value: '30' },
    { label: 'Country', value: 'USA' },
  ]

  return (
    <div>
      <h1 className="text-xl font-bold">User Information</h1>
      <TypographyList items={items} />
    </div>
  )
}
```

### Output

The above example will render:

- Name: John Doe
- Age: 30
- Country: USA

### Styling

The component uses the following Tailwind CSS classes:

- `my-6`: Adds vertical margins.
- `ml-6`: Adds left margin to the list.
- `list-disc`: Displays bullet points.
- `[&>li]:mt-2`: Adds top margin to each `<li>`.

You can customize these styles by modifying the class names in the component.

## Customization

Feel free to enhance or modify the component to fit your project needs. For
example, you can:

- Change the list style (e.g., numbers or custom icons).
- Add more props for additional flexibility, such as custom CSS classes.
- Support different data types for `value`.

## License

This component is provided "as is". Modify and use it in your projects freely.
