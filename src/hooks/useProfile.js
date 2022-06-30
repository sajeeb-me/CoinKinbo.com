import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useProfile = (user) => {
    const navigate = useNavigate();
    const [usersProfile, setUsersProfile] = useState({});
    const [isUserLoading, setIsUserLoading] = useState(false);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            setIsUserLoading(true)
            fetch(`https://limitless-fortress-72775.herokuapp.com/profile?email=${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log(res)
                    if (res.status === 401 || res.status === 403) {
                        // signOut(auth)
                        // localStorage.removeItem('accessToken')
                        // navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setUsersProfile(data)
                    setIsUserLoading(false)
                })
        }
    }, [navigate, user?.email])
    return [usersProfile, isUserLoading]
};

export default useProfile;