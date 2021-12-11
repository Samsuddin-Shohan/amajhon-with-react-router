import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => console.log(data));
    },[]);

    return (
        <div className='shopping-section'>
            <div className='product-section'>
                <h1>This is product</h1>
            </div>
            <div className='cart-section'>
                <h1>this is cart</h1>
            </div>
        </div>
    );
};

export default Shop;