import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  from,
} from "@apollo/client";
import { isNil, omitBy } from "lodash";

const DEFAULT_API_URL = "https://api.jeeny.com/headless";

const getHttpLink = (apiUrl: string) =>
  createHttpLink({
    uri: apiUrl,
  });

const getAuthLink = (apiKey: string, companyId?: string, user?: string) =>
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: any) => {
      const fullHeaders = {
        ...headers,
        authorization: apiKey,
        companyId,
        user,
      };

      const cleanHeaders = omitBy(fullHeaders, isNil);

      return {
        headers: cleanHeaders,
      };
    });

    return forward(operation);
  });

type CreateApolloClientParams = {
  apiKey: string;
  apiUrl?: string;
  companyId?: string;
  user?: string;
};

export const createApolloClient = ({
  apiKey,
  apiUrl = DEFAULT_API_URL,
  companyId,
  user,
}: CreateApolloClientParams) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    connectToDevTools: true,
    link: from([getAuthLink(apiKey, companyId, user), getHttpLink(apiUrl)]),
  });
