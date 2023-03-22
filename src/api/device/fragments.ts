import { gql } from "@apollo/client";
import { OPERATOR_FRAGMENT } from "../1init/fragments";

export const DEVICE_INFO_FRAGMENT = gql`
  fragment DeviceInfo on DeviceInfo {
    brand
    device
    manufacturer
    model
    product
  }
`;

export const DEVICE_OPERATOR_FRAGMENT = gql`
  fragment DeviceOperator on DeviceOperator {
    id
    firstName
    lastName
  }
`;

export const DEVICE_OPERATOR_ACCESS_FRAGMENT = gql`
  fragment OperatorAccess on OperatorAccess {
    createdOn
    operator {
      ...DeviceOperator
    }
  }
  ${DEVICE_OPERATOR_FRAGMENT}
`;

export const DEVICE_FRAGMENT = gql`
  fragment Device on Device {
    id
    deviceUId
    companyId
    name
    teamId
    teamName
    operators
    deviceInfo {
      ...DeviceInfo
    }
    accessLog {
      ...OperatorAccess
    }
    status
    createdOn
    updatedOn
  }
  ${DEVICE_INFO_FRAGMENT}
  ${DEVICE_OPERATOR_ACCESS_FRAGMENT}
`;

export const DEVICE_DETAILS_FRAGMENT = gql`
  fragment DeviceDetails on DeviceDetails {
    device {
      ...Device
    }
    operators {
      ...Operator
    }
  }
  ${DEVICE_FRAGMENT}
  ${OPERATOR_FRAGMENT}
`;
