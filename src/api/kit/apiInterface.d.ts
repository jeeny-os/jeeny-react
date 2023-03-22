import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  KitTemplateDetails,
  QueryGetKitTemplateDetailsArgs,
  KitTemplateQueryResponse,
  KitTemplate,
  MutationCreateKitTemplateArgs,
  MutationSaveKitTemplateArgs,
  KitTemplatePart,
  MutationSaveKitTemplatePartArgs,
  MutationAddKitTemplatePartOptionToKitTemplatePartArgs,
  KitTemplatePartOption,
  MutationSetDefaultKitTemplatePartOptionArgs,
  MutationDeleteKitTemplatePartOptionFromKitTemplatePartArgs,
  MutationDeleteKitTemplatePartFromKitTemplateArgs,
  MutationAddKitTemplatePartWithOptionToKitTemplateArgs,
  MutationAddKitTemplatePartToKitTemplateArgs,
  KitTemplateTree,
  QueryGetKitTemplateTreeArgs,
  QueryGetImagesForKitTemplateArgs,
  QueryGetVideosForKitTemplateArgs,
  QueryGetFilesForKitTemplateArgs,
  FileStorageRecord,
  QueryGetKitTemplateBomArgs,
  KitTemplateBomEntry,
} from "../../types/graphql";

export interface KitApi {
  getKitTemplateDetails?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getKitTemplateDetails: KitTemplateDetails;
      },
      QueryGetKitTemplateDetailsArgs
    >;
  };

  getKitTemplateTree?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getKitTemplateTree: KitTemplateTree;
      },
      QueryGetKitTemplateTreeArgs
    >;
  };

  getKitTemplateBom?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getKitTemplateBom: KitTemplateBomEntry[];
      },
      QueryGetKitTemplateBomArgs
    >;
  };

  getKitTemplates?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getKitTemplates: KitTemplateQueryResponse;
      },
      {}
    >;
  };

  createKitTemplate?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createKitTemplate: KitTemplate;
      },
      MutationCreateKitTemplateArgs
    >;
  };

  saveKitTemplate?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveKitTemplate: KitTemplate;
      },
      MutationSaveKitTemplateArgs
    >;
  };

  addKitTemplatePartToKitTemplate?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        addKitTemplatePartToKitTemplate: KitTemplatePart;
      },
      MutationAddKitTemplatePartToKitTemplateArgs
    >;
  };

  saveKitTemplatePart?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveKitTemplatePart: KitTemplatePart;
      },
      MutationSaveKitTemplatePartArgs
    >;
  };

  addKitTemplatePartOptionToKitTemplatePart?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        addKitTemplatePartOptionToKitTemplatePart: KitTemplatePartOption;
      },
      MutationAddKitTemplatePartOptionToKitTemplatePartArgs
    >;
  };

  setDefaultKitTemplatePartOption?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        setDefaultKitTemplatePartOption: KitTemplatePart;
      },
      MutationSetDefaultKitTemplatePartOptionArgs
    >;
  };

  deleteKitTemplatePartOptionFromKitTemplatePart?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteKitTemplatePartOptionFromKitTemplatePart: KitTemplatePartOption;
      },
      MutationDeleteKitTemplatePartOptionFromKitTemplatePartArgs
    >;
  };

  deleteKitTemplatePartFromKitTemplate?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteKitTemplatePartFromKitTemplate: KitTemplatePart;
      },
      MutationDeleteKitTemplatePartFromKitTemplateArgs
    >;
  };
}
