import React, { useState, useEffect } from "react";
import axios from "axios";
import People from "./components/People";
import Planets from "./components/Planets";
import StarShips from './components/StarShips';
import SearchGalaxy from "./components/searchGalaxy";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const entities = ["people", "starships", "planets"];
  const defaultSearchKeywords = ['luke','star','Hoth']
  const [isSearched, setState] = useState(false);

  const [searchTerm, setSearchTerm] = useState(undefined);
  const [entity, setEntity] = useState(entities[1]);

  return (
    <>
    <Router>
      <div className="topnav">
        <div className="Logo"></div>
        <div className="nav">
          <ul>
              <li> <Link to="/">People</Link> </li>
              <li>  <Link to="/planets">Planets</Link></li>
              <li>  <Link to="/starships">StarShips</Link></li>
              <li>  <Link to="/search">searchGalaxy</Link></li>

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
          <Route path="/search">
            <SearchGalaxy entity={entity} searchTerm={searchTerm} />
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
