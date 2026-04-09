# TypographyTable Component

The `TypographyTable` component is a React functional component that renders a
responsive, styled table with customizable columns and data. It is styled with
Tailwind CSS to ensure consistent design and responsiveness.

## Features

- Dynamically generates a table based on the provided columns and data.
- Supports responsive design with scrollable content for larger tables.
- Styled with Tailwind CSS for clean and modern aesthetics.
- Allows alignment customization for table cells using attribute-based
  selectors.

## Props

### `TypographyTableProps`

| Prop      | Type                   | Required | Description                                   |
| --------- | ---------------------- | -------- | --------------------------------------------- |
| `columns` | `string[]`             | Yes      | An array of column headers.                   |
| `data`    | `Array<Array<string>>` | Yes      | A 2D array representing table rows and cells. |

### Example Data Structure

#### Columns

The `columns` prop should be an array of strings representing the table headers:

```typescript
;['Name', 'Age', 'Country']
```

#### Data

The `data` prop should be a 2D array where each sub-array represents a row:

```typescript
;[
  ['John Doe', '30', 'USA'],
  ['Jane Smith', '25', 'Canada'],
  ['Alice Johnson', '35', 'UK'],
]
```

## Usage

### Installation

Ensure your project uses React and Tailwind CSS. If Tailwind CSS is not already
set up in your project, follow the
[official documentation](https://tailwindcss.com/docs/installation) to install
and configure it.

### Import the Component

```tsx
import { TypographyTable } from './TypographyTable'
```

### Example Usage

```tsx
import { TypographyTable } from './TypographyTable'

export default function App() {
  const columns = ['Name', 'Age', 'Country']
  const data = [
    ['John Doe', '30', 'USA'],
    ['Jane Smith', '25', 'Canada'],
    ['Alice Johnson', '35', 'UK'],
  ]

  return (
    <div>
      <h1 className="text-xl font-bold">User Table</h1>
      <TypographyTable columns={columns} data={data} />
    </div>
  )
}
```

### Output

The above example will render a table:

| Name          | Age | Country |
| ------------- | --- | ------- |
| John Doe      | 30  | USA     |
| Jane Smith    | 25  | Canada  |
| Alice Johnson | 35  | UK      |

### Styling

The component uses the following Tailwind CSS classes:

- `my-6`: Adds vertical margins.
- `w-full`: Ensures the table spans the full width of its container.
- `overflow-y-auto`: Makes the table scrollable for overflowing content.
- `border`: Adds borders to cells and rows.
- `px-4 py-2`: Adds padding to table cells.
- `[&[align=center]]`, `[&[align=right]]`: Supports attribute-based text
  alignment.

## Customization

Feel free to extend or modify the component:

- Add support for custom cell rendering (e.g., JSX components).
- Enable dynamic row or column styling based on data.
- Add support for additional props like `className` for custom styling.

## License

This component is provided "as is". Modify and use it in your projects freely.
