import { useLazyQuery, useMutation } from "@apollo/client";
import { StorageInventoryApi } from "./apiInterface";
import {
  GET_STORAGE_INVENTORY_BY_LOCATION,
  GET_STORAGE_INVENTORY_BY_PAYLOAD,
  PICK_STORAGE_LOCATION,
} from "./gql";

export const useStorageInventoryApi = (custom?: StorageInventoryApi) => {
  const [
    getStorageInventoryByLocation,
    {
      data: getStorageInventoryByLocationData,
      loading: getStorageInventoryByLocationLoading,
    },
  ] = useLazyQuery(
    custom?.getStorageInventoryByLocation?.query ||
      GET_STORAGE_INVENTORY_BY_LOCATION,
    custom?.getStorageInventoryByLocation?.options
  );

  const [
    getStorageInventoryByPayload,
    {
      data: getStorageInventoryByPayloadData,
      loading: getStorageInventoryByPayloadLoading,
    },
  ] = useLazyQuery(
    custom?.getStorageInventoryByPayload?.query ||
      GET_STORAGE_INVENTORY_BY_PAYLOAD,
    custom?.getStorageInventoryByPayload?.options
  );

  const [
    pickStorageLocation,
    { data: pickStorageLocationData, loading: pickStorageLocationLoading },
  ] = useMutation(
    custom?.pickStorageLocation?.mutation || PICK_STORAGE_LOCATION,
    custom?.pickStorageLocation?.options
  );

  return {
    getStorageInventoryByLocation: {
      query: getStorageInventoryByLocation,
      data: getStorageInventoryByLocationData,
      loading: getStorageInventoryByLocationLoading,
    },
    getStorageInventoryByPayload: {
      query: getStorageInventoryByPayload,
      data: getStorageInventoryByPayloadData,
      loading: getStorageInventoryByPayloadLoading,
    },
    pickStorageLocation: {
      mutation: pickStorageLocation,
      data: pickStorageLocationData,
      loading: pickStorageLocationLoading,
    },
  };
};
