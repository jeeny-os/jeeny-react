import { useLazyQuery, useMutation } from "@apollo/client";
import { CompanyUserApi } from "./apiInterface";
import {
  GET_COMPANY_USER,
  GET_COMPANY_USERS,
  GET_COMPANY_USERS_BY_TEAM_ID,
  GET_COMPANY_USER_ADMIN,
  SAVE_COMPANY_USER,
  SAVE_COMPANY_USER_ADMIN,
} from "./gql";

export const useCompanyUserApi = (custom?: CompanyUserApi) => {
  const [
    getCompanyUser,
    { data: getCompanyUserData, loading: getCompanyUserLoading },
  ] = useLazyQuery(
    custom?.getCompanyUser?.query || GET_COMPANY_USER,
    custom?.getCompanyUser?.options
  );

  const [
    getCompanyUserAdmin,
    { data: getCompanyUserAdminData, loading: getCompanyUserAdminLoading },
  ] = useLazyQuery(
    custom?.getCompanyUserAdmin?.query || GET_COMPANY_USER_ADMIN,
    custom?.getCompanyUserAdmin?.options
  );

  const [
    getCompanyUsers,
    { data: getCompanyUsersData, loading: getCompanyUsersLoading },
  ] = useLazyQuery(
    custom?.getCompanyUsers?.query || GET_COMPANY_USERS,
    custom?.getCompanyUsers?.options
  );

  const [
    getCompanyUsersByTeamId,
    {
      data: getCompanyUsersByTeamIdData,
      loading: getCompanyUsersByTeamIdLoading,
    },
  ] = useLazyQuery(
    custom?.getCompanyUsersByTeamId?.query || GET_COMPANY_USERS_BY_TEAM_ID,
    custom?.getCompanyUsersByTeamId?.options
  );

  const [
    saveCompanyUser,
    { data: saveCompanyUserData, loading: saveCompanyUserLoading },
  ] = useMutation(
    custom?.saveCompanyUser?.mutation || SAVE_COMPANY_USER,
    custom?.saveCompanyUser?.options
  );

  const [
    saveCompanyUserAdmin,
    { data: saveCompanyUserAdminData, loading: saveCompanyUserAdminLoading },
  ] = useMutation(
    custom?.saveCompanyUserAdmin?.mutation || SAVE_COMPANY_USER_ADMIN,
    custom?.saveCompanyUserAdmin?.options
  );

  return {
    getCompanyUser: {
      query: getCompanyUser,
      data: getCompanyUserData,
      loading: getCompanyUserLoading,
    },
    getCompanyUserAdmin: {
      query: getCompanyUserAdmin,
      data: getCompanyUserAdminData,
      loading: getCompanyUserAdminLoading,
    },
    getCompanyUsers: {
      query: getCompanyUsers,
      data: getCompanyUsersData,
      loading: getCompanyUsersLoading,
    },
    getCompanyUsersByTeamId: {
      query: getCompanyUsersByTeamId,
      data: getCompanyUsersByTeamIdData,
      loading: getCompanyUsersByTeamIdLoading,
    },
    save: {
      mutation: saveCompanyUser,
      data: saveCompanyUserData,
      loading: saveCompanyUserLoading,
    },
    saveAdmin: {
      mutation: saveCompanyUserAdmin,
      data: saveCompanyUserAdminData,
      loading: saveCompanyUserAdminLoading,
    },
  };
};
