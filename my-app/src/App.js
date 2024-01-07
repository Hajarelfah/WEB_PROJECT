import React from "react";
import { ReactDOM } from "react";
import './index.css'
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import Navbar from './components/Navbar';
import Land from "./components/Landing";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";


function App() {
  return (
    <div className="App">
 
     <Router>
      <Navbar />
     
      <Routes >
      <Route path="/" element={<Land/>} />
      <Route path="/contact" element={<Contact/>} />
          <Route path="/menu" element={""} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/> } />
      </Routes>
        
 
        
    </Router>
    </div>
  );
}

export default App;
