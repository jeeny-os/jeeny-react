import { gql } from "@apollo/client";
import {
  ADDRESS_FRAGMENT,
  CONTACT_FRAGMENT,
  NOTE_FRAGMENT,
} from "../fragments/common";

export const SUPPLIER_FRAGMENT = gql`
  ${ADDRESS_FRAGMENT}
  ${CONTACT_FRAGMENT}
  ${NOTE_FRAGMENT}
  fragment Supplier on Supplier {
    id
    status
    name
    website
    phoneNumber
    terms
    primaryPaymentType
    customerNumber
    defaultImageUrl
    createdOn
    createdBy
    updatedOn
    address {
      ...Address
    }
    shippingAddress {
      ...Address
    }
    contacts {
      ...Contact
    }
    notes {
      ...Note
    }
  }
`;

export const SUPPLIERS_FRAGMENT = gql`
  ${SUPPLIER_FRAGMENT}
  fragment SupplierQueryResponse on SupplierQueryResponse {
    cursor
    items {
      ...Supplier
    }
  }
`;
