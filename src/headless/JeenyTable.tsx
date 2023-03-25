import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import get from "lodash/get";
import { useCallback, useEffect, useMemo } from "react";

import { useApi } from "../..";
import { TableListQueryInputs } from "../types/queryInputs";
import { QueryResultTypes } from "../types/queryResults";
import { useTableColumns } from "./hooks/useTableColumns";
import { JeenyTableProps, JeenyTablePropsExtension } from "./tableTypes";

export const JeenyTable: React.FC<
  JeenyTableProps<TableListQueryInputs> &
    JeenyTablePropsExtension<QueryResultTypes>
> = ({
  query,
  variables,
  filterFn,
  columns,
  renderTable,
  tanstackTableProps,
}) => {
  const api = useApi();

  const { query: queryRequest, data: queryData } = get(api, query);
  const [_, endpoint] = query.split(".");

  const queryDataResult = get(queryData, endpoint);
  const data = useMemo(() => {
    let data = [];

    switch (query) {
      case "event.getEvents":
      case "event.getEventsByAssigneeId":
        data = [
          ...get(queryDataResult, "singleEvents", []),
          ...get(queryDataResult, "recurringEvents", []),
        ];
        break;

      default:
        data = get(queryDataResult, "items", queryDataResult || []);
    }

    if (filterFn) {
      data = data.filter(filterFn);
    }

    return data;
  }, [queryDataResult]);

  const callQuery = useCallback(async () => {
    return queryRequest({
      variables: variables as any,
    });
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
