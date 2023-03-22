import { gql } from "@apollo/client";

export const FACILITY_INVENTORY_AREA_FRAGMENT = gql`
  fragment FacilityInventoryArea on FacilityInventoryArea {
    id
    name
    code
    description
    dynamicContainerTypes {
      id
      width
      depth
      height
      status
    }
  }
`;

export const FACILITY_INVENTORY_AREA_FOR_LIST_FRAGMENT = gql`
  fragment FacilityInventoryAreaForList on FacilityInventoryAreaForList {
    id
    name
    code
    description
    facilityId
    facilityName
    dynamicContainerTypes {
      id
      width
      depth
      height
      status
    }
  }
`;

export const STORAGE_INVENTORY_AREA_RULE_FRAGMENT = gql`
  fragment StorageInventoryAreaRule on StorageInventoryAreaRule {
    companyId
    facilityId
    inventoryAreaId
    pickStrategy
    locationAssignment
    createdBy
    createdOn
    updatedOn
  }
`;

export const STORAGE_INVENTORY_AREA_FRAGMENT = gql`
  ${FACILITY_INVENTORY_AREA_FRAGMENT}
  ${STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  fragment StorageInventoryArea on StorageInventoryArea {
    id
    inventoryArea {
      ...FacilityInventoryArea
    }
    rule {
      ...StorageInventoryAreaRule
    }
  }
`;
