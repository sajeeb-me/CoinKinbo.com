import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../authentication/firebase.init';

const MyPortfolio = () => {
    const [user] = useAuthState(auth)
    // console.log(user);
    return (
        <section className='px-4'>
            <article className='text-center text-xl'>
                <h1>Welcome to the portfolio of</h1>
                <h1 className='text-4xl lg:text-6xl uppercase font-bold text-primary-focus'>{user.displayName}</h1>
                <p>Let's make your portfolio enrich with more world revolutionary coin's!</p>
            </article>
        </section>
    );
};

export default MyPortfolio;