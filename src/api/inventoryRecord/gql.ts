import { gql } from "@apollo/client";
import { INVENTORY_LOG_FRAGMENT, INVENTORY_RECORD_FRAGMENT } from "./fragments";

export const ADD_INVENTORY_RECORD = gql`
  ${INVENTORY_RECORD_FRAGMENT}
  mutation addInventoryRecord($data: InventoryRecordAdditionInput!) {
    addInventoryRecord(data: $data) {
      ...InventoryRecord
    }
  }
`;

export const DEDUCT_INVENTORY_RECORD = gql`
  ${INVENTORY_RECORD_FRAGMENT}
  mutation deductInventoryRecord($data: InventoryRecordDeductionInput!) {
    deductInventoryRecord(data: $data) {
      ...InventoryRecord
    }
  }
`;

export const GET_INVENTORY_LOGS = gql`
  ${INVENTORY_LOG_FRAGMENT}
  query getInventoryLogs(
    $itemId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getInventoryLogs(
      itemId: $itemId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...InventoryLog
      }
    }
  }
`;

export const TRANSFER_INVENTORY_BETWEEN_FACTORIES = gql`
  ${INVENTORY_RECORD_FRAGMENT}
  mutation transferInventoryBetweenFactories(
    $data: TransferInventoryBetweenFactoriesInput!
  ) {
    transferInventoryBetweenFactories(data: $data) {
      ...InventoryRecord
    }
  }
`;
