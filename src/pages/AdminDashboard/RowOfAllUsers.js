import React from 'react';
import { toast } from 'react-toastify';

const RowOfAllUsers = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://coin-kinbo-server.vercel.app/user/admin/${email}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made and admin!')
                }
            })
    }

    return (
        <tr className='hover text-xs lg:text-base'>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td className='text-right'>{
                role ||
                <button onClick={makeAdmin} className="btn btn-xs lg:btn-sm btn-primary text-white">Make admin</button>
            }</td>
        </tr>
    );
};

export default RowOfAllUsers;