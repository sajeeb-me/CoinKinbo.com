import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../authentication/firebase.init';
import PageLoading from '../../components/PageLoading';
import RowOfMyHistory from './RowOfMyHistory';

const MyHistory = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const { data: myHistory, isLoading } = useQuery('myHistory', () => fetch(`http://localhost:5000/my-wallet?email=${user?.email}`, {
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
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Coins</th>
                                <th>Total Price</th>
                                <th>Received Date</th>
                                <th className='hidden lg:table-cell'>Trans id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myHistory?.map((order, index) => <RowOfMyHistory key={order._id} order={order} index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MyHistory;