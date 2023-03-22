import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { ItemStorageInventoryAreaLocationActionInputs } from "../../types/actionInputs";
import { useItemStorageInventoryAreaLocationApi } from "../../api";

export const useActionItemStorageInventoryAreaLocation = () => {
  const {
    createItemStorageInventoryAreaLocation: {
      mutation: createItemStorageInventoryAreaLocation,
    },
    saveItemStorageInventoryAreaLocation: {
      mutation: saveItemStorageInventoryAreaLocation,
    },
    deleteItemStorageInventoryAreaLocation: {
      mutation: deleteItemStorageInventoryAreaLocation,
    },
    handleItemStorageInventoryAreaLocation: {
      mutation: handleItemStorageInventoryAreaLocation,
    },
  } = useItemStorageInventoryAreaLocationApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<ItemStorageInventoryAreaLocationActionInputs>) => {
    switch (action) {
      case "itemStorageInventoryAreaLocation.createItemStorageInventoryAreaLocation": {
        return await createItemStorageInventoryAreaLocation({
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaLocationInput,
          },
        });
      }

      case "itemStorageInventoryAreaLocation.saveItemStorageInventoryAreaLocation": {
        return await saveItemStorageInventoryAreaLocation({
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaLocationUpdateInput,
          },
        });
      }

      case "itemStorageInventoryAreaLocation.deleteItemStorageInventoryAreaLocation": {
        return await deleteItemStorageInventoryAreaLocation({
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaLocationDeleteInput,
          },
        });
      }

      case "itemStorageInventoryAreaLocation.handleItemStorageInventoryAreaLocation": {
        return await handleItemStorageInventoryAreaLocation({
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaLocationHandleInput,
          },
        });
      }
    }
  };

  return submit;
};
