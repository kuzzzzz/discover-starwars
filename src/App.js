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

const toggIcon = {
  marginTop:"10px",
 fontSize:"10px",
}
const toggleClassList = () =>{
  let shownav = document.querySelector('.nav');
  if(shownav.style.display==="none"){
    shownav.style.display="block"
    shownav.style.textAlign="center"
  }else{
    shownav.style.display="none"
  }
  document.querySelector("#nav-container").classList.toggle("pushed")

}
 
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
            <div style={toggIcon} id="nav-container">
              <div onClick={toggleClassList} className="toggle-icon">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
          </div>        
            <div className="nav">
           
            <Link to="/" className="btn btn-sm btn-outline-primary">People</Link>
            <Link to="/planets" className="btn btn-sm btn-outline-primary">Planets</Link>
            <Link to="/starships" className="btn btn-sm btn-outline-primary">StarShips</Link>
        
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
      <div style={{background:"lightgrey",fontSize:"0.8rem",textAlign:"center",margin:'30px'}} >
        <p> May the 4th Be with You <span role="img" aria-label="">❤️</span> kuzzzzz</p>
      </div>   
       </>
  );
}

export default App;
