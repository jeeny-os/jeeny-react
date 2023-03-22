import { gql } from "@apollo/client";

export const COMPANY_FRAGMENT = gql`
  fragment Company on Company {
    id
    status
    alias
    companyName
    logoUrl
    defaultCurrency
    customFields
    ledgers {
      label
      value
      description
    }
    companyAddress {
      street1
      street2
      city
      state
      zipCode
      phoneNumber
      emailAddress
    }
    integrations {
      service
      status
    }
    customFields
    createdBy
    createdOn
    updatedOn
  }
`;
