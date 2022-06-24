import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0e9UKXLIT8vsGRYvQEWCxHR0302RSzSjpHMvYk5uIRqJXzhEfAfXsDGSM45kzJjOXyk79u1gZmsM6KSXcULlrd00vAYSRIIu');

const Payment = ({ cart }) => {
    const [user, isLoading] = useAuthState(auth);
    const username = user?.displayName

    if (isLoading) {
        return <PageLoading />
    }

    // console.log(cart);
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
        <section className='px-4 lg:px-20 my-10'>
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {/* details information */}
                <article className='p-5 bg-base-200 rounded-xl'>
                    <section>
                        <p className='text-2xl font-bold text-center mb-5 text-primary-focus'>Payment Information</p>
                    </section>
                    <section className='flex justify-between font-medium'>
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
                                <p className='font-bold'>Grand Total :</p>
                            </div>
                            <div className='text-right'>
                                <p className='font-bold'>${(grandTotal).toFixed(2)}</p>
                            </div>
                        </div>
                    </section>
                </article>

                {/* payment method */}
                <article className='p-5 bg-base-200 rounded-xl relative'>
                    <article className='mb-5'>
                        <p>Hello <strong>{username}</strong>!</p>
                        <p>You are purchasing the world revolutionary coins. Please provide the card information for make payment.</p>
                    </article>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm cart={cart} grandTotal={grandTotal} user={user} />
                    </Elements>
                </article>
            </section>
            <article className='p-5 bg-base-200 rounded-xl mt-5'>
                <section>
                    <p className='text-2xl font-bold text-center mb-5'>Purchase Information</p>
                </section>
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <article className='border p-5 rounded-lg border-dashed'>
                        <section className='flex justify-between font-bold'>
                            <p>Coin</p>
                            <p>Price</p>
                        </section>
                        <hr className='my-1' />
                        {
                            cart.map(coin =>
                                <section className='flex justify-between mb-1'>
                                    <div className='flex gap-1'>
                                        <p>{coin.name}</p>
                                        <p>({coin.quantity}x)</p>
                                    </div>
                                    <p>${(coin.current_price * coin.quantity).toFixed(2)}</p>
                                </section>)
                        }
                    </article>
                    <article className='border p-5 rounded-lg border-dashed'>
                        <p className='font-bold text-lg'>FAQ</p>
                        <article className='mt-2'>
                            <p className='font-bold'>I have paid now. Why still I didn't receive my coins?</p>
                            <p>Please notice. We always try our level best to serve you instantly. Sometimes, for some network issue it takes time.</p>
                        </article>
                        <article className='mt-2'>
                            <p className='font-bold'>How long it takes to get my coins?</p>
                            <p>Though transition time is 24h, we always try our level best to serve you instantly.</p>
                        </article>
                    </article>
                </section>
            </article>
        </section>
    );
};

export default Payment;