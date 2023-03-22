import { useLazyQuery, useMutation } from "@apollo/client";
import { DeviceApi } from "./apiInterface";
import { DELETE_DEVICE, GET_DEVICE, GET_DEVICES, SAVE_DEVICE } from "./gql";

export const useDeviceApi = (custom?: DeviceApi) => {
  const [getDevice, { data: getDeviceData, loading: getDeviceLoading }] =
    useLazyQuery(
      custom?.getDevice?.query || GET_DEVICE,
      custom?.getDevice?.options
    );

  const [
    getDevices,
    {
      data: getDevicesData,
      loading: getDevicesLoading,
      fetchMore: getDevicesFetchMore,
    },
  ] = useLazyQuery(
    custom?.getDevices?.query || GET_DEVICES,
    custom?.getDevices?.options
  );

  const [saveDevice, { data: saveDeviceData, loading: saveDeviceLoading }] =
    useMutation(
      custom?.saveDevice?.mutation || SAVE_DEVICE,
      custom?.saveDevice?.options
    );

  const [
    deleteDevice,
    { data: deleteDeviceData, loading: deleteDeviceLoading },
  ] = useMutation(
    custom?.deleteDevice?.mutation || DELETE_DEVICE,
    custom?.deleteDevice?.options
  );

  return {
    getDevice: {
      query: getDevice,
      data: getDeviceData,
      loading: getDeviceLoading,
    },
    getDevices: {
      query: getDevices,
      data: getDevicesData,
      fetchMore: getDevicesFetchMore,
      loading: getDevicesLoading,
    },
    saveDevice: {
      mutation: saveDevice,
      data: saveDeviceData,
      loading: saveDeviceLoading,
    },
    deleteDevice: {
      mutation: deleteDevice,
      data: deleteDeviceData,
      loading: deleteDeviceLoading,
    },
  };
};
