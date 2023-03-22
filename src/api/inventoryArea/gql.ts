import { gql } from "@apollo/client";
import {
  FACILITY_INVENTORY_AREA_FOR_LIST_FRAGMENT,
  FACILITY_INVENTORY_AREA_FRAGMENT,
  STORAGE_INVENTORY_AREA_FRAGMENT,
} from "./fragments";

export const GET_INVENTORY_AREA = gql`
  ${STORAGE_INVENTORY_AREA_FRAGMENT}
  query getInventoryArea($facilityId: String!, $inventoryAreaId: String!) {
    getInventoryArea(
      facilityId: $facilityId
      inventoryAreaId: $inventoryAreaId
    ) {
      ...StorageInventoryArea
    }
  }
`;

export const CREATE_INVENTORY_AREA = gql`
  ${FACILITY_INVENTORY_AREA_FRAGMENT}
  mutation createInventoryArea(
    $rule: InventoryAreaRuleInput!
    $inventoryArea: FacilityInventoryAreaInput!
  ) {
    createInventoryArea(rule: $rule, inventoryArea: $inventoryArea) {
      ...FacilityInventoryArea
    }
  }
`;

export const SAVE_INVENTORY_AREA = gql`
  ${FACILITY_INVENTORY_AREA_FRAGMENT}
  mutation saveInventoryArea($data: FacilityInventoryAreaUpdateInput!) {
    saveInventoryArea(data: $data) {
      ...FacilityInventoryArea
    }
  }
`;

export const DELETE_INVENTORY_AREA = gql`
  ${FACILITY_INVENTORY_AREA_FRAGMENT}
  mutation deleteInventoryArea($data: FacilityInventoryAreaDeleteInput!) {
    deleteInventoryArea(data: $data) {
      inventoryAreas {
        ...FacilityInventoryArea
      }
    }
  }
`;
