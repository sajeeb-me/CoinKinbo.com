import React from 'react';
import { useQuery } from 'react-query'
import PageLoading from '../../components/PageLoading';
import ListOfCoin from './ListOfCoin';


const TableOfCoins = () => {

    const { data: coins, isLoading } = useQuery('allCoins', () => fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false').then(res => res.json()))

    // console.log(coins);

    if (isLoading) {
        return <PageLoading />
    }

    return (
        <div className='px-4 mb-10 -mt-10 relative z-20'>
            <div className='flex justify-between items-center bg-base-200 pt-5 pb-3 px-4 lg:px-10 rounded-t-lg'>
                <p className='bg-primary px-2 py-3 rounded-md bg-opacity-20 text-sm'>All Cryptos</p>
                <input
                    type="text"
                    placeholder="Search Coin Name"
                    class="input input-bordered lg:w-full max-w-xs"
                />
            </div>
            {
                coins &&
                <div >
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th >Name</th>
                                <th >Price</th>
                                <th className='table-cell lg:hidden'>24h Chg%</th>
                                <th className='hidden lg:table-cell'>24h Change</th>
                                <th className='hidden lg:table-cell text-center'>24h Volume</th>
                                <th className='hidden lg:table-cell text-center'>Market Cap</th>
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coins.map(coin => <ListOfCoin key={coin.id} coin={coin} />)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default TableOfCoins;