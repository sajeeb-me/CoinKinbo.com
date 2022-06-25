import React from 'react';

const RowToGetAllOrders = ({ order, index }) => {

    // console.log(order);

    const { coins, email, date, price, transitionId } = order;

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
                        !order.paid ?
                            <div className='flex items-center gap-2'>
                                <p className='text-sm'>Pending</p>
                                <button className='btn btn-sm btn-primary btn-outline'>Deliver</button>
                            </div>
                            :
                            <p className='text-green-600 font-semibold text-sm'>Shipped</p>
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