import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {img, name, price, seller, stock,star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

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
                <Rating   
                    initialRating={star} 
                    emptySymbol="far fa-star icon-color" 
                    fullSymbol="fas fa-star icon-color"
                    
                />
                <br />
                <button 
                onClick={() =>{props.handleAddToCart(props.product)}}
                className='regular-button shadow-lg'> {element} Add to cart</button>


            </div>
            
        </div>
    );
};

export default Product;