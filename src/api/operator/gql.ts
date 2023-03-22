import { gql } from "@apollo/client";
import { OPERATOR_FRAGMENT, SAFE_OPERATOR_FRAGMENT } from "../1init/fragments";

export const GET_OPERATOR = gql`
  ${SAFE_OPERATOR_FRAGMENT}
  query getOperator($id: String!) {
    getOperator(id: $id) {
      ...SafeOperator
    }
  }
`;

export const GET_OPERATOR_DETAILS = gql`
  ${OPERATOR_FRAGMENT}
  query getOperatorDetails($id: String!) {
    getOperatorDetails(id: $id) {
      ...Operator
    }
  }
`;

export const GET_OPERATORS = gql`
  ${SAFE_OPERATOR_FRAGMENT}
  query getOperators(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getOperators(limit: $limit, cursor: $cursor, filters: $filters) {
      cursor
      items {
        ...SafeOperator
      }
    }
  }
`;

export const GET_OPERATORS_BY_DEVICE = gql`
  ${SAFE_OPERATOR_FRAGMENT}
  query getOperatorsByDevice($deviceId: String!) {
    getOperatorsByDevice(deviceId: $deviceId) {
      ...SafeOperator
    }
  }
`;

export const GET_OPERATORS_BY_TEAM_ID = gql`
  ${SAFE_OPERATOR_FRAGMENT}
  query getOperatorsByTeamId(
    $teamId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getOperatorsByTeamId(
      teamId: $teamId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...SafeOperator
      }
    }
  }
`;

export const CREATE_OPERATOR = gql`
  ${OPERATOR_FRAGMENT}
  mutation createOperator($data: OperatorInput!) {
    createOperator(data: $data) {
      ...Operator
    }
  }
`;

export const SAVE_OPERATOR = gql`
  ${SAFE_OPERATOR_FRAGMENT}
  mutation saveOperator($data: OperatorInputUpdate!) {
    saveOperator(data: $data) {
      ...SafeOperator
    }
  }
`;
