import React from 'react';
import Footer from '../../components/Footer';
import Banner from './Banner';
import TableOfCoins from './TableOfCoins';

const Coins = () => {
    return (
        <div className=''>
            <Banner />
            <TableOfCoins />
            <Footer />
        </div>
    );
};

export default Coins;