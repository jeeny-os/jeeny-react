import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  App,
  PresignedPost,
  QueryGetCustomAppArgs,
  InstalledApp,
  QueryGetInstalledOfficialAppArgs,
} from "../../types/graphql";

export interface AppApi {
  getInstalledOfficialApp?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getInstalledOfficialApp: InstalledApp;
      },
      QueryGetInstalledOfficialAppArgs
    >;
  };

  getCustomApp?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getCustomApp: App;
      },
      QueryGetCustomAppArgs
    >;
  };

  getApps?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<{
      getApps: { customApps: App[]; officialApps: App[] };
    }>;
  };
}
