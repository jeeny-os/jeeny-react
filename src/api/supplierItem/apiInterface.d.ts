import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateSupplierItemArgs,
  MutationSaveSupplierItemArgs,
  QueryGetSupplierItemArgs,
  QueryGetSupplierItemsByItemArgs,
  QueryGetSupplierItemsBySupplierArgs,
  SupplierItem,
} from "../../types/graphql";

export interface SupplierItemApi {
  getSupplierItem?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getSupplierItem: SupplierItem;
      },
      QueryGetSupplierItemArgs
    >;
  };

  getSupplierItemsBySupplier?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getSupplierItemsBySupplier: { cursor: string; items: SupplierItem[] };
      },
      QueryGetSupplierItemsBySupplierArgs
    >;
  };

  getSupplierItemsByItem?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getSupplierItemsByItem: { cursor: string; items: SupplierItem[] };
      },
      QueryGetSupplierItemsByItemArgs
    >;
  };

  createSupplierItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createSupplierItem: SupplierItem;
      },
      MutationCreateSupplierItemArgs
    >;
  };

  saveSupplierItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveSupplierItem: SupplierItem;
      },
      MutationSaveSupplierItemArgs
    >;
  };
}
