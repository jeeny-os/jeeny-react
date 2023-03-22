import { gql } from "@apollo/client";
import { ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT } from "../itemStorageInventoryAreaLocation/fragments";
import { DYNAMIC_CONTAINER_FRAGMENT } from "../dynamicContainer/fragments";

export const STORAGE_LOG_FRAGMENT = gql`
  fragment StorageLog on StorageLog {
    createdOn
    quantity
    inventoryQuantity
    itemId
    type
    createdBy
  }
`;

export const STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT = gql`
  ${STORAGE_LOG_FRAGMENT}
  fragment StorageInventoryAreaLocation on StorageInventoryAreaLocation {
    id
    readableId
    facilityId
    inventoryAreaId
    aisle
    bay
    shelf
    position
    status
    dynamicContainerTypes
    deductInventory
    pickable
    capacity
    height
    width
    depth
    xCoordinate
    yCoordinate
    sizeCategory
    deductInventory
    logs {
      ...StorageLog
    }
  }
`;

export const STORAGE_INVENTORY_AREA_LOCATION_PAYLOAD_FRAGMENT = gql`
  ${STORAGE_LOG_FRAGMENT}
  ${DYNAMIC_CONTAINER_FRAGMENT}
  ${ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  fragment StorageInventoryAreaLocationPayload on StorageInventoryAreaLocationPayload {
    id
    readableId
    facilityId
    status
    deductInventory
    dynamicContainerTypes
    pickable
    capacity
    height
    width
    depth
    xCoordinate
    yCoordinate
    sizeCategory
    deductInventory
    logs {
      ...StorageLog
    }
    inventoryAreaId
    aisle
    bay
    shelf
    position
    item {
      ...ItemStorageInventoryAreaLocation
    }
    dynamicContainer {
      ...DynamicContainer
    }
  }
`;
