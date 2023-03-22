import { gql } from "@apollo/client";
import { CLONED_ITEM_FRAGMENT } from "../arrival/fragments";
import { CLONED_PRODUCT_FRAGMENT } from "../product/fragments";
import { CLONED_ITEM_DYNAMIC_CONTAINER_FRAGMENT } from "../storage/dynamicContainer/fragments";
import { CLONED_ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT } from "../storage/itemStorageInventoryAreaLocation/fragments";

export const DEPARTURE_COMMENT_FRAGMENT = gql`
  fragment DepartureComment on DepartureComment {
    type
    comment
    pickListId
    file
    date
    createdBy
    createdOn
  }
`;

export const DEPARTURE_FRAGMENT = gql`
  fragment Departure on Departure {
    id
    companyId
    externalOrderId
    externalCustomerId
    status
    placedOn
    isFulfilled
    isReadyToFulfill
    readyToFulfillOn
    fulfilledOn
    createdOn
    updatedOn
    comments {
      ...DepartureComment
    }
  }
  ${DEPARTURE_COMMENT_FRAGMENT}
`;

export const DEPARTURE_LINE_ITEM_FRAGMENT = gql`
  fragment DepartureLineItem on DepartureLineItem {
    id
    companyId
    departureId
    productId
    quantity
    itemId
    clonedProduct {
      ...ClonedProduct
    }
    clonedItem {
      ...ClonedItem
    }
    note
    pickListQuantity
    pickedQuantity
    createdOn
    updatedOn
    createdBy
  }
  ${CLONED_ITEM_FRAGMENT}
  ${CLONED_PRODUCT_FRAGMENT}
`;

export const DEPARTURE_PICK_LIST_FRAGMENT = gql`
  fragment DeparturePickList on DeparturePickList {
    id
    companyId
    departureId
    facilityId
    externalOrderId
    externalCustomerId
    dueDate
    shipVia
    createdOn
    updatedOn
  }
`;

export const DEPARTURE_PICK_LIST_LINE_ITEM_FRAGMENT = gql`
  fragment DeparturePickListLineItem on DeparturePickListLineItem {
    id
    companyId
    departureId
    pickListId
    productId
    quantity
    itemId
    pickedQuantity
    clonedProduct {
      ...ClonedProduct
    }
    clonedItem {
      ...ClonedItem
    }
    createdOn
    updatedOn
  }
  ${CLONED_ITEM_FRAGMENT}
  ${CLONED_PRODUCT_FRAGMENT}
`;

export const DEPARTURE_PICK_FRAGMENT = gql`
  fragment DeparturePick on DeparturePick {
    id
    companyId
    departureId
    pickListId
    createdOn
    updatedOn
  }
`;

export const DEPARTURE_PICK_LINE_ITEM_FRAGMENT = gql`
  fragment DeparturePickLineItem on DeparturePickLineItem {
    id
    companyId
    departureId
    pickListId
    pickId
    productId
    quantity
    itemId
    clonedProduct {
      ...ClonedProduct
    }
    clonedItem {
      ...ClonedItem
    }
    clonedItemStorageInventoryAreaLocation {
      ...ClonedItemStorageInventoryAreaLocation
    }
    clonedItemDynamicContainerPayload {
      ...ClonedItemDynamicContainerPayload
    }
    pickedBy
    createdOn
    updatedOn
  }
  ${CLONED_ITEM_FRAGMENT}
  ${CLONED_PRODUCT_FRAGMENT}
  ${CLONED_ITEM_STORAGE_INVENTORY_AREA_LOCATION_FRAGMENT}
  ${CLONED_ITEM_DYNAMIC_CONTAINER_FRAGMENT}
`;

export const DEPARTURE_DETAILS_FRAGMENT = gql`
  fragment DepartureDetails on DepartureDetails {
    departure {
      ...Departure
    }
    departureLineItems {
      ...DepartureLineItem
    }
    departurePickLists {
      ...DeparturePickList
    }
    departurePickListLineItems {
      ...DeparturePickListLineItem
    }
    departurePicks {
      ...DeparturePick
    }
    departurePickLineItems {
      ...DeparturePickLineItem
    }
  }
  ${DEPARTURE_FRAGMENT}
  ${DEPARTURE_LINE_ITEM_FRAGMENT}
  ${DEPARTURE_PICK_LIST_FRAGMENT}
  ${DEPARTURE_PICK_LIST_LINE_ITEM_FRAGMENT}
  ${DEPARTURE_PICK_FRAGMENT}
  ${DEPARTURE_PICK_LINE_ITEM_FRAGMENT}
`;
