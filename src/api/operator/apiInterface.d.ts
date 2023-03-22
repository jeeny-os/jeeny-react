import {
  DocumentNode,
  QueryFunctionOptions,
  MutationFunctionOptions,
} from "@apollo/client";
import {
  QueryGetOperatorArgs,
  Operator,
  SafeOperator,
  SafeOperatorQueryResponse,
  QueryGetOperatorsByDeviceArgs,
  QueryGetOperatorsArgs,
  QueryGetOperatorDetailsArgs,
  MutationSaveOperatorArgs,
  MutationCreateOperatorArgs,
  QueryGetOperatorsByTeamIdArgs,
  QueryGetOperatorPinCodeArgs,
} from "../../types/graphql";

export interface OperatorApi {
  getOperator?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getOperator: SafeOperator;
      },
      QueryGetOperatorArgs
    >;
  };

  getOperatorPinCode?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getOperatorPinCode: string;
      },
      QueryGetOperatorPinCodeArgs
    >;
  };

  getOperators?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getOperators: SafeOperatorQueryResponse;
      },
      QueryGetOperatorsArgs
    >;
  };

  getOperatorsByDevice?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getOperatorsByDevice: SafeOperatorQueryResponse;
      },
      QueryGetOperatorsByDeviceArgs
    >;
  };

  getOperatorsByTeamId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getOperatorsByTeamId: SafeOperatorQueryResponse;
      },
      QueryGetOperatorsByTeamIdArgs
    >;
  };

  createOperator?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createOperator: Operator;
      },
      MutationCreateOperatorArgs
    >;
  };

  saveOperator?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveOperator: Operator;
      },
      MutationSaveOperatorArgs
    >;
  };
}
