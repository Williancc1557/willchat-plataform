import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../views/LandingPage";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
