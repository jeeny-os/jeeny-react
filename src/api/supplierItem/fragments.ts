import { gql } from "@apollo/client";

export const SUPPLIER_ITEM_UNITS_OF_MEASURE_FRAGMENT = gql`
  fragment SupplierItemUnitsOfMeasure on SupplierItemUnitsOfMeasure {
    purchaseUnitOfMeasure
    bomInParent
    inventoryInParent
    flipBomParentCountMethod
    flipInvParentCountMethod
    customPurToInv {
      descriptor
      unitOfMeasure
      amountInParent
      flipSelfParentCountMethod
    }
    customInvToBom {
      descriptor
      unitOfMeasure
      amountInParent
      flipSelfParentCountMethod
    }
  }
`;

export const SUPPLIER_ITEM_FRAGMENT = gql`
  fragment SupplierItem on SupplierItem {
    id
    companyId
    status
    itemId
    supplierId
    sku
    brand
    brandSku
    productUrl
    howToOrder
    primaryContactId
    damagedGoodsContactId
    replacementInstructions
    multiplesOf
    leadTimeInHours
    transitTimeInHours
    carrierType
    shipVia
    pointOfOrigin
    item {
      name
      partNumber
      category
      defaultImageUrl
      status
      inventory {
        facilityId
        ledger
        quantity
        value
      }
      arrivals {
        facilityId
        quantity
        releasedQuantity
        deliveredQuantity
      }
      primarySupplierItemId
      facilityItem {
        facilityId
        minQuantity
        maxQuantity
      }
      unitsOfMeasure {
        bom
        inventory
        weightPerBomUom
      }
    }
    supplier {
      name
    }
    unitsOfMeasure {
      ...SupplierItemUnitsOfMeasure
    }
    deliveryContainer {
      unitOfMeasure
      length
      width
      height
      weight
      cubicFeet
    }
    minimumOrderQuantity
    priceTiers {
      tierStart
      tierEnd
      status
      priceHistory {
        date
        amount
      }
    }
    performanceRating
    createdBy
    createdOn
  }
  ${SUPPLIER_ITEM_UNITS_OF_MEASURE_FRAGMENT}
`;
