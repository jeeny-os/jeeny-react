/* eslint-disable react-hooks/rules-of-hooks */
import { useLazyQuery, useMutation } from "@apollo/client";
import { ArrivalApi } from "./apiInterface";
import {
  CREATE_ARRIVAL,
  CREATE_ARRIVAL_DELIVERY,
  CREATE_ARRIVAL_DELIVERY_LINE_ITEM,
  CREATE_ARRIVAL_LINE_ITEM,
  CREATE_ARRIVAL_RELEASE,
  CREATE_ARRIVAL_RELEASE_LINE_ITEM,
  DELETE_ARRIVAL_LINE_ITEM,
  DELETE_ARRIVAL_RELEASE,
  DELETE_ARRIVAL_RELEASE_LINE_ITEM,
  DELETE_ARRIVAL_DELIVERY,
  GET_ARRIVAL,
  GET_ARRIVALS,
  GET_ARRIVALS_BY_ITEM,
  GET_ARRIVALS_BY_SUPPLIER,
  GET_ARRIVAL_RELEASES,
  GET_ARRIVAL_RELEASES_BY_ITEM,
  GET_ARRIVAL_RELEASES_BY_SUPPLIER,
  SAVE_ARRIVAL,
  SAVE_ARRIVAL_LINE_ITEM,
  SAVE_ARRIVAL_RELEASE,
  SAVE_ARRIVAL_RELEASE_LINE_ITEM,
  SAVE_ARRIVAL_DELIVERY,
  SAVE_ARRIVAL_DELIVERY_LINE_ITEM,
  GET_ARRIVAL_RELEASES_WITH_STATUS,
} from "./gql";

export const useArrivalApi = (custom?: ArrivalApi) => {
  const [getArrival, { data: getArrivalData, loading: getArrivalLoading }] =
    useLazyQuery(
      custom?.getArrival?.query || GET_ARRIVAL,
      custom?.getArrival?.options
    );

  const [
    getArrivals,
    {
      data: getArrivalsData,
      loading: getArrivalsLoading,
      fetchMore: getArrivalsFetchMore,
    },
  ] = useLazyQuery(
    custom?.getArrivals?.query || GET_ARRIVALS,
    custom?.getArrivals?.options
  );

  const [
    getArrivalsBySupplier,
    {
      data: getArrivalsBySupplierData,
      loading: getArrivalsBySupplierLoading,
      fetchMore: getArrivalsBySupplierFetchMore,
    },
  ] = useLazyQuery(
    custom?.getArrivalsBySupplier?.query || GET_ARRIVALS_BY_SUPPLIER,
    custom?.getArrivalsBySupplier?.options
  );

  const [
    getArrivalsByItem,
    {
      data: getArrivalsByItemData,
      loading: getArrivalsByItemLoading,
      fetchMore: getArrivalsByItemFetchMore,
    },
  ] = useLazyQuery(
    custom?.getArrivalsByItem?.query || GET_ARRIVALS_BY_ITEM,
    custom?.getArrivalsByItem?.options
  );

  const [
    createArrival,
    { data: createArrivalData, loading: createArrivalLoading },
  ] = useMutation(
    custom?.createArrival?.mutation || CREATE_ARRIVAL,
    custom?.createArrival?.options
  );

  const [saveArrival, { data: saveArrivalData, loading: saveArrivalLoading }] =
    useMutation(
      custom?.saveArrival?.mutation || SAVE_ARRIVAL,
      custom?.saveArrival?.options
    );

  const [
    getArrivalReleases,
    {
      data: getArrivalReleasesData,
      loading: getArrivalReleasesLoading,
      fetchMore: getArrivalReleasesFetchMore,
    },
  ] = useLazyQuery(
    custom?.getArrivalReleases?.query || GET_ARRIVAL_RELEASES,
    custom?.getArrivalReleases?.options
  );

  const [
    getArrivalReleasesWithStatus,
    {
      data: getArrivalReleasesWithStatusData,
      loading: getArrivalReleasesWithStatusLoading,
      fetchMore: getArrivalReleasesWithStatusFetchMore,
    },
  ] = useLazyQuery(
    custom?.getArrivalReleasesWithStatus?.query ||
      GET_ARRIVAL_RELEASES_WITH_STATUS,
    custom?.getArrivalReleasesWithStatus?.options
  );

  const [
    getArrivalReleasesBySupplier,
    {
      data: getArrivalReleasesBySupplierData,
      loading: getArrivalReleasesBySupplierLoading,
      fetchMore: getArrivalReleasesBySupplierFetchMore,
    },
  ] = useLazyQuery(
    custom?.getArrivalReleasesBySupplier?.query ||
      GET_ARRIVAL_RELEASES_BY_SUPPLIER,
    custom?.getArrivalReleasesBySupplier?.options
  );

  const [
    getArrivalReleasesByItem,
    {
      data: getArrivalReleasesByItemData,
      loading: getArrivalReleasesByItemLoading,
      fetchMore: getArrivalReleasesByItemFetchMore,
    },
  ] = useLazyQuery(
    custom?.getArrivalReleasesByItem?.query || GET_ARRIVAL_RELEASES_BY_ITEM,
    custom?.getArrivalReleasesByItem?.options
  );

  const [
    createArrivalRelease,
    { data: createArrivalReleaseData, loading: createArrivalReleaseLoading },
  ] = useMutation(
    custom?.createArrivalRelease?.mutation || CREATE_ARRIVAL_RELEASE,
    custom?.createArrivalRelease?.options
  );

  const [
    saveArrivalRelease,
    { data: saveArrivalReleaseData, loading: saveArrivalReleaseLoading },
  ] = useMutation(
    custom?.saveArrivalRelease?.mutation || SAVE_ARRIVAL_RELEASE,
    custom?.saveArrivalRelease?.options
  );

  const [
    deleteArrivalRelease,
    { data: deleteArrivalReleaseData, loading: deleteArrivalReleaseLoading },
  ] = useMutation(
    custom?.deleteArrivalRelease?.mutation || DELETE_ARRIVAL_RELEASE,
    custom?.deleteArrivalRelease?.options
  );

  const [
    createArrivalLineItem,
    { data: createArrivalLineItemData, loading: createArrivalLineItemLoading },
  ] = useMutation(
    custom?.createArrivalLineItem?.mutation || CREATE_ARRIVAL_LINE_ITEM,
    custom?.createArrivalLineItem?.options
  );

  const [
    deleteArrivalLineItem,
    { data: deleteArrivalLineItemData, loading: deleteArrivalLineItemLoading },
  ] = useMutation(
    custom?.deleteArrivalLineItem?.mutation || DELETE_ARRIVAL_LINE_ITEM,
    custom?.deleteArrivalLineItem?.options
  );

  const [
    saveArrivalLineItem,
    { data: saveArrivalLineItemData, loading: saveArrivalLineItemLoading },
  ] = useMutation(
    custom?.saveArrivalLineItem?.mutation || SAVE_ARRIVAL_LINE_ITEM,
    custom?.saveArrivalLineItem?.options
  );

  const [
    createArrivalReleaseLineItem,
    {
      data: createArrivalReleaseLineItemData,
      loading: createArrivalReleaseLineItemLoading,
    },
  ] = useMutation(
    custom?.createArrivalReleaseLineItem?.mutation ||
      CREATE_ARRIVAL_RELEASE_LINE_ITEM,
    custom?.createArrivalReleaseLineItem?.options
  );

  const [
    saveArrivalReleaseLineItem,
    {
      data: saveArrivalReleaseLineItemData,
      loading: saveArrivalReleaseLineItemLoading,
    },
  ] = useMutation(
    custom?.saveArrivalReleaseLineItem?.mutation ||
      SAVE_ARRIVAL_RELEASE_LINE_ITEM,
    custom?.saveArrivalReleaseLineItem?.options
  );

  const [
    deleteArrivalReleaseLineItem,
    {
      data: deleteArrivalReleaseLineItemData,
      loading: deleteArrivalReleaseLineItemLoading,
    },
  ] = useMutation(
    custom?.deleteArrivalReleaseLineItem?.mutation ||
      DELETE_ARRIVAL_RELEASE_LINE_ITEM,
    custom?.deleteArrivalReleaseLineItem?.options
  );

  const [
    createArrivalDelivery,
    { data: createArrivalDeliveryData, loading: createArrivalDeliveryLoading },
  ] = useMutation(
    custom?.createArrivalDelivery?.mutation || CREATE_ARRIVAL_DELIVERY,
    custom?.createArrivalDelivery?.options
  );

  const [
    saveArrivalDelivery,
    { data: saveArrivalDeliveryData, loading: saveArrivalDeliveryLoading },
  ] = useMutation(
    custom?.saveArrivalDelivery?.mutation || SAVE_ARRIVAL_DELIVERY,
    custom?.saveArrivalDelivery?.options
  );

  const [
    deleteArrivalDelivery,
    { data: deleteArrivalDeliveryData, loading: deleteArrivalDeliveryLoading },
  ] = useMutation(
    custom?.deleteArrivalDelivery?.mutation || DELETE_ARRIVAL_DELIVERY,
    custom?.deleteArrivalDelivery?.options
  );

  const [
    createArrivalDeliveryLineItem,
    {
      data: createArrivalDeliveryLineItemData,
      loading: createArrivalDeliveryLineItemLoading,
    },
  ] = useMutation(
    custom?.createArrivalDeliveryLineItem?.mutation ||
      CREATE_ARRIVAL_DELIVERY_LINE_ITEM,
    custom?.createArrivalDeliveryLineItem?.options
  );

  const [
    saveArrivalDeliveryLineItem,
    {
      data: saveArrivalDeliveryLineItemData,
      loading: saveArrivalDeliveryLineItemLoading,
    },
  ] = useMutation(
    custom?.saveArrivalDeliveryLineItem?.mutation ||
      SAVE_ARRIVAL_DELIVERY_LINE_ITEM,
    custom?.saveArrivalDeliveryLineItem?.options
  );

  return {
    getArrival: {
      query: getArrival,
      data: getArrivalData,
      loading: getArrivalLoading,
    },
    getArrivals: {
      query: getArrivals,
      data: getArrivalsData,
      fetchMore: getArrivalsFetchMore,
      loading: getArrivalsLoading,
    },
    getArrivalsBySupplier: {
      query: getArrivalsBySupplier,
      data: getArrivalsBySupplierData,
      fetchMore: getArrivalsBySupplierFetchMore,
      loading: getArrivalsBySupplierLoading,
    },
    getArrivalsByItem: {
      query: getArrivalsByItem,
      data: getArrivalsByItemData,
      fetchMore: getArrivalsByItemFetchMore,
      loading: getArrivalsByItemLoading,
    },
    createArrival: {
      mutation: createArrival,
      data: createArrivalData,
      loading: createArrivalLoading,
    },
    saveArrival: {
      mutation: saveArrival,
      data: saveArrivalData,
      loading: saveArrivalLoading,
    },
    getArrivalReleases: {
      query: getArrivalReleases,
      data: getArrivalReleasesData,
      fetchMore: getArrivalReleasesFetchMore,
      loading: getArrivalReleasesLoading,
    },
    getArrivalReleasesWithStatus: {
      query: getArrivalReleasesWithStatus,
      data: getArrivalReleasesWithStatusData,
      fetchMore: getArrivalReleasesWithStatusFetchMore,
      loading: getArrivalReleasesWithStatusLoading,
    },
    getArrivalReleasesBySupplier: {
      query: getArrivalReleasesBySupplier,
      data: getArrivalReleasesBySupplierData,
      fetchMore: getArrivalReleasesBySupplierFetchMore,
      loading: getArrivalReleasesBySupplierLoading,
    },
    getArrivalReleasesByItem: {
      query: getArrivalReleasesByItem,
      data: getArrivalReleasesByItemData,
      fetchMore: getArrivalReleasesByItemFetchMore,
      loading: getArrivalReleasesByItemLoading,
    },
    createArrivalRelease: {
      mutation: createArrivalRelease,
      data: createArrivalReleaseData,
      loading: createArrivalReleaseLoading,
    },
    saveArrivalRelease: {
      mutation: saveArrivalRelease,
      data: saveArrivalReleaseData,
      loading: saveArrivalReleaseLoading,
    },
    deleteArrivalRelease: {
      mutation: deleteArrivalRelease,
      data: deleteArrivalReleaseData,
      loading: deleteArrivalReleaseLoading,
    },
    createArrivalLineItem: {
      mutation: createArrivalLineItem,
      data: createArrivalLineItemData,
      loading: createArrivalLineItemLoading,
    },
    deleteArrivalLineItem: {
      mutation: deleteArrivalLineItem,
      data: deleteArrivalLineItemData,
      loading: deleteArrivalLineItemLoading,
    },
    saveArrivalLineItem: {
      mutation: saveArrivalLineItem,
      data: saveArrivalLineItemData,
      loading: saveArrivalLineItemLoading,
    },
    createArrivalReleaseLineItem: {
      mutation: createArrivalReleaseLineItem,
      data: createArrivalReleaseLineItemData,
      loading: createArrivalReleaseLineItemLoading,
    },
    deleteArrivalReleaseLineItem: {
      mutation: deleteArrivalReleaseLineItem,
      data: deleteArrivalReleaseLineItemData,
      loading: deleteArrivalReleaseLineItemLoading,
    },
    saveArrivalReleaseLineItem: {
      mutation: saveArrivalReleaseLineItem,
      data: saveArrivalReleaseLineItemData,
      loading: saveArrivalReleaseLineItemLoading,
    },
    createArrivalDelivery: {
      mutation: createArrivalDelivery,
      data: createArrivalDeliveryData,
      loading: createArrivalDeliveryLoading,
    },
    saveArrivalDelivery: {
      mutation: saveArrivalDelivery,
      data: saveArrivalDeliveryData,
      loading: saveArrivalDeliveryLoading,
    },
    deleteArrivalDelivery: {
      mutation: deleteArrivalDelivery,
      data: deleteArrivalDeliveryData,
      loading: deleteArrivalDeliveryLoading,
    },
    createArrivalDeliveryLineItem: {
      mutation: createArrivalDeliveryLineItem,
      data: createArrivalDeliveryLineItemData,
      loading: createArrivalDeliveryLineItemLoading,
    },
    saveDeliveryLineItem: {
      mutation: saveArrivalDeliveryLineItem,
      data: saveArrivalDeliveryLineItemData,
      loading: saveArrivalDeliveryLineItemLoading,
    },
  };
};
