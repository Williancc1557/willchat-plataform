import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../views/LandingPage";
import { RegisterPage } from "../views/RegisterPage";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
