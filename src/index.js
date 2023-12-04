import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { SymphonyProvider } from "./context/SymphonyContext";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <SymphonyProvider>
      <App />
    </SymphonyProvider>
  </Router>,
  document.getElementById("root")
);
