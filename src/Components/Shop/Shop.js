import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    return (
        <div className='shopping-section'>
            <div className='product-section'>
                {
                    products.map(product => <Product product = {product}></Product> )
                }
            </div>
            <div className='cart-section'>
                <h1>this is cart</h1>
            </div>
        </div>
    );
};

export default Shop;