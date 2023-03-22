import { DocumentNode, MutationFunctionOptions } from "@apollo/client";
import {
  InventoryRecord,
  MutationAddInventoryRecordArgs,
  MutationDeductInventoryRecordArgs,
  InventoryLogQueryResponse,
  QueryGetInventoryLogsArgs,
  MutationTransferInventoryBetweenFactoriesArgs,
} from "../../types/graphql";

export interface InventoryRecordApi {
  addInventoryRecord?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        addInventoryRecord: InventoryRecord;
      },
      MutationAddInventoryRecordArgs
    >;
  };

  deductInventoryRecord?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deductInventoryRecord: InventoryRecord;
      },
      MutationDeductInventoryRecordArgs
    >;
  };

  getInventoryLogs?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInventoryLogs: InventoryLogQueryResponse;
      },
      QueryGetInventoryLogsArgs
    >;
  };

  transferInventoryBetweenFactories?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        transferInventoryBetweenFactories: InventoryRecord;
      },
      MutationTransferInventoryBetweenFactoriesArgs
    >;
  };
}
