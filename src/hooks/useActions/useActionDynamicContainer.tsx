import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { DynamicContainerActionInputs } from "../../types/actionInputs";
import { useDynamicContainerApi } from "../../api/";

export const useActionDynamicContainer = () => {
  const {
    createDynamicContainer: { mutation: createDynamicContainer },
    saveDynamicContainer: { mutation: saveDynamicContainer },
    deleteDynamicContainer: { mutation: deleteDynamicContainer },
    attachDynamicContainer: { mutation: attachDynamicContainer },
    detachDynamicContainer: { mutation: detachDynamicContainer },
    loadDynamicContainer: { mutation: loadDynamicContainer },
    switchDynamicContainers: { mutation: switchDynamicContainers },
  } = useDynamicContainerApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<DynamicContainerActionInputs>) => {
    switch (action) {
      case "dynamicContainer.createDynamicContainer": {
        return await createDynamicContainer({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.DynamicContainerInput },
        });
      }

      case "dynamicContainer.saveDynamicContainer": {
        return await saveDynamicContainer({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.DynamicContainerUpdateInput },
        });
      }

      case "dynamicContainer.deleteDynamicContainer": {
        return await deleteDynamicContainer({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.DynamicContainerDeleteInput },
        });
      }

      case "dynamicContainer.attachDynamicContainer": {
        return await attachDynamicContainer({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.DynamicContainerAttachInput },
        });
      }

      case "dynamicContainer.detachDynamicContainer": {
        return await detachDynamicContainer({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.DynamicContainerDetachInput },
        });
      }

      case "dynamicContainer.loadDynamicContainer": {
        return await loadDynamicContainer({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.DynamicContainerLoadInput },
        });
      }

      case "dynamicContainer.switchDynamicContainers": {
        return await switchDynamicContainers({
          ...mutationOptions,
          variables: values as {
            dynamicContainer1Id: string;
            dynamicContainer2Id: string;
            facilityId: string;
          },
        });
      }
    }
  };

  return submit;
};
