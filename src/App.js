import React, { useState, useEffect } from "react";
import People from "./components/People";
import Planets from "./components/Planets";
import StarShips from './components/StarShips';
import logo from './assets/img/logo.png'
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

 
  return (
    <>
      <Router>
        <div className="topnav navbar sticky-top">
          <div className="Logo">
            discover
         <Link to='/'>
              <img src={logo}></img>
            </Link>
          </div>
          <div className="nav">
         <Link to="/">People</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/starships">StarShips</Link>
          


          </div>
        </div>


        <Switch>
          <Route path="/starships">
            <StarShips />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/">
            <People />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
