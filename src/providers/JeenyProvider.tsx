import React, { useCallback, useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../config/apollo/apolloClient";

type JeenyContextType = {};

const defaultValue: JeenyContextType = {};

export const JeenyContext = React.createContext<JeenyContextType>(defaultValue);

export interface JeenyContextProviderProps {
  apiKey: string;
  apiUrl?: string;
  children: React.ReactNode;
}

export const JeenyProvider: React.FC<JeenyContextProviderProps> = ({
  apiKey,
  children,
  apiUrl,
}) => {
  const apolloClient = createApolloClient({
    apiKey,
    apiUrl,
  });

  return (
    <JeenyContext.Provider value={{}}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </JeenyContext.Provider>
  );
};
