import React from 'react';

const Cart = (props) => {
   // console.log(props.cart);
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total+=product.price;
    }
    let tax = total*.05;
    let shipping = total*.02;
    let orderTotal = total + tax + shipping;


    return (
        <div>
                <div className='text-center mt-2'>
                    <h3>Order Summary</h3>
                    <p>Items Ordered: {cart.length}</p>
                </div>
                <div className='row ' >
                    <div className='col lh-sm'>
                        <p>Items:</p>
                        <p>Shipping & Handling:</p>
                        <p>Total Before Taxes:</p>
                        <p>Estimated Taxes:</p>
                        <p className='text-danger fw-bolder fs-4'>Orders Totals:</p>
                    </div>
                    <div className='col lh-sm'>
                       <p>{props.product.price}</p>
                       <p>{shipping.toFixed(2)}</p>
                       <p>{total.toFixed(2)}</p>
                       <p>{tax.toFixed(2)}</p>
                       <p className='text-danger fw-bolder fs-4'>{orderTotal.toFixed(2)}</p>
                       
                    </div>

                </div>
               

            </div>
    );
};

export default Cart;