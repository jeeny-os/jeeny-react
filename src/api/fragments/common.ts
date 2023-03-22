import { gql } from "@apollo/client";

export const COMMON_FIELDS_FRAGMENT = gql`
  fragment CommonFields on Item {
    id
    createdBy
    createdOn
    updatedOn
  }
`;

export const ADDRESS_FRAGMENT = gql`
  fragment Address on Address {
    firstName
    lastName
    phoneNumber
    emailAddress
    street1
    street2
    city
    state
    zipCode
    country
  }
`;

export const CONTACT_FRAGMENT = gql`
  fragment Contact on Contact {
    firstName
    lastName
    email
    homePhone
    officePhone
    mobilePhone
    title
    department
    createdOn
    updatedOn
  }
`;

export const NOTE_FRAGMENT = gql`
  fragment Note on Note {
    id
    note
    createdOn
    createdBy
  }
`;

export const FILE_FRAGMENT = gql`
  fragment File on FileStorageRecord {
    url
    fileName
    size
    updatedOn
  }
`;
export const FILES_FRAGMENT = gql`
  ${FILE_FRAGMENT}
  fragment Files on Item {
    images {
      ...File
    }
    videos {
      ...File
    }
    files {
      ...File
    }
  }
`;
