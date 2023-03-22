import { useLazyQuery, useMutation } from "@apollo/client";

import {
  QueryGetDynamicContainerArgs,
  DynamicContainer,
} from "../../../types/graphql";
import {
  ADJUST_DYNAMIC_CONTAINER_PAYLOAD_QUANTITY,
  ATTACH_DYNAMIC_CONTAINER,
  CREATE_DYNAMIC_CONTAINER,
  DELETE_DYNAMIC_CONTAINER,
  DETACH_DYNAMIC_CONTAINER,
  GET_DYNAMIC_CONTAINER,
  GET_DYNAMIC_CONTAINERS,
  GET_DYNAMIC_CONTAINERS_BY_EXPIRY,
  LOAD_DYNAMIC_CONTAINER,
  SAVE_DYNAMIC_CONTAINER,
  SWITCH_DYNAMIC_CONTAINERS,
} from "./gql";
import { DynamicContainerApi } from "./apiInterface";

export const useDynamicContainerApi = (custom?: DynamicContainerApi) => {
  const [
    getDynamicContainer,
    { data: getDynamicContainerData, loading: getDynamicContainerLoading },
  ] = useLazyQuery<
    { getDynamicContainer: DynamicContainer },
    QueryGetDynamicContainerArgs
  >(
    custom?.getDynamicContainer?.query || GET_DYNAMIC_CONTAINER,
    custom?.getDynamicContainer?.options
  );

  const [
    adjustDynamicContainerPayloadQuantity,
    {
      data: adjustDynamicContainerPayloadQuantityData,
      loading: adjustDynamicContainerPayloadQuantityLoading,
    },
  ] = useMutation(
    custom?.adjustDynamicContainerPayloadQuantity?.mutation ||
      ADJUST_DYNAMIC_CONTAINER_PAYLOAD_QUANTITY,
    custom?.adjustDynamicContainerPayloadQuantity?.options
  );

  const [
    getDynamicContainers,
    { data: getDynamicContainersData, loading: getDynamicContainersLoading },
  ] = useLazyQuery(
    custom?.getDynamicContainers?.query || GET_DYNAMIC_CONTAINERS,
    custom?.getDynamicContainers?.options
  );

  const [
    getDynamicContainersByExpiry,
    {
      data: getDynamicContainersByExpiryData,
      loading: getDynamicContainersByExpiryLoading,
    },
  ] = useLazyQuery(
    custom?.getDynamicContainersByExpiry?.query ||
      GET_DYNAMIC_CONTAINERS_BY_EXPIRY,
    custom?.getDynamicContainersByExpiry?.options
  );

  const [
    createDynamicContainer,
    {
      data: createDynamicContainerData,
      loading: createDynamicContainerLoading,
    },
  ] = useMutation(
    custom?.createDynamicContainer?.mutation || CREATE_DYNAMIC_CONTAINER,
    custom?.createDynamicContainer?.options
  );

  const [
    saveDynamicContainer,
    { data: saveDynamicContainerData, loading: saveDynamicContainerLoading },
  ] = useMutation(
    custom?.saveDynamicContainer?.mutation || SAVE_DYNAMIC_CONTAINER,
    custom?.saveDynamicContainer?.options
  );

  const [
    attachDynamicContainer,
    {
      data: attachDynamicContainerData,
      loading: attachDynamicContainerLoading,
    },
  ] = useMutation(
    custom?.attachDynamicContainer?.mutation || ATTACH_DYNAMIC_CONTAINER,
    custom?.attachDynamicContainer?.options
  );

  const [
    detachDynamicContainer,
    {
      data: detachDynamicContainerData,
      loading: detachDynamicContainerLoading,
    },
  ] = useMutation(
    custom?.detachDynamicContainer?.mutation || DETACH_DYNAMIC_CONTAINER,
    custom?.detachDynamicContainer?.options
  );

  const [
    loadDynamicContainer,
    { data: loadDynamicContainerData, loading: loadDynamicContainerLoading },
  ] = useMutation(
    custom?.loadDynamicContainer?.mutation || LOAD_DYNAMIC_CONTAINER,
    custom?.loadDynamicContainer?.options
  );

  const [
    deleteDynamicContainer,
    {
      data: deleteDynamicContainerData,
      loading: deleteDynamicContainerLoading,
    },
  ] = useMutation(
    custom?.deleteDynamicContainer?.mutation || DELETE_DYNAMIC_CONTAINER,
    custom?.deleteDynamicContainer?.options
  );

  const [
    switchDynamicContainers,
    {
      data: switchDynamicContainersData,
      loading: switchDynamicContainersLoading,
    },
  ] = useMutation(
    custom?.switchDynamicContainers?.mutation || SWITCH_DYNAMIC_CONTAINERS,
    custom?.switchDynamicContainers?.options
  );

  return {
    getDynamicContainer: {
      query: getDynamicContainer,
      data: getDynamicContainerData,
      loading: getDynamicContainerLoading,
    },
    getDynamicContainers: {
      query: getDynamicContainers,
      data: getDynamicContainersData,
      loading: getDynamicContainersLoading,
    },
    getDynamicContainersByExpiry: {
      query: getDynamicContainersByExpiry,
      data: getDynamicContainersByExpiryData,
      loading: getDynamicContainersByExpiryLoading,
    },
    createDynamicContainer: {
      mutation: createDynamicContainer,
      data: createDynamicContainerData,
      loading: createDynamicContainerLoading,
    },
    saveDynamicContainer: {
      mutation: saveDynamicContainer,
      data: saveDynamicContainerData,
      loading: saveDynamicContainerLoading,
    },
    deleteDynamicContainer: {
      mutation: deleteDynamicContainer,
      data: deleteDynamicContainerData,
      loading: deleteDynamicContainerLoading,
    },
    adjustDynamicContainerPayloadQuantity: {
      mutation: adjustDynamicContainerPayloadQuantity,
      data: adjustDynamicContainerPayloadQuantityData,
      loading: adjustDynamicContainerPayloadQuantityLoading,
    },
    attachDynamicContainer: {
      mutation: attachDynamicContainer,
      data: attachDynamicContainerData,
      loading: attachDynamicContainerLoading,
    },
    detachDynamicContainer: {
      mutation: detachDynamicContainer,
      data: detachDynamicContainerData,
      loading: detachDynamicContainerLoading,
    },
    loadDynamicContainer: {
      mutation: loadDynamicContainer,
      data: loadDynamicContainerData,
      loading: loadDynamicContainerLoading,
    },
    switchDynamicContainers: {
      mutation: switchDynamicContainers,
      data: switchDynamicContainersData,
      loading: switchDynamicContainersLoading,
    },
  };
};
