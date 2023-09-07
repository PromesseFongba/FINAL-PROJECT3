
import "../components/Home.css"
import h1 from "../images/slideshow-9-removebg-preview.png"
import h2 from "../images/home5.png"
import h3 from "../images/slideshow-9.jpg"
import h4 from "../images/img/leaf-branch-4.png"
import h5 from "../images/slideshow-10.png"
import h6 from "../images/card2.png"
import h7 from "../images/img/leaf-branch-1.png"
import h8 from "../images/food1.png"
import h9 from "../images/food2.png"
import h10 from "../images/card2.png"
import h8a from "../images/food1.png"
import h9b from "../images/food2.png"
import h10c from "../images/card2.png"
import h11 from "../images/img/spinach-leaf.png"
import h12 from "../images/img/recently-salmon-sushi.png"
import h13 from "../images/img/leaf-branch-2.png"
import h14 from "../images/img/leaf-branch-3.png"
import h15 from "../images/img/newsletter-sushi.png"
import h16 from "../images/img/spinach-leaf.png"
import { Link } from "react-router-dom";
import { FaHome, FaTv, FaLaptop, FaCcDinersClub,FaPeopleArrows } from 'react-icons/fa';
import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cart/cart-item" 

const Foods = ()=>{
    
    const {productName, price, id } = useState('')
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

   
    return (  
      <div className="mainfilm"> 
      <div className="navfilm"> 
      <div className="col">
      <img alt=""  className="landingimg" src="https://i.pinimg.com/564x/04/e5/11/04e5119fbc8c49246e0c6f6bbbcc221e.jpg"/>
      <Link></Link><br/><br/><br/>
      <FaHome size={32} className='icons'/> <Link to="/">Home</Link><br/>
      <FaTv size={32} className='icons'/> <Link to="/films">Movies</Link><br/>
      <FaLaptop size={32} className='icons'/>  <Link to="/shop">Smart Store</Link><br/>
      <FaCcDinersClub size={32} className='icons'/> <Link to="/foods"> Food Market</Link><br/>
      <FaPeopleArrows size={32} className='icons'/> <Link to="/contact"> About Us </Link><br/>
      <img alt=""  className="landingimg" src="https://img.freepik.com/free-photo/food-order-pizza-online-internet-concept_53876-123708.jpg?w=740&t=st=1693925466~exp=1693926066~hmac=9208131332a09dbccfaa659086765e572aa9c013eb19f94e3a13a9c7808b05a6"/>
      

      <img alt=""  className="landingimg" src="https://img.freepik.com/free-photo/top-view-winter-vegetables-soup-bowl-with-spoon-toast_23-2148706340.jpg?w=1060&t=st=1693925772~exp=1693926372~hmac=bbc2381937e09e0eab863922c777870a4194acfc3bc36ccd3e38eb626d69ec90"/> 

      <img alt=""  className="landingimg" src="https://i.pinimg.com/564x/1f/9a/78/1f9a7846408a4634854fb7b9f79924be.jpg"/>
      
      <img alt=""  className="landingimg2" src="https://i.pinimg.com/564x/6d/55/b9/6d55b9d040a1db09ff4f14bdb18fe672.jpg"/>

      

      <img alt=""  className="landingimg" src="https://i.pinimg.com/564x/d0/d5/0e/d0d50e6022b940d1bfd854639eac6225.jpg"/>  

      <img alt=""  className="landingimg2" src="https://i.pinimg.com/564x/f5/de/ee/f5deee3a610fb7c342ed439a97088c82.jpg"/> 


      
      </div>
      </div>
      <div className="sectionfilm">
      <div className="shopTitle">
      </div>
<div className="home">
        <div className="home section1" id="home">
            <div className="home__container1">
                <img src={h1} alt="home " className="home__img"/>
            {/* <p className="home__img1"> </p> */}
                <div className="home__data">
                    <h1 className="home__title">
                    Love-Infused 

                        <div>
                            <img src={h2} alt=""/>
                           Delicious Food
                        </div>
                    </h1>

                    <p className="home__description">
                        Enjoy delicious food with the best dishes in 
                        the country.
                    </p>

                    <a href="#" className="button">
                        Order Now <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>

            <img src={h3} alt="home " className="home__leaf-1"/>
            <img src={h4} alt="home " className="home__leaf-2"/>
        </div>

        <div className="about section1" id="about">
            <div className="about__container container1 grid1">
                <div className="about__data">
                    <span className="section__subtitle">About Us</span>
                    <h2 className="section__title about__title">
                        
                        <div>
                            We Provide 
                            <img src="https://i.pinimg.com/564x/7a/5e/d3/7a5ed393c6cc3bf954458bfee61ed3e9.jpg" alt="about " />
                        </div>

                        Healthy Food
                    </h2>

                    <p className="about__description">
                        Food comes to us from our relatives, whether they 
                        have wings or roots. This is how we consider food, 
                        it also has a culture. It has a history that passes 
                        from generation to generation.
                    </p>
                </div>

                <img src={h6} alt="about " className="about__img"/>
                
            </div>

            <img src="https://as1.ftcdn.net/v2/jpg/03/19/18/46/1000_F_319184630_u3abcyJxGycTop59NZsd0KifXoGjwpLh.jpg" alt="about image" className="about__leaf1"/>
        </div>

       
        <div className="popular section1" id="popular">
            <span className="section__subtitle">The Best Food</span>
            <h2 className="section__title">Popular Dishes</h2>

            <div className="popular__container container1 grid1">
                <article className="popular__card">
                <img src={h8} alt="popular image" className="popular__img"/>
                    <br/> <br/>
                    
                    <h3 className="popular__name">Hamburger</h3>
                    <span className="popular__description">American  Dish</span>
                    <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> $12.99{price}</p>
                  </div>
                  <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                
                </article>

                <article className="popular__card">
                    <img src={h9} alt="popular image" className="popular__img"/>
                    <br/> <br/>
                    <h3 className="popular__name">Cheese with Fries</h3>
                    <span className="popular__description">American Dish</span>
                    <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> $15.99{price}</p>
                  </div>
                  <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                    {/* <span className="popular__price">$15.99</span>

                    <button className="popular__button">
                        <i className="ri-shopping-bag-line"></i>
                    </button> */}
                </article>

                <article className="popular__card">
                    <img src={h10} alt="popular image" className="popular__img"/>
                    <br/> <br/>
                    <h3 className="popular__name">Grill Chicken</h3>
                    <span className="popular__description">American Dish</span>
                    <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> $20.99{price}</p>
                  </div>
                  <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                    {/* <span className="popular__price">$19.99</span>

                    <button className="popular__button">
                        <i className="ri-shopping-bag-line"></i>
                    </button> */}
                </article>
                <article className="popular__card">
                    <img src={h8a} alt="popular image" className="popular__img"/>
                    <br/> <br/>
                    <h3 className="popular__name">Hamburger</h3>
                    <span className="popular__description">American Dish</span>
                    <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> $15.99{price}</p>
                  </div>
                  <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                    
                </article>
                <article className="popular__card">
                    <img src={h9b} alt="popular image" className="popular__img"/>
                    <br/> <br/>
                    <h3 className="popular__name">Cheese with Fies</h3>
                    <span className="popular__description">American Dish</span>
                    <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> $15.99{price}</p>
                  </div>
                  <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                    
                </article>

                <article className="popular__card">
                    <img src={h10c} alt="popular image" className="popular__img"/>
                    <br/> <br/>
                    <h3 className="popular__name">Grill Chicken</h3>
                    <span className="popular__description">American Dish</span>
                    <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> $20.99{price}</p>
                  </div>
                  <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                    
                </article>
            </div>
        </div>
        <div className="recently section1" id="recently">
            <div className="recently__container container1 grid1">
                <div className="recently__data">
                    <span className="section__subtitle">Recently Added</span>
                    <h2 className="section__title">
                        Fast Delivery <br/>
                        Healthy Food
                    </h2>

                    <p className="recently__description">
                       Everybody like to eat!!!! Take a look at what's new. And do not deprive 
                        yourself of a good meal, enjoy and be happy.
                    </p>

                    <a href="/foods" className="button">
                        Order Now <i className="ri-arrow-right-line"></i>
                    </a>

                    <img src={h11} alt="recently" className="recently__data-img"/>
                </div>
                <img src="https://as1.ftcdn.net/v2/jpg/03/19/18/46/1000_F_319184630_u3abcyJxGycTop59NZsd0KifXoGjwpLh.jpg" alt="about image" className="recently__img"/>
                {/* <img src={h12} alt="recently" className="recently__img"/> */}
            </div>

            <img src={h13} alt="recently" className="recently__leaf-1"/>
            <img src={h14} alt="recently" className="recently__leaf-2"/>
        </div>

   
        <div className="newsletter section1">
            <div className="newsletter__container container1">
                <div className="newsletter__content grid1">
                    <img src={h15} alt="newsletter image" className="newsletter__img"/>

                    <div className="newsletter__data">
                        <span className="section__subtitle">Newsletter</span>
                        <h2 class="section__title">
                            Subscribe For <br/>
                            Offer Updates
                        </h2>

                        <form action="" className="newsletter__form">
                            <input type="email" placeholder="Enter email" className="newsletter__input"/>
                            <button className="button newsletter__button">
                                Subscribe <i className="ri-send-plane-line"></i>
                            </button>
                        </form>
                    </div>
                </div>
                
                <img src={h16} alt="newsletter" className="newsletter__spinach"/>
            </div>
        </div>
    </div>


       </div> 
      </div>

        

        
    )
}

export default Foods