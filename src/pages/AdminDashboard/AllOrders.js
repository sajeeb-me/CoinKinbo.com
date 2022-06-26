import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import RowToGetAllOrders from './RowToGetAllOrders';

const AllOrders = () => {
    const navigate = useNavigate();

    const { data: orders, isLoading, refetch } = useQuery('order', () => fetch(`http://localhost:5000/all-order`, {
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
                                <th>Email</th>
                                <th>Total Price</th>
                                <th className='text-center'>Status</th>
                                <th className='hidden lg:table-cell text-center'>Date &amp; Trans id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, index) => <RowToGetAllOrders key={order._id} order={order} index={index} refetch={refetch} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllOrders;