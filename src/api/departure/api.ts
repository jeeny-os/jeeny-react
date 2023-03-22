import { useLazyQuery, useMutation } from "@apollo/client";
import { DepartureApi } from "./apiInterface";
import {
  CREATE_DEPARTURE,
  CREATE_DEPARTURE_LINE_ITEM,
  CREATE_DEPARTURE_PICK,
  CREATE_DEPARTURE_PICK_LIST,
  CREATE_DEPARTURE_PICK_LIST_LINE_ITEM,
  DELETE_DEPARTURE_LINE_ITEM,
  DELETE_DEPARTURE_PICK,
  DELETE_DEPARTURE_PICK_LINE_ITEM,
  DELETE_DEPARTURE_PICK_LIST,
  DELETE_DEPARTURE_PICK_LIST_LINE_ITEM,
  GET_DEPARTURE,
  GET_DEPARTURES,
  GET_DEPARTURES_BY_EXTERNAL_CUSTOMER_ID,
  GET_DEPARTURE_DETAILS,
  GET_DEPARTURE_LINE_ITEMS_BY_ITEM_ID,
  GET_DEPARTURE_PICK_LISTS,
  GET_DEPARTURE_PICK_LISTS_BY_FACILITY_ID,
  GET_DEPARTURE_PICK_LIST_LINE_ITEMS_BY_ITEM_ID,
  PICK_STORAGE_LOCATION_FOR_DEPARTURE,
  SAVE_DEPARTURE,
  SAVE_DEPARTURE_LINE_ITEM,
  SAVE_DEPARTURE_PICK_LIST_LINE_ITEM,
} from "./gql";

export const useDepartureApi = (custom?: DepartureApi) => {
  const additionalApi = useDepartureApi2(custom);

  const [
    getDeparture,
    { data: getDepartureData, loading: getDepartureLoading },
  ] = useLazyQuery(
    custom?.getDeparture?.query || GET_DEPARTURE,
    custom?.getDeparture?.options
  );

  const [
    getDepartureDetails,
    { data: getDepartureDetailsData, loading: getDepartureDetailsLoading },
  ] = useLazyQuery(
    custom?.getDepartureDetails?.query || GET_DEPARTURE_DETAILS,
    custom?.getDepartureDetails?.options
  );

  const [
    getDepartures,
    {
      data: getDeparturesData,
      loading: getDeparturesLoading,
      fetchMore: getDeparturesFetchMore,
    },
  ] = useLazyQuery(
    custom?.getDepartures?.query || GET_DEPARTURES,
    custom?.getDepartures?.options
  );

  const [
    getDeparturesByExternalCustomerId,
    {
      data: getDeparturesByExternalCustomerIdData,
      loading: getDeparturesByExternalCustomerIdLoading,
      fetchMore: getDeparturesByExternalCustomerIdFetchMore,
    },
  ] = useLazyQuery(
    custom?.getDeparturesByExternalCustomerId?.query ||
      GET_DEPARTURES_BY_EXTERNAL_CUSTOMER_ID,
    custom?.getDeparturesByExternalCustomerId?.options
  );

  const [
    createDeparture,
    { data: createDepartureData, loading: createDepartureLoading },
  ] = useMutation(
    custom?.createDeparture?.mutation || CREATE_DEPARTURE,
    custom?.createDeparture?.options
  );

  const [
    saveDeparture,
    { data: saveDepartureData, loading: saveDepartureLoading },
  ] = useMutation(
    custom?.saveDeparture?.mutation || SAVE_DEPARTURE,
    custom?.saveDeparture?.options
  );

  const [
    createDepartureLineItem,
    {
      data: createDepartureLineItemData,
      loading: createDepartureLineItemLoading,
    },
  ] = useMutation(
    custom?.createDepartureLineItem?.mutation || CREATE_DEPARTURE_LINE_ITEM,
    custom?.createDepartureLineItem?.options
  );

  const [
    saveDepartureLineItem,
    { data: saveDepartureLineItemData, loading: saveDepartureLineItemLoading },
  ] = useMutation(
    custom?.saveDepartureLineItem?.mutation || SAVE_DEPARTURE_LINE_ITEM,
    custom?.saveDepartureLineItem?.options
  );

  const [
    deleteDepartureLineItem,
    {
      data: deleteDepartureLineItemData,
      loading: deleteDepartureLineItemLoading,
    },
  ] = useMutation(
    custom?.deleteDepartureLineItem?.mutation || DELETE_DEPARTURE_LINE_ITEM,
    custom?.deleteDepartureLineItem?.options
  );

  const [
    getDepartureLineItemsByItemId,
    {
      data: getDepartureLineItemsByItemIdData,
      loading: getDepartureLineItemsByItemIdLoading,
      fetchMore: getDepartureLineItemsByItemIdFetchMore,
    },
  ] = useLazyQuery(
    custom?.getDepartureLineItemsByItemId?.query ||
      GET_DEPARTURE_LINE_ITEMS_BY_ITEM_ID,
    custom?.getDepartureLineItemsByItemId?.options
  );

  const [
    createDeparturePickList,
    {
      data: createDeparturePickListData,
      loading: createDeparturePickListLoading,
    },
  ] = useMutation(
    custom?.createDeparturePickList?.mutation || CREATE_DEPARTURE_PICK_LIST,
    custom?.createDeparturePickList?.options
  );

  const [
    deleteDeparturePickList,
    {
      data: deleteDeparturePickListData,
      loading: deleteDeparturePickListLoading,
    },
  ] = useMutation(
    custom?.deleteDeparturePickList?.mutation || DELETE_DEPARTURE_PICK_LIST,
    custom?.deleteDeparturePickList?.options
  );

  const [
    getDeparturePickLists,
    {
      data: getDeparturePickListsData,
      loading: getDeparturePickListsLoading,
      fetchMore: getDeparturePickListsFetchMore,
    },
  ] = useLazyQuery(
    custom?.getDeparturePickLists?.query || GET_DEPARTURE_PICK_LISTS,
    custom?.getDeparturePickLists?.options
  );

  const [
    getDeparturePickListsByFacilityId,
    {
      data: getDeparturePickListsByFacilityIdData,
      loading: getDeparturePickListsByFacilityIdLoading,
      fetchMore: getDeparturePickListsByFacilityIdFetchMore,
    },
  ] = useLazyQuery(
    custom?.getDeparturePickListsByFacilityId?.query ||
      GET_DEPARTURE_PICK_LISTS_BY_FACILITY_ID,
    custom?.getDeparturePickListsByFacilityId?.options
  );

  return {
    ...additionalApi,
    getDeparture: {
      query: getDeparture,
      data: getDepartureData,
      loading: getDepartureLoading,
    },
    getDepartureDetails: {
      query: getDepartureDetails,
      data: getDepartureDetailsData,
      loading: getDepartureDetailsLoading,
    },
    getDepartures: {
      query: getDepartures,
      data: getDeparturesData,
      fetchMore: getDeparturesFetchMore,
      loading: getDeparturesLoading,
    },
    getDeparturesByExternalCustomerId: {
      query: getDeparturesByExternalCustomerId,
      data: getDeparturesByExternalCustomerIdData,
      fetchMore: getDeparturesByExternalCustomerIdFetchMore,
      loading: getDeparturesByExternalCustomerIdLoading,
    },
    create: {
      mutation: createDeparture,
      data: createDepartureData,
      loading: createDepartureLoading,
    },
    save: {
      mutation: saveDeparture,
      data: saveDepartureData,
      loading: saveDepartureLoading,
    },
    createLineItem: {
      mutation: createDepartureLineItem,
      data: createDepartureLineItemData,
      loading: createDepartureLineItemLoading,
    },
    saveLineItem: {
      mutation: saveDepartureLineItem,
      data: saveDepartureLineItemData,
      loading: saveDepartureLineItemLoading,
    },
    deleteLineItem: {
      mutation: deleteDepartureLineItem,
      data: deleteDepartureLineItemData,
      loading: deleteDepartureLineItemLoading,
    },
    getDepartureLineItemsByItemId: {
      query: getDepartureLineItemsByItemId,
      data: getDepartureLineItemsByItemIdData,
      fetchMore: getDepartureLineItemsByItemIdFetchMore,
      loading: getDepartureLineItemsByItemIdLoading,
    },
    createPickList: {
      mutation: createDeparturePickList,
      data: createDeparturePickListData,
      loading: createDeparturePickListLoading,
    },
    deletePickList: {
      mutation: deleteDeparturePickList,
      data: deleteDeparturePickListData,
      loading: deleteDeparturePickListLoading,
    },
    getDeparturePickLists: {
      query: getDeparturePickLists,
      data: getDeparturePickListsData,
      fetchMore: getDeparturePickListsFetchMore,
      loading: getDeparturePickListsLoading,
    },

    getDeparturePickListsByFacilityId: {
      query: getDeparturePickListsByFacilityId,
      data: getDeparturePickListsByFacilityIdData,
      fetchMore: getDeparturePickListsByFacilityIdFetchMore,
      loading: getDeparturePickListsByFacilityIdLoading,
    },
  };
};

const useDepartureApi2 = (custom?: DepartureApi) => {
  const [
    getDeparturePickListLineItemsByItemId,
    {
      data: getDeparturePickListLineItemsByItemIdData,
      loading: getDeparturePickListLineItemsByItemIdLoading,
      fetchMore: getDeparturePickListLineItemsByItemIdFetchMore,
    },
  ] = useLazyQuery(
    custom?.getDeparturePickListLineItemsByItemId?.query ||
      GET_DEPARTURE_PICK_LIST_LINE_ITEMS_BY_ITEM_ID,
    custom?.getDeparturePickListLineItemsByItemId?.options
  );

  const [
    createDeparturePickListLineItem,
    {
      data: createDeparturePickListLineItemData,
      loading: createDeparturePickListLineItemLoading,
    },
  ] = useMutation(
    custom?.createDeparturePickListLineItem?.mutation ||
      CREATE_DEPARTURE_PICK_LIST_LINE_ITEM,
    custom?.createDeparturePickListLineItem?.options
  );

  const [
    saveDeparturePickListLineItem,
    {
      data: saveDeparturePickListLineItemData,
      loading: saveDeparturePickListLineItemLoading,
    },
  ] = useMutation(
    custom?.saveDeparturePickListLineItem?.mutation ||
      SAVE_DEPARTURE_PICK_LIST_LINE_ITEM,
    custom?.saveDeparturePickListLineItem?.options
  );

  const [
    deleteDeparturePickListLineItem,
    {
      data: deleteDeparturePickListLineItemData,
      loading: deleteDeparturePickListLineItemLoading,
    },
  ] = useMutation(
    custom?.deleteDeparturePickListLineItem?.mutation ||
      DELETE_DEPARTURE_PICK_LIST_LINE_ITEM,
    custom?.deleteDeparturePickListLineItem?.options
  );

  const [
    createDeparturePick,
    { data: createDeparturePickData, loading: createDeparturePickLoading },
  ] = useMutation(
    custom?.createDeparturePick?.mutation || CREATE_DEPARTURE_PICK,
    custom?.createDeparturePick?.options
  );

  const [
    deleteDeparturePick,
    { data: deleteDeparturePickData, loading: deleteDeparturePickLoading },
  ] = useMutation(
    custom?.deleteDeparturePick?.mutation || DELETE_DEPARTURE_PICK,
    custom?.deleteDeparturePick?.options
  );

  const [
    deleteDeparturePickLineItem,
    {
      data: deleteDeparturePickLineItemData,
      loading: deleteDeparturePickLineItemLoading,
    },
  ] = useMutation(
    custom?.deleteDeparturePickLineItem?.mutation ||
      DELETE_DEPARTURE_PICK_LINE_ITEM,
    custom?.deleteDeparturePickLineItem?.options
  );

  const [
    pickStorageLocationForDeparture,
    {
      data: pickStorageLocationForDepartureData,
      loading: pickStorageLocationForDepartureLoading,
    },
  ] = useMutation(
    custom?.pickStorageLocationForDeparture?.mutation ||
      PICK_STORAGE_LOCATION_FOR_DEPARTURE,
    custom?.pickStorageLocationForDeparture?.options
  );

  return {
    getDeparturePickListLineItemsByItemId: {
      query: getDeparturePickListLineItemsByItemId,
      fetchMore: getDeparturePickListLineItemsByItemIdFetchMore,
      data: getDeparturePickListLineItemsByItemIdData,
      loading: getDeparturePickListLineItemsByItemIdLoading,
    },
    createPickListLineItem: {
      mutation: createDeparturePickListLineItem,
      data: createDeparturePickListLineItemData,
      loading: createDeparturePickListLineItemLoading,
    },
    savePickListLineItem: {
      mutation: saveDeparturePickListLineItem,
      data: saveDeparturePickListLineItemData,
      loading: saveDeparturePickListLineItemLoading,
    },
    deletePickListLineItem: {
      mutation: deleteDeparturePickListLineItem,
      data: deleteDeparturePickListLineItemData,
      loading: deleteDeparturePickListLineItemLoading,
    },
    createPick: {
      mutation: createDeparturePick,
      data: createDeparturePickData,
      loading: createDeparturePickLoading,
    },
    deletePick: {
      mutation: deleteDeparturePick,
      data: deleteDeparturePickData,
      loading: deleteDeparturePickLoading,
    },
    deletePickLineItem: {
      mutation: deleteDeparturePickLineItem,
      data: deleteDeparturePickLineItemData,
      loading: deleteDeparturePickLineItemLoading,
    },
    pickStorageLocation: {
      mutation: pickStorageLocationForDeparture,
      data: pickStorageLocationForDepartureData,
      loading: pickStorageLocationForDepartureLoading,
    },
  };
};
