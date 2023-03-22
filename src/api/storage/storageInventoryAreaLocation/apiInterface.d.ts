import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateStorageInventoryAreaLocationArgs,
  MutationDeleteStorageInventoryAreaLocationArgs,
  MutationSaveStorageInventoryAreaLocationArgs,
  QueryGetStorageInventoryAreaLocationArgs,
  QueryGetStorageInventoryAreaLocationsArgs,
  QueryGetStorageInventoryAreaLocationsPayloadArgs,
  StorageInventoryAreaLocation,
  StorageInventoryAreaLocationPayload,
  StorageInventoryAreaLocationQueryResponse,
} from "../../../types/graphql";

export interface StorageInventoryAreaLocationApi {
  getStorageInventoryAreaLocation?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      { getStorageInventoryAreaLocation: StorageInventoryAreaLocation },
      QueryGetStorageInventoryAreaLocationArgs
    >;
  };

  getStorageInventoryAreaLocationsPayload?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getStorageInventoryAreaLocationsPayload: StorageInventoryAreaLocationPayload[];
      },
      QueryGetStorageInventoryAreaLocationsPayloadArgs
    >;
  };

  getStorageInventoryAreaLocations?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getStorageInventoryAreaLocations: StorageInventoryAreaLocationQueryResponse;
      },
      QueryGetStorageInventoryAreaLocationsArgs
    >;
  };

  createStorageInventoryAreaLocation?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { createStorageInventoryAreaLocation: StorageInventoryAreaLocation },
      MutationCreateStorageInventoryAreaLocationArgs
    >;
  };

  saveStorageInventoryAreaLocation?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { saveStorageInventoryAreaLocation: StorageInventoryAreaLocation },
      MutationSaveStorageInventoryAreaLocationArgs
    >;
  };

  deleteStorageInventoryAreaLocation?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { deleteStorageInventoryAreaLocation: StorageInventoryAreaLocation },
      MutationDeleteStorageInventoryAreaLocationArgs
    >;
  };
}
