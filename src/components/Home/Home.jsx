import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Products from '../../page/Products/Products';
import AllProducts from '../../page/allproducts/AllProducts';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <AllProducts></AllProducts>
        </div>
    );
}

export default Home;
