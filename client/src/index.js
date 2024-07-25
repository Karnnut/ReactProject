import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Navbar />
    </div>
    <Home />
  </React.StrictMode>,
  document.getElementById("root"),
);
