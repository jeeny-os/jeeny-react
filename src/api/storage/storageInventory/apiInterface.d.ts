import { DocumentNode, QueryFunctionOptions } from "@apollo/client";
import {
  StorageInventory,
  StorageInventoryPickRecord,
  QueryGetStorageInventoryByLocationArgs,
  QueryGetStorageInventoryByPayloadArgs,
  MutationPickStorageLocationArgs,
} from "../../../types/graphql";

export interface StorageInventoryApi {
  getStorageInventoryByLocation?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      { getStorageInventoryByLocation: StorageInventory },
      QueryGetStorageInventoryByLocationArgs
    >;
  };

  getStorageInventoryByPayload?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getStorageInventoryByPayload: StorageInventory;
      },
      QueryGetStorageInventoryByPayloadArgs
    >;
  };

  pickStorageLocation?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        pickStorageLocation: StorageInventoryPickRecord;
      },
      MutationPickStorageLocationArgs
    >;
  };
}
