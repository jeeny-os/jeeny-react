import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { AppActionInputs } from "../../types/actionInputs";
import { useAppApi } from "../../api";

export const useActionApp = () => {
  const {
    createCustomApp: { mutation: createApp },
    saveCustomApp: { mutation: saveApp },
  } = useAppApi();

  const submit = async ({
    action,
    values,
  }: UseActionGeneric<AppActionInputs>) => {
    switch (action) {
      case "app.createCustomApp": {
        return await createApp({
          variables: { data: values as JeenyTypes.CustomAppInput },
        });
      }

      case "app.saveCustomApp": {
        return await saveApp({
          variables: { data: values as JeenyTypes.CustomAppUpdateInput },
        });
      }
    }
  };

  return submit;
};
