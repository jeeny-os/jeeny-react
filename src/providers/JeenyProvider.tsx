import React, { useCallback, useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../config/apollo/apolloClient";

type JeenyContextType = {
  /** Set and change the user at will. Will add their information to record creates and updates. */
  removeUser: () => void;
  /** Remove the user */
  setUser: (userId: string) => void;
};

const defaultValue: JeenyContextType = {
  removeUser: () => null,
  setUser: () => null,
};

export const JeenyContext = React.createContext<JeenyContextType>(defaultValue);

export interface JeenyContextProviderProps {
  apiKey: string;
  apiUrl?: string;
  companyId?: string;
  children: React.ReactNode;
}

export const JeenyProvider: React.FC<JeenyContextProviderProps> = ({
  apiKey,
  children,
  apiUrl,
  companyId,
}) => {
  const [user, setUser] = useState<string | undefined>(undefined);

  const removeUser = useCallback(() => setUser(undefined), []);

  const apolloClient = createApolloClient({
    apiKey,
    apiUrl,
    companyId,
    user,
  });

  return (
    <JeenyContext.Provider value={{ removeUser, setUser }}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </JeenyContext.Provider>
  );
};
