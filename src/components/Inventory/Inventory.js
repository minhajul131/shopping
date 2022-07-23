import React from 'react';

const Inventory = () => {

    const handelAddProduct =()=> {
        const product = {}
        fetch('http://localhost:3200/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
    }
    return (
        <div>
            <form action ="">
                <p><span>Name: </span><input type="text" /></p>
                <p><span>Price: </span><input type="text" /></p>
                <p><span>Quantity: </span><input type="text" /></p>
                <p><span>Product Image:</span><input type="file" /></p>
            <button onClick={handelAddProduct}>Add Product</button>
            </form>
            
        </div>
    );
};

export default Inventory;