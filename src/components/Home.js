
import "./Home.css"
// import h1 from "../images/img/home-sushi-rolls.png"
import h2 from "../images/img/home-sushi-title.png"
import h3 from "../images/img/leaf-branch-2.png"
import h4 from "../images/img/leaf-branch-4.png"
import h5 from "../images/img/about-sushi-title.png"
import h6 from "../images/photo2.png"
import h7 from "../images/img/leaf-branch-1.png"
import h8 from "../products/1.png"
import h9 from "../products/2.png"
import h10 from "../products/5.png"
import h11 from "../images/img/spinach-leaf.png"
import h12 from "../images/img/recently-salmon-sushi.png"
import h13 from "../images/img/leaf-branch-2.png"
import h14 from "../images/img/leaf-branch-3.png"
import h15 from "../images/home9.png"
import h16 from "../images/img/spinach-leaf.png"
import  h77 from "../images/home8.png"; 
import { Link } from "react-router-dom";
import l1 from "../images/home4.png"
import { FaHome, FaTv, FaLaptop,  FaCcDinersClub,FaPeopleArrows } from 'react-icons/fa';
import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "../pages/cart/cart-item"



function Home (){
        
    const {productName, price, id } = useState('')
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];

    return (
                <div className="mainfilm"> 
              <div className="navfilm1"> 
              <div className="col">
              {/* <img alt=""  className="landingimg2" src="https://i.pinimg.com/564x/eb/14/2a/eb142ac992397b70c62429fdc8f84b39.jpg"/> */}
              <Link></Link><br/><br/><br/>
              <FaHome size={32} className='icons1'/> <Link to="/">Home</Link><br/>
              <FaTv size={32} className='icons1'/> <Link to="/films">Movies</Link><br/>
              <FaLaptop size={32} className='icons1'/>  <Link to="/shop">Smart Store</Link><br/> 
              <FaCcDinersClub size={32} className='icons1'/> <Link to="/foods"> Food Market</Link><br/>
              <FaPeopleArrows size={32} className='icons1'/> <Link to="/contact"> About Us </Link><br/>
             

              <img alt="" className="landingimg"src="https://img.freepik.com/free-photo/full-shot-woman-online-fashion-shopping_23-2150460083.jpg?w=1060&t=st=1693926058~exp=1693926658~hmac=5d51116f21faaa2fc2a940107592c57ac99bd90bfcc39f29746eea85521e1496"/>

              <img alt="" className="landingimg"src="https://usagif.com/wp-content/uploads/gifs/black-friday-16.gif"/>

              <img alt="" className="landingimg"src="https://img.freepik.com/free-photo/young-african-american-woman-shopping-with-colorful-packs-black_155003-30149.jpg?size=626&ext=jpg&ga=GA1.2.567818624.1693921842&semt=ais"/>
            
              <img alt="" className="landingimg"src="https://img.freepik.com/free-photo/happy-young-friendly-women-laugh-joyfully-use-modern-mobile-phone-credit-card-payment-online-glad-spend-money-purchases-stand-each-other-isolated-yellow-background_273609-60040.jpg?size=626&ext=jpg&ga=GA1.1.567818624.1693921842&semt=ais"/>

              <img alt="" className="landingimg"src="https://img.freepik.com/premium-vector/best-offer-end-year-sale-banner-discount-50-vector-illustration_275806-1905.jpg?w=1380"/>

              <img alt="" className="landingimg"src="https://i.pinimg.com/564x/ed/48/94/ed48943531295ceb0599bf7afba74ce7.jpg"/>


              <img alt="" className="landingimg"src="https://as2.ftcdn.net/v2/jpg/00/92/22/37/1000_F_92223782_D4LkRQuPuH5XepWaTJml8qMQDZEIS7tW.jpg"/>

              
              
              
              <img alt=""  className="landingimg2" src="https://i.pinimg.com/564x/96/01/a3/9601a3bf5c76ae1ae7b4f94966269ac3.jpg"/> 
              </div>
              </div>

              <div className="sectionfilm">
              <div className="shopTitle">
              </div>
              <div className="home">
            <div className="home__container">
                <img src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-2159.jpg?w=740&t=st=1693923767~exp=1693924367~hmac=078e6827a5a1593c4b6e6273b005b9af64c5264b5b6a40a5c1d55e1daa3e525d" alt="home " className="home__img"/>
                {/* <img src={h77} alt="home" className="home__img"/> */}
                
                

                <div className="home__data">
                    <h1 className="home__title">
                        ONLINE

                        <div>
                            <img src="https://i.pinimg.com/236x/00/9e/97/009e97d2b41af1b63688fdcd18c03dcd.jpg" alt="home" />
                            SHOPPING
                        </div>
                    </h1>

                    <p className="home__description">
                        Enjoy best deals from the comfort <br/>of your caoch everyday and improve your life.
                    </p>

                    <a href="/shop" className="button">
                        Shop Now <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>

            {/* <img src={h3} alt="home " className="home__leaf-1"/> */}
            <img src={h77} alt="home" className="home__leaf-3"/>
            {/* <img src={h4} alt="home " className="home__leaf-2"/> */}

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
                  Enjoy shopping, living in the moment, enjoying life, & loud type. Very, loud in fact. Looking to shop deals of current trends? There you are!!!!!!! order everything for your home: Electronics, Movies, Personal Care, Foods and More... </p>
                </div>

                <img src={h6} alt="about " className="about__img"/>
            </div>

            <img src={h7} alt="about image" className="about__leaf"/>
        </div>

       
        <div className="popular section1" id="popular">
            <span className="section__subtitle">The Best Deals</span>
            <h2 className="section__title">Popular Brands </h2>

            <div className="popular__container container1 grid1">
                <article className="popular__card1">
                    <img src={h8} alt="popular image" className="popular__img1"/>
                    
                    <h3 className="popular__name">IPhone 14</h3>
                    <span className="popular__description">50Mpx Camera</span>
                    <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> $899{price}</p>
                  </div>
                  <button className="addToCartBttn" href="/shop"  onClick={() => addToCart(id)}>
                  <Link to="/shop"> Add To Cart</Link> {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                   
                </article>

                <article className="popular__card1">
                    <img src={h9} alt="popular image" className="popular__img1"/>
                    
                    <h3 className="popular__name">Macbook Air</h3>
                    <span className="popular__description">500 G SSD</span>
                    <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> $1499{price}</p>
                  </div>
                  <button className="addToCartBttn" href="/shop"  onClick={() => addToCart(id)}>
                  <Link to="/shop"> Add To Cart</Link> {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                    
                </article>

                <article className="popular__card1">
                    <img src={h10} alt="popular image" className="popular__img1"/>
                    
                    <h3 className="popular__name">Led Strip Light</h3>
                    <span className="popular__description">General Electric</span>
                    <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> $20.99{price}</p>
                  </div>
                  <button className="addToCartBttn"   onClick={() => addToCart(id)}>
                  <Link to="/shop"> Add To Cart</Link> {cartItemCount > 0 && <> ({cartItemCount})</>}
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
                        Everybody like to eat delicous food.<br/>
                        Take a look at what's new. And do not deprive 
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

        
    )
}

export default Home;