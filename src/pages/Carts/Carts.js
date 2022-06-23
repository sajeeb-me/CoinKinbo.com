import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowBarRight } from 'react-icons/bs';
import CartDetails from './CartDetails';

const Carts = ({ cart }) => {
    return (
        <div className='px-4 lg:px-20 mt-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2 m-5'>
                    <h1 className='text-3xl lg:text-5xl font-bold opacity-20'>Order Summary</h1>
                    <Link to='/coins' className='flex items-center justify-end gap-2 pr-3 text-primary font-semibold opacity-50 hover:opacity-100 duration-200 ease-in'>
                        <BsArrowBarRight className="h-5 w-5" />
                        <p>Add more coin</p>
                    </Link>
                    <div className='container p-1 lg:p-5 border rounded-xl h-[420px] overflow-y-auto'>
                        <table class="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th >Name</th>
                                    <th >Price</th>
                                    <th >Quantity</th>
                                    <th >Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart?.map(coin => <CartDetails key={coin.id} coin={coin}></CartDetails>)
                                }
                            </tbody>
                        </table>

                        {/* <div className='grid grid-cols-6 items-center py-2 bg-slate-800 border border-transparent rounded-t-lg pl-2 font-semibold'>
                            <p className='w-2/4'>#</p>
                            <p className='text-left'>Name</p>
                            <p className='text-right'>Price</p>
                            <p className='pl-4'>Quantity</p>
                            <p className='text-right'>Total</p>
                            <p></p>
                        </div> */}
                        {
                            // crypto.map(coin => <CartDetails key={coin.id} coin={coin}></CartDetails>)
                        }
                    </div>
                </div>
                <div>
                    <div className='m-5'>
                        <h1 className='text-3xl lg:text-5xl font-bold mb-6 opacity-20'>Receipt</h1>
                        <div className='p-5 border border-transparent bg-base-200 rounded-xl h-[420px] hover:border-white'>
                            {
                                // <Receipt crypto={crypto}></Receipt>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;