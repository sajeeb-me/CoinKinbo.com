import React from 'react';

const Payment = ({ cart }) => {
    console.log(cart);
    let quantity = 0;
    let totalPrice = 0;
    cart.forEach(coin => {
        quantity = quantity + coin.quantity;
        totalPrice = totalPrice + coin.current_price * coin.quantity;
    })
    const tax = totalPrice * 0.05;
    const serviceCharge = totalPrice * 0.02;
    const subTotal = totalPrice + tax + serviceCharge;
    const discount = totalPrice * 0.03;
    const grandTotal = subTotal - discount;
    return (
        <div className='px-4 lg:px-20 grid grid-cols-2 mt-10 gap-5'>
            <div className='p-5 bg-base-200 rounded-xl'>
                <section className='flex justify-between font-semibold'>
                    <p>Selected Coin : {crypto.length}</p>
                    <p>Quantity : {quantity}</p>
                </section>
                <section className='my-6'>
                    <div className='flex justify-between'>
                        <div className='text-left'>
                            <p>Total Price :</p>
                            <p className='my-1'>TAX :</p>
                            <p>Service Charge :</p>
                        </div>
                        <div className='text-right'>
                            <p>${(totalPrice).toFixed(2)}</p>
                            <p className='my-1'>${(tax).toFixed(2)}</p>
                            <p>${(serviceCharge).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='flex justify-between border-y py-2 my-2'>
                        <div className='text-left'>
                            <p>Sub Total :</p>
                            <p>Discount <small>(3%)</small> :</p>
                        </div>
                        <div className='text-right'>
                            <p>${(subTotal).toFixed(2)}</p>
                            <p>${(discount).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <div className='text-left'>
                            <p className='font-semibold'>Grand Total :</p>
                        </div>
                        <div className='text-right'>
                            <p className='font-semibold'>${(grandTotal).toFixed(2)}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <h1>payment</h1>
            </div>
        </div>
    );
};

export default Payment;