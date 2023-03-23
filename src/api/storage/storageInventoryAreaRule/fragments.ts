import { gql } from "@apollo/client";

export const STORAGE_INVENTORY_AREA_RULE_FRAGMENT = gql`
  fragment StorageInventoryAreaRule on StorageInventoryAreaRule {
    companyId
    createdBy
    createdOn
    facilityId
    inventoryAreaId
    locationAssignment
    pickStrategy
    updatedOn
  }
`;
