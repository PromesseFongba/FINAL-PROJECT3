
import React, { useState, useEffect } from "react";
import Moviecard from "../Moviecard";
import SearchIcon from "../search.svg";
import { Link } from "react-router-dom";
import { FaHome, FaTv, FaLaptop, FaBrush, FaCcDinersClub,FaPeopleArrows } from 'react-icons/fa';



 const API_URL = "http://www.omdbapi.com?apikey=2ac9e1ca";

const Films = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  
  

  useEffect(() => {
    searchMovies("romantic"); 
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
    return(
      <div className="mainfilm"> 
      <div className="navfilm"> 
      <div className="col">
      <img alt=""  className="landingimg2" src="https://i.pinimg.com/564x/f6/c3/b4/f6c3b4ef664ef170399560a1788e99a4.jpg"/>
      <Link></Link><br/><br/><br/>
      <FaHome size={32} className='icons'/> <Link to="/">Home</Link><br/>
      <FaTv size={32} className='icons'/> <Link to="/films">Movies</Link><br/>
      <FaLaptop size={32} className='icons'/>  <Link to="/shop">Electronics</Link><br/>
      <FaBrush size={32} className='icons'/> <Link to="/profile">Personal Care</Link><br/>
      <FaCcDinersClub size={32} className='icons'/> <Link to="/foods"> Food Market</Link><br/>
      <FaPeopleArrows size={32} className='icons'/> <Link to="/contact"> About Us </Link><br/>
      <img alt=""  className="landingimg2" src="https://i.pinimg.com/564x/9c/8f/8d/9c8f8d9f7e4d2e28ef0f98bd8fcca403.jpg"/> 
      </div>
      </div>
      <div className="sectionfilm">
        <div className="shop">
          
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div> 
      
      {movies?.length > 0 ? (
        <div className="container"> 
         
          {movies.map((movie)   => (
            <Moviecard movie={movie} />
          ))}
          
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
       </div>
       </div> 
      </div>
    
            
    )
}
export default Films;