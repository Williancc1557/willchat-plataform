import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosConfig } from "../utils/axiosConfig";
import { AuthActionKind } from "../contexts/AuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { dispatch } = useAuthContext();

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
  };

  return { signup, isLoading, error };
};
