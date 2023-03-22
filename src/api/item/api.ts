import { useLazyQuery, useMutation } from "@apollo/client";
import { ItemApi } from "./apiInterface";
import {
  CREATE_ITEM,
  GET_ITEM,
  GET_ITEMS,
  SAVE_ITEM,
  GET_ITEM_DETAILS,
  GET_ITEMS_WITH_PRIMARY_SUPPLIER,
} from "./gql";

export const useItemApi = (custom?: ItemApi) => {
  const [getItem, { data: getItemData, loading: getItemLoading }] =
    useLazyQuery(custom?.getItem?.query || GET_ITEM, custom?.getItem?.options);

  const [
    getItemDetails,
    { data: getItemDetailsData, loading: getItemDetailsLoading },
  ] = useLazyQuery(
    custom?.getItemDetails?.query || GET_ITEM_DETAILS,
    custom?.getItemDetails?.options
  );

  const [
    getItems,
    {
      data: getItemsData,
      loading: getItemsLoading,
      fetchMore: getItemsFetchMore,
    },
  ] = useLazyQuery(
    custom?.getItems?.query || GET_ITEMS,
    custom?.getItems?.options
  );

  const [
    getItemsWithPrimarySupplier,
    {
      data: getItemsWithPrimarySupplierData,
      loading: getItemsWithPrimarySupplierLoading,
      fetchMore: getItemsWithPrimarySupplierFetchMore,
    },
  ] = useLazyQuery(
    custom?.getItemsWithPrimarySupplier?.query ||
      GET_ITEMS_WITH_PRIMARY_SUPPLIER,
    custom?.getItemsWithPrimarySupplier?.options
  );

  const [createItem, { data: createItemData, loading: createItemLoading }] =
    useMutation(
      custom?.createItem?.mutation || CREATE_ITEM,
      custom?.createItem?.options
    );

  const [saveItem, { data: saveItemData, loading: saveItemLoading }] =
    useMutation(
      custom?.saveItem?.mutation || SAVE_ITEM,
      custom?.saveItem?.options
    );

  return {
    getItem: {
      query: getItem,
      data: getItemData,
      loading: getItemLoading,
    },
    getItemDetails: {
      query: getItemDetails,
      data: getItemDetailsData,
      loading: getItemDetailsLoading,
    },
    getItems: {
      query: getItems,
      data: getItemsData,
      fetchMore: getItemsFetchMore,
      loading: getItemsLoading,
    },
    getItemsWithPrimarySupplier: {
      query: getItemsWithPrimarySupplier,
      data: getItemsWithPrimarySupplierData,
      fetchMore: getItemsWithPrimarySupplierFetchMore,
      loading: getItemsWithPrimarySupplierLoading,
    },
    createItem: {
      mutation: createItem,
      data: createItemData,
      loading: createItemLoading,
    },
    saveItem: {
      mutation: saveItem,
      data: saveItemData,
      loading: saveItemLoading,
    },
  };
};
