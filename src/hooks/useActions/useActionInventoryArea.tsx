import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { InventoryAreaActionInputs } from "../../types/actionInputs";
import { useInventoryAreaApi } from "../../api";

export const useActionInventoryArea = () => {
  const {
    createInventoryArea: { mutation: createInventoryArea },
    saveInventoryArea: { mutation: saveInventoryArea },
    deleteInventoryArea: { mutation: deleteInventoryArea },
  } = useInventoryAreaApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<InventoryAreaActionInputs>) => {
    switch (action) {
      case "inventoryArea.createInventoryArea": {
        return await createInventoryArea({
          ...mutationOptions,
          variables: values as {
            inventoryArea: JeenyTypes.FacilityInventoryAreaInput;
            rule: JeenyTypes.InventoryAreaRuleInput;
          },
        });
      }

      case "inventoryArea.saveInventoryArea": {
        return await saveInventoryArea({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.FacilityInventoryAreaUpdateInput,
          },
        });
      }

      case "inventoryArea.deleteInventoryArea": {
        return await deleteInventoryArea({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.FacilityInventoryAreaDeleteInput,
          },
        });
      }
    }
  };

  return submit;
};
