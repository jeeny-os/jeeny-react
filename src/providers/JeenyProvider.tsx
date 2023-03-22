import React, { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../config/apollo/apolloClient";

type JeenyContextType = {};

const defaultValue: JeenyContextType = {};

export const JeenyContext = React.createContext<JeenyContextType>(defaultValue);

interface JeenyContextProviderProps {
  apiKey: string;
  children: React.ReactNode;
}

export const JeenyProvider: React.FC<JeenyContextProviderProps> = ({
  apiKey,
  children,
}) => {
  useEffect(() => {
    localStorage.setItem("jeenyAccessToken", apiKey);
  });

  return (
    <JeenyContext.Provider value={{}}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </JeenyContext.Provider>
  );
};
