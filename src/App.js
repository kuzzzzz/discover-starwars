import React from "react";
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
        <div className="topnav navbar fixed-top">
          <div className="Logo">
            discover
         <Link to='/'>
              <img src={logo} alt=''></img>
            </Link>
          </div>
          <div className="nav">
            <Link to="/" className="btn btn-sm btn-outline-primary">People</Link>
            <Link to="/planets" className="btn btn-sm btn-outline-primary">Planets</Link>
            <Link to="/starships" className="btn btn-xm btn-outline-primary">StarShips</Link>
          


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
      <nav className="navbar footer navbar-light bg-dark">
        <a className="navbar-brand" href="#">May the 4th Be with You <span role="img" aria-label="">❤️</span> kuzzzzz</a>
      </nav>   
       </>
  );
}

export default App;
