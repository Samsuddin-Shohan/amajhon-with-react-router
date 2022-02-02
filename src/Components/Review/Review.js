import React from 'react';
import useCart from '../../hooks/useCart/userCart';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import {deleteFromDb} from '../../utilities/fakedb';


const Review = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(item => item.key!==key);
        setCart(newCart);
        deleteFromDb(key);
    }
    return (
        <div>
        <div className='shopping-section mt-3'>
        <div className='product-section'>
        {
            cart.map(product => <ReviewItem
                key={product.key}
                product = {product}
                handleRemove = {handleRemove}
                ></ReviewItem> )
        }
        </div>
        <div className='cart-section'>
            
            <Cart cart = {cart} ></Cart>
        </div>
    </div>


        </div>
    );
};

export default Review;