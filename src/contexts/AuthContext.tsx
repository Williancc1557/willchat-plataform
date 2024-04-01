/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

type AuthInfo = {
  accessToken: string;
  refreshToken: string;
};

export interface AuthContextType {
  auth: any;
  setAuth: any;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthContextProviderType {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [auth, setAuth] = useState<AuthInfo | null>(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
