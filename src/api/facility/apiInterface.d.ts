import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateFacilityArgs,
  MutationSaveFacilityArgs,
  QueryGetFacilityArgs,
  QueryGetFacilitiesArgs,
  Facility,
  FacilityQueryResponse,
  FacilityDetails,
  QueryGetFacilityDetailsArgs,
} from "../../types/graphql";

export interface FacilityApi {
  getFacility?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getFacility: Facility;
      },
      QueryGetFacilityArgs
    >;
  };

  getFacilityDetails?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getFacilityDetails: FacilityDetails;
      },
      QueryGetFacilityDetailsArgs
    >;
  };

  getFacilities?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getFacilities: FacilityQueryResponse;
      },
      QueryGetFacilitiesArgs
    >;
  };

  createFacility?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createFacility: Facility;
      },
      MutationCreateFacilityArgs
    >;
  };

  saveFacility?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveFacility: Facility;
      },
      MutationSaveFacilityArgs
    >;
  };
}
