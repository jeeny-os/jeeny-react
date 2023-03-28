import { gql } from '@apollo/client'

export const APP_FRAGMENT = gql`
  fragment App on App {
    id
    companyId
    status
    name
    description
    iconUrl
    coverUrl
    publishedAppVersion
    editorVersion
    playerVersion
    isPublished
    createdBy
    createdOn
    updatedOn
  }
`

export const INSTALLED_APP_FRAGMENT = gql`
  fragment InstalledApp on InstalledApp {
    id
    name
    description
    iconUrl
    coverUrl
    createdBy
    createdOn
    updatedOn
    installation {
      createdBy
      createdOn
    }
  }
`

export const OFFICIAL_APP_INSTALLATION_FRAGMENT = gql`
  fragment OfficialAppInstallation on OfficialAppInstallation {
    appId
    companyId
    status
    createdBy
    createdOn
    updatedOn
  }
`
