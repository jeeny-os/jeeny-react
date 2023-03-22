import { useLazyQuery, useMutation } from "@apollo/client";
import { AppApi } from "./apiInterface";
import {
  SAVE_CUSTOM_APP,
  GET_PRESIGNED_POST_FOR_APP,
  GET_HUB_IMAGES,
  GET_HUB_VIDEOS,
  GET_CUSTOM_APP,
  GET_APP_IMAGES,
  GET_APP_VIDEOS,
  GET_INSTALLED_OFFICIAL_APP,
  CREATE_CUSTOM_APP,
  GET_APPS,
} from "./gql";

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

  const [
    createCustomApp,
    { data: createCustomAppData, loading: createCustomAppLoading },
  ] = useMutation(
    custom?.createCustomApp?.mutation || CREATE_CUSTOM_APP,
    custom?.createCustomApp?.options
  );

  const [
    saveCustomApp,
    { data: saveCustomAppData, loading: saveCustomAppLoading },
  ] = useMutation(
    custom?.saveCustomApp?.mutation || SAVE_CUSTOM_APP,
    custom?.saveCustomApp?.options
  );

  const [
    getPresignedPostForApp,
    {
      data: getPresignedPostForAppData,
      loading: getPresignedPostForAppLoading,
    },
  ] = useLazyQuery(
    custom?.getPresignedPostForApp?.query || GET_PRESIGNED_POST_FOR_APP,
    custom?.getPresignedPostForApp?.options
  );

  const [
    getHubImages,
    { data: getHubImagesData, loading: getHubImagesLoading },
  ] = useLazyQuery(
    custom?.getHubImages?.query || GET_HUB_IMAGES,
    custom?.getHubImages?.options
  );

  const [
    getHubVideos,
    { data: getHubVideosData, loading: getHubVideosLoading },
  ] = useLazyQuery(
    custom?.getHubVideos?.query || GET_HUB_VIDEOS,
    custom?.getHubVideos?.options
  );

  const [
    getAppImages,
    { data: getAppImagesData, loading: getAppImagesLoading },
  ] = useLazyQuery(
    custom?.getAppImages?.query || GET_APP_IMAGES,
    custom?.getAppImages?.options
  );

  const [
    getAppVideos,
    { data: getAppVideosData, loading: getAppVideosLoading },
  ] = useLazyQuery(
    custom?.getAppVideos?.query || GET_APP_VIDEOS,
    custom?.getAppVideos?.options
  );

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
    createCustomApp: {
      mutation: createCustomApp,
      data: createCustomAppData,
      loading: createCustomAppLoading,
    },
    saveCustomApp: {
      mutation: saveCustomApp,
      data: saveCustomAppData,
      loading: saveCustomAppLoading,
    },
    getPresignedPostForApp: {
      query: getPresignedPostForApp,
      data: getPresignedPostForAppData,
      loading: getPresignedPostForAppLoading,
    },
    getHubImages: {
      query: getHubImages,
      data: getHubImagesData,
      loading: getHubImagesLoading,
    },
    getHubVideos: {
      query: getHubVideos,
      data: getHubVideosData,
      loading: getHubVideosLoading,
    },
    getAppImages: {
      query: getAppImages,
      data: getAppImagesData,
      loading: getAppImagesLoading,
    },
    getAppVideos: {
      query: getAppVideos,
      data: getAppVideosData,
      loading: getAppVideosLoading,
    },
  };
};
