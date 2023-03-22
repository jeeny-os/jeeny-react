import { gql } from "@apollo/client";
import {
  ITEM_DETAILS_FRAGMENT,
  ITEM_FILES_FRAGMENT,
  ITEM_FRAGMENT,
  ITEM_WITH_PRIMARY_SUPPLIER_FRAGMENT,
} from "./fragments";

export const GET_ITEM = gql`
  ${ITEM_FRAGMENT}
  query getItem($id: String!) {
    getItem(id: $id) {
      ...Item
    }
  }
`;

export const GET_ITEM_DETAILS = gql`
  ${ITEM_DETAILS_FRAGMENT}
  query getItemDetails($id: String!) {
    getItemDetails(id: $id) {
      ...ItemDetails
    }
  }
`;

export const GET_ITEMS = gql`
  ${ITEM_FRAGMENT}
  query getItems(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getItems(limit: $limit, cursor: $cursor, filters: $filters) {
      cursor
      items {
        ...Item
      }
    }
  }
`;

export const GET_ITEMS_WITH_PRIMARY_SUPPLIER = gql`
  ${ITEM_WITH_PRIMARY_SUPPLIER_FRAGMENT}
  query getItemsWithPrimarySupplier(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getItemsWithPrimarySupplier(
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...ItemWithPrimarySupplier
      }
    }
  }
`;

export const CREATE_ITEM = gql`
  ${ITEM_FRAGMENT}
  mutation createItem($data: ItemInput!) {
    createItem(data: $data) {
      ...Item
    }
  }
`;

export const SAVE_ITEM = gql`
  ${ITEM_FRAGMENT}
  mutation saveItem($data: ItemInputUpdate!) {
    saveItem(data: $data) {
      ...Item
    }
  }
`;
