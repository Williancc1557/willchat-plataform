import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../views/LandingPage";
import { RegisterPage } from "../views/RegisterPage";
import { HomePage } from "../views/Authorized/HomePage";
import { LoginPage } from "../views/LoginPage";
import { useAuthContext } from "../hooks/useAuthContext";

export const Routers = () => {
  const { refreshToken } = useAuthContext();

  return (
    <Routes>
      <>
        <Route
          path="/home"
          element={refreshToken ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/register"
          element={!refreshToken ? <RegisterPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={!refreshToken ? <LoginPage /> : <Navigate to="/home" />}
        />
      </>
    </Routes>
  );
};
