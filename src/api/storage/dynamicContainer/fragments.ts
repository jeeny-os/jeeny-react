import { gql } from "@apollo/client";

export const DYNAMIC_CONTAINER_PAYLOAD_FRAGMENT = gql`
  fragment ItemDynamicContainerPayload on ItemDynamicContainerPayload {
    itemId
    name
    partNumber
    defaultImageUrl
    unitsOfMeasure {
      bom
      inventory
      weightPerBomUom
    }
    primary
    quantity
    ppu
    expiry
    endOfShelfLife
    lot
    arrivalDeliveryId
    pickable
    createdBy
    createdOn
    updatedOn
    updatedBy
  }
`;

export const DYNAMIC_CONTAINER_FRAGMENT = gql`
  fragment DynamicContainer on DynamicContainer {
    id
    companyId
    readableId
    facilityId
    status
    type
    capacity
    height
    width
    depth
    createdBy
    createdOn
    updatedOn
    payload {
      type
      payload {
        __typename
        ... on ItemDynamicContainerPayload {
          itemId
          name
          partNumber
          defaultImageUrl
          unitsOfMeasure {
            bom
            inventory
            weightPerBomUom
          }
          primary
          quantity
          ppu
          arrivalDeliveryId
          pickable
          expiry
          lot
          endOfShelfLife
          createdBy
          createdOn
          updatedOn
          updatedBy
        }
      }
    }
    location {
      type
      location {
        __typename
        ... on InventoryAreaLocation {
          inventoryAreaId
          aisle
          bay
          shelf
          position
        }
      }
    }
  }
`;

export const CLONED_ITEM_DYNAMIC_CONTAINER_FRAGMENT = gql`
  fragment ClonedItemDynamicContainerPayload on ClonedItemDynamicContainerPayload {
    quantity
    arrivalDeliveryId
    ppu
  }
`;
