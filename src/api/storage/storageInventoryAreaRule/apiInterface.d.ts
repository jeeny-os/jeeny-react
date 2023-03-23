import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateStorageInventoryAreaRuleArgs,
  MutationSaveStorageInventoryAreaRuleArgs,
  MutationUpdateStorageInventoryAreaRuleArgs,
  QueryGetStorageInventoryAreaRuleArgs,
  QueryGetStorageInventoryAreaRulesArgs,
  QueryGetStorageInventoryAreaRulesPayloadArgs,
  StorageInventoryAreaRule,
  StorageInventoryAreaRulePayload,
  StorageInventoryAreaRuleQueryResponse,
} from "../../../types/graphql";

export interface StorageInventoryAreaRuleApi {
  getStorageInventoryAreaRule?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      { getStorageInventoryAreaRule: StorageInventoryAreaRule },
      QueryGetStorageInventoryAreaRuleArgs
    >;
  };

  getStorageInventoryAreaRules?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getStorageInventoryAreaRules: StorageInventoryAreaRule[];
      },
      QueryGetStorageInventoryAreaRulesArgs
    >;
  };

  createStorageInventoryAreaRule?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { createStorageInventoryAreaRule: StorageInventoryAreaRule },
      MutationCreateStorageInventoryAreaRuleArgs
    >;
  };

  updateStorageInventoryAreaRule?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { updateStorageInventoryAreaRule: StorageInventoryAreaRule },
      MutationUpdateStorageInventoryAreaRuleArgs
    >;
  };
}
