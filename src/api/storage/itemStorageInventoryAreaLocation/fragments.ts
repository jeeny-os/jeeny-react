import { gql } from "@apollo/client";

export const ITEM_STORAGE_INVENTORY_AREA_PPU = gql`
  fragment ItemStorageInventoryAreaPpu on ItemStorageInventoryAreaPpu {
    quantity
    price
  }
`;

export const ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT = gql`
  fragment ItemStorageInventoryAreaLocation on ItemStorageInventoryAreaLocation {
    createdBy
    createdOn
    updatedOn
    updatedBy
    itemId
    facilityId
    inventoryAreaId
    aisle
    bay
    shelf
    position
    quantity
    ppus {
      ...ItemStorageInventoryAreaPpu
    }
    arrivalDeliveryIds
    minQuantity
    maxQuantity
    status
    refillStatus
    # extends cloned item
    name
    partNumber
    defaultImageUrl
    unitsOfMeasure {
      bom
      weightPerBomUom
      inventory
    }
    status
    category
  }
  ${ITEM_STORAGE_INVENTORY_AREA_PPU}
`;

export const CLONED_ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT = gql`
  fragment ClonedItemStorageInventoryAreaLocation on ClonedItemStorageInventoryAreaLocation {
    inventoryAreaId
    aisle
    bay
    shelf
    position
    ppus {
      ...ItemStorageInventoryAreaPpu
    }
    arrivalDeliveryIds
    quantity
  }
  ${ITEM_STORAGE_INVENTORY_AREA_PPU}
`;
