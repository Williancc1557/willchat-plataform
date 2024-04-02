/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useReducer } from "react";

export interface AuthContextType {
  state: any;
  dispatch: any;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthContextProviderType {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export enum AuthActionKind {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
}

interface AuthState {
  refreshToken: string;
  accessToken: string;
}

interface AuthPayload {
  refreshToken: string;
  accessToken: string;
}

interface AuthAction {
  type: AuthActionKind;
  payload: AuthPayload;
}

const authReducer = ((state: AuthState, action: AuthAction) => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionKind.SIGN_IN:
      return {
        refreshToken: payload.refreshToken,
        accessToken: payload.accessToken,
      };
    case AuthActionKind.SIGN_UP:
      return {
        refreshToken: null,
        accessToken: null,
      };
    default:
      return state;
  }
}) as React.ReducerWithoutAction<any>;

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [state, dispatch] = useReducer(authReducer, {
    accessToken: null,
    refreshToken: null,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
