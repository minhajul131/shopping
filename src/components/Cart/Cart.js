import React from "react";

const Cart = (props) => {
const {cart} = props;
// const cart = props.cart;
  console.log(cart);
  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const product = cart[i];
  //   total = total + product.price * product.quantity || 1;
  //   console.log(total);
  // }

  // let shipping = 0;
  // if (total > 35) {
  //   shipping = 0;
  // } else if (total > 15) {
  //   shipping = 6.99;
  // } else if (total > 0) {
  //   shipping = 14.99;
  // }
  // const tax = total / 10;

  // const formatNumber = (num) => {
  //   const pricision = num.toFixed(2);
  //   return Number(pricision);
  // };
  //************* */
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total *0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    // <div>
    //   <h3>Order Summery</h3>
    //   <h4>Items: {cart.length}</h4>
    //   <h5>Poroduct Price: {formatNumber(total)}</h5>
    //   <p>Shipping Cost: {shipping}</p>
    //   <p>
    //     <small>Tax: {formatNumber(tax)}</small>
    //   </p>
    //   <p>Total Price: {formatNumber(total + shipping + tax)}</p>
    //   {props.children}
    // </div>
    <div>
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total price: {total}</p>
      <p>Total shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
      {props.children}
    </div>
  );
};

export default Cart;
