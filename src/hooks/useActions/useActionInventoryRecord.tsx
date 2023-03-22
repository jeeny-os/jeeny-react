import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { InventoryRecordActionInputs } from "../../types/actionInputs";
import { useInventoryRecordApi } from "../../api";

export const useActionInventoryRecord = () => {
  const {
    addInventoryRecord: { mutation: addInventoryRecord },
    deductInventoryRecord: { mutation: deductInventoryRecord },
  } = useInventoryRecordApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<InventoryRecordActionInputs>) => {
    switch (action) {
      case "inventoryRecord.addInventoryRecord": {
        return await addInventoryRecord({
          variables: {
            data: values as JeenyTypes.InventoryRecordAdditionInput,
          },
        });
      }

      case "inventoryRecord.deductInventoryRecord": {
        return await deductInventoryRecord({
          variables: {
            data: values as JeenyTypes.InventoryRecordDeductionInput,
          },
        });
      }
    }
  };

  return submit;
};
