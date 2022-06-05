import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';

const DetailsOfCoin = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [coin, id])

    return (
        <div className='text-left px-[100px] flex items-center min-h-[90vh]'>
            <div>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                        <p><small className='bg-slate-800 px-3 py-1 rounded-md'>Rank#{coin.market_cap_rank}</small></p>
                        <div className='flex gap-2 my-3'>
                            <img src={coin.image?.thumb} alt="" />
                            <p className='text-xl font-semibold'>{coin.name} ({coin.symbol})</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='text-4xl font-semibold'>${(coin.market_data?.current_price?.usd)?.toLocaleString("en-US")}</p>
                            <p className={`flex justify-center items-center ${coin.market_data?.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-700'} font-semibold`}>{coin.market_data?.price_change_percentage_24h >= 0 ? <BsArrowUpShort className="h-5 w-5 text-green-500" /> : <BsArrowDownShort className="h-5 w-5 text-red-500" />}{(coin.market_data?.price_change_percentage_24h)?.toFixed(2)}%</p>
                        </div>
                        <div className='flex gap-3 my-1 opacity-50'>
                            <p><small>24h High: ${(coin.market_data?.high_24h?.usd)?.toLocaleString("en-US")}</small></p>
                            <p><small>24h Low: ${(coin.market_data?.low_24h?.usd)?.toLocaleString("en-US")}</small></p>
                        </div>
                        <div className='flex items-end gap-3'>
                            <button
                                // onClick={() => addToCart(coin)} 
                                className='border border-green-500 rounded-md py-2 px-10 hover:bg-green-500 my-3 duration-300 ease-in'>Add to cart</button>
                            <Link to='/coins' className='font-semibold pb-3 opacity-60 hover:underline hover:opacity-100 duration-200 ease-in'><small>Back to Coin list</small></Link>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold opacity-80'>Info </h2>
                        <div className='grid grid-cols-2 gap-5 opacity-80'>
                            <div>
                                <div className='flex justify-between py-3 border-b'>
                                    <p>Market Cap </p>
                                    <p className='font-medium'>${(coin.market_data?.market_cap?.usd)?.toLocaleString("en-US")}</p>
                                </div>
                                <div className='flex justify-between py-3 border-b'>
                                    <p>24h Trading Vol </p>
                                    <p className='font-medium'>${(coin.market_data?.total_volume?.usd)?.toLocaleString("en-US")}</p>
                                </div>
                                <div className='flex justify-between py-3 border-b'>
                                    <p>F.D.V</p>
                                    <p className='font-medium'>${(coin.market_data?.fully_diluted_valuation?.usd ? coin.market_data?.fully_diluted_valuation?.usd : 'Not found')?.toLocaleString("en-US")}</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between py-3 border-b'>
                                    <p>Circulating Supply</p>
                                    <p className='font-medium'>{(coin.market_data?.circulating_supply)?.toLocaleString("en-US")}</p>
                                </div>
                                <div className='flex justify-between py-3 border-b'>
                                    <p>Total Supply</p>
                                    <p className='font-medium'>{(coin.market_data?.total_supply)?.toLocaleString("en-US")}</p>
                                </div>
                                <div className='flex justify-between py-3 border-b'>
                                    <p>Max Supply</p>
                                    <p className='font-medium'>{(coin.market_data?.max_supply ? coin.market_data?.max_supply : 'Not found')?.toLocaleString("en-US")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='text-xl font-bold my-2'>What is {coin.name} ?</h1>
                    <p className='text-justify opacity-70 font-light'> {(coin.description?.en)?.slice(0, 500)}. </p>
                </div>
            </div>
        </div>
    );
};

export default DetailsOfCoin;