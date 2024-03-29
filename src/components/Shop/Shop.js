import React, { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import "../Cart/Cart";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  // const first15 = fakeData.slice(0, 15);
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://intense-fortress-38130.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const savedCart2 = [];
    for(const key in savedCart) {
      const add = products.find(product => product.key === key);
      if(add) {
        const quantity = savedCart[key];
        add.quantity = quantity;
        savedCart2.push(add)
      }
    }
    setCart(savedCart2);
    // const productKeys = Object.keys(savedCart);
    // fetch('https://intense-fortress-38130.herokuapp.com/productByKeys',{
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(productKeys)
    // })
    // .then(res => res.json())
    // .then(data => setCart(data))
  }, [products]);

  const handelProduct = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAdded);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handelProduct={handelProduct}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="cart-button">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
