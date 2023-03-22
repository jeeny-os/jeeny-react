import { useLazyQuery, useMutation } from "@apollo/client";
import { ProductApi } from "./apiInterface";
import { CREATE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, SAVE_PRODUCT } from "./gql";

export const useProductApi = (custom?: ProductApi) => {
  const [getProduct, { data: getProductData, loading: getProductLoading }] =
    useLazyQuery(
      custom?.getProduct?.query || GET_PRODUCT,
      custom?.getProduct?.options
    );

  const [
    getProducts,
    {
      data: getProductsData,
      loading: getProductsLoading,
      fetchMore: getProductsFetchMore,
    },
  ] = useLazyQuery(
    custom?.getProducts?.query || GET_PRODUCTS,
    custom?.getProducts?.options
  );

  const [
    createProduct,
    { data: createProductData, loading: createProductLoading },
  ] = useMutation(
    custom?.createProduct?.mutation || CREATE_PRODUCT,
    custom?.createProduct?.options
  );

  const [saveProduct, { data: saveProductData, loading: saveProductLoading }] =
    useMutation(
      custom?.saveProduct?.mutation || SAVE_PRODUCT,
      custom?.saveProduct?.options
    );

  return {
    getProduct: {
      query: getProduct,
      data: getProductData,
      loading: getProductLoading,
    },
    getProducts: {
      query: getProducts,
      data: getProductsData,
      fetchMore: getProductsFetchMore,
      loading: getProductsLoading,
    },
    createProduct: {
      mutation: createProduct,
      data: createProductData,
      loading: createProductLoading,
    },
    saveProduct: {
      mutation: saveProduct,
      data: saveProductData,
      loading: saveProductLoading,
    },
  };
};
