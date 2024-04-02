import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const UseAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside an AuthContextProvider"
    );
  }

  return context;
};
