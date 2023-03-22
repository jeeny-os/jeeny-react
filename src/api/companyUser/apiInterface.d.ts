import {
  DocumentNode,
  QueryFunctionOptions,
  MutationFunctionOptions,
} from "@apollo/client";
import {
  QueryGetCompanyUserArgs,
  CompanyUser,
  CompanyUserQueryResponse,
  QueryGetCompanyUsersArgs,
  MutationSaveCompanyUserArgs,
  MutationSaveCompanyUserAdminArgs,
  QueryGetCompanyUserAdminArgs,
  QueryGetCompanyUsersByTeamIdArgs,
} from "../../types/graphql";

export interface CompanyUserApi {
  getCompanyUser?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getCompanyUser: CompanyUser;
      },
      QueryGetCompanyUserArgs
    >;
  };

  getCompanyUserAdmin?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getCompanyUserAdmin: CompanyUser;
      },
      QueryGetCompanyUserAdminArgs
    >;
  };

  getCompanyUsers?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getCompanyUsers: CompanyUserQueryResponse;
      },
      QueryGetCompanyUsersArgs
    >;
  };

  getCompanyUsersByTeamId?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getCompanyUsersByTeamId: CompanyUserQueryResponse;
      },
      QueryGetCompanyUsersByTeamIdArgs
    >;
  };

  saveCompanyUser?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveCompanyUser: CompanyUser;
      },
      MutationSaveCompanyUserArgs
    >;
  };

  saveCompanyUserAdmin?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveCompanyUserAdmin: CompanyUser;
      },
      MutationSaveCompanyUserAdminArgs
    >;
  };
}
