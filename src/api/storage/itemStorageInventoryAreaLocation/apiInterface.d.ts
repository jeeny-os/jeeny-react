import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  ItemStorageInventoryAreaLocation,
  MutationCreateItemStorageInventoryAreaLocationArgs,
  MutationDeleteItemStorageInventoryAreaLocationArgs,
  MutationHandleItemStorageInventoryAreaLocationArgs,
  MutationUpdateItemStorageInventoryAreaLocationArgs,
  QueryGetItemStorageInventoryAreaLocationArgs,
} from "../../../types/graphql";

export interface ItemStorageInventoryAreaLocationApi {
  getItemStorageInventoryAreaLocation?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getItemStorageInventoryAreaLocation: ItemStorageInventoryAreaLocation;
      },
      QueryGetItemStorageInventoryAreaLocationArgs
    >;
  };

  createItemStorageInventoryAreaLocation?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createItemStorageInventoryAreaLocation: ItemStorageInventoryAreaLocation;
      },
      MutationCreateItemStorageInventoryAreaLocationArgs
    >;
  };

  handleItemStorageInventoryAreaLocation?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        handleItemStorageInventoryAreaLocation: ItemStorageInventoryAreaLocation;
      },
      MutationHandleItemStorageInventoryAreaLocationArgs
    >;
  };

  updateItemStorageInventoryAreaLocation?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        updateItemStorageInventoryAreaLocation: ItemStorageInventoryAreaLocation;
      },
      MutationUpdateItemStorageInventoryAreaLocationArgs
    >;
  };

  deleteItemStorageInventoryAreaLocation?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteItemStorageInventoryAreaLocation: ItemStorageInventoryAreaLocation;
      },
      MutationDeleteItemStorageInventoryAreaLocationArgs
    >;
  };
}
