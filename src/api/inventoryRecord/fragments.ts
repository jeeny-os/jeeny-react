import { gql } from "@apollo/client";

export const INVENTORY_RECORD_FRAGMENT = gql`
  fragment InventoryRecord on InventoryRecord {
    id
    companyId
    facilityId
    itemId
    supplierItemId
    arrivalId
    ledger
    createdOn
    createdBy
    previousRecordId
    fromRecordId
    totalQuantity
    totalValue
    priceCategoryQuantity
    availableQuantity
    isHead
    price
    quantity
    operation
    inventoryStrategy
    adjustedQuantity
    correctionType
  }
`;

export const INVENTORY_LOG_FRAGMENT = gql`
  fragment InventoryLog on InventoryLog {
    facilityId
    itemId
    ledger
    price
    quantity
    supplierItemId
    arrivalId
    arrivalReleaseId
    arrivalDeliveryId
    correctionType
    reason
    createdOn
    createdBy
    operation
    status
    failReason
  }
`;
