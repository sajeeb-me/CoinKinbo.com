import React from 'react';

const RowOfAllOrders = ({ order, index }) => {

    // console.log(order);

    const { coins, date, price, transitionId } = order;

    return (
        <>
            <tr className='hover'>
                <td>{index + 1}</td>
                <td className='relative'>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex="0" className="">
                            {
                                coins.slice(0, 1).map(coin => <span>{coin.name}... </span>)
                            }
                        </label>
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
                <td className='hidden lg:table-cell'>{date}</td>
                <td>
                    {
                        !order.paid ?
                            <p className='text-sm'>Pending</p>
                            :
                            <p className='text-secondary-focus font-medium text-sm'>Delivered</p>
                    }
                </td>
                <td className='hidden lg:table-cell'>{transitionId}</td>
            </tr>
        </>
    );
};

export default RowOfAllOrders;