import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = (props) => {

    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState({});
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        setProduct(product);
    }

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    return (
        <div className='shopping-section mt-3'>
            <div className='product-section'>
                {
                    products.map(product => <Product 
                        product = {product} 
                        handleAddToCart = {handleAddToCart}
                        key = {product.key}>
                        </Product> )
                }
            </div>
            <div className='cart-section'>
                
                <Cart cart = {cart} product = {product}></Cart>
               

            </div>
        </div>
    );
};

export default Shop;