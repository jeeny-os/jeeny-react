import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { SupplierActionInputs } from "../../types/actionInputs";
import { useSupplierApi } from "../../api";

export const useActionSupplier = () => {
  const {
    createSupplier: { mutation: createSupplier },
    saveSupplier: { mutation: saveSupplier },
  } = useSupplierApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<SupplierActionInputs>) => {
    switch (action) {
      case "supplier.createSupplier": {
        return await createSupplier({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.SupplierInput },
        });
      }

      case "supplier.saveSupplier": {
        return await saveSupplier({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.SupplierInputUpdate },
        });
      }
    }
  };

  return submit;
};
