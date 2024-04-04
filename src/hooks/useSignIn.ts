import { useState } from "react";
import { UseAuthContext } from "./useAuthContext";
import { axiosConfig } from "../utils/axiosConfig";
import { AuthActionKind } from "../contexts/AuthContext";

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = UseAuthContext();

  interface SignInType {
    email: string;
    password: string;
  }
  const signIn = async ({ email, password }: SignInType) => {
    setIsLoading(true);
    setError(null);

    try {
      const responseSignIn = await axiosConfig("/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ email, password }),
      });

      const json = responseSignIn.data;

      if (responseSignIn.status >= 400) {
        setIsLoading(false);
        setError(json.error);
        return;
      }

      if (responseSignIn.status >= 200 && responseSignIn.status < 300) {
        localStorage.setItem("refreshtoken", json.refreshToken);
        setIsLoading(false);
      }

      const responseRefreshToken = await axiosConfig(
        "/api/auth/refresh-token",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            refreshtoken: json.refreshToken,
          },
        }
      );

      dispatch({
        type: AuthActionKind.SIGN_IN,
        payload: {
          accessToken: responseRefreshToken.data.accessToken,
          refreshToken: responseSignIn.data.refreshToken,
        },
      });
    } catch (error) {
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setError((error as any).responseSignUp.data.error);
    }
  };

  return { signIn, isLoading, error };
};
