import { useLazyQuery, useMutation } from "@apollo/client";
import { ItemStorageInventoryAreaLocationApi } from "./apiInterface";
import {
  CREATE_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
  GET_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
  SAVE_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
  DELETE_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
  HANDLE_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
} from "./gql";

export const useItemStorageInventoryAreaLocationApi = (
  custom?: ItemStorageInventoryAreaLocationApi
) => {
  const [
    getItemStorageInventoryAreaLocation,
    {
      data: getItemStorageInventoryAreaLocationData,
      loading: getItemStorageInventoryAreaLocationLoading,
    },
  ] = useLazyQuery(
    custom?.getItemStorageInventoryAreaLocation?.query ||
      GET_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
    custom?.getItemStorageInventoryAreaLocation?.options
  );

  const [
    createItemStorageInventoryAreaLocation,
    {
      data: createItemStorageInventoryAreaLocationData,
      loading: createItemStorageInventoryAreaLocationLoading,
    },
  ] = useMutation(
    custom?.createItemStorageInventoryAreaLocation?.mutation ||
      CREATE_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
    custom?.createItemStorageInventoryAreaLocation?.options
  );

  const [
    saveItemStorageInventoryAreaLocation,
    {
      data: saveItemStorageInventoryAreaLocationData,
      loading: saveItemStorageInventoryAreaLocationLoading,
    },
  ] = useMutation(
    custom?.updateItemStorageInventoryAreaLocation?.mutation ||
      SAVE_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
    custom?.updateItemStorageInventoryAreaLocation?.options
  );

  const [
    deleteItemStorageInventoryAreaLocation,
    {
      data: deleteItemStorageInventoryAreaLocationData,
      loading: deleteItemStorageInventoryAreaLocationLoading,
    },
  ] = useMutation(
    custom?.deleteItemStorageInventoryAreaLocation?.mutation ||
      DELETE_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
    custom?.deleteItemStorageInventoryAreaLocation?.options
  );

  const [
    handleItemStorageInventoryAreaLocation,
    {
      data: handleItemStorageInventoryAreaLocationData,
      loading: handleItemStorageInventoryAreaLocationLoading,
    },
  ] = useMutation(
    custom?.handleItemStorageInventoryAreaLocation?.mutation ||
      HANDLE_ITEM_STORAGE_INVENTORY_AREA_LOCATION,
    custom?.handleItemStorageInventoryAreaLocation?.options
  );

  return {
    getItemStorageInventoryAreaLocation: {
      query: getItemStorageInventoryAreaLocation,
      data: getItemStorageInventoryAreaLocationData,
      loading: getItemStorageInventoryAreaLocationLoading,
    },
    createItemStorageInventoryAreaLocation: {
      mutation: createItemStorageInventoryAreaLocation,
      data: createItemStorageInventoryAreaLocationData,
      loading: createItemStorageInventoryAreaLocationLoading,
    },
    saveItemStorageInventoryAreaLocation: {
      mutation: saveItemStorageInventoryAreaLocation,
      data: saveItemStorageInventoryAreaLocationData,
      loading: saveItemStorageInventoryAreaLocationLoading,
    },
    deleteItemStorageInventoryAreaLocation: {
      mutation: deleteItemStorageInventoryAreaLocation,
      data: deleteItemStorageInventoryAreaLocationData,
      loading: deleteItemStorageInventoryAreaLocationLoading,
    },
    handleItemStorageInventoryAreaLocation: {
      mutation: handleItemStorageInventoryAreaLocation,
      data: handleItemStorageInventoryAreaLocationData,
      loading: handleItemStorageInventoryAreaLocationLoading,
    },
  };
};
