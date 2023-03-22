import { useLazyQuery, useMutation } from "@apollo/client";
import { KioskApi } from "./apiInterface";
import { DELETE_KIOSK, GET_KIOSK, GET_KIOSKS, SAVE_KIOSK } from "./gql";

export const useKioskApi = (custom?: KioskApi) => {
  const [getKiosk, { data: getKioskData, loading: getKioskLoading }] =
    useLazyQuery(
      custom?.getKiosk?.query || GET_KIOSK,
      custom?.getKiosk?.options
    );

  const [
    getKiosks,
    {
      data: getKiosksData,
      loading: getKiosksLoading,
      fetchMore: getKiosksFetchMore,
    },
  ] = useLazyQuery(
    custom?.getKiosks?.query || GET_KIOSKS,
    custom?.getKiosks?.options
  );

  const [saveKiosk, { data: saveKioskData, loading: saveKioskLoading }] =
    useMutation(
      custom?.saveKiosk?.mutation || SAVE_KIOSK,
      custom?.saveKiosk?.options
    );
  const [deleteKiosk, { data: deleteKioskData, loading: deleteKioskLoading }] =
    useMutation(
      custom?.deleteKiosk?.mutation || DELETE_KIOSK,
      custom?.deleteKiosk?.options
    );

  return {
    getKiosk: {
      query: getKiosk,
      data: getKioskData,
      loading: getKioskLoading,
    },
    getKiosks: {
      query: getKiosks,
      data: getKiosksData,
      fetchMore: getKiosksFetchMore,
      loading: getKiosksLoading,
    },
    saveKiosk: {
      mutation: saveKiosk,
      data: saveKioskData,
      loading: saveKioskLoading,
    },
    deleteKiosk: {
      mutation: deleteKiosk,
      data: deleteKioskData,
      loading: deleteKioskLoading,
    },
  };
};
