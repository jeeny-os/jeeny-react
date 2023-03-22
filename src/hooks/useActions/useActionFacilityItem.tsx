import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { FacilityItemActionInputs } from "../../types/actionInputs";
import { useFacilityItemApi } from "../../api/";

export const useActionFacilityItem = () => {
  const {
    createFacilityItem: { mutation: createFacilityItem },
    saveFacilityItem: { mutation: saveFacilityItem },
  } = useFacilityItemApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<FacilityItemActionInputs>) => {
    switch (action) {
      case "facilityItem.createFacilityItem": {
        return await createFacilityItem({
          variables: { data: values as JeenyTypes.FacilityItemInput },
        });
      }

      case "facilityItem.saveFacilityItem": {
        return await saveFacilityItem({
          variables: { data: values as JeenyTypes.FacilityItemUpdateInput },
        });
      }
    }
  };

  return submit;
};
