import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { StorageInventoryAreaLocationActionInputs } from "../../types/actionInputs";
import { useStorageInventoryAreaLocationApi } from "../../api";

export const useActionStorageInventoryAreaLocation = () => {
  const {
    createStorageInventoryAreaLocation: {
      mutation: createStorageInventoryAreaLocation,
    },
    saveStorageInventoryAreaLocation: {
      mutation: saveStorageInventoryAreaLocation,
    },
    deleteStorageInventoryAreaLocation: {
      mutation: deleteStorageInventoryAreaLocation,
    },
  } = useStorageInventoryAreaLocationApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<StorageInventoryAreaLocationActionInputs>) => {
    switch (action) {
      case "storageInventoryAreaLocation.createStorageInventoryAreaLocation": {
        return await createStorageInventoryAreaLocation({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.StorageInventoryAreaLocationInput,
          },
        });
      }

      case "storageInventoryAreaLocation.saveStorageInventoryAreaLocation": {
        return await saveStorageInventoryAreaLocation({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.StorageInventoryAreaLocationUpdateInput,
          },
        });
      }

      case "storageInventoryAreaLocation.deleteStorageInventoryAreaLocation": {
        return await deleteStorageInventoryAreaLocation({
          ...mutationOptions,
          variables: values as {
            facilityId: string;
            aisle: string;
            bay: string;
            inventoryAreaId: string;
            position: string;
            shelf: string;
          },
        });
      }
    }
  };

  return submit;
};
