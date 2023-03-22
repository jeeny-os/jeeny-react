import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateArrivalArgs,
  MutationSaveArrivalArgs,
  QueryGetArrivalDetailsArgs,
  QueryGetArrivalsArgs,
  ArrivalReleaseWithStatusQueryResponse,
  QueryGetArrivalReleasesWithStatusArgs,
  Arrival,
  ArrivalQueryResponse,
  QueryGetArrivalsByItemArgs,
  QueryGetArrivalsBySupplierArgs,
  ArrivalLineItem,
  MutationCreateArrivalLineItemArgs,
  MutationDeleteArrivalLineItemArgs,
  MutationSaveArrivalLineItemArgs,
  ArrivalDetailsWithStatus,
  MutationSaveArrivalReleaseArgs,
  MutationCreateArrivalReleaseArgs,
  MutationDeleteArrivalReleaseArgs,
  QueryGetArrivalReleasesArgs,
  ArrivalReleaseQueryResponse,
  QueryGetArrivalReleasesByItemArgs,
  QueryGetArrivalReleasesBySupplierArgs,
  ArrivalReleaseLineItem,
  MutationDeleteArrivalReleaseLineItemArgs,
  MutationCreateArrivalReleaseLineItemArgs,
  MutationSaveArrivalReleaseLineItemArgs,
  ArrivalDelivery,
  MutationCreateArrivalDeliveryArgs,
  ArrivalDeliveryLineItem,
  MutationCreateArrivalDeliveryLineItemArgs,
  MutationSaveArrivalDeliveryArgs,
  MutationSaveArrivalDeliveryLineItemArgs,
  MutationDeleteArrivalDeliveryArgs,
} from "../../types/graphql";

export interface ArrivalApi {
  getArrival?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getArrivalDetails: ArrivalDetailsWithStatus;
      },
      QueryGetArrivalDetailsArgs
    >;
  };

  getArrivals?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getArrivals: ArrivalQueryResponse;
      },
      QueryGetArrivalsArgs
    >;
  };

  getArrivalsByItem?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getArrivalsByItem: Arrival[];
      },
      QueryGetArrivalsByItemArgs
    >;
  };

  getArrivalsBySupplier?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getArrivalsBySupplier: ArrivalQueryResponse;
      },
      QueryGetArrivalsBySupplierArgs
    >;
  };

  createArrival?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createArrival: Arrival;
      },
      MutationCreateArrivalArgs
    >;
  };

  saveArrival?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveArrival: Arrival;
      },
      MutationSaveArrivalArgs
    >;
  };

  getArrivalReleases?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getArrivalReleases: ArrivalReleaseQueryResponse;
      },
      QueryGetArrivalReleasesArgs
    >;
  };

  getArrivalReleasesWithStatus?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getArrivalReleasesWithStatus: ArrivalReleaseWithStatusQueryResponse;
      },
      QueryGetArrivalReleasesWithStatusArgs
    >;
  };

  getArrivalReleasesByItem?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getArrivalReleasesByItem: ArrivalRelease[];
      },
      QueryGetArrivalReleasesByItemArgs
    >;
  };

  getArrivalReleasesBySupplier?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getArrivalReleasesBySupplier: ArrivalReleaseQueryResponse;
      },
      QueryGetArrivalReleasesBySupplierArgs
    >;
  };

  createArrivalRelease?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createArrivalRelease: ArrivalRelease;
      },
      MutationCreateArrivalReleaseArgs
    >;
  };

  saveArrivalRelease?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveArrivalRelease: ArrivalRelease;
      },
      MutationSaveArrivalReleaseArgs
    >;
  };

  deleteArrivalRelease?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteArrivalRelease: ArrivalRelease;
      },
      MutationDeleteArrivalReleaseArgs
    >;
  };

  createArrivalLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createArrivalLineItem: ArrivalLineItem;
      },
      MutationCreateArrivalLineItemArgs
    >;
  };

  deleteArrivalLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteArrivalLineItem: ArrivalLineItem;
      },
      MutationDeleteArrivalLineItemArgs
    >;
  };

  saveArrivalLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveArrivalLineItem: ArrivalLineItem;
      },
      MutationSaveArrivalLineItemArgs
    >;
  };

  createArrivalReleaseLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createArrivalReleaseLineItem: ArrivalReleaseLineItem;
      },
      MutationCreateArrivalReleaseLineItemArgs
    >;
  };

  deleteArrivalReleaseLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteArrivalReleaseLineItem: ArrivalReleaseLineItem;
      },
      MutationDeleteArrivalReleaseLineItemArgs
    >;
  };

  saveArrivalReleaseLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveArrivalReleaseLineItem: ArrivalReleaseLineItem;
      },
      MutationSaveArrivalReleaseLineItemArgs
    >;
  };

  createArrivalDelivery?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createArrivalDelivery: ArrivalDelivery;
      },
      MutationCreateArrivalDeliveryArgs
    >;
  };

  saveArrivalDelivery?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveArrivalDelivery: ArrivalDelivery;
      },
      MutationSaveArrivalDeliveryArgs
    >;
  };

  deleteArrivalDelivery?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteArrivalDelivery: ArrivalDelivery;
      },
      MutationDeleteArrivalDeliveryArgs
    >;
  };

  createArrivalDeliveryLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createArrivalDeliveryLineItem: ArrivalDeliveryLineItem;
      },
      MutationCreateArrivalDeliveryLineItemArgs
    >;
  };

  saveArrivalDeliveryLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveArrivalDeliveryLineItem: ArrivalDeliveryLineItem;
      },
      MutationSaveArrivalDeliveryLineItemArgs
    >;
  };
}
