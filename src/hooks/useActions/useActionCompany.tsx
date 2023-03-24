import * as JeenyTypes from "../../types/graphql";
import { UseActionGeneric } from "./useAction";
import { CompanyActionInputs } from "../../types/actionInputs";
import { useCompanyApi } from "../../api";

export const useActionCompany = () => {
  const {
    saveCompany: { mutation: saveCompany },
  } = useCompanyApi();

  const submit = async ({
    action,
    mutationOptions = {},
    values,
  }: UseActionGeneric<CompanyActionInputs>) => {
    switch (action) {
      case "company.saveCompany": {
        return await saveCompany({
          ...mutationOptions,
          variables: { data: values as JeenyTypes.CompanyInput },
        });
      }
    }
  };

  return submit;
};
