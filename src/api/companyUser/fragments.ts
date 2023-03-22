import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment User on User {
    id
    email
    firstName
    lastName
    mobilePhone
    createdOn
    updatedOn
  }
`;

export const COMPANY_USER_FRAGMENT = gql`
  fragment CompanyUser on CompanyUser {
    companyId
    userId
    status
    role
    teamId
    teamName
    facilityIds
    contactEmail
    mobilePhone
    officePhone
    favoriteModules
    seenTutorials
    createdOn
    updatedOn
    user {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;
