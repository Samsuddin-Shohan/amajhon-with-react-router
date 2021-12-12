import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {img, name, price, seller, stock} = props.product;
    // console.log(name, price);
    return (
        <div className='product-list'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-description'>
                <h3>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button 
                onClick={() =>{props.handleAddToCart(props.product)}}
                className='regular-button shadow-lg'>Add to cart</button>


            </div>
            
        </div>
    );
};

export default Product;