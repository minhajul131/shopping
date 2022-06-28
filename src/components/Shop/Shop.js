import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import '../Cart/Cart'
import Cart from '../Cart/Cart';

const Shop = () => {
    const first15 = fakeData.slice(0,15);
    const [products, setProduct] = useState(first15);
    const [cart, setCart] = useState([]);

    const handelProduct = (product) => {
        console.log({product});
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product handelProduct={handelProduct} product={pd}></Product>)
                }   
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>

            </div>
            
            
        </div>
    );
};

export default Shop;