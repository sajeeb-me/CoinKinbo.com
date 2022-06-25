import React, { useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import auth from '../../authentication/firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteCart } from '../../utilities/localStorageDB';

const CheckoutForm = ({ cart, grandTotal, user, refetch }) => {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)
    const [transID, setTransID] = useState('')
    const date = new Date();

    const name = user?.displayName
    const email = user?.email
    const purchasedCoins = cart;
    // console.log(...purchasedCoins);


    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price: parseInt(grandTotal) }),
        })
            .then(res => {
                // console.log(res)
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('accessToken')
                    signOut(auth)
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [navigate, grandTotal]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '');
        setPaymentSuccess('');

        // confirm payment  
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name,
                        email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError)
            setProcessing(false);
        }
        else {
            setCardError('')
            // console.log(paymentIntent);
            setTransID(paymentIntent.id);
            setPaymentSuccess('Congratulations! Your payment is completed.')

            // payment information 
            const payment = {
                coins: [...purchasedCoins],
                price: grandTotal,
                name,
                email,
                date,
                transitionId: paymentIntent.id,
            }
            // console.log(payment)
            fetch(`http://localhost:5000/order`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    setProcessing(false);
                    deleteCart();
                    refetch();
                    toast.success('Payment successful!')
                    // console.log(data);
                })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className='border p-3 rounded-lg'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex mt-8'>
                    <button
                        type="submit"
                        className={`btn btn-primary btn-sm rounded ${processing && 'loading'}`}
                        disabled={!stripe || !clientSecret || processing || paymentSuccess}
                    >
                        {paymentSuccess ? 'Paid' : 'Pay now'}
                    </button>
                    {
                        paymentSuccess && <button onClick={() => navigate('/orders')} className='btn btn-link btn-sm'>Go to My Orders</button>
                    }
                </div>
            </form >
            <article>
                <p className='text-red-600 mt-2'>{cardError && `${cardError.type} : ${cardError.message}`}</p>
                {paymentSuccess && <p className='text-secondary'>
                    {paymentSuccess}
                    <br />
                    <span className='text-sm'>We've received your payment. Transition id: <span className='font-bold'>{transID}.</span> Please check your <span className='font-bold'>order summary</span> for further information.</span>
                </p>}
            </article>
            <article className='xl:absolute bottom-5 left-0 xl:mx-5'>
                <p>
                    <small>
                        <b>Note:</b> Please double check all the information before pay. Payment won't be refundable.
                    </small>
                </p>
            </article>
        </>
    );
};

export default CheckoutForm;