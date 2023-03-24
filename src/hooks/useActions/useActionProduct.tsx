import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { ProductActionInputs } from "../../types/actionInputs";
import { useProductApi } from "../../api";

export const useActionProduct = () => {
  const {
    createProduct: { mutation: createProduct },
    saveProduct: { mutation: saveProduct },
  } = useProductApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<ProductActionInputs>) => {
    switch (action) {
      case "product.createProduct": {
        return await createProduct({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ProductInput },
        });
      }

      case "product.saveProduct": {
        return await saveProduct({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ProductUpdateInput },
        });
      }
    }
  };

  return submit;
};
