import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import Theme from "./styles/theme.jsx";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
