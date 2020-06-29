import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from './pages/Navbar/Navbar';
import High_value from './pages/High_value/High_value';
import Ready_properties from './pages/Ready_properties/Ready_properties';
import Lets_speak from './pages/Lets_speak/Lets_speak';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <High_value />
      <Ready_properties />
      <Lets_speak />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
