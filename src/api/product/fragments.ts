import { gql } from "@apollo/client";

export const PRODUCT_FRAGMENT = gql`
  fragment Product on Product {
    id
    name
    companyId
    childType
    childId
    status
    sku
    createdOn
    updatedOn
  }
`;

export const CLONED_PRODUCT_FRAGMENT = gql`
  fragment ClonedProduct on ClonedProduct {
    name
    childType
    childId
    status
    sku
  }
`;
