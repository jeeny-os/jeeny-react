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

const getAuthLink = (apiKey: string) =>
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: any) => ({
      headers: {
        ...headers,
        authorization: apiKey,
      },
    }));

    return forward(operation);
  });

type CreateApolloClientParams = {
  apiKey: string;
  apiUrl?: string;
};

export const createApolloClient = ({
  apiKey,
  apiUrl = DEFAULT_API_URL,
}: CreateApolloClientParams) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    connectToDevTools: true,
    link: from([getAuthLink(apiKey), getHttpLink(apiUrl)]),
  });
