import React from 'react';
import { Link } from 'react-router-dom';

const ListOfCoin = ({ coin }) => {
    // console.log(coin);
    const { id, name, symbol, image, current_price, price_change_percentage_24h, total_volume, market_cap, market_cap_rank } = coin;
    return (
        <>

            <tr class="hover">
                <td >
                    <Link to={`/details/${id}`}>
                        <div className='flex items-center gap-4'>
                            <img className='w-7' src={image} alt="" />
                            <p className='uppercase font-semibold'>{symbol}</p>
                            <p>{name} </p>
                        </div>
                    </Link>
                </td>
                <td >
                    <p>${(current_price).toLocaleString("en-US")}</p>
                </td>
                <td >
                    <p className={`${price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-700'} font-semibold`}>{price_change_percentage_24h >= 0 && '+'}{(price_change_percentage_24h).toFixed(2)}%</p>
                </td>
                <td >
                    <p>${(total_volume).toLocaleString("en-US")}</p>
                </td>
                <td >
                    <p>${(market_cap).toLocaleString("en-US")}</p>
                </td>
                <td >
                    <div className='flex justify-center items-center gap-2'>
                        <Link to={`/details/${id}`} className='text-base text-secondary hover:underline'>Details</Link>
                        <button className='btn btn-sm btn-primary btn-outline'>Add to cart</button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ListOfCoin;