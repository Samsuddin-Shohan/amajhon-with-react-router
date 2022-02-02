import React from 'react';

const Cart = (props) => {
   // console.log(props.cart);
    const {cart} = props;
    let total = 0;
    let totalQantity  = 0;
   
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total+=(product.price*product.quantity);
        totalQantity+=product.quantity;
    }
    let tax = total*.05;
    let shipping = total*.02;
    let orderTotal = total + tax + shipping;
   


    return (
        <div>
                <div className='text-center mt-2'>
                    <h3>Order Summary</h3>
                    <p>Items Ordered: {totalQantity}</p>
                </div>
                <div className=''>
                <div className='row justify-content-center align-items-center
                ' >
                    <div className='col '>
                        <p>Items:</p>
                        <p>Shipping & Handling:</p>
                        <p>Total Before Taxes:</p>
                        <p>Estimated Taxes:</p>
                        <p className='text-danger fw-bolder fs-4'>Orders Totals:</p>
                    </div>
                    <div className='col '>
                       <p>{cart.length}</p>
                       <p>{shipping.toFixed(2)}</p>
                       <p>{total.toFixed(2)}</p>
                       <p>{tax.toFixed(2)}</p>
                       <p className='text-danger fw-bolder fs-4'>{orderTotal.toFixed(2)}</p>
                       
                    </div>

                </div>
                </div>
                
               

            </div>
    );
};

export default Cart;