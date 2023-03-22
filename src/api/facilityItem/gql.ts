import { gql } from "@apollo/client";
import { FACILITY_ITEM_FRAGMENT } from "./fragments";

export const GET_FACILITY_ITEM = gql`
  ${FACILITY_ITEM_FRAGMENT}
  query getFacilityItem($data: FacilityItemGetInput!) {
    getFacilityItem(data: $data) {
      ...FacilityItem
    }
  }
`;

export const GET_FACILITY_ITEMS_BY_FACILITY = gql`
  ${FACILITY_ITEM_FRAGMENT}
  query getFacilityItemsByFacility(
    $facilityId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getFacilityItemsByFacility(
      facilityId: $facilityId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...FacilityItem
      }
    }
  }
`;

export const GET_FACILITY_ITEMS_BY_ITEM = gql`
  ${FACILITY_ITEM_FRAGMENT}
  query getFacilityItemsByItem(
    $itemId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getFacilityItemsByItem(
      itemId: $itemId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...FacilityItem
      }
    }
  }
`;

export const CREATE_FACILITY_ITEM = gql`
  ${FACILITY_ITEM_FRAGMENT}
  mutation createFacilityItem($data: FacilityItemInput!) {
    createFacilityItem(data: $data) {
      ...FacilityItem
    }
  }
`;

export const SAVE_FACILITY_ITEM = gql`
  ${FACILITY_ITEM_FRAGMENT}
  mutation saveFacilityItem($data: FacilityItemUpdateInput!) {
    saveFacilityItem(data: $data) {
      ...FacilityItem
    }
  }
`;
