import React, { useState, useEffect } from "react";
import axios from "axios";
import People from "./components/People";
import SearchGalaxy from "./components/searchGalaxy";
import "./App.css";

function App() {
  const entities = ["people", "starships", "planets"];
  const defaultSearchKeywords = ['luke','star','Hoth']
  const [isSearched, setState] = useState(false);

  const [searchTerm, setSearchTerm] = useState(undefined);
  const [entity, setEntity] = useState(entities[1]);

  return (
    <>
      <div className="topnav">
        <div className="Logo"></div>
        <div className="nav">
          <ul>
            <li> People </li>
            <li> Planets</li>
            <li> SpaceShip</li>
          </ul>
        </div>
      </div>
      
      <SearchGalaxy entity={entity} searchTerm={searchTerm} />

      <People isSearched/>
    </>
  );
}

export default App;
