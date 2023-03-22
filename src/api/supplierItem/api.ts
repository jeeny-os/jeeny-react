import { useLazyQuery, useMutation } from "@apollo/client";
import { SupplierItemApi } from "./apiInterface";
import {
  CREATE_SUPPLIER_ITEM,
  GET_SUPPLIER_ITEM,
  GET_SUPPLIER_ITEMS_BY_ITEM,
  GET_SUPPLIER_ITEMS_BY_SUPPLIER,
  SAVE_SUPPLIER_ITEM,
} from "./gql";

export const useSupplierItemApi = (custom?: SupplierItemApi) => {
  const [
    getSupplierItem,
    { data: getSupplierItemData, loading: getSupplierItemLoading },
  ] = useLazyQuery(
    custom?.getSupplierItem?.query || GET_SUPPLIER_ITEM,
    custom?.getSupplierItem?.options
  );

  const [
    getSupplierItemsBySupplier,
    {
      data: getSupplierItemsBySupplierData,
      loading: getSupplierItemsBySupplierLoading,
      fetchMore: getSupplierItemsBySupplierFetchMore,
    },
  ] = useLazyQuery(
    custom?.getSupplierItemsBySupplier?.query || GET_SUPPLIER_ITEMS_BY_SUPPLIER,
    custom?.getSupplierItemsBySupplier?.options
  );

  const [
    getSupplierItemsByItem,
    {
      data: getSupplierItemsByItemData,
      loading: getSupplierItemsByItemLoading,
      fetchMore: getSupplierItemsByItemFetchMore,
    },
  ] = useLazyQuery(
    custom?.getSupplierItemsByItem?.query || GET_SUPPLIER_ITEMS_BY_ITEM,
    custom?.getSupplierItemsByItem?.options
  );

  const [
    createSupplierItem,
    { data: createSupplierItemData, loading: createSupplierItemLoading },
  ] = useMutation(
    custom?.createSupplierItem?.mutation || CREATE_SUPPLIER_ITEM,
    custom?.createSupplierItem?.options
  );

  const [
    saveSupplierItem,
    { data: saveSupplierItemData, loading: saveSupplierItemLoading },
  ] = useMutation(
    custom?.saveSupplierItem?.mutation || SAVE_SUPPLIER_ITEM,
    custom?.saveSupplierItem?.options
  );

  return {
    getSupplierItem: {
      query: getSupplierItem,
      data: getSupplierItemData,
      loading: getSupplierItemLoading,
    },
    getSupplierItemsByItem: {
      query: getSupplierItemsByItem,
      data: getSupplierItemsByItemData,
      fetchMore: getSupplierItemsByItemFetchMore,
      loading: getSupplierItemsByItemLoading,
    },
    getSupplierItemsBySupplier: {
      query: getSupplierItemsBySupplier,
      data: getSupplierItemsBySupplierData,
      fetchMore: getSupplierItemsBySupplierFetchMore,
      loading: getSupplierItemsBySupplierLoading,
    },
    createSupplierItem: {
      mutation: createSupplierItem,
      data: createSupplierItemData,
      loading: createSupplierItemLoading,
    },
    saveSupplierItem: {
      mutation: saveSupplierItem,
      data: saveSupplierItemData,
      loading: saveSupplierItemLoading,
    },
  };
};
