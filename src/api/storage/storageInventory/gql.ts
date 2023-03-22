import { gql } from "@apollo/client";
import {
  STORAGE_INVENTORY_FRAGMENT,
  STORAGE_INVENTORY_PICK_RECORD_FRAGMENT,
} from "./fragments";

export const GET_STORAGE_INVENTORY_BY_LOCATION = gql`
  ${STORAGE_INVENTORY_FRAGMENT}
  query getStorageInventoryByLocation(
    $facilityId: String!
    $partialInventoryAreaLocation: PartialInventoryAreaLocationInput
    $inventoryAreaLocation: InventoryAreaLocationInput
  ) {
    getStorageInventoryByLocation(
      facilityId: $facilityId
      partialInventoryAreaLocation: $partialInventoryAreaLocation
      inventoryAreaLocation: $inventoryAreaLocation
    ) {
      ...StorageInventory
    }
  }
`;

export const GET_STORAGE_INVENTORY_BY_PAYLOAD = gql`
  ${STORAGE_INVENTORY_FRAGMENT}
  query getStorageInventoryByPayload(
    $facilityId: String!
    $itemId: String!
    $partialInventoryAreaLocation: PartialInventoryAreaLocationInput
    $inventoryAreaLocation: InventoryAreaLocationInput
  ) {
    getStorageInventoryByPayload(
      facilityId: $facilityId
      itemId: $itemId
      partialInventoryAreaLocation: $partialInventoryAreaLocation
      inventoryAreaLocation: $inventoryAreaLocation
    ) {
      ...StorageInventory
    }
  }
`;

export const PICK_STORAGE_LOCATION = gql`
  ${STORAGE_INVENTORY_PICK_RECORD_FRAGMENT}
  mutation pickStorageLocation(
    $facilityId: String!
    $itemId: String!
    $quantity: Float!
    $ledger: String!
    $inventoryAreaLocation: InventoryAreaLocationInput!
  ) {
    pickStorageLocation(
      facilityId: $facilityId
      itemId: $itemId
      quantity: $quantity
      ledger: $ledger
      inventoryAreaLocation: $inventoryAreaLocation
    ) {
      ...StorageInventoryPickRecord
    }
  }
`;
