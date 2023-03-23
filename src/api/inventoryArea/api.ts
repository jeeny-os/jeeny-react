import { useLazyQuery, useMutation } from "@apollo/client";
import { InventoryAreaApi } from "./apiInterface";
import {
  CREATE_INVENTORY_AREA,
  DELETE_INVENTORY_AREA,
  GET_INVENTORY_AREA,
  SAVE_INVENTORY_AREA,
} from "./gql";

export const useInventoryAreaApi = (custom?: InventoryAreaApi) => {
  const [
    getInventoryArea,
    { data: getInventoryAreaData, loading: getInventoryAreaLoading },
  ] = useLazyQuery(
    custom?.getInventoryArea?.query || GET_INVENTORY_AREA,
    custom?.getInventoryArea?.options
  );

  const [
    createInventoryArea,
    { data: createInventoryAreaData, loading: createInventoryAreaLoading },
  ] = useMutation(
    custom?.createInventoryArea?.mutation || CREATE_INVENTORY_AREA,
    custom?.createInventoryArea?.options
  );

  const [
    saveInventoryArea,
    { data: saveInventoryAreaData, loading: saveInventoryAreaLoading },
  ] = useMutation(
    custom?.saveInventoryArea?.mutation || SAVE_INVENTORY_AREA,
    custom?.saveInventoryArea?.options
  );

  const [
    deleteInventoryArea,
    { data: deleteInventoryAreaData, loading: deleteInventoryAreaLoading },
  ] = useMutation(
    custom?.deleteInventoryArea?.mutation || DELETE_INVENTORY_AREA,
    custom?.deleteInventoryArea?.options
  );

  return {
    getInventoryArea: {
      query: getInventoryArea,
      data: getInventoryAreaData,
      loading: getInventoryAreaLoading,
    },
    createInventoryArea: {
      mutation: createInventoryArea,
      data: createInventoryAreaData,
      loading: createInventoryAreaLoading,
    },
    saveInventoryArea: {
      mutation: saveInventoryArea,
      data: saveInventoryAreaData,
      loading: saveInventoryAreaLoading,
    },
    deleteInventoryArea: {
      mutation: deleteInventoryArea,
      data: deleteInventoryAreaData,
      loading: deleteInventoryAreaLoading,
    },
  };
};
