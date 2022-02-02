import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,img,price,key} = props.product;
    const {handleRemove} = props;
    return (
        <div>
        <div className='product-list'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='product-description'>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>${price}</p> 
            <button onClick={()=>handleRemove(key)} className='regular-button'> Remove</button>


        </div>
        
    </div>
        </div>
    );
};

export default ReviewItem;