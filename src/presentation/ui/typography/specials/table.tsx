import React from 'react'

interface TypographyTableProps extends React.ComponentProps<'table'> {
  columns: string[]
  data: Array<Array<string>>
}

export function TypographyTable({
  columns,
  data,
  ...props
}: TypographyTableProps) {
  return (
    <table className="my-6 w-full overflow-y-auto" {...props}>
      <thead>
        <tr className="even:bg-muted m-0 border-t p-0">
          {columns.map((column, index) => (
            <th
              key={index}
              className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="even:bg-muted m-0 border-t p-0">
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
