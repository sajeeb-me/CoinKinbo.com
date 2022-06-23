import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../App';

const ListOfCoin = ({ coin }) => {
    const navigate = useNavigate()
    const addToCart = useContext(CartContext)
    // console.log(coin);
    const { id, name, symbol, image, current_price, price_change_percentage_24h, total_volume, market_cap } = coin;
    return (
        <>
            <tr class="hover">
                <td onClick={() => navigate(`/details/${id}`)}>
                    <Link to={`/details/${id}`}>
                        <div className='flex items-center gap-5'>
                            <img className='w-7 hidden md:block' src={image} alt="" />
                            <div>
                                <p className='uppercase font-bold'>{symbol}</p>
                                {/* <p className='block md:hidden text-xs'>Vol ${(total_volume).toLocaleString("en-US")}</p> */}
                            </div>
                            <p className='hidden md:block'>{name} </p>
                        </div>
                    </Link>
                </td>
                <td onClick={() => navigate(`/details/${id}`)}>
                    <p>${(current_price).toLocaleString("en-US")}</p>
                </td>
                <td onClick={() => navigate(`/details/${id}`)}>
                    <p className={`${price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-700'} font-semibold`}>{price_change_percentage_24h >= 0 && '+'}{(price_change_percentage_24h).toFixed(2)}%</p>
                </td>
                <td className='hidden lg:table-cell ' onClick={() => navigate(`/details/${id}`)}>
                    <p>${(total_volume).toLocaleString("en-US")}</p>
                </td>
                <td className='hidden lg:table-cell ' onClick={() => navigate(`/details/${id}`)}>
                    <p>${(market_cap).toLocaleString("en-US")}</p>
                </td>
                <td>
                    <div className='flex justify-center items-center gap-2'>
                        <Link
                            to={`/details/${id}`}
                            className='text-base text-secondary hover:underline hidden md:block'
                        >
                            Details
                        </Link>
                        <button
                            onClick={() => addToCart(coin)}
                            className='btn btn-xs md:btn-sm btn-primary btn-outline'
                        >
                            Add <span className='ml-1 hidden md:inline'>to cart</span>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ListOfCoin;