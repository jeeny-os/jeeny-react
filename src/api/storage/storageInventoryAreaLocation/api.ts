import { useLazyQuery, useMutation } from "@apollo/client";
import { StorageInventoryAreaLocationApi } from "./apiInterface";
import {
  GET_STORAGE_INVENTORY_AREA_LOCATION,
  GET_STORAGE_INVENTORY_AREA_LOCATIONS,
  CREATE_STORAGE_INVENTORY_AREA_LOCATION,
  SAVE_STORAGE_INVENTORY_AREA_LOCATION,
  GET_STORAGE_INVENTORY_AREA_LOCATIONS_PAYLOAD,
  DELETE_STORAGE_INVENTORY_AREA_LOCATION,
} from "./gql";

export const useStorageInventoryAreaLocationApi = (
  custom?: StorageInventoryAreaLocationApi
) => {
  const [
    getStorageInventoryAreaLocation,
    {
      data: getStorageInventoryAreaLocationData,
      loading: getStorageInventoryAreaLocationLoading,
    },
  ] = useLazyQuery(
    custom?.getStorageInventoryAreaLocation?.query ||
      GET_STORAGE_INVENTORY_AREA_LOCATION,
    custom?.getStorageInventoryAreaLocation?.options
  );

  const [
    getStorageInventoryAreaLocationsPayload,
    {
      data: getStorageInventoryAreaLocationsPayloadData,
      loading: getStorageInventoryAreaLocationsPayloadLoading,
    },
  ] = useLazyQuery(
    custom?.getStorageInventoryAreaLocationsPayload?.query ||
      GET_STORAGE_INVENTORY_AREA_LOCATIONS_PAYLOAD,
    custom?.getStorageInventoryAreaLocationsPayload?.options
  );

  const [
    getStorageInventoryAreaLocations,
    {
      data: getStorageInventoryAreaLocationsData,
      loading: getStorageInventoryAreaLocationsLoading,
    },
  ] = useLazyQuery(
    custom?.getStorageInventoryAreaLocations?.query ||
      GET_STORAGE_INVENTORY_AREA_LOCATIONS,
    custom?.getStorageInventoryAreaLocations?.options
  );

  const [
    createStorageInventoryAreaLocation,
    {
      data: createStorageInventoryAreaLocationData,
      loading: createStorageInventoryAreaLocationLoading,
    },
  ] = useMutation(
    custom?.createStorageInventoryAreaLocation?.mutation ||
      CREATE_STORAGE_INVENTORY_AREA_LOCATION,
    custom?.createStorageInventoryAreaLocation?.options
  );

  const [
    saveStorageInventoryAreaLocation,
    {
      data: saveStorageInventoryAreaLocationData,
      loading: saveStorageInventoryAreaLocationLoading,
    },
  ] = useMutation(
    custom?.saveStorageInventoryAreaLocation?.mutation ||
      SAVE_STORAGE_INVENTORY_AREA_LOCATION,
    custom?.saveStorageInventoryAreaLocation?.options
  );

  const [
    deleteStorageInventoryAreaLocation,
    {
      data: deleteStorageInventoryAreaLocationData,
      loading: deleteStorageInventoryAreaLocationLoading,
    },
  ] = useMutation(
    custom?.deleteStorageInventoryAreaLocation?.mutation ||
      DELETE_STORAGE_INVENTORY_AREA_LOCATION,
    custom?.deleteStorageInventoryAreaLocation?.options
  );

  return {
    getStorageInventoryAreaLocation: {
      query: getStorageInventoryAreaLocation,
      data: getStorageInventoryAreaLocationData,
      loading: getStorageInventoryAreaLocationLoading,
    },
    getStorageInventoryAreaLocationsPayload: {
      query: getStorageInventoryAreaLocationsPayload,
      data: getStorageInventoryAreaLocationsPayloadData,
      loading: getStorageInventoryAreaLocationsPayloadLoading,
    },
    getStorageInventoryAreaLocations: {
      query: getStorageInventoryAreaLocations,
      data: getStorageInventoryAreaLocationsData,
      loading: getStorageInventoryAreaLocationsLoading,
    },
    createStorageInventoryAreaLocation: {
      mutation: createStorageInventoryAreaLocation,
      data: createStorageInventoryAreaLocationData,
      loading: createStorageInventoryAreaLocationLoading,
    },
    saveStorageInventoryAreaLocation: {
      mutation: saveStorageInventoryAreaLocation,
      data: saveStorageInventoryAreaLocationData,
      loading: saveStorageInventoryAreaLocationLoading,
    },
    deleteStorageInventoryAreaLocation: {
      mutation: deleteStorageInventoryAreaLocation,
      data: deleteStorageInventoryAreaLocationData,
      loading: deleteStorageInventoryAreaLocationLoading,
    },
  };
};
