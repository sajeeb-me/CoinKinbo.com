import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import CartDetails from './CartDetails';
import Receipt from './Receipt';
import './Cart.css'

const Carts = ({ cart, refetch }) => {
    return (
        <div className='px-4 lg:px-20 mt-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2 m-5'>
                    <h1 className='text-3xl lg:text-5xl font-bold opacity-20'>Order Summary</h1>
                    <Link to='/coins' className='flex items-center justify-end gap-2 pr-3 text-primary font-semibold opacity-50 hover:opacity-100 duration-200 ease-in'>
                        <p>Add more coin</p>
                        <BsArrowRight className="text-lg" />
                    </Link>
                    <div className='container p-1 lg:p-5 border rounded-xl h-[420px] overflow-y-auto'>
                        <table className="table w-full">
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
                                    cart?.map(coin => <CartDetails key={coin.id} coin={coin} refetch={refetch}></CartDetails>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className='m-5'>
                        <h1 className='text-3xl lg:text-5xl font-bold mb-6 opacity-20'>Receipt</h1>
                        <div className='p-5 bg-base-200 rounded-xl h-[420px]'>
                            {
                                <Receipt cart={cart} refetch={refetch}></Receipt>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;