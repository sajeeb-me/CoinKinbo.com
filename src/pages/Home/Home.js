import React from 'react';
import { useNavigate } from 'react-router-dom';
import Video from '../../assets/video/background.mp4';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center h-full'>
            <video autoPlay loop muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-100'
                }}
            >
                <source src={Video} type='video/mp4' />
            </video>
            <div className='App'>
                <h1 className='text-5xl font-bold'>Welcome to CoinKinbo</h1>
                <button onClick={() => navigate('/coins')} className='my-4 btn btn-primary btn-outline'>Explore Coins</button>
            </div>
        </div >
    );
};

export default Home;