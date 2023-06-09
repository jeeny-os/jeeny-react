import { useItemGroupApi } from "../../api";
import { ItemGroupActionInputs } from "../../types/actionInputs";
import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";

export const useActionItemGroup = () => {
  const {
    createItemGroup: { mutation: createItemGroup },
    deleteItemGroup: { mutation: deleteItemGroup },
    saveItemGroup: { mutation: saveItemGroup },
  } = useItemGroupApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<ItemGroupActionInputs>) => {
    switch (action) {
      case "itemGroup.createItemGroup": {
        return await createItemGroup({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ItemGroupInput },
        });
      }

      case "itemGroup.saveItemGroup": {
        return await saveItemGroup({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ItemGroupUpdateInput },
        });
      }

      case "itemGroup.deleteItemGroup": {
        return await deleteItemGroup({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ItemGroupDeleteInput },
        });
      }
    }
  };

  return submit;
};
