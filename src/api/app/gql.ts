import { gql } from "@apollo/client";
import { APP_FRAGMENT, INSTALLED_APP_FRAGMENT } from "./fragments";

export const GET_INSTALLED_OFFICIAL_APP = gql`
  ${INSTALLED_APP_FRAGMENT}
  query GetInstalledOfficialApp($appId: String!) {
    getInstalledOfficialApp(appId: $appId) {
      ...InstalledApp
    }
  }
`;

export const GET_CUSTOM_APP = gql`
  ${APP_FRAGMENT}
  query GetCustomApp($id: String!) {
    getCustomApp(id: $id) {
      ...App
    }
  }
`;

export const GET_APPS = gql`
  ${APP_FRAGMENT}
  ${INSTALLED_APP_FRAGMENT}
  query GetApps @api(contextKey: "apiName") {
    getApps {
      customApps {
        ...App
      }
      officialApps {
        ...InstalledApp
      }
    }
  }
`;

export const CREATE_CUSTOM_APP = gql`
  ${APP_FRAGMENT}
  mutation CreateCustomApp($data: CustomAppInput!) {
    createCustomApp(data: $data) {
      ...App
    }
  }
`;

export const SAVE_CUSTOM_APP = gql`
  ${APP_FRAGMENT}
  mutation saveCustomApp($data: CustomAppUpdateInput!) {
    saveCustomApp(data: $data) {
      ...App
    }
  }
`;

export const GET_PRESIGNED_POST_FOR_APP = gql`
  query getPresignedPostForApp($args: AppMediaUploadInput!) {
    getPresignedPostForApp(args: $args) {
      url
      fields
    }
  }
`;

export const GET_HUB_IMAGES = gql`
  query getHubImages {
    getHubImages {
      url
      fileName
      size
      updatedOn
    }
  }
`;

export const GET_HUB_VIDEOS = gql`
  query getHubVideos {
    getHubVideos {
      url
      fileName
      size
      updatedOn
    }
  }
`;

export const GET_APP_IMAGES = gql`
  query getAppImages($appId: String!) {
    getAppImages(appId: $appId) {
      url
      fileName
      size
      updatedOn
    }
  }
`;

export const GET_APP_VIDEOS = gql`
  query getAppVideos($appId: String!) {
    getAppVideos(appId: $appId) {
      url
      fileName
      size
      updatedOn
    }
  }
`;
