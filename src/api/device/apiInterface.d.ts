import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateDeviceArgs,
  MutationSaveDeviceArgs,
  QueryGetDeviceArgs,
  QueryGetDevicesArgs,
  Device,
  DeviceQueryResponse,
  MutationDeleteDeviceArgs,
  // DeviceDetails,
  // QueryGetDeviceDetailsArgs,
} from "../../types/graphql";

export interface DeviceApi {
  getDevice?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDevice: Device;
      },
      QueryGetDeviceArgs
    >;
  };

  getDevices?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDevices: DeviceQueryResponse;
      },
      QueryGetDevicesArgs
    >;
  };

  saveDevice?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveDevice: Device;
      },
      MutationSaveDeviceArgs
    >;
  };

  deleteDevice?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteDevice: Device;
      },
      MutationDeleteDeviceArgs
    >;
  };
}
