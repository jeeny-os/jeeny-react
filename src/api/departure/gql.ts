import { gql } from "@apollo/client";
import {
  DEPARTURE_DETAILS_FRAGMENT,
  DEPARTURE_FRAGMENT,
  DEPARTURE_LINE_ITEM_FRAGMENT,
  DEPARTURE_PICK_FRAGMENT,
  DEPARTURE_PICK_LINE_ITEM_FRAGMENT,
  DEPARTURE_PICK_LIST_FRAGMENT,
  DEPARTURE_PICK_LIST_LINE_ITEM_FRAGMENT,
} from "./fragments";

export const GET_DEPARTURE = gql`
  ${DEPARTURE_FRAGMENT}
  query getDeparture($id: String!) {
    getDeparture(id: $id) {
      ...Departure
    }
  }
`;

export const GET_DEPARTURE_DETAILS = gql`
  ${DEPARTURE_DETAILS_FRAGMENT}
  query getDepartureDetails($id: String!) {
    getDepartureDetails(id: $id) {
      ...DepartureDetails
    }
  }
`;

export const GET_DEPARTURES = gql`
  ${DEPARTURE_FRAGMENT}
  query getDepartures {
    getDepartures {
      cursor
      items {
        ...Departure
      }
    }
  }
`;

export const GET_DEPARTURES_BY_EXTERNAL_CUSTOMER_ID = gql`
  ${DEPARTURE_FRAGMENT}
  query getDeparturesByExternalCustomerId($externalCustomerId: String!) {
    getDeparturesByExternalCustomerId(externalCustomerId: $externalCustomerId) {
      cursor
      items {
        ...Departure
      }
    }
  }
`;

export const CREATE_DEPARTURE = gql`
  ${DEPARTURE_FRAGMENT}
  mutation createDeparture($data: DepartureInput!) {
    createDeparture(data: $data) {
      ...Departure
    }
  }
`;

export const SAVE_DEPARTURE = gql`
  ${DEPARTURE_FRAGMENT}
  mutation saveDeparture($data: DepartureUpdateInput!) {
    saveDeparture(data: $data) {
      ...Departure
    }
  }
`;

export const CREATE_DEPARTURE_LINE_ITEM = gql`
  ${DEPARTURE_LINE_ITEM_FRAGMENT}
  mutation createDepartureLineItem($data: DepartureLineItemInput!) {
    createDepartureLineItem(data: $data) {
      ...DepartureLineItem
    }
  }
`;

export const SAVE_DEPARTURE_LINE_ITEM = gql`
  ${DEPARTURE_LINE_ITEM_FRAGMENT}
  mutation saveDepartureLineItem($data: DepartureLineItemUpdateInput!) {
    saveDepartureLineItem(data: $data) {
      ...DepartureLineItem
    }
  }
`;

export const DELETE_DEPARTURE_LINE_ITEM = gql`
  ${DEPARTURE_LINE_ITEM_FRAGMENT}
  mutation deleteDepartureLineItem($departureId: String!, $productId: String!) {
    deleteDepartureLineItem(departureId: $departureId, productId: $productId) {
      ...DepartureLineItem
    }
  }
`;

export const GET_DEPARTURE_LINE_ITEMS_BY_ITEM_ID = gql`
  ${DEPARTURE_LINE_ITEM_FRAGMENT}
  query getDepartureLineItemsByItemId(
    $itemId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getDepartureLineItemsByItemId(
      itemId: $itemId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...DepartureLineItem
      }
    }
  }
`;

export const CREATE_DEPARTURE_PICK_LIST = gql`
  ${DEPARTURE_PICK_LIST_FRAGMENT}
  mutation createDeparturePickList($data: DeparturePickListInput!) {
    createDeparturePickList(data: $data) {
      ...DeparturePickList
    }
  }
`;

export const DELETE_DEPARTURE_PICK_LIST = gql`
  ${DEPARTURE_PICK_LIST_FRAGMENT}
  mutation deleteDeparturePickList($departureId: String!, $id: String!) {
    deleteDeparturePickList(departureId: $departureId, id: $id) {
      ...DeparturePickList
    }
  }
`;

export const GET_DEPARTURE_PICK_LISTS = gql`
  ${DEPARTURE_PICK_LIST_FRAGMENT}
  query getDeparturePickLists(
    $fromDate: String!
    $toDate: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getDeparturePickLists(
      fromDate: $fromDate
      toDate: $toDate
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...DeparturePickList
      }
    }
  }
`;

export const GET_DEPARTURE_PICK_LISTS_BY_FACILITY_ID = gql`
  ${DEPARTURE_PICK_LIST_FRAGMENT}
  query getDeparturePickListsByFacilityId(
    $facilityId: String!
    $fromDate: String!
    $toDate: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getDeparturePickListsByFacilityId(
      facilityId: $facilityId
      fromDate: $fromDate
      toDate: $toDate
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...DeparturePickList
      }
    }
  }
`;

export const GET_DEPARTURE_PICK_LIST_LINE_ITEMS_BY_ITEM_ID = gql`
  ${DEPARTURE_PICK_LIST_FRAGMENT}
  query getDeparturePickListLineItemsByItemId(
    $itemId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getDeparturePickListLineItemsByItemId(
      itemId: $itemId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...DeparturePickList
      }
    }
  }
`;

export const CREATE_DEPARTURE_PICK_LIST_LINE_ITEM = gql`
  ${DEPARTURE_PICK_LIST_LINE_ITEM_FRAGMENT}
  mutation createDeparturePickListLineItem(
    $data: DeparturePickListLineItemInput!
  ) {
    createDeparturePickListLineItem(data: $data) {
      ...DeparturePickListLineItem
    }
  }
`;

export const SAVE_DEPARTURE_PICK_LIST_LINE_ITEM = gql`
  ${DEPARTURE_PICK_LIST_LINE_ITEM_FRAGMENT}
  mutation saveDeparturePickListLineItem(
    $data: DeparturePickListLineItemUpdateInput!
  ) {
    saveDeparturePickListLineItem(data: $data) {
      ...DeparturePickListLineItem
    }
  }
`;

export const DELETE_DEPARTURE_PICK_LIST_LINE_ITEM = gql`
  ${DEPARTURE_PICK_LIST_LINE_ITEM_FRAGMENT}
  mutation deleteDeparturePickListLineItem(
    $departureId: String!
    $pickListId: String!
    $productId: String!
  ) {
    deleteDeparturePickListLineItem(
      departureId: $departureId
      pickListId: $pickListId
      productId: $productId
    ) {
      ...DeparturePickListLineItem
    }
  }
`;

export const CREATE_DEPARTURE_PICK = gql`
  ${DEPARTURE_PICK_FRAGMENT}
  mutation createDeparturePick($data: DeparturePickInput!) {
    createDeparturePick(data: $data) {
      ...DeparturePick
    }
  }
`;

export const DELETE_DEPARTURE_PICK = gql`
  ${DEPARTURE_PICK_FRAGMENT}
  mutation deleteDeparturePick($departureId: String!, $id: String!) {
    deleteDeparturePick(departureId: $departureId, id: $id) {
      ...DeparturePick
    }
  }
`;

export const DELETE_DEPARTURE_PICK_LINE_ITEM = gql`
  ${DEPARTURE_PICK_LINE_ITEM_FRAGMENT}
  mutation deleteDeparturePickLineItem(
    $departureId: String!
    $pickId: String!
    $productId: String!
  ) {
    deleteDeparturePickLineItem(
      departureId: $departureId
      pickId: $pickListId
      productId: $productId
    ) {
      ...DeparturePickLineItem
    }
  }
`;

export const PICK_STORAGE_LOCATION_FOR_DEPARTURE = gql`
  ${DEPARTURE_PICK_LINE_ITEM_FRAGMENT}
  mutation pickStorageLocationForDeparture(
    $data: PickStorageLocationForDepartureInput!
  ) {
    pickStorageLocationForDeparture(data: $data) {
      ...DeparturePickLineItem
    }
  }
`;
