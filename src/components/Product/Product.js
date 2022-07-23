import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>

      <div>
        <h2 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h2>
        <p>By: {seller}</p>
        <p>Price: {price}</p>
        <p>
          <small>Only {stock} left in stock.</small>
        </p>
        {props.showAddToCart && (
          <button
            className="cart-button"
            onClick={() => props.handelProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
