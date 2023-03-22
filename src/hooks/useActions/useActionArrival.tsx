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
    values,
  }: UseActionGeneric<ArrivalActionInputs>) => {
    switch (action) {
      case "arrival.createArrival": {
        return await createArrival({
          variables: { data: values as JeenyTypes.ArrivalInput },
        });
      }

      case "arrival.saveArrival": {
        return await saveArrival({
          variables: { data: values as JeenyTypes.ArrivalUpdateInput },
        });
      }

      case "arrival.createArrivalRelease": {
        return await createArrivalRelease({
          variables: { data: values as JeenyTypes.ArrivalReleaseInput },
        });
      }

      case "arrival.saveArrivalRelease": {
        return await saveArrivalRelease({
          variables: { data: values as JeenyTypes.ArrivalReleaseUpdateInput },
        });
      }

      case "arrival.deleteArrivalRelease": {
        return await deleteArrivalRelease({
          variables: { data: values as JeenyTypes.ArrivalReleaseDeleteInput },
        });
      }

      case "arrival.createArrivalDelivery": {
        return await createArrivalDelivery({
          variables: { data: values as JeenyTypes.ArrivalDeliveryInput },
        });
      }

      case "arrival.saveArrivalDelivery": {
        return await saveArrivalDelivery({
          variables: { data: values as JeenyTypes.ArrivalDeliveryUpdateInput },
        });
      }

      case "arrival.deleteArrivalDelivery": {
        return await deleteArrivalDelivery({
          variables: { data: values as JeenyTypes.ArrivalDeliveryDeleteInput },
        });
      }

      case "arrival.createArrivalLineItem": {
        return await createArrivalLineItem({
          variables: { data: values as JeenyTypes.ArrivalLineItemInput },
        });
      }

      case "arrival.saveArrivalLineItem": {
        return await saveArrivalLineItem({
          variables: { data: values as JeenyTypes.ArrivalLineItemUpdateInput },
        });
      }

      case "arrival.deleteArrivalLineItem": {
        return await deleteArrivalLineItem({
          variables: { data: values as JeenyTypes.ArrivalLineItemDeleteInput },
        });
      }

      case "arrival.createArrivalReleaseLineItem": {
        return await createArrivalReleaseLineItem({
          variables: { data: values as JeenyTypes.ArrivalReleaseLineItemInput },
        });
      }

      case "arrival.saveArrivalReleaseLineItem": {
        return await saveArrivalReleaseLineItem({
          variables: {
            data: values as JeenyTypes.ArrivalReleaseLineItemUpdateInput,
          },
        });
      }

      case "arrival.deleteArrivalReleaseLineItem": {
        return await deleteArrivalReleaseLineItem({
          variables: {
            data: values as JeenyTypes.ArrivalReleaseLineItemDeleteInput,
          },
        });
      }

      case "arrival.createArrivalDeliveryLineItem": {
        return await createArrivalDeliveryLineItem({
          variables: {
            data: values as JeenyTypes.ArrivalDeliveryLineItemInput,
          },
        });
      }

      case "arrival.saveArrivalDeliveryLineItem": {
        return await saveArrivalDeliveryLineItem({
          variables: {
            data: values as JeenyTypes.ArrivalDeliveryLineItemUpdateInput,
          },
        });
      }
    }
  };

  return submit;
};
