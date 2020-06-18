import React, { useState, useEffect } from "react";
import axios from "axios";
import People from './components/People'
import "./App.css";

function App() {
  

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

    
      <People/>
    </>
  );
}

export default App;
