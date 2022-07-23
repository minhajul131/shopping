import React, { useContext } from "react";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    
    <div className="header">
      <a href="/">
        <img src={logo} alt="" />
      </a>

      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="/inventory">Inventory</a>
        <button onClick={() => setLoggedInUser({})}>Sign Out</button>
      </nav>
      
    </div>
  );
};

export default Header;
