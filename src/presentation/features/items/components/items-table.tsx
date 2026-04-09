"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useMemo } from "react";
import type { Item } from "@core/entities/item";
import { useItemsScreen } from "@features/items/view-models/use-items-screen";
import { DataGrid } from "@pattern/data-grid";
import { Alert, AlertDescription, AlertTitle } from "@ui/alert";
import { Skeleton } from "@ui/skeleton";

export function ItemsTable() {
  const vm = useItemsScreen();

  const columns = useMemo<ColumnDef<Item>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => (
          <Link className="underline" href={`/items/${row.original.id}`}>
            {row.original.title}
          </Link>
        ),
      },
      {
        accessorKey: "updatedAt",
        header: "Updated",
      },
    ],
    [],
  );

  if (vm.error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Unable to load items</AlertTitle>
        <AlertDescription>{vm.error.message}</AlertDescription>
      </Alert>
    );
  }

  if (vm.isLoading) {
    return <Skeleton className="h-40 w-full" />;
  }

  return <DataGrid title="Items" data={vm.items} columns={columns} />;
}
