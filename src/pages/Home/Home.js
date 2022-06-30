import React from 'react';
import { useNavigate } from 'react-router-dom';
import Video from '../../assets/video/background.mp4';

const Home = () => {
    const navigate = useNavigate();


    return (
        <div className='text-white'>
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
            <div className='py-14 px-4 lg:px-20'>
                <div
                    data-aos="zoom-out"
                    data-aos-delay="3000"
                    data-aos-duration="2000"
                    className='flex justify-end'>
                    <div className='bg-accent p-5 bg-opacity-20 rounded-lg w-52'>
                        <p className='font-semibold'>Today's note:</p>
                        <div className='text-sm'>
                            <p className='my-2'>Bitcoin bounces to $30.7K as analyst presents Stock-to-Flow BTC price model rehash.</p>
                            <a
                                href="https://cointelegraph.com/news/bitcoin-bounces-to-30-7k-as-analyst-presents-stock-to-flow-btc-price-model-rehash"
                                target='_blank'
                                rel="noreferrer"
                            >
                                Read now
                            </a>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-20'>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                        className='text-3xl lg:text-5xl font-semibold space-y-3 tracking-wide'>
                        <p>Buy top traded</p>
                        <p>Cryptocurrencies</p>
                        <p>from us!</p>
                    </div>
                    <button
                        data-aos="zoom-in"
                        data-aos-delay="2200"
                        data-aos-duration="2000"
                        onClick={() => navigate('/coins')}
                        className='my-4 btn btn-accent tracking-wider'>
                        Explore Coins now
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Home;