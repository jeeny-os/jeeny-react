import { gql } from "@apollo/client";
import { FACILITY_ITEM_FRAGMENT } from "../facilityItem/fragments";
import { ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT } from "../storage/itemStorageInventoryAreaLocation/fragments";
import { ITEM_STORAGE_INVENTORY_AREA_RULE_FRAGMENT } from "../storage/itemStorageInventoryAreaRule/fragments";
import { DYNAMIC_CONTAINER_FRAGMENT } from "../storage/dynamicContainer/fragments";
import { STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT } from "../storage/storageInventoryAreaLocation/fragments";
import { STORAGE_INVENTORY_AREA_RULE_FRAGMENT } from "../inventoryArea/fragments";

export const FACILITY_FRAGMENT = gql`
  fragment Facility on Facility {
    id
    createdOn
    updatedOn
    status
    name
    code
    address {
      street1
      street2
      city
      state
      zipCode
      phoneNumber
      emailAddress
    }
    arrivalEmail
    arrivalPhoneNumber
    configuration
    defaultImageUrl
    inventoryAreas {
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
  }
`;

export const FACILITY_DETAILS_FRAGMENT = gql`
  ${FACILITY_FRAGMENT}
  ${DYNAMIC_CONTAINER_FRAGMENT}
  ${STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  ${STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  ${FACILITY_ITEM_FRAGMENT}
  ${ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  ${ITEM_STORAGE_INVENTORY_AREA_RULE_FRAGMENT}
  fragment FacilityDetails on FacilityDetails {
    facility {
      ...Facility
    }
    dynamicContainers {
      ...DynamicContainer
    }
    storageInventoryAreaRules {
      ...StorageInventoryAreaRule
    }
    storageInventoryAreaLocations {
      ...StorageInventoryAreaLocation
    }
    facilityItems {
      ...FacilityItem
    }
    itemStorageInventoryAreaLocations {
      ...ItemStorageInventoryAreaLocation
    }
    itemStorageInventoryAreaRules {
      ...ItemStorageInventoryAreaRule
    }
  }
`;
