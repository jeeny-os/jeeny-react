// THESE FRAGMENTS NEED TO BE INITIALIZED BEFORE OTHER FRAGMENTS SO THEY CAN BE
// USED IN THOSE FRAGMENTS. FOR EXAMPLE OPERATOR COMES AFTER DEVICE SO DEVICE
// CAN'T USE THE OPERATOR FRAGMENT FROM "./operator"

import { gql } from "@apollo/client";

export const DEVICE_ACCESS_FRAGMENT = gql`
  fragment DeviceAccess on DeviceAccess {
    deviceId
    tokenId
    createdOn
  }
`;

export const SAFE_OPERATOR_FRAGMENT = gql`
  fragment SafeOperator on SafeOperator {
    id
    companyId
    firstName
    lastName
    language
    email
    mobilePhone
    status
    role
    teamId
    teamName
    facilityIds
    seenTutorials
    failedLoginAttempts
    lastLoginAttempt
    accessLog {
      ...DeviceAccess
    }
    createdOn
    createdBy
    updatedOn
  }
  ${DEVICE_ACCESS_FRAGMENT}
`;

export const OPERATOR_FRAGMENT = gql`
  fragment Operator on Operator {
    id
    companyId
    firstName
    lastName
    language
    email
    mobilePhone
    status
    role
    teamId
    teamName
    facilityIds
    seenTutorials
    failedLoginAttempts
    lastLoginAttempt
    accessLog {
      ...DeviceAccess
    }
    createdOn
    createdBy
    updatedOn
    pinCode
  }
  ${DEVICE_ACCESS_FRAGMENT}
`;
