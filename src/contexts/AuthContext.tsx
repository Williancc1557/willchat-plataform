/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useReducer } from "react";
import { axiosConfig } from "../utils/axiosConfig";

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
  REFRESH_TOKEN = "REFRESH_TOKEN",
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

const saveTokensInStorage = (refreshToken: string, accessToken: string) => {
  localStorage.setItem("refreshtoken", refreshToken);
  localStorage.setItem("accesstoken", accessToken);
};

const clearAllTokens = () => {
  localStorage.removeItem("refreshtoken");
  localStorage.removeItem("accesstoken");
};

const authReducer = ((state: AuthState, action: AuthAction) => {
  const { type, payload } = action;

  switch (type) {
    case AuthActionKind.SIGN_IN:
      saveTokensInStorage(payload.refreshToken, payload.accessToken);
      return {
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };
    case AuthActionKind.SIGN_UP:
      saveTokensInStorage(payload.refreshToken, payload.accessToken);
      return {
        refreshToken: payload.refreshToken,
        accessToken: payload.accessToken,
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

  console.log("Auth Context state: ", state);

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshtoken");

    async function getNewAccessToken() {
      try {
        const { data, status } = await axiosConfig("/api/auth/refresh-token", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            refreshToken,
          },
        });

        if (status >= 400) {
          clearAllTokens();
          return;
        }

        (dispatch as any)({
          type: AuthActionKind.SIGN_IN,
          payload: {
            refreshToken,
            accessToken: data.accessToken,
          },
        });
      } catch (err) {
        clearAllTokens();
      }
    }

    if (refreshToken) {
      getNewAccessToken();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
