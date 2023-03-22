import { gql } from "@apollo/client";

export const ITEM_STORAGE_INVENTORY_AREA_RULE_FRAGMENT = gql`
  fragment ItemStorageInventoryAreaRule on ItemStorageInventoryAreaRule {
    createdBy
    createdOn
    updatedOn
    itemId
    facilityId
    inventoryAreaId
    minQuantity
    maxQuantity
    status
    refillStatus
    locationPriority
  }
`;
