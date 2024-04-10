import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routers/router";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
