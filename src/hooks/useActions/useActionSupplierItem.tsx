import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { SupplierItemActionInputs } from "../../types/actionInputs";
import { useSupplierItemApi } from "../../api";

export const useActionSupplierItem = () => {
  const {
    createSupplierItem: { mutation: createSupplierItem },
    saveSupplierItem: { mutation: saveSupplierItem },
  } = useSupplierItemApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<SupplierItemActionInputs>) => {
    switch (action) {
      case "supplierItem.createSupplierItem": {
        return await createSupplierItem({
          variables: { data: values as JeenyTypes.SupplierItemInput },
        });
      }

      case "supplierItem.saveSupplierItem": {
        return await saveSupplierItem({
          variables: { data: values as JeenyTypes.SupplierItemInputUpdate },
        });
      }
    }
  };

  return submit;
};
