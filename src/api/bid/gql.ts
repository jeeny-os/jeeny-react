import { gql } from "@apollo/client";
import {
  BID_FRAGMENT,
  BID_LINE_ITEM_FRAGMENT,
  BID_REQUEST_DETAILS_FRAGMENT,
  BID_REQUEST_FRAGMENT,
  BID_REQUEST_LINE_ITEM_FRAGMENT,
} from "./fragments";

export const GET_BID_REQUESTS = gql`
  ${BID_REQUEST_FRAGMENT}
  query getBidRequests(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getBidRequests(limit: $limit, cursor: $cursor, filters: $filters) {
      cursor
      items {
        ...BidRequest
      }
    }
  }
`;

export const GET_BID_REQUEST_DETAILS = gql`
  ${BID_REQUEST_DETAILS_FRAGMENT}
  query getBidRequestDetails($id: String!) {
    getBidRequestDetails(id: $id) {
      ...BidRequestDetails
    }
  }
`;

export const CREATE_BID_REQUEST = gql`
  ${BID_REQUEST_FRAGMENT}
  mutation createBidRequest($data: BidRequestInput!) {
    createBidRequest(data: $data) {
      ...BidRequest
    }
  }
`;

export const SAVE_BID_REQUEST = gql`
  ${BID_REQUEST_FRAGMENT}
  mutation saveBidRequest($id: String!, $data: BidRequestUpdateInput!) {
    saveBidRequest(id: $id, data: $data) {
      ...BidRequest
    }
  }
`;

export const DELETE_BID_REQUEST = gql`
  ${BID_REQUEST_FRAGMENT}
  mutation deleteBidRequest($id: String!) {
    deleteBidRequest(id: $id) {
      ...BidRequest
    }
  }
`;

export const CREATE_BID_REQUEST_LINE_ITEM = gql`
  ${BID_REQUEST_LINE_ITEM_FRAGMENT}
  mutation createBidRequestLineItem($data: BidRequestLineItemInput!) {
    createBidRequestLineItem(data: $data) {
      ...BidRequestLineItem
    }
  }
`;

export const SAVE_BID_REQUEST_LINE_ITEM = gql`
  ${BID_REQUEST_LINE_ITEM_FRAGMENT}
  mutation saveBidRequestLineItem(
    $bidRequestId: String!
    $itemId: String!
    $data: BidRequestLineItemUpdateInput!
  ) {
    saveBidRequestLineItem(
      bidRequestId: $bidRequestId
      itemId: $itemId
      data: $data
    ) {
      ...BidRequestLineItem
    }
  }
`;

export const DELETE_BID_REQUEST_LINE_ITEM = gql`
  ${BID_REQUEST_LINE_ITEM_FRAGMENT}
  mutation deleteBidRequestLineItem($bidRequestId: String!, $itemId: String!) {
    deleteBidRequestLineItem(bidRequestId: $bidRequestId, itemId: $itemId) {
      ...BidRequestLineItem
    }
  }
`;

export const CREATE_BID = gql`
  ${BID_FRAGMENT}
  mutation createBid($data: BidInput!) {
    createBid(data: $data) {
      ...Bid
    }
  }
`;

export const SAVE_BID = gql`
  ${BID_FRAGMENT}
  mutation saveBid(
    $bidRequestId: String!
    $id: String!
    $data: BidUpdateInput!
  ) {
    saveBid(bidRequestId: $bidRequestId, id: $id, data: $data) {
      ...Bid
    }
  }
`;

export const DELETE_BID = gql`
  ${BID_FRAGMENT}
  mutation deleteBid($bidRequestId: String!, $id: String!) {
    deleteBid(bidRequestId: $bidRequestId, id: $id) {
      ...Bid
    }
  }
`;

export const CREATE_BID_LINE_ITEM = gql`
  ${BID_LINE_ITEM_FRAGMENT}
  mutation createBidLineItem($data: BidLineItemInput!) {
    createBidLineItem(data: $data) {
      ...BidLineItem
    }
  }
`;

export const DELETE_BID_LINE_ITEM = gql`
  ${BID_LINE_ITEM_FRAGMENT}
  mutation deleteBidLineItem(
    $bidId: String!
    $itemId: String!
    $bidRequestId: String!
  ) {
    deleteBidLineItem(
      bidId: $bidId
      itemId: $itemId
      bidRequestId: $bidRequestId
    ) {
      ...BidLineItem
    }
  }
`;

export const SAVE_BID_LINE_ITEM = gql`
  ${BID_LINE_ITEM_FRAGMENT}
  mutation saveBidLineItem(
    $bidRequestId: String!
    $bidId: String!
    $itemId: String!
    $data: BidLineItemUpdateInput!
  ) {
    saveBidLineItem(
      bidRequestId: $bidRequestId
      bidId: $bidId
      itemId: $itemId
      data: $data
    ) {
      ...BidLineItem
    }
  }
`;

export const GET_BID_LINE_ITEMS_BY_ITEM = gql`
  ${BID_LINE_ITEM_FRAGMENT}
  query getBidLineItemsByItem(
    $itemId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getBidLineItemsByItem(
      itemId: $itemId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...BidLineItem
      }
    }
  }
`;

export const GET_BID_LINE_ITEMS_BY_SUPPLIER = gql`
  ${BID_LINE_ITEM_FRAGMENT}
  query getBidLineItemsBySupplier(
    $supplierId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getBidLineItemsBySupplier(
      supplierId: $supplierId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...BidLineItem
      }
    }
  }
`;

export const GET_BID_LINE_ITEMS_BY_ITEM_GROUP = gql`
  ${BID_LINE_ITEM_FRAGMENT}
  query getBidLineItemsByItemGroup($itemGroupId: String!) {
    getBidLineItemsByItemGroup(itemGroupId: $itemGroupId) {
      ...BidLineItem
    }
  }
`;

export const GET_BIDS_BY_SUPPLIER = gql`
  ${BID_FRAGMENT}
  query getBidsBySupplier(
    $supplierId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getBidsBySupplier(
      supplierId: $supplierId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...Bid
      }
    }
  }
`;

export const GET_BID_REQUEST_LINE_ITEMS_BY_ITEM = gql`
  ${BID_REQUEST_LINE_ITEM_FRAGMENT}
  query getBidRequestLineItemsByItem(
    $itemId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getBidRequestLineItemsByItem(
      itemId: $itemId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...BidRequestLineItem
      }
    }
  }
`;
