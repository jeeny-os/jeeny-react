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
