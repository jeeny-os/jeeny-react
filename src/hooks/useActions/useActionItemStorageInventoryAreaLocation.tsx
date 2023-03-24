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
    mutationOptions = {},
    values,
  }: UseActionGeneric<ItemStorageInventoryAreaLocationActionInputs>) => {
    switch (action) {
      case "itemStorageInventoryAreaLocation.createItemStorageInventoryAreaLocation": {
        return await createItemStorageInventoryAreaLocation({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaLocationInput,
          },
        });
      }

      case "itemStorageInventoryAreaLocation.saveItemStorageInventoryAreaLocation": {
        return await saveItemStorageInventoryAreaLocation({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaLocationUpdateInput,
          },
        });
      }

      case "itemStorageInventoryAreaLocation.deleteItemStorageInventoryAreaLocation": {
        return await deleteItemStorageInventoryAreaLocation({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaLocationDeleteInput,
          },
        });
      }

      case "itemStorageInventoryAreaLocation.handleItemStorageInventoryAreaLocation": {
        return await handleItemStorageInventoryAreaLocation({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ItemStorageInventoryAreaLocationHandleInput,
          },
        });
      }
    }
  };

  return submit;
};
