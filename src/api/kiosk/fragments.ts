import { gql } from "@apollo/client";

export const KIOSK_FRAGMENT = gql`
  fragment Kiosk on Kiosk {
    id
    createdOn
    updatedOn
    properties {
      name
      value
    }
    status
    name
    refreshTokenId
    accessTokenId
    installationCode
  }
`;
