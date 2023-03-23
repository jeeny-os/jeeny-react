import { useLazyQuery } from "@apollo/client";
import { AppApi } from "./apiInterface";
import { GET_APPS, GET_CUSTOM_APP, GET_INSTALLED_OFFICIAL_APP } from "./gql";

export const useAppApi = (custom?: AppApi) => {
  const [
    getInstalledOfficialApp,
    {
      data: getInstalledOfficialAppData,
      loading: getInstalledOfficialAppLoading,
    },
  ] = useLazyQuery(
    custom?.getInstalledOfficialApp?.query || GET_INSTALLED_OFFICIAL_APP,
    custom?.getInstalledOfficialApp?.options
  );

  const [
    getCustomApp,
    { data: getCustomAppData, loading: getCustomAppLoading },
  ] = useLazyQuery(
    custom?.getCustomApp?.query || GET_CUSTOM_APP,
    custom?.getCustomApp?.options
  );

  const [getApps, { data: getAppsData, loading: getAppsLoading }] =
    useLazyQuery(custom?.getApps?.query || GET_APPS, custom?.getApps?.options);

  return {
    getInstalledOfficialApp: {
      query: getInstalledOfficialApp,
      data: getInstalledOfficialAppData,
      loading: getInstalledOfficialAppLoading,
    },
    getCustomApp: {
      query: getCustomApp,
      data: getCustomAppData,
      loading: getCustomAppLoading,
    },
    getApps: {
      query: getApps,
      data: getAppsData,
      loading: getAppsLoading,
    },
  };
};
