import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then(
        (result) => {
          setState(result.message);
        },
        (error) => {
          console.warn("Frontend failed to connect to backend:", error);
        },
      );
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/other-page" component={OtherPage} />
      </Switch>
    </Router>
  );
};

export default App;
