import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/shop">Shop</Link>
        <Link to="/review">Review</Link>
        <Link to="/inventory">Inventory</Link>
        <button onClick={() => setLoggedInUser({})}>Sign Out</button>
      </nav>
      
    </div>
  );
};

export default Header;
