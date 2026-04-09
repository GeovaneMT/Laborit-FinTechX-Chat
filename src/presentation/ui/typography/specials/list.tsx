import React from 'react'

export interface TypographyListItem {
  label: string
  value: string
}

export interface TypographyListProps extends React.ComponentProps<'ul'> {
  items: TypographyListItem[]
}

export function TypographyList({ items, ...props }: TypographyListProps) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {items.map((item) => (
        <li key={item.label}>
          {item.label}: {item.value}
        </li>
      ))}
    </ul>
  )
}
