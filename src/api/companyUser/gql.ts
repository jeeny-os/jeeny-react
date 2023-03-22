import { gql } from "@apollo/client";
import { COMPANY_USER_FRAGMENT } from "./fragments";

export const GET_COMPANY_USER = gql`
  ${COMPANY_USER_FRAGMENT}
  query getCompanyUser {
    getCompanyUser {
      ...CompanyUser
    }
  }
`;

export const GET_COMPANY_USER_ADMIN = gql`
  ${COMPANY_USER_FRAGMENT}
  query getCompanyUserAdmin($userId: String!) {
    getCompanyUserAdmin(userId: $userId) {
      ...CompanyUser
    }
  }
`;

export const GET_COMPANY_USERS = gql`
  ${COMPANY_USER_FRAGMENT}
  query getCompanyUsers(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getCompanyUsers(limit: $limit, cursor: $cursor, filters: $filters) {
      cursor
      items {
        ...CompanyUser
      }
    }
  }
`;

export const GET_COMPANY_USERS_BY_TEAM_ID = gql`
  ${COMPANY_USER_FRAGMENT}
  query getCompanyUsersByTeamId(
    $teamId: String!
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getCompanyUsersByTeamId(
      teamId: $teamId
      limit: $limit
      cursor: $cursor
      filters: $filters
    ) {
      cursor
      items {
        ...CompanyUser
      }
    }
  }
`;

export const SAVE_COMPANY_USER = gql`
  ${COMPANY_USER_FRAGMENT}
  mutation saveCompanyUser($data: CompanyUserUpdateInput!) {
    saveCompanyUser(data: $data) {
      ...CompanyUser
    }
  }
`;

export const SAVE_COMPANY_USER_ADMIN = gql`
  ${COMPANY_USER_FRAGMENT}
  mutation saveCompanyUserAdmin(
    $userId: String!
    $data: CompanyUserAdminUpdateInput!
  ) {
    saveCompanyUserAdmin(userId: $userId, data: $data) {
      ...CompanyUser
    }
  }
`;
