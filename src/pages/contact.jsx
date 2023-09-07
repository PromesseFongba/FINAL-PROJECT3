import React from "react";
import l1 from "../images/abt1.png"
import l2 from "../images/home3.png"
import { Link } from "react-router-dom";
import { FaHome, FaTv, FaLaptop, FaCcDinersClub,FaPeopleArrows } from 'react-icons/fa';

export const Contact = () => {
  return(   
          <div className="mainfilm"> 
          <div className="navfilm1"> 
          <div className="col">
          
          <Link></Link><br/><br/><br/>
          <FaHome size={32} className='icons1'/> <Link to="/">Home</Link><br/>
          <FaTv size={32} className='icons1'/> <Link to="/films">Movies</Link><br/>
          <FaLaptop size={32} className='icons1'/>  <Link to="/shop">Smart Store</Link><br/>
          <FaCcDinersClub size={32} className='icons1'/> <Link to="/foods"> Food Market</Link><br/>
          <FaPeopleArrows size={32} className='icons1'/> <Link to="/contact"> About Us </Link><br/>
          {/* <img alt=""  className="landingimg2" src="https://i.pinimg.com/564x/fc/c2/39/fcc239bac5797b463666f93d97f813cc.jpg"/> */}
          <h2 className="section__title about__title"><b> Contact Us </b></h2>
        <p className="icons">3019 allegheny Ave,Columbus,Ohio 43211 <br/> 9AM - 11PM</p>
        <p className="icons">Have concerns or questions? E-mail Us at Sabitout@outlook.com or <br/> Call US at 777-569-8745</p><br/>
      
          {/* <img alt=""  className="landingimg2" src="https://i.pinimg.com/564x/6d/72/2f/6d722f56bfd26ac18902a4f84f5dad24.jpg"/>  */}
          </div>
          </div>
    <div className="sectionfilm">
        <div className="shop">
          <div className="shopTitle2">
          {/* <img className="landingimg" src={l1}/> */}
          {/* <br/><br/><br/> */}
          </div>

          <div className="about section1" id="about">
            <div className="about__container container1 grid1">
                <div className="about__data">
                    <span className="section__subtitle">About Us</span>
                    <h2 className="section__title about__title">
                        <div>
                             Best Online
                            <img src={l1} alt="about "/>
                        </div>

                        Shopping Ever
                    </h2>

                    <p className="about__description">
                    Welcome to Sabitout E-store! At Sabitout, we are here to serve you differently. Enjoy the best experience ever!!!!!!! We believe in fostering awesome services and empowering our users to feed their needs freely. Our mission is to create a safe, inclusive, and vibrant online store where you can shop the best for less from the confort of your home. Together, let's build a brighter and more connected world. #ShopInspireThrive</p>
   <p>Enjoy shopping, living in the moment, enjoying life, & loud type. Very, loud in fact. Looking to shop deals of current trends? There you are!!!!!!! order everything for your home: Electronics, Movies, Personal Care, Foods and More... </p>
                    
                </div>

                <img src={l2} alt="about " className="about__img"/>
            </div>

            <img src={l1} alt="about image" className="about__leaf"/>
        </div>
   </div>
            
      </div>
    
    </div>

  )

};
