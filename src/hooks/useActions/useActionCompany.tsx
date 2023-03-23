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
    values,
  }: UseActionGeneric<CompanyActionInputs>) => {
    switch (action) {
      case "company.saveCompany": {
        return await saveCompany({
          variables: { data: values as JeenyTypes.CompanyInput },
        });
      }
    }
  };

  return submit;
};
