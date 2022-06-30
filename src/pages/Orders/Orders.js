import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import RowOfAllOrders from './RowOfAllOrders';

const Orders = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const { data: orders, isLoading } = useQuery('order', () => fetch(`https://limitless-fortress-72775.herokuapp.com/order?email=${user?.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigate('/login')
            }
            return res.json()
        })
    )
    if (isLoading) {
        return <PageLoading />
    }

    // console.log(orders);

    return (
        <section className='bg-white p-4 lg:p-8 h-screen w-full'>
            <h1 className='text-xl font-semibold mb-5'>My Orders</h1>
            <div>
                <div className="">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Coins</th>
                                <th>Total Price</th>
                                <th className='hidden lg:table-cell'>Date</th>
                                <th>Status</th>
                                <th className='hidden lg:table-cell'>Trans id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, index) => <RowOfAllOrders key={order._id} order={order} index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Orders;