import { gql } from "@apollo/client";
import { SUPPLIER_ITEM_FRAGMENT } from "./fragments";

export const GET_SUPPLIER_ITEM = gql`
  ${SUPPLIER_ITEM_FRAGMENT}
  query getSupplierItem($id: String!) {
    getSupplierItem(id: $id) {
      ...SupplierItem
    }
  }
`;

export const GET_SUPPLIER_ITEMS_BY_SUPPLIER = gql`
  ${SUPPLIER_ITEM_FRAGMENT}
  query getSupplierItemsBySupplier(
    $supplierId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getSupplierItemsBySupplier(
      supplierId: $supplierId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...SupplierItem
      }
    }
  }
`;

export const GET_SUPPLIER_ITEMS_BY_ITEM = gql`
  ${SUPPLIER_ITEM_FRAGMENT}
  query getSupplierItemsByItem(
    $itemId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getSupplierItemsByItem(
      itemId: $itemId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...SupplierItem
      }
    }
  }
`;

export const CREATE_SUPPLIER_ITEM = gql`
  ${SUPPLIER_ITEM_FRAGMENT}
  mutation createSupplierItem($data: SupplierItemInput!) {
    createSupplierItem(data: $data) {
      ...SupplierItem
    }
  }
`;

export const SAVE_SUPPLIER_ITEM = gql`
  ${SUPPLIER_ITEM_FRAGMENT}
  mutation saveSupplierItem($data: SupplierItemInputUpdate!) {
    saveSupplierItem(data: $data) {
      ...SupplierItem
    }
  }
`;
