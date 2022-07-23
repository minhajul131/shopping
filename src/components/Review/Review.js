import React, { useState,  } from "react";
import { useEffect } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import imgs from "../../images/giphy.gif";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const history = useNavigate() //usehistory

  const handelProceedCheckout = () => {
    history('/shipment');
  };

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    fetch('http://localhost:3200/productByKeys',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productKeys)
    })
    .then(res => res.json())
    .then(data => setCart(data))
  }, []);

  let happy;
  if (orderPlaced) {
    happy = <img src={imgs} alt="" />;
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        <h1>Cart Items: {cart.length}</h1>
        {cart.map((pd) => (
          <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd} />
        ))}
        {happy}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handelProceedCheckout} className="cart-button">
            Processed Checkout
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
