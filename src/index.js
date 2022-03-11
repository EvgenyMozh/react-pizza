import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
