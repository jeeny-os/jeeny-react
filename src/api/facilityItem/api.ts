import { useLazyQuery, useMutation } from "@apollo/client";
import { FacilityItemApi } from "./apiInterface";
import {
  CREATE_FACILITY_ITEM,
  GET_FACILITY_ITEM,
  GET_FACILITY_ITEMS_BY_FACILITY,
  GET_FACILITY_ITEMS_BY_ITEM,
  SAVE_FACILITY_ITEM,
} from "./gql";

export const useFacilityItemApi = (custom?: FacilityItemApi) => {
  const [
    getFacilityItem,
    { data: getFacilityItemData, loading: getFacilityItemLoading },
  ] = useLazyQuery(
    custom?.getFacilityItem?.query || GET_FACILITY_ITEM,
    custom?.getFacilityItem?.options
  );

  const [
    getFacilityItemsByFacility,
    {
      data: getFacilityItemsByFacilityData,
      loading: getFacilityItemsByFacilityLoading,
    },
  ] = useLazyQuery(
    custom?.getFacilityItemsByFacility?.query || GET_FACILITY_ITEMS_BY_FACILITY,
    custom?.getFacilityItemsByFacility?.options
  );

  const [
    getFacilityItemsByItem,
    {
      data: getFacilityItemsByItemData,
      loading: getFacilityItemsByItemLoading,
    },
  ] = useLazyQuery(
    custom?.getFacilityItemsByItem?.query || GET_FACILITY_ITEMS_BY_ITEM,
    custom?.getFacilityItemsByItem?.options
  );

  const [
    createFacilityItem,
    { data: createFacilityItemData, loading: createFacilityItemLoading },
  ] = useMutation(
    custom?.createFacilityItem?.mutation || CREATE_FACILITY_ITEM,
    custom?.createFacilityItem?.options
  );

  const [
    saveFacilityItem,
    { data: saveFacilityItemData, loading: saveFacilityItemLoading },
  ] = useMutation(
    custom?.saveFacilityItem?.mutation || SAVE_FACILITY_ITEM,
    custom?.saveFacilityItem?.options
  );

  return {
    getFacilityItem: {
      query: getFacilityItem,
      data: getFacilityItemData,
      loading: getFacilityItemLoading,
    },
    getFacilityItemsByFacility: {
      query: getFacilityItemsByFacility,
      data: getFacilityItemsByFacilityData,
      loading: getFacilityItemsByFacilityLoading,
    },
    getFacilityItemsByItem: {
      query: getFacilityItemsByItem,
      data: getFacilityItemsByItemData,
      loading: getFacilityItemsByItemLoading,
    },
    createFacilityItem: {
      mutation: createFacilityItem,
      data: createFacilityItemData,
      loading: createFacilityItemLoading,
    },
    saveFacilityItem: {
      mutation: saveFacilityItem,
      data: saveFacilityItemData,
      loading: saveFacilityItemLoading,
    },
  };
};
