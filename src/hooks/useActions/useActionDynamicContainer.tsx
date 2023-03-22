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
    values,
  }: UseActionGeneric<DynamicContainerActionInputs>) => {
    switch (action) {
      case "dynamicContainer.createDynamicContainer": {
        return await createDynamicContainer({
          variables: { data: values as JeenyTypes.DynamicContainerInput },
        });
      }

      case "dynamicContainer.saveDynamicContainer": {
        return await saveDynamicContainer({
          variables: { data: values as JeenyTypes.DynamicContainerUpdateInput },
        });
      }

      case "dynamicContainer.deleteDynamicContainer": {
        return await deleteDynamicContainer({
          variables: { data: values as JeenyTypes.DynamicContainerDeleteInput },
        });
      }

      case "dynamicContainer.attachDynamicContainer": {
        return await attachDynamicContainer({
          variables: { data: values as JeenyTypes.DynamicContainerAttachInput },
        });
      }

      case "dynamicContainer.detachDynamicContainer": {
        return await detachDynamicContainer({
          variables: { data: values as JeenyTypes.DynamicContainerDetachInput },
        });
      }

      case "dynamicContainer.loadDynamicContainer": {
        return await loadDynamicContainer({
          variables: { data: values as JeenyTypes.DynamicContainerLoadInput },
        });
      }

      case "dynamicContainer.switchDynamicContainers": {
        return await switchDynamicContainers({
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
