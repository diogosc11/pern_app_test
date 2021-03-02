import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";

import AddTutorial from "./components/AddTutorial";
import TutorialsList from "./components/TutorialsList";
import Tutorial from "./components/Tutorial";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoderMahBoy
        </a>
        <div className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3"></div>
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
    </div>
  );
}

export default App;
