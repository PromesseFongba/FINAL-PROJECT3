import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Link } from "react-router-dom";
import { FaHome, FaTv, FaLaptop, FaBrush, FaCcDinersClub,FaPeopleArrows } from 'react-icons/fa';
import c from "../../images/care1.png"



export const Shop = () => {
  return (
   
      <div className="mainfilm"> 
      <div className="navfilm"> 
      <div className="col">
      <img alt="shop"  className="landingimg" src="https://i.pinimg.com/564x/7b/3f/e1/7b3fe1e66e263b7e0c0e1f1cfb4086c7.jpg"/>
      <Link></Link><br/><br/><br/>
      <FaHome size={32} className='icons'/> <Link to="/">Home</Link><br/>
      <FaTv size={32} className='icons'/> <Link to="/films">Movies</Link><br/>
      <FaLaptop size={32} className='icons'/>  <Link to="/shop">Smart Store</Link><br/>
      <FaCcDinersClub size={32} className='icons'/> <Link to="/foods"> Food Market</Link><br/>
      <FaPeopleArrows size={32} className='icons'/> <Link to="/contact"> About Us </Link><br/>
      <img alt="shop"  className="landingimg2" src="https://i.pinimg.com/564x/dc/7c/9e/dc7c9e58b78cdd8dc55fcc1436bde215.jpg"/>
      <img alt="shop"  className="landingimg2" src="https://i.pinimg.com/564x/6d/72/2f/6d722f56bfd26ac18902a4f84f5dad24.jpg"/> 
      <img alt="shop"  className="landingimg2" src="https://i.pinimg.com/564x/54/98/21/5498213817f3111095cb0148fb04d3cd.jpg"/> 
      <img alt="shop"  className="landingimg2" src="https://i.pinimg.com/originals/0a/cc/e3/0acce3d25f5aa20591400bfcd5757848.gif"/> 
      </div>
      </div>
<div className="sectionfilm">
    <div className="shop">
      <div className="shopTitle">
<img className="landingimg" src={c}/>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};
