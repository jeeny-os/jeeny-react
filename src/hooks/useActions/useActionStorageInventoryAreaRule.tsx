import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { StorageInventoryAreaRuleActionInputs } from "../../types/actionInputs";
import { useStorageInventoryAreaRuleApi } from "../../api";

export const useActionStorageInventoryAreaRule = () => {
  const {
    createStorageInventoryAreaRule: {
      mutation: createStorageInventoryAreaRule,
    },
    updateStorageInventoryAreaRule: {
      mutation: updateStorageInventoryAreaRule,
    },
  } = useStorageInventoryAreaRuleApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<StorageInventoryAreaRuleActionInputs>) => {
    switch (action) {
      case "storageInventoryAreaRule.createStorageInventoryAreaRule": {
        return await createStorageInventoryAreaRule({
          variables: {
            data: values as JeenyTypes.StorageInventoryAreaRuleInput,
          },
        });
      }

      case "storageInventoryAreaRule.updateStorageInventoryAreaRule": {
        return await updateStorageInventoryAreaRule({
          variables: {
            data: values as JeenyTypes.StorageInventoryAreaRuleUpdateInput,
          },
        });
      }
    }
  };

  return submit;
};
