import { gql } from "@apollo/client";
import { ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT } from "./fragments";

export const GET_ITEM_STORAGE_INVENTORY_AREA_LOCATION = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  query getItemStorageInventoryAreaLocation($id: String!) {
    getItemStorageInventoryAreaLocation(id: $id) {
      ...ItemStorageInventoryAreaLocation
    }
  }
`;

export const CREATE_ITEM_STORAGE_INVENTORY_AREA_LOCATION = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  mutation createItemStorageInventoryAreaLocation(
    $data: ItemStorageInventoryAreaLocationInput!
  ) {
    createItemStorageInventoryAreaLocation(data: $data) {
      ...ItemStorageInventoryAreaLocation
    }
  }
`;

export const SAVE_ITEM_STORAGE_INVENTORY_AREA_LOCATION = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  mutation updateItemStorageInventoryAreaLocation(
    $data: ItemStorageInventoryAreaLocationUpdateInput!
  ) {
    updateItemStorageInventoryAreaLocation(data: $data) {
      ...ItemStorageInventoryAreaLocation
    }
  }
`;

export const DELETE_ITEM_STORAGE_INVENTORY_AREA_LOCATION = gql`
  mutation deleteItemStorageInventoryAreaLocation(
    $data: ItemStorageInventoryAreaLocationDeleteInput!
  ) {
    deleteItemStorageInventoryAreaLocation(data: $data) {
      itemId
      facilityId
      inventoryAreaId
      aisle
      bay
      shelf
      position
    }
  }
`;

export const HANDLE_ITEM_STORAGE_INVENTORY_AREA_LOCATION = gql`
  ${ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  mutation handleItemStorageInventoryAreaLocation(
    $data: ItemStorageInventoryAreaLocationHandleInput!
  ) {
    handleItemStorageInventoryAreaLocation(data: $data) {
      ...ItemStorageInventoryAreaLocation
    }
  }
`;
