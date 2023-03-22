import { gql } from "@apollo/client";
import { SUPPLIER_ITEM_UNITS_OF_MEASURE_FRAGMENT } from "../supplierItem/fragments";

export const CLOSED_PARENT_FRAGMENT = gql`
  fragment ClosedParent on ClosedParent {
    type
    manualClosedOn
    manualClosedBy
  }
`;

export const CLONED_SUPPLIER_FRAGMENT = gql`
  fragment ClonedSupplier on ClonedSupplier {
    name
    status
    primaryPaymentType
  }
`;

export const ARRIVAL_COMMENT_FRAGMENT = gql`
  fragment ArrivalComment on ArrivalComment {
    type
    comment
    releaseId
    file
    date
    createdBy
    createdOn
  }
`;

export const ARRIVAL_FRAGMENT = gql`
  fragment Arrival on Arrival {
    id
    arrivalNumber
    supplierOrderNumber
    facilityId
    supplierId
    status
    isManualClosed
    isAutoClosed
    manualClosedBy
    manualClosedOn
    autoClosedOn
    externalNote
    internalNote
    type
    terms
    paymentType
    createdOn
    createdBy
    updatedOn
    comments {
      ...ArrivalComment
    }
    supplier {
      ...ClonedSupplier
    }
  }
  ${ARRIVAL_COMMENT_FRAGMENT}
  ${CLONED_SUPPLIER_FRAGMENT}
`;

export const ARRIVAL_WITH_STATUS_FRAGMENT = gql`
  fragment ArrivalWithStatus on ArrivalWithStatus {
    id
    arrivalNumber
    supplierOrderNumber
    facilityId
    supplierId
    status
    isClosed
    isManualClosed
    isAutoClosed
    manualClosedBy
    manualClosedOn
    autoClosedOn
    externalNote
    internalNote
    type
    terms
    paymentType
    createdOn
    createdBy
    updatedOn
    comments {
      ...ArrivalComment
    }
    supplier {
      ...ClonedSupplier
    }
  }
  ${ARRIVAL_COMMENT_FRAGMENT}
  ${CLONED_SUPPLIER_FRAGMENT}
`;

export const CLONED_SUPPLIER_ITEM_FRAGMENT = gql`
  fragment ClonedSupplierItem on ClonedSupplierItem {
    sku
    brand
    brandSku
    unitsOfMeasure {
      ...SupplierItemUnitsOfMeasure
    }
    productUrl
  }
  ${SUPPLIER_ITEM_UNITS_OF_MEASURE_FRAGMENT}
`;

export const CLONED_ITEM_FRAGMENT = gql`
  fragment ClonedItem on ClonedItem {
    name
    partNumber
    defaultImageUrl
    status
    category
    description
    unitsOfMeasure {
      bom
      inventory
      weightPerBomUom
    }
  }
`;

export const ARRIVAL_LINE_ITEM_FRAGMENT = gql`
  fragment ArrivalLineItem on ArrivalLineItem {
    arrivalId
    facilityId
    supplierItemId
    supplierId
    itemId
    isAutoClosed
    isManualClosed
    manualClosedBy
    manualClosedOn
    autoClosedOn
    pricePerUnit
    quantity
    releasedQuantity
    deliveredQuantity
    value
    releasedValue
    deliveredValue
    note
    createdBy
    createdOn
    updatedOn
    item {
      ...ClonedItem
    }
    supplierItem {
      ...ClonedSupplierItem
    }
  }
  ${CLONED_ITEM_FRAGMENT}
  ${CLONED_SUPPLIER_ITEM_FRAGMENT}
`;

export const ARRIVAL_LINE_ITEM_WITH_STATUS_FRAGMENT = gql`
  fragment ArrivalLineItemWithStatus on ArrivalLineItemWithStatus {
    arrivalId
    supplierItemId
    supplierId
    itemId
    isClosed
    isAutoClosed
    isManualClosed
    manualClosedBy
    manualClosedOn
    autoClosedOn
    closedParents {
      ...ClosedParent
    }
    pricePerUnit
    quantity
    releasedQuantity
    deliveredQuantity
    value
    releasedValue
    deliveredValue
    note
    createdBy
    createdOn
    updatedOn
    item {
      ...ClonedItem
    }
    supplierItem {
      ...ClonedSupplierItem
    }
  }
  ${CLONED_ITEM_FRAGMENT}
  ${CLONED_SUPPLIER_ITEM_FRAGMENT}
  ${CLOSED_PARENT_FRAGMENT}
`;

export const ARRIVAL_RELEASE_SURCHARGE_FRAGMENT = gql`
  fragment ArrivalReleaseSurcharge on ArrivalReleaseSurcharge {
    description
    amount
  }
`;

export const ARRIVAL_RELEASE_FRAGMENT = gql`
  fragment ArrivalRelease on ArrivalRelease {
    id
    facilityId
    arrivalId
    arrivalNumber
    arrivalScheduleId
    isAutoClosed
    isManualClosed
    manualClosedBy
    manualClosedOn
    autoClosedOn
    releasedDate
    supplierId
    supplier {
      ...ClonedSupplier
    }
    surcharges {
      ...ArrivalReleaseSurcharge
    }
    shipVia
    shippingCost
    salesTax
    dueDate
    createdBy
    createdOn
    updatedOn
  }
  ${CLONED_SUPPLIER_FRAGMENT}
  ${ARRIVAL_RELEASE_SURCHARGE_FRAGMENT}
`;

export const ARRIVAL_RELEASE_WITH_STATUS_FRAGMENT = gql`
  fragment ArrivalReleaseWithStatus on ArrivalReleaseWithStatus {
    id
    facilityId
    arrivalId
    arrivalNumber
    arrivalScheduleId
    isClosed
    isAutoClosed
    isManualClosed
    manualClosedBy
    manualClosedOn
    autoClosedOn
    releasedDate
    closedParents {
      ...ClosedParent
    }
    supplierId
    supplier {
      ...ClonedSupplier
    }
    surcharges {
      ...ArrivalReleaseSurcharge
    }
    shipVia
    shippingCost
    salesTax
    dueDate
    createdBy
    createdOn
    updatedOn
  }
  ${CLONED_SUPPLIER_FRAGMENT}
  ${CLOSED_PARENT_FRAGMENT}
  ${ARRIVAL_RELEASE_SURCHARGE_FRAGMENT}
`;

export const ARRIVAL_RELEASE_LINE_ITEM_FRAGMENT = gql`
  fragment ArrivalReleaseLineItem on ArrivalReleaseLineItem {
    releaseId
    arrivalId
    supplierItemId
    supplierId
    itemId
    isAutoClosed
    isManualClosed
    manualClosedBy
    manualClosedOn
    autoClosedOn
    pricePerUnit
    quantity
    deliveredQuantity
    value
    note
    createdBy
    createdOn
    updatedOn
  }
`;

export const ARRIVAL_RELEASE_LINE_ITEM_WITH_STATUS_FRAGMENT = gql`
  fragment ArrivalReleaseLineItemWithStatus on ArrivalReleaseLineItemWithStatus {
    releaseId
    arrivalId
    supplierItemId
    supplierId
    itemId
    isClosed
    isAutoClosed
    isManualClosed
    manualClosedBy
    manualClosedOn
    autoClosedOn
    closedParents {
      ...ClosedParent
    }
    pricePerUnit
    quantity
    deliveredQuantity
    value
    note
    createdBy
    createdOn
    updatedOn
  }
  ${CLOSED_PARENT_FRAGMENT}
`;

export const ARRIVAL_DELIVERY_FRAGMENT = gql`
  fragment ArrivalDelivery on ArrivalDelivery {
    id
    arrivalId
    arrivalNumber
    releaseId
    facilityId
    supplierId
    note
    supplierReceivingDocumentFile
    receivedAt
    receivedBy
    receivedOn
    createdBy
    createdOn
    updatedOn
  }
`;

export const ARRIVAL_DELIVERY_LINE_ITEM_FRAGMENT = gql`
  fragment ArrivalDeliveryLineItem on ArrivalDeliveryLineItem {
    deliveryId
    arrivalId
    supplierItemId
    releaseId
    quantity
    supplierId
    itemId
    note
    override
    createdBy
    createdOn
    updatedOn
  }
`;

export const ARRIVAL_DETAILS_FRAGMENT = gql`
  fragment ArrivalDetails on ArrivalDetails {
    arrival {
      ...Arrival
    }
    arrivalLineItems {
      ...ArrivalLineItem
    }
    arrivalReleases {
      ...ArrivalRelease
    }
    arrivalReleaseLineItems {
      ...ArrivalReleaseLineItem
    }
    arrivalDeliveries {
      ...ArrivalDelivery
    }
    arrivalDeliveryLineItems {
      ...ArrivalDeliveryLineItem
    }
  }
  ${ARRIVAL_FRAGMENT}
  ${ARRIVAL_LINE_ITEM_FRAGMENT}
  ${ARRIVAL_RELEASE_FRAGMENT}
  ${ARRIVAL_RELEASE_LINE_ITEM_FRAGMENT}
  ${ARRIVAL_DELIVERY_FRAGMENT}
  ${ARRIVAL_DELIVERY_LINE_ITEM_FRAGMENT}
`;

export const ARRIVAL_DETAILS_WITH_STATUS_FRAGMENT = gql`
  fragment ArrivalDetailsWithStatus on ArrivalDetailsWithStatus {
    arrival {
      ...ArrivalWithStatus
    }
    arrivalLineItems {
      ...ArrivalLineItemWithStatus
    }
    arrivalReleases {
      ...ArrivalReleaseWithStatus
    }
    arrivalReleaseLineItems {
      ...ArrivalReleaseLineItemWithStatus
    }
    arrivalDeliveries {
      ...ArrivalDelivery
    }
    arrivalDeliveryLineItems {
      ...ArrivalDeliveryLineItem
    }
  }
  ${ARRIVAL_WITH_STATUS_FRAGMENT}
  ${ARRIVAL_LINE_ITEM_WITH_STATUS_FRAGMENT}
  ${ARRIVAL_RELEASE_WITH_STATUS_FRAGMENT}
  ${ARRIVAL_RELEASE_LINE_ITEM_WITH_STATUS_FRAGMENT}
  ${ARRIVAL_DELIVERY_FRAGMENT}
  ${ARRIVAL_DELIVERY_LINE_ITEM_FRAGMENT}
`;
