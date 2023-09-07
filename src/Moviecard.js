
import { ShopContext } from "./context/shop-context"
import React, { useContext, useState } from "react";
import { CartItem } from "./pages/cart/cart-item" 


    
  

const Moviecard = ({ movie: { imdbID, Year, Poster, Title, Type} }) => {
  const {productName, price, id } = useState('')
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  return (
    <div className="movie"  key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h4>{Title}</h4>
                    <p> $15.99 &nbsp; &nbsp;  <button className="addToCartBttn1" onClick={() => addToCart(id)}>
                  Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button></p>
      </div>
      
    </div>
  );
}

export default Moviecard;