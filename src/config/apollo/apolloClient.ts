import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  from,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APOLLO_URL, // TODO from config
});

const authLink = new ApolloLink((operation, forward) => {
  const authorization = localStorage.getItem("jeenyAccessToken");

  operation.setContext(({ headers }: any) => ({
    headers: {
      ...headers,
      authorization,
    },
  }));

  return forward(operation);
});

export const createApolloClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    connectToDevTools: true,
    link: from([authLink, httpLink]),
  });

export const apolloClient = createApolloClient();
