import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationAttachDynamicContainerArgs,
  MutationCreateDynamicContainerArgs,
  MutationDetachDynamicContainerArgs,
  MutationDeleteDynamicContainerArgs,
  MutationLoadDynamicContainerArgs,
  MutationSaveDynamicContainerArgs,
  MutationSwitchDynamicContainersArgs,
  MutationAdjustDynamicContainerPayloadQuantityArgs,
  QueryGetDynamicContainersByExpiryArgs,
  QueryGetDynamicContainersArgs,
  DynamicContainer,
  DynamicContainerQueryResponse,
} from "../../../types/graphql";
import { QueryGetDynamicContainerArgs } from "../../types/graphql";

export interface DynamicContainerApi {
  getDynamicContainer?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      { getDynamicContainer: DynamicContainer },
      QueryGetDynamicContainerArgs
    >;
  };

  getDynamicContainers?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      { getDynamicContainers: DynamicContainerQueryResponse },
      QueryGetDynamicContainersArgs
    >;
  };

  getDynamicContainersByExpiry?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      { getDynamicContainersByExpiry: DynamicContainerQueryResponse },
      QueryGetDynamicContainersByExpiryArgs
    >;
  };

  adjustDynamicContainerPayloadQuantity?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { adjustDynamicContainerPayloadQuantity: DynamicContainer },
      MutationAdjustDynamicContainerPayloadQuantityArgs
    >;
  };

  createDynamicContainer?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { createDynamicContainer: DynamicContainer },
      MutationCreateDynamicContainerArgs
    >;
  };

  saveDynamicContainer?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { saveDynamicContainer: DynamicContainer },
      MutationSaveDynamicContainerArgs
    >;
  };

  attachDynamicContainer?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { attachDynamicContainer: DynamicContainer },
      MutationAttachDynamicContainerArgs
    >;
  };

  detachDynamicContainer?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { detachDynamicContainer: DynamicContainer },
      MutationDetachDynamicContainerArgs
    >;
  };

  loadDynamicContainer?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { loadDynamicContainer: DynamicContainer },
      MutationLoadDynamicContainerArgs
    >;
  };

  deleteDynamicContainer?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { deleteDynamicContainer: DynamicContainer },
      MutationDeleteDynamicContainerArgs
    >;
  };

  switchDynamicContainers?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      { switchDynamicContainers: DynamicContainer },
      MutationSwitchDynamicContainersArgs
    >;
  };
}
