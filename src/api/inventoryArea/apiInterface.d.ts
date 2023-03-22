import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  FacilityInventoryAreaForList,
  FacilityQueryResponse,
  MutationCreateInventoryAreaArgs,
  MutationDeleteInventoryAreaArgs,
  MutationSaveInventoryAreaArgs,
  QueryGetFacilitiesArgs,
  QueryGetInventoryAreaArgs,
  StorageInventoryArea,
} from "../../types/graphql";

export interface InventoryAreaApi {
  getInventoryArea?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInventoryArea: StorageInventoryArea;
      },
      QueryGetInventoryAreaArgs
    >;
  };

  createInventoryArea?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createInventoryArea: StorageInventoryArea;
      },
      MutationCreateInventoryAreaArgs
    >;
  };

  saveInventoryArea?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveInventoryArea: StorageInventoryArea;
      },
      MutationSaveInventoryAreaArgs
    >;
  };

  deleteInventoryArea?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteInventoryArea: StorageInventoryArea;
      },
      MutationDeleteInventoryAreaArgs
    >;
  };
}
