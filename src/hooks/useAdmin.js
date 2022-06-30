import { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(false);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            setIsAdminLoading(true);
            fetch(`http://localhost:5000/user/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setIsAdminLoading(false);
                })
        }
    }, [user, user?.email])
    return [admin, isAdminLoading];
};

export default useAdmin;