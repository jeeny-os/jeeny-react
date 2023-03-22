import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { ItemActionInputs } from "../../types/actionInputs";
import { useItemApi } from "../../api";

export const useActionItem = () => {
  const {
    createItem: { mutation: createItem },
    saveItem: { mutation: saveItem },
  } = useItemApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<ItemActionInputs>) => {
    switch (action) {
      case "item.createItem": {
        return await createItem({
          variables: { data: values as JeenyTypes.ItemInput },
        });
      }

      case "item.saveItem": {
        return await saveItem({
          variables: { data: values as JeenyTypes.ItemInputUpdate },
        });
      }
    }
  };

  return submit;
};
