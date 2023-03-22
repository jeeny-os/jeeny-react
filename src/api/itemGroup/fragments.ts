import { gql } from "@apollo/client";

export const ITEM_FRAGMENT = gql`
  fragment ItemForItemGroup on Item {
    id
    itemGroupId
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
`;

export const ITEM_GROUP_FRAGMENT = gql`
  fragment ItemGroup on ItemGroup {
    id
    companyId
    name
    description
    createdBy
    createdOn
    updatedOn
  }
`;

export const CLONED_ITEM_GROUP_FRAGMENT = gql`
  fragment ClonedItemGroup on ClonedItemGroup {
    name
    description
  }
`;

export const ITEM_GROUP_DETAILS_FRAGMENT = gql`
  ${ITEM_GROUP_FRAGMENT}
  ${ITEM_FRAGMENT}
  fragment ItemGroupDetails on ItemGroupDetails {
    itemGroup {
      ...ItemGroup
    }
    items {
      ...ItemForItemGroup
    }
    bidRequestLineItems {
      companyId
      bidRequestId
      bidRequestNumber
      isBidRequestLineItemClosed
      isBidRequestClosed
      itemId
      unitOfMeasure
      arrivalId
      winnerSupplierId
      type
      internalNote
      externalNote
      quantity
      targetPpu
      createdBy
      createdOn
      updatedOn
    }
    bidLineItems {
      companyId
      bidId
      bidRequestId
      bidRequestNumber
      isBidRequestClosed
      isBidRequestLineItemClosed
      isBidLineItemRejected
      isBidRejected
      supplierId
      itemId
      unitOfMeasure
      type
      internalNote
      quantity
      ppu
      validUntil
      bidDate
      createdBy
      createdOn
      updatedOn
    }
  }
`;

export const ITEM_GROUPS_WITH_ITEMS_FRAGMENT = gql`
  ${ITEM_GROUP_FRAGMENT}
  ${ITEM_FRAGMENT}
  fragment ItemGroupsWithItems on ItemGroupsWithItems {
    itemGroups {
      ...ItemGroup
    }
    items {
      ...ItemForItemGroup
    }
  }
`;
