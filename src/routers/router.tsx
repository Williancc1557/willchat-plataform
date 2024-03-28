import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../views/LandingPage";
import { RegisterPage } from "../views/RegisterPage";
import { HomePage } from "../views/Authorized/HomePage";

export const Routers = () => {
  const isAuthenticated = false;

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/home" element={<HomePage />} />
        </>
      ) : (
        <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </>
      )}
    </Routes>
  );
};
