import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = cart.reduce((total, prd)=>total + prd.price, 0);
    
    let shipping = 0;
    if(totalPrice>35){
        shipping = 0;
    }else if(totalPrice>15){
        shipping = 6.99;
    }else if(totalPrice>0){
        shipping = 14.99;
    }
    const tax = totalPrice/10;

    const formatNumber = num=> {
        const pricision =num.toFixed(2);
        return Number(pricision);
    }
    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Items: {cart.length}</h4>
            <h5>Poroduct Price: {formatNumber(totalPrice)}</h5>
            <p>Shipping Cost: {shipping}</p>
            <p><small>Tax: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(totalPrice + shipping + tax)}</p>
        </div>
    );
};

export default Cart;