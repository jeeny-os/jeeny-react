import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  from,
} from "@apollo/client";

const DEFAULT_API_URL = "https://api.jeeny.com/headless";

const getHttpLink = (apiUrl: string) =>
  createHttpLink({
    uri: apiUrl,
  });

const getAuthLink = (apiKey: string, companyId?: string, user?: string) =>
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        authorization: apiKey,
        companyid: companyId,
        user,
      },
    }));

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
