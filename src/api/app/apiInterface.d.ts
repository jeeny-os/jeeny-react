import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  App,
  PresignedPost,
  QueryGetCustomAppArgs,
  MutationSaveCustomAppArgs,
  QueryGetPresignedPostForAppArgs,
  FileStorageRecord,
  QueryGetAppImagesArgs,
  QueryGetAppVideosArgs,
  InstalledApp,
  QueryGetInstalledOfficialAppArgs,
  MutationCreateCustomAppArgs,
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
      getApps: Apps;
    }>;
  };

  createCustomApp?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createCustomApp: App;
      },
      MutationCreateCustomAppArgs
    >;
  };

  saveCustomApp?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveCustomApp: App;
      },
      MutationSaveCustomAppArgs
    >;
  };

  getPresignedPostForApp?: {
    query?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        getPresignedPostForApp: PresignedPost;
      },
      QueryGetPresignedPostForAppArgs
    >;
  };

  getHubImages?: {
    query?: DocumentNode;
    options?: MutationFunctionOptions<{
      getHubImages: FileStorageRecord;
    }>;
  };

  getHubVideos?: {
    query?: DocumentNode;
    options?: MutationFunctionOptions<{
      getHubVideos: FileStorageRecord;
    }>;
  };

  getAppImages?: {
    query?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        getAppImages: FileStorageRecord;
      },
      QueryGetAppImagesArgs
    >;
  };

  getAppVideos?: {
    query?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        getAppVideos: FileStorageRecord;
      },
      QueryGetAppVideosArgs
    >;
  };
}
