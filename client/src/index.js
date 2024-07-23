import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Navbar />
    </div>
    <Home />
  </React.StrictMode>,
  document.getElementById("root"),
);
