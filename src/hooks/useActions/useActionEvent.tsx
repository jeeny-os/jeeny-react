import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { EventActionInputs } from "../../types/actionInputs";
import { useEventApi } from "../../api/";

export const useActionEvent = () => {
  const {
    createEvent: { mutation: createEvent },
    deleteEvent: { mutation: deleteEvent },
    saveEvent: { mutation: saveEvent },
  } = useEventApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<EventActionInputs>) => {
    switch (action) {
      case "event.createEvent": {
        return await createEvent({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.EventInput },
        });
      }
      case "event.deleteEvent": {
        return await deleteEvent({
          ...mutationOptions,
          variables: values as JeenyTypes.MutationDeleteEventArgs,
        });
      }

      case "event.saveEvent": {
        return await saveEvent({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.EventUpdateInput },
        });
      }
    }
  };

  return submit;
};
