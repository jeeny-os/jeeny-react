import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { ItemStorageInventoryAreaRuleActionInputs } from "../../types/actionInputs";
import { useItemStorageInventoryAreaRuleApi } from "../../api";

export const useActionItemStorageInventoryAreaRule = () => {
  const {
    createItemStorageInventoryAreaRule: {
      mutation: createItemStorageInventoryAreaRule,
    },
    saveItemStorageInventoryAreaRule: {
      mutation: saveItemStorageInventoryAreaRule,
    },
  } = useItemStorageInventoryAreaRuleApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<ItemStorageInventoryAreaRuleActionInputs>) => {
    switch (action) {
      case "itemStorageInventoryAreaRule.createItemStorageInventoryAreaRule": {
        return await createItemStorageInventoryAreaRule({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaRuleInput,
          },
        });
      }

      case "itemStorageInventoryAreaRule.saveItemStorageInventoryAreaRule": {
        return await saveItemStorageInventoryAreaRule({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaRuleUpdateInput,
          },
        });
      }
    }
  };

  return submit;
};
