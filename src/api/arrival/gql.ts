import { gql } from "@apollo/client";
import {
  ARRIVAL_DELIVERY_FRAGMENT,
  ARRIVAL_DELIVERY_LINE_ITEM_FRAGMENT,
  ARRIVAL_DETAILS_WITH_STATUS_FRAGMENT,
  ARRIVAL_FRAGMENT,
  ARRIVAL_LINE_ITEM_FRAGMENT,
  ARRIVAL_RELEASE_FRAGMENT,
  ARRIVAL_RELEASE_LINE_ITEM_FRAGMENT,
  ARRIVAL_RELEASE_WITH_STATUS_FRAGMENT,
} from "./fragments";

export const GET_ARRIVAL = gql`
  ${ARRIVAL_DETAILS_WITH_STATUS_FRAGMENT}
  query getArrivalDetails($id: String!) {
    getArrivalDetails(id: $id) {
      ...ArrivalDetailsWithStatus
    }
  }
`;

export const GET_ARRIVALS = gql`
  ${ARRIVAL_FRAGMENT}
  query getArrivals(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getArrivals(limit: $limit, cursor: $cursor, filters: $filters) {
      cursor
      items {
        ...Arrival
      }
    }
  }
`;

export const GET_ARRIVALS_BY_ITEM = gql`
  ${ARRIVAL_FRAGMENT}
  query getArrivalsByItem($itemId: String!) {
    getArrivalsByItem(itemId: $itemId) {
      ...Arrival
    }
  }
`;

export const GET_ARRIVALS_BY_SUPPLIER = gql`
  ${ARRIVAL_FRAGMENT}
  query getArrivalsBySupplier(
    $supplierId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getArrivalsBySupplier(
      supplierId: $supplierId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...Arrival
      }
    }
  }
`;

export const CREATE_ARRIVAL = gql`
  ${ARRIVAL_FRAGMENT}
  mutation createArrival($data: ArrivalInput!) {
    createArrival(data: $data) {
      ...Arrival
    }
  }
`;

export const SAVE_ARRIVAL = gql`
  ${ARRIVAL_FRAGMENT}
  mutation saveArrival($data: ArrivalUpdateInput!) {
    saveArrival(data: $data) {
      ...Arrival
    }
  }
`;

export const CREATE_ARRIVAL_RELEASE = gql`
  ${ARRIVAL_RELEASE_FRAGMENT}
  mutation createArrivalRelease($data: ArrivalReleaseInput!) {
    createArrivalRelease(data: $data) {
      ...ArrivalRelease
    }
  }
`;

export const SAVE_ARRIVAL_RELEASE = gql`
  ${ARRIVAL_RELEASE_FRAGMENT}
  mutation saveArrivalRelease($data: ArrivalReleaseUpdateInput!) {
    saveArrivalRelease(data: $data) {
      ...ArrivalRelease
    }
  }
`;

export const DELETE_ARRIVAL_RELEASE = gql`
  ${ARRIVAL_RELEASE_FRAGMENT}
  mutation deleteArrivalRelease($data: ArrivalReleaseDeleteInput!) {
    deleteArrivalRelease(data: $data) {
      ...ArrivalRelease
    }
  }
`;

export const GET_ARRIVAL_RELEASES = gql`
  ${ARRIVAL_RELEASE_FRAGMENT}
  query getArrivalReleases(
    $fromDate: String
    $toDate: String
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getArrivalReleases(
      fromDate: $fromDate
      toDate: $toDate
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...ArrivalRelease
      }
    }
  }
`;

export const GET_ARRIVAL_RELEASES_WITH_STATUS = gql`
  ${ARRIVAL_RELEASE_WITH_STATUS_FRAGMENT}
  query getArrivalReleasesWithStatus(
    $fromDate: String
    $toDate: String
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getArrivalReleasesWithStatus(
      fromDate: $fromDate
      toDate: $toDate
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...ArrivalReleaseWithStatus
      }
    }
  }
`;

export const GET_ARRIVAL_RELEASES_BY_ITEM = gql`
  ${ARRIVAL_RELEASE_FRAGMENT}
  query getArrivalReleasesByItem(
    $fromDate: String
    $toDate: String
    $itemId: String!
  ) {
    getArrivalReleasesByItem(
      fromDate: $fromDate
      toDate: $toDate
      itemId: $itemId
    ) {
      ...ArrivalRelease
    }
  }
`;

export const GET_ARRIVAL_RELEASES_BY_SUPPLIER = gql`
  ${ARRIVAL_RELEASE_FRAGMENT}
  query getArrivalReleasesBySupplier(
    $supplierId: String!
    $fromDate: String
    $toDate: String
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getArrivalReleasesBySupplier(
      supplierId: $supplierId
      fromDate: $fromDate
      toDate: $toDate
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...ArrivalRelease
      }
    }
  }
`;

export const CREATE_ARRIVAL_LINE_ITEM = gql`
  ${ARRIVAL_LINE_ITEM_FRAGMENT}
  mutation createArrivalLineItem($data: ArrivalLineItemInput!) {
    createArrivalLineItem(data: $data) {
      ...ArrivalLineItem
    }
  }
`;

export const DELETE_ARRIVAL_LINE_ITEM = gql`
  ${ARRIVAL_LINE_ITEM_FRAGMENT}
  mutation deleteArrivalLineItem($data: ArrivalLineItemDeleteInput!) {
    deleteArrivalLineItem(data: $data) {
      ...ArrivalLineItem
    }
  }
`;

export const SAVE_ARRIVAL_LINE_ITEM = gql`
  ${ARRIVAL_LINE_ITEM_FRAGMENT}
  mutation saveArrivalLineItem($data: ArrivalLineItemUpdateInput!) {
    saveArrivalLineItem(data: $data) {
      ...ArrivalLineItem
    }
  }
`;

export const CREATE_ARRIVAL_RELEASE_LINE_ITEM = gql`
  ${ARRIVAL_RELEASE_LINE_ITEM_FRAGMENT}
  mutation createArrivalReleaseLineItem($data: ArrivalReleaseLineItemInput!) {
    createArrivalReleaseLineItem(data: $data) {
      ...ArrivalReleaseLineItem
    }
  }
`;

export const DELETE_ARRIVAL_RELEASE_LINE_ITEM = gql`
  ${ARRIVAL_RELEASE_LINE_ITEM_FRAGMENT}
  mutation deleteArrivalReleaseLineItem(
    $data: ArrivalReleaseLineItemDeleteInput!
  ) {
    deleteArrivalReleaseLineItem(data: $data) {
      ...ArrivalReleaseLineItem
    }
  }
`;

export const SAVE_ARRIVAL_RELEASE_LINE_ITEM = gql`
  ${ARRIVAL_RELEASE_LINE_ITEM_FRAGMENT}
  mutation saveArrivalReleaseLineItem(
    $data: ArrivalReleaseLineItemUpdateInput!
  ) {
    saveArrivalReleaseLineItem(data: $data) {
      ...ArrivalReleaseLineItem
    }
  }
`;

export const CREATE_ARRIVAL_DELIVERY = gql`
  ${ARRIVAL_DELIVERY_FRAGMENT}
  mutation createArrivalDelivery($data: ArrivalDeliveryInput!) {
    createArrivalDelivery(data: $data) {
      ...ArrivalDelivery
    }
  }
`;

export const SAVE_ARRIVAL_DELIVERY = gql`
  ${ARRIVAL_DELIVERY_FRAGMENT}
  mutation saveArrivalDelivery($data: ArrivalDeliveryUpdateInput!) {
    saveArrivalDelivery(data: $data) {
      ...ArrivalDelivery
    }
  }
`;

export const DELETE_ARRIVAL_DELIVERY = gql`
  ${ARRIVAL_DELIVERY_FRAGMENT}
  mutation deleteArrivalDelivery($data: ArrivalDeliveryDeleteInput!) {
    deleteArrivalDelivery(data: $data) {
      ...ArrivalDelivery
    }
  }
`;

export const CREATE_ARRIVAL_DELIVERY_LINE_ITEM = gql`
  ${ARRIVAL_DELIVERY_LINE_ITEM_FRAGMENT}
  mutation createArrivalDeliveryLineItem($data: ArrivalDeliveryLineItemInput!) {
    createArrivalDeliveryLineItem(data: $data) {
      ...ArrivalDeliveryLineItem
    }
  }
`;

export const SAVE_ARRIVAL_DELIVERY_LINE_ITEM = gql`
  ${ARRIVAL_DELIVERY_LINE_ITEM_FRAGMENT}
  mutation saveArrivalDeliveryLineItem(
    $data: ArrivalDeliveryLineItemUpdateInput!
  ) {
    saveArrivalDeliveryLineItem(data: $data) {
      ...ArrivalDeliveryLineItem
    }
  }
`;
