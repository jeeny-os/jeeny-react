import { gql } from "@apollo/client";

import {
  STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT,
  STORAGE_INVENTORY_AREA_LOCATION_PAYLOAD_FRAGMENT,
} from "./fragments";

export const GET_STORAGE_INVENTORY_AREA_LOCATION = gql`
  ${STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  query getStorageInventoryAreaLocation($id: String!) {
    getStorageInventoryAreaLocation(id: $id) {
      ...StorageInventoryAreaLocation
    }
  }
`;

export const GET_STORAGE_INVENTORY_AREA_LOCATIONS_PAYLOAD = gql`
  ${STORAGE_INVENTORY_AREA_LOCATION_PAYLOAD_FRAGMENT}
  query getStorageInventoryAreaLocationsPayload(
    $facilityId: String!
    $partialInventoryAreaLocation: PartialInventoryAreaLocationInput
  ) {
    getStorageInventoryAreaLocationsPayload(
      facilityId: $facilityId
      partialInventoryAreaLocation: $partialInventoryAreaLocation
    ) {
      ...StorageInventoryAreaLocationPayload
    }
  }
`;

export const GET_STORAGE_INVENTORY_AREA_LOCATIONS = gql`
  ${STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  query getStorageInventoryAreaLocations(
    $facilityId: String!
    $inventoryAreaId: String
    $aisle: String
    $bay: String
    $shelf: String
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getStorageInventoryAreaLocations(
      facilityId: $facilityId
      inventoryAreaId: $inventoryAreaId
      aisle: $aisle
      bay: $bay
      shelf: $shelf
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...StorageInventoryAreaLocation
      }
    }
  }
`;

export const CREATE_STORAGE_INVENTORY_AREA_LOCATION = gql`
  ${STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  mutation createStorageInventoryAreaLocation(
    $data: StorageInventoryAreaLocationInput!
  ) {
    createStorageInventoryAreaLocation(data: $data) {
      ...StorageInventoryAreaLocation
    }
  }
`;

export const SAVE_STORAGE_INVENTORY_AREA_LOCATION = gql`
  ${STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  mutation saveStorageInventoryAreaLocation(
    $data: StorageInventoryAreaLocationUpdateInput!
  ) {
    saveStorageInventoryAreaLocation(data: $data) {
      ...StorageInventoryAreaLocation
    }
  }
`;

export const DELETE_STORAGE_INVENTORY_AREA_LOCATION = gql`
  ${STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  mutation deleteStorageInventoryAreaLocation(
    $facilityId: String!
    $inventoryAreaId: String!
    $aisle: String!
    $bay: String!
    $shelf: String!
    $position: String!
  ) {
    deleteStorageInventoryAreaLocation(
      facilityId: $facilityId
      inventoryAreaId: $inventoryAreaId
      aisle: $aisle
      bay: $bay
      shelf: $shelf
      position: $position
    ) {
      ...StorageInventoryAreaLocation
    }
  }
`;
