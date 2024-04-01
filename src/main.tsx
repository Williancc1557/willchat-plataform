import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routers/router";
import { Footer } from "./components/Footer";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routers />
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
