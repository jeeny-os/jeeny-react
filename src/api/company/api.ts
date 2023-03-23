import { useLazyQuery, useMutation } from "@apollo/client";
import { CompanyApi } from "./apiInterface";
import { GET_COMPANY, SAVE_COMPANY } from "./gql";

export const useCompanyApi = (custom?: CompanyApi) => {
  const [getCompany, { data: getCompanyData, loading: getCompanyLoading }] =
    useLazyQuery(
      custom?.getCompany?.query || GET_COMPANY,
      custom?.getCompany?.options
    );

  const [saveCompany, { data: saveCompanyData, loading: saveCompanyLoading }] =
    useMutation(
      custom?.saveCompany?.mutation || SAVE_COMPANY,
      custom?.saveCompany?.options
    );

  return {
    getCompany: {
      query: getCompany,
      data: getCompanyData,
      loading: getCompanyLoading,
    },
    saveCompany: {
      mutation: saveCompany,
      data: saveCompanyData,
      loading: saveCompanyLoading,
    },
  };
};
