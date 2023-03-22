import {
  createColumnHelper,
  DeepKeys,
  DisplayColumnDef,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { JeenyListQueries } from "../../types/queryInputs";
import { QueryResultTypes } from "../../types/queryResults";

export function useTableColumns<T extends JeenyListQueries>(
  query: T,
  columns: {
    id: DeepKeys<QueryResultTypes[T]>;
    columnDef: DisplayColumnDef<QueryResultTypes[T], any>;
  }[]
) {
  const columnHelper = createColumnHelper<QueryResultTypes[typeof query]>();

  const definedColumns = useMemo(
    () =>
      columns.map((column) =>
        columnHelper.accessor(column.id, column.columnDef)
      ),
    [query, columns]
  );

  return definedColumns;
}
