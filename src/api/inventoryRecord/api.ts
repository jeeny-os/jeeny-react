import { useLazyQuery, useMutation } from "@apollo/client";
import { InventoryRecordApi } from "./apiInterface";
import {
  ADD_INVENTORY_RECORD,
  DEDUCT_INVENTORY_RECORD,
  GET_INVENTORY_LOGS,
} from "./gql";

export const useInventoryRecordApi = (custom?: InventoryRecordApi) => {
  const [
    addInventoryRecord,
    { data: addInventoryRecordData, loading: addInventoryRecordLoading },
  ] = useMutation(
    custom?.addInventoryRecord?.mutation || ADD_INVENTORY_RECORD,
    custom?.addInventoryRecord?.options
  );

  const [
    deductInventoryRecord,
    { data: deductInventoryRecordData, loading: deductInventoryRecordLoading },
  ] = useMutation(
    custom?.deductInventoryRecord?.mutation || DEDUCT_INVENTORY_RECORD,
    custom?.deductInventoryRecord?.options
  );

  const [
    getInventoryLogs,
    {
      data: getInventoryLogsData,
      loading: getInventoryLogsLoading,
      fetchMore: getInventoryLogsFetchMore,
    },
  ] = useLazyQuery(
    custom?.getInventoryLogs?.query || GET_INVENTORY_LOGS,
    custom?.getInventoryLogs?.options
  );

  return {
    addInventoryRecord: {
      mutation: addInventoryRecord,
      data: addInventoryRecordData,
      loading: addInventoryRecordLoading,
    },
    deductInventoryRecord: {
      mutation: deductInventoryRecord,
      data: deductInventoryRecordData,
      loading: deductInventoryRecordLoading,
    },
    getInventoryLogs: {
      query: getInventoryLogs,
      data: getInventoryLogsData,
      loading: getInventoryLogsLoading,
      fetchMore: getInventoryLogsFetchMore,
    },
  };
};
