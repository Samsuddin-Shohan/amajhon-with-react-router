import React from 'react';
import useCart from '../../hooks/useCart/userCart';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import {clearTheCart, deleteFromDb} from '../../utilities/fakedb';
import { useHistory } from 'react-router-dom';


const Review = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    const history = useHistory()
    const handleRemove = key => {
        const newCart = cart.filter(item => item.key!==key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const handlePlaceOrder = ()=>{
        history.push('/placeorder');
        setCart([]);
        clearTheCart();
       
     
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
            
            <Cart cart = {cart} >
                <button onClick={handlePlaceOrder} className='regular-button'>Place Order</button>
            </Cart>
        </div>
    </div>


        </div>
    );
};

export default Review;