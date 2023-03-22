import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateDepartureArgs,
  MutationSaveDepartureArgs,
  MutationCreateDepartureLineItemArgs,
  MutationSaveDepartureLineItemArgs,
  MutationDeleteDepartureLineItemArgs,
  MutationCreateDeparturePickListArgs,
  MutationDeleteDeparturePickListArgs,
  MutationCreateDeparturePickListLineItemArgs,
  MutationSaveDeparturePickListLineItemArgs,
  MutationDeleteDeparturePickListLineItemArgs,
  MutationCreateDeparturePickArgs,
  MutationDeleteDeparturePickArgs,
  MutationPickStorageLocationForDepartureArgs,
  MutationDeleteDeparturePickLineItemArgs,
  QueryGetDepartureDetailsArgs,
  QueryGetDeparturesByExternalCustomerIdArgs,
  QueryGetDepartureArgs,
  QueryGetDepartureLineItemsByItemIdArgs,
  QueryGetDeparturePickListsArgs,
  QueryGetDeparturePickListsByFacilityIdArgs,
  QueryGetDeparturePickListLineItemsByItemIdArgs,
  Departure,
  DepartureQueryResponse,
  DepartureDetails,
  DepartureLineItem,
  DepartureLineItemQueryResponse,
  DeparturePickList,
  DeparturePickListQueryResponse,
  DeparturePickListLineItemQueryResponse,
  DeparturePickListLineItem,
  DeparturePick,
  DeparturePickLineItem,
} from "../../types/graphql";

export interface DepartureApi {
  getDeparture?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDeparture: Departure;
      },
      QueryGetDepartureArgs
    >;
  };

  getDepartureDetails?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDepartureDetails: DepartureDetails;
      },
      QueryGetDepartureDetailsArgs
    >;
  };

  getDepartures?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<{
      getDepartures: DepartureQueryResponse;
    }>;
  };

  getDeparturesByExternalCustomerId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDeparturesByExternalCustomerId: DepartureQueryResponse;
      },
      QueryGetDeparturesByExternalCustomerIdArgs
    >;
  };

  createDeparture?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createDeparture: Departure;
      },
      MutationCreateDepartureArgs
    >;
  };

  saveDeparture?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveDeparture: Departure;
      },
      MutationSaveDepartureArgs
    >;
  };

  createDepartureLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createDepartureLineItem: DepartureLineItem;
      },
      MutationCreateDepartureLineItemArgs
    >;
  };

  saveDepartureLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveDepartureLineItem: DepartureLineItem;
      },
      MutationSaveDepartureLineItemArgs
    >;
  };

  deleteDepartureLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteDepartureLineItem: DepartureLineItem;
      },
      MutationDeleteDepartureLineItemArgs
    >;
  };

  getDepartureLineItemsByItemId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDepartureLineItemsByItemId: DepartureLineItemQueryResponse;
      },
      QueryGetDepartureLineItemsByItemIdArgs
    >;
  };

  createDeparturePickList?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createDeparturePickList: DeparturePickList;
      },
      MutationCreateDeparturePickListArgs
    >;
  };

  deleteDeparturePickList?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteDeparturePickList: DeparturePickList;
      },
      MutationDeleteDeparturePickListArgs
    >;
  };

  getDeparturePickLists?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDeparturePickLists: DeparturePickListQueryResponse;
      },
      QueryGetDeparturePickListsArgs
    >;
  };

  getDeparturePickListsByFacilityId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDeparturePickListsByFacilityId: DeparturePickListQueryResponse;
      },
      QueryGetDeparturePickListsByFacilityIdArgs
    >;
  };

  getDeparturePickListLineItemsByItemId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDeparturePickListLineItemsByItemId: DeparturePickListLineItemQueryResponse;
      },
      QueryGetDeparturePickListLineItemsByItemIdArgs
    >;
  };

  createDeparturePickListLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createDeparturePickListLineItem: DeparturePickListLineItem;
      },
      MutationCreateDeparturePickListLineItemArgs
    >;
  };

  saveDeparturePickListLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveDeparturePickListLineItem: DeparturePickListLineItem;
      },
      MutationSaveDeparturePickListLineItemArgs
    >;
  };

  deleteDeparturePickListLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteDeparturePickListLineItem: DeparturePickListLineItem;
      },
      MutationDeleteDeparturePickListLineItemArgs
    >;
  };

  createDeparturePick?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createDeparturePick: DeparturePick;
      },
      MutationCreateDeparturePickArgs
    >;
  };

  deleteDeparturePick?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteDeparturePick: DeparturePick;
      },
      MutationDeleteDeparturePickArgs
    >;
  };

  deleteDeparturePickLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteDeparturePickLineItem: DeparturePickLineItem;
      },
      MutationDeleteDeparturePickLineItemArgs
    >;
  };

  pickStorageLocationForDeparture?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        pickStorageLocationForDeparture: DeparturePickLineItem;
      },
      MutationPickStorageLocationForDepartureArgs
    >;
  };
}
