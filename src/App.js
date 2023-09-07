// import './App.css'
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Films from "./pages/films";
import Foods from "./pages/foods";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/films" element={<Films/>}/>
        <Route path= "/Login" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
            <Route path="/shop" element={<Shop />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes> 
        </Router>
      </ShopContextProvider>
      </div>
      <Footer/>
    </div>
  );
}

export default App;