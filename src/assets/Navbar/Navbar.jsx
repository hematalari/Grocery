import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { storeContext } from "../Context/Context";
import { CgProfile } from "react-icons/cg";
import { FiLogOut, FiShoppingBag} from "react-icons/fi";


const Navbar = ({setShowlogin}) => {
  const [menu, setMenu] = useState("home");
  const {getTotalcartvalue, token, setToken} = useContext(storeContext)
  const navigate = useNavigate();

  const logout =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  const baseUrl = process.env.BASE_URL || '/Grocery/';


  return (
    <nav className="navbar">
      <Link to='{baseUrl}' ><div className="logo">GroceryStore</div></Link>
      <ul className="navbar-menu">
        <Link to='{baseUrl}'
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <li
          onClick={() => setMenu("shop")}
          className={menu === "shop" ? "active" : ""}
        >
          <a href="#categories">Shop</a>
        </li>
        <li
          onClick={() => setMenu("products")}
          className={menu === "products" ? "active" : ""}
        >
          <a href="#food-disp">Products</a>
        </li>
        <li
          onClick={() => setMenu("deals")}
          className={menu === "deals" ? "active" : ""}
        >
          <a href="#deals">Deals of The day</a>
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <div className="navbar-search-icon">
          <Link to='/Grocery/cart'><FontAwesomeIcon icon={faBasketShopping} /></Link>
          <div className={getTotalcartvalue()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>{setShowlogin(true)}}>Sign-in</button>:
        <div className="navbar-profile">
          <CgProfile />
          <ul className="nav-profile-dropdown">
            <li onClick={()=>{navigate("/Grocery/myorders")}}><FiShoppingBag /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><FiLogOut /><p>Logout</p></li>
          </ul>
          </div>
          }
        
      </div>
    </nav>
  );
};

export default Navbar;
