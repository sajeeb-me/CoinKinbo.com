import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageNotFoundImage from '../../assets/images/page-not-found-removebg.png';

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <section className='flex justify-center mt-10'>
            <div className='flex flex-col justify-center items-center'>
                <img src={pageNotFoundImage} alt="" />
                <button onClick={() => navigate('/coins')} className='btn btn-error btn-outline text-base-100'>Go to Coin List</button>
            </div>
        </section>
    );
};

export default NotFoundPage;