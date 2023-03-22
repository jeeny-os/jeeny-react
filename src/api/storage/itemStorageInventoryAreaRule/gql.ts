import { gql } from "@apollo/client";
import { ITEM_STORAGE_INVENTORY_AREA_RULE_FRAGMENT } from "./fragments";

export const GET_ITEM_STORAGE_INVENTORY_AREA_RULE = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  query getItemStorageInventoryAreaRule($id: String!) {
    getItemStorageInventoryAreaRule(id: $id) {
      ...ItemStorageInventoryAreaRule
    }
  }
`;

export const GET_ITEM_STORAGE_INVENTORY_AREA_RULES = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  query getItemStorageInventoryAreaRules(
    $itemId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getItemStorageInventoryAreaRules(
      itemId: $itemId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...ItemStorageInventoryAreaRule
      }
    }
  }
`;

export const CREATE_ITEM_STORAGE_INVENTORY_AREA_RULE = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  mutation createItemStorageInventoryAreaRule(
    $data: ItemStorageInventoryAreaRuleInput!
  ) {
    createItemStorageInventoryAreaRule(data: $data) {
      ...ItemStorageInventoryAreaRule
    }
  }
`;

export const SAVE_ITEM_STORAGE_INVENTORY_AREA_RULE = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  mutation saveItemStorageInventoryAreaRule(
    $data: ItemStorageInventoryAreaRuleUpdateInput!
  ) {
    saveItemStorageInventoryAreaRule(data: $data) {
      ...ItemStorageInventoryAreaRule
    }
  }
`;
