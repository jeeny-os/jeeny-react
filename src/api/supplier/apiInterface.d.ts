import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateSupplierArgs,
  MutationSaveSupplierArgs,
  QueryGetSupplierArgs,
  QueryGetSuppliersArgs,
  Supplier,
  SupplierQueryResponse,
} from "../../types/graphql";

export interface SupplierApi {
  getSupplier?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getSupplier: Supplier;
      },
      QueryGetSupplierArgs
    >;
  };

  getSuppliers?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getSuppliers: SupplierQueryResponse;
      },
      QueryGetSuppliersArgs
    >;
  };

  createSupplier?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createSupplier: Supplier;
      },
      MutationCreateSupplierArgs
    >;
  };

  saveSupplier?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveSupplier: Supplier;
      },
      MutationSaveSupplierArgs
    >;
  };
}
