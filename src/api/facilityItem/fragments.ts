import { gql } from "@apollo/client";

export const FACILITY_ITEM_FRAGMENT = gql`
  fragment FacilityItem on FacilityItem {
    itemId
    facilityId
    minQuantity
    maxQuantity
    minMaxReasoning
    status
    reorderStatus
    inventoryStrategies {
      ledger
      deduction
    }
    createdBy
    createdOn
    updatedOn
  }
`;
