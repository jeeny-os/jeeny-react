import { useLazyQuery, useMutation } from "@apollo/client";
import { BidApi } from "./apiInterface";
import {
  CREATE_BID,
  CREATE_BID_LINE_ITEM,
  CREATE_BID_REQUEST,
  CREATE_BID_REQUEST_LINE_ITEM,
  DELETE_BID,
  DELETE_BID_LINE_ITEM,
  DELETE_BID_REQUEST,
  DELETE_BID_REQUEST_LINE_ITEM,
  GET_BIDS_BY_SUPPLIER,
  GET_BID_LINE_ITEMS_BY_ITEM,
  GET_BID_LINE_ITEMS_BY_ITEM_GROUP,
  GET_BID_LINE_ITEMS_BY_SUPPLIER,
  GET_BID_REQUESTS,
  GET_BID_REQUEST_DETAILS,
  GET_BID_REQUEST_LINE_ITEMS_BY_ITEM,
  SAVE_BID,
  SAVE_BID_LINE_ITEM,
  SAVE_BID_REQUEST,
  SAVE_BID_REQUEST_LINE_ITEM,
} from "./gql";

export const useBidApi = (custom?: BidApi) => {
  const additionalApi = useBidApi2(custom);

  const [
    getBidRequests,
    {
      data: getBidRequestsData,
      loading: getBidRequestsLoading,
      fetchMore: getBidRequestsFetchMore,
    },
  ] = useLazyQuery(
    custom?.getBidRequests?.query || GET_BID_REQUESTS,
    custom?.getBidRequests?.options
  );

  const [
    getBidRequestDetails,
    { data: getBidRequestDetailsData, loading: getBidRequestDetailsLoading },
  ] = useLazyQuery(
    custom?.getBidRequestDetails?.query || GET_BID_REQUEST_DETAILS,
    custom?.getBidRequestDetails?.options
  );

  const [
    createBidRequest,
    { data: createBidRequestData, loading: createBidRequestLoading },
  ] = useMutation(
    custom?.createBidRequest?.mutation || CREATE_BID_REQUEST,
    custom?.createBidRequest?.options
  );

  const [
    saveBidRequest,
    { data: saveBidRequestData, loading: saveBidRequestLoading },
  ] = useMutation(
    custom?.saveBidRequest?.mutation || SAVE_BID_REQUEST,
    custom?.saveBidRequest?.options
  );

  const [
    deleteBidRequest,
    { data: deleteBidRequestData, loading: deleteBidRequestLoading },
  ] = useMutation(
    custom?.deleteBidRequest?.mutation || DELETE_BID_REQUEST,
    custom?.deleteBidRequest?.options
  );

  const [
    createBidRequestLineItem,
    {
      data: createBidRequestLineItemData,
      loading: createBidRequestLineItemLoading,
    },
  ] = useMutation(
    custom?.createBidRequestLineItem?.mutation || CREATE_BID_REQUEST_LINE_ITEM,
    custom?.createBidRequestLineItem?.options
  );

  const [
    saveBidRequestLineItem,
    {
      data: saveBidRequestLineItemData,
      loading: saveBidRequestLineItemLoading,
    },
  ] = useMutation(
    custom?.saveBidRequestLineItem?.mutation || SAVE_BID_REQUEST_LINE_ITEM,
    custom?.saveBidRequestLineItem?.options
  );

  const [
    deleteBidRequestLineItem,
    {
      data: deleteBidRequestLineItemData,
      loading: deleteBidRequestLineItemLoading,
    },
  ] = useMutation(
    custom?.deleteBidRequestLineItem?.mutation || DELETE_BID_REQUEST_LINE_ITEM,
    custom?.deleteBidRequestLineItem?.options
  );

  const [createBid, { data: createBidData, loading: createBidLoading }] =
    useMutation(
      custom?.createBid?.mutation || CREATE_BID,
      custom?.createBid?.options
    );

  const [saveBid, { data: saveBidData, loading: saveBidLoading }] = useMutation(
    custom?.saveBid?.mutation || SAVE_BID,
    custom?.saveBid?.options
  );

  const [deleteBid, { data: deleteBidData, loading: deleteBidLoading }] =
    useMutation(
      custom?.deleteBid?.mutation || DELETE_BID,
      custom?.deleteBid?.options
    );

  const [
    createBidLineItem,
    { data: createBidLineItemData, loading: createBidLineItemLoading },
  ] = useMutation(
    custom?.createBidLineItem?.mutation || CREATE_BID_LINE_ITEM,
    custom?.createBidLineItem?.options
  );

  const [
    saveBidLineItem,
    { data: saveBidLineItemData, loading: saveBidLineItemLoading },
  ] = useMutation(
    custom?.saveBidLineItem?.mutation || SAVE_BID_LINE_ITEM,
    custom?.saveBidLineItem?.options
  );

  const [
    deleteBidLineItem,
    { data: deleteBidLineItemData, loading: deleteBidLineItemLoading },
  ] = useMutation(
    custom?.deleteBidLineItem?.mutation || DELETE_BID_LINE_ITEM,
    custom?.deleteBidLineItem?.options
  );

  return {
    ...additionalApi,
    getBidRequests: {
      query: getBidRequests,
      data: getBidRequestsData,
      loading: getBidRequestsLoading,
      fetch: getBidRequestsFetchMore,
    },
    getBidRequestDetails: {
      query: getBidRequestDetails,
      data: getBidRequestDetailsData,
      loading: getBidRequestDetailsLoading,
    },
    createBidRequest: {
      mutation: createBidRequest,
      data: createBidRequestData,
      loading: createBidRequestLoading,
    },
    saveBidRequest: {
      mutation: saveBidRequest,
      data: saveBidRequestData,
      loading: saveBidRequestLoading,
    },
    deleteBidRequest: {
      mutation: deleteBidRequest,
      data: deleteBidRequestData,
      loading: deleteBidRequestLoading,
    },
    createBidRequestLineItem: {
      mutation: createBidRequestLineItem,
      data: createBidRequestLineItemData,
      loading: createBidRequestLineItemLoading,
    },
    saveBidRequestLineItem: {
      mutation: saveBidRequestLineItem,
      data: saveBidRequestLineItemData,
      loading: saveBidRequestLineItemLoading,
    },
    deleteBidRequestLineItem: {
      mutation: deleteBidRequestLineItem,
      data: deleteBidRequestLineItemData,
      loading: deleteBidRequestLineItemLoading,
    },
    createBid: {
      mutation: createBid,
      data: createBidData,
      loading: createBidLoading,
    },
    saveBid: {
      mutation: saveBid,
      data: saveBidData,
      loading: saveBidLoading,
    },
    deleteBid: {
      mutation: deleteBid,
      data: deleteBidData,
      loading: deleteBidLoading,
    },
    createBidLineItem: {
      mutation: createBidLineItem,
      data: createBidLineItemData,
      loading: createBidLineItemLoading,
    },
    saveBidLineItem: {
      mutation: saveBidLineItem,
      data: saveBidLineItemData,
      loading: saveBidLineItemLoading,
    },
    deleteBidLineItem: {
      mutation: deleteBidLineItem,
      data: deleteBidLineItemData,
      loading: deleteBidLineItemLoading,
    },
  };
};

const useBidApi2 = (custom?: BidApi) => {
  const [
    getBidLineItemsByItem,
    {
      data: getBidLineItemsByItemData,
      loading: getBidLineItemsByItemLoading,
      fetchMore: getBidLineItemsByItemFetchMore,
    },
  ] = useLazyQuery(
    custom?.getBidLineItemsByItem?.query || GET_BID_LINE_ITEMS_BY_ITEM,
    custom?.getBidLineItemsByItem?.options
  );

  const [
    getBidLineItemsBySupplier,
    {
      data: getBidLineItemsBySupplierData,
      loading: getBidLineItemsBySupplierLoading,
      fetchMore: getBidLineItemsBySupplierFetchMore,
    },
  ] = useLazyQuery(
    custom?.getBidLineItemsBySupplier?.query || GET_BID_LINE_ITEMS_BY_SUPPLIER,
    custom?.getBidLineItemsBySupplier?.options
  );

  const [
    getBidLineItemsByItemGroup,
    {
      data: getBidLineItemsByItemGroupData,
      loading: getBidLineItemsByItemGroupLoading,
    },
  ] = useLazyQuery(
    custom?.getBidLineItemsByItemGroup?.query ||
      GET_BID_LINE_ITEMS_BY_ITEM_GROUP,
    custom?.getBidLineItemsByItemGroup?.options
  );

  const [
    getBidsBySupplier,
    {
      data: getBidsBySupplierData,
      loading: getBidsBySupplierLoading,
      fetchMore: getBidsBySupplierFetchMore,
    },
  ] = useLazyQuery(
    custom?.getBidsBySupplier?.query || GET_BIDS_BY_SUPPLIER,
    custom?.getBidsBySupplier?.options
  );

  const [
    getBidRequestLineItemsByItem,
    {
      data: getBidRequestLineItemsByItemData,
      loading: getBidRequestLineItemsByItemLoading,
      fetchMore: getBidRequestLineItemsByItemFetchMore,
    },
  ] = useLazyQuery(
    custom?.getBidRequestLineItemsByItem?.query ||
      GET_BID_REQUEST_LINE_ITEMS_BY_ITEM,
    custom?.getBidRequestLineItemsByItem?.options
  );

  return {
    getBidLineItemsByItem: {
      query: getBidLineItemsByItem,
      fetchMore: getBidLineItemsByItemFetchMore,
      data: getBidLineItemsByItemData,
      loading: getBidLineItemsByItemLoading,
    },
    getBidLineItemsBySupplier: {
      query: getBidLineItemsBySupplier,
      fetchMore: getBidLineItemsBySupplierFetchMore,
      data: getBidLineItemsBySupplierData,
      loading: getBidLineItemsBySupplierLoading,
    },
    getBidLineItemsByItemGroup: {
      query: getBidLineItemsByItemGroup,
      data: getBidLineItemsByItemGroupData,
      loading: getBidLineItemsByItemGroupLoading,
    },
    getBidsBySupplier: {
      query: getBidsBySupplier,
      fetchMore: getBidsBySupplierFetchMore,
      data: getBidsBySupplierData,
      loading: getBidsBySupplierLoading,
    },
    getBidRequestLineItemsByItem: {
      query: getBidRequestLineItemsByItem,
      fetchMore: getBidRequestLineItemsByItemFetchMore,
      data: getBidRequestLineItemsByItemData,
      loading: getBidRequestLineItemsByItemLoading,
    },
  };
};
