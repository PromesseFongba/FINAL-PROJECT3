import React from "react";
//import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import DarkMode from "../DarkMode/DarkMode";
import "./navbar.css";
import logo from "../images/logo.png"

     

const Navbar = () => {
  return (
    <div className="navbar">
      <img alt="" className="logo" src={logo}/>
      <Link></Link><br/><br/><br/>
      <Link to="/">Home</Link>
        <Link to="/films">Movies</Link>
        <Link to="/shop">Smart Store</Link>
        <Link to="/foods"> Food Market</Link>
        <Link to="/contact"> About us </Link>  
      <div className="links">
      
        
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
       <Link to="/Login">LOGIN</Link>
        <Link to="/Signup">REGISTER</Link>
        <DarkMode/>
      </div>
    </div>
  );
};
 export default Navbar;