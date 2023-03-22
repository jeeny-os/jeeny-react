import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateBidArgs,
  MutationSaveBidArgs,
  MutationCreateBidLineItemArgs,
  MutationSaveBidLineItemArgs,
  MutationDeleteBidLineItemArgs,
  MutationCreateBidRequestArgs,
  MutationSaveBidRequestArgs,
  MutationDeleteBidRequestArgs,
  MutationCreateBidRequestLineItemArgs,
  MutationSaveBidRequestLineItemArgs,
  MutationDeleteBidRequestLineItemArgs,
  MutationDeleteBidArgs,
  QueryGetBidRequestDetailsArgs,
  BidRequestLineItem,
  BidLineItem,
  BidRequestDetails,
  BidRequest,
  BidLineItemQueryResponse,
  QueryGetBidLineItemsByItemArgs,
  QueryGetBidLineItemsBySupplierArgs,
  QueryGetBidLineItemsByItemGroupArgs,
  BidQueryResponse,
  QueryGetBidsBySupplierArgs,
  BidRequestLineItemQueryResponse,
  QueryGetBidRequestLineItemsByItemArgs,
  BidRequestQueryResponse,
  QueryGetBidRequestsArgs,
} from "../../types/graphql";

export interface BidApi {
  getBidRequests?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getBidRequests: BidRequestQueryResponse;
      },
      QueryGetBidRequestsArgs
    >;
  };

  getBidRequestDetails?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getBidRequestDetails: BidRequestDetails;
      },
      QueryGetBidRequestDetailsArgs
    >;
  };

  createBidRequest?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createBidRequest: BidRequest;
      },
      MutationCreateBidRequestArgs
    >;
  };

  saveBidRequest?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveBidRequest: BidRequest;
      },
      MutationSaveBidRequestArgs
    >;
  };

  deleteBidRequest?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteBidRequest: BidRequest;
      },
      MutationDeleteBidRequestArgs
    >;
  };

  createBidRequestLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createBidRequestLineItem: BidRequestLineItem;
      },
      MutationCreateBidRequestLineItemArgs
    >;
  };

  saveBidRequestLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveBidRequestLineItem: BidRequestLineItem;
      },
      MutationSaveBidRequestLineItemArgs
    >;
  };

  deleteBidRequestLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteBidRequestLineItem: BidRequestLineItem;
      },
      MutationDeleteBidRequestLineItemArgs
    >;
  };

  createBid?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createBid: Bid;
      },
      MutationCreateBidArgs
    >;
  };

  saveBid?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveBid: Bid;
      },
      MutationSaveBidArgs
    >;
  };

  deleteBid?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteBid: Bid;
      },
      MutationDeleteBidArgs
    >;
  };

  createBidLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createBidLineItem: BidLineItem;
      },
      MutationCreateBidLineItemArgs
    >;
  };

  saveBidLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveBidLineItem: BidLineItem;
      },
      MutationSaveBidLineItemArgs
    >;
  };

  deleteBidLineItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteBidLineItem: BidLineItem;
      },
      MutationDeleteBidLineItemArgs
    >;
  };

  getBidLineItemsByItem?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getBidLineItemsByItem: BidLineItemQueryResponse;
      },
      QueryGetBidLineItemsByItemArgs
    >;
  };

  getBidLineItemsBySupplier?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getBidLineItemsBySupplier: BidLineItemQueryResponse;
      },
      QueryGetBidLineItemsBySupplierArgs
    >;
  };

  getBidLineItemsByItemGroup?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getBidLineItemsByItemGroup: BidLineItem[];
      },
      QueryGetBidLineItemsByItemGroupArgs
    >;
  };

  getBidsBySupplier?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getBidsBySupplier: BidQueryResponse;
      },
      QueryGetBidsBySupplierArgs
    >;
  };

  getBidRequestLineItemsByItem?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getBidRequestLineItemsByItem: BidRequestLineItemQueryResponse;
      },
      QueryGetBidRequestLineItemsByItemArgs
    >;
  };
}
