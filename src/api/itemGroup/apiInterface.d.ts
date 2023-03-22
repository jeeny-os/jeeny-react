import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateItemGroupArgs,
  MutationSaveItemGroupArgs,
  QueryGetItemGroupDetailsArgs,
  ItemGroup,
  ItemGroupDetails,
  ItemGroupsWithItems,
  MutationDeleteItemGroupArgs,
} from "../../types/graphql";

export interface ItemGroupApi {
  getItemGroupDetails?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getItemGroupDetails: ItemGroupDetails;
      },
      QueryGetItemGroupDetailsArgs
    >;
  };

  getItemGroupsWithItems?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<{
      getItemGroupsWithItems: ItemGroupsWithItems;
    }>;
  };

  createItemGroup?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createItemGroup: ItemGroup;
      },
      MutationCreateItemGroupArgs
    >;
  };

  saveItemGroup?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveItemGroup: ItemGroup;
      },
      MutationSaveItemGroupArgs
    >;
  };

  deleteItemGroup?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteItemGroup: ItemGroup;
      },
      MutationDeleteItemGroupArgs
    >;
  };
}
