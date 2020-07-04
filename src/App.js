import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import MissionVisionPage from './pages/MissionVisionPage';
import PropertyPage from './pages/PropertyPage';


function App() {
  return (
    <Router>
    <div className="App">

        <Switch>
        <Route exact path ="/" component= {LandingPage} />
        <Route  path ="/contactpage" component= {ContactPage} /> 
        <Route  path ="/mission&vision" component= {MissionVisionPage} />
        <Route  path ="/property" component= {PropertyPage} />   

        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
