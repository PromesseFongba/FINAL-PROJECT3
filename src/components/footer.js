import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal,FaCcDiscover } from 'react-icons/fa';
import "./footer.css";
import logo from "../images/logo.png"


const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
        <img alt="" className="logo1" src={logo}/>
        </div>
        <div className="col">
        
          <h3>Address</h3>

<ul>
    <li>
        3019 allegheny Ave, <br/>
        Columbus,Ohio 43211, 
    </li>
    <li>
        9AM - 11PM
    </li>
</ul> 
        </div>
        {/* Column2 */}
        <div className="col">
        <h3 > Information</h3>
<ul>
    <li>
        <a href="#" >Contact</a>
    </li>
    <li>
        <a href="#">Order & Returns</a>
    </li>
    <li>
        <a href="#">Blog</a>
    </li>
    <li>
        <a href="#" >Popular</a>
    </li>
   </ul>
        </div>
        {/* Column3 */}
        <div className="col">
        <h3 >Main Menu</h3>

<ul>
    <li>
        <a href="#" >About</a>
    </li>
    <li>
        <a href="#">Trends</a>
    </li>
    <li>
        <a href="#">Offer</a>
    </li>
    <li>
        <a href="#" >Events</a>
    </li>
   </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
        <h3 >Social Media</h3>
<FaFacebook size={32} className='icons'/>
<FaInstagram size={32} className='icons'/>
<FaTwitter size={32} className='icons'/>
        
        </p>
      </div>

      
      <div className="row">
        <p className="col-sm">
        &copy;{new Date().getFullYear()} SABITOUT | All rights reserved |
          Terms Of Service | Privacy &nbsp; | &nbsp;
<FaCcVisa size={32} className='icons'/> &nbsp;
<FaCcMastercard size={32} className='icons'/> &nbsp;
<FaCcPaypal size={32} className='icons'/> &nbsp;
<FaCcDiscover size={32} className='icons'/>
        
        </p>
      </div>
    </div>
  </footer>

  )
}

export default Footer;