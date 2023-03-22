import { gql } from "@apollo/client";
import { DEVICE_FRAGMENT } from "./fragments";

export const GET_DEVICE = gql`
  ${DEVICE_FRAGMENT}
  query getDevice($id: String!) {
    getDevice(id: $id) {
      ...Device
    }
  }
`;

export const GET_DEVICES = gql`
  ${DEVICE_FRAGMENT}
  query getDevices(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getDevices(limit: $limit, cursor: $cursor, filters: $filters) {
      cursor
      items {
        ...Device
      }
    }
  }
`;

export const SAVE_DEVICE = gql`
  ${DEVICE_FRAGMENT}
  mutation saveDevice($data: DeviceUpdateInput!, $id: String!) {
    saveDevice(data: $data, id: $id) {
      ...Device
    }
  }
`;

export const DELETE_DEVICE = gql`
  ${DEVICE_FRAGMENT}
  mutation deleteDevice($id: String!) {
    deleteDevice(id: $id) {
      ...Device
    }
  }
`;
