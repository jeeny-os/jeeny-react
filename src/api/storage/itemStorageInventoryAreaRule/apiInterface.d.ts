import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  ItemStorageInventoryAreaRule,
  ItemStorageInventoryAreaRuleQueryResponse,
  MutationCreateItemStorageInventoryAreaRuleArgs,
  MutationSaveItemStorageInventoryAreaRuleArgs,
  QueryGetItemStorageInventoryAreaRuleArgs,
  QueryGetItemStorageInventoryAreaRulesArgs,
} from "../../../types/graphql";

export interface ItemStorageInventoryAreaRuleApi {
  getItemStorageInventoryAreaRule?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      { getItemStorageInventoryAreaRule: ItemStorageInventoryAreaRule },
      QueryGetItemStorageInventoryAreaRuleArgs
    >;
  };

  getItemStorageInventoryAreaRules?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getItemStorageInventoryAreaRules: ItemStorageInventoryAreaRuleQueryResponse;
      },
      QueryGetItemStorageInventoryAreaRulesArgs
    >;
  };

  createItemStorageInventoryAreaRule?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { createItemStorageInventoryAreaRule: ItemStorageInventoryAreaRule },
      MutationCreateItemStorageInventoryAreaRuleArgs
    >;
  };

  saveItemStorageInventoryAreaRule?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { saveItemStorageInventoryAreaRule: ItemStorageInventoryAreaRule },
      MutationSaveItemStorageInventoryAreaRuleArgs
    >;
  };
}
