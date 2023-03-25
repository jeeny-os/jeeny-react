import {
  IdentifiedColumnDef,
  Table,
  TableOptions,
} from "@tanstack/react-table";
import { DotNestedKeys } from "../types/helpers";

export type JeenyTableProps<T> = {
  [K in keyof T]-?: {
    /** The query will be one of the Jeeny API queries */
    query: NonNullable<K>;
    variables: T[K];
  };
}[keyof T];

export type JeenyTablePropsExtension<T> = {
  [K in keyof T]-?: {
    /** The query will be one of the Jeeny API queries */
    query: NonNullable<K>;
    columns: {
      id: DotNestedKeys<T[K]>;
      columnDef?: IdentifiedColumnDef<T[K], any>;
    }[];
    filterFn?: (record: T[K]) => boolean;
    renderTable: ({ table }: { table: Table<T[K]> }) => React.ReactElement;
    // TODO don't love the any here
    tanstackTableProps?: Omit<
      TableOptions<any>,
      "columns" | "data" | "getCoreRowModel"
    >;
  };
}[keyof T];
