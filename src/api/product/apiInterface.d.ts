import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateProductArgs,
  MutationSaveProductArgs,
  QueryGetProductArgs,
  QueryGetProductsArgs,
  Product,
  ProductQueryResponse,
} from "../../types/graphql";

export interface ProductApi {
  getProduct?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getProduct: Product;
      },
      QueryGetProductArgs
    >;
  };

  getProducts?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getProducts: ProductQueryResponse;
      },
      QueryGetProductsArgs
    >;
  };

  createProduct?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createProduct: Product;
      },
      MutationCreateProductArgs
    >;
  };

  saveProduct?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveProduct: Product;
      },
      MutationSaveProductArgs
    >;
  };
}
