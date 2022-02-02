import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = (props) => {

    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState({});
    const[displayProducts, setDisplayProducts] = useState([]);
    const handleAddToCart = (product) =>{
        let newCart = [];
        const cartKeys = cart.map(item => item.key )
        if(cartKeys.includes(product.key)){
            product.quantity++;
            newCart = [...cart];
        }
        else{
            newCart = [...cart, product];
        }
       
        setCart(newCart);
        setProduct(product);
        addToDb(product.key);
    }

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
            setDisplayProducts(data);
        });
    },[]);

    useEffect(() =>{       
        if(products.length!==0){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => key === product.key);
                //console.log(key, addedProduct);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
               
            }
            setCart(storedCart);
        }
        
    },[products]);
    const handleSearch = event =>{
       // console.log(event.target.value);
       let searchText = event.target.value;
       const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
       //console.log(matchedProducts.length);
    }
    return (
        <div>
            <div className='search-container'>
                <input type="text"
                onChange={handleSearch}
                placeholder='Search Product'
                />
            </div>

            <div className='shopping-section mt-3'>
                <div className='product-section'>
                    {
                        displayProducts.map(product => <Product 
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
        </div>
        
    );
};

export default Shop;