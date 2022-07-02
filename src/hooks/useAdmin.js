import { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://limitless-fortress-72775.herokuapp.com/user/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                })
        }
    }, [user?.email])
    return [admin];
};

export default useAdmin;