import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/styles.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { AppProvide } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AppProvide>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProvide>
  </Router>
);
