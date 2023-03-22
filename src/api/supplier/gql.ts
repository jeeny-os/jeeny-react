import { gql } from "@apollo/client";
import { SUPPLIER_FRAGMENT } from "./fragments";

export const GET_SUPPLIER = gql`
  ${SUPPLIER_FRAGMENT}
  query getSupplier($id: String!) {
    getSupplier(id: $id) {
      ...Supplier
    }
  }
`;

export const GET_SUPPLIERS = gql`
  ${SUPPLIER_FRAGMENT}
  query getSuppliers(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getSuppliers(limit: $limit, cursor: $cursor, filters: $filters) {
      cursor
      items {
        ...Supplier
      }
    }
  }
`;

export const CREATE_SUPPLIER = gql`
  ${SUPPLIER_FRAGMENT}
  mutation createSupplier($data: SupplierInput!) {
    createSupplier(data: $data) {
      ...Supplier
    }
  }
`;

export const SAVE_SUPPLIER = gql`
  ${SUPPLIER_FRAGMENT}
  mutation saveSupplier($data: SupplierInputUpdate!) {
    saveSupplier(data: $data) {
      ...Supplier
    }
  }
`;
