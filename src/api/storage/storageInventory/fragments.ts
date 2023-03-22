import { gql } from "@apollo/client";
import { ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT } from "../itemStorageInventoryAreaLocation/fragments";
import {
  DYNAMIC_CONTAINER_FRAGMENT,
  DYNAMIC_CONTAINER_PAYLOAD_FRAGMENT,
} from "../dynamicContainer/fragments";

export const STORAGE_INVENTORY_FRAGMENT = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  ${DYNAMIC_CONTAINER_FRAGMENT}
  fragment StorageInventory on StorageInventory {
    quantity
    item {
      ...ItemStorageInventoryAreaLocation
    }
    dynamicContainer {
      ...DynamicContainer
    }
  }
`;

export const STORAGE_INVENTORY_PICK_RECORD_FRAGMENT = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  ${DYNAMIC_CONTAINER_PAYLOAD_FRAGMENT}
  fragment StorageInventoryPickRecord on StorageInventoryPickRecord {
    __typename
    ... on ItemStorageInventoryAreaLocation {
      ...ItemStorageInventoryAreaLocation
    }
    ... on ItemDynamicContainerPayload {
      ...ItemDynamicContainerPayload
    }
  }
`;
