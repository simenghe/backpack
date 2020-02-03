import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Catalogue from "./pages/catalogue";


function App() {
  return (
    <Router>
      <Link to="/"></Link>
      <Switch>
        <Route path="/">
          <Catalogue />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
