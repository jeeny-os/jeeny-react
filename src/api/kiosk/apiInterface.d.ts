import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationSaveKioskArgs,
  QueryGetKioskArgs,
  QueryGetKiosksArgs,
  Kiosk,
  KioskQueryResponse,
} from "../../types/graphql";

export interface KioskApi {
  getKiosk?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getKiosk: Kiosk;
      },
      QueryGetKioskArgs
    >;
  };

  getKiosks?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getKiosks: KioskQueryResponse;
      },
      QueryGetKiosksArgs
    >;
  };

  saveKiosk?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveKiosk: Kiosk;
      },
      MutationSaveKioskArgs
    >;
  };

  deleteKiosk?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteKiosk: Kiosk;
      },
      MutationDeleteKioskArgs
    >;
  };
}
