import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { DeviceActionInputs } from "../../types/actionInputs";
import { useDeviceApi } from "../../api";

export const useActionDevice = () => {
  const {
    saveDevice: { mutation: saveDevice },
    deleteDevice: { mutation: deleteDevice },
  } = useDeviceApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<DeviceActionInputs>) => {
    switch (action) {
      case "device.deleteDevice": {
        return await deleteDevice({
          ...mutationOptions,
          variables: values as {
            id: string;
          },
        });
      }

      case "device.saveDevice": {
        return await saveDevice({
          ...mutationOptions,
          variables: values as {
            id: string;
            data: JeenyTypes.DeviceUpdateInput;
          },
        });
      }
    }
  };

  return submit;
};
