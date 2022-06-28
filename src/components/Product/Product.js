import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h2 className='product-name'>{name}</h2>
                <p>By: {seller}</p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock.</small></p>
                <button className="cart-button" onClick={()=> props.handelProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;