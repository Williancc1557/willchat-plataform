import { useState } from "react";
import { UseAuthContext } from "./UseAuthContext";
import { axiosConfig } from "../utils/axiosConfig";
import { AuthActionKind } from "../contexts/AuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = UseAuthContext();

  interface SignUpType {
    name: string;
    email: string;
    password: string;
  }
  const signUp = async ({ name, email, password }: SignUpType) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosConfig("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ name, email, password }),
      });

      const json = await response.data();

      if (response.status >= 400) {
        setIsLoading(false);
        setError(json.error);
      }

      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem("accesstoken", json.accessToken);
        localStorage.setItem("refreshtoken", json.refreshToken);
        dispatch({ type: AuthActionKind.SIGN_UP, payload: json });
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setError((error as any).message);
    }
  };

  return { signUp, isLoading, error };
};
