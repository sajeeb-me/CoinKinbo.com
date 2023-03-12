import React, { useState } from 'react';
import { toast } from 'react-toastify';

const RowToGetAllOrders = ({ order, index, refetch }) => {
    const { coins, email, date, price, transitionId } = order;
    const [deliverLoading, setDeliverLoading] = useState(false)
    const deliveryDate = new Date()
    const purchasedCoins = coins?.map(coin => coin.name)
    const purchasedQuantity = coins?.map(coin => coin.quantity)
    const purchasedPrice = coins?.map(coin => coin.current_price)


    const createWallet = purchasedCoins.map((coin, index) => {
        return {
            name: coin,
            quantity: purchasedQuantity[index],
            coinPrice: purchasedPrice[index],
            totalPrice: purchasedQuantity[index] * purchasedPrice[index],
        }
    });

    // const createWallet = { ...purchasedCoin }
    // console.log(wallet);

    const handleDeliver = id => {
        setDeliverLoading(true)
        const orderStatus = {
            emailNotification: email,
            delivered: true,
            deliveryDate
        }
        // console.log(orderStatus);
        fetch(`https://coin-kinbo-server.vercel.app/all-order/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderStatus)
        })
            .then(res => {
                if (res.status === 403) {
                    setDeliverLoading(false)
                    toast.error('Failed to ship order')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    const wallet = {
                        email,
                        coins: createWallet,
                        totalAmount: price,
                        deliveryDate,
                        transitionId,
                        orderDate: date
                    }
                    fetch(`https://coin-kinbo-server.vercel.app/update-userWallet`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify({ wallet })
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            refetch();
                            setDeliverLoading(false)
                            toast.success('Order delivered successfully')
                        })
                    // fetch(`https://coin-kinbo-server.vercel.app/update-userWallet/${email}`, {
                    //     method: 'PUT',
                    //     headers: {
                    //         'content-type': 'application/json',
                    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    //     },
                    //     body: JSON.stringify({ wallet })
                    // })
                    //     .then(res => res.json())
                    //     .then(data => {
                    //         console.log(data)
                    //         refetch();
                    //         setDeliverLoading(false)
                    //         toast.success('Order delivered successfully')
                    //     })
                }
            })
    }

    return (
        <>
            <tr className='hover'>
                <td>{index + 1}</td>
                <td className='relative'>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex="0" className="">{email}</label>
                        <section
                            tabIndex="0"
                            className="dropdown-content menu p-4 shadow bg-base-200 rounded-box ">
                            <article>
                                <section className='flex justify-between font-bold'>
                                    <p>Coin</p>
                                    <p>Price</p>
                                </section>
                                <hr className='my-1' />
                                {
                                    coins.map(coin =>
                                        <section className='flex justify-between gap-5'>
                                            <div className='flex gap-1'>
                                                <p>{coin.name}</p>
                                                <p>({coin.quantity}x)</p>
                                            </div>
                                            <p>${(coin.current_price * coin.quantity).toFixed(2)}</p>
                                        </section>)
                                }
                            </article>
                        </section>
                    </div>
                </td>
                <td>${(price).toFixed(2)}</td>
                <td>
                    {
                        !order.paymentInfo ?
                            <div className='flex items-center justify-center gap-2'>
                                <p className='italic opacity-70'>Pending</p>
                                <button
                                    onClick={() => handleDeliver(order._id)}
                                    className={`btn btn-sm btn-primary ${deliverLoading && 'loading'}`} disabled={deliverLoading}
                                >
                                    {deliverLoading ? 'Delivering' : 'Deliver'}
                                </button>
                            </div>
                            :
                            <p
                                className='text-secondary font-bold text-center'
                                title={`Delivered at ${date}`}
                            >
                                Delivered
                            </p>
                    }
                </td>
                <td className='hidden lg:table-cell text-sm'>
                    <p className='font-medium'>{date}</p>
                    <p>{transitionId}</p>
                </td>
            </tr>
        </>
    );
};

export default RowToGetAllOrders;