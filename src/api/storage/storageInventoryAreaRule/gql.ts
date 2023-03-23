import { gql } from "@apollo/client";

import { STORAGE_INVENTORY_AREA_RULE_FRAGMENT } from "./fragments";

export const GET_STORAGE_INVENTORY_AREA_RULE = gql`
  ${STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  query getStorageInventoryAreaRule(
    $facilityId: String!
    $inventoryAreaId: String!
  ) {
    getStorageInventoryAreaRule(
      facilityId: $facilityId
      inventoryAreaId: $inventoryAreaId
    ) {
      ...StorageInventoryAreaRule
    }
  }
`;

export const GET_STORAGE_INVENTORY_AREA_RULES = gql`
  ${STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  query getStorageInventoryAreaRules(
    $facilityId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getStorageInventoryAreaRules(
      facilityId: $facilityId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...StorageInventoryAreaRule
      }
    }
  }
`;

export const CREATE_STORAGE_INVENTORY_AREA_RULE = gql`
  ${STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  mutation createStorageInventoryAreaRule(
    $data: StorageInventoryAreaRuleInput!
  ) {
    createStorageInventoryAreaRule(data: $data) {
      ...StorageInventoryAreaRule
    }
  }
`;

export const UPDATE_STORAGE_INVENTORY_AREA_RULE = gql`
  ${STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  mutation updateStorageInventoryAreaRule(
    $data: StorageInventoryAreaRuleUpdateInput!
  ) {
    updateStorageInventoryAreaRule(data: $data) {
      ...StorageInventoryAreaRule
    }
  }
`;
