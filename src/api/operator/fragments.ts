import { gql } from "@apollo/client";
import { SAFE_OPERATOR_FRAGMENT } from "../1init/fragments";
import { DEVICE_FRAGMENT } from "../device/fragments";

export const OPERATOR_TOKEN_FRAGMENT = gql`
  fragment OperatorToken on OperatorToken {
    accessToken
    refreshToken
    status
  }
`;

export const OPERATOR_FAILED_LOGIN_FRAGMENT = gql`
  fragment OperatorFailedLogin on OperatorFailedLogin {
    coolDown
    remainingAttempts
    status
  }
`;

export const OPERATOR_LOGIN_RESULT_FRAGMENT = gql`
  fragment OperatorLoginResult on OperatorLoginResult {
    ... on OperatorToken {
      ...OperatorToken
    }
    ... on OperatorFailedLogin {
      ...OperatorFailedLogin
    }
  }
  ${OPERATOR_TOKEN_FRAGMENT}
  ${OPERATOR_FAILED_LOGIN_FRAGMENT}
`;
