import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../views/LandingPage";
import { RegisterPage } from "../views/RegisterPage";
import { useAuth0 } from "@auth0/auth0-react";

export const Routers = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Routes>
      {isAuthenticated ? (
        <></>
      ) : (
        <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </>
      )}
    </Routes>
  );
};
