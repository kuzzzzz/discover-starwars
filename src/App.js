import React, { useState, useEffect } from "react";
import axios from "axios";
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
        <div className="topnav">
          <div className="Logo">
            discover
         <Link to='/'> 
          <img src={logo}></img>
            </Link>
          </div>
          <div className="nav">
            <ul>
              <li><Link to="/">People</Link> </li>
              <li><Link to="/planets">Planets</Link></li>
              <li><Link to="/starships">StarShips</Link></li>

            </ul>
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
