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
    values,
  }: UseActionGeneric<SupplierActionInputs>) => {
    switch (action) {
      case "supplier.createSupplier": {
        return await createSupplier({
          variables: { data: values as JeenyTypes.SupplierInput },
        });
      }

      case "supplier.saveSupplier": {
        return await saveSupplier({
          variables: { data: values as JeenyTypes.SupplierInputUpdate },
        });
      }
    }
  };

  return submit;
};
