import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, key, price } = props.product;
  const styleR = {
    borderBottom: "1px solid black",
    marginBottom: "5px",
    paddingBottom: "5px",
    marginLeft: "100px",
  };
  return (
    <div style={styleR}>
      <h3 className="product-name">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>
        <small>TK: {price}</small>
      </p>
      <button className="cart-button" onClick={() => props.removeProduct(key)}>
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
