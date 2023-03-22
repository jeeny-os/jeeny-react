import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateCompanyArgs,
  MutationSaveCompanyArgs,
  QueryGetCompanyArgs,
  Company,
} from "../../types/graphql";

export interface CompanyApi {
  getCompany?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getCompany: Company;
      },
      QueryGetCompanyArgs
    >;
  };

  saveCompany?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveCompany: Company;
      },
      MutationSaveCompanyArgs
    >;
  };
}
