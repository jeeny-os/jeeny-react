import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import get from "lodash/get";
import { useCallback, useEffect, useState } from "react";

import { useApi } from "../..";
import { TableListQueryInputs } from "../types/queryInputs";
import { QueryResultTypes } from "../types/queryResults";
import { useTableColumns } from "./hooks/useTableColumns";
import { JeenyTableProps, JeenyTablePropsExtension } from "./tableTypes";

export const JeenyTable: React.FC<
  JeenyTableProps<TableListQueryInputs> &
    JeenyTablePropsExtension<QueryResultTypes>
> = ({ query, variables, columns, renderTable, tanstackTableProps }) => {
  const api = useApi();
  const [data, setData] = useState([]);

  const callQuery = useCallback(async () => {
    const queryToUse = get(api, query);

    if (!queryToUse) {
      return;
    }

    const requestResults = await queryToUse.query({
      variables: variables as any,
    });
    const [_, endpoint] = query.split(".");

    const dataResult = get(requestResults, `data.${endpoint}`);

    // not all list queries use ".items"
    const data = get(dataResult, "items", dataResult || []);

    setData(data);
  }, [query, variables]);

  useEffect(() => {
    callQuery();
  }, [callQuery]);

  // TODO don't love the any here but having trouble matching the two columns definitions
  const columnsToUse = useTableColumns(query, columns as any);

  const table = useReactTable({
    ...tanstackTableProps,
    data,
    columns: columnsToUse,
    getCoreRowModel: getCoreRowModel(),
  });

  // TODO don't love the any here but having trouble because without it there is a union type of
  // all the Jeeny record types
  return <>{data.length === 0 ? null : renderTable({ table } as any)}</>;
};
