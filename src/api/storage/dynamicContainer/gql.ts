import { gql } from "@apollo/client";
import { DYNAMIC_CONTAINER_FRAGMENT } from "./fragments";

export const GET_DYNAMIC_CONTAINER = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  query getDynamicContainer($id: String!, $facilityId: String!) {
    getDynamicContainer(id: $id, facilityId: $facilityId) {
      ...DynamicContainer
    }
  }
`;
export const GET_DYNAMIC_CONTAINERS = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  query getDynamicContainers(
    $facilityId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getDynamicContainers(
      facilityId: $facilityId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...DynamicContainer
      }
    }
  }
`;

export const GET_DYNAMIC_CONTAINERS_BY_EXPIRY = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  query getDynamicContainersByExpiry(
    $facilityId: String!
    $fromDate: String
    $toDate: String
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getDynamicContainersByExpiry(
      facilityId: $facilityId
      fromDate: $fromDate
      toDate: $toDate
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...DynamicContainer
      }
    }
  }
`;

export const CREATE_DYNAMIC_CONTAINER = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  mutation createDynamicContainer($data: DynamicContainerInput!) {
    createDynamicContainer(data: $data) {
      ...DynamicContainer
    }
  }
`;

export const SAVE_DYNAMIC_CONTAINER = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  mutation saveDynamicContainer($data: DynamicContainerUpdateInput!) {
    saveDynamicContainer(data: $data) {
      ...DynamicContainer
    }
  }
`;

export const ADJUST_DYNAMIC_CONTAINER_PAYLOAD_QUANTITY = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  mutation adjustDynamicContainerPayloadQuantity(
    $data: DynamicContainerAdjustPayloadQuantityInput!
  ) {
    adjustDynamicContainerPayloadQuantity(data: $data) {
      ...DynamicContainer
    }
  }
`;

export const ATTACH_DYNAMIC_CONTAINER = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  mutation attachDynamicContainer($data: DynamicContainerAttachInput!) {
    attachDynamicContainer(data: $data) {
      ...DynamicContainer
    }
  }
`;

export const DETACH_DYNAMIC_CONTAINER = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  mutation detachDynamicContainer($data: DynamicContainerDetachInput!) {
    detachDynamicContainer(data: $data) {
      ...DynamicContainer
    }
  }
`;

export const LOAD_DYNAMIC_CONTAINER = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  mutation loadDynamicContainer($data: DynamicContainerLoadInput!) {
    loadDynamicContainer(data: $data) {
      ...DynamicContainer
    }
  }
`;

export const DELETE_DYNAMIC_CONTAINER = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  mutation deleteDynamicContainer($data: DynamicContainerDeleteInput!) {
    deleteDynamicContainer(data: $data) {
      ...DynamicContainer
    }
  }
`;

export const SWITCH_DYNAMIC_CONTAINERS = gql`
  ${DYNAMIC_CONTAINER_FRAGMENT}
  mutation switchDynamicContainers(
    $facilityId: String!
    $box1Id: String!
    $box2Id: String!
  ) {
    switchDynamicContainers(
      facilityId: $facilityId
      box1Id: $box1Id
      box2Id: $box2Id
    ) {
      ...DynamicContainer
    }
  }
`;
