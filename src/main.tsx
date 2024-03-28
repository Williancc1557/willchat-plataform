import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routers/router";
import { Footer } from "./components/Footer";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain=""
        clientId=""
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <Routers />
        <Footer />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
