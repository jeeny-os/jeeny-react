import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { ArrivalActionInputs } from "../../types/actionInputs";
import { useArrivalApi } from "../../api/";

export const useActionArrival = () => {
  const {
    createArrival: { mutation: createArrival },
    saveArrival: { mutation: saveArrival },
    createArrivalRelease: { mutation: createArrivalRelease },
    saveArrivalRelease: { mutation: saveArrivalRelease },
    deleteArrivalRelease: { mutation: deleteArrivalRelease },
    createArrivalDelivery: { mutation: createArrivalDelivery },
    saveArrivalDelivery: { mutation: saveArrivalDelivery },
    deleteArrivalDelivery: { mutation: deleteArrivalDelivery },
    createArrivalLineItem: { mutation: createArrivalLineItem },
    saveArrivalLineItem: { mutation: saveArrivalLineItem },
    deleteArrivalLineItem: { mutation: deleteArrivalLineItem },
    createArrivalReleaseLineItem: { mutation: createArrivalReleaseLineItem },
    saveArrivalReleaseLineItem: { mutation: saveArrivalReleaseLineItem },
    deleteArrivalReleaseLineItem: { mutation: deleteArrivalReleaseLineItem },
    createArrivalDeliveryLineItem: { mutation: createArrivalDeliveryLineItem },
    saveDeliveryLineItem: { mutation: saveArrivalDeliveryLineItem },
  } = useArrivalApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<ArrivalActionInputs>) => {
    switch (action) {
      case "arrival.createArrival": {
        return await createArrival({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalInput },
        });
      }

      case "arrival.saveArrival": {
        return await saveArrival({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalUpdateInput },
        });
      }

      case "arrival.createArrivalRelease": {
        return await createArrivalRelease({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalReleaseInput },
        });
      }

      case "arrival.saveArrivalRelease": {
        return await saveArrivalRelease({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalReleaseUpdateInput },
        });
      }

      case "arrival.deleteArrivalRelease": {
        return await deleteArrivalRelease({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalReleaseDeleteInput },
        });
      }

      case "arrival.createArrivalDelivery": {
        return await createArrivalDelivery({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalDeliveryInput },
        });
      }

      case "arrival.saveArrivalDelivery": {
        return await saveArrivalDelivery({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalDeliveryUpdateInput },
        });
      }

      case "arrival.deleteArrivalDelivery": {
        return await deleteArrivalDelivery({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalDeliveryDeleteInput },
        });
      }

      case "arrival.createArrivalLineItem": {
        return await createArrivalLineItem({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalLineItemInput },
        });
      }

      case "arrival.saveArrivalLineItem": {
        return await saveArrivalLineItem({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalLineItemUpdateInput },
        });
      }

      case "arrival.deleteArrivalLineItem": {
        return await deleteArrivalLineItem({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalLineItemDeleteInput },
        });
      }

      case "arrival.createArrivalReleaseLineItem": {
        return await createArrivalReleaseLineItem({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.ArrivalReleaseLineItemInput },
        });
      }

      case "arrival.saveArrivalReleaseLineItem": {
        return await saveArrivalReleaseLineItem({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ArrivalReleaseLineItemUpdateInput,
          },
        });
      }

      case "arrival.deleteArrivalReleaseLineItem": {
        return await deleteArrivalReleaseLineItem({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ArrivalReleaseLineItemDeleteInput,
          },
        });
      }

      case "arrival.createArrivalDeliveryLineItem": {
        return await createArrivalDeliveryLineItem({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ArrivalDeliveryLineItemInput,
          },
        });
      }

      case "arrival.saveArrivalDeliveryLineItem": {
        return await saveArrivalDeliveryLineItem({
          ...mutationOptions,
          variables: {
            data: values as JeenyTypes.ArrivalDeliveryLineItemUpdateInput,
          },
        });
      }
    }
  };

  return submit;
};
