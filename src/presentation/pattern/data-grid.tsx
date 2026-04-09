import type { ReactNode } from "react";
import { DataGridFooter } from "@pattern/data-grid-footer";
import { DataGridHeader } from "@pattern/data-grid-header";
import { DataGridTable } from "@pattern/data-grid-table";
import { dataGridVariants } from "@pattern/data-grid.variants";
import { cn } from "@presentation/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";

type Props<TData> = {
  title?: string;
  data: TData[];
  columns: ColumnDef<TData, unknown>[];
  footer?: ReactNode;
  density?: "compact" | "comfortable";
};

export function DataGrid<TData>({ title, data, columns, footer, density }: Props<TData>) {
  return (
    <div className={cn("rounded-md border border-(--color-border)", dataGridVariants())}>
      {title ? <DataGridHeader>{title}</DataGridHeader> : null}
      <DataGridTable data={data} columns={columns} density={density} />
      {footer ? <DataGridFooter>{footer}</DataGridFooter> : null}
    </div>
  );
}
