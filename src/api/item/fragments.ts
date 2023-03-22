import { gql } from "@apollo/client";
import { INVENTORY_LOG_FRAGMENT } from "../inventoryRecord/fragments";
import { FACILITY_ITEM_FRAGMENT } from "../facilityItem/fragments";
import {
  ARRIVAL_DELIVERY_LINE_ITEM_FRAGMENT,
  ARRIVAL_LINE_ITEM_FRAGMENT,
  ARRIVAL_RELEASE_LINE_ITEM_FRAGMENT,
} from "../arrival/fragments";
import { ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT } from "../storage/itemStorageInventoryAreaLocation/fragments";
import { DYNAMIC_CONTAINER_FRAGMENT } from "../storage/dynamicContainer/fragments";
import { SUPPLIER_ITEM_FRAGMENT } from "../supplierItem/fragments";

export const ITEM_ARRIVAL_FRAGMENT = gql`
  fragment ItemArrival on ItemArrival {
    facilityId
    quantity
    releasedQuantity
    deliveredQuantity
    value
    releasedValue
    deliveredValue
  }
`;

export const ITEM_UNITS_OF_MEASURE_FRAGMENT = gql`
  fragment ItemUnitsOfMeasure on ItemUnitsOfMeasure {
    bom
    inventory
    weightPerBomUom
  }
`;

export const ITEM_FRAGMENT = gql`
  fragment Item on Item {
    id
    name
    partNumber
    status
    preferredBrand
    preferredBrandSku
    description
    category
    color
    configuration
    productUrl
    primarySupplierItemId
    classification
    expirable
    lotable
    shelfLife
    createdBy
    createdOn
    updatedOn
    arrivals {
      ...ItemArrival
    }
    unitsOfMeasure {
      bom
      weightPerBomUom
      inventory
    }
    defaultImageUrl
    inventory {
      facilityId
      ledger
      quantity
      value
    }
  }
  ${ITEM_ARRIVAL_FRAGMENT}
`;

export const ITEM_WITH_PRIMARY_SUPPLIER_FRAGMENT = gql`
  fragment ItemWithPrimarySupplier on ItemWithPrimarySupplier {
    id
    name
    partNumber
    status
    preferredBrand
    preferredBrandSku
    description
    category
    color
    configuration
    productUrl
    primarySupplierItemId
    classification
    createdBy
    createdOn
    updatedOn
    arrivals {
      ...ItemArrival
    }
    unitsOfMeasure {
      bom
      weightPerBomUom
      inventory
    }
    defaultImageUrl
    inventory {
      facilityId
      ledger
      quantity
      value
    }
    primarySupplier {
      name
    }
  }
  ${ITEM_ARRIVAL_FRAGMENT}
`;

export const ITEM_DETAILS_FRAGMENT = gql`
  fragment ItemDetails on ItemDetails {
    item {
      ...Item
    }
    inventoryLogs {
      ...InventoryLog
    }
    facilityItems {
      ...FacilityItem
    }
    dynamicContainers {
      ...DynamicContainer
    }
    itemStorageInventoryAreaLocations {
      ...ItemStorageInventoryAreaLocation
    }
    supplierItems {
      ...SupplierItem
    }
    arrivalLineItems {
      ...ArrivalLineItem
    }
    arrivalReleaseLineItems {
      ...ArrivalReleaseLineItem
    }
    arrivalDeliveryLineItems {
      ...ArrivalDeliveryLineItem
    }
  }
  ${ITEM_FRAGMENT}
  ${INVENTORY_LOG_FRAGMENT}
  ${FACILITY_ITEM_FRAGMENT}
  ${DYNAMIC_CONTAINER_FRAGMENT}
  ${ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  ${SUPPLIER_ITEM_FRAGMENT}
  ${ARRIVAL_LINE_ITEM_FRAGMENT}
  ${ARRIVAL_RELEASE_LINE_ITEM_FRAGMENT}
  ${ARRIVAL_DELIVERY_LINE_ITEM_FRAGMENT}
`;

export const ITEM_FILES_FRAGMENT = gql`
  fragment ItemFiles on Item {
    id
    name
    partNumber
    defaultImageUrl
    images {
      url
      fileName
      size
      updatedOn
    }
    videos {
      url
      fileName
      size
      updatedOn
    }
    files {
      url
      fileName
      size
      updatedOn
    }
  }
`;

export const ITEM_IMAGES_FRAGMENT = gql`
  fragment ItemImages on Item {
    id
    name
    partNumber
    defaultImageUrl
    images {
      url
      fileName
      size
      updatedOn
    }
    videos {
      url
      fileName
      size
      updatedOn
    }
    files {
      url
      fileName
      size
      updatedOn
    }
  }
`;
