import React  from 'react'

import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../style/Navbar.css"


function Navbar() {



  return (
    
   
      <div className="navbar">
        <div className="leftSide">
        
        <h1> FLOWERA </h1>
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> Admin </Link>
            <Link to="/contact"> Contact </Link>
            
            <Link to="/gallery">Gallary </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
         
          <Link to="/gallery">Gallary </Link>
          <button >
          <ReorderIcon />
        </button>
         
        </div>
      </div>
    
  )
}




export default Navbar;