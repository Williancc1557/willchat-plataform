/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useReducer } from "react";

export interface AuthContextType {
  state: any;
  dispatch: React.DispatchWithoutAction;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthContextProviderType {
  children: React.ReactNode;
}

enum CountActionKind {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
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
  type: CountActionKind;
  payload: AuthPayload;
}

const authReducer = ((state: AuthState, action: AuthAction) => {
  const { type, payload } = action;

  switch (type) {
    case CountActionKind.SIGN_IN:
      return {
        refreshToken: payload.refreshToken,
        accessToken: payload.accessToken,
      };
    case CountActionKind.SIGN_OUT:
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
