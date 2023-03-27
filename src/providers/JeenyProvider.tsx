import React, { useCallback, useEffect, useRef, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../config/apollo/apolloClient";

type JeenyContextType = {
  /** Remove the user */
  removeUser: () => void;
  /** Set and change the user at will. Will add their information to record creates and updates. */
  setUser: (user: JeenyUserType) => void;
  user: JeenyUserType | null;
};

const defaultValue: JeenyContextType = {
  removeUser: () => null,
  setUser: () => null,
  user: null,
};

export const JeenyContext = React.createContext<JeenyContextType>(defaultValue);

export interface JeenyContextProviderProps {
  apiKey: string;
  apiUrl?: string;
  companyId?: string;
  children: React.ReactNode;
  useUserAuth?: boolean;
}

export type JeenyUserType = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
} | null;

export const JeenyProvider: React.FC<JeenyContextProviderProps> = ({
  apiKey,
  children,
  apiUrl,
  companyId,
  useUserAuth,
}) => {
  const [user, setUser] = useState<JeenyUserType>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const removeUser = useCallback(() => setUser(null), []);

  const apolloClient = createApolloClient({
    apiKey,
    apiUrl,
    companyId,
    user: user?.id,
  });

  const providerProps = { removeUser, setUser, user };

  useEffect(() => {
    if (useUserAuth) {
      window.addEventListener("message", (m) => {
        if (m.data.type === "user-logged-in") {
          const message = JSON.parse(m.data.message);

          setUser({
            username: message.username,
            email: message.attributes.email,
            firstName: message.attributes.firstName,
            lastName: message.attributes.lastName,
            id: message.attributes.sub,
          });
        }
      });
    }
  });

  if (useUserAuth && user == null) {
    return (
      <JeenyContext.Provider value={providerProps}>
        <iframe
          ref={iframeRef}
          src="https://hub.jeeny.com/auth-link"
          className="w-full h-screen"
        />
      </JeenyContext.Provider>
    );
  }

  return (
    <JeenyContext.Provider value={providerProps}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </JeenyContext.Provider>
  );
};
