import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateFacilityItemArgs,
  MutationSaveFacilityItemArgs,
  QueryGetFacilityItemArgs,
  QueryGetFacilityItemsByFacilityArgs,
  QueryGetFacilityItemsByItemArgs,
  FacilityItem,
  FacilityItemQueryResponse,
} from "../../types/graphql";

export interface FacilityItemApi {
  getFacilityItem?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getFacilityItem: FacilityItem;
      },
      QueryGetFacilityItemArgs
    >;
  };

  getFacilityItemsByFacility?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getFacilityItemsByFacility: FacilityItemQueryResponse;
      },
      QueryGetFacilityItemsByFacilityArgs
    >;
  };

  getFacilityItemsByItem?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getFacilityItemsByItem: FacilityItemQueryResponse;
      },
      QueryGetFacilityItemsByItemArgs
    >;
  };

  createFacilityItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createFacilityItem: FacilityItem;
      },
      MutationCreateFacilityItemArgs
    >;
  };

  saveFacilityItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveFacilityItem: FacilityItem;
      },
      MutationSaveFacilityItemArgs
    >;
  };
}
