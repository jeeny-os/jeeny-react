import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { FacilityActionInputs } from "../../types/actionInputs";
import { useFacilityApi } from "../../api/";

export const useActionFacility = () => {
  const {
    createFacility: { mutation: createFacility },
    saveFacility: { mutation: saveFacility },
  } = useFacilityApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<FacilityActionInputs>) => {
    switch (action) {
      case "facility.createFacility": {
        return await createFacility({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.FacilityInput },
        });
      }

      case "facility.saveFacility": {
        return await saveFacility({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.FacilityInputUpdate },
        });
      }
    }
  };

  return submit;
};
