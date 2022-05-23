import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./main.scss";

import App from "./pages/Home/App";
import List from "./pages/List/List";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employees" element={<List />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
