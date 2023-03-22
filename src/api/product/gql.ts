import { gql } from "@apollo/client";
import { PRODUCT_FRAGMENT } from "./fragments";

export const GET_PRODUCT = gql`
  ${PRODUCT_FRAGMENT}
  query getProduct($id: String!) {
    getProduct(id: $id) {
      ...Product
    }
  }
`;

export const GET_PRODUCTS = gql`
  ${PRODUCT_FRAGMENT}
  query getProducts {
    getProducts {
      cursor
      items {
        ...Product
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  ${PRODUCT_FRAGMENT}
  mutation createProduct($data: ProductInput!) {
    createProduct(data: $data) {
      ...Product
    }
  }
`;

export const SAVE_PRODUCT = gql`
  ${PRODUCT_FRAGMENT}
  mutation saveProduct($data: ProductUpdateInput!) {
    saveProduct(data: $data) {
      ...Product
    }
  }
`;
